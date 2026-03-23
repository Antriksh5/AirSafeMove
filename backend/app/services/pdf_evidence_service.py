"""
Extract crime and census-religion evidence from PDFs in backend/dataset using PyMuPDF + Gemini.
Parsed rows are cached under dataset_cache/ so the model is not re-run on every request.
"""

from __future__ import annotations

import hashlib
import json
import logging
import os
import re
import time
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

from dotenv import load_dotenv

_BACKEND_ENV = Path(__file__).resolve().parent.parent.parent / ".env"
load_dotenv(_BACKEND_ENV)

logger = logging.getLogger(__name__)

DATASET_DIR = Path(__file__).resolve().parent.parent.parent / "dataset"
CACHE_DIR = Path(__file__).resolve().parent.parent.parent / "dataset_cache"
CRIME_CACHE = CACHE_DIR / "pdf_crime_evidence.json"
RELIGION_CACHE = CACHE_DIR / "pdf_religion_evidence.json"

CHUNK_MAX_CHARS = 80_000

_COOLDOWN_SECONDS = 600  # 10 minutes before retrying exhausted models
_cooldown_until: float = 0.0  # epoch timestamp; skip Gemini calls until this passes

_mem_crime: Optional[List[Dict[str, Any]]] = None
_mem_religion: Optional[List[Dict[str, Any]]] = None


def _pdf_signature() -> str:
    parts: List[str] = []
    for path in sorted(DATASET_DIR.glob("*.pdf")):
        stat = path.stat()
        parts.append(f"{path.name}:{stat.st_size}:{stat.st_mtime_ns}")
    return hashlib.sha256("|".join(parts).encode("utf-8")).hexdigest()


def _classify_pdf(name: str) -> str:
    lower = name.lower()
    if any(k in lower for k in ("crime", "ipc", "ncrb", "police", "murder", "violent", "sll")):
        return "crime"
    if any(k in lower for k in ("religion", "religious")):
        return "religion"
    if "census" in lower and "religion" in lower:
        return "religion"
    return ""


def _extract_pdf_pages(path: Path) -> List[str]:
    import fitz  # PyMuPDF

    doc = fitz.open(path)
    try:
        return [page.get_text() for page in doc]
    finally:
        doc.close()


def _chunk_pages(pages: List[str], max_chars: int = CHUNK_MAX_CHARS) -> List[str]:
    """Group pages into text chunks that stay under *max_chars*."""
    chunks: List[str] = []
    buf: List[str] = []
    buf_size = 0
    for page_text in pages:
        page_len = len(page_text)
        if buf_size + page_len > max_chars and buf:
            chunks.append("\n".join(buf))
            buf = []
            buf_size = 0
        buf.append(page_text)
        buf_size += page_len
    if buf:
        chunks.append("\n".join(buf))
    return chunks


_GEMINI_MODELS = ["gemini-2.5-flash", "gemini-1.5-flash-8b"]
_MAX_RETRIES = 2
_RETRY_BASE_DELAY = 20
_MAX_OUTPUT_TOKENS = 65536
_exhausted_models: set = set()


def _repair_truncated_json(raw: str) -> Optional[Dict[str, Any]]:
    """
    Attempt to salvage a truncated JSON response by extracting every
    complete record object from a partially-returned ``{"records": [...]}``
    structure.
    """
    records_match = re.search(r'"records"\s*:\s*\[', raw)
    if not records_match:
        return None

    arr_start = records_match.end()
    complete_records: List[Dict[str, Any]] = []
    depth = 0
    obj_start: Optional[int] = None

    for i in range(arr_start, len(raw)):
        ch = raw[i]
        if ch == '{':
            if depth == 0:
                obj_start = i
            depth += 1
        elif ch == '}':
            depth -= 1
            if depth == 0 and obj_start is not None:
                fragment = raw[obj_start:i + 1]
                try:
                    complete_records.append(json.loads(fragment))
                except json.JSONDecodeError:
                    pass
                obj_start = None

    if complete_records:
        logger.info(
            "Repaired truncated JSON: salvaged %d complete record(s)",
            len(complete_records),
        )
        return {"records": complete_records}
    return None


def _gemini_json(system: str, user_text: str) -> Optional[Dict[str, Any]]:
    global _cooldown_until

    if time.time() < _cooldown_until:
        logger.info("Gemini cooldown active (%.0fs left), skipping PDF chunk", _cooldown_until - time.time())
        return None

    api_key = os.getenv("GEMINI_API_KEY") or os.getenv("GOOGLE_API_KEY")
    if not api_key:
        logger.warning(
            "GEMINI_API_KEY (or GOOGLE_API_KEY) not set in backend/.env; PDF evidence skipped"
        )
        return None
    import google.generativeai as genai

    genai.configure(api_key=api_key)

    prompt = f"""{system}

--- DOCUMENT TEXT (may be partial) ---
{user_text}
"""
    response = None
    for model_name in _GEMINI_MODELS:
        if model_name in _exhausted_models:
            continue
        gen_config = genai.types.GenerationConfig(
            temperature=0.1,
            max_output_tokens=_MAX_OUTPUT_TOKENS,
            response_mime_type="application/json",
        )
        for attempt in range(_MAX_RETRIES):
            try:
                model = genai.GenerativeModel(
                    model_name,
                    generation_config=gen_config,
                )
                response = model.generate_content(prompt)
                break
            except Exception as exc:
                exc_str = str(exc)
                if "429" in exc_str or "quota" in exc_str.lower():
                    if attempt < _MAX_RETRIES - 1:
                        delay = _RETRY_BASE_DELAY * (attempt + 1)
                        logger.warning(
                            "Rate-limited on %s (attempt %d/%d), retrying in %ds…",
                            model_name, attempt + 1, _MAX_RETRIES, delay,
                        )
                        time.sleep(delay)
                        continue
                    logger.warning("Quota exhausted for %s, skipping for this session.", model_name)
                    _exhausted_models.add(model_name)
                    response = None
                    break
                if "404" in exc_str or "not found" in exc_str.lower():
                    logger.warning("Model %s not available, skipping.", model_name)
                    _exhausted_models.add(model_name)
                    response = None
                    break
                logger.error("Gemini PDF parse failed (%s): %s", model_name, exc)
                response = None
                break
        else:
            response = None

        if response is not None:
            break

    if response is None:
        if len(_exhausted_models) >= len(_GEMINI_MODELS):
            _cooldown_until = time.time() + _COOLDOWN_SECONDS
            logger.error(
                "All Gemini models exhausted for PDF chunk; cooldown for %ds",
                _COOLDOWN_SECONDS,
            )
        else:
            logger.error("All Gemini models exhausted for PDF chunk")
        return None

    raw = getattr(response, "text", None) or ""
    if not raw and response.candidates:
        try:
            parts = response.candidates[0].content.parts
            raw = "".join(getattr(p, "text", "") for p in parts)
        except (AttributeError, IndexError, TypeError):
            raw = ""
    if not raw:
        logger.warning("Gemini returned empty response for PDF chunk")
        return None

    try:
        return json.loads(raw)
    except json.JSONDecodeError:
        pass

    match = re.search(r"\{[\s\S]*\}", raw)
    if match:
        try:
            return json.loads(match.group(0))
        except json.JSONDecodeError:
            pass

    repaired = _repair_truncated_json(raw)
    if repaired:
        return repaired

    logger.warning("Gemini returned unparseable JSON (%.100s…)", raw.replace("\n", " "))
    return None


CRIME_SYSTEM = """You extract structured crime statistics from ONE Indian government crime report excerpt (NCRB / IPC / SLL city-wise tables).
Return JSON: {"records": [{"city_or_area": str, "state_or_ut": str, "district": str or null, "ipc_total": number or null, "crime_rate_per_lakh": number or null, "security_score_1_10": number, "notes": str}]}
Use city_or_area for city name columns; state_or_ut for State/UT labels.
security_score_1_10: 10 = safest / lowest concern in this table; 1 = highest concern. Derive only from printed totals/rates.
Do not invent numbers: use null if absent. Extract all city/area rows visible in this excerpt."""


RELIGION_SYSTEM = """You extract district-level religion composition from census or religion PDF tables for India.
Return JSON: {"records": [{"district": str, "state_or_ut": str, "hindu_pct": number or null, "muslim_pct": number or null, "christian_pct": number or null, "sikh_pct": number or null, "buddhist_pct": number or null, "jain_pct": number or null, "other_or_not_stated_pct": number or null, "notes": str}]}
Map column headers to these keys. Percentages should sum to roughly 100 when all groups present. Use null if a column is missing. Do not invent figures."""


def _norm(s: str) -> str:
    if not s:
        return ""
    s = s.strip().lower()
    s = re.sub(r"[^a-z0-9 ]+", " ", s)
    s = re.sub(r"\s+", " ", s)
    return s.strip()


def _normalize_crime_record(rec: Dict[str, Any]) -> Dict[str, Any]:
    out = dict(rec)
    if not out.get("city_or_area"):
        for key in ("city", "city_name", "place", "area", "area_name", "urban_agglomeration"):
            val = out.get(key)
            if isinstance(val, str) and val.strip():
                out["city_or_area"] = val.strip()
                break
    if not out.get("state_or_ut"):
        for key in ("state", "state_name", "ut", "state_ut"):
            val = out.get(key)
            if isinstance(val, str) and val.strip():
                out["state_or_ut"] = val.strip()
                break
    if not out.get("district"):
        for key in ("district_name", "districts"):
            val = out.get(key)
            if isinstance(val, str) and val.strip():
                out["district"] = val.strip()
                break
    return out


def _crime_city_label(rec: Dict[str, Any]) -> str:
    r = _normalize_crime_record(rec)
    return _norm(str(r.get("city_or_area") or ""))


def _dedupe_crime_records(records: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    merged: Dict[Tuple[str, str], Dict[str, Any]] = {}
    for raw in records:
        rec = _normalize_crime_record(raw)
        city = _crime_city_label(rec)
        state = _norm(str(rec.get("state_or_ut") or ""))
        if not city and not state:
            continue
        key = (city, state)
        if key not in merged:
            merged[key] = rec
            continue
        cur = merged[key]
        try:
            a = float(cur.get("ipc_total") or 0)
        except (TypeError, ValueError):
            a = 0.0
        try:
            b = float(rec.get("ipc_total") or 0)
        except (TypeError, ValueError):
            b = 0.0
        if b > a:
            merged[key] = rec
    return list(merged.values())


def _load_or_parse_crime() -> Tuple[str, List[Dict[str, Any]]]:
    global _mem_crime
    sig = _pdf_signature()
    CACHE_DIR.mkdir(parents=True, exist_ok=True)

    if _mem_crime is not None:
        return sig, _mem_crime

    crime_paths = sorted(
        p for p in DATASET_DIR.glob("*.pdf") if _classify_pdf(p.name) == "crime"
    )

    if CRIME_CACHE.exists():
        try:
            with open(CRIME_CACHE, encoding="utf-8") as fh:
                payload = json.load(fh)
            cached_records = payload.get("records", [])
            if payload.get("signature") == sig:
                retry_after = payload.get("retry_after", 0)
                if cached_records or not crime_paths:
                    _mem_crime = cached_records
                    return sig, cached_records
                if time.time() < retry_after:
                    logger.info("Crime cache empty but retry cooldown active (%.0fs left)", retry_after - time.time())
                    _mem_crime = []
                    return sig, []
        except (json.JSONDecodeError, OSError):
            pass

    if not crime_paths:
        payload = {"signature": sig, "records": []}
        with open(CRIME_CACHE, "w", encoding="utf-8") as fh:
            json.dump(payload, fh, ensure_ascii=True)
        _mem_crime = []
        return sig, []

    if time.time() < _cooldown_until:
        logger.info("Gemini cooldown active, returning empty crime records")
        _mem_crime = []
        return sig, []

    _exhausted_models.clear()
    logger.info("Parsing %d crime PDFs via Gemini (page-chunked)…", len(crime_paths))
    t0 = time.time()
    all_records: List[Dict[str, Any]] = []
    for path in crime_paths:
        try:
            pages = _extract_pdf_pages(path)
        except Exception as exc:
            logger.error("Failed to read PDF %s: %s", path, exc)
            continue
        chunks = _chunk_pages(pages)
        logger.info("  %s: %d pages → %d chunk(s)", path.name, len(pages), len(chunks))
        for idx, chunk in enumerate(chunks):
            if time.time() < _cooldown_until:
                logger.info("    cooldown hit mid-parse, stopping")
                break
            header = f"=== SOURCE FILE: {path.name} (chunk {idx + 1}/{len(chunks)}) ===\n"
            parsed = _gemini_json(CRIME_SYSTEM, header + chunk)
            batch: List[Dict[str, Any]] = []
            if isinstance(parsed, dict) and isinstance(parsed.get("records"), list):
                batch = [r for r in parsed["records"] if isinstance(r, dict)]
            for row in batch:
                row = _normalize_crime_record(row)
                row["source_pdf"] = path.name
            all_records.extend(batch)
            logger.info("    chunk %d/%d → %d rows", idx + 1, len(chunks), len(batch))

    records = _dedupe_crime_records(all_records)
    elapsed = round(time.time() - t0, 1)
    logger.info("Crime PDF parsing done: %d records in %.1fs", len(records), elapsed)

    if records:
        with open(CRIME_CACHE, "w", encoding="utf-8") as fh:
            json.dump({"signature": sig, "records": records}, fh, ensure_ascii=True)
    else:
        logger.warning(
            "All %d crime PDFs produced 0 records — persisting with retry cooldown.",
            len(crime_paths),
        )
        with open(CRIME_CACHE, "w", encoding="utf-8") as fh:
            json.dump(
                {"signature": sig, "records": [], "retry_after": time.time() + _COOLDOWN_SECONDS},
                fh, ensure_ascii=True,
            )

    _mem_crime = records
    return sig, records


def _normalize_religion_record(rec: Dict[str, Any]) -> Dict[str, Any]:
    out = dict(rec)
    if not out.get("district"):
        for key in ("district_name", "dist", "name"):
            val = out.get(key)
            if isinstance(val, str) and val.strip():
                out["district"] = val.strip()
                break
    if not out.get("state_or_ut"):
        for key in ("state", "state_name", "ut"):
            val = out.get(key)
            if isinstance(val, str) and val.strip():
                out["state_or_ut"] = val.strip()
                break
    return out


def _dedupe_religion_records(records: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    merged: Dict[Tuple[str, str], Dict[str, Any]] = {}
    for raw in records:
        rec = _normalize_religion_record(raw)
        d = _norm(str(rec.get("district") or ""))
        s = _norm(str(rec.get("state_or_ut") or ""))
        if not d:
            continue
        key = (d, s)
        if key not in merged:
            merged[key] = rec
    return list(merged.values())


def _load_or_parse_religion() -> Tuple[str, List[Dict[str, Any]]]:
    global _mem_religion
    sig = _pdf_signature()
    CACHE_DIR.mkdir(parents=True, exist_ok=True)

    if _mem_religion is not None:
        return sig, _mem_religion

    religion_paths = sorted(
        p for p in DATASET_DIR.glob("*.pdf") if _classify_pdf(p.name) == "religion"
    )

    if RELIGION_CACHE.exists():
        try:
            with open(RELIGION_CACHE, encoding="utf-8") as fh:
                payload = json.load(fh)
            cached_records = payload.get("records", [])
            if payload.get("signature") == sig:
                retry_after = payload.get("retry_after", 0)
                if cached_records or not religion_paths:
                    _mem_religion = cached_records
                    return sig, cached_records
                if time.time() < retry_after:
                    logger.info("Religion cache empty but retry cooldown active (%.0fs left)", retry_after - time.time())
                    _mem_religion = []
                    return sig, []
        except (json.JSONDecodeError, OSError):
            pass

    if not religion_paths:
        payload = {"signature": sig, "records": []}
        with open(RELIGION_CACHE, "w", encoding="utf-8") as fh:
            json.dump(payload, fh, ensure_ascii=True)
        _mem_religion = []
        return sig, []

    if time.time() < _cooldown_until:
        logger.info("Gemini cooldown active, returning empty religion records")
        _mem_religion = []
        return sig, []

    _exhausted_models.clear()
    logger.info("Parsing %d religion PDFs via Gemini (page-chunked)…", len(religion_paths))
    t0 = time.time()
    all_records: List[Dict[str, Any]] = []
    for path in religion_paths:
        try:
            pages = _extract_pdf_pages(path)
        except Exception as exc:
            logger.error("Failed to read PDF %s: %s", path, exc)
            continue
        chunks = _chunk_pages(pages)
        logger.info("  %s: %d pages → %d chunk(s)", path.name, len(pages), len(chunks))
        for idx, chunk in enumerate(chunks):
            if time.time() < _cooldown_until:
                logger.info("    cooldown hit mid-parse, stopping")
                break
            header = f"=== SOURCE FILE: {path.name} (chunk {idx + 1}/{len(chunks)}) ===\n"
            parsed = _gemini_json(RELIGION_SYSTEM, header + chunk)
            batch: List[Dict[str, Any]] = []
            if isinstance(parsed, dict) and isinstance(parsed.get("records"), list):
                batch = [r for r in parsed["records"] if isinstance(r, dict)]
            for row in batch:
                row = _normalize_religion_record(row)
                row["source_pdf"] = path.name
            all_records.extend(batch)
            logger.info("    chunk %d/%d → %d rows", idx + 1, len(chunks), len(batch))

    records = _dedupe_religion_records(all_records)
    elapsed = round(time.time() - t0, 1)
    logger.info("Religion PDF parsing done: %d records in %.1fs", len(records), elapsed)

    if records:
        with open(RELIGION_CACHE, "w", encoding="utf-8") as fh:
            json.dump({"signature": sig, "records": records}, fh, ensure_ascii=True)
    else:
        logger.warning(
            "All %d religion PDFs produced 0 records — persisting with retry cooldown.",
            len(religion_paths),
        )
        with open(RELIGION_CACHE, "w", encoding="utf-8") as fh:
            json.dump(
                {"signature": sig, "records": [], "retry_after": time.time() + _COOLDOWN_SECONDS},
                fh, ensure_ascii=True,
            )

    _mem_religion = records
    return sig, records


def _best_crime_record(
    city_name: str,
    state: str,
    district_norms: List[str],
) -> Optional[Dict[str, Any]]:
    _, records = _load_or_parse_crime()
    if not records:
        return None
    state_n = _norm(state)
    city_n = _norm(city_name)
    best: Optional[Tuple[float, Dict[str, Any]]] = None
    for rec in records:
        rec = _normalize_crime_record(rec)
        score = 0.0
        rs = _norm(str(rec.get("state_or_ut") or ""))
        if rs and (rs == state_n or state_n in rs or rs in state_n):
            score += 3.0
        dist = _norm(str(rec.get("district") or ""))
        if dist and dist in district_norms:
            score += 5.0
        ca = _crime_city_label(rec)
        if ca and (city_n in ca or ca in city_n or any(a and a in ca for a in district_norms)):
            score += 4.0
        if score == 0.0 and ca:
            continue
        if best is None or score > best[0]:
            best = (score, rec)
    if best and best[0] >= 4.0:
        return best[1]
    if best and best[0] > 0:
        return best[1]
    return None


def _best_religion_record(
    state: str,
    district_norms: List[str],
) -> Optional[Dict[str, Any]]:
    _, records = _load_or_parse_religion()
    if not records:
        return None
    state_n = _norm(state)
    best: Optional[Tuple[float, Dict[str, Any]]] = None
    for rec in records:
        rec = _normalize_religion_record(rec)
        score = 0.0
        rs = _norm(str(rec.get("state_or_ut") or ""))
        if rs and (rs == state_n or state_n in rs or rs in state_n):
            score += 2.0
        dist = _norm(str(rec.get("district") or ""))
        if dist and dist in district_norms:
            score += 6.0
        if dist and any(dist in dn or dn in dist for dn in district_norms if dn):
            score += 4.0
        if best is None or score > best[0]:
            best = (score, rec)
    if best and best[0] >= 6.0:
        return best[1]
    if best and best[0] >= 4.0:
        return best[1]
    return None


def get_crime_section_for_city(
    city_name: str,
    state: str,
    district_norms: List[str],
    family_note: str,
) -> Optional[Dict[str, Any]]:
    """Returns crime_rate dict or None if no PDF evidence."""
    rec = _best_crime_record(city_name, state, district_norms)
    if not rec:
        return None
    try:
        sec = int(float(rec.get("security_score_1_10", 6)))
    except (TypeError, ValueError):
        sec = 6
    sec = max(1, min(10, sec))
    ipc = rec.get("ipc_total")
    rate = rec.get("crime_rate_per_lakh")
    notes = str(rec.get("notes") or "").strip()

    # Build a user-friendly description
    intro = (
        f"{city_name} has a security score of {sec}/10 based on reported crime data. "
    )
    if sec >= 7:
        safety_context = "This places it among the safer cities in India — a positive sign for families considering relocation."
    elif sec >= 5:
        safety_context = "Safety levels are moderate, which is typical of most Indian cities. Choosing a well-established neighbourhood or a gated society can further improve your day-to-day security."
    else:
        safety_context = "Safety requires attention in some areas. We recommend speaking with current residents and selecting a housing society with good security before finalising your move."

    stats_parts = []
    if ipc is not None:
        stats_parts.append(f"Total reported IPC cognizable crimes: {ipc}")
    if rate is not None:
        stats_parts.append(f"Crime rate per lakh population: {rate}")
    if notes:
        stats_parts.append(notes)

    stats_sentence = " — ".join(stats_parts) + "." if stats_parts else ""
    description = intro + safety_context
    if stats_sentence:
        description += " " + stats_sentence

    key_factors = [
        "Safety varies by neighbourhood — gated communities and housing societies generally offer better security.",
        "Visit the city and talk to residents or your future housing society before finalising your move.",
        f"These figures are based on official crime data for {city_name} — always check the latest NCRB report for current statistics.",
    ]

    return {
        "security_score": sec,
        "description": description,
        "key_factors": key_factors,
        "sources": _crime_sources(rec),
    }


def _crime_sources(rec: Dict[str, Any]) -> List[str]:
    return [
        "National Crime Records Bureau (NCRB) — City-wise Crime in India (IPC data)",
    ]


def get_religion_snippet_for_district(
    state: str,
    district_norms: List[str],
) -> Optional[str]:
    rec = _best_religion_record(state, district_norms)
    if not rec:
        return None
    parts: List[str] = []
    for key, label in [
        ("hindu_pct", "Hindu"),
        ("muslim_pct", "Muslim"),
        ("christian_pct", "Christian"),
        ("sikh_pct", "Sikh"),
        ("buddhist_pct", "Buddhist"),
        ("jain_pct", "Jain"),
        ("other_or_not_stated_pct", "Other / not stated"),
    ]:
        val = rec.get(key)
        if val is None:
            continue
        try:
            parts.append(f"{label}: {_float_pct(val)}")
        except (TypeError, ValueError):
            continue
    if not parts:
        return None
    return "Religion shares (from PDF census extract): " + "; ".join(parts) + "."


def _float_pct(val: Any) -> str:
    x = float(val)
    return f"{x:.1f}%"


def warm_pdf_evidence_cache() -> None:
    """Pre-parse PDFs when the server starts."""
    global _mem_crime, _mem_religion, _cooldown_until
    _mem_crime = None
    _mem_religion = None
    _cooldown_until = 0.0
    _exhausted_models.clear()
    _load_or_parse_crime()
    _load_or_parse_religion()

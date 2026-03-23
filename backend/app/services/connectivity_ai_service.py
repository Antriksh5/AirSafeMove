"""
Nearest major metro and connectivity distance using Gemini (optional Google Search grounding).
Falls back to geographic reasoning from coordinates when grounding is unavailable.
"""

from __future__ import annotations

import json
import logging
import os
import re
import time
from pathlib import Path
from typing import Any, Dict, Optional

from dotenv import load_dotenv

load_dotenv(Path(__file__).resolve().parent.parent.parent / ".env")

logger = logging.getLogger(__name__)


def _gemini_api_key() -> Optional[str]:
    return os.getenv("GEMINI_API_KEY") or os.getenv("GOOGLE_API_KEY")


def _parse_json_object(text: str) -> Optional[Dict[str, Any]]:
    if not text:
        return None
    text = text.strip()
    try:
        return json.loads(text)
    except json.JSONDecodeError:
        match = re.search(r"\{[\s\S]*\}", text)
        if match:
            try:
                return json.loads(match.group(0))
            except json.JSONDecodeError:
                return None
    return None


_connectivity_cooldown_until: float = 0.0


def _build_model():
    if time.time() < _connectivity_cooldown_until:
        return None

    api_key = _gemini_api_key()
    if not api_key:
        return None
    import google.generativeai as genai

    genai.configure(api_key=api_key)
    tools = None
    try:
        from google.generativeai import protos as genai_protos

        tools = [
            genai_protos.Tool(
                google_search=genai_protos.Tool.GoogleSearch()
            )
        ]
    except Exception:
        tools = None

    config = genai.types.GenerationConfig(
        temperature=0.3,
        max_output_tokens=2048,
        response_mime_type="application/json",
    )
    if tools:
        return genai.GenerativeModel(
            "gemini-2.5-flash",
            tools=tools,
            generation_config=config,
        )
    return genai.GenerativeModel("gemini-2.5-flash", generation_config=config)


def get_live_connectivity(
    city_name: str,
    state: str,
    latitude: float,
    longitude: float,
) -> Optional[Dict[str, Any]]:
    """
    Returns connectivity dict aligned with city description schema, or None if AI is unavailable.
    Uses Gemini; when Google Search retrieval is enabled, the model can ground on live web results.
    """
    model = _build_model()
    if not model:
        return None

    prompt = f"""You are a relocation data assistant for India.

City: {city_name}
State/UT: {state}
Coordinates (WGS84): latitude {latitude}, longitude {longitude}

Task:
1. Identify the nearest major metropolitan hub that a relocating family would typically associate with this city
   (multi-modal region: large airport + rail + economic centre — e.g. a known metro region serving the area).
2. Estimate approximate road distance in kilometres from {city_name} to that hub's main urban core (not straight-line unless you state it).
3. Summarize intercity transport options at a high level (rail / air / highway) using current knowledge or search grounding.

Rules:
- Prefer facts grounded in search when the tool is available; otherwise use reliable geographic knowledge.
- Do not invent precise kilometre values if uncertain; give a rounded estimate and say it is approximate.
- Return ONLY valid JSON with keys:
  "nearest_metro" (string),
  "distance_km" (number, approximate road distance),
  "transport_options" (one short sentence),
  "description" (2-3 sentences for end users),
  "key_factors" (array of 3 short strings),
  "sources" (array of short strings naming what the answer relied on, e.g. "web search summary", "geographic reasoning").
"""

    global _connectivity_cooldown_until
    try:
        response = model.generate_content(prompt)
    except Exception as exc:
        exc_str = str(exc)
        if "429" in exc_str or "quota" in exc_str.lower():
            _connectivity_cooldown_until = time.time() + 300
            logger.warning("Connectivity AI quota hit, cooldown 5min: %s", exc)
            return None
        logger.warning("Connectivity AI request failed (%s); retrying without search tools.", exc)
        try:
            import google.generativeai as genai

            genai.configure(api_key=_gemini_api_key())
            plain = genai.GenerativeModel(
                "gemini-2.5-flash",
                generation_config=genai.types.GenerationConfig(
                    temperature=0.3,
                    max_output_tokens=2048,
                    response_mime_type="application/json",
                ),
            )
            response = plain.generate_content(prompt)
        except Exception as exc2:
            if "429" in str(exc2) or "quota" in str(exc2).lower():
                _connectivity_cooldown_until = time.time() + 300
            logger.warning("Connectivity AI retry failed: %s", exc2)
            return None

    text = getattr(response, "text", None) or ""
    if not text and response.candidates:
        try:
            parts = response.candidates[0].content.parts
            text = "".join(getattr(p, "text", "") for p in parts)
        except (AttributeError, IndexError, TypeError):
            text = ""

    data = _parse_json_object(text)
    if not data:
        logger.warning("Connectivity AI returned non-JSON or empty output")
        return None

    try:
        distance = float(data.get("distance_km", 0))
    except (TypeError, ValueError):
        distance = 0.0

    nearest = str(data.get("nearest_metro") or "").strip() or "Unknown"
    transport = str(data.get("transport_options") or "").strip() or "See description"
    description = str(data.get("description") or "").strip()
    if not description:
        description = (
            f"Model-assisted estimate: nearest major hub for {city_name} is treated as {nearest} "
            f"at roughly {distance} km (approximate)."
        )

    key_factors = data.get("key_factors")
    if not isinstance(key_factors, list):
        key_factors = [
            "Distance is an approximate road-distance style estimate for relocation planning.",
            "Verify against maps before making logistics decisions.",
            "Transport mix reflects typical intercity options for this part of India.",
        ]
    else:
        key_factors = [str(x) for x in key_factors[:6]]

    sources = data.get("sources")
    if not isinstance(sources, list):
        sources = ["Google Gemini — connectivity inference"]
    else:
        sources = [str(x) for x in sources[:8]]

    return {
        "nearest_metro": nearest,
        "distance_km": round(distance, 1),
        "transport_options": transport,
        "description": description,
        "key_factors": key_factors,
        "sources": sources,
    }

"""
Local city evidence service backed by datasets placed in backend/dataset.

This service loads the provided datasets, aggregates city-level evidence where
possible, and produces deterministic section payloads for the city description
endpoint.
"""

from __future__ import annotations

import csv
import json
import logging
import re
import time
from copy import deepcopy
from collections import defaultdict
from functools import lru_cache
from pathlib import Path
from typing import Any, Dict, Iterable, List, Set

from dataset.geography_fetcher import GeographyFetcher
from dataset.nabh_fetcher import NABHFetcher
from app.services.city_data import get_all_cities, get_city_by_name, INDIAN_CITIES_DATA
from app.services.connectivity_ai_service import get_live_connectivity
from app.services.pdf_evidence_service import (
    get_crime_section_for_city,
    get_religion_snippet_for_district,
)

logger = logging.getLogger(__name__)

DATASET_DIR = Path(__file__).resolve().parent.parent.parent / "dataset"
CACHE_DIR = Path(__file__).resolve().parent.parent.parent / "dataset_cache"
CACHE_FILE = CACHE_DIR / "city_description_cache.json"
_NABH_FETCHER = NABHFetcher()
_GEOGRAPHY_FETCHER = GeographyFetcher()


CITY_MAPPING: Dict[str, Dict[str, List[str]]] = {
    "delhi": {
        "districts": [
            "central delhi",
            "east delhi",
            "new delhi",
            "north delhi",
            "north east delhi",
            "north west delhi",
            "shahdara",
            "south delhi",
            "south east delhi",
            "south west delhi",
            "west delhi",
            "delhi",
        ],
        "city_aliases": ["delhi", "new delhi", "ndmc"],
    },
    "mumbai": {
        "districts": ["mumbai", "mumbai city", "mumbai suburban", "mumbai (suburban)", "mumbai ii"],
        "city_aliases": ["mumbai", "greater mumbai", "brihanmumbai", "navi mumbai"],
    },
    "bangalore": {
        "districts": ["bangalore", "bengaluru urban", "bengaluru rural", "bengaluru u north", "bengaluru u south"],
        "city_aliases": ["bangalore", "bengaluru", "bbmp"],
    },
    "chennai": {
        "districts": ["chennai"],
        "city_aliases": ["chennai", "greater chennai"],
    },
    "kolkata": {
        "districts": ["kolkata"],
        "city_aliases": ["kolkata"],
    },
    "hyderabad": {
        "districts": ["hyderabad"],
        "city_aliases": ["hyderabad"],
    },
    "pune": {
        "districts": ["pune"],
        "city_aliases": ["pune", "pimpri", "chinchwad"],
    },
    "ahmedabad": {
        "districts": ["ahmedabad"],
        "city_aliases": ["ahmedabad", "ahmedabad municipal corporation"],
    },
    "jaipur": {
        "districts": ["jaipur"],
        "city_aliases": ["jaipur", "greater jaipur"],
    },
    "lucknow": {
        "districts": ["lucknow"],
        "city_aliases": ["lucknow"],
    },
    "shimla": {
        "districts": ["shimla"],
        "city_aliases": ["shimla"],
    },
    "dehradun": {
        "districts": ["dehradun"],
        "city_aliases": ["dehradun", "dehra dun"],
    },
    "coimbatore": {
        "districts": ["coimbatore"],
        "city_aliases": ["coimbatore"],
    },
    "mysore": {
        "districts": ["mysore", "mysuru"],
        "city_aliases": ["mysore", "mysuru"],
    },
    "kochi": {
        "districts": ["ernakulam", "kochi", "cochin"],
        "city_aliases": ["kochi", "cochin", "cochin corporation"],
    },
    "thiruvananthapuram": {
        "districts": ["thiruvananthapuram", "trivandrum"],
        "city_aliases": ["thiruvananthapuram", "trivandrum"],
    },
    "chandigarh": {
        "districts": ["chandigarh"],
        "city_aliases": ["chandigarh"],
    },
    "goa panaji": {
        "districts": ["north goa", "panaji"],
        "city_aliases": ["panaji", "goa", "panjim"],
    },
    "visakhapatnam": {
        "districts": ["visakhapatnam"],
        "city_aliases": ["visakhapatnam", "vizag"],
    },
    "indore": {
        "districts": ["indore"],
        "city_aliases": ["indore"],
    },
    "bhopal": {
        "districts": ["bhopal"],
        "city_aliases": ["bhopal"],
    },
    "nagpur": {
        "districts": ["nagpur"],
        "city_aliases": ["nagpur"],
    },
    "vadodara": {
        "districts": ["vadodara", "baroda"],
        "city_aliases": ["vadodara", "baroda"],
    },
    "surat": {
        "districts": ["surat"],
        "city_aliases": ["surat"],
    },
    "mangalore": {
        "districts": ["dakshina kannada", "mangaluru", "mangalore"],
        "city_aliases": ["mangaluru", "mangalore"],
    },
    "pondicherry": {
        "districts": ["puducherry", "pondicherry"],
        "city_aliases": ["puducherry", "pondicherry"],
    },
}


def _normalize(value: str | None) -> str:
    if not value:
        return ""
    value = value.strip().lower()
    value = value.replace("&", " and ")
    value = re.sub(r"[^a-z0-9 ]+", " ", value)
    value = re.sub(r"\s+", " ", value)
    return value.strip()


def _compute_relevant_state_norms() -> Set[str]:
    """Pre-compute the set of normalised state names we actually need."""
    return {_normalize(city.get("state")) for city in INDIAN_CITIES_DATA if city.get("state")}


_RELEVANT_STATE_NORMS: Set[str] = _compute_relevant_state_norms()


def _city_key(city_name: str) -> str:
    return _normalize(city_name.replace("(", " ").replace(")", " "))


def _as_int(value: str | None) -> int:
    if value is None:
        return 0
    value = value.strip()
    if not value or value == "0":
        return 0
    try:
        return int(float(value))
    except ValueError:
        return 0


def _safe_div(numerator: float, denominator: float) -> float:
    if not denominator:
        return 0.0
    return numerator / denominator


def _format_pct(value: float) -> str:
    return f"{value:.1f}%"


def _dataset_paths(pattern: str) -> List[Path]:
    return sorted(DATASET_DIR.glob(pattern))


def _dataset_signature() -> Dict[str, Dict[str, int]]:
    signature: Dict[str, Dict[str, int]] = {}
    for path in sorted(DATASET_DIR.glob("*.csv")):
        stat = path.stat()
        signature[path.name] = {
            "size": int(stat.st_size),
            "mtime_ns": int(stat.st_mtime_ns),
        }
    for path in sorted(DATASET_DIR.glob("*.pdf")):
        stat = path.stat()
        signature[f"pdf:{path.name}"] = {
            "size": int(stat.st_size),
            "mtime_ns": int(stat.st_mtime_ns),
        }
    return signature


def _sum_numeric_columns(row: Dict[str, str], excluded: Iterable[str]) -> int:
    excluded_set = set(excluded)
    return sum(_as_int(value) for key, value in row.items() if key not in excluded_set)


def _count_non_zero_parts(value: str | None) -> int:
    if not value or value == "0":
        return 0
    parts = [part.strip() for part in re.split(r"[,;/|]", value) if part.strip() and part.strip() != "0"]
    return len(parts)


def _summarize_list_text(value: str | None, limit: int = 5) -> str:
    if not value or value == "0":
        return ""
    cleaned = value.replace("\\n", "\n")
    parts = [part.strip() for part in re.split(r"[\n,;/|]+", cleaned) if part.strip() and part.strip() != "0"]
    if not parts:
        return ""
    trimmed = parts[:limit]
    suffix = "..." if len(parts) > limit else ""
    return ", ".join(trimmed) + suffix


def _parse_beds(value: str | None) -> int:
    beds = _as_int(value)
    return beds if 0 <= beds <= 5000 else 0


def _rank_hospital(row: Dict[str, Any], aliases: List[str]) -> tuple:
    text_blob = " ".join(
        [
            row["hospital_name"],
            row["district"],
            row["town"],
            row["subtown"],
            row["location"],
            row["specialties"],
            row["accreditation"],
        ]
    )
    alias_hit = any(alias and alias in text_blob for alias in aliases)
    specialty_count = _count_non_zero_parts(row["specialties"])
    facility_count = _count_non_zero_parts(row["facilities"])
    accreditation_score = 1 if row["accreditation"] and row["accreditation"] != "0" else 0
    emergency_score = 1 if row["emergency_services"] and row["emergency_services"] != "0" else 0
    beds = row["total_beds"]
    return (
        1 if alias_hit else 0,
        accreditation_score,
        emergency_score,
        specialty_count,
        facility_count,
        beds,
        row["hospital_name"],
    )


@lru_cache(maxsize=1)
def _load_census_rows() -> List[Dict[str, Any]]:
    t0 = time.time()
    path = DATASET_DIR / "Census.csv"
    rows: List[Dict[str, Any]] = []
    with open(path, encoding="utf-8-sig", newline="") as file:
        reader = csv.DictReader(file)
        for row in reader:
            district = row.get("District", "").strip()
            state = row.get("State", "").strip()
            state_norm = _normalize(state)
            if state_norm not in _RELEVANT_STATE_NORMS:
                continue
            literacy = row.get("Literacy", "").strip()
            rows.append(
                {
                    "district": district,
                    "district_norm": _normalize(district),
                    "state": state,
                    "state_norm": state_norm,
                    "literacy": float(literacy) if literacy else 0.0,
                }
            )
    logger.info("Census: kept %d rows (%.1fs)", len(rows), time.time() - t0)
    return rows


@lru_cache(maxsize=1)
def _load_hospital_rows() -> List[Dict[str, Any]]:
    t0 = time.time()
    path = DATASET_DIR / "hospital_directory.csv"
    rows: List[Dict[str, Any]] = []
    skipped = 0
    with open(path, encoding="utf-8-sig", newline="") as file:
        reader = csv.DictReader(file)
        for raw in reader:
            state_norm = _normalize(raw.get("State"))
            if state_norm not in _RELEVANT_STATE_NORMS:
                skipped += 1
                continue
            rows.append(
                {
                    "hospital_name": (raw.get("Hospital_Name") or "").strip(),
                    "state": (raw.get("State") or "").strip(),
                    "state_norm": state_norm,
                    "district": (raw.get("District") or "").strip(),
                    "district_norm": _normalize(raw.get("District")),
                    "town": _normalize(raw.get("Town")),
                    "subtown": _normalize(raw.get("Subtown")),
                    "location": _normalize(raw.get("Location")),
                    "care_type": (raw.get("Hospital_Care_Type") or "").strip(),
                    "medicine": (raw.get("Discipline_Systems_of_Medicine") or "").strip(),
                    "specialties": (raw.get("Specialties") or "").strip(),
                    "facilities": (raw.get("Facilities") or "").strip(),
                    "accreditation": (raw.get("Accreditation") or "").strip(),
                    "total_beds": _parse_beds(raw.get("Total_Num_Beds")),
                    "emergency_services": (raw.get("Emergency_Services") or "").strip(),
                    "website": (raw.get("Website") or "").strip(),
                }
            )
    logger.info(
        "Hospitals: kept %d rows, skipped %d irrelevant-state rows (%.1fs)",
        len(rows), skipped, time.time() - t0,
    )
    return rows


@lru_cache(maxsize=1)
def _load_udise_teacher_map() -> Dict[str, Dict[str, int]]:
    t0 = time.time()
    relevant = _relevant_pseudocodes()
    teacher_map: Dict[str, Dict[str, int]] = {}
    skipped = 0
    for path in _dataset_paths("*_tch.csv"):
        with open(path, encoding="utf-8-sig", newline="") as file:
            reader = csv.DictReader(file)
            for row in reader:
                pseudocode = row.get("pseudocode", "").strip()
                if not pseudocode or pseudocode not in relevant:
                    skipped += 1
                    continue
                teacher_map[pseudocode] = {
                    "total_teachers": _as_int(row.get("total_tch")),
                    "female_teachers": _as_int(row.get("female")),
                    "trained_teachers": _as_int(row.get("trained_comp")),
                    "postgraduate_teachers": _as_int(row.get("post_graduate_and_above")),
                }
    logger.info(
        "UDISE teachers: kept %d rows, skipped %d (%.1fs)",
        len(teacher_map), skipped, time.time() - t0,
    )
    return teacher_map


@lru_cache(maxsize=1)
def _load_udise_enrollment_map() -> Dict[str, Dict[str, int]]:
    t0 = time.time()
    relevant = _relevant_pseudocodes()
    enrollment_map: Dict[str, Dict[str, int]] = defaultdict(
        lambda: {
            "social_enrollment_estimate": 0,
            "minority_enrollment_estimate": 0,
            "row_count": 0,
        }
    )
    skipped = 0
    for path in _dataset_paths("*_enr1.csv"):
        with open(path, encoding="utf-8-sig", newline="") as file:
            reader = csv.DictReader(file)
            for row in reader:
                pseudocode = row.get("pseudocode", "").strip()
                if not pseudocode or pseudocode not in relevant:
                    skipped += 1
                    continue
                total = _sum_numeric_columns(row, {"pseudocode", "item_group", "item_id"})
                item_group = row.get("item_group", "").strip()
                if item_group == "1":
                    enrollment_map[pseudocode]["social_enrollment_estimate"] += total
                elif item_group == "5":
                    enrollment_map[pseudocode]["minority_enrollment_estimate"] += total
                enrollment_map[pseudocode]["row_count"] += 1
    logger.info(
        "UDISE enrollment: kept %d pseudocodes, skipped %d rows (%.1fs)",
        len(enrollment_map), skipped, time.time() - t0,
    )
    return dict(enrollment_map)


@lru_cache(maxsize=1)
def _load_udise_profile_rows() -> List[Dict[str, Any]]:
    t0 = time.time()
    rows_by_pseudocode: Dict[str, Dict[str, Any]] = {}
    skipped = 0
    for path in _dataset_paths("*_prof1.csv"):
        with open(path, encoding="utf-8-sig", newline="") as file:
            reader = csv.DictReader(file)
            for raw in reader:
                state_norm = _normalize(raw.get("state"))
                if state_norm not in _RELEVANT_STATE_NORMS:
                    skipped += 1
                    continue
                pseudocode = (raw.get("pseudocode") or "").strip()
                if not pseudocode:
                    continue
                rows_by_pseudocode[pseudocode] = {
                    "pseudocode": pseudocode,
                    "state": (raw.get("state") or "").strip(),
                    "state_norm": state_norm,
                    "district": (raw.get("district") or "").strip(),
                    "district_norm": _normalize(raw.get("district")),
                    "block_norm": _normalize(raw.get("block")),
                    "ulb_norm": _normalize(raw.get("lgd_urban_local_body_name")),
                    "rural_urban": (raw.get("rural_urban") or "").strip(),
                    "minority_school": (raw.get("minority_school") or "").strip(),
                    "pre_primary": (raw.get("pre_primary") or "").strip(),
                    "approachable_road": (raw.get("approachable_road") or "").strip(),
                    "special_school_for_cwsn": (raw.get("special_school_for_cwsn") or "").strip(),
                    "resi_school": (raw.get("resi_school") or "").strip(),
                    "school_category": (raw.get("school_category") or "").strip(),
                    "school_type": (raw.get("school_type") or "").strip(),
                }
    rows = list(rows_by_pseudocode.values())
    logger.info(
        "UDISE profile: kept %d rows, skipped %d irrelevant-state rows (%.1fs)",
        len(rows), skipped, time.time() - t0,
    )
    return rows


@lru_cache(maxsize=1)
def _relevant_pseudocodes() -> frozenset:
    """Pseudocodes that matched our relevant states in the profile file."""
    return frozenset(row["pseudocode"] for row in _load_udise_profile_rows())


@lru_cache(maxsize=1)
def _udise_profile_by_state() -> Dict[str, List[Dict[str, Any]]]:
    """Index profile rows by state_norm for O(1) state-level lookups."""
    index: Dict[str, List[Dict[str, Any]]] = defaultdict(list)
    for row in _load_udise_profile_rows():
        index[row["state_norm"]].append(row)
    return dict(index)


@lru_cache(maxsize=1)
def _hospital_by_state() -> Dict[str, List[Dict[str, Any]]]:
    """Index hospital rows by state_norm for O(1) state-level lookups."""
    index: Dict[str, List[Dict[str, Any]]] = defaultdict(list)
    for row in _load_hospital_rows():
        index[row["state_norm"]].append(row)
    return dict(index)


@lru_cache(maxsize=1)
def _udise_scope_summary() -> Dict[str, List[str]]:
    states = sorted({row["state"] for row in _load_udise_profile_rows() if row["state"]})
    districts = sorted({row["district"] for row in _load_udise_profile_rows() if row["district"]})
    return {"states": states, "districts": districts}


def _get_mapping(city_name: str, state: str) -> Dict[str, Any]:
    key = _city_key(city_name)
    mapping = CITY_MAPPING.get(key, {})
    districts = mapping.get("districts", [city_name])
    city_aliases = mapping.get("city_aliases", [city_name])
    return {
        "city_name": city_name,
        "city_key": key,
        "state": state,
        "state_norm": _normalize(state),
        "districts": [_normalize(value) for value in districts],
        "city_aliases": [_normalize(value) for value in city_aliases],
    }


def _district_label(mapping: Dict[str, Any], rows: List[Dict[str, Any]]) -> str:
    districts = sorted({row["district"] for row in rows if row.get("district")})
    if districts:
        return ", ".join(districts[:2])
    return ", ".join(mapping["districts"]) or mapping["city_name"]


def _match_profile_rows(mapping: Dict[str, Any]) -> List[Dict[str, Any]]:
    district_rows: List[Dict[str, Any]] = []
    alias_rows: List[Dict[str, Any]] = []
    state_rows = _udise_profile_by_state().get(mapping["state_norm"], [])
    for row in state_rows:
        district_hit = row["district_norm"] in mapping["districts"]
        alias_hit = any(
            alias and (alias in row["ulb_norm"] or alias in row["block_norm"])
            for alias in mapping["city_aliases"]
        )
        if district_hit:
            district_rows.append(row)
        elif alias_hit:
            alias_rows.append(row)
    return district_rows if district_rows else alias_rows


def _match_hospital_rows(mapping: Dict[str, Any]) -> List[Dict[str, Any]]:
    district_rows: List[Dict[str, Any]] = []
    alias_rows: List[Dict[str, Any]] = []
    state_rows = _hospital_by_state().get(mapping["state_norm"], [])
    for row in state_rows:
        district_hit = row["district_norm"] in mapping["districts"]
        alias_hit = any(
            alias and alias in " ".join([row["town"], row["subtown"], row["location"]])
            for alias in mapping["city_aliases"]
        )
        if district_hit:
            district_rows.append(row)
        elif alias_hit:
            alias_rows.append(row)
    return district_rows if district_rows else alias_rows


def _build_education_section(city_name: str, state: str) -> Dict[str, Any]:
    mapping = _get_mapping(city_name, state)
    profile_rows = _match_profile_rows(mapping)
    teacher_map = _load_udise_teacher_map()
    enrollment_map = _load_udise_enrollment_map()
    city_record = get_city_by_name(city_name) or {}
    udise_scope = _udise_scope_summary()

    school_count = len(profile_rows)
    if not school_count:
        return {
            "score": 6,
            "highlights": [
                f"{city_name} has a growing number of schools across its urban and peri-urban areas.",
                "Detailed school-level data is being compiled for this city.",
                "We recommend visiting the city to personally assess nearby schools before moving.",
            ],
            "description": (
                f"Detailed school-level information for {city_name}, {state} is currently being compiled. "
                f"As a city in {state}, it benefits from state education initiatives and has schools at all levels — "
                "from primary to senior secondary. We recommend exploring local school options directly when you visit."
            ),
            "key_factors": [
                "Check with local education boards for the latest enrollment and quality ratings.",
                "Urban areas of the city are likely to have a higher density of schools.",
                "National and state government schools, as well as private institutions, are typically available.",
            ],
            "sources": [
                "Ministry of Education — UDISE+ school data (data aggregation in progress for this city)",
            ],
        }

    total_teachers = 0
    female_teachers = 0
    trained_teachers = 0
    postgraduate_teachers = 0
    total_students = 0
    minority_students = 0
    urban_schools = 0
    minority_schools = 0
    pre_primary_schools = 0
    approachable_schools = 0

    for row in profile_rows:
        pseudocode = row["pseudocode"]
        teacher = teacher_map.get(pseudocode, {})
        enrollment = enrollment_map.get(pseudocode, {})
        total_teachers += teacher.get("total_teachers", 0)
        female_teachers += teacher.get("female_teachers", 0)
        trained_teachers += teacher.get("trained_teachers", 0)
        postgraduate_teachers += teacher.get("postgraduate_teachers", 0)
        total_students += enrollment.get("social_enrollment_estimate", 0)
        minority_students += enrollment.get("minority_enrollment_estimate", 0)
        urban_schools += 1 if row["rural_urban"] == "2" else 0
        minority_schools += 1 if row["minority_school"] == "1" else 0
        pre_primary_schools += 1 if row["pre_primary"] == "1" else 0
        approachable_schools += 1 if row["approachable_road"] == "1" else 0

    urban_pct = _safe_div(urban_schools * 100, school_count)
    trained_pct = _safe_div(trained_teachers * 100, total_teachers)
    female_teacher_pct = _safe_div(female_teachers * 100, total_teachers)
    avg_teachers_per_school = _safe_div(total_teachers, school_count)
    district_label = _district_label(mapping, profile_rows)
    education_score = round(city_record.get("profession_availability", {}).get("Education", 60) / 10)

    return {
        "score": max(1, min(10, education_score)),
        "highlights": [
            f"Over {school_count:,} schools are present in {city_name}'s district, giving families a broad range of choices.",
            f"The city has {total_teachers:,} teachers, with an average of {avg_teachers_per_school:.1f} teachers per school.",
            f"{_format_pct(urban_pct)} of schools are urban — ideal for families relocating to the city.",
        ],
        "description": (
            f"{city_name} has a well-established education infrastructure with {school_count:,} schools across its district. "
            f"About {_format_pct(urban_pct)} are located in urban areas, making access convenient for city-dwellers. "
            f"With {_format_pct(trained_pct)} of teachers formally trained and {_format_pct(female_teacher_pct)} being women, "
            f"quality and diversity of instruction are encouraging. "
            f"Pre-primary facilities are available in {pre_primary_schools:,} schools, and {approachable_schools:,} schools are road-accessible — "
            "a key feature for families with young children."
        ),
        "key_factors": [
            f"{_format_pct(urban_pct)} of schools are in urban areas — convenient for city living.",
            f"{_format_pct(trained_pct)} of teachers are formally trained, reflecting a quality teaching environment.",
            f"{pre_primary_schools:,} schools offer pre-primary programmes, and {approachable_schools:,} are directly road-accessible.",
        ],
        "sources": [
            "Ministry of Education — UDISE+ (Unified District Information System for Education)",
        ],
    }


def _build_hospitals_section(city_name: str, state: str) -> Dict[str, Any]:
    mapping = _get_mapping(city_name, state)
    hospital_rows = _match_hospital_rows(mapping)
    city_record = get_city_by_name(city_name) or {}
    district_label = _district_label(mapping, hospital_rows)

    if not hospital_rows:
        fallback_score = round(city_record.get("healthcare_score", 60) / 10) or 6
        return {
            "score": max(1, min(10, fallback_score)),
            "facilities": [
                f"{city_name} has a mix of government and private hospitals serving residents.",
                "Detailed facility listings are being compiled for this city.",
                "We recommend verifying hospital options directly when visiting the city.",
            ],
            "description": (
                f"{city_name}, {state} has healthcare facilities serving its residents, though our detailed "
                "hospital-by-hospital information is still being gathered for this location. "
                "As a general rule, cities in India's major states have a combination of government hospitals, "
                "private clinics, and specialty centres. We recommend exploring nearby healthcare options "
                "when you visit before finalizing your move."
            ),
            "key_factors": [
                "Look for hospitals with NABH accreditation for the best quality standards.",
                "Check if specialist care (cardiology, oncology, paediatrics) is available nearby.",
                "Government hospitals offer subsidised care, while private facilities may have shorter wait times.",
            ],
            "sources": [
                "National Health Portal — Hospital Directory",
            ],
        }

    total_hospitals = len(hospital_rows)
    allopathic_count = sum(1 for row in hospital_rows if "allopathic" in row["medicine"].lower())
    emergency_count = sum(1 for row in hospital_rows if row["emergency_services"] and row["emergency_services"] != "0")
    accredited_count = sum(1 for row in hospital_rows if row["accreditation"] and row["accreditation"] != "0")
    known_beds_rows = [row for row in hospital_rows if row["total_beds"] > 0]
    total_known_beds = sum(row["total_beds"] for row in known_beds_rows)
    avg_beds = _safe_div(total_known_beds, len(known_beds_rows))
    top_hospitals = sorted(
        hospital_rows,
        key=lambda row: _rank_hospital(row, mapping["city_aliases"]),
        reverse=True,
    )[:3]

    facilities = []
    for row in top_hospitals:
        detail_parts = [row["hospital_name"]]
        if row["medicine"] and row["medicine"] != "0":
            detail_parts.append(row["medicine"])
        if row["total_beds"] > 0:
            detail_parts.append(f"{row['total_beds']} beds")
        summarized_specialties = _summarize_list_text(row["specialties"])
        if summarized_specialties:
            detail_parts.append(f"specialties: {summarized_specialties}")
        facilities.append(" - ".join([detail_parts[0], ", ".join(detail_parts[1:])]) if len(detail_parts) > 1 else detail_parts[0])

    hospital_score = round(city_record.get("healthcare_score", 60) / 10)

    # Build description dynamically to avoid showing unhelpful 0s
    desc_parts = [
        f"{city_name} has {total_hospitals:,} healthcare facilities registered across the district, "
        "offering residents a range of medical care options."
    ]
    if allopathic_count > 0:
        desc_parts.append(f"Of these, {allopathic_count:,} are modern allopathic hospitals.")
    if emergency_count > 0:
        desc_parts.append(
            f"{emergency_count:,} hospitals have dedicated emergency services — "
            "an important consideration for families with children or elderly members."
        )
    if accredited_count > 0:
        desc_parts.append(
            f"{accredited_count:,} facilities carry formal accreditation, "
            "which is a reliable indicator of quality care."
        )
    if known_beds_rows and avg_beds > 0:
        desc_parts.append(
            f"Among those reporting bed capacity, the average is {avg_beds:.0f} beds per facility."
        )
    if emergency_count == 0 and accredited_count == 0:
        desc_parts.append(
            "We recommend asking locals and your housing society for trusted hospital recommendations, "
            "and visiting prospective facilities before finalising your move."
        )

    key_factors = [
        f"{total_hospitals:,} hospitals and clinics are registered in and around {city_name}.",
    ]
    if emergency_count > 0:
        key_factors.append(f"{emergency_count:,} hospitals offer emergency services — important for families and seniors.")
    else:
        key_factors.append("Check with locals for hospitals that offer 24/7 emergency and ICU services.")
    if accredited_count > 0:
        key_factors.append(f"{accredited_count:,} facilities are formally accredited, indicating a higher standard of care.")
    else:
        key_factors.append("Look for NABH-accredited hospitals for the highest quality of care.")

    return {
        "score": max(1, min(10, hospital_score)),
        "facilities": facilities,
        "description": " ".join(desc_parts),
        "key_factors": key_factors,
        "sources": [
            "National Health Portal — Hospital Directory",
        ],
    }


def _metric_lookup(rows: List[Dict[str, Any]]) -> Dict[str, str]:
    metrics: Dict[str, str] = {}
    for row in rows:
        metric_name = row.get("metric_name")
        metric_value = row.get("metric_value")
        if metric_name and metric_name not in metrics and metric_value not in (None, ""):
            metrics[metric_name] = str(metric_value)
    return metrics


def _source_lines(rows: List[Dict[str, Any]]) -> List[str]:
    seen = set()
    sources: List[str] = []
    for row in rows:
        source_name = row.get("source_name")
        source_url = row.get("source_url")
        if not source_name:
            continue
        line = f"{source_name} - {source_url}" if source_url else str(source_name)
        if line not in seen:
            seen.add(line)
            sources.append(line)
    return sources


def _split_metric_list(value: str | None, delimiter: str = ",") -> List[str]:
    if not value:
        return []
    return [item.strip() for item in value.split(delimiter) if item and item.strip()]


def _build_live_hospitals_section(city_name: str, state: str) -> Dict[str, Any] | None:
    city_record = get_city_by_name(city_name) or {}
    lat = city_record.get("latitude")
    lon = city_record.get("longitude")
    if lat is None or lon is None:
        return None

    try:
        rows = _NABH_FETCHER.fetch(city_name=city_name, state=state, lat=lat, lon=lon)
    except Exception:
        return None

    if not rows:
        return None

    metrics = _metric_lookup(rows)
    try:
        count = int(float(metrics.get("nabh_accredited_hospitals_count", "0")))
    except ValueError:
        count = 0

    nearest = metrics.get("nabh_nearest_hospital")
    facilities = [
        item.strip()
        for item in metrics.get("nabh_accredited_hospitals_list", "").split(";")
        if item.strip()
    ]
    fallback_score = round(city_record.get("healthcare_score", 60) / 10) or 6
    score = max(1, min(10, max(fallback_score, min(10, 5 + min(count, 10) // 2))))

    if count == 0:
        description = (
            f"We checked the NABH (National Accreditation Board for Hospitals) directory for {city_name}, {state}. "
            "While no NABH-accredited hospitals were found in the immediate city centre, the city may have "
            "government hospitals and quality private care centres that are not yet listed in this directory. "
            "We recommend visiting the city and consulting with locals to identify trusted healthcare providers."
        )
        key_factors = [
            "NABH accreditation is a gold standard, but many excellent hospitals are not yet listed.",
            "Government hospitals, ESI hospitals, and private clinics are often well-regarded even without NABH listing.",
            "Ask locals or expat/migrant groups for trusted healthcare recommendations in the area.",
        ]
    else:
        nearest_sentence = f" The closest accredited facility is {nearest}." if nearest else ""
        description = (
            f"{city_name} has {count} NABH-accredited hospital{'s' if count != 1 else ''} — a strong indicator of quality healthcare in the area."
            f"{nearest_sentence} NABH accreditation means these hospitals have been independently evaluated for safety, "
            "quality of care, and patient experience — giving you confidence when choosing healthcare for your family."
        )
        key_factors = [
            f"{count} NABH-accredited hospitals nearby — India's benchmark for hospital quality.",
            f"Nearest accredited hospital: {nearest}." if nearest else "Check the NABH website for the complete list near your preferred neighbourhood.",
            "NABH-accredited hospitals follow strict protocols for patient safety and quality of care.",
        ]

    return {
        "score": score,
        "facilities": facilities[:10] or ([f"No NABH-accredited hospitals currently listed for {city_name} — check the NABH portal for updates"] if count == 0 else []),
        "description": description,
        "key_factors": key_factors,
        "sources": _source_lines(rows),
    }


def _build_live_geography_section(city_name: str, state: str) -> Dict[str, Any] | None:
    city_record = get_city_by_name(city_name) or {}
    lat = city_record.get("latitude")
    lon = city_record.get("longitude")
    if lat is None or lon is None:
        return None

    try:
        rows = _GEOGRAPHY_FETCHER.fetch(city_name=city_name, state=state, lat=lat, lon=lon)
    except Exception:
        return None

    if not rows:
        return None

    metrics = _metric_lookup(rows)
    terrain_parts: List[str] = []
    features: List[str] = []

    coastline = metrics.get("coastline_proximity")
    if coastline == "yes":
        terrain_parts.append("Coastal")
        features.append("Coastline detected within the configured terrain search radius")
    elif coastline == "no":
        terrain_parts.append("Inland")

    rivers = _split_metric_list(metrics.get("osm_rivers_nearby") or metrics.get("nearby_rivers"))
    hills = _split_metric_list(metrics.get("osm_hills_peaks_nearby"))
    lakes = _split_metric_list(metrics.get("osm_lakes_nearby"))

    if hills:
        terrain_parts.append("Hilly")
        features.append(f"Nearby hills or peaks: {', '.join(hills[:3])}")
    if lakes:
        features.append(f"Nearby lakes: {', '.join(lakes[:3])}")
    if rivers:
        features.append(f"Nearby rivers: {', '.join(rivers[:3])}")

    terrain = ", ".join(terrain_parts) if terrain_parts else "Mixed urban terrain"

    climate_bits = []
    if metrics.get("climate_type"):
        climate_bits.append(metrics["climate_type"])
    if metrics.get("annual_avg_temp_c"):
        climate_bits.append(f"avg {metrics['annual_avg_temp_c']}C")
    if metrics.get("annual_rainfall_mm"):
        climate_bits.append(f"{metrics['annual_rainfall_mm']} mm rainfall")
    climate = ", ".join(climate_bits) if climate_bits else "Climate data available from external geography APIs"

    try:
        elevation_m = float(metrics.get("elevation_m", "0"))
    except ValueError:
        elevation_m = 0.0

    hottest = metrics.get("hottest_month")
    coldest = metrics.get("coldest_month")
    if hottest:
        features.append(f"Hottest month: {hottest}")
    if coldest:
        features.append(f"Coldest month: {coldest}")
    if not features:
        features.append(f"Coordinates used for geography lookup: {lat}, {lon}")

    description_parts = [
        f"{city_name} is situated at",
    ]
    if elevation_m > 0:
        description_parts = [f"{city_name} sits at an elevation of about {round(elevation_m)} m above sea level,"]
        description_parts.append("which contributes to its pleasant climate and relatively clean air.")
    else:
        description_parts = [f"{city_name} is a well-connected urban centre in {state}."]
    if climate_bits:
        description_parts.append(f"The climate is generally {climate.lower()}, making it suitable for year-round living.")
    if rivers:
        description_parts.append(f"The city is situated near rivers including {', '.join(rivers[:2])}, offering scenic surroundings.")
    if hills:
        description_parts.append(f"Nearby hills and elevated terrain ({', '.join(hills[:2])}) contribute to cooler temperatures and greener landscapes.")
    if lakes:
        description_parts.append(f"Lakes nearby ({', '.join(lakes[:2])}) provide recreational and ecological benefits.")

    return {
        "terrain": terrain,
        "climate": climate,
        "elevation_m": round(elevation_m, 1),
        "features": features[:8],
        "description": " ".join(description_parts),
        "key_factors": [
            f"The terrain is {terrain.lower()}, which influences lifestyle, commuting, and air quality.",
            "The climate data reflects historical monthly averages — good for planning seasonal needs.",
            "Nearby water bodies and hills can significantly improve quality of life for families.",
        ],
        "sources": _source_lines(rows),
    }


def _build_communities_section(city_name: str, state: str) -> Dict[str, Any]:
    mapping = _get_mapping(city_name, state)
    census_rows = [
        row
        for row in _load_census_rows()
        if row["state_norm"] == mapping["state_norm"] and row["district_norm"] in mapping["districts"]
    ]
    profile_rows = _match_profile_rows(mapping)
    district_label = _district_label(mapping, census_rows or profile_rows)

    if not census_rows:
        religion_only = get_religion_snippet_for_district(state, mapping["districts"])
        if religion_only:
            return {
                "demographics": f"{city_name}, {state} is a culturally diverse city. {religion_only}",
                "description": (
                    f"{city_name} is a vibrant, multicultural city in {state}. {religion_only} "
                    "The city is home to a mix of communities and is known for its social harmony and cultural richness."
                ),
                "highlights": [
                    religion_only,
                    f"{city_name} has a culturally and linguistically diverse population.",
                    "The city is generally welcoming to migrants and new residents.",
                ],
                "key_factors": [
                    "Religion and community composition data is sourced from official census publications.",
                    "A diverse population typically reflects a more cosmopolitan lifestyle and services.",
                    "Look for local communities, cultural centres, and migrant support groups when relocating.",
                ],
                "sources": [
                    "Office of the Registrar General of India — Census Religion Data",
                ],
            }
        return {
            "demographics": f"{city_name}, {state} is a culturally rich and diverse urban centre.",
            "description": (
                f"{city_name} is a thriving city in {state} known for its rich history and welcoming communities. "
                "It attracts professionals, students, and families from across the country. "
                "While detailed breakdown data is still being compiled, the city generally offers a warm, "
                "inclusive social environment that eases the transition for newcomers."
            ),
            "highlights": [
                f"{city_name} is home to a diverse mix of communities from across India.",
                "The city is known for its vibrant local culture and festivals.",
                "Strong migrant communities and professional networks make integration easier.",
            ],
            "key_factors": [
                "Cultural diversity is a key strength of the city, making it easy to settle in.",
                "Look for local associations and communities from your home state to ease the transition.",
                "Detailed demographics data is being compiled and will be updated soon.",
            ],
            "sources": [
                "Office of the Registrar General of India — Census Data",
            ],
        }

    literacy = sum(row["literacy"] for row in census_rows) / len(census_rows)
    school_count = len(profile_rows)
    urban_schools = sum(1 for row in profile_rows if row["rural_urban"] == "2")
    urban_pct = _safe_div(urban_schools * 100, school_count) if school_count else 0.0

    religion_snip = get_religion_snippet_for_district(state, mapping["districts"])
    religion_sentence = (
        f" {religion_snip}" if religion_snip else ""
    )

    highlights = [
        f"{city_name} has a literacy rate of {_format_pct(literacy)}, reflecting a well-educated population.",
        f"With {school_count:,} schools in the district, educational access is strong for families.",
        f"{_format_pct(urban_pct)} of schools are urban — convenient for city residents.",
    ]
    if religion_snip:
        highlights.insert(0, religion_snip)

    sources = [
        "Office of the Registrar General of India — Census Data",
        "Ministry of Education — UDISE+ (Unified District Information System for Education)",
    ]
    if religion_snip:
        sources.append("Office of the Registrar General of India — Census Religion Data")

    key_factors = [
        f"A literacy rate of {_format_pct(literacy)} indicates a well-educated, progressive community.",
        "The city's diverse population means you'll find communities from across India.",
        "Strong educational infrastructure reflects long-term livability for families.",
    ]

    desc = (
        f"{city_name} has a literacy rate of {_format_pct(literacy)}, placing it among the more educated cities in {state}. "
        f"The district has {school_count:,} schools, with {_format_pct(urban_pct)} in urban areas — great for families with children. "
    )
    if religion_snip:
        desc += religion_snip + " "
    desc += (
        f"The city's diverse and educated population makes it a welcoming destination for newcomers from any background."
    )

    return {
        "demographics": (
            f"{city_name}, {state} has a literacy rate of {_format_pct(literacy)} and a culturally diverse population."
            f"{religion_sentence}"
        ),
        "description": desc,
        "highlights": highlights,
        "key_factors": key_factors,
        "sources": sources,
    }


_NEAREST_METRO: Dict[str, str] = {
    "delhi": "Delhi (NCR)",
    "mumbai": "Mumbai",
    "bangalore": "Bengaluru",
    "chennai": "Chennai",
    "kolkata": "Kolkata",
    "hyderabad": "Hyderabad",
    "pune": "Mumbai",
    "ahmedabad": "Ahmedabad",
    "jaipur": "Delhi (NCR)",
    "lucknow": "Delhi (NCR)",
    "shimla": "Chandigarh",
    "dehradun": "Delhi (NCR)",
    "coimbatore": "Chennai",
    "mysore": "Bengaluru",
    "kochi": "Kochi",
    "thiruvananthapuram": "Kochi",
    "chandigarh": "Delhi (NCR)",
    "goa panaji": "Mumbai",
    "visakhapatnam": "Hyderabad",
    "indore": "Bhopal",
    "bhopal": "Indore",
    "nagpur": "Mumbai",
    "vadodara": "Ahmedabad",
    "surat": "Ahmedabad",
    "mangalore": "Bengaluru",
    "pondicherry": "Chennai",
}


def _nearest_metro_for(city_name: str) -> str:
    key = _city_key(city_name)
    return _NEAREST_METRO.get(key, city_name)


def _build_generic_sections(city_name: str, state: str, has_children: bool, has_elderly: bool) -> Dict[str, Any]:
    city_record = get_city_by_name(city_name) or {}
    nearest_metro = {"city_name": "Pending AI connectivity", "distance_km": 0.0}
    aqi = city_record.get("current_aqi")
    avg_rent = city_record.get("avg_rent")

    family_notes = []
    if has_children:
        family_notes.append("family context includes children")
    if has_elderly:
        family_notes.append("family context includes elderly members")
    family_note = ", ".join(family_notes) if family_notes else "general relocation context"

    children_sentence = " It's especially important for families with children to look at NCRB city rankings and local police helpline responsiveness." if has_children else ""
    elderly_sentence = " For families with elderly members, check the prevalence of hospitals with emergency services, which can be more critical than general crime rates." if has_elderly else ""

    return {
        "crime_rate": {
            "security_score": 6,
            "description": (
                f"{city_name} is a mid-sized to large Indian city where, like most urban centres, safety varies by neighbourhood. "
                "We recommend checking the latest NCRB city-specific reports and speaking with existing residents or your future housing society "
                f"for a clear picture of local safety.{children_sentence}{elderly_sentence}"
            ),
            "key_factors": [
                "Visit the NCRB website for the latest city-level crime statistics.",
                "Gated communities, housing societies, and well-lit areas generally offer better safety.",
                f"Safety considerations for your family ({family_note}) should guide neighbourhood selection.",
            ],
            "sources": [
                "National Crime Records Bureau (NCRB) — City-wise Crime in India",
            ],
        },
        "connectivity": {
            "nearest_metro": _nearest_metro_for(city_name),
            "distance_km": 0.0,
            "transport_options": f"Road and rail connectivity available from {city_name}.",
            "description": (
                f"{city_name} is well-connected to other major Indian cities via national highways and rail networks. "
                f"As a city in {state}, inter-city buses, trains, and cab services make travel to nearby metros accessible. "
                "Live distance and travel time estimates will be shown here once connectivity data is fully loaded."
            ),
            "key_factors": [
                f"Check IRCTC for train schedules connecting {city_name} to your destination.",
                f"National highways in {state} link to major cities — road trips to nearby metros are typically 2–5 hours.",
                "Ola, Uber, and city buses provide convenient daily commute options within the city.",
            ],
            "sources": [
                "Indian Railways (IRCTC), National Highway Authority of India (NHAI)",
            ],
        },
        "geography": {
            "terrain": "Urban / Mixed",
            "climate": "Varies by season",
            "elevation_m": 0,
            "features": [
                f"Located in {state}, with established roads and residential areas.",
                f"Current air quality index (AQI): {aqi if aqi is not None else 'data loading'}" ,
                f"Average monthly rent: ₹{avg_rent:,}" if avg_rent is not None else "Rent data loading",
            ],
            "description": (
                f"{city_name} is an established city in {state} with a mix of urban and residential neighbourhoods. "
                "Detailed geography data including terrain, elevation, and climate normals is being loaded. "
                "As a city in India, you can expect distinct seasonal weather — hot summers, a monsoon season, and cooler winters — "
                "the specifics depending on whether the city is coastal, hill-based, or in the plains."
            ),
            "key_factors": [
                f"Located in {state} — check government websites for district-level geography and climate details.",
                "Consider how the local climate affects seasonal activities, commute, and housing needs.",
                "Elevation and terrain impact air quality, temperatures, and overall comfort.",
            ],
            "sources": [
                "India Meteorological Department (IMD), Survey of India",
            ],
        },
    }


def _build_uncached_city_description(
    city_name: str,
    state: str,
    has_children: bool = False,
    has_elderly: bool = False,
) -> Dict[str, Any]:
    generic_sections = _build_generic_sections(city_name, state, has_children, has_elderly)
    family_notes: List[str] = []
    if has_children:
        family_notes.append("family context includes children")
    if has_elderly:
        family_notes.append("family context includes elderly members")
    family_note = ", ".join(family_notes) if family_notes else "general relocation context"
    mapping = _get_mapping(city_name, state)
    crime_from_pdf = get_crime_section_for_city(
        city_name, state, mapping["districts"], family_note
    )
    crime_rate = crime_from_pdf or generic_sections["crime_rate"]
    return {
        "city_name": city_name,
        "state": state,
        "generated": True,
        "crime_rate": crime_rate,
        "education": _build_education_section(city_name, state),
        "communities": _build_communities_section(city_name, state),
        "connectivity": generic_sections["connectivity"],
        "hospitals": _build_hospitals_section(city_name, state),
        "geography": generic_sections["geography"],
    }


@lru_cache(maxsize=1)
def _load_cached_city_descriptions() -> Dict[str, Dict[str, Any]]:
    current_signature = _dataset_signature()
    if CACHE_FILE.exists():
        with open(CACHE_FILE, encoding="utf-8") as file:
            payload = json.load(file)
        if payload.get("signature") == current_signature:
            return payload.get("cities", {})

    CACHE_DIR.mkdir(parents=True, exist_ok=True)
    cities_payload: Dict[str, Dict[str, Any]] = {}
    for city in get_all_cities():
        description = _build_uncached_city_description(
            city_name=city["city_name"],
            state=city["state"],
            has_children=False,
            has_elderly=False,
        )
        cities_payload[_city_key(city["city_name"])] = description

    with open(CACHE_FILE, "w", encoding="utf-8") as file:
        json.dump(
            {
                "signature": current_signature,
                "cities": cities_payload,
            },
            file,
            ensure_ascii=True,
        )
    return cities_payload


def warm_city_description_cache() -> Dict[str, Dict[str, Any]]:
    """Build or load the persisted city description cache."""
    return _load_cached_city_descriptions()


def _enrich_with_live_sections(result: Dict[str, Any], city_name: str, state: str) -> None:
    """Best-effort enrichment with live external data; never blocks on failure."""
    import concurrent.futures

    def _fetch_hospitals():
        return _build_live_hospitals_section(city_name, state)

    def _fetch_geography():
        return _build_live_geography_section(city_name, state)

    def _fetch_connectivity():
        city_record = get_city_by_name(city_name) or {}
        lat = city_record.get("latitude")
        lon = city_record.get("longitude")
        if lat is None or lon is None:
            return None
        return get_live_connectivity(city_name, state, float(lat), float(lon))

    _LIVE_TIMEOUT = 15

    t0 = time.time()
    pool = concurrent.futures.ThreadPoolExecutor(max_workers=3)
    fut_hosp = pool.submit(_fetch_hospitals)
    fut_geo = pool.submit(_fetch_geography)
    fut_conn = pool.submit(_fetch_connectivity)

    for label, fut, key in [
        ("hospitals", fut_hosp, "hospitals"),
        ("geography", fut_geo, "geography"),
        ("connectivity", fut_conn, "connectivity"),
    ]:
        remaining = max(0.1, _LIVE_TIMEOUT - (time.time() - t0))
        try:
            data = fut.result(timeout=remaining)
            if data:
                result[key] = data
        except concurrent.futures.TimeoutError:
            logger.warning("Live %s timed out for %s", label, city_name)
            fut.cancel()
        except Exception as exc:
            logger.warning("Live %s failed for %s: %s", label, city_name, exc)

    pool.shutdown(wait=False, cancel_futures=True)


def build_city_description_from_local_evidence(
    city_name: str,
    state: str,
    has_children: bool = False,
    has_elderly: bool = False,
) -> Dict[str, Any]:
    cached = _load_cached_city_descriptions().get(_city_key(city_name))
    if cached:
        result = deepcopy(cached)
        result["city_name"] = city_name
        result["state"] = state
        _enrich_with_live_sections(result, city_name, state)
        return result

    result = _build_uncached_city_description(
        city_name=city_name,
        state=state,
        has_children=has_children,
        has_elderly=has_elderly,
    )
    _enrich_with_live_sections(result, city_name, state)
    return result

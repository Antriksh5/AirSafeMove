"""
Local city evidence service backed by datasets placed in backend/dataset.

This service loads the provided datasets, aggregates city-level evidence where
possible, and produces deterministic section payloads for the city description
endpoint.
"""

from __future__ import annotations

import csv
import math
import re
from collections import defaultdict
from functools import lru_cache
from pathlib import Path
from typing import Any, Dict, Iterable, List

from app.services.city_data import get_city_by_name

DATASET_DIR = Path(__file__).resolve().parent.parent.parent / "dataset"


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
    path = DATASET_DIR / "Census.csv"
    rows: List[Dict[str, Any]] = []
    with open(path, encoding="utf-8-sig", newline="") as file:
        reader = csv.DictReader(file)
        for row in reader:
            district = row.get("District", "").strip()
            state = row.get("State", "").strip()
            literacy = row.get("Literacy", "").strip()
            rows.append(
                {
                    "district": district,
                    "district_norm": _normalize(district),
                    "state": state,
                    "state_norm": _normalize(state),
                    "literacy": float(literacy) if literacy else 0.0,
                }
            )
    return rows


@lru_cache(maxsize=1)
def _load_hospital_rows() -> List[Dict[str, Any]]:
    path = DATASET_DIR / "hospital_directory.csv"
    rows: List[Dict[str, Any]] = []
    with open(path, encoding="utf-8-sig", newline="") as file:
        reader = csv.DictReader(file)
        for raw in reader:
            rows.append(
                {
                    "hospital_name": (raw.get("Hospital_Name") or "").strip(),
                    "state": (raw.get("State") or "").strip(),
                    "state_norm": _normalize(raw.get("State")),
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
    return rows


@lru_cache(maxsize=1)
def _load_udise_teacher_map() -> Dict[str, Dict[str, int]]:
    teacher_map: Dict[str, Dict[str, int]] = {}
    for path in _dataset_paths("*_tch.csv"):
        with open(path, encoding="utf-8-sig", newline="") as file:
            reader = csv.DictReader(file)
            for row in reader:
                pseudocode = row.get("pseudocode", "").strip()
                if not pseudocode:
                    continue
                teacher_map[pseudocode] = {
                    "total_teachers": _as_int(row.get("total_tch")),
                    "female_teachers": _as_int(row.get("female")),
                    "trained_teachers": _as_int(row.get("trained_comp")),
                    "postgraduate_teachers": _as_int(row.get("post_graduate_and_above")),
                }
    return teacher_map


@lru_cache(maxsize=1)
def _load_udise_enrollment_map() -> Dict[str, Dict[str, int]]:
    enrollment_map: Dict[str, Dict[str, int]] = defaultdict(
        lambda: {
            "social_enrollment_estimate": 0,
            "minority_enrollment_estimate": 0,
            "row_count": 0,
        }
    )
    for path in _dataset_paths("*_enr1.csv"):
        with open(path, encoding="utf-8-sig", newline="") as file:
            reader = csv.DictReader(file)
            for row in reader:
                pseudocode = row.get("pseudocode", "").strip()
                if not pseudocode:
                    continue
                total = _sum_numeric_columns(row, {"pseudocode", "item_group", "item_id"})
                item_group = row.get("item_group", "").strip()
                if item_group == "1":
                    enrollment_map[pseudocode]["social_enrollment_estimate"] += total
                elif item_group == "5":
                    enrollment_map[pseudocode]["minority_enrollment_estimate"] += total
                enrollment_map[pseudocode]["row_count"] += 1
    return dict(enrollment_map)


@lru_cache(maxsize=1)
def _load_udise_profile_rows() -> List[Dict[str, Any]]:
    rows_by_pseudocode: Dict[str, Dict[str, Any]] = {}
    for path in _dataset_paths("*_prof1.csv"):
        with open(path, encoding="utf-8-sig", newline="") as file:
            reader = csv.DictReader(file)
            for raw in reader:
                pseudocode = (raw.get("pseudocode") or "").strip()
                if not pseudocode:
                    continue
                rows_by_pseudocode[pseudocode] = {
                    "pseudocode": pseudocode,
                    "state": (raw.get("state") or "").strip(),
                    "state_norm": _normalize(raw.get("state")),
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
    return list(rows_by_pseudocode.values())


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
    for row in _load_udise_profile_rows():
        if row["state_norm"] != mapping["state_norm"]:
            continue
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
    for row in _load_hospital_rows():
        if row["state_norm"] != mapping["state_norm"]:
            continue
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
        scope_text = (
            f"The current UDISE files in this repo only cover state(s): {', '.join(udise_scope['states'])}; "
            f"district(s): {', '.join(udise_scope['districts'])}."
            if udise_scope["states"] or udise_scope["districts"]
            else "The current UDISE file scope could not be determined."
        )
        return {
            "score": 6,
            "highlights": [
                "UDISE+ profile rows were not matched for this city yet.",
                scope_text,
                "School-level names are not present in the current UDISE extract.",
            ],
            "description": (
                f"The UDISE+ extracts currently available in the app could not be confidently "
                f"matched to {city_name}, {state}. {scope_text} The section remains limited until either "
                "a broader UDISE export is added or a matching city-specific district is present in the dataset."
            ),
            "key_factors": [
                "No confident UDISE+ city match was found in the current local dataset.",
                "The present extract contains school pseudocodes and profile fields, but not school names.",
                "Broader state coverage is needed before this section can work for more cities.",
            ],
            "sources": [
                "UDISE+ School Basic Profile and Location Related Data (0812_prof1.csv) - matching attempted but incomplete",
                "UDISE+ Teacher Related Data (0812_tch.csv) - available but not joined due city match gap",
                "UDISE+ Social Category and Minority Wise Data (0812_enr1.csv) - available but not joined due city match gap",
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
            f"{school_count:,} schools matched in the UDISE+ profile extract for {district_label}",
            f"{total_teachers:,} teachers recorded, averaging {avg_teachers_per_school:.1f} per matched school",
            f"{total_students:,} students estimated from the social-category enrollment slice; {minority_students:,} in the minority slice",
        ],
        "description": (
            f"The current UDISE+ extracts map {school_count:,} schools to the {district_label} footprint used for "
            f"{city_name}. About {_format_pct(urban_pct)} of these matched schools are marked urban, which is useful for a city relocation context. "
            f"The teacher file records {total_teachers:,} teachers, with {_format_pct(trained_pct)} marked as trained and "
            f"{_format_pct(female_teacher_pct)} recorded as female teachers. The enrollment extract contributes an estimated "
            f"{total_students:,} students in the social-category slice and {minority_students:,} in the minority slice. "
            "This gives a solid district-backed view of scale and staffing, though the current files do not include school names, so the section cannot yet surface named institutions."
        ),
        "key_factors": [
            f"Urban school share: {_format_pct(urban_pct)} of matched schools are tagged urban in UDISE+.",
            f"Teacher quality proxy: {_format_pct(trained_pct)} of recorded teachers are marked trained.",
            f"Access features: {pre_primary_schools:,} schools show pre-primary availability and {approachable_schools:,} are marked approachable by road.",
        ],
        "sources": [
            "UDISE+ School Basic Profile and Location Related Data (0812_prof1.csv) - school count, urban/rural tagging, minority and pre-primary flags",
            "UDISE+ Teacher Related Data (0812_tch.csv) - teacher count, trained teacher count, qualification profile",
            "UDISE+ Social Category and Minority Wise Data (0812_enr1.csv) - enrollment estimates from social-category and minority slices",
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
                "No confident NHP hospital matches found for this city yet",
                "District or city alias mapping likely needs refinement",
                "Hospital directory is loaded and ready for remapping",
            ],
            "description": (
                f"The NHP hospital directory is available locally, but the current city matcher did not find a confident set "
                f"of rows for {city_name}, {state}. Healthcare scoring currently falls back to the app's internal city metric "
                "until the location mapping is tightened."
            ),
            "key_factors": [
                "Hospital evidence is dependent on district and city alias matching.",
                "The directory contains facility-level rows, but several Indian cities need stricter location normalization.",
                "Once the mapping is refined, this section can immediately surface named facilities.",
            ],
            "sources": [
                "National Hospital Directory with Geo Code and Additional Parameters (hospital_directory.csv) - loaded locally but city match incomplete",
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
    return {
        "score": max(1, min(10, hospital_score)),
        "facilities": facilities,
        "description": (
            f"The NHP hospital directory matches {total_hospitals:,} facilities to the {district_label} footprint used for "
            f"{city_name}. Of these, {allopathic_count:,} are listed as allopathic facilities, {emergency_count:,} mention emergency services, "
            f"and {accredited_count:,} show a non-empty accreditation field. Bed counts are sparse in this directory, but {len(known_beds_rows):,} "
            f"rows report beds, totalling {total_known_beds:,} known beds with an average of {avg_beds:.1f} among reported rows. "
            "This creates a good named-facility base for relocation decisions, although the quality signal is still incomplete because many records omit specialties, accreditation, or bed capacity."
        ),
        "key_factors": [
            f"Named facility coverage: {total_hospitals:,} hospital records matched locally for this city footprint.",
            f"Emergency readiness proxy: {emergency_count:,} rows mention emergency services.",
            f"Quality-data gap: only {accredited_count:,} rows expose accreditation and {len(known_beds_rows):,} expose bed counts.",
        ],
        "sources": [
            "National Hospital Directory with Geo Code and Additional Parameters (hospital_directory.csv) - facility names, geographies, specialties, beds, emergency flags",
        ],
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
        return {
            "demographics": f"No district-level census match was found yet for {city_name}, {state}",
            "description": (
                f"The current local Census extract contains district literacy but did not produce a confident match for {city_name}. "
                "This section therefore cannot yet give a reliable district-backed civic profile for the city."
            ),
            "highlights": [
                "The current Census file only contains district literacy values",
                "Religion and language tables are still missing from the local dataset bundle",
                "City-to-district mapping needs refinement for this location",
            ],
            "key_factors": [
                "Community composition needs richer Census tables than the current literacy extract.",
                "District literacy alone is useful but not enough for a full demographics narrative.",
                "Religion and language splits should be added later for a stronger communities section.",
            ],
            "sources": [
                "Census.csv - district literacy extract loaded locally but no confident city match found",
            ],
        }

    literacy = sum(row["literacy"] for row in census_rows) / len(census_rows)
    school_count = len(profile_rows)
    urban_schools = sum(1 for row in profile_rows if row["rural_urban"] == "2")
    urban_pct = _safe_div(urban_schools * 100, school_count) if school_count else 0.0
    school_context_sentence = (
        f"The linked UDISE+ school profile also suggests an urban school share of {_format_pct(urban_pct)} across {school_count:,} matched schools, which helps frame how urban the education footprint appears. "
        if school_count
        else "No matching UDISE+ school-profile rows were found for this city in the current dataset batch, so the civic reading here comes only from the Census literacy file. "
    )

    return {
        "demographics": (
            f"{city_name} is currently mapped to the {district_label} district footprint in {state}; "
            f"the provided Census extract reports literacy of {_format_pct(literacy)} for that district context."
        ),
        "description": (
            f"The current local Census dataset is limited to district literacy, so this section focuses on civic-development context rather than religion or language composition. "
            f"For the district footprint used to represent {city_name}, the literacy value is {_format_pct(literacy)}. "
            f"{school_context_sentence}"
            "This is useful for relocation planning, but it is not yet a full demographic profile because religion and language tables have not been added to the local evidence bundle."
        ),
        "highlights": [
            f"District literacy in the current Census extract: {_format_pct(literacy)}",
            f"Matched school footprint: {school_count:,} schools linked to this district/city mapping",
            f"Urban school share from the UDISE+ profile extract: {_format_pct(urban_pct)}",
        ],
        "key_factors": [
            "This section is district-backed, not neighborhood-backed.",
            "The available Census extract supports literacy analysis but not religion/language splits.",
            "Community interpretation will improve once fuller Census community tables are added.",
        ],
        "sources": [
            "Census.csv - district literacy values from the local Census extract",
            "UDISE+ School Basic Profile and Location Related Data (0812_prof1.csv) - urban versus rural school footprint used as a civic-context proxy",
        ],
    }


def _haversine_km(lat1: float, lon1: float, lat2: float, lon2: float) -> float:
    radius_km = 6371.0
    lat1_rad = math.radians(lat1)
    lon1_rad = math.radians(lon1)
    lat2_rad = math.radians(lat2)
    lon2_rad = math.radians(lon2)
    dlat = lat2_rad - lat1_rad
    dlon = lon2_rad - lon1_rad
    a = (
        math.sin(dlat / 2) ** 2
        + math.cos(lat1_rad) * math.cos(lat2_rad) * math.sin(dlon / 2) ** 2
    )
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
    return round(radius_km * c, 1)


def _nearest_metro(city_name: str) -> Dict[str, Any]:
    metro_names = ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata", "Hyderabad"]
    city_record = get_city_by_name(city_name)
    if not city_record:
        return {"city_name": "Unavailable", "distance_km": 0}
    if city_name in metro_names:
        return {"city_name": city_name, "distance_km": 0}
    candidates = []
    for metro_name in metro_names:
        metro_record = get_city_by_name(metro_name)
        if not metro_record:
            continue
        candidates.append(
            {
                "city_name": metro_name,
                "distance_km": _haversine_km(
                    city_record["latitude"],
                    city_record["longitude"],
                    metro_record["latitude"],
                    metro_record["longitude"],
                ),
            }
        )
    return min(candidates, key=lambda item: item["distance_km"]) if candidates else {"city_name": "Unavailable", "distance_km": 0}


def _build_generic_sections(city_name: str, state: str, has_children: bool, has_elderly: bool) -> Dict[str, Any]:
    city_record = get_city_by_name(city_name) or {}
    nearest_metro = _nearest_metro(city_name)
    aqi = city_record.get("current_aqi")
    avg_rent = city_record.get("avg_rent")

    family_notes = []
    if has_children:
        family_notes.append("family context includes children")
    if has_elderly:
        family_notes.append("family context includes elderly members")
    family_note = ", ".join(family_notes) if family_notes else "general relocation context"

    return {
        "crime_rate": {
            "security_score": 6,
            "description": (
                f"A dedicated crime dataset has not been integrated yet for {city_name}, so the safety section remains conservative. "
                "The app currently avoids inventing city-level crime numbers and instead keeps this section neutral until NCRB-backed evidence is added."
            ),
            "key_factors": [
                "No NCRB or police dataset has been connected locally yet.",
                "This section is intentionally conservative rather than speculative.",
                f"Current output is suitable only as a placeholder for {family_note}.",
            ],
            "sources": [
                "No local crime dataset connected yet - NCRB integration pending",
            ],
        },
        "connectivity": {
            "nearest_metro": nearest_metro["city_name"],
            "distance_km": nearest_metro["distance_km"],
            "transport_options": "Dataset-backed rail, road, and airport sources are still pending integration",
            "description": (
                f"The current local evidence layer estimates the nearest major metro to {city_name} as {nearest_metro['city_name']} "
                f"at roughly {nearest_metro['distance_km']} km by straight-line distance using the app's city coordinates. "
                "This is a useful orientation signal, but proper connectivity scoring still needs dedicated rail, airport, and road datasets."
            ),
            "key_factors": [
                "Nearest-metro distance is computed from the internal city coordinate dataset.",
                "Travel convenience is not yet backed by train, airport, or highway feeds.",
                "This section will improve once connectivity datasets are added.",
            ],
            "sources": [
                "Internal city coordinate dataset (backend/app/services/city_data.py) - city coordinates and metro-distance estimate",
            ],
        },
        "geography": {
            "terrain": "Dataset pending",
            "climate": "Dataset pending",
            "elevation_m": 0,
            "features": [
                f"Coordinates available: {city_record.get('latitude', 'unknown')}, {city_record.get('longitude', 'unknown')}",
                f"Current AQI in app dataset: {aqi if aqi is not None else 'unavailable'}",
                f"Average rent in app dataset: Rs. {avg_rent:,}" if avg_rent is not None else "Average rent unavailable",
            ],
            "description": (
                f"A dedicated geography dataset has not been wired in yet for {city_name}. The app currently knows the city's coordinates "
                "and some relocation metrics, but terrain, climate normals, and elevation still need the external geography sources from your playbook."
            ),
            "key_factors": [
                "Coordinates are available, but terrain and climate APIs are not integrated yet.",
                "This section is intentionally minimal until geography evidence is added.",
                "Open-Meteo, Wikidata, and Open-Elevation are the next high-value additions here.",
            ],
            "sources": [
                "Internal city dataset (backend/app/services/city_data.py) - coordinates, AQI, and rent context",
            ],
        },
    }


def build_city_description_from_local_evidence(
    city_name: str,
    state: str,
    has_children: bool = False,
    has_elderly: bool = False,
) -> Dict[str, Any]:
    generic_sections = _build_generic_sections(city_name, state, has_children, has_elderly)
    return {
        "city_name": city_name,
        "state": state,
        "generated": True,
        "crime_rate": generic_sections["crime_rate"],
        "education": _build_education_section(city_name, state),
        "communities": _build_communities_section(city_name, state),
        "connectivity": generic_sections["connectivity"],
        "hospitals": _build_hospitals_section(city_name, state),
        "geography": generic_sections["geography"],
    }

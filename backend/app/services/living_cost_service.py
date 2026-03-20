"""
Living Cost Service for AirSafe Move.
Loads LivingCostDataset/livingcost_india_all_inr.csv at startup and exposes
per-city affordability metrics used in city scoring.
"""

import csv
import os
import re
from typing import Dict, Optional

# ── Path resolution ────────────────────────────────────────────────────────────
_BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
_CSV_PATH = os.path.join(_BASE_DIR, "LivingCostDataset", "livingcost_india_all_inr.csv")

# ── Internal lookup table: normalised city name → row dict ────────────────────
_LIVING_COST_DATA: Dict[str, dict] = {}


def _normalise(name: str) -> str:
    """Lowercase, strip 'Cost of Living in ' prefix, remove punctuation."""
    name = name.strip().lower()
    name = re.sub(r"^cost of living in\s+", "", name)
    name = re.sub(r"[^a-z0-9 ]", "", name)
    return name.strip()


def _load_csv() -> None:
    global _LIVING_COST_DATA
    if not os.path.exists(_CSV_PATH):
        print(f"[living_cost_service] WARNING: CSV not found at {_CSV_PATH}")
        return

    with open(_CSV_PATH, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            raw_city = row.get("city", "")
            # Skip comparison rows (e.g. "India vs Indonesia …")
            if "vs" in raw_city.lower() or "comparison" in raw_city.lower():
                continue
            key = _normalise(raw_city)
            if not key:
                continue
            try:
                _LIVING_COST_DATA[key] = {
                    "cost_one_person_inr": float(row["cost_one_person_inr"]),
                    "rent_one_person_inr": float(row["rent_one_person_inr"]),
                    "monthly_salary_after_tax_inr": float(row["monthly_salary_after_tax_inr"]),
                    "income_after_rent_inr": float(row["income_after_rent_inr"]),
                    "months_covered": float(row["months_covered"]),
                }
            except (ValueError, KeyError):
                continue

    print(f"[living_cost_service] Loaded {len(_LIVING_COST_DATA)} city entries from CSV.")


# Load eagerly at import time
_load_csv()


def get_living_cost(city_name: str) -> Optional[dict]:
    """
    Return living cost metrics for a given city, or None if not found.

    Matching strategy:
      1. Exact normalised match
      2. Partial match (city name appears anywhere in the key)
    """
    target = _normalise(city_name)
    if target in _LIVING_COST_DATA:
        return _LIVING_COST_DATA[target]

    # Partial match – e.g. "Goa (Panaji)" → matches "goa"
    for key, data in _LIVING_COST_DATA.items():
        if target in key or key in target:
            return data

    return None


def get_affordability_score(city_name: str, num_earning_members: int = 1) -> float:
    """
    Return an affordability score (0–100) based on the living cost dataset.

    Uses `months_covered` (salary / monthly living cost) scaled to the number
    of earning members:
        adjusted_months = months_covered * num_earning_members

    Scoring:
        adjusted_months ≥ 1.5  → 100
        adjusted_months = 1.0  → 67
        adjusted_months = 0.5  → 33
        adjusted_months ≤ 0    → 0
    Linear interpolation between these anchor points, capped at 100.
    """
    data = get_living_cost(city_name)
    if data is None:
        return 50.0  # neutral fallback

    months = data["months_covered"] * max(1, num_earning_members)
    # Clamp and scale: 0 → 0, 1.5+ → 100
    score = min(100.0, max(0.0, (months / 1.5) * 100))
    return round(score, 1)

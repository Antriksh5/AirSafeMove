"""
City description service backed by local evidence datasets.

For the current testing phase, the endpoint returns deterministic,
dataset-backed descriptions instead of relying on prompt-only generation.
"""

from typing import Any, Dict

from app.services.city_evidence_service import build_city_description_from_local_evidence


def generate_city_description(
    city_name: str,
    state: str,
    has_children: bool = False,
    has_elderly: bool = False,
    language: str = "en",
) -> Dict[str, Any]:
    """
    Generate a city description using the local dataset-backed evidence layer.
    """
    return build_city_description_from_local_evidence(
        city_name=city_name,
        state=state,
        has_children=has_children,
        has_elderly=has_elderly,
        language=language,
    )

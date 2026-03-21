"""
City Explore Router — returns AI-generated deep-dive info for a given city.
"""

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.services.city_explore_service import generate_city_explore

router = APIRouter()


class ExploreResponse(BaseModel):
    city_name: str
    state: str
    data: dict


@router.get("/{city_name}")
async def explore_city(city_name: str, state: str = "") -> ExploreResponse:
    """Get detailed exploration info for a city (best areas, schools, hospitals, restaurants, urban life)."""
    try:
        data = generate_city_explore(city_name, state)
        return ExploreResponse(city_name=city_name, state=state, data=data)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to generate city explore data: {str(e)}")

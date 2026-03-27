"""
City Explore Router — returns AI-generated deep-dive info for a given city.
"""

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.services.city_explore_service import generate_city_explore, generate_basic_necessities

router = APIRouter()


class ExploreResponse(BaseModel):
    city_name: str
    state: str
    data: dict


@router.get("/{city_name}/basic-necessities")
async def basic_necessities(city_name: str, language: str = "en") -> dict:
    """Get basic necessities info (electricity, water, LPG, grocery, internet) for a city."""
    try:
        return generate_basic_necessities(city_name, language=language)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to generate basic necessities data: {str(e)}")


@router.get("/{city_name}")
async def explore_city(city_name: str, state: str = "", language: str = "en") -> ExploreResponse:
    """Get detailed exploration info for a city (best areas, schools, hospitals, restaurants, urban life)."""
    try:
        data = generate_city_explore(city_name, state, language=language)
        return ExploreResponse(city_name=city_name, state=state, data=data)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to generate city explore data: {str(e)}")

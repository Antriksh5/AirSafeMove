"""
Cities API Router - Provides city data and AQI information.
"""

from fastapi import APIRouter, HTTPException
from typing import List, Dict, Any

from app.services.city_data import get_all_cities, get_city_by_name, get_city_names, get_professions

router = APIRouter()


@router.get("/")
async def list_cities() -> List[Dict[str, Any]]:
    """Get all cities with their AQI and other data"""
    cities = get_all_cities()
    return [
        {
            "city_name": city["city_name"],
            "state": city["state"],
            "current_aqi": city["current_aqi"],
            "avg_aqi_5yr": city["avg_aqi_5yr"],
            "aqi_trend": city["aqi_trend"],
            "avg_rent": city["avg_rent"],
            "job_score": city["job_score"],
            "healthcare_score": city["healthcare_score"]
        }
        for city in cities
    ]


@router.get("/names")
async def list_city_names() -> List[str]:
    """Get list of all city names for dropdowns"""
    return get_city_names()


@router.get("/professions")
async def list_professions() -> List[str]:
    """Get list of all professions for dropdowns"""
    return get_professions()


@router.get("/{city_name}")
async def get_city(city_name: str) -> Dict[str, Any]:
    """Get detailed data for a specific city"""
    city = get_city_by_name(city_name)
    if not city:
        raise HTTPException(status_code=404, detail=f"City not found: {city_name}")
    return city


@router.get("/{city_name}/aqi")
async def get_city_aqi(city_name: str) -> Dict[str, Any]:
    """Get AQI data for a specific city"""
    city = get_city_by_name(city_name)
    if not city:
        raise HTTPException(status_code=404, detail=f"City not found: {city_name}")
    return {
        "city_name": city["city_name"],
        "current_aqi": city["current_aqi"],
        "avg_aqi_5yr": city["avg_aqi_5yr"],
        "aqi_trend": city["aqi_trend"],
        "category": get_aqi_category(city["current_aqi"])
    }


def get_aqi_category(aqi: int) -> str:
    """Get AQI category description"""
    if aqi <= 50:
        return "Good"
    elif aqi <= 100:
        return "Moderate"
    elif aqi <= 150:
        return "Unhealthy for Sensitive Groups"
    elif aqi <= 200:
        return "Unhealthy"
    elif aqi <= 300:
        return "Very Unhealthy"
    else:
        return "Hazardous"

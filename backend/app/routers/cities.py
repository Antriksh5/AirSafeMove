"""
Cities API Router - Provides city data and AQI information.
"""

from fastapi import APIRouter, HTTPException
from typing import List, Dict, Any
from pydantic import BaseModel

from app.services.city_data import get_all_cities, get_city_by_name, get_city_names, get_professions
from app.services.city_description import generate_city_description


# Response models for city description
class CrimeRate(BaseModel):
    security_score: int
    description: str


class Education(BaseModel):
    score: int
    highlights: List[str]
    description: str


class Communities(BaseModel):
    demographics: str
    highlights: List[str]


class Connectivity(BaseModel):
    nearest_metro: str
    distance_km: int
    transport_options: str
    description: str


class Hospitals(BaseModel):
    score: int
    facilities: List[str]
    description: str


class Geography(BaseModel):
    terrain: str
    climate: str
    elevation_m: int = 0
    features: List[str]
    description: str


class CityDescriptionResponse(BaseModel):
    city_name: str
    state: str
    generated: bool
    crime_rate: CrimeRate
    education: Education
    communities: Communities
    connectivity: Connectivity
    hospitals: Hospitals
    geography: Geography


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


@router.get("/description/{city_name}")
async def get_city_description(
    city_name: str,
    has_children: bool = False,
    has_elderly: bool = False
) -> CityDescriptionResponse:
    """
    Get comprehensive AI-generated description for a city.
    
    Includes:
    - Crime rate and security score
    - Education facilities
    - Communities and demographics
    - Connectivity to metro cities
    - Hospital facilities
    - Geographical features
    
    Parameters:
    - city_name: Name of the city
    - has_children: Whether the family has children (emphasizes education/safety)
    - has_elderly: Whether the family has elderly members (emphasizes healthcare)
    """
    city = get_city_by_name(city_name)
    if not city:
        raise HTTPException(status_code=404, detail=f"City not found: {city_name}")
    
    description_data = generate_city_description(
        city_name=city["city_name"],
        state=city["state"],
        has_children=has_children,
        has_elderly=has_elderly
    )
    
    return CityDescriptionResponse(**description_data)


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

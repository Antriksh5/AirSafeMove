"""
Predictions API Router - ML model prediction endpoints.
"""

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional

from app.ml.prediction_service import (
    calculate_health_sensitivity_score,
    predict_respiratory_risk_reduction,
    predict_life_expectancy_gain,
    calculate_aqi_improvement
)
from app.services.city_data import get_city_by_name

router = APIRouter()


class HealthPredictionRequest(BaseModel):
    current_city: str
    target_city: str
    age: int
    children: int = 0
    elderly: int = 0
    health_conditions: List[str] = ["None"]


class HealthPredictionResponse(BaseModel):
    aqi_improvement_percent: float
    respiratory_risk_reduction: float
    life_expectancy_gain_years: float
    health_sensitivity_score: float


@router.post("/health-impact")
async def predict_health_impact(request: HealthPredictionRequest) -> HealthPredictionResponse:
    """Predict health impact of migrating between two cities"""
    current_city = get_city_by_name(request.current_city)
    target_city = get_city_by_name(request.target_city)
    
    if not current_city:
        raise HTTPException(status_code=404, detail=f"Current city not found: {request.current_city}")
    if not target_city:
        raise HTTPException(status_code=404, detail=f"Target city not found: {request.target_city}")
    
    # Calculate health sensitivity
    health_sensitivity = calculate_health_sensitivity_score(
        request.age,
        request.children > 0,
        request.elderly > 0,
        request.health_conditions
    )
    
    # Calculate AQI improvement
    aqi_improvement = calculate_aqi_improvement(
        current_city["current_aqi"],
        target_city["current_aqi"]
    )
    
    # Calculate health predictions
    aqi_delta = max(0, current_city["current_aqi"] - target_city["current_aqi"])
    
    respiratory_reduction = predict_respiratory_risk_reduction(
        aqi_delta,
        request.age,
        health_sensitivity
    )
    
    life_expectancy_gain = predict_life_expectancy_gain(
        aqi_delta,
        request.age
    )
    
    return HealthPredictionResponse(
        aqi_improvement_percent=aqi_improvement,
        respiratory_risk_reduction=respiratory_reduction,
        life_expectancy_gain_years=life_expectancy_gain,
        health_sensitivity_score=health_sensitivity
    )

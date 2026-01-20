"""
Report API Router - PDF report generation.
"""

from fastapi import APIRouter, HTTPException
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from typing import List, Dict, Any
from datetime import datetime

router = APIRouter()


class ReportRequest(BaseModel):
    user_name: str
    age: int
    profession: str
    current_city: str
    current_aqi: int
    family_type: str
    total_members: int
    children: int
    elderly: int
    health_conditions: List[str]
    max_distance_km: int
    monthly_budget: int | None
    recommendations: List[Dict[str, Any]]
    readiness_score: float
    health_urgency: float
    ai_advisory: str


class ReportResponse(BaseModel):
    report_id: str
    generated_at: str
    download_url: str | None
    report_data: Dict[str, Any]


@router.post("/generate")
async def generate_report(request: ReportRequest) -> ReportResponse:
    """Generate migration readiness report"""
    report_id = f"report_{datetime.now().strftime('%Y%m%d_%H%M%S')}"
    generated_at = datetime.now().isoformat()
    
    # Build comprehensive report data
    report_data = {
        "report_id": report_id,
        "generated_at": generated_at,
        "user_profile": {
            "name": request.user_name,
            "age": request.age,
            "profession": request.profession
        },
        "current_situation": {
            "city": request.current_city,
            "aqi": request.current_aqi,
            "aqi_category": get_aqi_category(request.current_aqi)
        },
        "family_details": {
            "type": request.family_type,
            "total_members": request.total_members,
            "children": request.children,
            "elderly": request.elderly,
            "health_conditions": request.health_conditions
        },
        "constraints": {
            "max_distance_km": request.max_distance_km,
            "monthly_budget": request.monthly_budget
        },
        "assessment": {
            "readiness_score": request.readiness_score,
            "health_urgency": request.health_urgency,
            "readiness_level": get_readiness_level(request.readiness_score)
        },
        "recommendations": request.recommendations,
        "ai_advisory": request.ai_advisory,
        "top_recommendation": request.recommendations[0] if request.recommendations else None
    }
    
    return ReportResponse(
        report_id=report_id,
        generated_at=generated_at,
        download_url=None,  # PDF generation would be implemented here
        report_data=report_data
    )


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


def get_readiness_level(score: float) -> str:
    """Get readiness level description"""
    if score >= 80:
        return "Highly Ready"
    elif score >= 60:
        return "Ready"
    elif score >= 40:
        return "Moderately Ready"
    else:
        return "Needs Preparation"

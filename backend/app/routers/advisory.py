"""
Advisory API Router - AI-generated migration advice.
"""

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional, Dict, Any
import os

from app.services.ai_advisory import generate_migration_advisory

router = APIRouter()


class AdvisoryRequest(BaseModel):
    user_name: str
    age: int
    profession: str
    current_city: str
    current_aqi: int
    family_type: str = "Nuclear Family"
    total_members: int = 1
    children: int = 0
    elderly: int = 0
    health_conditions: List[str] = ["None"]
    top_recommendations: List[Dict[str, Any]]
    readiness_score: float
    health_urgency: float


class AdvisoryResponse(BaseModel):
    advisory: str
    generated: bool


@router.post("/")
async def get_advisory(request: AdvisoryRequest) -> AdvisoryResponse:
    """Generate AI-powered migration advisory"""
    # Check if GROQ_API_KEY is set
    if not os.getenv("GROQ_API_KEY"):
        # Return a fallback advisory if API key not configured
        return AdvisoryResponse(
            advisory=generate_fallback_advisory(request),
            generated=False
        )
    
    try:
        advisory = generate_migration_advisory(
            user_name=request.user_name,
            user_age=request.age,
            profession=request.profession,
            current_city=request.current_city,
            current_aqi=request.current_aqi,
            family_type=request.family_type,
            total_members=request.total_members,
            children=request.children,
            elderly=request.elderly,
            health_conditions=request.health_conditions,
            top_recommendations=request.top_recommendations,
            readiness_score=request.readiness_score,
            health_urgency=request.health_urgency
        )
        return AdvisoryResponse(advisory=advisory, generated=True)
    except Exception as e:
        # Fallback to template-based advisory
        return AdvisoryResponse(
            advisory=generate_fallback_advisory(request),
            generated=False
        )


def generate_fallback_advisory(request: AdvisoryRequest) -> str:
    """Generate template-based advisory when AI is unavailable"""
    top_city = request.top_recommendations[0] if request.top_recommendations else None
    
    if not top_city:
        return f"""Dear {request.user_name},

Based on your current residence in {request.current_city} with an AQI of {request.current_aqi}, we recommend exploring migration options for better air quality and health outcomes.

Your Migration Readiness Score is {request.readiness_score:.0f}/100, indicating {'strong readiness' if request.readiness_score > 70 else 'moderate readiness' if request.readiness_score > 50 else 'potential challenges'} for relocation.

Please consult with local real estate agents and healthcare providers to plan your migration journey."""
    
    health_context = ""
    if request.children > 0:
        health_context += f" Your {request.children} child(ren) will particularly benefit from cleaner air, as developing lungs are highly sensitive to pollution."
    if request.elderly > 0:
        health_context += f" The elderly members in your family will experience reduced respiratory strain in a cleaner environment."
    
    return f"""Dear {request.user_name},

Based on our comprehensive AI analysis, we strongly recommend considering migration from {request.current_city} (AQI: {request.current_aqi}) to {top_city['city_name']}, {top_city['state']} (AQI: {top_city['target_aqi']}).

This move offers a remarkable {top_city['aqi_improvement_percent']:.1f}% improvement in air quality, which translates to an estimated {top_city['respiratory_risk_reduction']:.1f}% reduction in respiratory health risks and a potential life expectancy gain of {top_city['life_expectancy_gain_years']} years based on epidemiological research.{health_context}

For your profession in {request.profession}, {top_city['city_name']} shows a job compatibility score of {top_city['job_match_score']}/100, with average monthly rent around ₹{top_city['avg_rent']:,}. The city is approximately {top_city['distance_km']:.0f} km from your current location.

Your overall Migration Readiness Score is {request.readiness_score:.0f}/100. {'You appear well-positioned for this transition.' if request.readiness_score > 70 else 'Consider planning carefully to ensure a smooth transition.' if request.readiness_score > 50 else 'We recommend taking gradual steps and thoroughly researching before making a decision.'}

We encourage you to visit {top_city['city_name']} to explore neighborhoods and job opportunities before making your final decision. Your family's health is an investment worth making.

Wishing you cleaner air and better health!"""

"""
Google Gemini AI Advisory Service for personalized migration explanations.
Uses gemini-2.5-flash model for human-readable insights.
"""

import logging
import os
import time
from typing import List, Dict, Any

import google.generativeai as genai

logger = logging.getLogger(__name__)

_advisory_cooldown_until: float = 0.0


def get_gemini_model(system_instruction: str = None, temperature: float = 0.7, max_output_tokens: int = 800):
    """Get Gemini model with API key from environment"""
    if time.time() < _advisory_cooldown_until:
        raise ValueError("Gemini quota cooldown active, try again later")

    api_key = os.getenv("GEMINI_API_KEY")
    if not api_key:
        raise ValueError("GEMINI_API_KEY environment variable not set")
    genai.configure(api_key=api_key)
    return genai.GenerativeModel(
        "gemini-2.5-flash",
        system_instruction=system_instruction,
        generation_config=genai.types.GenerationConfig(
            temperature=temperature,
            max_output_tokens=max_output_tokens,
        ),
    )


def generate_migration_advisory(
    user_name: str,
    user_age: int,
    professions: List[str],
    earning_members: int,
    current_city: str,
    current_aqi: int,
    family_type: str,
    total_members: int,
    children: int,
    elderly: int,
    health_conditions: List[str],
    top_recommendations: List[Dict[str, Any]],
    readiness_score: float,
    health_urgency: float
) -> str:
    """
    Generate personalized AI migration advisory using Google Gemini.
    """
    model = get_gemini_model(
        system_instruction="You are a compassionate migration advisor who helps families make informed decisions about relocating for better air quality and health outcomes. You balance medical insights with practical life considerations.",
        temperature=0.7,
        max_output_tokens=800,
    )
    
    # Build context for the AI
    recommendations_context = ""
    for i, rec in enumerate(top_recommendations[:3], 1):
        recommendations_context += f"""
City {i}: {rec['city_name']}, {rec['state']}
- Suitability Score: {rec['suitability_score']}/100
- AQI Improvement: {rec['aqi_improvement_percent']:.1f}%
- Current AQI: {rec['current_aqi']} → Target AQI: {rec['target_aqi']}
- Respiratory Risk Reduction: {rec['respiratory_risk_reduction']:.1f}%
- Life Expectancy Gain: {rec['life_expectancy_gain_years']} years
- Distance: {rec['distance_km']:.0f} km
- Average Rent: ₹{rec['avg_rent']:,}/month
- Job Match Score: {rec['job_match_score']}/100
"""
    
    professions_str = ", ".join(professions) if professions else "General"
    health_context = ", ".join([c for c in health_conditions if c != "None"]) or "No specific conditions"
    
    family_context = f"{family_type} with {total_members} member(s)"
    if children > 0:
        family_context += f", including {children} child(ren)"
    if elderly > 0:
        family_context += f" and {elderly} elderly member(s)"
    
    prompt = f"""You are an expert migration advisor helping Indian families relocate for better quality of life, jobs, and health.

USER PROFILE:
- Name: {user_name}
- Age: {user_age}
- Professions ({earning_members} earning member(s)): {professions_str}
- Current City: {current_city} (AQI: {current_aqi} - {'Hazardous' if current_aqi > 200 else 'Unhealthy' if current_aqi > 150 else 'Moderate' if current_aqi > 100 else 'Good'})
- Family: {family_context}
- Health Conditions: {health_context}

ML MODEL OUTPUTS:
- Migration Readiness Score: {readiness_score}/100
- Health Urgency Score: {health_urgency}/100

TOP RECOMMENDED CITIES (ranked by balanced score: job market 30%, living cost 20%, healthcare 15%, AQI 10%, distance 10%, AQI trend 5%, education/community/connectivity 10%):
{recommendations_context}

TASK:
Generate a personalized, empathetic migration advisory (250-400 words) that:

1. Opens with a warm, personalized greeting using the user's name
2. Explains why the top city was recommended — focus on the OVERALL balanced score, NOT just air quality (mention job market strength, living cost affordability, healthcare quality, and connectivity)
3. For each of the {earning_members} earning member(s) in professions ({professions_str}), mention specific job market compatibility in the top city
4. Discuss living cost affordability: highlight how far the city's average salary stretches compared to living expenses
5. Specifically addresses health and education benefits for any children or elderly family members if applicable
6. Mentions the AQI improvement as ONE of many benefits (not the primary driver)
7. Provides actionable next steps based on their readiness score
8. Ends with an encouraging, forward-looking message

IMPORTANT:
- Use specific numbers from the ML outputs (job scores, AQI improvement %, life expectancy gain, rent)
- Be warm but professional
- Do NOT use markdown formatting (no ##, **, etc.)
- Write in clear paragraphs
- Cities are ranked by a BALANCED score across multiple factors — acknowledge this holistic approach
"""

    global _advisory_cooldown_until
    try:
        response = model.generate_content(prompt)
        return response.text
    except Exception as exc:
        exc_str = str(exc)
        if "429" in exc_str or "quota" in exc_str.lower():
            _advisory_cooldown_until = time.time() + 300
            logger.warning("Advisory quota hit, cooldown 5min: %s", exc)
        else:
            logger.warning("Advisory Gemini call failed: %s", exc)
        return (
            f"Hello {user_name}, based on our analysis your top recommended city is "
            f"{top_recommendations[0]['city_name']} with a suitability score of "
            f"{top_recommendations[0]['suitability_score']}/100. "
            "The AI advisory is temporarily unavailable due to high demand. "
            "Please try again in a few minutes for a detailed personalized advisory."
        )


def generate_city_explanation(
    city_name: str,
    aqi_improvement: float,
    health_benefits: Dict[str, float],
    job_match: float,
    cost_comparison: str
) -> str:
    """
    Generate a brief explanation for why a specific city is recommended.
    """
    model = get_gemini_model(temperature=0.6, max_output_tokens=150)
    
    prompt = f"""Generate a 2-3 sentence explanation for recommending {city_name} for migration:
- AQI will improve by {aqi_improvement:.1f}%
- Respiratory risk reduction: {health_benefits.get('respiratory_reduction', 0):.1f}%
- Life expectancy gain: {health_benefits.get('life_expectancy_gain', 0)} years
- Job match score: {job_match}/100
- Cost comparison: {cost_comparison}

Be concise and focus on the biggest benefit. No markdown formatting."""

    global _advisory_cooldown_until
    try:
        response = model.generate_content(prompt)
        return response.text
    except Exception as exc:
        exc_str = str(exc)
        if "429" in exc_str or "quota" in exc_str.lower():
            _advisory_cooldown_until = time.time() + 300
        logger.warning("City explanation Gemini call failed: %s", exc)
        return f"{city_name} is recommended based on a balanced score across AQI improvement, job market, and healthcare quality."


def generate_health_insight(
    has_children: bool,
    has_elderly: bool,
    health_conditions: List[str],
    aqi_delta: int
) -> str:
    """
    Generate specific health insights for family members.
    """
    if not has_children and not has_elderly and (not health_conditions or health_conditions == ["None"]):
        return ""
    
    model = get_gemini_model(temperature=0.6, max_output_tokens=150)
    
    context_parts = []
    if has_children:
        context_parts.append("young children")
    if has_elderly:
        context_parts.append("elderly family members")
    if health_conditions and health_conditions != ["None"]:
        context_parts.append(f"family members with {', '.join(health_conditions)}")
    
    prompt = f"""Generate a 2-3 sentence health insight for a family with {' and '.join(context_parts)} 
who will experience a {aqi_delta} point reduction in AQI exposure.

Focus on specific health benefits backed by research. Be encouraging but factual. No markdown."""

    global _advisory_cooldown_until
    try:
        response = model.generate_content(prompt)
        return response.text
    except Exception as exc:
        exc_str = str(exc)
        if "429" in exc_str or "quota" in exc_str.lower():
            _advisory_cooldown_until = time.time() + 300
        logger.warning("Health insight Gemini call failed: %s", exc)
        return ""

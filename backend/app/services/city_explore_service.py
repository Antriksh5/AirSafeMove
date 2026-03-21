"""
City Explore AI Service — Gemini-powered deep dive into a recommended city.
Returns structured info: best areas, schools/colleges/hospitals, hotels/restaurants, urban life.
"""

import os
import json
import re
from typing import Dict, Any

import google.generativeai as genai


def _get_model():
    api_key = os.getenv("GEMINI_API_KEY")
    if not api_key:
        return None
    genai.configure(api_key=api_key)
    return genai.GenerativeModel(
        "gemini-2.5-flash",
        generation_config=genai.types.GenerationConfig(
            temperature=0.5,
            max_output_tokens=2000,
        ),
    )


def _get_mock_explore_data(city_name: str) -> Dict[str, Any]:
    return {
        "best_areas": [
            {"name": f"{city_name} Central", "description": "Lively downtown area with great connectivity.", "highlights": ["Metro Access", "Shopping"]},
            {"name": "Green Meadows", "description": "Quiet, leafy suburb perfect for families.", "highlights": ["Parks", "Schools", "Low Noise"]},
            {"name": "Tech Park District", "description": "Close to major offices and IT hubs.", "highlights": ["Walk to Work", "Modern Apartments", "Cafes"]},
            {"name": "Heritage Quarter", "description": "Cultural heart of the city with historical charm.", "highlights": ["Architecture", "Local Markets", "Culture"]},
            {"name": "Sunrise Enclave", "description": "Upcoming modern residential zone.", "highlights": ["New Amenities", "Affordable", "Clean Air"]}
        ],
        "schools": [
            {"name": f"{city_name} International School", "type": "School", "description": "Top-rated K-12 school with global curriculum."},
            {"name": f"University of {city_name}", "type": "College", "description": "Premier higher education institution."},
            {"name": "Elite Tech Academy", "type": "College", "description": "Leading engineering and technology college."}
        ],
        "hospitals": [
            {"name": f"{city_name} General Hospital", "specialty": "Multi-specialty", "description": "Largest public healthcare facility with 24/7 emergency."},
            {"name": "CareWell Medical Center", "specialty": "Cardiology & Orthopedics", "description": "Advanced private hospital preferred by expats."},
            {"name": "City Children's Clinic", "specialty": "Pediatrics", "description": "Dedicated pediatric care with top specialists."}
        ],
        "hotels_restaurants": {
            "hotels": [
                {"name": "The Grand Atrium", "category": "Luxury", "description": "5-star luxury accommodation in the city center."},
                {"name": "Comfort Inn Suites", "category": "Mid-range", "description": "Reliable and comfortable stay for business travelers."},
                {"name": "Backpacker's Haven", "category": "Budget", "description": "Clean and affordable hostel in the cultural district."}
            ],
            "restaurants": [
                {"name": "Spice Route", "cuisine": "Authentic Local", "description": "Famous for traditional spices and historic recipes."},
                {"name": "The Green Fork", "cuisine": "Vegan / Healthy", "description": "Trendy cafe focusing on organic, farm-to-table meals."},
                {"name": "Global Bites", "cuisine": "Continental", "description": "A mix of Italian, Mexican, and Mediterranean dishes."},
                {"name": "Street Food Corner", "cuisine": "Street Food", "description": "The best place to explore authentic street delicacies."}
            ]
        },
        "urban_life": {
            "parks": [
                {"name": "Central Botanical Garden", "description": "Huge expanse of greenery with exotic plant species."},
                {"name": "Riverside Promenade", "description": "Scenic walkway perfect for evening strolls and jogging."},
                {"name": "Children's Park", "description": "Safe, fenced playground with modern equipment."}
            ],
            "nightlife": [
                {"name": "The Neon Lounge", "type": "Lounge", "description": "Sophisticated rooftop bar with city views."},
                {"name": "Club Velocity", "type": "Club", "description": "High-energy dance club with international DJs."},
                {"name": "Acoustic Cafe", "type": "Live Music", "description": "Relaxed venue featuring local indie bands."}
            ],
            "adventures": [
                {"name": "Treetop Zip Line", "type": "Adventure Sports", "description": "Thrilling zip lining experience at the city outskirts."},
                {"name": "Escape Room Connect", "type": "Indoor Activity", "description": "Mind-bending indoor puzzle challenges for groups."},
                {"name": "City Bike Trails", "type": "Outdoor", "description": "Well-maintained cycling routes covering scenic spots."}
            ]
        }
    }


def generate_city_explore(city_name: str, state: str) -> Dict[str, Any]:
    """
    Generate a detailed city exploration guide for the given city.
    Returns a dict with sections: best_areas, education, healthcare, hotels_restaurants, urban_life.
    """
    model = _get_model()
    if not model:
        return _get_mock_explore_data(city_name)

    prompt = f"""You are an expert city guide for India. Provide a comprehensive and accurate city exploration guide for {city_name}, {state}.

Return your response as a valid JSON object with EXACTLY this structure (no markdown, no extra text, only JSON):

{{
  "best_areas": [
    {{
      "name": "Area Name",
      "description": "Short description of why it's great to live there (1-2 sentences)",
      "highlights": ["highlight 1", "highlight 2", "highlight 3"]
    }}
  ],
  "schools": [
    {{
      "name": "School/College Name",
      "type": "School or College",
      "description": "Brief description (1 sentence)"
    }}
  ],
  "hospitals": [
    {{
      "name": "Hospital Name",
      "specialty": "Key specialty or 'Multi-specialty'",
      "description": "Brief description (1 sentence)"
    }}
  ],
  "hotels_restaurants": {{
    "hotels": [
      {{
        "name": "Hotel Name",
        "category": "Luxury / Budget / Mid-range",
        "description": "Brief description (1 sentence)"
      }}
    ],
    "restaurants": [
      {{
        "name": "Restaurant Name",
        "cuisine": "Cuisine type",
        "description": "Brief description (1 sentence)"
      }}
    ]
  }},
  "urban_life": {{
    "parks": [
      {{
        "name": "Park/Garden Name",
        "description": "Brief description (1 sentence)"
      }}
    ],
    "nightlife": [
      {{
        "name": "Venue Name",
        "type": "Bar / Club / Lounge",
        "description": "Brief description (1 sentence)"
      }}
    ],
    "adventures": [
      {{
        "name": "Activity/Place Name",
        "type": "Type of activity",
        "description": "Brief description (1 sentence)"
      }}
    ]
  }}
}}

RULES:
- best_areas: exactly 5 well-known residential areas
- schools: exactly 3 top educational institutions (mix of schools and colleges)
- hospitals: exactly 3 top hospitals
- hotels_restaurants.hotels: exactly 3 hotels of different price ranges
- hotels_restaurants.restaurants: exactly 4 well-known restaurants with diverse cuisine
- urban_life.parks: exactly 3 parks/gardens
- urban_life.nightlife: exactly 3 bars/clubs/lounges (if a family-friendly city, use cafes/cultural venues)
- urban_life.adventures: exactly 3 adventurous or fun activities/places
- Use REAL, accurate place names for {city_name}
- Response must be pure JSON only, no markdown code blocks"""

    response = model.generate_content(prompt)
    raw = response.text.strip()

    # Strip any accidental markdown fences
    raw = re.sub(r"^```(?:json)?\s*", "", raw)
    raw = re.sub(r"\s*```$", "", raw)

    try:
        return json.loads(raw)
    except json.JSONDecodeError:
        # Attempt to find JSON object within response
        match = re.search(r'\{.*\}', raw, re.DOTALL)
        if match:
            return json.loads(match.group())
        raise ValueError(f"Failed to parse Gemini response as JSON for city: {city_name}")

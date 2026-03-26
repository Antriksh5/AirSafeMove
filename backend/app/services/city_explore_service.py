"""
City Explore AI Service — Gemini-powered deep dive into a recommended city.
Returns structured info: best areas, schools/colleges/hospitals, hotels/restaurants, urban life.
"""

import logging
import os
import json
import re
import time
from typing import Dict, Any

import google.generativeai as genai

logger = logging.getLogger(__name__)

_explore_cooldown_until: float = 0.0


def _get_model():
    if time.time() < _explore_cooldown_until:
        return None

    api_key = os.getenv("GEMINI_API_KEY")
    if not api_key:
        return None
    genai.configure(api_key=api_key)
    return genai.GenerativeModel(
        "gemini-2.5-flash",
        generation_config=genai.types.GenerationConfig(
            temperature=0.5,
            max_output_tokens=4096,
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
        "connectivity_extras": {
            "airport_access": {
                "nearest_airport": f"{city_name} Airport",
                "distance_from_city": "10–25 km",
                "travel_time": "30–60 mins by cab",
                "key_airlines": ["IndiGo", "Air India", "SpiceJet", "Akasa Air"],
                "direct_routes": ["Delhi", "Mumbai", "Bengaluru", "Hyderabad"],
                "airport_quality": "Generally convenient with typical peak-hour security queues and app-cab connectivity.",
            },
            "public_transit": {
                "overall_score": 6,
                "metro_available": False,
                "metro_lines": 0,
                "metro_coverage": "Not available",
                "bus_network": "Good",
                "ride_apps": ["Ola", "Uber", "Rapido"],
                "daily_commute_cost": "₹80–₹250",
                "migrant_tip": f"Start with ride apps for your first week in {city_name}, then switch to buses/metro once you learn common routes and peak timings.",
            },
            "inter_city_travel": {
                "major_railway_station": f"{city_name} Junction",
                "top_routes": [
                    {
                        "destination": "Nearby City A",
                        "distance_km": 150,
                        "travel_time_train": "2–3 hrs",
                        "travel_time_road": "3–4 hrs",
                        "frequency": "10+ trains daily",
                    },
                    {
                        "destination": "Nearby City B",
                        "distance_km": 300,
                        "travel_time_train": "4–6 hrs",
                        "travel_time_road": "5–7 hrs",
                        "frequency": "5–10 trains daily",
                    },
                    {
                        "destination": "Nearby City C",
                        "distance_km": 450,
                        "travel_time_train": "6–8 hrs",
                        "travel_time_road": "7–9 hrs",
                        "frequency": "3–7 trains daily",
                    },
                ],
                "bus_terminals": "Main Bus Stand (operators: State RTC, RedBus, private travels)",
                "weekend_getaway_score": 7,
                "migrant_tip": "Book weekend trains early (Tatkal sells fast) and compare bus vs. train on RedBus/IRCTC for best time/cost.",
            },
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


def _get_mock_basic_necessities(city_name: str) -> Dict[str, Any]:
    return {
        "electricity": {
            "provider": f"{city_name} Electricity Board / DISCOM",
            "avg_supply_hours": "20-24 hrs",
            "outage_frequency": "Moderate",
            "power_backup_culture": "Many apartments keep inverters; generators are common in larger societies and offices.",
            "avg_monthly_bill": "₹800–₹1400",
        },
        "water": {
            "source": "Municipal supply + borewell (varies by locality)",
            "supply_frequency": "Daily (timed)",
            "quality_rating": "Average",
            "tanker_dependency": "Moderate",
            "tip": f"Ask your building about water timing and tanker costs in {city_name} before signing a lease.",
        },
        "lpg": {
            "major_distributors": ["Indane", "Bharatgas", "HP Gas"],
            "cylinder_price": "₹900–₹1200",
            "availability": "Easy",
            "piped_gas_available": False,
            "subsidy_applicable": True,
        },
        "grocery": {
            "major_supermarkets": ["Reliance Smart", "DMart", "More", "Spencer’s"],
            "local_market_culture": "Weekly markets and local bazaars are common for fresh produce; prices vary by area.",
            "delivery_apps": ["Blinkit", "Swiggy Instamart", "Zepto"],
            "avg_monthly_cost": "₹3500–₹6500",
        },
        "internet": {
            "major_isps": ["JioFiber", "Airtel Xstream", "BSNL", "ACT"],
            "avg_speed_mbps": "50–150",
            "fiber_availability": "Widely available",
            "5g_status": "Available",
            "avg_monthly_cost": "₹500–₹1200",
        },
    }


def generate_basic_necessities(city_name: str) -> Dict[str, Any]:
    model = _get_model()
    if not model:
        return _get_mock_basic_necessities(city_name)

    prompt = f"""You are a city data expert for Indian cities. For the city "{city_name}", return detailed
information about basic daily necessities for someone who has recently migrated there.

Return ONLY a valid JSON object with NO markdown, no backticks, no explanation.
Use this exact shape:

{{
  "electricity": {{
    "provider": "name of the local DISCOM or electricity board",
    "avg_supply_hours": "daily average supply hours (e.g. '22-24 hrs')",
    "outage_frequency": "Low / Moderate / High",
    "power_backup_culture": "one sentence on how common inverters/generators are",
    "avg_monthly_bill": "approximate monthly bill in INR for a 1BHK (e.g. '₹800–₹1200')"
  }},
  "water": {{
    "source": "primary water source (e.g. river, reservoir, borewell)",
    "supply_frequency": "how often piped water is supplied (e.g. 'Daily, 2 hrs morning')",
    "quality_rating": "Good / Average / Poor",
    "tanker_dependency": "Low / Moderate / High",
    "tip": "one practical tip for a new migrant about water in {city_name}"
  }},
  "lpg": {{
    "major_distributors": ["list", "of", "2-3 distributor names or brands"],
    "cylinder_price": "approximate 14.2kg cylinder price in INR",
    "availability": "Easy / Moderate / Difficult",
    "piped_gas_available": true,
    "subsidy_applicable": true
  }},
  "grocery": {{
    "major_supermarkets": ["list of 3-4 supermarket chains present"],
    "local_market_culture": "one sentence on sabzi mandis or local bazaars",
    "delivery_apps": ["list of 2-3 grocery delivery apps active in the city"],
    "avg_monthly_cost": "approximate monthly grocery cost in INR for a single person"
  }},
  "internet": {{
    "major_isps": ["list of 3-4 ISPs available"],
    "avg_speed_mbps": "average broadband speed in Mbps",
    "fiber_availability": "Widely available / Limited / Not available",
    "5g_status": "Available / Rolling out / Not available",
    "avg_monthly_cost": "approximate monthly broadband cost in INR"
  }}
}}"""

    global _explore_cooldown_until
    try:
        response = model.generate_content(prompt)
    except Exception as exc:
        exc_str = str(exc)
        if "429" in exc_str or "quota" in exc_str.lower():
            _explore_cooldown_until = time.time() + 300
            logger.warning("Basic necessities quota hit, cooldown 5min: %s", exc)
        else:
            logger.warning("Basic necessities Gemini call failed: %s", exc)
        return _get_mock_basic_necessities(city_name)

    raw = (getattr(response, "text", None) or "").strip()
    if not raw:
        return _get_mock_basic_necessities(city_name)

    raw = re.sub(r"^```(?:json)?\s*", "", raw)
    raw = re.sub(r"\s*```$", "", raw)

    try:
        return json.loads(raw)
    except json.JSONDecodeError:
        match = re.search(r"\{.*\}", raw, re.DOTALL)
        if match:
            try:
                return json.loads(match.group())
            except json.JSONDecodeError:
                pass
        logger.warning("Failed to parse basic necessities JSON for %s, using mock", city_name)
        return _get_mock_basic_necessities(city_name)


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
  "connectivity_extras": {{
    "airport_access": {{
      "nearest_airport": "Airport name",
      "distance_from_city": "Approx distance in km (e.g. '18 km')",
      "travel_time": "Estimated travel time from city center (e.g. '45 mins by cab')",
      "key_airlines": ["Airline 1", "Airline 2", "Airline 3", "Airline 4"],
      "direct_routes": ["City 1", "City 2", "City 3", "City 4"],
      "airport_quality": "One short sentence on terminal experience/connectivity"
    }},
    "public_transit": {{
      "overall_score": 0,
      "metro_available": true,
      "metro_lines": 0,
      "metro_coverage": "One line (or 'Not available')",
      "bus_network": "Excellent",
      "ride_apps": ["Ola", "Uber", "Rapido"],
      "daily_commute_cost": "Approx daily commute cost range in INR (e.g. '₹80–₹250')",
      "migrant_tip": "One practical tip for a newcomer"
    }},
    "inter_city_travel": {{
      "major_railway_station": "Main station name",
      "top_routes": [
        {{
          "destination": "City name",
          "distance_km": 0,
          "travel_time_train": "Estimated train duration",
          "travel_time_road": "Estimated road/bus duration",
          "frequency": "How often trains/buses run"
        }}
      ],
      "bus_terminals": "Main bus terminal name + 2-3 key operators",
      "weekend_getaway_score": 0,
      "migrant_tip": "One practical tip for affordable/fast inter-city travel"
    }}
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
- connectivity_extras.airport_access.key_airlines: 3-4 airlines
- connectivity_extras.airport_access.direct_routes: 3-4 cities
- connectivity_extras.public_transit.overall_score: integer 0-10
- connectivity_extras.public_transit.metro_lines: number of operational metro lines (0 if none)
- connectivity_extras.public_transit.bus_network: one of "Excellent", "Good", "Limited", "Poor"
- connectivity_extras.inter_city_travel.top_routes: exactly 3 routes
- connectivity_extras.inter_city_travel.weekend_getaway_score: integer 0-10
- urban_life.parks: exactly 3 parks/gardens
- urban_life.nightlife: exactly 3 bars/clubs/lounges (if a family-friendly city, use cafes/cultural venues)
- urban_life.adventures: exactly 3 adventurous or fun activities/places
- Use REAL, accurate place names for {city_name}
- Response must be pure JSON only, no markdown code blocks"""

    global _explore_cooldown_until
    try:
        response = model.generate_content(prompt)
    except Exception as exc:
        exc_str = str(exc)
        if "429" in exc_str or "quota" in exc_str.lower():
            _explore_cooldown_until = time.time() + 300
            logger.warning("City explore quota hit, cooldown 5min: %s", exc)
        else:
            logger.warning("City explore Gemini call failed: %s", exc)
        return _get_mock_explore_data(city_name)

    raw = (getattr(response, "text", None) or "").strip()
    if not raw:
        return _get_mock_explore_data(city_name)

    raw = re.sub(r"^```(?:json)?\s*", "", raw)
    raw = re.sub(r"\s*```$", "", raw)

    try:
        return json.loads(raw)
    except json.JSONDecodeError:
        match = re.search(r'\{.*\}', raw, re.DOTALL)
        if match:
            try:
                return json.loads(match.group())
            except json.JSONDecodeError:
                pass
        logger.warning("Failed to parse explore JSON for %s, using mock", city_name)
        return _get_mock_explore_data(city_name)

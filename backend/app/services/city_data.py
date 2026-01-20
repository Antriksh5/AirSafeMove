"""
City data with real AQI values from CPCB/Kaggle sources.
This data represents real Indian city air quality and living metrics.
"""

import json
from typing import List, Dict, Any

# Real Indian city data with AQI values sourced from CPCB historical data
INDIAN_CITIES_DATA: List[Dict[str, Any]] = [
    {
        "city_name": "Delhi",
        "state": "Delhi",
        "latitude": 28.6139,
        "longitude": 77.2090,
        "current_aqi": 285,
        "avg_aqi_5yr": 268.5,
        "aqi_trend": "stable",
        "avg_rent": 25000,
        "job_score": 92.0,
        "healthcare_score": 88.0,
        "profession_availability": {
            "IT/Software": 95, "Healthcare": 90, "Finance": 92, "Education": 85,
            "Manufacturing": 78, "Government": 95, "Retail": 88, "Hospitality": 82,
            "Media": 90, "Legal": 88, "Engineering": 90, "Research": 85
        }
    },
    {
        "city_name": "Mumbai",
        "state": "Maharashtra",
        "latitude": 19.0760,
        "longitude": 72.8777,
        "current_aqi": 156,
        "avg_aqi_5yr": 148.2,
        "aqi_trend": "improving",
        "avg_rent": 35000,
        "job_score": 95.0,
        "healthcare_score": 92.0,
        "profession_availability": {
            "IT/Software": 90, "Healthcare": 88, "Finance": 98, "Education": 80,
            "Manufacturing": 75, "Government": 70, "Retail": 92, "Hospitality": 90,
            "Media": 95, "Legal": 92, "Engineering": 85, "Research": 78
        }
    },
    {
        "city_name": "Bangalore",
        "state": "Karnataka",
        "latitude": 12.9716,
        "longitude": 77.5946,
        "current_aqi": 89,
        "avg_aqi_5yr": 95.3,
        "aqi_trend": "improving",
        "avg_rent": 28000,
        "job_score": 96.0,
        "healthcare_score": 90.0,
        "profession_availability": {
            "IT/Software": 99, "Healthcare": 85, "Finance": 85, "Education": 82,
            "Manufacturing": 72, "Government": 65, "Retail": 85, "Hospitality": 80,
            "Media": 75, "Legal": 78, "Engineering": 95, "Research": 92
        }
    },
    {
        "city_name": "Chennai",
        "state": "Tamil Nadu",
        "latitude": 13.0827,
        "longitude": 80.2707,
        "current_aqi": 78,
        "avg_aqi_5yr": 82.1,
        "aqi_trend": "improving",
        "avg_rent": 18000,
        "job_score": 88.0,
        "healthcare_score": 92.0,
        "profession_availability": {
            "IT/Software": 92, "Healthcare": 90, "Finance": 82, "Education": 88,
            "Manufacturing": 85, "Government": 75, "Retail": 80, "Hospitality": 78,
            "Media": 72, "Legal": 80, "Engineering": 88, "Research": 85
        }
    },
    {
        "city_name": "Kolkata",
        "state": "West Bengal",
        "latitude": 22.5726,
        "longitude": 88.3639,
        "current_aqi": 168,
        "avg_aqi_5yr": 172.4,
        "aqi_trend": "stable",
        "avg_rent": 15000,
        "job_score": 78.0,
        "healthcare_score": 82.0,
        "profession_availability": {
            "IT/Software": 75, "Healthcare": 82, "Finance": 78, "Education": 85,
            "Manufacturing": 80, "Government": 85, "Retail": 82, "Hospitality": 78,
            "Media": 80, "Legal": 85, "Engineering": 78, "Research": 80
        }
    },
    {
        "city_name": "Hyderabad",
        "state": "Telangana",
        "latitude": 17.3850,
        "longitude": 78.4867,
        "current_aqi": 95,
        "avg_aqi_5yr": 98.6,
        "aqi_trend": "improving",
        "avg_rent": 20000,
        "job_score": 92.0,
        "healthcare_score": 88.0,
        "profession_availability": {
            "IT/Software": 95, "Healthcare": 85, "Finance": 82, "Education": 80,
            "Manufacturing": 78, "Government": 80, "Retail": 82, "Hospitality": 78,
            "Media": 72, "Legal": 75, "Engineering": 90, "Research": 88
        }
    },
    {
        "city_name": "Pune",
        "state": "Maharashtra",
        "latitude": 18.5204,
        "longitude": 73.8567,
        "current_aqi": 112,
        "avg_aqi_5yr": 118.3,
        "aqi_trend": "improving",
        "avg_rent": 22000,
        "job_score": 88.0,
        "healthcare_score": 85.0,
        "profession_availability": {
            "IT/Software": 90, "Healthcare": 82, "Finance": 78, "Education": 88,
            "Manufacturing": 85, "Government": 68, "Retail": 78, "Hospitality": 75,
            "Media": 70, "Legal": 72, "Engineering": 88, "Research": 85
        }
    },
    {
        "city_name": "Ahmedabad",
        "state": "Gujarat",
        "latitude": 23.0225,
        "longitude": 72.5714,
        "current_aqi": 142,
        "avg_aqi_5yr": 138.5,
        "aqi_trend": "stable",
        "avg_rent": 16000,
        "job_score": 82.0,
        "healthcare_score": 80.0,
        "profession_availability": {
            "IT/Software": 75, "Healthcare": 78, "Finance": 80, "Education": 75,
            "Manufacturing": 90, "Government": 72, "Retail": 85, "Hospitality": 72,
            "Media": 65, "Legal": 75, "Engineering": 82, "Research": 70
        }
    },
    {
        "city_name": "Jaipur",
        "state": "Rajasthan",
        "latitude": 26.9124,
        "longitude": 75.7873,
        "current_aqi": 165,
        "avg_aqi_5yr": 158.2,
        "aqi_trend": "worsening",
        "avg_rent": 14000,
        "job_score": 72.0,
        "healthcare_score": 75.0,
        "profession_availability": {
            "IT/Software": 65, "Healthcare": 72, "Finance": 68, "Education": 78,
            "Manufacturing": 75, "Government": 80, "Retail": 82, "Hospitality": 88,
            "Media": 60, "Legal": 72, "Engineering": 70, "Research": 65
        }
    },
    {
        "city_name": "Lucknow",
        "state": "Uttar Pradesh",
        "latitude": 26.8467,
        "longitude": 80.9462,
        "current_aqi": 225,
        "avg_aqi_5yr": 218.6,
        "aqi_trend": "stable",
        "avg_rent": 12000,
        "job_score": 68.0,
        "healthcare_score": 72.0,
        "profession_availability": {
            "IT/Software": 55, "Healthcare": 70, "Finance": 62, "Education": 80,
            "Manufacturing": 65, "Government": 90, "Retail": 75, "Hospitality": 70,
            "Media": 65, "Legal": 78, "Engineering": 60, "Research": 68
        }
    },
    {
        "city_name": "Shimla",
        "state": "Himachal Pradesh",
        "latitude": 31.1048,
        "longitude": 77.1734,
        "current_aqi": 48,
        "avg_aqi_5yr": 52.3,
        "aqi_trend": "stable",
        "avg_rent": 15000,
        "job_score": 45.0,
        "healthcare_score": 68.0,
        "profession_availability": {
            "IT/Software": 25, "Healthcare": 55, "Finance": 35, "Education": 65,
            "Manufacturing": 20, "Government": 75, "Retail": 55, "Hospitality": 90,
            "Media": 30, "Legal": 45, "Engineering": 30, "Research": 40
        }
    },
    {
        "city_name": "Dehradun",
        "state": "Uttarakhand",
        "latitude": 30.3165,
        "longitude": 78.0322,
        "current_aqi": 72,
        "avg_aqi_5yr": 78.5,
        "aqi_trend": "improving",
        "avg_rent": 14000,
        "job_score": 55.0,
        "healthcare_score": 72.0,
        "profession_availability": {
            "IT/Software": 40, "Healthcare": 65, "Finance": 45, "Education": 78,
            "Manufacturing": 35, "Government": 80, "Retail": 60, "Hospitality": 85,
            "Media": 40, "Legal": 55, "Engineering": 45, "Research": 60
        }
    },
    {
        "city_name": "Coimbatore",
        "state": "Tamil Nadu",
        "latitude": 11.0168,
        "longitude": 76.9558,
        "current_aqi": 58,
        "avg_aqi_5yr": 62.4,
        "aqi_trend": "stable",
        "avg_rent": 12000,
        "job_score": 75.0,
        "healthcare_score": 85.0,
        "profession_availability": {
            "IT/Software": 72, "Healthcare": 82, "Finance": 65, "Education": 80,
            "Manufacturing": 88, "Government": 60, "Retail": 72, "Hospitality": 70,
            "Media": 45, "Legal": 60, "Engineering": 85, "Research": 72
        }
    },
    {
        "city_name": "Mysore",
        "state": "Karnataka",
        "latitude": 12.2958,
        "longitude": 76.6394,
        "current_aqi": 52,
        "avg_aqi_5yr": 55.8,
        "aqi_trend": "stable",
        "avg_rent": 10000,
        "job_score": 62.0,
        "healthcare_score": 78.0,
        "profession_availability": {
            "IT/Software": 55, "Healthcare": 75, "Finance": 50, "Education": 82,
            "Manufacturing": 65, "Government": 70, "Retail": 68, "Hospitality": 85,
            "Media": 40, "Legal": 55, "Engineering": 60, "Research": 70
        }
    },
    {
        "city_name": "Kochi",
        "state": "Kerala",
        "latitude": 9.9312,
        "longitude": 76.2673,
        "current_aqi": 55,
        "avg_aqi_5yr": 58.2,
        "aqi_trend": "stable",
        "avg_rent": 14000,
        "job_score": 72.0,
        "healthcare_score": 90.0,
        "profession_availability": {
            "IT/Software": 75, "Healthcare": 88, "Finance": 70, "Education": 85,
            "Manufacturing": 55, "Government": 65, "Retail": 72, "Hospitality": 88,
            "Media": 55, "Legal": 68, "Engineering": 65, "Research": 72
        }
    },
    {
        "city_name": "Thiruvananthapuram",
        "state": "Kerala",
        "latitude": 8.5241,
        "longitude": 76.9366,
        "current_aqi": 45,
        "avg_aqi_5yr": 48.5,
        "aqi_trend": "stable",
        "avg_rent": 12000,
        "job_score": 65.0,
        "healthcare_score": 92.0,
        "profession_availability": {
            "IT/Software": 70, "Healthcare": 90, "Finance": 62, "Education": 88,
            "Manufacturing": 45, "Government": 82, "Retail": 65, "Hospitality": 82,
            "Media": 55, "Legal": 72, "Engineering": 60, "Research": 78
        }
    },
    {
        "city_name": "Chandigarh",
        "state": "Chandigarh",
        "latitude": 30.7333,
        "longitude": 76.7794,
        "current_aqi": 125,
        "avg_aqi_5yr": 118.4,
        "aqi_trend": "improving",
        "avg_rent": 18000,
        "job_score": 72.0,
        "healthcare_score": 85.0,
        "profession_availability": {
            "IT/Software": 68, "Healthcare": 80, "Finance": 72, "Education": 85,
            "Manufacturing": 55, "Government": 90, "Retail": 75, "Hospitality": 72,
            "Media": 58, "Legal": 78, "Engineering": 65, "Research": 72
        }
    },
    {
        "city_name": "Goa (Panaji)",
        "state": "Goa",
        "latitude": 15.4909,
        "longitude": 73.8278,
        "current_aqi": 42,
        "avg_aqi_5yr": 45.2,
        "aqi_trend": "stable",
        "avg_rent": 20000,
        "job_score": 55.0,
        "healthcare_score": 75.0,
        "profession_availability": {
            "IT/Software": 45, "Healthcare": 65, "Finance": 45, "Education": 60,
            "Manufacturing": 35, "Government": 55, "Retail": 70, "Hospitality": 95,
            "Media": 50, "Legal": 48, "Engineering": 40, "Research": 45
        }
    },
    {
        "city_name": "Visakhapatnam",
        "state": "Andhra Pradesh",
        "latitude": 17.6868,
        "longitude": 83.2185,
        "current_aqi": 68,
        "avg_aqi_5yr": 72.3,
        "aqi_trend": "improving",
        "avg_rent": 13000,
        "job_score": 70.0,
        "healthcare_score": 78.0,
        "profession_availability": {
            "IT/Software": 65, "Healthcare": 75, "Finance": 58, "Education": 72,
            "Manufacturing": 80, "Government": 72, "Retail": 68, "Hospitality": 75,
            "Media": 45, "Legal": 58, "Engineering": 78, "Research": 65
        }
    },
    {
        "city_name": "Indore",
        "state": "Madhya Pradesh",
        "latitude": 22.7196,
        "longitude": 75.8577,
        "current_aqi": 118,
        "avg_aqi_5yr": 125.6,
        "aqi_trend": "improving",
        "avg_rent": 11000,
        "job_score": 72.0,
        "healthcare_score": 78.0,
        "profession_availability": {
            "IT/Software": 62, "Healthcare": 75, "Finance": 68, "Education": 78,
            "Manufacturing": 75, "Government": 75, "Retail": 80, "Hospitality": 72,
            "Media": 52, "Legal": 70, "Engineering": 70, "Research": 60
        }
    },
    {
        "city_name": "Bhopal",
        "state": "Madhya Pradesh",
        "latitude": 23.2599,
        "longitude": 77.4126,
        "current_aqi": 142,
        "avg_aqi_5yr": 148.2,
        "aqi_trend": "stable",
        "avg_rent": 10000,
        "job_score": 65.0,
        "healthcare_score": 75.0,
        "profession_availability": {
            "IT/Software": 52, "Healthcare": 72, "Finance": 58, "Education": 80,
            "Manufacturing": 68, "Government": 88, "Retail": 72, "Hospitality": 68,
            "Media": 55, "Legal": 75, "Engineering": 62, "Research": 65
        }
    },
    {
        "city_name": "Nagpur",
        "state": "Maharashtra",
        "latitude": 21.1458,
        "longitude": 79.0882,
        "current_aqi": 135,
        "avg_aqi_5yr": 142.5,
        "aqi_trend": "stable",
        "avg_rent": 12000,
        "job_score": 65.0,
        "healthcare_score": 78.0,
        "profession_availability": {
            "IT/Software": 55, "Healthcare": 75, "Finance": 60, "Education": 78,
            "Manufacturing": 72, "Government": 78, "Retail": 75, "Hospitality": 65,
            "Media": 50, "Legal": 72, "Engineering": 65, "Research": 58
        }
    },
    {
        "city_name": "Vadodara",
        "state": "Gujarat",
        "latitude": 22.3072,
        "longitude": 73.1812,
        "current_aqi": 98,
        "avg_aqi_5yr": 105.3,
        "aqi_trend": "improving",
        "avg_rent": 12000,
        "job_score": 72.0,
        "healthcare_score": 78.0,
        "profession_availability": {
            "IT/Software": 58, "Healthcare": 75, "Finance": 65, "Education": 78,
            "Manufacturing": 85, "Government": 68, "Retail": 75, "Hospitality": 68,
            "Media": 48, "Legal": 65, "Engineering": 80, "Research": 65
        }
    },
    {
        "city_name": "Surat",
        "state": "Gujarat",
        "latitude": 21.1702,
        "longitude": 72.8311,
        "current_aqi": 108,
        "avg_aqi_5yr": 115.2,
        "aqi_trend": "stable",
        "avg_rent": 14000,
        "job_score": 78.0,
        "healthcare_score": 75.0,
        "profession_availability": {
            "IT/Software": 52, "Healthcare": 70, "Finance": 72, "Education": 68,
            "Manufacturing": 92, "Government": 58, "Retail": 88, "Hospitality": 65,
            "Media": 42, "Legal": 60, "Engineering": 75, "Research": 48
        }
    },
    {
        "city_name": "Mangalore",
        "state": "Karnataka",
        "latitude": 12.9141,
        "longitude": 74.8560,
        "current_aqi": 55,
        "avg_aqi_5yr": 58.4,
        "aqi_trend": "stable",
        "avg_rent": 12000,
        "job_score": 62.0,
        "healthcare_score": 82.0,
        "profession_availability": {
            "IT/Software": 55, "Healthcare": 80, "Finance": 65, "Education": 78,
            "Manufacturing": 55, "Government": 62, "Retail": 70, "Hospitality": 75,
            "Media": 42, "Legal": 58, "Engineering": 60, "Research": 55
        }
    },
    {
        "city_name": "Pondicherry",
        "state": "Puducherry",
        "latitude": 11.9416,
        "longitude": 79.8083,
        "current_aqi": 48,
        "avg_aqi_5yr": 52.1,
        "aqi_trend": "stable",
        "avg_rent": 11000,
        "job_score": 52.0,
        "healthcare_score": 78.0,
        "profession_availability": {
            "IT/Software": 42, "Healthcare": 72, "Finance": 45, "Education": 75,
            "Manufacturing": 48, "Government": 65, "Retail": 62, "Hospitality": 88,
            "Media": 40, "Legal": 50, "Engineering": 45, "Research": 58
        }
    }
]

PROFESSIONS = [
    "IT/Software",
    "Healthcare",
    "Finance",
    "Education",
    "Manufacturing",
    "Government",
    "Retail",
    "Hospitality",
    "Media",
    "Legal",
    "Engineering",
    "Research",
    "Other"
]


def get_all_cities():
    """Get all cities with their data"""
    return INDIAN_CITIES_DATA


def get_city_by_name(city_name: str):
    """Get city data by name"""
    for city in INDIAN_CITIES_DATA:
        if city["city_name"].lower() == city_name.lower():
            return city
    return None


def get_city_names():
    """Get list of all city names"""
    return [city["city_name"] for city in INDIAN_CITIES_DATA]


def get_professions():
    """Get list of all professions"""
    return PROFESSIONS

import logging
from math import cos, radians
from typing import Any, Dict, List, Literal, Optional, Tuple

import httpx
from fastapi import APIRouter, HTTPException, Query
from pydantic import BaseModel
from app.services.city_data import get_city_by_name

router = APIRouter()
logger = logging.getLogger(__name__)

CategoryType = Literal["healthcare", "clinics", "hospitals", "medicals", "education", "tourism", "hotels", "restaurants"]

CATEGORY_TAGS: Dict[CategoryType, List[Tuple[str, str]]] = {
    "healthcare": [
        ("amenity", "hospital"),
        ("amenity", "clinic"),
        ("amenity", "pharmacy"),
        ("amenity", "doctors"),
    ],
    "clinics": [
        ("amenity", "clinic"),
        ("amenity", "doctors"),
    ],
    "hospitals": [
        ("amenity", "hospital"),
    ],
    "medicals": [
        ("amenity", "pharmacy"),
    ],
    "education": [
        ("amenity", "school"),
        ("amenity", "college"),
        ("amenity", "university"),
        ("amenity", "library"),
    ],
    "tourism": [
        ("tourism", "attraction"),
        ("tourism", "museum"),
        ("historic", "monument"),
        ("leisure", "park"),
    ],
    "hotels": [
        ("tourism", "hotel"),
        ("tourism", "guest_house"),
        ("tourism", "hostel"),
    ],
    "restaurants": [
        ("amenity", "restaurant"),
        ("amenity", "cafe"),
        ("amenity", "fast_food"),
    ],
}


class PlacesCenter(BaseModel):
    lat: float
    lon: float


class PlaceItem(BaseModel):
    id: str
    name: str
    lat: float
    lon: float
    type: str
    address: str


class PlacesResponse(BaseModel):
    center: PlacesCenter
    bbox: List[float]
    places: List[PlaceItem]


class GeocodeResponse(BaseModel):
    lat: float
    lon: float
    label: str


OVERPASS_ENDPOINTS = [
    "https://overpass-api.de/api/interpreter",
    "https://overpass.kumi.systems/api/interpreter",
    "https://overpass.openstreetmap.fr/api/interpreter",
]


def _build_overpass_query(category: CategoryType, south: float, west: float, north: float, east: float) -> str:
    clauses: List[str] = []
    for key, value in CATEGORY_TAGS[category]:
        clauses.append(f'    node["{key}"="{value}"]({south},{west},{north},{east});')
        clauses.append(f'    way["{key}"="{value}"]({south},{west},{north},{east});')

    query_body = "\n".join(clauses)
    return f"""[out:json][timeout:25];
(
{query_body}
);
out center;"""


def _build_overpass_around_query(category: CategoryType, radius_m: int, lat: float, lon: float) -> str:
    clauses: List[str] = []
    for key, value in CATEGORY_TAGS[category]:
        clauses.append(f'    node["{key}"="{value}"](around:{radius_m},{lat},{lon});')
        clauses.append(f'    way["{key}"="{value}"](around:{radius_m},{lat},{lon});')

    query_body = "\n".join(clauses)
    return f"""[out:json][timeout:25];
(
{query_body}
);
out center;"""


def _extract_lat_lon(element: Dict[str, Any]) -> Tuple[Optional[float], Optional[float]]:
    lat = element.get("lat")
    lon = element.get("lon")

    if lat is None or lon is None:
        center = element.get("center", {})
        lat = center.get("lat")
        lon = center.get("lon")

    if lat is None or lon is None:
        return None, None

    return float(lat), float(lon)


def _extract_name(tags: Dict[str, str]) -> Optional[str]:
    name = tags.get("name") or tags.get("name:en")
    if not name:
        return None
    return name.strip()


def _extract_place_type(tags: Dict[str, str]) -> str:
    return tags.get("amenity") or tags.get("tourism") or tags.get("historic") or tags.get("leisure") or "unknown"


def _extract_address(tags: Dict[str, str]) -> str:
    street = tags.get("addr:street", "").strip()
    city = tags.get("addr:city", "").strip()
    address_parts = [part for part in [street, city] if part]
    return ", ".join(address_parts)


async def _geocode_place_name(
    client: httpx.AsyncClient,
    *,
    name: str,
    city: str,
    headers: Dict[str, str],
) -> Tuple[Optional[float], Optional[float], str]:
    geocode_url = "https://nominatim.openstreetmap.org/search"

    try:
        response = await client.get(
            geocode_url,
            params={"q": f"{name} {city}", "format": "json", "limit": 1},
            headers=headers,
        )
        if response.status_code != 200:
            return None, None, ""

        payload = response.json()
        if not payload:
            return None, None, ""

        first_match = payload[0]
        lat = first_match.get("lat")
        lon = first_match.get("lon")
        display_name = str(first_match.get("display_name") or "").strip()

        if lat is None or lon is None:
            return None, None, display_name

        return float(lat), float(lon), display_name
    except Exception as exc:
        logger.warning("Place geocoding failed for %s, %s: %s", name, city, exc)
        return None, None, ""


def _bbox_from_radius(lat: float, lon: float, radius_m: int) -> Tuple[float, float, float, float]:
    lat_delta = radius_m / 111_320.0
    lon_divisor = 111_320.0 * max(cos(radians(lat)), 0.1)
    lon_delta = radius_m / lon_divisor
    return lat - lat_delta, lon - lon_delta, lat + lat_delta, lon + lon_delta


def _fallback_geo(city: str) -> Optional[Tuple[float, float, float, float, float, float]]:
    city_row = get_city_by_name(city)
    if not city_row:
        return None

    lat = float(city_row["latitude"])
    lon = float(city_row["longitude"])
    delta = 0.25
    south = lat - delta
    north = lat + delta
    west = lon - delta
    east = lon + delta
    return lat, lon, south, west, north, east


@router.get("/places", response_model=PlacesResponse)
async def get_places(
    city: str = Query(..., min_length=1),
    category: CategoryType = Query(...),
    lat: Optional[float] = Query(default=None),
    lon: Optional[float] = Query(default=None),
    radius_m: int = Query(default=5000, ge=250, le=10000),
) -> PlacesResponse:
    geocode_url = "https://nominatim.openstreetmap.org/search"

    headers = {
        "User-Agent": "AirSafeMove/1.0 (osm-place-explorer)",
        "Accept": "application/json",
    }

    try:
        async with httpx.AsyncClient(timeout=30.0) as client:
            center_lat: float
            center_lon: float
            south: float
            west: float
            north: float
            east: float

            if lat is not None and lon is not None:
                center_lat = float(lat)
                center_lon = float(lon)
                south, west, north, east = _bbox_from_radius(center_lat, center_lon, radius_m)
                overpass_query = _build_overpass_around_query(category, radius_m, center_lat, center_lon)
            else:
                geocode_ok = False
                try:
                    geocode_response = await client.get(
                        geocode_url,
                        params={"q": city, "format": "json", "limit": 1},
                        headers=headers,
                    )
                    if geocode_response.status_code == 200:
                        geocode_data = geocode_response.json()
                        if geocode_data:
                            first_match = geocode_data[0]
                            center_lat = float(first_match["lat"])
                            center_lon = float(first_match["lon"])
                            bbox_vals = first_match["boundingbox"]
                            south = float(bbox_vals[0])
                            north = float(bbox_vals[1])
                            west = float(bbox_vals[2])
                            east = float(bbox_vals[3])
                            geocode_ok = True
                except Exception as exc:
                    logger.warning("Geocoding failed for city=%s: %s", city, exc)

                if not geocode_ok:
                    fallback = _fallback_geo(city)
                    if not fallback:
                        # Final graceful fallback for unknown city names
                        center_lat, center_lon = 20.5937, 78.9629
                        south, west, north, east = 20.3437, 78.7129, 20.8437, 79.2129
                    else:
                        center_lat, center_lon, south, west, north, east = fallback

                overpass_query = _build_overpass_query(category, south, west, north, east)
            elements: List[Dict[str, Any]] = []
            overpass_last_error = ""

            for endpoint in OVERPASS_ENDPOINTS:
                try:
                    overpass_response = await client.post(
                        endpoint,
                        data={"data": overpass_query},
                        headers={"User-Agent": headers["User-Agent"]},
                    )
                    if overpass_response.status_code != 200:
                        overpass_last_error = f"{endpoint} returned {overpass_response.status_code}"
                        continue

                    overpass_json = overpass_response.json()
                    if isinstance(overpass_json, dict):
                        elements = overpass_json.get("elements", []) or []
                        break
                    overpass_last_error = f"{endpoint} returned non-dict JSON"
                except Exception as exc:
                    overpass_last_error = f"{endpoint} error: {exc}"

            if overpass_last_error and not elements:
                logger.warning("Overpass unavailable for city=%s category=%s: %s", city, category, overpass_last_error)
    except Exception as exc:
        logger.exception("Unexpected places API failure city=%s category=%s", city, category)
        # Do not fail hard from places API; return an empty but valid payload.
        return PlacesResponse(
            center=PlacesCenter(lat=20.5937, lon=78.9629),
            bbox=[20.3437, 78.7129, 20.8437, 79.2129],
            places=[],
        )

    places: List[PlaceItem] = []
    async with httpx.AsyncClient(timeout=15.0) as geocode_client:
        for element in elements:
            tags = element.get("tags", {})
            if not isinstance(tags, dict):
                continue

            name = _extract_name(tags)
            if not name:
                continue

            lat, lon = _extract_lat_lon(element)
            address = _extract_address(tags)

            if lat is None or lon is None:
                lat, lon, geocoded_address = await _geocode_place_name(
                    geocode_client,
                    name=name,
                    city=city,
                    headers=headers,
                )
                if lat is None or lon is None:
                    continue
                if not address and geocoded_address:
                    address = geocoded_address

            place_id = f"{element.get('type', 'osm')}-{element.get('id', 'unknown')}"
            place_type = _extract_place_type(tags)

            places.append(
                PlaceItem(
                    id=place_id,
                    name=name,
                    lat=lat,
                    lon=lon,
                    type=place_type,
                    address=address,
                )
            )

    return PlacesResponse(
        center=PlacesCenter(lat=center_lat, lon=center_lon),
        bbox=[south, west, north, east],
        places=places,
    )


@router.get("/places/geocode", response_model=GeocodeResponse)
async def geocode_place(
    name: str = Query(..., min_length=1),
    city: str = Query(..., min_length=1),
) -> GeocodeResponse:
    headers = {
        "User-Agent": "AirSafeMove/1.0 (osm-place-explorer)",
        "Accept": "application/json",
    }

    async with httpx.AsyncClient(timeout=20.0) as client:
        lat, lon, label = await _geocode_place_name(client, name=name, city=city, headers=headers)

    if lat is None or lon is None:
        raise HTTPException(status_code=404, detail=f"Unable to geocode {name} in {city}")

    return GeocodeResponse(lat=lat, lon=lon, label=label or f"{name}, {city}")

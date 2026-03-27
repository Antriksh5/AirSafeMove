import type { GeocodeResponse, PlaceCategory, PlacesResponse } from '../types/places';
// Backend API base URL
export const API_BASE_URL = (process.env.NEXT_PUBLIC_API_URL || 'https://fastapi-backend-44079236102.asia-south1.run.app').replace(/\/$/, '');
// Temporarily force local backend for testing
// export const API_BASE_URL = 'http://127.0.0.1:8000';

function isPlacesResponse(value: unknown): value is PlacesResponse {
    if (!value || typeof value !== 'object') return false;

    const candidate = value as Partial<PlacesResponse>;
    const center = candidate.center as { lat?: unknown; lon?: unknown } | undefined;

    return !!center
        && typeof center.lat === 'number'
        && typeof center.lon === 'number'
        && Array.isArray(candidate.bbox)
        && candidate.bbox.length === 4
        && Array.isArray(candidate.places);
}

// Types
export interface City {
    city_name: string;
    state: string;
    current_aqi: number;
    avg_aqi_5yr: number;
    aqi_trend: string;
    avg_rent: number;
    job_score: number;
    healthcare_score: number;
}

export interface UserProfile {
    name: string;
    age: number;
    professions: string[];
    earningMembers: number;
}

export interface LocationConstraints {
    current_city: string;
    max_distance_km: number;
    monthly_budget: number | null;
}

export interface FamilyHealth {
    family_type: string;
    total_members: number;
    children: number;
    elderly: number;
    health_conditions: string[];
}

export interface MigrationRequest {
    current_city: string;
    age: number;
    professions: string[];       // multi-profession list
    earning_members: number;
    max_distance_km: number;
    monthly_budget: number | null;
    family_type: string;
    total_members: number;
    children: number;
    elderly: number;
    health_conditions: string[];
}

export interface CityRecommendation {
    city_name: string;
    state: string;
    suitability_score: number;
    aqi_improvement_percent: number;
    respiratory_risk_reduction: number;
    life_expectancy_gain_years: number;
    distance_km: number;
    avg_rent: number;
    job_match_score: number;
    current_aqi: number;
    target_aqi: number;
    healthcare_score: number;
    aqi_trend: string;
    // Real-time AQI fields from OpenAQ
    live_aqi?: number;
    historical_avg_aqi?: number;
    aqi_data_source?: string;
}

export interface SavedRecommendation {
    id: string;
    user_id: string;
    target_city: string;
    target_state?: string | null;
    current_aqi?: number | null;
    target_aqi?: number | null;
    aqi_improvement_percent?: number | null;
    suitability_score?: number | null;
    avg_rent?: number | null;
    distance_km?: number | null;
    healthcare_score?: number | null;
    respiratory_risk_reduction?: number | null;
    life_expectancy_gain_years?: number | null;
    job_match_score?: number | null;
    aqi_trend?: string | null;
    advisory_text?: string | null;
    created_at: string;
}

export interface RecommendationResponse {
    recommendations: CityRecommendation[];
    current_aqi: number;
    readiness_score: number;
    health_urgency: number;
    health_sensitivity: number;
}

export interface AdvisoryResponse {
    advisory: string;
    generated: boolean;
}

// City Description interfaces
export interface CrimeRate {
    security_score: number;
    description: string;
    key_factors?: string[];
    sources?: string[];
}

export interface Education {
    score: number;
    highlights: string[];
    description: string;
    key_factors?: string[];
    sources?: string[];
}

export interface Communities {
    demographics: string;
    description?: string;
    highlights: string[];
    key_factors?: string[];
    sources?: string[];
}

export interface Connectivity {
    nearest_metro: string;
    distance_km: number;
    transport_options: string;
    description: string;
    key_factors?: string[];
    sources?: string[];
}

export interface Hospitals {
    score: number;
    facilities: string[];
    description: string;
    key_factors?: string[];
    sources?: string[];
}

export interface Geography {
    terrain: string;
    climate: string;
    elevation_m: number;
    features: string[];
    description: string;
    key_factors?: string[];
    sources?: string[];
}

export interface CityDescription {
    city_name: string;
    state: string;
    generated: boolean;
    crime_rate: CrimeRate;
    education: Education;
    communities: Communities;
    connectivity: Connectivity;
    hospitals: Hospitals;
    geography: Geography;
}

// API Functions
export async function fetchCities(): Promise<City[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/api/cities/`);
        if (!response.ok) throw new Error('Failed to fetch cities');
        return response.json();
    } catch (error) {
        console.error('Error fetching cities:', error);
        return defaultCities;
    }
}

export async function fetchCityNames(): Promise<string[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/api/cities/names`);
        if (!response.ok) throw new Error('Failed to fetch city names');
        return response.json();
    } catch (error) {
        console.error('Error fetching city names:', error);
        return defaultCityNames;
    }
}

export async function fetchProfessions(): Promise<string[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/api/cities/professions`);
        if (!response.ok) throw new Error('Failed to fetch professions');
        return response.json();
    } catch (error) {
        console.error('Error fetching professions:', error);
        return defaultProfessions;
    }
}

export async function fetchCityDescription(
    cityName: string,
    hasChildren: boolean = false,
    hasElderly: boolean = false,
    language: string = 'en'
): Promise<CityDescription> {
    try {
        const params = new URLSearchParams({
            has_children: hasChildren.toString(),
            has_elderly: hasElderly.toString(),
            language
        });
        const url = `${API_BASE_URL}/api/cities/description/${encodeURIComponent(cityName)}?${params}`;
        console.log(`Fetching city description from: ${url}`);
        const response = await fetch(url);
        if (!response.ok) {
            console.error(`fetchCityDescription failed with status: ${response.status}`);
            throw new Error(`Failed to fetch city description (Status: ${response.status})`);
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching city description:', error);
        throw error;
    }
}

interface FetchPlacesOptions {
    lat?: number;
    lon?: number;
    radiusM?: number;
}

export async function fetchPlaces(city: string, category: PlaceCategory, options: FetchPlacesOptions = {}): Promise<PlacesResponse> {
    const params = new URLSearchParams({
        city: city.trim(),
        category,
    });

    if (typeof options.lat === 'number' && typeof options.lon === 'number') {
        params.set('lat', String(options.lat));
        params.set('lon', String(options.lon));
    }

    if (typeof options.radiusM === 'number') {
        params.set('radius_m', String(options.radiusM));
    }

    const response = await fetch(`${API_BASE_URL}/api/places?${params.toString()}`);
    if (!response.ok) {
        const detail = await response.text().catch(() => '');
        throw new Error(`Failed to fetch places for ${category} (${response.status})${detail ? `: ${detail}` : ''}`);
    }

    const payload = await response.json();

    if (!isPlacesResponse(payload)) {
        throw new Error(`Invalid places response for ${category}`);
    }

    return payload;
}

export async function geocodePlace(name: string, city: string): Promise<GeocodeResponse> {
    const params = new URLSearchParams({
        name: name.trim(),
        city: city.trim(),
    });

    const response = await fetch(`${API_BASE_URL}/api/places/geocode?${params.toString()}`);
    if (!response.ok) {
        const detail = await response.text().catch(() => '');
        throw new Error(`Failed to geocode ${name} (${response.status})${detail ? `: ${detail}` : ''}`);
    }

    return response.json();
}


export async function getAdvisory(
    userName: string,
    age: number,
    professions: string[],
    earningMembers: number,
    currentCity: string,
    currentAqi: number,
    familyType: string,
    totalMembers: number,
    children: number,
    elderly: number,
    healthConditions: string[],
    recommendations: CityRecommendation[],
    readinessScore: number,
    healthUrgency: number,
    language: string = 'en'
): Promise<AdvisoryResponse> {
    try {
        const response = await fetch(`${API_BASE_URL}/api/advisory/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                user_name: userName,
                age,
                professions,
                earning_members: earningMembers,
                current_city: currentCity,
                current_aqi: currentAqi,
                family_type: familyType,
                total_members: totalMembers,
                children,
                elderly,
                health_conditions: healthConditions,
                top_recommendations: recommendations,
                readiness_score: readinessScore,
                health_urgency: healthUrgency,
                language,
            }),
        });
        if (!response.ok) throw new Error('Failed to get advisory');
        return response.json();
    } catch (error) {
        console.error('Error getting advisory:', error);
        return { advisory: getMockAdvisory(userName, recommendations[0]), generated: false };
    }
}
// Add token as an argument to functions that interact with user data or protected routes

export async function getRecommendations(
    request: MigrationRequest, 
    token?: string // Added token
): Promise<RecommendationResponse> {
    try {
        const headers: Record<string, string> = { 'Content-Type': 'application/json' };
        
        // Include token if available (Backend will now require it for authenticated users)
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const response = await fetch(`${API_BASE_URL}/api/recommendations/`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(request),
        });
        if (!response.ok) throw new Error('Failed to get recommendations');
        return response.json();
    } catch (error) {
        console.error('Error getting recommendations:', error);
        return getMockRecommendations(request);
    }
}

export async function fetchSavedRecommendations(userId: string, token: string): Promise<SavedRecommendation[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/api/user/saved?user_id=${encodeURIComponent(userId)}`, {
            headers: {
                'Authorization': `Bearer ${token}` // Required for backend Step 3
            }
        });
        if (!response.ok) {
            console.error(`fetchSavedRecommendations returned status: ${response.status}`);
            return [];
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching saved:', error);
        return [];
    }
}

export async function saveRecommendation(
    data: Partial<SavedRecommendation>, 
    token: string // Added token
): Promise<SavedRecommendation | null> {
    try {
        const response = await fetch(`${API_BASE_URL}/api/user/saved`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Required for backend Step 3
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            const errText = await response.text();
            console.error(`Save failed with status ${response.status}:`, errText);
            throw new Error(`Failed to save recommendation: ${response.status} - ${errText}`);
        }
        return response.json();
    } catch (error) {
        console.error('Error saving recommendation:', error);
        throw error;
    }
}

export async function deleteSavedRecommendation(
    savedId: string, 
    userId: string, 
    token: string // Added token
): Promise<boolean> {
    try {
        const response = await fetch(`${API_BASE_URL}/api/user/saved/${encodeURIComponent(savedId)}?user_id=${encodeURIComponent(userId)}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}` // Required for backend Step 3
            }
        });
        return response.ok;
    } catch (error) {
        console.error('Error deleting saved recommendation:', error);
        return false;
    }
}
// Default data for fallback
const defaultCityNames = [
    'Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune',
    'Ahmedabad', 'Jaipur', 'Lucknow', 'Shimla', 'Dehradun', 'Coimbatore', 'Mysore',
    'Kochi', 'Thiruvananthapuram', 'Chandigarh', 'Goa (Panaji)', 'Visakhapatnam',
    'Indore', 'Bhopal', 'Nagpur', 'Vadodara', 'Surat', 'Mangalore', 'Pondicherry'
];

const defaultProfessions = [
    'IT/Software', 'Healthcare', 'Finance', 'Education', 'Manufacturing',
    'Government', 'Retail', 'Hospitality', 'Media', 'Legal', 'Engineering', 'Research', 'Other'
];

const defaultCities: City[] = [
    { city_name: 'Delhi', state: 'Delhi', current_aqi: 285, avg_aqi_5yr: 268.5, aqi_trend: 'stable', avg_rent: 25000, job_score: 92, healthcare_score: 88 },
    { city_name: 'Shimla', state: 'Himachal Pradesh', current_aqi: 48, avg_aqi_5yr: 52.3, aqi_trend: 'stable', avg_rent: 15000, job_score: 45, healthcare_score: 68 },
];

// Mock data generators
function getMockRecommendations(request: MigrationRequest): RecommendationResponse {
    const currentCityAqi = getCityAqi(request.current_city);

    return {
        recommendations: [
            {
                city_name: 'Shimla',
                state: 'Himachal Pradesh',
                suitability_score: 87.5,
                aqi_improvement_percent: 83.2,
                respiratory_risk_reduction: 35.4,
                life_expectancy_gain_years: 2.1,
                distance_km: 320,
                avg_rent: 15000,
                job_match_score: 45,
                current_aqi: currentCityAqi,
                target_aqi: 48,
                healthcare_score: 68,
                aqi_trend: 'stable'
            },
            {
                city_name: 'Dehradun',
                state: 'Uttarakhand',
                suitability_score: 82.3,
                aqi_improvement_percent: 74.7,
                respiratory_risk_reduction: 28.2,
                life_expectancy_gain_years: 1.8,
                distance_km: 250,
                avg_rent: 14000,
                job_match_score: 55,
                current_aqi: currentCityAqi,
                target_aqi: 72,
                healthcare_score: 72,
                aqi_trend: 'improving'
            },
            {
                city_name: 'Mysore',
                state: 'Karnataka',
                suitability_score: 78.9,
                aqi_improvement_percent: 81.8,
                respiratory_risk_reduction: 32.1,
                life_expectancy_gain_years: 1.9,
                distance_km: 1980,
                avg_rent: 10000,
                job_match_score: 62,
                current_aqi: currentCityAqi,
                target_aqi: 52,
                healthcare_score: 78,
                aqi_trend: 'stable'
            },
            {
                city_name: 'Kochi',
                state: 'Kerala',
                suitability_score: 76.4,
                aqi_improvement_percent: 80.7,
                respiratory_risk_reduction: 30.5,
                life_expectancy_gain_years: 1.8,
                distance_km: 2100,
                avg_rent: 14000,
                job_match_score: 72,
                current_aqi: currentCityAqi,
                target_aqi: 55,
                healthcare_score: 90,
                aqi_trend: 'stable'
            },
            {
                city_name: 'Coimbatore',
                state: 'Tamil Nadu',
                suitability_score: 74.2,
                aqi_improvement_percent: 79.6,
                respiratory_risk_reduction: 29.8,
                life_expectancy_gain_years: 1.7,
                distance_km: 2050,
                avg_rent: 12000,
                job_match_score: 75,
                current_aqi: currentCityAqi,
                target_aqi: 58,
                healthcare_score: 85,
                aqi_trend: 'stable'
            }
        ],
        current_aqi: currentCityAqi,
        readiness_score: 72.5,
        health_urgency: 68.3,
        health_sensitivity: 55.0
    };
}

function getCityAqi(cityName: string): number {
    const aqiMap: Record<string, number> = {
        'Delhi': 285, 'Mumbai': 156, 'Bangalore': 89, 'Chennai': 78, 'Kolkata': 168,
        'Hyderabad': 95, 'Pune': 112, 'Ahmedabad': 142, 'Jaipur': 165, 'Lucknow': 225
    };
    return aqiMap[cityName] || 150;
}

function getMockAdvisory(userName: string, topRec: CityRecommendation): string {
    return `Dear ${userName},

Based on our comprehensive AI analysis, we strongly recommend considering migration from your current city to ${topRec.city_name}, ${topRec.state}.

This move offers a remarkable ${topRec.aqi_improvement_percent.toFixed(1)}% improvement in air quality, which translates to an estimated ${topRec.respiratory_risk_reduction.toFixed(1)}% reduction in respiratory health risks and a potential life expectancy gain of ${topRec.life_expectancy_gain_years} years based on epidemiological research.

The city is approximately ${topRec.distance_km.toFixed(0)} km from your current location with average monthly rent around ₹${topRec.avg_rent.toLocaleString()}.

We encourage you to visit ${topRec.city_name} to explore neighborhoods and job opportunities before making your final decision. Your family's health is an investment worth making.

Wishing you cleaner air and better health!`;
}

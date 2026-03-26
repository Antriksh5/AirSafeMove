'use client';

import { useEffect, useRef, useState } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useAuth } from '../../../context/AuthContext';
import {
    CityDescription,
    fetchCityDescription,
    fetchPlaces,
    geocodePlace,
    CityRecommendation,
} from '../../../lib/api';
import PlacesSidebar from '../../../components/PlacesSidebar';
import type { MapViewHandle } from '../../../components/MapView';
import type { Place } from '../../../types/places';
import { CATEGORY_CONFIG, type PlacesResponse } from '../../../types/places';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
const DynamicMapView = dynamic(() => import('../../../components/MapView'), { ssr: false }) as any;
const HOUSING_PLACE_CATEGORIES = ['clinics', 'hospitals', 'medicals', 'education', 'hotels', 'restaurants'] as const;
type HousingPlaceCategory = typeof HOUSING_PLACE_CATEGORIES[number];

interface Area {
    name: string;
    locality?: string;
    lat?: number;
    lon?: number;
    description: string;
    highlights: string[];
}

interface Institution {
    name: string;
    type?: string;
    specialty?: string;
    description: string;
}

interface HotelRestaurant {
    name: string;
    category?: string;
    cuisine?: string;
    description: string;
}

interface ParkEntry {
    name: string;
    description: string;
}

interface NightlifeEntry {
    name: string;
    type: string;
    description: string;
}

interface AdventureEntry {
    name: string;
    type: string;
    description: string;
}

interface AirportAccess {
    nearest_airport: string;
    distance_from_city: string | number;
    travel_time: string;
    key_airlines: string[];
    direct_routes: string[];
    airport_quality: string;
}

interface PublicTransitScore {
    overall_score: number;
    metro_available: boolean;
    metro_lines: number;
    metro_coverage: string;
    bus_network: 'Excellent' | 'Good' | 'Limited' | 'Poor' | string;
    ride_apps: string[];
    daily_commute_cost: string;
    migrant_tip: string;
}

interface InterCityRoute {
    destination: string;
    distance_km: number;
    travel_time_train: string;
    travel_time_road: string;
    frequency: string;
}

interface InterCityTravel {
    major_railway_station: string;
    top_routes: InterCityRoute[];
    bus_terminals: string;
    weekend_getaway_score: number;
    migrant_tip: string;
}

interface CityExploreData {
    best_areas: Area[];
    schools: Institution[];
    hospitals: Institution[];
    hotels_restaurants: {
        hotels: HotelRestaurant[];
        restaurants: HotelRestaurant[];
    };
    connectivity_extras?: {
        airport_access: AirportAccess;
        public_transit: PublicTransitScore;
        inter_city_travel: InterCityTravel;
    };
    urban_life: {
        parks: ParkEntry[];
        nightlife: NightlifeEntry[];
        adventures: AdventureEntry[];
    };
}

interface StoredResultsSnapshot {
    familyHealth?: {
        children?: number;
        elderly?: number;
    };
    userProfile?: {
        profession?: string;
        professions?: string[];
    };
    recommendations?: CityRecommendation[];
}

interface BasicNecessities {
    electricity: {
        provider: string;
        avg_supply_hours: string;
        outage_frequency: string;
        power_backup_culture: string;
        avg_monthly_bill: string;
    };
    water: {
        source: string;
        supply_frequency: string;
        quality_rating: string;
        tanker_dependency: string;
        tip: string;
    };
    lpg: {
        major_distributors: string[];
        cylinder_price: string;
        availability: string;
        piped_gas_available: boolean;
        subsidy_applicable: boolean;
    };
    grocery: {
        major_supermarkets: string[];
        local_market_culture: string;
        delivery_apps: string[];
        avg_monthly_cost: string;
    };
    internet: {
        major_isps: string[];
        avg_speed_mbps: string;
        fiber_availability: string;
        '5g_status': string;
        avg_monthly_cost: string;
    };
}

interface HousingLocation {
    lat: number;
    lon: number;
    name: string;
    locality: string;
}

function parseStoredResultsSnapshot(raw: string | null): StoredResultsSnapshot | null {
    if (!raw) return null;

    try {
        const parsed = JSON.parse(raw) as StoredResultsSnapshot;
        return parsed && typeof parsed === 'object' ? parsed : null;
    } catch (error) {
        console.error('Failed to parse stored city results:', error);
        return null;
    }
}

export default function CityExplorePage() {
    const params = useParams();
    const searchParams = useSearchParams();
    const router = useRouter();
    const { loading: authLoading, user } = useAuth();

    const cityName = decodeURIComponent(params.city_name as string);
    const state = searchParams.get('state') || '';

    const [data, setData] = useState<CityExploreData | null>(null);
    const [descData, setDescData] = useState<CityDescription | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [userProfession, setUserProfession] = useState<string>('your profession');
    const [userProfessions, setUserProfessions] = useState<string[]>([]);
    const [nextCity, setNextCity] = useState<CityRecommendation | null>(null);

    const [basicNecessities, setBasicNecessities] = useState<BasicNecessities | null>(null);
    const [basicNecessitiesLoading, setBasicNecessitiesLoading] = useState<boolean>(false);
    const [basicNecessitiesError, setBasicNecessitiesError] = useState<string | null>(null);

    const [selectedAreaIndex, setSelectedAreaIndex] = useState<number | null>(null);
    const [housingCategory, setHousingCategory] = useState<HousingPlaceCategory>('clinics');
    const [housingLocation, setHousingLocation] = useState<HousingLocation | null>(null);
    const [housingPlaces, setHousingPlaces] = useState<PlacesResponse | null>(null);
    const [housingPlacesLoading, setHousingPlacesLoading] = useState<boolean>(false);
    const [housingPlacesError, setHousingPlacesError] = useState<string | null>(null);
    const [housingSelectedPlaceIndex, setHousingSelectedPlaceIndex] = useState<number | null>(null);

    const housingMapRef = useRef<MapViewHandle | null>(null);

    useEffect(() => {
        if (!authLoading && !user) router.push('/auth');
    }, [authLoading, user, router]);

    useEffect(() => {
        if (authLoading || !user) return;

        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const storedResults = parseStoredResultsSnapshot(sessionStorage.getItem('airsafe_results'));
                let hasChildren = false;
                let hasElderly = false;

                if (storedResults) {
                    hasChildren = (storedResults.familyHealth?.children ?? 0) > 0;
                    hasElderly = (storedResults.familyHealth?.elderly ?? 0) > 0;

                    const snapshotProfessions = (storedResults.userProfile?.professions || []).filter((prof) => prof.trim());
                    const fallbackProfession = (storedResults.userProfile?.profession || '').trim();
                    const resolvedProfessions = snapshotProfessions.length > 0
                        ? snapshotProfessions
                        : (fallbackProfession ? [fallbackProfession] : []);

                    setUserProfessions(resolvedProfessions);
                    setUserProfession(resolvedProfessions[0] || fallbackProfession || 'your profession');

                    const recommendations: CityRecommendation[] = storedResults.recommendations || [];
                    const currentIndex = recommendations.findIndex((recommendation) => recommendation.city_name === cityName);
                    if (currentIndex >= 0 && currentIndex < recommendations.length - 1) {
                        setNextCity(recommendations[currentIndex + 1]);
                    }
                }

                const [exploreRes, descRes] = await Promise.all([
                    fetch(`${API_URL}/api/city-explore/${encodeURIComponent(cityName)}?state=${encodeURIComponent(state)}`),
                    fetchCityDescription(cityName, hasChildren, hasElderly).catch((fetchError) => {
                        console.error('Failed to fetch CityDescription', fetchError);
                        return null;
                    }),
                ]);

                if (!exploreRes.ok) throw new Error('Failed to fetch city explore data');
                const exploreJson = await exploreRes.json();

                setData(exploreJson.data);
                if (descRes) setDescData(descRes);
            } catch (fetchError: any) {
                setError(fetchError.message || 'Something went wrong.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [authLoading, cityName, state, user]);

    useEffect(() => {
        if (authLoading || !user) return;

        const abortController = new AbortController();
        const fetchBasicNecessities = async () => {
            setBasicNecessitiesLoading(true);
            setBasicNecessitiesError(null);
            try {
                const response = await fetch(
                    `${API_URL}/api/city-explore/${encodeURIComponent(cityName)}/basic-necessities`,
                    { signal: abortController.signal }
                );

                if (!response.ok) throw new Error('Failed to fetch basic necessities');
                const payload = await response.json();
                setBasicNecessities(payload as BasicNecessities);
            } catch (fetchError: any) {
                if (fetchError?.name === 'AbortError') return;
                setBasicNecessitiesError(fetchError?.message || 'Failed to load basic necessities.');
                setBasicNecessities(null);
            } finally {
                setBasicNecessitiesLoading(false);
            }
        };

        fetchBasicNecessities();
        return () => abortController.abort();
    }, [authLoading, cityName, user]);

    useEffect(() => {
        if (!housingLocation) return;

        const loadNearbyHousingPlaces = async () => {
            setHousingPlacesLoading(true);
            setHousingPlacesError(null);

            try {
                const response = await fetchPlaces(cityName, housingCategory, {
                    lat: housingLocation.lat,
                    lon: housingLocation.lon,
                    radiusM: 5000,
                });

                const placesWithDistance: Place[] = response.places.map((place) => ({
                    ...place,
                    distanceKm: Math.round(haversineKm(housingLocation.lat, housingLocation.lon, place.lat, place.lon) * 10) / 10,
                }));

                setHousingPlaces({
                    ...response,
                    center: { lat: housingLocation.lat, lon: housingLocation.lon },
                    places: placesWithDistance,
                });
                setHousingSelectedPlaceIndex(null);
            } catch (fetchError: any) {
                setHousingPlacesError(fetchError?.message || 'Failed to load nearby places');
                setHousingPlaces({
                    center: { lat: housingLocation.lat, lon: housingLocation.lon },
                    bbox: [housingLocation.lat - 0.018, housingLocation.lon - 0.018, housingLocation.lat + 0.018, housingLocation.lon + 0.018],
                    places: [],
                });
            } finally {
                setHousingPlacesLoading(false);
            }
        };

        loadNearbyHousingPlaces();
    }, [cityName, housingCategory, housingLocation]);

    useEffect(() => {
        if (!housingLocation) return;

        const timer = window.setTimeout(() => {
            housingMapRef.current?.focusHome();
        }, 0);

        return () => window.clearTimeout(timer);
    }, [housingCategory, housingLocation]);

    if (authLoading || loading) {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, background: '#FDFBF7' }}>
                <div style={{ fontSize: 40 }}>🔍</div>
                <div className="loading-pulse" style={{ fontSize: 18, color: '#4A3B2A', fontFamily: "'Libre Franklin', sans-serif" }}>
                    AIrSafe AI is exploring {cityName}...
                </div>
                <p style={{ color: '#8B7355', fontSize: 14, fontFamily: "'Libre Franklin', sans-serif" }}>Gathering city details & areas...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, background: '#FDFBF7' }}>
                <div style={{ fontSize: 40 }}>⚠️</div>
                <div style={{ color: '#EF4444', fontSize: 18, fontFamily: "'Libre Franklin', sans-serif" }}>{error}</div>
                <button onClick={() => router.back()} style={{ marginTop: 16, padding: '10px 24px', background: '#2C4C3B', color: 'white', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 600, fontFamily: "'Libre Franklin', sans-serif" }}>
                    ← Go Back
                </button>
            </div>
        );
    }

    const sectionTitleStyle: React.CSSProperties = {
        fontSize: 24,
        fontWeight: 600,
        color: '#4A3B2A',
        marginBottom: 20,
        borderBottom: '1px solid #EAE6DF',
        paddingBottom: 12,
        fontFamily: "'Libre Baskerville', serif",
    };

    const cardStyle: React.CSSProperties = {
        background: 'white',
        border: '1px solid #EAE6DF',
        borderRadius: 12,
        padding: 24,
        boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
    };

    const subCardStyle: React.CSSProperties = {
        background: '#FFFFFF',
        border: '1px solid #EAE6DF',
        borderRadius: 14,
        padding: 16,
        boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
    };

    const textStyle: React.CSSProperties = {
        color: '#4A3B2A',
        fontSize: 15,
        lineHeight: 1.7,
        margin: 0,
        fontFamily: "'Libre Franklin', sans-serif",
    };

    const getStatusTone = (rawValue: string): 'green' | 'amber' | 'red' => {
        const value = (rawValue || '').toLowerCase();
        if (!value) return 'amber';
        if (value.includes('good') || value.includes('low') || value.includes('easy') || value.includes('widely') || value === 'available') return 'green';
        if (value.includes('average') || value.includes('moderate') || value.includes('limited') || value.includes('rolling')) return 'amber';
        if (value.includes('poor') || value.includes('high') || value.includes('difficult') || value.includes('not available') || value === 'not') return 'red';
        return 'amber';
    };

    const badgeColors: Record<'green' | 'amber' | 'red', { bg: string; border: string; text: string }> = {
        green: { bg: '#E8F5E9', border: '#C8E6C9', text: '#2E7D32' },
        amber: { bg: '#FFF7E6', border: '#FFE0B2', text: '#A16207' },
        red: { bg: '#FEE2E2', border: '#FECACA', text: '#B91C1C' },
    };

    const badgeStyleFor = (rawValue: string): React.CSSProperties => {
        const tone = getStatusTone(rawValue);
        const colors = badgeColors[tone];
        return {
            display: 'inline-flex',
            alignItems: 'center',
            padding: '6px 12px',
            borderRadius: 9999,
            background: colors.bg,
            border: `1px solid ${colors.border}`,
            color: colors.text,
            fontSize: 12,
            fontWeight: 800,
            fontFamily: "'Libre Franklin', sans-serif",
            whiteSpace: 'nowrap',
        };
    };

    const mapPlaceholderStyle: React.CSSProperties = {
        height: 350,
        marginTop: 24,
        background: '#FAF8F5',
        border: '1px dashed #D6CFC4',
        borderRadius: 16,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const handleAreaClick = async (area: Area, index: number) => {
        setSelectedAreaIndex(index);
        setHousingSelectedPlaceIndex(null);
        setHousingPlacesError(null);

        const locality = getAreaLocality(area, cityName);
        if (typeof area.lat === 'number' && typeof area.lon === 'number') {
            setHousingLocation({
                lat: area.lat,
                lon: area.lon,
                name: area.name,
                locality,
            });
            return;
        }

        try {
            const geocoded = await geocodePlace(area.name, cityName);
            setHousingLocation({
                lat: geocoded.lat,
                lon: geocoded.lon,
                name: area.name,
                locality,
            });
        } catch (geocodeError: any) {
            setHousingLocation(null);
            setHousingPlaces(null);
            setHousingPlacesError(geocodeError?.message || 'Unable to locate this colony on the map');
        }
    };

    const renderHousingMapSection = () => {
        if (!housingLocation) {
            return (
                <div style={{ ...mapPlaceholderStyle, gap: 10 }}>
                    <span style={{ color: '#8B7355', fontSize: 14, fontWeight: 600 }}>
                        Select a colony card to explore nearby essentials
                    </span>
                    <span style={{ color: '#A08C74', fontSize: 12 }}>
                        We’ll pin the locality and show clinics, hospitals, medicals, schools, hotels, or restaurants within 5 km.
                    </span>
                    {housingPlacesError && (
                        <span style={{ color: '#B91C1C', fontSize: 12 }}>{housingPlacesError}</span>
                    )}
                </div>
            );
        }

        const categoryMeta = CATEGORY_CONFIG[housingCategory];
        const payload = housingPlaces;
        const places = payload?.places || [];
        const center = { lat: housingLocation.lat, lon: housingLocation.lon };
        const bbox = payload?.bbox || [center.lat - 0.02, center.lon - 0.02, center.lat + 0.02, center.lon + 0.02] as [number, number, number, number];

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 24 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                    {HOUSING_PLACE_CATEGORIES.map((category) => {
                        const isActive = housingCategory === category;
                        return (
                            <button
                                key={category}
                                type="button"
                                onClick={() => setHousingCategory(category)}
                                style={{
                                    border: `1px solid ${isActive ? CATEGORY_CONFIG[category].color : '#EAE6DF'}`,
                                    background: isActive ? `${CATEGORY_CONFIG[category].color}26` : '#FFFFFF',
                                    color: '#4A3B2A',
                                    padding: '8px 14px',
                                    borderRadius: 9999,
                                    cursor: 'pointer',
                                    fontSize: 12,
                                    fontWeight: 700,
                                }}
                            >
                                {CATEGORY_CONFIG[category].label}
                            </button>
                        );
                    })}
                </div>

                {housingPlacesLoading ? (
                    <div style={mapPlaceholderStyle}>
                        <span style={{ color: '#8B7355', fontSize: 14, fontWeight: 500 }}>
                            Loading nearby {categoryMeta.label.toLowerCase()} around {housingLocation.name}...
                        </span>
                    </div>
                ) : (
                    <>
                        <DynamicMapView
                            ref={(instance: MapViewHandle | null) => { housingMapRef.current = instance; }}
                            places={places}
                            center={center}
                            bbox={bbox}
                            category={housingCategory}
                            homeLocation={housingLocation}
                            onMarkerClick={(index: number) => {
                                setHousingSelectedPlaceIndex(index);
                            }}
                        />
                        {housingPlacesError && (
                            <div style={{ ...cardStyle, color: '#B91C1C', fontSize: 13, padding: 16 }}>
                                {housingPlacesError}
                            </div>
                        )}
                        {places.length > 0 ? (
                            <PlacesSidebar
                                places={places}
                                category={housingCategory}
                                selectedIndex={housingSelectedPlaceIndex}
                                onPlaceClick={(index) => {
                                    setHousingSelectedPlaceIndex(index);
                                    housingMapRef.current?.focusPlace(index);
                                }}
                            />
                        ) : (
                            <div className="card" style={{ color: '#8B7355', fontSize: 14 }}>
                                No nearby {categoryMeta.label.toLowerCase()} found within 5 km of {housingLocation.name}.
                            </div>
                        )}
                    </>
                )}
            </div>
        );
    };

    return (
        <div style={{ minHeight: '100vh', paddingBottom: 100, background: '#FDFBF7', fontFamily: "'Libre Franklin', sans-serif", color: '#4A3B2A' }}>
            <header style={{ padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #EAE6DF' }}>
                <Link href="/" style={{ textDecoration: 'none' }}>
                    <img
                        src="/Logo.png"
                        alt="AirSafe Move"
                        style={{ height: 32, width: 'auto', objectFit: 'contain' }}
                    />
                </Link>
                <button onClick={() => router.back()} style={{ background: 'transparent', padding: '10px 20px', border: '1px solid rgba(139,115,85,0.2)', borderRadius: 8, color: '#4A3B2A', fontSize: 14, fontWeight: 500, cursor: 'pointer', fontFamily: "'Libre Franklin', sans-serif" }}>
                    ← Back to Results
                </button>
            </header>

            <div style={{ maxWidth: 900, margin: '0 auto', paddingTop: 60, paddingLeft: 20, paddingRight: 20 }}>
                <div style={{ textAlign: 'center', marginBottom: 60 }}>
                    <div style={{ display: 'inline-block', background: '#F2EDE4', color: '#8B7355', padding: '6px 16px', borderRadius: 20, fontSize: 12, fontWeight: 600, letterSpacing: 0.5, marginBottom: 16, fontFamily: "'Libre Franklin', sans-serif" }}>
                        ✧ AI CITY GUIDE ✧
                    </div>
                    <h1 style={{ fontSize: 40, fontWeight: 700, color: '#4A3B2A', margin: '0 0 12px 0', fontFamily: "'Libre Baskerville', serif" }}>
                        Explore {cityName}
                    </h1>
                    {state && <p style={{ color: '#8B7355', fontSize: 18, margin: 0, fontFamily: "'Libre Franklin', sans-serif" }}>{state}</p>}
                </div>

                <section style={{ marginBottom: 60 }}>
                    <h2 style={sectionTitleStyle}>1. About {cityName}</h2>
                    <p style={textStyle}>
                        {descData?.geography?.description || `Discover the unique lifestyle, communities, and opportunities waiting for you in ${cityName}. Let our AI-driven insights guide your relocation.`}
                    </p>
                </section>

                {(data?.best_areas && data.best_areas.length > 0) && (
                    <section style={{ marginBottom: 60 }}>
                        <h2 style={sectionTitleStyle}>2. Housing and Accomodation</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                            {data.best_areas.map((area, index) => {
                                const isSelected = selectedAreaIndex === index;
                                return (
                                    <div
                                        key={`${area.name}-${index}`}
                                        role="button"
                                        tabIndex={0}
                                        onClick={() => void handleAreaClick(area, index)}
                                        onKeyDown={(event) => {
                                            if (event.key === 'Enter' || event.key === ' ') {
                                                event.preventDefault();
                                                void handleAreaClick(area, index);
                                            }
                                        }}
                                        style={{
                                            ...cardStyle,
                                            borderLeft: isSelected ? '4px solid #2C4C3B' : index === 0 ? '4px solid #8B7355' : '1px solid #EAE6DF',
                                            borderColor: isSelected ? '#2C4C3B' : '#EAE6DF',
                                            background: isSelected ? '#FFFEFB' : '#FFFFFF',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 12 }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                                <div style={{ width: 32, height: 32, borderRadius: 8, background: index === 0 ? '#8B7355' : '#F2EDE4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 14, color: index === 0 ? 'white' : '#8B7355' }}>
                                                    #{index + 1}
                                                </div>
                                                <div>
                                                    <div style={{ fontWeight: 600, fontSize: 18, color: '#4A3B2A', fontFamily: "'Libre Baskerville', serif" }}>
                                                        {area.name}
                                                    </div>
                                                    <div style={{ color: '#8B7355', fontSize: 13, marginTop: 4 }}>
                                                        {getAreaLocality(area, cityName)}
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    const citySlug = toHousingCitySlug(cityName);
                                                    const housingUrl = `https://housing.com/in/buy/${citySlug}/property-in-${citySlug}`;
                                                    window.open(housingUrl, '_blank', 'noopener,noreferrer');
                                                }}
                                                style={{
                                                    border: '1px solid #EAE6DF',
                                                    background: '#FFFFFF',
                                                    borderRadius: 9999,
                                                    width: 38,
                                                    height: 38,
                                                    cursor: 'pointer',
                                                    fontSize: 18,
                                                    flexShrink: 0,
                                                }}
                                                aria-label={`Open ${area.name} on Housing.com`}
                                            >
                                                🏠
                                            </button>
                                        </div>
                                        <p style={{ ...textStyle, marginBottom: 16, color: '#6A5C4A' }}>{area.description}</p>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                            {area.highlights.map((highlight, highlightIndex) => (
                                                <span key={`${highlight}-${highlightIndex}`} style={{ padding: '6px 14px', borderRadius: 20, background: '#F8F5F0', border: '1px solid #EAE6DF', color: '#8B7355', fontSize: 12, fontWeight: 500, fontFamily: "'Libre Franklin', sans-serif" }}>
                                                    ✓ {highlight}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        {renderHousingMapSection()}
                    </section>
                )}

                <section style={{ marginBottom: 60 }}>
                    <h2 style={sectionTitleStyle}>3. Profession</h2>
                    <div style={cardStyle}>
                        <h3 style={{ fontSize: 18, color: '#4A3B2A', marginBottom: 12, fontWeight: 600, fontFamily: "'Libre Baskerville', serif" }}>
                            Job Searches for {userProfessions.length > 0 ? 'Your Profession(s)' : userProfession}
                        </h3>

                        <p style={{ ...textStyle, color: '#6A5C4A', marginBottom: 16 }}>
                            Use these quick links to search for roles matching your selected profession(s) in <strong>{cityName}</strong>.
                        </p>

                        {userProfessions.length > 0 && (
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 18 }}>
                                {userProfessions.map((profession) => (
                                    <span
                                        key={profession}
                                        style={{
                                            padding: '8px 14px',
                                            borderRadius: 9999,
                                            background: '#F8F5F0',
                                            border: '1px solid #EAE6DF',
                                            color: '#6A5C4A',
                                            fontSize: 13,
                                            fontWeight: 600,
                                            fontFamily: "'Libre Franklin', sans-serif",
                                        }}
                                    >
                                        {profession}
                                    </span>
                                ))}
                            </div>
                        )}

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
                            {(userProfessions.length > 0 ? userProfessions : [userProfession]).map((profession) => (
                                <div
                                    key={`job-links-${profession}`}
                                    style={{
                                        border: '1px solid #EAE6DF',
                                        borderRadius: 12,
                                        padding: 16,
                                        background: '#FFFFFF',
                                        boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                                    }}
                                >
                                    <div style={{ fontSize: 14, fontWeight: 700, color: '#4A3B2A', marginBottom: 10, fontFamily: "'Libre Baskerville', serif" }}>
                                        {profession}
                                    </div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                                        {[
                                            {
                                                label: 'LinkedIn',
                                                url: `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(profession)}&location=${encodeURIComponent(cityName)}`,
                                            },
                                            {
                                                label: 'Indeed',
                                                url: `https://in.indeed.com/jobs?q=${encodeURIComponent(profession)}&l=${encodeURIComponent(cityName)}`,
                                            },
                                            {
                                                label: 'Google Jobs',
                                                url: `https://www.google.com/search?q=${encodeURIComponent(`${profession} jobs in ${cityName}`)}`,
                                            },
                                            {
                                                label: 'Naukri (search)',
                                                url: `https://www.google.com/search?q=${encodeURIComponent(`site:naukri.com ${profession} jobs in ${cityName}`)}`,
                                            },
                                        ].map((provider) => (
                                            <button
                                                key={`${profession}-${provider.label}`}
                                                type="button"
                                                onClick={() => window.open(provider.url, '_blank', 'noopener,noreferrer')}
                                                style={{
                                                    padding: '10px 12px',
                                                    borderRadius: 10,
                                                    border: '1px solid #EAE6DF',
                                                    background: '#F8F5F0',
                                                    color: '#4A3B2A',
                                                    cursor: 'pointer',
                                                    fontSize: 13,
                                                    fontWeight: 600,
                                                    fontFamily: "'Libre Franklin', sans-serif",
                                                }}
                                                aria-label={`Search ${provider.label} jobs for ${profession} in ${cityName}`}
                                            >
                                                {provider.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {descData?.connectivity && (
                    <section style={{ marginBottom: 60 }}>
                        <h2 style={sectionTitleStyle}>4. Connectivity</h2>
                        <div style={cardStyle}>
                            <p style={{ ...textStyle, marginBottom: 24, color: '#6A5C4A' }}>
                                {descData.connectivity.description}
                            </p>
                            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                                <div style={{ background: '#F8F5F0', padding: '16px 24px', borderRadius: 12, flex: '1 1 200px' }}>
                                    <div style={{ fontSize: 12, color: '#8B7355', textTransform: 'uppercase', marginBottom: 6, fontWeight: 600, letterSpacing: 0.5 }}>Nearest Metro</div>
                                    <div style={{ fontWeight: 600, color: '#4A3B2A', fontSize: 16 }}>{descData.connectivity.nearest_metro} <span style={{ color: '#8B7355', fontSize: 14, fontWeight: 400 }}>({descData.connectivity.distance_km} km)</span></div>
                                </div>
                                <div style={{ background: '#F8F5F0', padding: '16px 24px', borderRadius: 12, flex: '1 1 200px' }}>
                                    <div style={{ fontSize: 12, color: '#8B7355', textTransform: 'uppercase', marginBottom: 6, fontWeight: 600, letterSpacing: 0.5 }}>Transport Options</div>
                                    <div style={{ fontWeight: 600, color: '#4A3B2A', fontSize: 16 }}>{descData.connectivity.transport_options}</div>
                                </div>
                            </div>

                            {data?.connectivity_extras && (
                                <div style={{ marginTop: 26, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
                                    <div style={{ background: '#FFFFFF', border: '1px solid #EAE6DF', borderRadius: 14, padding: 16 }}>
                                        <div style={{ fontSize: 12, color: '#8B7355', textTransform: 'uppercase', marginBottom: 10, fontWeight: 600, letterSpacing: 0.5 }}>Airport Access</div>
                                        <div style={{ fontWeight: 700, color: '#4A3B2A', fontSize: 16, marginBottom: 10, fontFamily: "'Libre Baskerville', serif" }}>
                                            {data.connectivity_extras.airport_access.nearest_airport}
                                        </div>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
                                            <div style={{ background: '#F8F5F0', padding: '10px 12px', borderRadius: 12 }}>
                                                <div style={{ fontSize: 11, color: '#8B7355', textTransform: 'uppercase', fontWeight: 600, marginBottom: 4 }}>Distance</div>
                                                <div style={{ fontWeight: 700, color: '#4A3B2A' }}>{String(data.connectivity_extras.airport_access.distance_from_city)}</div>
                                            </div>
                                            <div style={{ background: '#F8F5F0', padding: '10px 12px', borderRadius: 12 }}>
                                                <div style={{ fontSize: 11, color: '#8B7355', textTransform: 'uppercase', fontWeight: 600, marginBottom: 4 }}>Travel Time</div>
                                                <div style={{ fontWeight: 700, color: '#4A3B2A' }}>{data.connectivity_extras.airport_access.travel_time}</div>
                                            </div>
                                        </div>
                                        <div style={{ ...textStyle, color: '#6A5C4A', marginBottom: 12 }}>
                                            {data.connectivity_extras.airport_access.airport_quality}
                                        </div>
                                        <div style={{ fontSize: 12, color: '#8B7355', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>Key Airlines</div>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
                                            {data.connectivity_extras.airport_access.key_airlines.map((airline, index) => (
                                                <span key={`${airline}-${index}`} style={{ padding: '6px 12px', borderRadius: 9999, background: '#F8F5F0', border: '1px solid #EAE6DF', color: '#6A5C4A', fontSize: 12, fontWeight: 600, fontFamily: "'Libre Franklin', sans-serif" }}>
                                                    {airline}
                                                </span>
                                            ))}
                                        </div>
                                        <div style={{ fontSize: 12, color: '#8B7355', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>Direct Routes</div>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                            {data.connectivity_extras.airport_access.direct_routes.map((route, index) => (
                                                <span key={`${route}-${index}`} style={{ padding: '6px 12px', borderRadius: 9999, background: '#FFFFFF', border: '1px solid #EAE6DF', color: '#4A3B2A', fontSize: 12, fontWeight: 700, fontFamily: "'Libre Franklin', sans-serif" }}>
                                                    {route}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div style={{ background: '#FFFFFF', border: '1px solid #EAE6DF', borderRadius: 14, padding: 16 }}>
                                        <div style={{ fontSize: 12, color: '#8B7355', textTransform: 'uppercase', marginBottom: 10, fontWeight: 600, letterSpacing: 0.5 }}>Public Transit Score</div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                                            <div style={{ width: 52, height: 52, borderRadius: 26, background: '#F8F5F0', border: '1px solid #EAE6DF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#2C4C3B', fontSize: 18, fontFamily: "'Libre Baskerville', serif" }}>
                                                {data.connectivity_extras.public_transit.overall_score}/10
                                            </div>
                                            <div>
                                                <div style={{ fontWeight: 700, color: '#4A3B2A', fontSize: 15, fontFamily: "'Libre Baskerville', serif" }}>
                                                    Metro: {data.connectivity_extras.public_transit.metro_available ? 'Available' : 'Not available'}
                                                </div>
                                                <div style={{ fontSize: 13, color: '#8B7355', marginTop: 2 }}>
                                                    Lines: {data.connectivity_extras.public_transit.metro_lines} • Bus network: {data.connectivity_extras.public_transit.bus_network}
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ ...textStyle, color: '#6A5C4A', marginBottom: 10 }}>
                                            <strong>Coverage:</strong> {data.connectivity_extras.public_transit.metro_coverage}
                                        </div>
                                        <div style={{ ...textStyle, color: '#6A5C4A', marginBottom: 10 }}>
                                            <strong>Ride apps:</strong> {data.connectivity_extras.public_transit.ride_apps.join(', ') || '—'}
                                        </div>
                                        <div style={{ ...textStyle, color: '#6A5C4A', marginBottom: 12 }}>
                                            <strong>Daily commute cost:</strong> {data.connectivity_extras.public_transit.daily_commute_cost}
                                        </div>
                                        <div style={{ padding: '12px 14px', borderRadius: 12, background: '#F8F5F0', border: '1px solid #EAE6DF', color: '#6A5C4A', fontSize: 14, lineHeight: 1.6, fontFamily: "'Libre Franklin', sans-serif" }}>
                                            <strong style={{ color: '#4A3B2A' }}>Migrant tip:</strong> {data.connectivity_extras.public_transit.migrant_tip}
                                        </div>
                                    </div>

                                    <div style={{ background: '#FFFFFF', border: '1px solid #EAE6DF', borderRadius: 14, padding: 16 }}>
                                        <div style={{ fontSize: 12, color: '#8B7355', textTransform: 'uppercase', marginBottom: 10, fontWeight: 600, letterSpacing: 0.5 }}>Inter-city Travel</div>
                                        <div style={{ fontWeight: 700, color: '#4A3B2A', fontSize: 15, marginBottom: 10, fontFamily: "'Libre Baskerville', serif" }}>
                                            Major station: {data.connectivity_extras.inter_city_travel.major_railway_station}
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 12 }}>
                                            {data.connectivity_extras.inter_city_travel.top_routes.map((route, index) => (
                                                <div key={`${route.destination}-${index}`} style={{ padding: '12px 14px', borderRadius: 12, background: '#F8F5F0', border: '1px solid #EAE6DF' }}>
                                                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 10 }}>
                                                        <div style={{ fontWeight: 800, color: '#4A3B2A', fontFamily: "'Libre Baskerville', serif" }}>{route.destination}</div>
                                                        <div style={{ fontSize: 12, color: '#8B7355', fontWeight: 700 }}>{route.distance_km} km</div>
                                                    </div>
                                                    <div style={{ marginTop: 6, fontSize: 13, color: '#6A5C4A', fontFamily: "'Libre Franklin', sans-serif" }}>
                                                        Train: {route.travel_time_train} • Road: {route.travel_time_road}
                                                    </div>
                                                    <div style={{ marginTop: 4, fontSize: 12, color: '#8B7355' }}>
                                                        Frequency: {route.frequency}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div style={{ ...textStyle, color: '#6A5C4A', marginBottom: 10 }}>
                                            <strong>Bus terminals:</strong> {data.connectivity_extras.inter_city_travel.bus_terminals}
                                        </div>
                                        <div style={{ ...textStyle, color: '#6A5C4A', marginBottom: 12 }}>
                                            <strong>Weekend getaway score:</strong> {data.connectivity_extras.inter_city_travel.weekend_getaway_score}/10
                                        </div>
                                        <div style={{ padding: '12px 14px', borderRadius: 12, background: '#FFFFFF', border: '1px solid #EAE6DF', color: '#6A5C4A', fontSize: 14, lineHeight: 1.6, fontFamily: "'Libre Franklin', sans-serif" }}>
                                            <strong style={{ color: '#4A3B2A' }}>Migrant tip:</strong> {data.connectivity_extras.inter_city_travel.migrant_tip}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </section>
                )}

                <section style={{ marginBottom: 60 }}>
                    <h2 style={sectionTitleStyle}>5. Basic Necessities</h2>
                    <div style={cardStyle}>
                        <p style={{ ...textStyle, color: '#6A5C4A', marginBottom: 18 }}>
                            Essentials like electricity, water, cooking gas, groceries, and internet can vary by locality. Use this as a practical starting point for settling in.
                        </p>
                        {basicNecessitiesError && (
                            <div style={{ padding: '12px 14px', borderRadius: 12, background: '#FFFEFB', border: '1px solid #EAE6DF' }}>
                                <div style={{ ...textStyle, color: '#8B7355', fontSize: 14 }}>
                                    We couldn't load basic necessities for {cityName}. {basicNecessitiesError}
                                </div>
                            </div>
                        )}

                        {basicNecessitiesLoading && (
                            <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 18 }}>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <div key={`basic-necessities-skeleton-${index}`} style={subCardStyle}>
                                    <div style={{ height: 14, width: '45%', background: '#F2EDE4', borderRadius: 8, marginBottom: 14 }} />
                                    <div style={{ height: 24, width: '70%', background: '#F2EDE4', borderRadius: 10, marginBottom: 16 }} />
                                    <div style={{ height: 12, width: '95%', background: '#F2EDE4', borderRadius: 8, marginBottom: 10 }} />
                                    <div style={{ height: 12, width: '80%', background: '#F2EDE4', borderRadius: 8, marginBottom: 10 }} />
                                    <div style={{ height: 12, width: '90%', background: '#F2EDE4', borderRadius: 8 }} />
                                    </div>
                                ))}
                            </div>
                        )}

                        {!basicNecessitiesLoading && !basicNecessitiesError && basicNecessities && (
                            <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 18 }}>
                            <div style={subCardStyle}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'flex-start', marginBottom: 12 }}>
                                    <div style={{ fontSize: 16, fontWeight: 700, color: '#4A3B2A', fontFamily: "'Libre Baskerville', serif" }}>Electricity</div>
                                    <div style={{ background: '#F8F5F0', border: '1px solid #EAE6DF', padding: '8px 12px', borderRadius: 12, fontWeight: 800, color: '#2C4C3B', fontFamily: "'Libre Franklin', sans-serif", whiteSpace: 'nowrap' }}>
                                        {basicNecessities.electricity.avg_supply_hours}
                                    </div>
                                </div>
                                <div style={{ ...textStyle, color: '#6A5C4A', marginBottom: 10 }}><strong>Provider:</strong> {basicNecessities.electricity.provider}</div>
                                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center', marginBottom: 10 }}>
                                    <span style={badgeStyleFor(basicNecessities.electricity.outage_frequency)}>{basicNecessities.electricity.outage_frequency}</span>
                                    <span style={{ ...textStyle, color: '#6A5C4A' }}><strong>Avg bill:</strong> {basicNecessities.electricity.avg_monthly_bill}</span>
                                </div>
                                <div style={{ ...textStyle, color: '#6A5C4A' }}>{basicNecessities.electricity.power_backup_culture}</div>
                            </div>

                            <div style={subCardStyle}>
                                <div style={{ fontSize: 16, fontWeight: 700, color: '#4A3B2A', fontFamily: "'Libre Baskerville', serif", marginBottom: 12 }}>Water</div>
                                <div style={{ ...textStyle, color: '#6A5C4A', marginBottom: 10 }}><strong>Source:</strong> {basicNecessities.water.source}</div>
                                <div style={{ ...textStyle, color: '#6A5C4A', marginBottom: 12 }}><strong>Supply:</strong> {basicNecessities.water.supply_frequency}</div>
                                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 12 }}>
                                    <span style={badgeStyleFor(basicNecessities.water.quality_rating)}>{basicNecessities.water.quality_rating}</span>
                                    <span style={badgeStyleFor(basicNecessities.water.tanker_dependency)}>{basicNecessities.water.tanker_dependency} tanker dependency</span>
                                </div>
                                <div style={{ padding: '12px 14px', borderRadius: 12, background: '#F8F5F0', border: '1px solid #EAE6DF', color: '#6A5C4A', fontSize: 14, lineHeight: 1.6, fontFamily: "'Libre Franklin', sans-serif", fontStyle: 'italic' }}>
                                    {basicNecessities.water.tip}
                                </div>
                            </div>

                            <div style={subCardStyle}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'flex-start', marginBottom: 12 }}>
                                    <div style={{ fontSize: 16, fontWeight: 700, color: '#4A3B2A', fontFamily: "'Libre Baskerville', serif" }}>LPG</div>
                                    <div style={{ background: '#F8F5F0', border: '1px solid #EAE6DF', padding: '8px 12px', borderRadius: 12, fontWeight: 800, color: '#2C4C3B', fontFamily: "'Libre Franklin', sans-serif", whiteSpace: 'nowrap' }}>
                                        {basicNecessities.lpg.cylinder_price}
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center', marginBottom: 12 }}>
                                    <span style={badgeStyleFor(basicNecessities.lpg.availability)}>{basicNecessities.lpg.availability}</span>
                                    <span style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        padding: '6px 12px',
                                        borderRadius: 9999,
                                        border: `1px solid ${basicNecessities.lpg.piped_gas_available ? '#C8E6C9' : '#FECACA'}`,
                                        background: basicNecessities.lpg.piped_gas_available ? '#E8F5E9' : '#FEE2E2',
                                        color: basicNecessities.lpg.piped_gas_available ? '#2E7D32' : '#B91C1C',
                                        fontSize: 12,
                                        fontWeight: 800,
                                        fontFamily: "'Libre Franklin', sans-serif",
                                    }}>
                                        Piped gas: {basicNecessities.lpg.piped_gas_available ? 'Yes' : 'No'}
                                    </span>
                                    <span style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        padding: '6px 12px',
                                        borderRadius: 9999,
                                        border: `1px solid ${basicNecessities.lpg.subsidy_applicable ? '#C8E6C9' : '#FECACA'}`,
                                        background: basicNecessities.lpg.subsidy_applicable ? '#E8F5E9' : '#FEE2E2',
                                        color: basicNecessities.lpg.subsidy_applicable ? '#2E7D32' : '#B91C1C',
                                        fontSize: 12,
                                        fontWeight: 800,
                                        fontFamily: "'Libre Franklin', sans-serif",
                                    }}>
                                        Subsidy: {basicNecessities.lpg.subsidy_applicable ? 'Yes' : 'No'}
                                    </span>
                                </div>
                                <div style={{ fontSize: 12, color: '#8B7355', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>Distributors</div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                    {basicNecessities.lpg.major_distributors.map((distributor, index) => (
                                        <span key={`${distributor}-${index}`} style={{ padding: '6px 12px', borderRadius: 9999, background: '#F8F5F0', border: '1px solid #EAE6DF', color: '#6A5C4A', fontSize: 12, fontWeight: 700, fontFamily: "'Libre Franklin', sans-serif" }}>
                                            {distributor}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div style={subCardStyle}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'flex-start', marginBottom: 12 }}>
                                    <div style={{ fontSize: 16, fontWeight: 700, color: '#4A3B2A', fontFamily: "'Libre Baskerville', serif" }}>Grocery</div>
                                    <div style={{ background: '#F8F5F0', border: '1px solid #EAE6DF', padding: '8px 12px', borderRadius: 12, fontWeight: 800, color: '#2C4C3B', fontFamily: "'Libre Franklin', sans-serif", whiteSpace: 'nowrap' }}>
                                        {basicNecessities.grocery.avg_monthly_cost}
                                    </div>
                                </div>
                                <div style={{ ...textStyle, color: '#6A5C4A', marginBottom: 12 }}>{basicNecessities.grocery.local_market_culture}</div>
                                <div style={{ fontSize: 12, color: '#8B7355', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>Supermarkets</div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
                                    {basicNecessities.grocery.major_supermarkets.map((store, index) => (
                                        <span key={`${store}-${index}`} style={{ padding: '6px 12px', borderRadius: 9999, background: '#F8F5F0', border: '1px solid #EAE6DF', color: '#6A5C4A', fontSize: 12, fontWeight: 700, fontFamily: "'Libre Franklin', sans-serif" }}>
                                            {store}
                                        </span>
                                    ))}
                                </div>
                                <div style={{ fontSize: 12, color: '#8B7355', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>Delivery Apps</div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                    {basicNecessities.grocery.delivery_apps.map((app, index) => (
                                        <span key={`${app}-${index}`} style={{ padding: '6px 12px', borderRadius: 9999, background: '#FFFFFF', border: '1px solid #EAE6DF', color: '#4A3B2A', fontSize: 12, fontWeight: 800, fontFamily: "'Libre Franklin', sans-serif" }}>
                                            {app}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div style={subCardStyle}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'flex-start', marginBottom: 12 }}>
                                    <div style={{ fontSize: 16, fontWeight: 700, color: '#4A3B2A', fontFamily: "'Libre Baskerville', serif" }}>Internet</div>
                                    <div style={{ background: '#F8F5F0', border: '1px solid #EAE6DF', padding: '8px 12px', borderRadius: 12, fontWeight: 800, color: '#2C4C3B', fontFamily: "'Libre Franklin', sans-serif", whiteSpace: 'nowrap' }}>
                                        {basicNecessities.internet.avg_speed_mbps} Mbps
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 12 }}>
                                    <span style={badgeStyleFor(basicNecessities.internet.fiber_availability)}>{basicNecessities.internet.fiber_availability}</span>
                                    <span style={badgeStyleFor(basicNecessities.internet['5g_status'])}>{basicNecessities.internet['5g_status']}</span>
                                </div>
                                <div style={{ ...textStyle, color: '#6A5C4A', marginBottom: 12 }}><strong>Avg monthly cost:</strong> {basicNecessities.internet.avg_monthly_cost}</div>
                                <div style={{ fontSize: 12, color: '#8B7355', fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>ISPs</div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                    {basicNecessities.internet.major_isps.map((isp, index) => (
                                        <span key={`${isp}-${index}`} style={{ padding: '6px 12px', borderRadius: 9999, background: '#F8F5F0', border: '1px solid #EAE6DF', color: '#6A5C4A', fontSize: 12, fontWeight: 700, fontFamily: "'Libre Franklin', sans-serif" }}>
                                            {isp}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                    </div>
                </section>

                {descData?.communities && (
                    <section style={{ marginBottom: 60 }}>
                        <h2 style={sectionTitleStyle}>6. Community</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                            <div style={cardStyle}>
                                <h3 style={{ fontSize: 16, color: '#8B7355', textTransform: 'uppercase', marginBottom: 16, fontWeight: 600, letterSpacing: 0.5 }}>Demographics</h3>
                                <p style={{ ...textStyle, color: '#6A5C4A', marginBottom: 20 }}>
                                    {descData.communities.demographics}
                                </p>
                                {descData.communities.description && (
                                    <p style={{ ...textStyle, color: '#6A5C4A' }}>
                                        {descData.communities.description}
                                    </p>
                                )}
                            </div>
                            <div style={cardStyle}>
                                <h3 style={{ fontSize: 16, color: '#8B7355', textTransform: 'uppercase', marginBottom: 16, fontWeight: 600, letterSpacing: 0.5 }}>Community Highlights</h3>
                                <ul style={{ margin: 0, paddingLeft: 20, color: '#6A5C4A', fontSize: 15, lineHeight: 1.6, fontFamily: "'Libre Franklin', sans-serif" }}>
                                    {descData.communities.highlights.map((highlight, index) => (
                                        <li key={`${highlight}-${index}`} style={{ marginBottom: 12 }}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>
                )}

                {descData?.geography && (
                    <section style={{ marginBottom: 60 }}>
                        <h2 style={sectionTitleStyle}>7. Geography</h2>
                        <div style={cardStyle}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16, marginBottom: 28 }}>
                                <div style={{ background: '#F8F5F0', padding: '16px', borderRadius: 12 }}>
                                    <div style={{ fontSize: 12, color: '#8B7355', textTransform: 'uppercase', marginBottom: 6, fontWeight: 600 }}>Terrain</div>
                                    <div style={{ fontWeight: 600, color: '#4A3B2A', fontSize: 16 }}>{descData.geography.terrain}</div>
                                </div>
                                <div style={{ background: '#F8F5F0', padding: '16px', borderRadius: 12 }}>
                                    <div style={{ fontSize: 12, color: '#8B7355', textTransform: 'uppercase', marginBottom: 6, fontWeight: 600 }}>Climate</div>
                                    <div style={{ fontWeight: 600, color: '#4A3B2A', fontSize: 16 }}>{descData.geography.climate}</div>
                                </div>
                                <div style={{ background: '#F8F5F0', padding: '16px', borderRadius: 12 }}>
                                    <div style={{ fontSize: 12, color: '#8B7355', textTransform: 'uppercase', marginBottom: 6, fontWeight: 600 }}>Elevation</div>
                                    <div style={{ fontWeight: 600, color: '#4A3B2A', fontSize: 16 }}>{descData.geography.elevation_m} meters</div>
                                </div>
                            </div>
                            <h3 style={{ fontSize: 14, color: '#8B7355', textTransform: 'uppercase', marginBottom: 16, fontWeight: 600 }}>Geographical Features</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                                {descData.geography.features.map((feature, index) => (
                                    <span key={`${feature}-${index}`} style={{ padding: '6px 16px', borderRadius: 20, background: 'white', border: '1px solid #EAE6DF', color: '#6A5C4A', fontSize: 13, fontWeight: 500, fontFamily: "'Libre Franklin', sans-serif", boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {descData?.crime_rate && (
                    <section style={{ marginBottom: 60 }}>
                        <h2 style={sectionTitleStyle}>8. Security</h2>
                        <div style={{ ...cardStyle, borderTop: '4px solid #2C4C3B' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 20 }}>
                                <div style={{ width: 64, height: 64, borderRadius: 32, background: '#E8F5E9', border: '2px solid #C8E6C9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, fontWeight: 700, color: '#2E7D32', fontFamily: "'Libre Baskerville', serif" }}>{descData.crime_rate.security_score}</div>
                                <div>
                                    <div style={{ fontSize: 18, color: '#4A3B2A', fontWeight: 600, fontFamily: "'Libre Baskerville', serif" }}>Overall Security Score</div>
                                    <div style={{ fontSize: 13, color: '#8B7355', marginTop: 4 }}>Based on local crime statistics and reporting</div>
                                </div>
                            </div>
                            <p style={{ ...textStyle, color: '#6A5C4A', padding: '16px', background: '#F8F5F0', borderRadius: 12 }}>
                                {descData.crime_rate.description}
                            </p>
                        </div>
                    </section>
                )}

                <div style={{ marginTop: 80, padding: 40, background: 'white', border: '1px solid #EAE6DF', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20, boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
                    <div>
                        <h3 style={{ margin: 0, fontSize: 24, color: '#4A3B2A', marginBottom: 8, fontFamily: "'Libre Baskerville', serif" }}>Ready to discover more?</h3>
                        <p style={{ margin: 0, color: '#8B7355', fontSize: 15 }}>We have more cities tailored perfectly to your profile.</p>
                    </div>
                    {nextCity ? (
                        <Link
                            href={`/city/${encodeURIComponent(nextCity.city_name)}?state=${encodeURIComponent(nextCity.state || '')}`}
                            style={{ padding: '14px 32px', background: '#2C4C3B', color: 'white', textDecoration: 'none', borderRadius: 8, fontWeight: 600, fontSize: 16, transition: 'all 0.2s', whiteSpace: 'nowrap', boxShadow: '0 4px 12px rgba(44, 76, 59, 0.2)' }}
                        >
                            Next Recommended City →
                        </Link>
                    ) : (
                        <Link
                            href="/results"
                            style={{ padding: '14px 32px', background: 'white', color: '#4A3B2A', border: '1px solid #EAE6DF', textDecoration: 'none', borderRadius: 8, fontWeight: 600, fontSize: 16, transition: 'all 0.2s', whiteSpace: 'nowrap' }}
                        >
                            ← Back to All Results
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

function getAreaLocality(area: Area, cityName: string): string {
    if (area.locality?.trim()) {
        return area.locality.trim();
    }

    const localityHighlight = area.highlights.find((highlight) => /locality|metro|park|market|school|residential/i.test(highlight));
    if (localityHighlight) {
        return `${localityHighlight} • ${cityName}`;
    }

    return `Locality in ${cityName}`;
}

function toHousingSlug(value: string): string {
    return value
        .toLowerCase()
        .replace(/\([^)]*\)/g, ' ')
        .replace(/&/g, ' and ')
        .replace(/[^a-z0-9]+/g, '_')
        .replace(/^_+|_+$/g, '')
        .replace(/_+/g, '_');
}

function toHousingCitySlug(cityName: string): string {
    const normalized = toHousingSlug(cityName);
    if (normalized === 'delhi') return 'new_delhi';
    if (normalized === 'bengaluru') return 'bangalore';
    if (normalized === 'bombay') return 'mumbai';
    return normalized;
}

function haversineKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const toRad = (value: number) => (value * Math.PI) / 180;
    const earthRadiusKm = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat / 2) ** 2
        + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return earthRadiusKm * c;
}

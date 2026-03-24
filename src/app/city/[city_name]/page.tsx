'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '../../../context/AuthContext';
import { CityDescription, fetchCityDescription, CityRecommendation } from '../../../lib/api';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

interface Area {
    name: string;
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
interface ParkEntry { name: string; description: string; }
interface NightlifeEntry { name: string; type: string; description: string; }
interface AdventureEntry { name: string; type: string; description: string; }

interface CityExploreData {
    best_areas: Area[];
    schools: Institution[];
    hospitals: Institution[];
    hotels_restaurants: {
        hotels: HotelRestaurant[];
        restaurants: HotelRestaurant[];
    };
    urban_life: {
        parks: ParkEntry[];
        nightlife: NightlifeEntry[];
        adventures: AdventureEntry[];
    };
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
    const [nextCity, setNextCity] = useState<CityRecommendation | null>(null);

    useEffect(() => {
        if (!authLoading && !user) router.push('/auth');
    }, [authLoading, user, router]);

    useEffect(() => {
        if (authLoading || !user) return;
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                // Read from session storage
                const storedResults = sessionStorage.getItem('airsafe_results');
                let hasChildren = false;
                let hasElderly = false;
                
                if (storedResults) {
                    const parsedResults = JSON.parse(storedResults);
                    hasChildren = parsedResults?.familyHealth?.children > 0;
                    hasElderly = parsedResults?.familyHealth?.elderly > 0;
                    setUserProfession(parsedResults?.userProfile?.profession || 'your profession');
                    
                    const recommendations: CityRecommendation[] = parsedResults?.recommendations || [];
                    const currentIndex = recommendations.findIndex(r => r.city_name === cityName);
                    if (currentIndex >= 0 && currentIndex < recommendations.length - 1) {
                        setNextCity(recommendations[currentIndex + 1]);
                    }
                }

                // Fetch both API endpoints concurrently
                const [exploreRes, descRes] = await Promise.all([
                    fetch(`${API_URL}/api/city-explore/${encodeURIComponent(cityName)}?state=${encodeURIComponent(state)}`),
                    fetchCityDescription(cityName, hasChildren, hasElderly).catch(e => {
                        console.error("Failed to fetch CityDescription", e);
                        return null;
                    })
                ]);
                
                if (!exploreRes.ok) throw new Error('Failed to fetch city explore data');
                const exploreJson = await exploreRes.json();
                
                setData(exploreJson.data);
                if (descRes) setDescData(descRes);

            } catch (e: any) {
                setError(e.message || 'Something went wrong.');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [cityName, state, authLoading, user]);

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
        fontFamily: "'Libre Baskerville', serif"
    };

    const cardStyle: React.CSSProperties = {
        background: 'white',
        border: '1px solid #EAE6DF',
        borderRadius: 12,
        padding: 24,
        boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
    };

    const textStyle: React.CSSProperties = {
        color: '#4A3B2A', 
        fontSize: 15, 
        lineHeight: 1.7, 
        margin: 0,
        fontFamily: "'Libre Franklin', sans-serif"
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
        justifyContent: 'center'
    };

    return (
        <div style={{ minHeight: '100vh', paddingBottom: 100, background: '#FDFBF7', fontFamily: "'Libre Franklin', sans-serif", color: '#4A3B2A' }}>
            {/* Header */}
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
                {/* Hero */}
                <div style={{ textAlign: 'center', marginBottom: 60 }}>
                    <div style={{ display: 'inline-block', background: '#F2EDE4', color: '#8B7355', padding: '6px 16px', borderRadius: 20, fontSize: 12, fontWeight: 600, letterSpacing: 0.5, marginBottom: 16, fontFamily: "'Libre Franklin', sans-serif" }}>
                        ✧ AI CITY GUIDE ✧
                    </div>
                    <h1 style={{ fontSize: 40, fontWeight: 700, color: '#4A3B2A', margin: '0 0 12px 0', fontFamily: "'Libre Baskerville', serif" }}>
                        Explore {cityName}
                    </h1>
                    {state && <p style={{ color: '#8B7355', fontSize: 18, margin: 0, fontFamily: "'Libre Franklin', sans-serif" }}>{state}</p>}
                </div>

                {/* 1) About */}
                <section style={{ marginBottom: 60 }}>
                    <h2 style={sectionTitleStyle}>1. About {cityName}</h2>
                    <p style={textStyle}>
                        {descData?.geography?.description || `Discover the unique lifestyle, communities, and opportunities waiting for you in ${cityName}. Let our AI-driven insights guide your relocation.`}
                    </p>
                </section>

                {/* 2) Housing and Accommodation */}
                {(data?.best_areas && data.best_areas.length > 0) && (
                    <section style={{ marginBottom: 60 }}>
                        <h2 style={sectionTitleStyle}>2. Housing and Accomodation</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                            {data.best_areas.map((area, i) => (
                                <div key={i} style={{ ...cardStyle, borderLeft: i === 0 ? '4px solid #8B7355' : '1px solid #EAE6DF' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                                        <div style={{ width: 32, height: 32, borderRadius: 8, background: i === 0 ? '#8B7355' : '#F2EDE4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 14, color: i === 0 ? 'white' : '#8B7355' }}>#{i + 1}</div>
                                        <div style={{ fontWeight: 600, fontSize: 18, color: '#4A3B2A', fontFamily: "'Libre Baskerville', serif" }}>{area.name}</div>
                                    </div>
                                    <p style={{ ...textStyle, marginBottom: 16, color: '#6A5C4A' }}>{area.description}</p>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                        {area.highlights.map((h, j) => (
                                            <span key={j} style={{ padding: '6px 14px', borderRadius: 20, background: '#F8F5F0', border: '1px solid #EAE6DF', color: '#8B7355', fontSize: 12, fontWeight: 500, fontFamily: "'Libre Franklin', sans-serif" }}>✓ {h}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Map Placeholder */}
                        <div style={mapPlaceholderStyle}>
                            <span style={{ fontSize: 32, marginBottom: 8 }}>🗺️</span>
                            <span style={{ color: '#8B7355', fontSize: 14, fontWeight: 500 }}>Map Integration Placeholder - Housing</span>
                        </div>
                    </section>
                )}

                {/* 3) Profession */}
                <section style={{ marginBottom: 60 }}>
                    <h2 style={sectionTitleStyle}>3. Profession</h2>
                    <div style={cardStyle}>
                        <h3 style={{ fontSize: 18, color: '#4A3B2A', marginBottom: 12, fontWeight: 600, fontFamily: "'Libre Baskerville', serif" }}>Job Market Analysis for {userProfession}</h3>
                        <p style={{ ...textStyle, color: '#6A5C4A' }}>
                            {cityName} offers a growing ecosystem for professionals in the <strong>{userProfession}</strong> sector. With the expanding local infrastructure and connectivity, finding matching career opportunities is highly favorable in this region.
                        </p>
                    </div>
                </section>

                {/* 4) Healthcare */}
                {(data?.hospitals && data.hospitals.length > 0) && (
                    <section style={{ marginBottom: 60 }}>
                        <h2 style={sectionTitleStyle}>4. Healthcare</h2>
                        
                        {descData?.hospitals?.description && (
                            <p style={{ ...textStyle, marginBottom: 24, padding: '16px 24px', background: 'white', borderRadius: 12, border: '1px solid #EAE6DF' }}>
                                💡 {descData.hospitals.description}
                            </p>
                        )}

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
                            {data.hospitals.map((h, i) => (
                                <div key={i} style={cardStyle}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                                        <div style={{ fontWeight: 600, fontSize: 16, color: '#4A3B2A', flex: 1, fontFamily: "'Libre Baskerville', serif" }}>{h.name}</div>
                                        {h.specialty && (
                                            <span style={{ padding: '4px 10px', borderRadius: 12, background: '#E8F5E9', border: '1px solid #C8E6C9', color: '#2E7D32', fontSize: 11, fontWeight: 600, whiteSpace: 'nowrap', marginLeft: 8 }}>{h.specialty}</span>
                                        )}
                                    </div>
                                    <p style={{ ...textStyle, fontSize: 14, lineHeight: 1.6, color: '#6A5C4A' }}>{h.description}</p>
                                </div>
                            ))}
                        </div>
                        {/* Map Placeholder */}
                        <div style={mapPlaceholderStyle}>
                            <span style={{ fontSize: 32, marginBottom: 8 }}>🗺️</span>
                            <span style={{ color: '#8B7355', fontSize: 14, fontWeight: 500 }}>Map Integration Placeholder - Healthcare</span>
                        </div>
                    </section>
                )}

                {/* 5) Education */}
                {(data?.schools && data.schools.length > 0) && (
                    <section style={{ marginBottom: 60 }}>
                        <h2 style={sectionTitleStyle}>5. Education</h2>
                        
                        {descData?.education?.description && (
                            <p style={{ ...textStyle, marginBottom: 24, padding: '16px 24px', background: 'white', borderRadius: 12, border: '1px solid #EAE6DF' }}>
                                💡 {descData.education.description}
                            </p>
                        )}

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
                            {data.schools.map((s, i) => (
                                <div key={i} style={cardStyle}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                                        <div style={{ fontWeight: 600, fontSize: 16, color: '#4A3B2A', flex: 1, fontFamily: "'Libre Baskerville', serif" }}>{s.name}</div>
                                        {s.type && (
                                            <span style={{ padding: '4px 10px', borderRadius: 12, background: '#E3F2FD', border: '1px solid #BBDEFB', color: '#1565C0', fontSize: 11, fontWeight: 600, whiteSpace: 'nowrap', marginLeft: 8 }}>{s.type}</span>
                                        )}
                                    </div>
                                    <p style={{ ...textStyle, fontSize: 14, lineHeight: 1.6, color: '#6A5C4A' }}>{s.description}</p>
                                </div>
                            ))}
                        </div>
                        {/* Map Placeholder */}
                        <div style={mapPlaceholderStyle}>
                            <span style={{ fontSize: 32, marginBottom: 8 }}>🗺️</span>
                            <span style={{ color: '#8B7355', fontSize: 14, fontWeight: 500 }}>Map Integration Placeholder - Education</span>
                        </div>
                    </section>
                )}

                {/* 6) Connectivity */}
                {descData?.connectivity && (
                    <section style={{ marginBottom: 60 }}>
                        <h2 style={sectionTitleStyle}>6. Connectivity</h2>
                        <div style={cardStyle}>
                            <p style={{ ...textStyle, marginBottom: 24, color: '#6A5C4A' }}>
                                {descData.connectivity.description}
                            </p>
                            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                                <div style={{ background: '#F8F5F0', padding: '16px 24px', borderRadius: 12, flex: '1 1 200px' }}>
                                    <div style={{ fontSize: 12, color: '#8B7355', textTransform: 'uppercase', marginBottom: 6, fontWeight: 600, letterSpacing: 0.5 }}>Nearest Metro</div>
                                    <div style={{ fontWeight: 600, color: '#4A3B2A', fontSize: 16 }}>{descData.connectivity.nearest_metro} <span style={{color: '#8B7355', fontSize: 14, fontWeight: 400}}>({descData.connectivity.distance_km} km)</span></div>
                                </div>
                                <div style={{ background: '#F8F5F0', padding: '16px 24px', borderRadius: 12, flex: '1 1 200px' }}>
                                    <div style={{ fontSize: 12, color: '#8B7355', textTransform: 'uppercase', marginBottom: 6, fontWeight: 600, letterSpacing: 0.5 }}>Transport Options</div>
                                    <div style={{ fontWeight: 600, color: '#4A3B2A', fontSize: 16 }}>{descData.connectivity.transport_options}</div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* 7) Community */}
                {descData?.communities && (
                    <section style={{ marginBottom: 60 }}>
                        <h2 style={sectionTitleStyle}>7. Community</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                            <div style={{ ...cardStyle }}>
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
                                    {descData.communities.highlights.map((h, i) => (
                                        <li key={i} style={{ marginBottom: 12 }}>{h}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>
                )}

                {/* 8) Geography */}
                {descData?.geography && (
                    <section style={{ marginBottom: 60 }}>
                        <h2 style={sectionTitleStyle}>8. Geography</h2>
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
                                {descData.geography.features.map((f, i) => (
                                    <span key={i} style={{ padding: '6px 16px', borderRadius: 20, background: 'white', border: '1px solid #EAE6DF', color: '#6A5C4A', fontSize: 13, fontWeight: 500, fontFamily: "'Libre Franklin', sans-serif", boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>{f}</span>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* 9) Security */}
                {descData?.crime_rate && (
                    <section style={{ marginBottom: 60 }}>
                        <h2 style={sectionTitleStyle}>9. Security</h2>
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

                {/* Action Bar / Next Button */}
                <div style={{ 
                    marginTop: 80, 
                    padding: 40, 
                    background: 'white', 
                    border: '1px solid #EAE6DF', 
                    borderRadius: 16, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 20,
                    boxShadow: '0 8px 30px rgba(0,0,0,0.04)'
                }}>
                    <div>
                        <h3 style={{ margin: 0, fontSize: 24, color: '#4A3B2A', marginBottom: 8, fontFamily: "'Libre Baskerville', serif" }}>Ready to discover more?</h3>
                        <p style={{ margin: 0, color: '#8B7355', fontSize: 15 }}>We have more cities tailored perfectly to your profile.</p>
                    </div>
                    {nextCity ? (
                        <Link 
                            href={`/city/${encodeURIComponent(nextCity.city_name)}?state=${encodeURIComponent(nextCity.state || '')}`}
                            style={{ 
                                padding: '14px 32px', 
                                background: '#2C4C3B', /* Dark Teal Primary Color */
                                color: 'white', 
                                textDecoration: 'none', 
                                borderRadius: 8, 
                                fontWeight: 600,
                                fontSize: 16,
                                transition: 'all 0.2s',
                                whiteSpace: 'nowrap',
                                boxShadow: '0 4px 12px rgba(44, 76, 59, 0.2)'
                            }}
                        >
                            Next Recommended City →
                        </Link>
                    ) : (
                        <Link 
                            href="/results"
                            style={{ 
                                padding: '14px 32px', 
                                background: 'white', 
                                color: '#4A3B2A', 
                                border: '1px solid #EAE6DF',
                                textDecoration: 'none', 
                                borderRadius: 8, 
                                fontWeight: 600,
                                fontSize: 16,
                                transition: 'all 0.2s',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            ← Back to All Results
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

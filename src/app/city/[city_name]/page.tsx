'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '../../../context/AuthContext';

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

type TabId = 'areas' | 'education' | 'healthcare' | 'food' | 'urban';

export default function CityExplorePage() {
    const params = useParams();
    const searchParams = useSearchParams();
    const router = useRouter();
    const { loading: authLoading, user } = useAuth();

    const cityName = decodeURIComponent(params.city_name as string);
    const state = searchParams.get('state') || '';

    const [data, setData] = useState<CityExploreData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<TabId>('areas');

    useEffect(() => {
        if (!authLoading && !user) router.push('/auth');
    }, [authLoading, user, router]);

    useEffect(() => {
        if (authLoading || !user) return;
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const res = await fetch(
                    `${API_URL}/api/city-explore/${encodeURIComponent(cityName)}?state=${encodeURIComponent(state)}`
                );
                if (!res.ok) throw new Error('Failed to fetch city explore data');
                const json = await res.json();
                setData(json.data);
            } catch (e: any) {
                setError(e.message || 'Something went wrong.');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [cityName, state, authLoading, user]);

    const tabs: { id: TabId; label: string; emoji: string }[] = [
        { id: 'areas', label: 'Best Areas', emoji: '🏘️' },
        { id: 'education', label: 'Education', emoji: '📚' },
        { id: 'healthcare', label: 'Healthcare', emoji: '🏥' },
        { id: 'food', label: 'Hotels & Food', emoji: '🍽️' },
        { id: 'urban', label: 'Urban Life', emoji: '🌆' },
    ];

    if (authLoading || loading) {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
                <div style={{ fontSize: 40 }}>🔍</div>
                <div className="loading-pulse" style={{ fontSize: 18, color: 'rgba(255,255,255,0.8)' }}>
                    AIrSafe AI is exploring {cityName}...
                </div>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>Gathering areas, schools, hospitals & more</p>
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
                <div style={{ fontSize: 40 }}>⚠️</div>
                <div style={{ color: '#EF4444', fontSize: 18 }}>{error}</div>
                <button onClick={() => router.back()} style={{ marginTop: 16, padding: '10px 24px', background: '#7c3aed', color: 'white', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 600 }}>
                    ← Go Back
                </button>
            </div>
        );
    }

    return (
        <div style={{ minHeight: '100vh' }}>
            {/* Header */}
            <header className="nav-header">
                <Link href="/" className="nav-logo" style={{ textDecoration: 'none' }}>
                    <div style={{ width: 32, height: 32, background: '#7c3aed', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 16 }}>🌬️</div>
                    <span>AirSafe Move</span>
                </Link>
                <button onClick={() => router.back()} className="btn-secondary">
                    ← Back to Results
                </button>
            </header>

            <div className="results-container">
                {/* Hero */}
                <div style={{ textAlign: 'center', marginBottom: 40 }}>
                    <div className="badge badge-teal" style={{ marginBottom: 16 }}>🤖 AI City Guide</div>
                    <h1 className="results-title" style={{ marginBottom: 8 }}>Explore {cityName}</h1>
                    {state && <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, margin: 0 }}>{state}</p>}
                </div>

                {/* Tabs */}
                <div style={{ display: 'flex', gap: 8, marginBottom: 32, overflowX: 'auto', paddingBottom: 4 }}>
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            style={{
                                padding: '10px 20px',
                                borderRadius: 40,
                                border: activeTab === tab.id ? '2px solid #7c3aed' : '1px solid rgba(255,255,255,0.15)',
                                background: activeTab === tab.id ? 'rgba(124,58,237,0.15)' : 'rgba(255,255,255,0.04)',
                                color: activeTab === tab.id ? '#a78bfa' : 'rgba(255,255,255,0.6)',
                                fontWeight: activeTab === tab.id ? 700 : 500,
                                fontSize: 14,
                                cursor: 'pointer',
                                whiteSpace: 'nowrap',
                                transition: 'all 0.2s',
                            }}
                        >
                            {tab.emoji} {tab.label}
                        </button>
                    ))}
                </div>

                {data && (
                    <>
                        {/* BEST AREAS */}
                        {activeTab === 'areas' && (
                            <div>
                                <h2 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 20 }}>🏘️ Top 5 Residential Areas</h2>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                    {data.best_areas.map((area, i) => (
                                        <div key={i} className="card" style={{ padding: 24, borderLeft: i === 0 ? '3px solid #7c3aed' : undefined }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                                                <div style={{ width: 32, height: 32, borderRadius: 8, background: i === 0 ? '#7c3aed' : 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 14, color: i === 0 ? 'white' : 'rgba(255,255,255,0.6)' }}>#{i + 1}</div>
                                                <div style={{ fontWeight: 700, fontSize: 18, color: '#fff' }}>{area.name}</div>
                                            </div>
                                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, lineHeight: 1.7, margin: '0 0 12px 0' }}>{area.description}</p>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                                {area.highlights.map((h, j) => (
                                                    <span key={j} style={{ padding: '4px 12px', borderRadius: 20, background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.25)', color: '#a78bfa', fontSize: 12, fontWeight: 500 }}>✓ {h}</span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* EDUCATION */}
                        {activeTab === 'education' && (
                            <div>
                                <h2 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 20 }}>📚 Top Educational Institutions</h2>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
                                    {data.schools.map((s, i) => (
                                        <div key={i} className="card" style={{ padding: 24 }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                                                <div style={{ fontWeight: 700, fontSize: 16, color: '#fff', flex: 1 }}>{s.name}</div>
                                                {s.type && (
                                                    <span style={{ padding: '3px 10px', borderRadius: 12, background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.25)', color: '#60a5fa', fontSize: 11, fontWeight: 600, whiteSpace: 'nowrap', marginLeft: 8 }}>{s.type}</span>
                                                )}
                                            </div>
                                            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{s.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* HEALTHCARE */}
                        {activeTab === 'healthcare' && (
                            <div>
                                <h2 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 20 }}>🏥 Top Hospitals</h2>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
                                    {data.hospitals.map((h, i) => (
                                        <div key={i} className="card" style={{ padding: 24 }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                                                <div style={{ fontWeight: 700, fontSize: 16, color: '#fff', flex: 1 }}>{h.name}</div>
                                                {h.specialty && (
                                                    <span style={{ padding: '3px 10px', borderRadius: 12, background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', color: '#34d399', fontSize: 11, fontWeight: 600, whiteSpace: 'nowrap', marginLeft: 8 }}>{h.specialty}</span>
                                                )}
                                            </div>
                                            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{h.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* HOTELS & RESTAURANTS */}
                        {activeTab === 'food' && (
                            <div>
                                <h2 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 20 }}>🍽️ Hotels & Restaurants</h2>
                                <div style={{ marginBottom: 32 }}>
                                    <h3 style={{ fontSize: 17, fontWeight: 600, color: 'rgba(255,255,255,0.8)', marginBottom: 14 }}>🏨 Hotels</h3>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 14 }}>
                                        {data.hotels_restaurants.hotels.map((h, i) => (
                                            <div key={i} className="card" style={{ padding: 20 }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                                                    <div style={{ fontWeight: 700, fontSize: 15, color: '#fff' }}>{h.name}</div>
                                                    {h.category && <span style={{ padding: '2px 8px', borderRadius: 10, background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)', color: '#fbbf24', fontSize: 11, marginLeft: 8, whiteSpace: 'nowrap' }}>{h.category}</span>}
                                                </div>
                                                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{h.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: 17, fontWeight: 600, color: 'rgba(255,255,255,0.8)', marginBottom: 14 }}>🍜 Restaurants</h3>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 14 }}>
                                        {data.hotels_restaurants.restaurants.map((r, i) => (
                                            <div key={i} className="card" style={{ padding: 20 }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                                                    <div style={{ fontWeight: 700, fontSize: 15, color: '#fff' }}>{r.name}</div>
                                                    {r.cuisine && <span style={{ padding: '2px 8px', borderRadius: 10, background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', color: '#f87171', fontSize: 11, marginLeft: 8, whiteSpace: 'nowrap' }}>{r.cuisine}</span>}
                                                </div>
                                                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{r.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* URBAN LIFE */}
                        {activeTab === 'urban' && (
                            <div>
                                <h2 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 20 }}>🌆 Urban Life</h2>

                                <div style={{ marginBottom: 28 }}>
                                    <h3 style={{ fontSize: 17, fontWeight: 600, color: 'rgba(255,255,255,0.8)', marginBottom: 14 }}>🌳 Parks & Gardens</h3>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 14 }}>
                                        {data.urban_life.parks.map((p, i) => (
                                            <div key={i} className="card" style={{ padding: 20 }}>
                                                <div style={{ fontWeight: 700, fontSize: 15, color: '#fff', marginBottom: 8 }}>{p.name}</div>
                                                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{p.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div style={{ marginBottom: 28 }}>
                                    <h3 style={{ fontSize: 17, fontWeight: 600, color: 'rgba(255,255,255,0.8)', marginBottom: 14 }}>🎉 Nightlife & Entertainment</h3>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 14 }}>
                                        {data.urban_life.nightlife.map((n, i) => (
                                            <div key={i} className="card" style={{ padding: 20 }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                                                    <div style={{ fontWeight: 700, fontSize: 15, color: '#fff' }}>{n.name}</div>
                                                    <span style={{ padding: '2px 8px', borderRadius: 10, background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.25)', color: '#a78bfa', fontSize: 11, marginLeft: 8, whiteSpace: 'nowrap' }}>{n.type}</span>
                                                </div>
                                                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{n.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 style={{ fontSize: 17, fontWeight: 600, color: 'rgba(255,255,255,0.8)', marginBottom: 14 }}>🧗 Adventures & Experiences</h3>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 14 }}>
                                        {data.urban_life.adventures.map((a, i) => (
                                            <div key={i} className="card" style={{ padding: 20 }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                                                    <div style={{ fontWeight: 700, fontSize: 15, color: '#fff' }}>{a.name}</div>
                                                    <span style={{ padding: '2px 8px', borderRadius: 10, background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', color: '#34d399', fontSize: 11, marginLeft: 8, whiteSpace: 'nowrap' }}>{a.type}</span>
                                                </div>
                                                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{a.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

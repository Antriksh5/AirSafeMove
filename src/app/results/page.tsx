'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
    CityRecommendation,
    CityDescription,
    SavedRecommendation,
    fetchCityDescription,
    fetchSavedRecommendations,
    deleteSavedRecommendation,
} from '@/lib/api';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/lib/supabase';

interface ResultsData {
    recommendations: CityRecommendation[];
    current_aqi: number;
    readiness_score: number;
    health_urgency: number;
    health_sensitivity: number;
    advisory: string;
    userName: string;
    userProfile: {
        name: string;
        age: number;
        profession: string;
    };
    familyHealth: {
        familyType: string;
        totalMembers: number;
        children: number;
        elderly: number;
        healthConditions: string[];
    };
    location: {
        currentCity: string;
        maxDistance: number;
        monthlyBudget: string;
    };
}

function getAqiColor(aqi: number): string {
    if (aqi <= 50) return '#22C55E';
    if (aqi <= 100) return '#EAB308';
    if (aqi <= 150) return '#F97316';
    return '#EF4444';
}

function getAqiCategory(aqi: number): string {
    if (aqi <= 50) return 'Good';
    if (aqi <= 100) return 'Moderate';
    if (aqi <= 150) return 'Unhealthy for Sensitive';
    if (aqi <= 200) return 'Unhealthy';
    if (aqi <= 300) return 'Very Unhealthy';
    return 'Hazardous';
}

function ScoreBar({ score, maxScore = 10, color }: { score: number; maxScore?: number; color: string }) {
    const percentage = (score / maxScore) * 100;
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%' }}>
            <div style={{
                flex: 1,
                height: 8,
                backgroundColor: 'rgba(255,255,255,0.15)',
                borderRadius: 4,
                overflow: 'hidden'
            }}>
                <div style={{
                    width: `${percentage}%`,
                    height: '100%',
                    backgroundColor: color,
                    borderRadius: 4,
                    transition: 'width 0.3s ease'
                }} />
            </div>
            <span style={{ fontWeight: 600, color, minWidth: 40 }}>{score}/{maxScore}</span>
        </div>
    );
}

export default function ResultsPage() {
    const router = useRouter();
    const { user, loading: authLoading } = useAuth();
    const [data, setData] = useState<ResultsData | null>(null);
    const [selectedCity, setSelectedCity] = useState<CityRecommendation | null>(null);
    const [cityDescription, setCityDescription] = useState<CityDescription | null>(null);
    const [isLoadingDescription, setIsLoadingDescription] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);
    const [activeTab, setActiveTab] = useState<'security' | 'education' | 'communities' | 'connectivity' | 'hospitals' | 'geography'>('security');
    const [savingCity, setSavingCity] = useState<string | null>(null);
    const [savedCities, setSavedCities] = useState<Set<string>>(new Set());
    const [savedRecommendations, setSavedRecommendations] = useState<SavedRecommendation[]>([]);

    // Protect route: redirect if not authenticated
    useEffect(() => {
        if (!authLoading && !user) {
            router.push('/auth');
        }
    }, [authLoading, user, router]);

    useEffect(() => {
        if (!user) return;

        const loadSaved = async () => {
            try {
                const saved = await fetchSavedRecommendations(user.id);
                setSavedRecommendations(saved);
                setSavedCities(new Set(saved.map((item) => item.target_city)));
            } catch (error) {
                console.error('Error loading saved recommendations:', error);
            }
        };

        loadSaved();
    }, [user]);

    const handleSaveRecommendation = async (rec: CityRecommendation) => {
        if (!user) return;
        setSavingCity(rec.city_name);
        try {
            const { data: inserted, error } = await supabase.from('saved_recommendations').insert({
                user_id: user.id,
                target_city: rec.city_name,
                target_state: rec.state,
                current_aqi: rec.current_aqi,
                target_aqi: rec.target_aqi,
                aqi_improvement_percent: rec.aqi_improvement_percent,
                suitability_score: rec.suitability_score,
                advisory_text: data?.advisory || null,
            }).select().single();

            if (!error) {
                setSavedCities(prev => new Set(prev).add(rec.city_name));
                if (inserted) {
                    setSavedRecommendations(prev => [...prev, inserted as SavedRecommendation]);
                }
            } else {
                console.error('Error saving recommendation:', error);
            }
        } catch (err) {
            console.error('Error saving:', err);
        } finally {
            setSavingCity(null);
        }
    };

    const handleRemoveSaved = async (savedId: string, targetCity: string) => {
        if (!user) return;
        try {
            const success = await deleteSavedRecommendation(savedId, user.id);
            if (success) {
                setSavedRecommendations(prev => prev.filter(item => item.id !== savedId));
                setSavedCities(prev => {
                    const next = new Set(prev);
                    next.delete(targetCity);
                    return next;
                });
            } else {
                console.error('Failed to remove saved recommendation');
            }
        } catch (error) {
            console.error('Error removing saved recommendation:', error);
        }
    };

    const handleCityClick = async (rec: CityRecommendation) => {
        setSelectedCity(rec);
        setCityDescription(null);
        setDescriptionError(false);
        setIsLoadingDescription(true);
        setActiveTab('security');

        try {
            const description = await fetchCityDescription(
                rec.city_name,
                data?.familyHealth.children ? data.familyHealth.children > 0 : false,
                data?.familyHealth.elderly ? data.familyHealth.elderly > 0 : false
            );
            setCityDescription(description);
        } catch (error) {
            console.error('Failed to load city description:', error);
            setDescriptionError(true);
        } finally {
            setIsLoadingDescription(false);
        }
    };

    const closeModal = () => {
        setSelectedCity(null);
        setCityDescription(null);
    };

    useEffect(() => {
        if (authLoading) return;
        if (!user) return;
        const storedData = sessionStorage.getItem('airsafe_results');
        if (storedData) {
            setData(JSON.parse(storedData));
        } else {
            router.push('/wizard');
        }
    }, [router, authLoading, user]);

    if (authLoading || !data) {
        return (
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'transparent'
            }}>
                <div className="loading-pulse" style={{ color: 'rgba(255,255,255,0.7)' }}>Loading...</div>
            </div>
        );
    }

    const topRec = data.recommendations[0];

    return (
        <div style={{ minHeight: '100vh' }}>
            <header className="nav-header">
                <Link href="/" className="nav-logo" style={{ textDecoration: 'none' }}>
                    <div style={{
                        width: 32,
                        height: 32,
                        background: 'linear-gradient(135deg, #14B8A6 0%, #06B6D4 100%)',
                        borderRadius: 8,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: 16
                    }}>
                        🌬️
                    </div>
                    <span>AirSafe Move</span>
                </Link>
                <Link href="/wizard" className="btn-secondary">
                    ← New Assessment
                </Link>
            </header>

            <div className="results-container">
                {/* Title Section */}
                <div style={{ textAlign: 'center', marginBottom: 40 }}>
                    <div className="badge badge-teal" style={{ marginBottom: 16 }}>
                        ✓ AI Analysis Complete
                    </div>
                    <h1 className="results-title">
                        Migration Readiness Report
                    </h1>
                    <p style={{ color: 'rgba(255,255,255,0.6)' }}>
                        Personalized recommendations for {data.userName}
                    </p>
                </div>

                {/* Readiness Score Card */}
                <div className="card" style={{ marginBottom: 24, padding: 32 }}>
                    <div className="score-grid">
                        <div>
                            <div className="score-value" style={{ color: '#14B8A6' }}>
                                {data.readiness_score.toFixed(0)}%
                            </div>
                            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>Migration Readiness</div>
                        </div>
                        <div>
                            <div className="score-value" style={{ color: getAqiColor(data.current_aqi) }}>
                                {data.current_aqi}
                            </div>
                            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>Current AQI ({data.location.currentCity})</div>
                        </div>
                        <div>
                            <div className="score-value" style={{ color: '#FFFFFF' }}>
                                {topRec.aqi_improvement_percent.toFixed(0)}%
                            </div>
                            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>Max AQI Improvement</div>
                        </div>
                        <div>
                            <div className="score-value" style={{ color: '#10B981' }}>
                                +{topRec.life_expectancy_gain_years}
                            </div>
                            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>Life Expectancy Gain (Years)</div>
                        </div>
                    </div>
                </div>

                {/* Top 5 Recommendations */}
                <h2 style={{ fontSize: 24, fontWeight: 600, color: '#FFFFFF', marginBottom: 16 }}>
                    Top 5 Recommended Cities
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
                    {data.recommendations.map((rec, index) => (
                        <div
                            key={rec.city_name}
                            className={`recommendation-card ${index === 0 ? 'top' : ''}`}
                            onClick={() => handleCityClick(rec)}
                            style={{ cursor: 'pointer' }}
                            title="Click to view detailed city information"
                        >
                            <div className="rec-card-content">
                                {/* Rank */}
                                <div style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 8,
                                    background: index === 0 ? 'linear-gradient(135deg, #14B8A6 0%, #10B981 100%)' : 'rgba(255,255,255,0.1)',
                                    color: index === 0 ? 'white' : 'rgba(255,255,255,0.6)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 700,
                                    fontSize: 16
                                }}>
                                    #{index + 1}
                                </div>

                                {/* AQI Badge */}
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: 4,
                                    minWidth: 56,
                                }}>
                                    <div style={{
                                        width: 48,
                                        height: 48,
                                        borderRadius: 8,
                                        background: getAqiColor(rec.target_aqi),
                                        color: 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: 700,
                                        fontSize: 16
                                    }}>
                                        {rec.target_aqi}
                                    </div>
                                    {rec.live_aqi != null ? (
                                        <div style={{ textAlign: 'center' }}>
                                            <div style={{
                                                fontSize: 10,
                                                fontWeight: 700,
                                                color: '#10B981',
                                                lineHeight: 1.2,
                                                letterSpacing: '0.02em',
                                            }}>
                                                🟢 Live: {rec.live_aqi}
                                            </div>
                                            {rec.historical_avg_aqi != null && (
                                                <div style={{
                                                    fontSize: 9,
                                                    color: 'rgba(255,255,255,0.5)',
                                                    lineHeight: 1.2,
                                                }}>
                                                    Avg: {Math.round(rec.historical_avg_aqi)}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <div style={{
                                            fontSize: 9,
                                            color: 'rgba(255,255,255,0.5)',
                                            textAlign: 'center',
                                            lineHeight: 1.2,
                                        }}>
                                            Hist. avg
                                        </div>
                                    )}
                                </div>

                                {/* City Info */}
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontWeight: 600, color: '#FFFFFF', fontSize: 18 }}>
                                        {rec.city_name}
                                        {index === 0 && (
                                            <span style={{
                                                marginLeft: 8,
                                                background: '#7C3AED',
                                                color: 'white',
                                                padding: '2px 8px',
                                                borderRadius: 4,
                                                fontSize: 11,
                                                fontWeight: 600
                                            }}>
                                                AI RECOMMENDED
                                            </span>
                                        )}
                                    </div>
                                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>
                                        {rec.state} • {getAqiCategory(rec.target_aqi)}
                                    </div>
                                </div>

                                {/* Scores */}
                                <div className="rec-scores">
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ fontSize: 20, fontWeight: 700, color: '#10B981' }}>
                                            {rec.aqi_improvement_percent.toFixed(0)}%
                                        </div>
                                        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>AQI Improve</div>
                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ fontSize: 20, fontWeight: 700, color: '#FFFFFF' }}>
                                            {rec.distance_km.toFixed(0)} km
                                        </div>
                                        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>Distance</div>
                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ fontSize: 20, fontWeight: 700, color: '#FFFFFF' }}>
                                            ₹{rec.avg_rent.toLocaleString()}
                                        </div>
                                        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>Avg Rent</div>
                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ fontSize: 20, fontWeight: 700, color: '#14B8A6' }}>
                                            {rec.suitability_score.toFixed(0)}
                                        </div>
                                        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>Score</div>
                                    </div>
                                </div>

                                {/* Save to Profile Button */}
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleSaveRecommendation(rec);
                                        }}
                                        disabled={savingCity === rec.city_name || savedCities.has(rec.city_name)}
                                        id={`save-btn-${rec.city_name.toLowerCase().replace(/\s+/g, '-')}`}
                                        style={{
                                            padding: '10px 18px',
                                            borderRadius: 8,
                                            border: 'none',
                                            fontSize: 13,
                                            fontWeight: 600,
                                            cursor: savedCities.has(rec.city_name) ? 'default' : 'pointer',
                                            background: savedCities.has(rec.city_name)
                                                ? 'rgba(16, 185, 129, 0.1)'
                                                : 'linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%)',
                                            color: savedCities.has(rec.city_name) ? '#10B981' : 'white',
                                            transition: 'all 0.2s',
                                            whiteSpace: 'nowrap',
                                            opacity: savingCity === rec.city_name ? 0.7 : 1,
                                        }}
                                    >
                                        {savedCities.has(rec.city_name)
                                            ? '✓ Saved'
                                            : savingCity === rec.city_name
                                                ? '⏳ Saving...'
                                                : '💾 Save to Profile'}
                                    </button>
                                </div>
                            </div>

                            {/* Expanded details for top recommendation */}
                            {index === 0 && (
                                <div className="expanded-grid" style={{
                                    marginTop: 20,
                                    paddingTop: 20,
                                    borderTop: '1px dashed rgba(255,255,255,0.15)'
                                }}>
                                    <div className="card" style={{ padding: 16, textAlign: 'center', background: 'rgba(16, 185, 129, 0.05)' }}>
                                        <div style={{ fontSize: 24, fontWeight: 700, color: '#10B981' }}>
                                            {rec.respiratory_risk_reduction.toFixed(1)}%
                                        </div>
                                        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>Respiratory Risk ↓</div>
                                    </div>
                                    <div className="card" style={{ padding: 16, textAlign: 'center', background: 'rgba(20, 184, 166, 0.05)' }}>
                                        <div style={{ fontSize: 24, fontWeight: 700, color: '#14B8A6' }}>
                                            +{rec.life_expectancy_gain_years} yrs
                                        </div>
                                        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>Life Expectancy</div>
                                    </div>
                                    <div className="card" style={{ padding: 16, textAlign: 'center', background: 'rgba(59, 130, 246, 0.05)' }}>
                                        <div style={{ fontSize: 24, fontWeight: 700, color: '#3B82F6' }}>
                                            {rec.job_match_score}/100
                                        </div>
                                        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>Job Match</div>
                                    </div>
                                    <div className="card" style={{ padding: 16, textAlign: 'center', background: 'rgba(139, 92, 246, 0.05)' }}>
                                        <div style={{ fontSize: 24, fontWeight: 700, color: '#8B5CF6' }}>
                                            {rec.healthcare_score}/100
                                        </div>
                                        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>Healthcare</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Saved Recommendations Gallery */}
                {savedRecommendations.length > 0 && (
                    <div style={{ marginBottom: 48 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                            <div style={{
                                width: 40,
                                height: 40,
                                borderRadius: 12,
                                background: 'rgba(124, 58, 237, 0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: 20
                            }}>
                                ⭐
                            </div>
                            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#FFFFFF', margin: 0 }}>
                                Saved Recommendations
                            </h2>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                            gap: 20
                        }}>
                            {savedRecommendations.map((rec) => (
                                <div key={rec.id} className="card" style={{
                                    padding: '24px',
                                    position: 'relative',
                                    border: '1px solid rgba(255, 255, 255, 0.12)',
                                    background: 'rgba(255, 255, 255, 0.07)',
                                    backdropFilter: 'blur(16px)',
                                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 16
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-4px)';
                                        e.currentTarget.style.boxShadow = '0 12px 24px -10px rgba(0,0,0,0.3)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                        <div>
                                            <div style={{ fontWeight: 700, fontSize: 20, color: '#FFFFFF' }}>
                                                {rec.target_city}
                                            </div>
                                            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, fontWeight: 500, marginTop: 2 }}>
                                                {rec.target_state || 'India'}
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleRemoveSaved(rec.id, rec.target_city)}
                                            style={{
                                                border: '1px solid rgba(239, 68, 68, 0.3)',
                                                background: 'rgba(239, 68, 68, 0.1)',
                                                color: '#EF4444',
                                                padding: '6px 10px',
                                                borderRadius: 6,
                                                cursor: 'pointer',
                                                fontSize: 12,
                                                fontWeight: 600,
                                                transition: 'all 0.2s',
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.background = '#EF4444';
                                                e.currentTarget.style.color = 'white';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)';
                                                e.currentTarget.style.color = '#EF4444';
                                            }}
                                        >
                                            Remove
                                        </button>
                                    </div>

                                    {rec.target_aqi != null && (
                                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                                            <div style={{
                                                padding: '6px 10px',
                                                borderRadius: 6,
                                                background: 'rgba(20, 184, 166, 0.08)',
                                                border: '1px solid rgba(20, 184, 166, 0.2)',
                                                color: '#0D9488',
                                                fontSize: 12,
                                                fontWeight: 600,
                                            }}>
                                                Target AQI: {rec.target_aqi}
                                            </div>
                                            {rec.aqi_improvement_percent != null && (
                                                <div style={{
                                                    padding: '6px 10px',
                                                    borderRadius: 6,
                                                    background: 'rgba(124, 58, 237, 0.08)',
                                                    border: '1px solid rgba(124, 58, 237, 0.2)',
                                                    color: '#7C3AED',
                                                    fontSize: 12,
                                                    fontWeight: 600,
                                                }}>
                                                    {rec.aqi_improvement_percent.toFixed(0)}% Better
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {rec.suitability_score != null && (
                                        <div style={{ marginTop: 'auto', paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>Suitability Score</span>
                                                <span style={{ fontSize: 15, fontWeight: 700, color: '#FFFFFF' }}>{rec.suitability_score.toFixed(1)}</span>
                                            </div>
                                            <div style={{ height: 6, background: 'rgba(255,255,255,0.1)', borderRadius: 3, marginTop: 8, overflow: 'hidden' }}>
                                                <div style={{
                                                    height: '100%',
                                                    width: `${rec.suitability_score}%`,
                                                    background: 'linear-gradient(90deg, #14B8A6, #06B6D4)',
                                                    borderRadius: 3
                                                }} />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* AI Advisory Section */}
                <div className="card" style={{ marginBottom: 32, padding: 32 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                        <div style={{
                            width: 40,
                            height: 40,
                            background: 'linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%)',
                            borderRadius: 8,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: 18
                        }}>
                            🤖
                        </div>
                        <h3 style={{ fontSize: 20, fontWeight: 600, color: '#FFFFFF', margin: 0 }}>
                            AI Migration Advisory
                        </h3>
                    </div>
                    <div style={{
                        color: 'rgba(255,255,255,0.7)',
                        lineHeight: 1.8,
                        whiteSpace: 'pre-wrap',
                        fontSize: 15
                    }}>
                        {data.advisory}
                    </div>
                </div>

                {/* User Profile Summary */}
                <div className="card" style={{ marginBottom: 32, padding: 24 }}>
                    <h3 style={{ fontSize: 18, fontWeight: 600, color: '#FFFFFF', marginBottom: 16 }}>
                        Assessment Summary
                    </h3>
                    <div className="summary-grid">
                        <div>
                            <div style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 4 }}>Profile</div>
                            <div style={{ fontWeight: 500 }}>{data.userProfile.name}, {data.userProfile.age} years</div>
                            <div style={{ color: 'rgba(255,255,255,0.5)' }}>{data.userProfile.profession}</div>
                        </div>
                        <div>
                            <div style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 4 }}>Family</div>
                            <div style={{ fontWeight: 500 }}>{data.familyHealth.familyType}</div>
                            <div style={{ color: 'rgba(255,255,255,0.5)' }}>
                                {data.familyHealth.totalMembers} members
                                {data.familyHealth.children > 0 && `, ${data.familyHealth.children} children`}
                                {data.familyHealth.elderly > 0 && `, ${data.familyHealth.elderly} elderly`}
                            </div>
                        </div>
                        <div>
                            <div style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 4 }}>Constraints</div>
                            <div style={{ fontWeight: 500 }}>Max {data.location.maxDistance} km</div>
                            <div style={{ color: 'rgba(255,255,255,0.5)' }}>
                                {data.location.monthlyBudget ? `Budget: ₹${parseInt(data.location.monthlyBudget).toLocaleString()}` : 'No budget limit'}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="print-hidden action-buttons">
                    <button
                        className="btn-primary"
                        onClick={() => window.print()}
                        style={{ padding: '14px 28px' }}
                    >
                        📄 Download Report
                    </button>
                    <Link href="/wizard" className="btn-secondary" style={{ padding: '14px 28px' }}>
                        🔄 New Assessment
                    </Link>
                </div>
            </div>

            {/* City Description Modal */}
            {selectedCity && (
                <div
                    className="modal-overlay"
                    onClick={(e) => e.target === e.currentTarget && closeModal()}
                >
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                                <div style={{
                                    width: 48,
                                    height: 48,
                                    borderRadius: 8,
                                    background: getAqiColor(selectedCity.target_aqi),
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 700,
                                    fontSize: 18
                                }}>
                                    {selectedCity.target_aqi}
                                </div>
                                <div>
                                    <h3 className="modal-city-title">
                                        {selectedCity.city_name}
                                    </h3>
                                    <p style={{ margin: 0, color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>
                                        {selectedCity.state} • {getAqiCategory(selectedCity.target_aqi)}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={closeModal}
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 8,
                                    border: 'none',
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    cursor: 'pointer',
                                    fontSize: 20,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                ✕
                            </button>
                        </div>

                        {/* Tabs */}
                        <div style={{
                            display: 'flex',
                            borderBottom: '1px solid rgba(255,255,255,0.1)',
                            overflowX: 'auto',
                            padding: '0 16px'
                        }}>
                            {[
                                { id: 'security' as const, label: '🛡️ Security', icon: '🛡️' },
                                { id: 'education' as const, label: '📚 Education', icon: '📚' },
                                { id: 'communities' as const, label: '👥 Communities', icon: '👥' },
                                { id: 'connectivity' as const, label: '🚗 Connectivity', icon: '🚗' },
                                { id: 'hospitals' as const, label: '🏥 Healthcare', icon: '🏥' },
                                { id: 'geography' as const, label: '🏔️ Geography', icon: '🏔️' }
                            ].map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    style={{
                                        padding: '12px 16px',
                                        border: 'none',
                                        backgroundColor: 'transparent',
                                        cursor: 'pointer',
                                        fontSize: 14,
                                        fontWeight: activeTab === tab.id ? 600 : 400,
                                        color: activeTab === tab.id ? '#14B8A6' : 'rgba(255,255,255,0.6)',
                                        borderBottom: activeTab === tab.id ? '2px solid #14B8A6' : '2px solid transparent',
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Modal Content */}
                        <div className="modal-body">
                            {isLoadingDescription ? (
                                <div style={{
                                    textAlign: 'center',
                                    padding: 60,
                                    color: 'rgba(255,255,255,0.6)'
                                }}>
                                    <div className="loading-pulse" style={{ fontSize: 18 }}>
                                        🤖 AI is gathering information about {selectedCity.city_name}...
                                    </div>
                                    <p style={{ marginTop: 12, fontSize: 14 }}>
                                        Fetching crime statistics, education facilities, connectivity data, and more
                                    </p>
                                </div>
                            ) : cityDescription ? (
                                <>
                                    {activeTab === 'security' && (
                                        <div>
                                            <div style={{ marginBottom: 24 }}>
                                                <h4 style={{ margin: 0, marginBottom: 12, fontSize: 16, color: '#FFFFFF' }}>
                                                    Security Score
                                                </h4>
                                                <ScoreBar
                                                    score={cityDescription.crime_rate.security_score}
                                                    color={cityDescription.crime_rate.security_score >= 7 ? '#10B981' : cityDescription.crime_rate.security_score >= 5 ? '#F59E0B' : '#EF4444'}
                                                />
                                            </div>
                                            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
                                                {cityDescription.crime_rate.description}
                                            </p>
                                        </div>
                                    )}

                                    {activeTab === 'education' && (
                                        <div>
                                            <div style={{ marginBottom: 24 }}>
                                                <h4 style={{ margin: 0, marginBottom: 12, fontSize: 16, color: '#FFFFFF' }}>
                                                    Education Score
                                                </h4>
                                                <ScoreBar
                                                    score={cityDescription.education.score}
                                                    color="#3B82F6"
                                                />
                                            </div>
                                            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 20 }}>
                                                {cityDescription.education.description}
                                            </p>
                                            <h5 style={{ margin: 0, marginBottom: 12, fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>
                                                Key Educational Institutions
                                            </h5>
                                            <ul style={{ margin: 0, paddingLeft: 20, color: 'rgba(255,255,255,0.7)' }}>
                                                {cityDescription.education.highlights.map((item, i) => (
                                                    <li key={i} style={{ marginBottom: 8 }}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {activeTab === 'communities' && (
                                        <div>
                                            <h4 style={{ margin: 0, marginBottom: 16, fontSize: 16, color: '#FFFFFF' }}>
                                                Demographics & Communities
                                            </h4>
                                            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 20 }}>
                                                {cityDescription.communities.demographics}
                                            </p>
                                            <h5 style={{ margin: 0, marginBottom: 12, fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>
                                                Community Highlights
                                            </h5>
                                            <ul style={{ margin: 0, paddingLeft: 20, color: 'rgba(255,255,255,0.7)' }}>
                                                {cityDescription.communities.highlights.map((item, i) => (
                                                    <li key={i} style={{ marginBottom: 8 }}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {activeTab === 'connectivity' && (
                                        <div>
                                            <div className="connectivity-grid">
                                                <div className="card" style={{ padding: 20, textAlign: 'center' }}>
                                                    <div style={{ fontSize: 28, fontWeight: 700, color: '#14B8A6' }}>
                                                        {cityDescription.connectivity.nearest_metro}
                                                    </div>
                                                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>
                                                        Nearest Metro City
                                                    </div>
                                                </div>
                                                <div className="card" style={{ padding: 20, textAlign: 'center' }}>
                                                    <div style={{ fontSize: 28, fontWeight: 700, color: '#3B82F6' }}>
                                                        {cityDescription.connectivity.distance_km} km
                                                    </div>
                                                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>
                                                        Distance
                                                    </div>
                                                </div>
                                            </div>
                                            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 12 }}>
                                                {cityDescription.connectivity.description}
                                            </p>
                                            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>
                                                <strong>Transport Options:</strong> {cityDescription.connectivity.transport_options}
                                            </p>
                                        </div>
                                    )}

                                    {activeTab === 'hospitals' && (
                                        <div>
                                            <div style={{ marginBottom: 24 }}>
                                                <h4 style={{ margin: 0, marginBottom: 12, fontSize: 16, color: '#FFFFFF' }}>
                                                    Healthcare Score
                                                </h4>
                                                <ScoreBar
                                                    score={cityDescription.hospitals.score}
                                                    color="#8B5CF6"
                                                />
                                            </div>
                                            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 20 }}>
                                                {cityDescription.hospitals.description}
                                            </p>
                                            <h5 style={{ margin: 0, marginBottom: 12, fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>
                                                Major Healthcare Facilities
                                            </h5>
                                            <ul style={{ margin: 0, paddingLeft: 20, color: 'rgba(255,255,255,0.7)' }}>
                                                {cityDescription.hospitals.facilities.map((item, i) => (
                                                    <li key={i} style={{ marginBottom: 8 }}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {activeTab === 'geography' && (
                                        <div>
                                            <div className="geography-grid">
                                                <div className="card" style={{ padding: 16, textAlign: 'center' }}>
                                                    <div style={{ fontSize: 16, fontWeight: 600, color: '#10B981' }}>
                                                        {cityDescription.geography.terrain}
                                                    </div>
                                                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>Terrain</div>
                                                </div>
                                                <div className="card" style={{ padding: 16, textAlign: 'center' }}>
                                                    <div style={{ fontSize: 16, fontWeight: 600, color: '#3B82F6' }}>
                                                        {cityDescription.geography.climate}
                                                    </div>
                                                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>Climate</div>
                                                </div>
                                                {cityDescription.geography.elevation_m > 0 && (
                                                    <div className="card" style={{ padding: 16, textAlign: 'center' }}>
                                                        <div style={{ fontSize: 16, fontWeight: 600, color: '#8B5CF6' }}>
                                                            {cityDescription.geography.elevation_m}m
                                                        </div>
                                                        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>Elevation</div>
                                                    </div>
                                                )}
                                            </div>
                                            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 20 }}>
                                                {cityDescription.geography.description}
                                            </p>
                                            <h5 style={{ margin: 0, marginBottom: 12, fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>
                                                Natural Features
                                            </h5>
                                            <ul style={{ margin: 0, paddingLeft: 20, color: 'rgba(255,255,255,0.7)' }}>
                                                {cityDescription.geography.features.map((item, i) => (
                                                    <li key={i} style={{ marginBottom: 8 }}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </>
                            ) : descriptionError ? (
                                <div style={{ textAlign: 'center', padding: 40 }}>
                                    <div style={{ fontSize: 48, marginBottom: 16 }}>⚠️</div>
                                    <div style={{ color: '#EF4444', fontSize: 16, fontWeight: 600, marginBottom: 8 }}>
                                        Failed to load city information
                                    </div>
                                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, marginBottom: 20 }}>
                                        The AI service may be temporarily unavailable. Please try again.
                                    </p>
                                    <button
                                        onClick={() => selectedCity && handleCityClick(selectedCity)}
                                        className="btn-primary"
                                        style={{ padding: '10px 24px', fontSize: 14 }}
                                    >
                                        🔄 Retry
                                    </button>
                                </div>
                            ) : (
                                <div style={{ textAlign: 'center', padding: 40, color: 'rgba(255,255,255,0.5)' }}>
                                    Select a tab to view city information.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )
            }
        </div >
    );
}

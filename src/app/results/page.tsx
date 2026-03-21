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
    saveRecommendation,
    deleteSavedRecommendation,
} from '../../lib/api';
import { useAuth } from '../../context/AuthContext';

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

function renderListSection(title: string, items?: string[]) {
    if (!items || items.length === 0) return null;

    return (
        <div style={{ marginTop: 20 }}>
            <h5 style={{ margin: 0, marginBottom: 12, fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>
                {title}
            </h5>
            <ul style={{ margin: 0, paddingLeft: 20, color: 'rgba(255,255,255,0.72)' }}>
                {items.map((item, index) => (
                    <li key={`${title}-${index}`} style={{ marginBottom: 8 }}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function ResultsPage() {
    const router = useRouter();
    const { user, token, loading: authLoading } = useAuth(); // Extracted token for API calls
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

    // Load saved recommendations using Firebase UID and Token
    useEffect(() => {
        // Wait until BOTH the user and the token are loaded
        if (!user || !token) return;

        const loadSaved = async () => {
            try {
                // Pass the token here
                const saved = await fetchSavedRecommendations(user.uid, token);
                setSavedRecommendations(saved);
                setSavedCities(new Set(saved.map((item) => item.target_city)));
            } catch (error) {
                console.error('Error loading saved recommendations:', error);
            }
        };

        loadSaved();
    }, [user, token]); // Add token to dependency array

    const handleSaveRecommendation = async (rec: CityRecommendation) => {
        if (!user || !token) return;
        setSavingCity(rec.city_name);
        try {
            const inserted = await saveRecommendation({
                user_id: user.uid, // Updated to uid
                target_city: rec.city_name,
                target_state: rec.state,
                current_aqi: rec.current_aqi,
                target_aqi: rec.target_aqi,
                aqi_improvement_percent: rec.aqi_improvement_percent,
                suitability_score: rec.suitability_score,
                advisory_text: data?.advisory || null,
            }, token); // Pass the auth token

            if (inserted) {
                setSavedCities(prev => new Set(prev).add(rec.city_name));
                setSavedRecommendations(prev => [inserted, ...prev]);
            } else {
                console.error('Error saving recommendation');
                alert('Database Error: Could not save recommendation. Check server logs.');
            }
        } catch (err: any) {
            console.error('Error saving:', err);
            alert('Unexpected Error: ' + err.message);
        } finally {
            setSavingCity(null);
        }
    };

    const handleRemoveSaved = async (savedId: string, targetCity: string) => {
        if (!user || !token) return;
        try {
            const success = await deleteSavedRecommendation(savedId, user.uid, token);
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
                        background: '#7c3aed',
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
                <div style={{ textAlign: 'center', marginBottom: 40 }}>
                    <div className="badge badge-teal" style={{ marginBottom: 16 }}>
                        ✓ AI Analysis 
                    </div>
                    <h1 className="results-title">
                        Migration Readiness Report
                    </h1>
                    <p style={{ color: 'rgba(255,255,255,0.6)' }}>
                        Personalized recommendations for {data.userName}
                    </p>
                </div>

                <div style={{ marginBottom: 24, padding: 32, textAlign: 'center' }}>
                    <div className="score-value" style={{ color: '#7c3aed', fontSize: 48, marginBottom: 8 }}>
                        {data.readiness_score.toFixed(0)}%
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16 }}>Migration Readiness Score</div>
                </div>

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
                                <div style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 8,
                                    background: index === 0 ? '#7c3aed' : 'rgba(255,255,255,0.1)',
                                    color: index === 0 ? 'white' : 'rgba(255,255,255,0.6)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 700,
                                    fontSize: 16
                                }}>
                                    #{index + 1}
                                </div>

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

                                <div className="rec-scores">
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ fontSize: 20, fontWeight: 700, color: '#7c3aed' }}>
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
                                        <div style={{ fontSize: 20, fontWeight: 700, color: '#7c3aed' }}>
                                            {rec.suitability_score.toFixed(0)}
                                        </div>
                                        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>Score</div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleSaveRecommendation(rec);
                                        }}
                                        disabled={savingCity === rec.city_name || savedCities.has(rec.city_name)}
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
                                            color: savedCities.has(rec.city_name) ? '#7c3aed' : 'white',
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

                                <div className="expanded-grid" style={{
                                    marginTop: 20,
                                    paddingTop: 20,
                                    borderTop: '1px dashed rgba(255,255,255,0.15)'
                                }}>
                                    <div className="card" style={{ padding: 16, textAlign: 'center', background: 'rgba(16, 185, 129, 0.05)' }}>
                                        <div style={{ fontSize: 24, fontWeight: 700, color: '#7c3aed' }}>
                                            {rec.respiratory_risk_reduction.toFixed(1)}%
                                        </div>
                                        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>Respiratory Risk ↓</div>
                                    </div>
                                    <div className="card" style={{ padding: 16, textAlign: 'center', background: 'rgba(124, 58, 237, 0.05)' }}>
                                        <div style={{ fontSize: 24, fontWeight: 700, color: '#7c3aed' }}>
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
                        </div>
                    ))}
                </div>

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
                                        >
                                            Remove
                                        </button>
                                    </div>

                                    {rec.target_aqi != null && (
                                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                                            <div style={{
                                                padding: '6px 10px',
                                                borderRadius: 6,
                                                background: 'rgba(124, 58, 237, 0.08)',
                                                border: '1px solid rgba(124, 58, 237, 0.2)',
                                                color: '#6d28d9',
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
                                                    background: '#7c3aed',
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

            {selectedCity && (
                <div
                    className="modal-overlay"
                    onClick={(e) => e.target === e.currentTarget && closeModal()}
                >
                    <div className="modal-content">
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
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                <Link
                                    href={`/city/${encodeURIComponent(selectedCity.city_name)}?state=${encodeURIComponent(selectedCity.state)}`}
                                    style={{
                                        padding: '10px 20px',
                                        borderRadius: 8,
                                        background: 'linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%)',
                                        color: 'white',
                                        fontSize: 14,
                                        fontWeight: 600,
                                        textDecoration: 'none',
                                        boxShadow: '0 4px 12px rgba(124, 58, 237, 0.3)'
                                    }}
                                >
                                    Explore City →
                                </Link>
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
                        </div>

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
                                        color: activeTab === tab.id ? '#7c3aed' : 'rgba(255,255,255,0.6)',
                                        borderBottom: activeTab === tab.id ? '2px solid #7c3aed' : '2px solid transparent',
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

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
                                                    color={cityDescription.crime_rate.security_score >= 7 ? '#7c3aed' : cityDescription.crime_rate.security_score >= 5 ? '#F59E0B' : '#EF4444'}
                                                />
                                            </div>
                                            <div style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 8 }}>
                                                {cityDescription.crime_rate.description}
                                            </div>
                                            {renderListSection('Key Factors', cityDescription.crime_rate.key_factors)}
                                            {renderListSection('Sources', cityDescription.crime_rate.sources)}
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
                                            <div style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 20 }}>
                                                {cityDescription.education.description}
                                            </div>
                                            <h5 style={{ margin: 0, marginBottom: 12, fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>
                                                Education Highlights
                                            </h5>
                                            <ul style={{ margin: 0, paddingLeft: 20, color: 'rgba(255,255,255,0.7)' }}>
                                                {cityDescription.education.highlights.map((item, i) => (
                                                    <li key={i} style={{ marginBottom: 8 }}>{item}</li>
                                                ))}
                                            </ul>
                                            {renderListSection('Key Factors', cityDescription.education.key_factors)}
                                            {renderListSection('Sources', cityDescription.education.sources)}
                                        </div>
                                    )}

                                    {activeTab === 'communities' && (
                                        <div>
                                            <h4 style={{ margin: 0, marginBottom: 16, fontSize: 16, color: '#FFFFFF' }}>
                                                Demographics & Communities
                                            </h4>
                                            <div style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 20 }}>
                                                {cityDescription.communities.demographics}
                                            </div>
                                            {cityDescription.communities.description && (
                                                <div style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 20 }}>
                                                    {cityDescription.communities.description}
                                                </div>
                                            )}
                                            <h5 style={{ margin: 0, marginBottom: 12, fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>
                                                Community Highlights
                                            </h5>
                                            <ul style={{ margin: 0, paddingLeft: 20, color: 'rgba(255,255,255,0.7)' }}>
                                                {cityDescription.communities.highlights.map((item, i) => (
                                                    <li key={i} style={{ marginBottom: 8 }}>{item}</li>
                                                ))}
                                            </ul>
                                            {renderListSection('Key Factors', cityDescription.communities.key_factors)}
                                            {renderListSection('Sources', cityDescription.communities.sources)}
                                        </div>
                                    )}

                                    {activeTab === 'connectivity' && (
                                        <div>
                                            <div className="connectivity-grid">
                                                <div className="card" style={{ padding: 20, textAlign: 'center' }}>
                                                    <div style={{ fontSize: 28, fontWeight: 700, color: '#7c3aed' }}>
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
                                            <div style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 12 }}>
                                                {cityDescription.connectivity.description}
                                            </div>
                                            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>
                                                <strong>Transport Options:</strong> {cityDescription.connectivity.transport_options}
                                            </div>
                                            {renderListSection('Key Factors', cityDescription.connectivity.key_factors)}
                                            {renderListSection('Sources', cityDescription.connectivity.sources)}
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
                                            <div style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 20 }}>
                                                {cityDescription.hospitals.description}
                                            </div>
                                            <h5 style={{ margin: 0, marginBottom: 12, fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>
                                                Major Healthcare Facilities
                                            </h5>
                                            <ul style={{ margin: 0, paddingLeft: 20, color: 'rgba(255,255,255,0.7)' }}>
                                                {cityDescription.hospitals.facilities.map((item, i) => (
                                                    <li key={i} style={{ marginBottom: 8 }}>{item}</li>
                                                ))}
                                            </ul>
                                            {renderListSection('Key Factors', cityDescription.hospitals.key_factors)}
                                            {renderListSection('Sources', cityDescription.hospitals.sources)}
                                        </div>
                                    )}

                                    {activeTab === 'geography' && (
                                        <div>
                                            <div className="geography-grid">
                                                <div className="card" style={{ padding: 16, textAlign: 'center' }}>
                                                    <div style={{ fontSize: 16, fontWeight: 600, color: '#7c3aed' }}>
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
                                            <div style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 20 }}>
                                                {cityDescription.geography.description}
                                            </div>
                                            <h5 style={{ margin: 0, marginBottom: 12, fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>
                                                Natural Features
                                            </h5>
                                            <ul style={{ margin: 0, paddingLeft: 20, color: 'rgba(255,255,255,0.7)' }}>
                                                {cityDescription.geography.features.map((item, i) => (
                                                    <li key={i} style={{ marginBottom: 8 }}>{item}</li>
                                                ))}
                                            </ul>
                                            {renderListSection('Key Factors', cityDescription.geography.key_factors)}
                                            {renderListSection('Sources', cityDescription.geography.sources)}
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
            )}
        </div>
    );
}

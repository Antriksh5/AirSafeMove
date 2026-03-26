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
        professions?: string[];
        earningMembers?: number;
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

function isResultsData(value: unknown): value is ResultsData {
    if (!value || typeof value !== 'object') return false;

    const candidate = value as Partial<ResultsData>;
    return Array.isArray(candidate.recommendations)
        && typeof candidate.current_aqi === 'number'
        && typeof candidate.readiness_score === 'number'
        && typeof candidate.health_urgency === 'number'
        && typeof candidate.health_sensitivity === 'number'
        && typeof candidate.advisory === 'string';
}

function normalizeResultsData(value: unknown): ResultsData | null {
    if (!isResultsData(value)) return null;

    const userProfile = value.userProfile ?? { name: '', age: 0, profession: '' };
    const normalizedProfession = userProfile.profession
        || (Array.isArray(userProfile.professions) ? userProfile.professions[0] : '')
        || '';

    return {
        ...value,
        userProfile: {
            ...userProfile,
            profession: normalizedProfession,
        },
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
                backgroundColor: 'rgba(92,74,42,0.1)',
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
        <div style={{ marginTop: 32 }}>
            <h5 style={{ margin: 0, marginBottom: 12, fontSize: 13, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: 0.5 }}>
                {title}
            </h5>
            <ul style={{ margin: 0, paddingLeft: 20, color: 'rgba(255,255,255,0.8)', fontSize: 15, lineHeight: 1.6 }}>
                {items.map((item, index) => (
                    <li key={`${title}-${index}`} style={{ marginBottom: 12, paddingLeft: 8 }}>
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
                avg_rent: rec.avg_rent,
                distance_km: rec.distance_km,
                healthcare_score: rec.healthcare_score,
                respiratory_risk_reduction: rec.respiratory_risk_reduction,
                life_expectancy_gain_years: rec.life_expectancy_gain_years,
                job_match_score: rec.job_match_score,
                aqi_trend: rec.aqi_trend,
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
            try {
                const parsed = JSON.parse(storedData);
                const normalized = normalizeResultsData(parsed);

                if (!normalized) {
                    sessionStorage.removeItem('airsafe_results');
                    router.push('/wizard');
                    return;
                }

                setData(normalized);
            } catch (error) {
                console.error('Failed to parse stored results:', error);
                sessionStorage.removeItem('airsafe_results');
                router.push('/wizard');
            }
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
                background: '#F5EFE0'
            }}>
                <div className="loading-pulse" style={{ color: 'rgba(255,255,255,0.7)' }}>Loading...</div>
            </div>
        );
    }

    const topRec = data.recommendations[0];

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#FDFBF7', color: '#4A3B2A', fontFamily: "'Libre Franklin', sans-serif" }}>
            {/* Header */}
            <header style={{ padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, color: '#4A3B2A', fontWeight: 600 }}>
                    <img 
                        src="/Logo.png" 
                        alt="AI शहरें" 
                        style={{ 
                            height: 32, 
                            width: 'auto',
                            objectFit: 'contain'
                        }} 
                    />
                </Link>
                <div style={{ display: 'flex', gap: 16 }}>
                    <Link href="/wizard" style={{ textDecoration: 'none', padding: '10px 20px', border: '1px solid rgba(139,115,85,0.2)', borderRadius: 8, color: '#4A3B2A', fontSize: 14, fontWeight: 500 }}>
                        New Assessment
                    </Link>
                    <button onClick={() => window.print()} style={{ background: 'transparent', padding: '10px 20px', border: '1px solid rgba(139,115,85,0.2)', borderRadius: 8, color: '#4A3B2A', fontSize: 14, fontWeight: 500, cursor: 'pointer' }}>
                        Print Report
                    </button>
                </div>
            </header>

            <main style={{ maxWidth: 760, margin: '0 auto', padding: '40px 20px', paddingBottom: 100 }}>
                {/* Top Section */}
                <div style={{ textAlign: 'center', marginBottom: 40 }}>
                    <div style={{ display: 'inline-block', background: '#F2EDE4', color: '#8B7355', padding: '4px 12px', borderRadius: 16, fontSize: 12, fontWeight: 600, letterSpacing: 0.5, marginBottom: 16 }}>
                        ✦ AI ANALYSIS COMPLETE
                    </div>
                    <h1 style={{ fontSize: 36, fontWeight: 700, color: '#4A3B2A', margin: '0 0 12px 0', fontFamily: "'Libre Baskerville', serif" }}>
                        Relocation Readiness Report
                    </h1>
                    <p style={{ color: '#8B7355', margin: 0, fontSize: 15 }}>
                        Personalised recommendations for {data.userName}
                    </p>
                </div>

                {/* Score Section */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 40, marginBottom: 40 }}>
                    <div style={{ position: 'relative', width: 120, height: 120 }}>
                        <svg width="120" height="120" viewBox="0 0 120 120">
                            <circle cx="60" cy="60" r="54" fill="none" stroke="#EAE6DF" strokeWidth="8" />
                            <circle cx="60" cy="60" r="54" fill="none" stroke="#8B7355" strokeWidth="8" strokeDasharray={`${(data.readiness_score / 100) * 339} 339`} strokeLinecap="round" transform="rotate(-90 60 60)" />
                        </svg>
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ fontSize: 28, fontWeight: 700, color: '#4A3B2A' }}>{data.readiness_score.toFixed(0)}%</span>
                            <span style={{ fontSize: 11, color: '#8B7355', textTransform: 'uppercase', letterSpacing: 0.5 }}>readiness</span>
                        </div>
                    </div>
                    <div style={{ maxWidth: 300, color: '#4A3B2A', fontSize: 14, lineHeight: 1.6 }}>
                        <strong>Your migration readiness score</strong><br />
                        Based on your profile, family needs, and budget, you're well-positioned to relocate. Our AI found 5 cities that match your criteria strongly.
                    </div>
                </div>

                {/* Summary Boxes */}
                <div style={{ display: 'flex', border: '1px solid #EAE6DF', borderRadius: 12, overflow: 'hidden', marginBottom: 60, background: 'white' }}>
                    <div style={{ flex: 1, padding: '24px 20px', textAlign: 'center', borderRight: '1px solid #EAE6DF' }}>
                        <div style={{ fontSize: 11, color: '#8B7355', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Profile</div>
                        <div style={{ fontSize: 14, color: '#4A3B2A', fontWeight: 500 }}>{data.userProfile.name}, {data.userProfile.age} yrs</div>
                        <div style={{ fontSize: 13, color: '#8B7355', marginTop: 4 }}>{data.userProfile.profession}</div>
                    </div>
                    <div style={{ flex: 1, padding: '24px 20px', textAlign: 'center', borderRight: '1px solid #EAE6DF' }}>
                        <div style={{ fontSize: 11, color: '#8B7355', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Family</div>
                        <div style={{ fontSize: 14, color: '#4A3B2A', fontWeight: 500 }}>{data.familyHealth.familyType}</div>
                        <div style={{ fontSize: 13, color: '#8B7355', marginTop: 4 }}>{data.familyHealth.totalMembers} members • {data.familyHealth.children} child</div>
                    </div>
                    <div style={{ flex: 1, padding: '24px 20px', textAlign: 'center' }}>
                        <div style={{ fontSize: 11, color: '#8B7355', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Constraints</div>
                        <div style={{ fontSize: 14, color: '#4A3B2A', fontWeight: 500 }}>Max {data.location.maxDistance} km</div>
                        <div style={{ fontSize: 13, color: '#8B7355', marginTop: 4 }}>Budget ₹{parseInt(data.location.monthlyBudget || '0').toLocaleString()} / mo</div>
                    </div>
                </div>

                {/* City Recommendations */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 20 }}>
                    <h2 style={{ fontSize: 20, fontWeight: 600, color: '#4A3B2A', margin: 0, fontFamily: "'Libre Baskerville', serif" }}>Top 5 recommended cities</h2>
                    <span style={{ fontSize: 13, color: '#8B7355' }}>Ranked by match score</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 60 }}>
                    {data.recommendations.map((rec, index) => (
                        <div key={rec.city_name} onClick={() => handleCityClick(rec)} style={{ background: 'white', border: '1px solid #EAE6DF', borderRadius: 16, padding: 24, cursor: 'pointer', transition: 'box-shadow 0.2s', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                            <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
                                <div style={{ width: 32, height: 32, borderRadius: 8, background: '#8B7355', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: 14 }}>
                                    #{index + 1}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                        <h3 style={{ margin: 0, fontSize: 18, color: '#4A3B2A', fontWeight: 600, fontFamily: "'Libre Baskerville', serif" }}>{rec.city_name}</h3>
                                        {index === 0 && <span style={{ background: '#F2EDE4', color: '#8B7355', padding: '4px 8px', borderRadius: 12, fontSize: 11, fontWeight: 600 }}>AI recommended</span>}
                                    </div>
                                    <div style={{ fontSize: 13, color: '#8B7355', marginTop: 4 }}>
                                        {rec.state} • {getAqiCategory(rec.target_aqi)} air quality
                                    </div>
                                </div>
                            </div>

                            {/* Metrics Row 1 */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16, borderBottom: '1px solid #FDFBF7', paddingBottom: 16 }}>
                                <div style={{ textAlign: 'center', flex: 1 }}>
                                    <div style={{ fontSize: 16, color: '#4A3B2A', fontWeight: 600 }}>{rec.aqi_improvement_percent.toFixed(0)}%</div>
                                    <div style={{ fontSize: 12, color: '#8B7355', marginTop: 4 }}>AQI improve</div>
                                </div>
                                <div style={{ textAlign: 'center', flex: 1 }}>
                                    <div style={{ fontSize: 16, color: '#4A3B2A', fontWeight: 600 }}>{rec.distance_km.toFixed(0)} km</div>
                                    <div style={{ fontSize: 12, color: '#8B7355', marginTop: 4 }}>Distance</div>
                                </div>
                                <div style={{ textAlign: 'center', flex: 1 }}>
                                    <div style={{ fontSize: 16, color: '#4A3B2A', fontWeight: 600 }}>₹{rec.avg_rent.toLocaleString()}</div>
                                    <div style={{ fontSize: 12, color: '#8B7355', marginTop: 4 }}>Avg rent</div>
                                </div>
                                <div style={{ textAlign: 'center', flex: 1 }}>
                                    <div style={{ fontSize: 16, color: '#4A3B2A', fontWeight: 600 }}>{rec.suitability_score.toFixed(0)}</div>
                                    <div style={{ fontSize: 12, color: '#8B7355', marginTop: 4 }}>Score</div>
                                </div>
                            </div>

                            {/* Metrics Row 2 */}
                            <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
                                <div style={{ flex: 1, background: '#FDFBF7', padding: '16px 12px', borderRadius: 8, textAlign: 'left' }}>
                                    <div style={{ fontSize: 15, color: '#4A3B2A', fontWeight: 600, marginBottom: 4 }}>{rec.respiratory_risk_reduction.toFixed(1)}%</div>
                                    <div style={{ fontSize: 11, color: '#8B7355' }}>Respiratory risk ↓</div>
                                </div>
                                <div style={{ flex: 1, background: '#FDFBF7', padding: '16px 12px', borderRadius: 8, textAlign: 'left' }}>
                                    <div style={{ fontSize: 15, color: '#4A3B2A', fontWeight: 600, marginBottom: 4 }}>+{rec.life_expectancy_gain_years} yrs</div>
                                    <div style={{ fontSize: 11, color: '#8B7355' }}>Life expectancy</div>
                                </div>
                                <div style={{ flex: 1, background: '#FDFBF7', padding: '16px 12px', borderRadius: 8, textAlign: 'left' }}>
                                    <div style={{ fontSize: 15, color: '#4A3B2A', fontWeight: 600, marginBottom: 4 }}>{rec.job_match_score}/100</div>
                                    <div style={{ fontSize: 11, color: '#8B7355' }}>Job match</div>
                                </div>
                                <div style={{ flex: 1, background: '#FDFBF7', padding: '16px 12px', borderRadius: 8, textAlign: 'left' }}>
                                    <div style={{ fontSize: 15, color: '#4A3B2A', fontWeight: 600, marginBottom: 4 }}>{rec.healthcare_score}/100</div>
                                    <div style={{ fontSize: 11, color: '#8B7355' }}>Healthcare</div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
                                <button onClick={(e) => { e.stopPropagation(); handleCityClick(rec); }} style={{ padding: '8px 24px', background: 'transparent', border: '1px solid #EAE6DF', borderRadius: 8, color: '#4A3B2A', fontSize: 13, fontWeight: 500, cursor: 'pointer' }}>
                                    Explore details
                                </button>
                                <button
                                    onClick={(e) => { e.stopPropagation(); handleSaveRecommendation(rec); }}
                                    disabled={savingCity === rec.city_name || savedCities.has(rec.city_name)}
                                    style={{ padding: '8px 24px', background: savedCities.has(rec.city_name) ? '#F2EDE4' : 'transparent', border: savedCities.has(rec.city_name) ? '1px solid #F2EDE4' : '1px solid #EAE6DF', borderRadius: 8, color: savedCities.has(rec.city_name) ? '#8B7355' : '#4A3B2A', fontSize: 13, fontWeight: 500, cursor: savedCities.has(rec.city_name) ? 'default' : 'pointer', opacity: savingCity === rec.city_name ? 0.7 : 1 }}
                                >
                                    {savedCities.has(rec.city_name) ? 'Saved' : savingCity === rec.city_name ? 'Saving...' : 'Save to profile'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Saved Recommendations */}
                <div style={{ marginBottom: 60 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 24 }}>
                        <h2 style={{ fontSize: 20, fontWeight: 600, color: '#4A3B2A', margin: 0, fontFamily: 'serif' }}>Saved recommendations</h2>
                        <span style={{ fontSize: 13, color: '#8B7355' }}>Your personalized picks</span>
                    </div>

                    {savedRecommendations.length === 0 ? (
                        <div style={{ background: 'white', border: '1px dashed #EAE6DF', borderRadius: 16, padding: '40px 24px', textAlign: 'center', color: '#8B7355', fontSize: 14 }}>
                            No saved recommendations yet. Click "Save to profile" on a city to see it here.
                        </div>
                    ) : (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
                            {savedRecommendations.map((saved) => (
                                <div 
                                    key={saved.id} 
                                    style={{ 
                                        background: 'white', 
                                        border: '1px solid #EAE6DF', 
                                        borderRadius: 16, 
                                        padding: 20, 
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                                        transition: 'transform 0.2s, box-shadow 0.2s',
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => handleCityClick({
                                        ...saved,
                                        city_name: saved.target_city,
                                        state: saved.target_state,
                                    } as any)}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                                        <div>
                                            <h3 style={{ margin: 0, fontSize: 16, color: '#4A3B2A', fontWeight: 600, fontFamily: 'serif' }}>{saved.target_city}</h3>
                                            <div style={{ fontSize: 12, color: '#8B7355', marginTop: 2 }}>{saved.target_state}</div>
                                        </div>
                                        <div style={{ background: '#F2EDE4', color: '#8B7355', padding: '4px 8px', borderRadius: 8, fontSize: 12, fontWeight: 600 }}>
                                            {saved.suitability_score.toFixed(0)}%
                                        </div>
                                    </div>
                                    
                                    <div style={{ display: 'flex', gap: 8 }}>
                                        <button 
                                            onClick={(e) => { 
                                                e.stopPropagation(); 
                                                handleCityClick({
                                                    ...saved,
                                                    city_name: saved.target_city,
                                                    state: saved.target_state,
                                                } as any); 
                                            }}
                                            style={{ padding: '8px 20px', background: 'transparent', border: '1px solid #EAE6DF', borderRadius: 8, color: '#4A3B2A', fontSize: 13, fontWeight: 500, cursor: 'pointer' }}
                                        >
                                            Explore city
                                        </button>
                                        <button 
                                            onClick={(e) => { e.stopPropagation(); handleRemoveSaved(saved.id, saved.target_city); }}
                                            style={{ padding: '6px 12px', background: 'transparent', border: '1px solid #FEE2E2', borderRadius: 6, color: '#EF4444', fontSize: 12, fontWeight: 500, cursor: 'pointer' }}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Assessment Summary Bottom */}
                
            </main>

            {selectedCity && (
                <div
                    className="modal-overlay"
                    onClick={(e) => e.target === e.currentTarget && closeModal()}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.75)',
                        backdropFilter: 'blur(4px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 100,
                        padding: 24
                    }}
                >
                    <div
                        className="modal-content"
                        style={{
                            background: '#2C2C2C',
                            borderRadius: 16,
                            width: '100%',
                            maxWidth: 800,
                            maxHeight: '90vh',
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden',
                            border: '1px solid rgba(255,255,255,0.1)',
                            boxShadow: '0 24px 48px rgba(0,0,0,0.5)'
                        }}
                    >
                        <div className="modal-header" style={{
                            padding: '32px 32px 24px 32px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                                <div style={{
                                    width: 56,
                                    height: 56,
                                    borderRadius: 12,
                                    background: getAqiColor(selectedCity.target_aqi),
                                    color: '#1A1A1A',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 700,
                                }}>
                                    <span style={{ fontSize: 20, lineHeight: 1 }}>{selectedCity.target_aqi}</span>
                                    <span style={{ fontSize: 10, opacity: 0.8, marginTop: 2 }}>AQI</span>
                                </div>
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
                                        <h3 className="modal-city-title" style={{
                                            margin: 0,
                                            fontSize: 28,
                                            fontWeight: 600,
                                            color: 'white',
                                            lineHeight: 1,
                                            fontFamily: "'Libre Baskerville', serif"
                                        }}>
                                            {selectedCity.city_name || (selectedCity as any).target_city || 'Unknown City'}
                                        </h3>
                                        <span style={{
                                            padding: '4px 10px',
                                            borderRadius: 6,
                                            background: 'rgba(255,255,255,0.1)',
                                            color: '#22C55E',
                                            fontSize: 12,
                                            fontWeight: 600,
                                            textTransform: 'uppercase',
                                            letterSpacing: 1
                                        }}>
                                            {getAqiCategory(selectedCity.target_aqi || 0)}
                                        </span>
                                    </div>
                                    <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)', fontSize: 15 }}>
                                        {(selectedCity as any).state || (selectedCity as any).target_state || ''}
                                    </p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                <Link
                                    href={`/city/${encodeURIComponent(selectedCity.city_name || (selectedCity as any).target_city || '')}?state=${encodeURIComponent((selectedCity as any).state || (selectedCity as any).target_state || '')}`}
                                    style={{
                                        padding: '10px 20px',
                                        borderRadius: 8,
                                        background: 'white',
                                        color: '#1A1A1A',
                                        fontSize: 14,
                                        fontWeight: 600,
                                        textDecoration: 'none',
                                    }}
                                >
                                    Explore city →
                                </Link>
                                <button
                                    onClick={closeModal}
                                    style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 8,
                                        border: '1px solid rgba(255,255,255,0.2)',
                                        backgroundColor: 'transparent',
                                        cursor: 'pointer',
                                        color: 'rgba(255,255,255,0.5)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div style={{
                            padding: '0 32px',
                            marginBottom: 24
                        }}>
                            <div style={{
                                display: 'flex',
                                background: '#1A1A1A',
                                borderRadius: 12,
                                overflow: 'hidden',
                                border: '1px solid rgba(255,255,255,0.05)'
                            }}>
                                <div style={{ flex: 1, padding: '16px 20px', borderRight: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                                    <div style={{ fontSize: 18, color: 'white', fontWeight: 600 }}>{selectedCity.suitability_score?.toFixed(0) || '0'}%</div>
                                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 4, textTransform: 'uppercase', letterSpacing: 0.5 }}>Match</div>
                                </div>
                                <div style={{ flex: 1, padding: '16px 20px', borderRight: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                                    <div style={{ fontSize: 18, color: 'white', fontWeight: 600 }}>{selectedCity.distance_km ? selectedCity.distance_km.toFixed(0) : (selectedCity as any).api_distance_km ? (selectedCity as any).api_distance_km.toFixed(0) : '320'} km</div>
                                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 4, textTransform: 'uppercase', letterSpacing: 0.5 }}>Distance</div>
                                </div>
                                <div style={{ flex: 1, padding: '16px 20px', borderRight: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                                    <div style={{ fontSize: 18, color: 'white', fontWeight: 600 }}>₹{selectedCity.avg_rent?.toLocaleString() || 'N/A'}</div>
                                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 4, textTransform: 'uppercase', letterSpacing: 0.5 }}>Avg Rent</div>
                                </div>
                                <div style={{ flex: 1, padding: '16px 20px', textAlign: 'center' }}>
                                    <div style={{ fontSize: 18, color: 'white', fontWeight: 600 }}>{(selectedCity as any).crime_rate_score || selectedCity.suitability_score?.toFixed(0) || '0'}/100</div>
                                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 4, textTransform: 'uppercase', letterSpacing: 0.5 }}>Safety</div>
                                </div>
                            </div>
                        </div>

                        <div style={{
                            display: 'flex',
                            borderBottom: '1px solid rgba(255,255,255,0.1)',
                            padding: '0 32px',
                            gap: 50,
                            justifyContent: 'center'
                        }}>
                            {[
                                { id: 'security' as const, label: 'Security' },
                                { id: 'education' as const, label: 'Education' },
                                { id: 'communities' as const, label: 'Communities' },
                                { id: 'connectivity' as const, label: 'Connectivity' },
                                { id: 'hospitals' as const, label: 'Healthcare' },
                                { id: 'geography' as const, label: 'Geography' }
                            ].map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as any)}
                                    style={{
                                        padding: '0 0 16px 0',
                                        border: 'none',
                                        backgroundColor: 'transparent',
                                        cursor: 'pointer',
                                        fontSize: 15,
                                        fontWeight: activeTab === tab.id ? 500 : 400,
                                        color: activeTab === tab.id ? 'white' : 'rgba(255,255,255,0.6)',
                                        borderBottom: activeTab === tab.id ? '2px solid white' : '2px solid transparent',
                                        whiteSpace: 'nowrap',
                                        position: 'relative',
                                        top: 1
                                    }}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        <div className="modal-body" style={{
                            padding: '32px',
                            overflowY: 'auto',
                            flex: 1,
                            scrollbarWidth: 'none'
                        }}>
                            {isLoadingDescription ? (
                                <div style={{
                                    textAlign: 'center',
                                    padding: 60,
                                    color: '#6B5B3A'
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
                                                <h4 style={{ margin: 0, marginBottom: 16, fontSize: 16, color: 'white', fontWeight: 600 }}>
                                                    Security score
                                                </h4>
                                                <ScoreBar
                                                    score={cityDescription.crime_rate.security_score}
                                                    color="#22C55E"
                                                />
                                            </div>
                                            <div style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: 32, fontSize: 15 }}>
                                                {cityDescription.crime_rate.description}
                                            </div>
                                            {renderListSection('KEY FACTORS', cityDescription.crime_rate.key_factors)}

                                            <div style={{ marginTop: 32 }}>
                                                <h5 style={{ margin: 0, marginBottom: 12, fontSize: 13, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: 0.5 }}>
                                                    SOURCES
                                                </h5>
                                                <div style={{
                                                    background: '#1A1A1A',
                                                    padding: '16px',
                                                    borderRadius: 8,
                                                    color: 'rgba(255,255,255,0.7)',
                                                    fontSize: 14
                                                }}>
                                                    {cityDescription.crime_rate.sources[0]}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'education' && (
                                        <div>
                                            <div style={{ marginBottom: 32 }}>
                                                <h4 style={{ margin: 0, marginBottom: 16, fontSize: 16, color: 'white', fontWeight: 600 }}>
                                                    Education score
                                                </h4>
                                                <ScoreBar
                                                    score={cityDescription.education.score}
                                                    color="#3B82F6"
                                                />
                                            </div>
                                            <div style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: 32, fontSize: 15 }}>
                                                {cityDescription.education.description}
                                            </div>
                                            <h5 style={{ margin: 0, marginBottom: 12, fontSize: 13, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: 0.5 }}>
                                                EDUCATION HIGHLIGHTS
                                            </h5>
                                            <ul style={{ margin: 0, paddingLeft: 20, color: 'rgba(255,255,255,0.7)' }}>
                                                {cityDescription.education.highlights.map((item, i) => (
                                                    <li key={i} style={{ marginBottom: 8 }}>{item}</li>
                                                ))}
                                            </ul>
                                            {renderListSection('KEY FACTORS', cityDescription.education.key_factors)}
                                            <div style={{ marginTop: 32 }}>
                                                <h5 style={{ margin: 0, marginBottom: 12, fontSize: 13, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: 0.5 }}>
                                                    SOURCES
                                                </h5>
                                                <div style={{
                                                    background: '#1A1A1A',
                                                    padding: '16px',
                                                    borderRadius: 8,
                                                    color: 'rgba(255,255,255,0.7)',
                                                    fontSize: 14
                                                }}>
                                                    {cityDescription.education.sources.join(', ')}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'communities' && (
                                        <div>
                                            <h4 style={{ margin: 0, marginBottom: 16, fontSize: 16, color: 'white', fontWeight: 600 }}>
                                                Demographics & Communities
                                            </h4>
                                            <div style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: 32, fontSize: 15 }}>
                                                {cityDescription.communities.demographics}
                                            </div>
                                            {cityDescription.communities.description && (
                                                <div style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: 32, fontSize: 15 }}>
                                                    {cityDescription.communities.description}
                                                </div>
                                            )}
                                            <h5 style={{ margin: 0, marginBottom: 12, fontSize: 13, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: 0.5 }}>
                                                COMMUNITY HIGHLIGHTS
                                            </h5>
                                            <ul style={{ margin: 0, paddingLeft: 20, color: 'rgba(255,255,255,0.7)' }}>
                                                {cityDescription.communities.highlights.map((item, i) => (
                                                    <li key={i} style={{ marginBottom: 8, color: 'rgba(255,255,255,0.8)' }}>{item}</li>
                                                ))}
                                            </ul>
                                            {renderListSection('KEY FACTORS', cityDescription.communities.key_factors)}
                                            <div style={{ marginTop: 32 }}>
                                                <h5 style={{ margin: 0, marginBottom: 12, fontSize: 13, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: 0.5 }}>
                                                    SOURCES
                                                </h5>
                                                <div style={{
                                                    background: '#1A1A1A',
                                                    padding: '16px',
                                                    borderRadius: 8,
                                                    color: 'rgba(255,255,255,0.7)',
                                                    fontSize: 14
                                                }}>
                                                    {cityDescription.communities.sources.join(', ')}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'connectivity' && (
                                        <div>
                                            <div className="connectivity-grid" style={{
                                                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 32
                                            }}>
                                                <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems: 'center', padding: 24, textAlign: 'center', background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                    <div style={{ fontSize: 32, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>
                                                        {cityDescription.connectivity.nearest_metro}
                                                    </div>
                                                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: 0.5 }}>
                                                        NEAREST METRO CITY
                                                    </div>
                                                </div>
                                                <div className="card" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems: 'center', padding: 24, textAlign: 'center', background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                    <div style={{ fontSize: 32, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>
                                                        {cityDescription.connectivity.distance_km} km
                                                    </div>
                                                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: 0.5 }}>
                                                        DISTANCE
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: 16, fontSize: 15 }}>
                                                {cityDescription.connectivity.description}
                                            </div>
                                            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15 }}>
                                                <strong style={{ color: 'rgba(255,255,255,0.9)' }}>TRANSPORT OPTIONS:</strong> {cityDescription.connectivity.transport_options}
                                            </div>
                                            {renderListSection('KEY FACTORS', cityDescription.connectivity.key_factors)}
                                            <div style={{ marginTop: 32 }}>
                                                <h5 style={{ margin: 0, marginBottom: 12, fontSize: 13, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: 0.5 }}>
                                                    SOURCES
                                                </h5>
                                                <div style={{
                                                    background: '#1A1A1A',
                                                    padding: '16px',
                                                    borderRadius: 8,
                                                    color: 'rgba(255,255,255,0.7)',
                                                    fontSize: 14
                                                }}>
                                                    {cityDescription.connectivity.sources.join(', ')}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'hospitals' && (
                                        <div>
                                            <div style={{ marginBottom: 32 }}>
                                                <h4 style={{ margin: 0, marginBottom: 16, fontSize: 16, color: 'white', fontWeight: 600 }}>
                                                    Healthcare score
                                                </h4>
                                                <ScoreBar
                                                    score={cityDescription.hospitals.score}
                                                    color="#8B5CF6"
                                                />
                                            </div>
                                            <div style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: 32, fontSize: 15 }}>
                                                {cityDescription.hospitals.description}
                                            </div>
                                            <h5 style={{ margin: 0, marginBottom: 12, fontSize: 13, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: 0.5 }}>
                                                MAJOR HEALTHCARE FACILITIES
                                            </h5>
                                            <ul style={{ margin: 0, paddingLeft: 20, color: 'rgba(255,255,255,0.7)' }}>
                                                {cityDescription.hospitals.facilities.map((item, i) => (
                                                    <li key={i} style={{ marginBottom: 8 }}>{item}</li>
                                                ))}
                                            </ul>
                                            {renderListSection('KEY FACTORS', cityDescription.hospitals.key_factors)}
                                            <div style={{ marginTop: 32 }}>
                                                <h5 style={{ margin: 0, marginBottom: 12, fontSize: 13, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: 0.5 }}>
                                                    SOURCES
                                                </h5>
                                                <div style={{
                                                    background: 'rgb(26, 26, 26)',
                                                    padding: '16px',
                                                    borderRadius: 8,
                                                    color: 'rgba(255,255,255,0.7)',
                                                    fontSize: 14
                                                }}>
                                                    {cityDescription.hospitals.sources.join(', ')}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'geography' && (
                                        <div>
                                            <div className="geography-grid" >
                                                <div className="card" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems: 'center', padding: 16, textAlign: 'center', backgroundColor: 'rgb(26, 26, 26)' }}>
                                                    <div style={{ fontSize: 16, fontWeight: 600, color: '#ffffff' }}>
                                                        {cityDescription.geography.terrain}
                                                    </div>
                                                    <div style={{ fontSize: 11, color: '#8B7355' }}>Terrain</div>
                                                </div>
                                                <div className="card" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems: 'center', padding: 16, textAlign: 'center', backgroundColor: 'rgb(26, 26, 26)' }}>
                                                    <div style={{ fontSize: 16, fontWeight: 600, color: '#ffffff' }}>
                                                        {cityDescription.geography.climate}
                                                    </div>
                                                    <div style={{ fontSize: 11, color: '#8B7355' }}>Climate</div>
                                                </div>
                                                {cityDescription.geography.elevation_m > 0 && (
                                                    <div className="card" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems: 'center', padding: 16, textAlign: 'center', backgroundColor: 'rgb(26, 26, 26)' }}>
                                                        <div style={{ fontSize: 16, fontWeight: 600, color: '#ffffff' }}>
                                                            {cityDescription.geography.elevation_m}m
                                                        </div>
                                                        <div style={{ fontSize: 11, color: '#8B7355' }}>Elevation</div>
                                                    </div>
                                                )}
                                            </div>
                                            <div style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 20 }}>
                                                {cityDescription.geography.description}
                                            </div>
                                            <h5 style={{ margin: 0, marginBottom: 12, fontSize: 13, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: 0.5 }}>
                                                NATURAL FEATURES
                                            </h5>
                                            <ul style={{ margin: 0, paddingLeft: 20, color: 'rgba(255,255,255,0.7)' }}>
                                                {cityDescription.geography.features.map((item, i) => (
                                                    <li key={i} style={{ marginBottom: 8 }}>{item}</li>
                                                ))}
                                            </ul>
                                            {renderListSection('KEY FACTORS', cityDescription.geography.key_factors)}
                                            <div style={{ marginTop: 32 }}>
                                                <h5 style={{ margin: 0, marginBottom: 12, fontSize: 13, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: 0.5 }}>
                                                    SOURCES
                                                </h5>
                                                <div style={{
                                                    background: 'rgb(26, 26, 26)',
                                                    padding: '16px',
                                                    borderRadius: 8,
                                                    color: 'rgba(255,255,255,0.7)',
                                                    fontSize: 14
                                                }}>
                                                    {cityDescription.geography.sources.join(', ')}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </>
                            ) : descriptionError ? (
                                <div style={{ textAlign: 'center', padding: 40 }}>
                                    <div style={{ fontSize: 48, marginBottom: 16 }}>⚠️</div>
                                    <div style={{ color: '#EF4444', fontSize: 16, fontWeight: 600, marginBottom: 8 }}>
                                        Failed to load city information
                                    </div>
                                    <p style={{ color: '#8B7355', fontSize: 14, marginBottom: 20 }}>
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
                                <div style={{ textAlign: 'center', padding: 40, color: '#8B7355' }}>
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

'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { CSSProperties, Dispatch, SetStateAction } from 'react';
import { useEffect, useMemo, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from '../../hooks/useTranslation';
import {
    type CityDescription,
    type CityRecommendation,
    type SavedRecommendation,
    deleteSavedRecommendation,
    fetchCityDescription,
    fetchSavedRecommendations,
    saveRecommendation,
} from '../../lib/api';
import { clearAssessmentResults, resetPlanningSession } from '../../lib/session';

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

type SelectedCity = Partial<CityRecommendation & SavedRecommendation> & {
    city_name?: string;
    target_city?: string;
    state?: string | null;
    target_state?: string | null;
};

const modalTabs = [
    { id: 'security', key: 'city_detail_modal.tabs.security' },
    { id: 'education', key: 'city_detail_modal.tabs.education' },
    { id: 'communities', key: 'city_detail_modal.tabs.communities' },
    { id: 'connectivity', key: 'city_detail_modal.tabs.connectivity' },
    { id: 'hospitals', key: 'city_detail_modal.tabs.healthcare' },
    { id: 'geography', key: 'city_detail_modal.tabs.geography' },
] as const;

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
    if (!isResultsData(value)) {
        return null;
    }

    const userProfile = value.userProfile ?? { name: '', age: 0, profession: '' };
    const profession = userProfile.profession
        || (Array.isArray(userProfile.professions) ? userProfile.professions[0] : '')
        || '';

    return {
        ...value,
        userProfile: {
            ...userProfile,
            profession,
        },
    };
}

function ScoreBar({ score, maxScore = 10, color }: { score: number; maxScore?: number; color: string }) {
    const percentage = Math.max(0, Math.min(100, (score / maxScore) * 100));

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%' }}>
            <div style={{ flex: 1, height: 8, backgroundColor: 'rgba(92,74,42,0.1)', borderRadius: 9999, overflow: 'hidden' }}>
                <div
                    style={{
                        width: `${percentage}%`,
                        height: '100%',
                        backgroundColor: color,
                        borderRadius: 9999,
                        transition: 'width 0.3s ease',
                    }}
                />
            </div>
            <span style={{ fontWeight: 600, color, minWidth: 40 }}>{score}/{maxScore}</span>
        </div>
    );
}

export default function ResultsPage() {
    const router = useRouter();
    const { user, token, loading: authLoading } = useAuth();
    const { t } = useTranslation();
    const { language } = useLanguage();
    const [data, setData] = useState<ResultsData | null>(null);
    const [selectedCity, setSelectedCity] = useState<SelectedCity | null>(null);
    const [cityDescription, setCityDescription] = useState<CityDescription | null>(null);
    const [isLoadingDescription, setIsLoadingDescription] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);
    const [activeTab, setActiveTab] = useState<(typeof modalTabs)[number]['id']>('security');
    const [savingCity, setSavingCity] = useState<string | null>(null);
    const [savedCities, setSavedCities] = useState<Set<string>>(new Set());
    const [savedRecommendations, setSavedRecommendations] = useState<SavedRecommendation[]>([]);

    useEffect(() => {
        if (!authLoading && !user) {
            router.push('/auth');
        }
    }, [authLoading, router, user]);

    useEffect(() => {
        if (!user || !token) return;

        const loadSaved = async () => {
            try {
                const saved = await fetchSavedRecommendations(user.uid, token);
                setSavedRecommendations(saved);
                setSavedCities(new Set(saved.map((item) => item.target_city)));
            } catch (error) {
                console.error('Error loading saved recommendations:', error);
            }
        };

        loadSaved();
    }, [token, user]);

    useEffect(() => {
        if (authLoading || !user) return;

        const raw = sessionStorage.getItem('airsafe_results');
        if (!raw) {
            router.push('/wizard');
            return;
        }

        try {
            const parsed = JSON.parse(raw);
            const normalized = normalizeResultsData(parsed);
            if (!normalized) {
                clearAssessmentResults();
                router.push('/wizard');
                return;
            }
            setData(normalized);
        } catch (error) {
            console.error('Failed to parse stored results:', error);
            clearAssessmentResults();
            router.push('/wizard');
        }
    }, [authLoading, router, user]);

    const readinessSummary = useMemo(() => (
        t('report.readiness_desc', { count: data?.recommendations.length ?? 0 })
    ), [data?.recommendations.length, t]);

    const handleNewAssessment = () => {
        resetPlanningSession();
    };

    const handleCityClick = async (recommendation: SelectedCity) => {
        setSelectedCity(recommendation);
        setCityDescription(null);
        setDescriptionError(false);
        setIsLoadingDescription(true);
        setActiveTab('security');

        try {
            const description = await fetchCityDescription(
                getSelectedCityName(recommendation),
                (data?.familyHealth.children ?? 0) > 0,
                (data?.familyHealth.elderly ?? 0) > 0,
                language
            );
            setCityDescription(description);
        } catch (error) {
            console.error('Failed to load city description:', error);
            setDescriptionError(true);
        } finally {
            setIsLoadingDescription(false);
        }
    };

    const handleSaveRecommendation = async (recommendation: CityRecommendation) => {
        if (!user || !token) return;

        setSavingCity(recommendation.city_name);
        try {
            const inserted = await saveRecommendation({
                user_id: user.uid,
                target_city: recommendation.city_name,
                target_state: recommendation.state,
                current_aqi: recommendation.current_aqi,
                target_aqi: recommendation.target_aqi,
                aqi_improvement_percent: recommendation.aqi_improvement_percent,
                suitability_score: recommendation.suitability_score,
                avg_rent: recommendation.avg_rent,
                distance_km: recommendation.distance_km,
                healthcare_score: recommendation.healthcare_score,
                respiratory_risk_reduction: recommendation.respiratory_risk_reduction,
                life_expectancy_gain_years: recommendation.life_expectancy_gain_years,
                job_match_score: recommendation.job_match_score,
                aqi_trend: recommendation.aqi_trend,
                advisory_text: data?.advisory || null,
            }, token);

            if (inserted) {
                setSavedCities((previous) => new Set(previous).add(recommendation.city_name));
                setSavedRecommendations((previous) => [inserted, ...previous]);
                return;
            }

            alert(t('report.save_errors.database'));
        } catch (error: unknown) {
            const message = error instanceof Error ? error.message : 'Unknown error';
            console.error('Error saving recommendation:', error);
            alert(t('report.save_errors.unexpected', { message }));
        } finally {
            setSavingCity(null);
        }
    };

    const handleRemoveSaved = async (savedId: string, targetCity: string) => {
        if (!user || !token) return;

        try {
            const success = await deleteSavedRecommendation(savedId, user.uid, token);
            if (!success) {
                return;
            }

            setSavedRecommendations((previous) => previous.filter((item) => item.id !== savedId));
            setSavedCities((previous) => {
                const next = new Set(previous);
                next.delete(targetCity);
                return next;
            });
        } catch (error) {
            console.error('Error removing saved recommendation:', error);
        }
    };

    if (authLoading || !data) {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F5EFE0' }}>
                <div className="loading-pulse" style={{ color: '#4A3B2A' }}>{t('report.loading_results')}</div>
            </div>
        );
    }

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#FDFBF7', color: '#4A3B2A', fontFamily: 'var(--app-font-sans)' }}>
            <header style={{ padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, color: '#4A3B2A', fontWeight: 600 }}>
                    <img src="/Logo.png" alt="AirSafe Move logo" style={{ height: 32, width: 'auto', objectFit: 'contain' }} />
                </Link>
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                    <Link
                        href="/wizard"
                        onClick={handleNewAssessment}
                        style={{ textDecoration: 'none', padding: '10px 20px', border: '1px solid rgba(139,115,85,0.2)', borderRadius: 8, color: '#4A3B2A', fontSize: 14, fontWeight: 500 }}
                    >
                        {t('report.new_assessment')}
                    </Link>
                    <button
                        type="button"
                        onClick={() => window.print()}
                        style={{ background: 'transparent', padding: '10px 20px', border: '1px solid rgba(139,115,85,0.2)', borderRadius: 8, color: '#4A3B2A', fontSize: 14, fontWeight: 500, cursor: 'pointer' }}
                    >
                        {t('report.print_report')}
                    </button>
                </div>
            </header>

            <main style={{ maxWidth: 960, margin: '0 auto', padding: '40px 20px 100px' }}>
                <div style={{ textAlign: 'center', marginBottom: 40 }}>
                    <div style={{ display: 'inline-block', background: '#F2EDE4', color: '#8B7355', padding: '4px 12px', borderRadius: 16, fontSize: 12, fontWeight: 600, letterSpacing: 0.5, marginBottom: 16 }}>
                        {t('report.ai_complete_badge')}
                    </div>
                    <h1 style={{ fontSize: 36, fontWeight: 700, color: '#4A3B2A', margin: '0 0 12px 0', fontFamily: 'var(--app-font-serif)' }}>
                        {t('report.title')}
                    </h1>
                    <p style={{ color: '#8B7355', margin: 0, fontSize: 15 }}>
                        {t('report.subtitle', { name: data.userName })}
                    </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 40, marginBottom: 40, flexWrap: 'wrap' }}>
                    <div style={{ position: 'relative', width: 120, height: 120 }}>
                        <svg width="120" height="120" viewBox="0 0 120 120">
                            <circle cx="60" cy="60" r="54" fill="none" stroke="#EAE6DF" strokeWidth="8" />
                            <circle
                                cx="60"
                                cy="60"
                                r="54"
                                fill="none"
                                stroke="#8B7355"
                                strokeWidth="8"
                                strokeDasharray={`${(data.readiness_score / 100) * 339} 339`}
                                strokeLinecap="round"
                                transform="rotate(-90 60 60)"
                            />
                        </svg>
                        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ fontSize: 28, fontWeight: 700, color: '#4A3B2A' }}>{data.readiness_score.toFixed(0)}%</span>
                            <span style={{ fontSize: 11, color: '#8B7355', textTransform: 'uppercase', letterSpacing: 0.5 }}>{t('report.readiness_short')}</span>
                        </div>
                    </div>
                    <div style={{ maxWidth: 360, color: '#4A3B2A', fontSize: 14, lineHeight: 1.6 }}>
                        <strong>{t('report.readiness_score')}</strong><br />
                        {readinessSummary}
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', border: '1px solid #EAE6DF', borderRadius: 16, overflow: 'hidden', marginBottom: 60, background: 'white' }}>
                    <SummaryCard
                        label={t('report.profile_label')}
                        primary={`${data.userProfile.name}, ${t('report.profile_years', { age: data.userProfile.age })}`}
                        secondary={data.userProfile.profession}
                    />
                    <SummaryCard
                        label={t('report.family_label')}
                        primary={data.familyHealth.familyType}
                        secondary={t('report.family_children', { members: data.familyHealth.totalMembers, children: data.familyHealth.children })}
                    />
                    <SummaryCard
                        label={t('report.constraints_label')}
                        primary={t('report.constraints_distance', { distance: data.location.maxDistance })}
                        secondary={t('report.constraints_budget', { budget: Number.parseInt(data.location.monthlyBudget || '0', 10).toLocaleString() })}
                        borderless
                    />
                </div>

                <SectionHeader title={t('report.top_cities')} caption={t('report.ranked_by')} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 60 }}>
                    {data.recommendations.map((recommendation, index) => {
                        const isSaved = savedCities.has(recommendation.city_name);
                        const isSaving = savingCity === recommendation.city_name;

                        return (
                            <div
                                key={recommendation.city_name}
                                onClick={() => handleCityClick(recommendation)}
                                style={{ background: 'white', border: '1px solid #EAE6DF', borderRadius: 16, padding: 24, cursor: 'pointer', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}
                            >
                                <div style={{ display: 'flex', gap: 16, marginBottom: 24, alignItems: 'flex-start' }}>
                                    <div style={{ width: 32, height: 32, borderRadius: 8, background: '#8B7355', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 14 }}>
                                        #{index + 1}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                                            <h3 style={{ margin: 0, fontSize: 18, color: '#4A3B2A', fontWeight: 600, fontFamily: 'var(--app-font-serif)' }}>{recommendation.city_name}</h3>
                                            {index === 0 && (
                                                <span style={{ background: '#F2EDE4', color: '#8B7355', padding: '4px 8px', borderRadius: 12, fontSize: 11, fontWeight: 600 }}>
                                                    {t('report.ai_recommended')}
                                                </span>
                                            )}
                                        </div>
                                        <div style={{ fontSize: 13, color: '#8B7355', marginTop: 4 }}>
                                            {t('report.state_air_quality', { state: recommendation.state, category: getAqiCategoryLabel(recommendation.target_aqi, t) })}
                                        </div>
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 12, marginBottom: 16, borderBottom: '1px solid #F4EFE8', paddingBottom: 16 }}>
                                    <MetricStat value={`${recommendation.aqi_improvement_percent.toFixed(0)}%`} label={t('report.card.aqi_improve')} />
                                    <MetricStat value={`${recommendation.distance_km.toFixed(0)} ${t('common.km')}`} label={t('report.card.distance')} />
                                    <MetricStat value={`${t('common.inr_symbol')}${recommendation.avg_rent.toLocaleString()}`} label={t('report.card.avg_rent')} />
                                    <MetricStat value={recommendation.suitability_score.toFixed(0)} label={t('report.card.score')} />
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12, marginBottom: 24 }}>
                                    <SoftMetric value={`${recommendation.respiratory_risk_reduction.toFixed(1)}%`} label={t('report.card.respiratory_risk')} />
                                    <SoftMetric value={`+${recommendation.life_expectancy_gain_years} ${t('report.years_short')}`} label={t('report.card.life_expectancy')} />
                                    <SoftMetric value={`${recommendation.job_match_score}/100`} label={t('report.card.job_match')} />
                                    <SoftMetric value={`${recommendation.healthcare_score}/100`} label={t('report.card.healthcare')} />
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, flexWrap: 'wrap' }}>
                                    <button
                                        type="button"
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            handleCityClick(recommendation);
                                        }}
                                        style={secondaryButtonStyle}
                                    >
                                        {t('report.explore_details')}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            handleSaveRecommendation(recommendation);
                                        }}
                                        disabled={isSaving || isSaved}
                                        style={{
                                            ...secondaryButtonStyle,
                                            background: isSaved ? '#F2EDE4' : 'transparent',
                                            borderColor: isSaved ? '#F2EDE4' : '#EAE6DF',
                                            color: isSaved ? '#8B7355' : '#4A3B2A',
                                            cursor: isSaved ? 'default' : 'pointer',
                                            opacity: isSaving ? 0.7 : 1,
                                        }}
                                    >
                                        {isSaved ? t('report.saved_to_profile') : isSaving ? t('report.saving_to_profile') : t('report.save_to_profile')}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <SectionHeader title={t('report.saved_recommendations')} caption={t('report.saved_recommendations_caption')} />
                {savedRecommendations.length === 0 ? (
                    <div style={{ background: 'white', border: '1px dashed #EAE6DF', borderRadius: 16, padding: '40px 24px', textAlign: 'center', color: '#8B7355', fontSize: 14 }}>
                        {t('report.no_saved_recommendations')}
                    </div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
                        {savedRecommendations.map((saved) => (
                            <div
                                key={saved.id}
                                onClick={() => handleCityClick(saved)}
                                style={{ background: 'white', border: '1px solid #EAE6DF', borderRadius: 16, padding: 20, boxShadow: '0 4px 12px rgba(0,0,0,0.02)', cursor: 'pointer' }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                                    <div>
                                        <h3 style={{ margin: 0, fontSize: 16, color: '#4A3B2A', fontWeight: 600, fontFamily: 'var(--app-font-serif)' }}>{saved.target_city}</h3>
                                        <div style={{ fontSize: 12, color: '#8B7355', marginTop: 2 }}>{saved.target_state}</div>
                                    </div>
                                    <div style={{ background: '#F2EDE4', color: '#8B7355', padding: '4px 8px', borderRadius: 8, fontSize: 12, fontWeight: 600 }}>
                                        {saved.suitability_score?.toFixed(0) || '0'}%
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                                    <button
                                        type="button"
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            handleCityClick(saved);
                                        }}
                                        style={secondaryButtonStyle}
                                    >
                                        {t('city_detail_modal.explore_city')}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            handleRemoveSaved(saved.id, saved.target_city);
                                        }}
                                        style={{ ...secondaryButtonStyle, borderColor: '#FEE2E2', color: '#EF4444' }}
                                    >
                                        {t('report.remove_saved')}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>

            {selectedCity && (
                <div
                    className="modal-overlay"
                    onClick={(event) => event.target === event.currentTarget && closeModal(setSelectedCity, setCityDescription)}
                    style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.75)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, padding: 24 }}
                >
                    <div style={{ background: '#2C2C2C', borderRadius: 16, width: '100%', maxWidth: 800, maxHeight: '90vh', display: 'flex', flexDirection: 'column', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 24px 48px rgba(0,0,0,0.5)' }}>
                        <div style={{ padding: '32px 32px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                                <div style={{ width: 56, height: 56, borderRadius: 12, background: getAqiColor(selectedCity.target_aqi || 0), color: '#1A1A1A', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
                                    <span style={{ fontSize: 20, lineHeight: 1 }}>{selectedCity.target_aqi || 0}</span>
                                    <span style={{ fontSize: 10, opacity: 0.8, marginTop: 2 }}>{t('report.aqi_short')}</span>
                                </div>
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4, flexWrap: 'wrap' }}>
                                        <h3 style={{ margin: 0, fontSize: 28, fontWeight: 600, color: 'white', lineHeight: 1, fontFamily: 'var(--app-font-serif)' }}>
                                            {getSelectedCityName(selectedCity)}
                                        </h3>
                                        <span style={{ padding: '4px 10px', borderRadius: 6, background: 'rgba(255,255,255,0.1)', color: '#22C55E', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>
                                            {getAqiCategoryLabel(selectedCity.target_aqi || 0, t)}
                                        </span>
                                    </div>
                                    <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)', fontSize: 15 }}>
                                        {getSelectedCityState(selectedCity)}
                                    </p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                <Link
                                    href={`/city/${encodeURIComponent(getSelectedCityName(selectedCity))}?state=${encodeURIComponent(getSelectedCityState(selectedCity))}`}
                                    style={{ padding: '10px 20px', borderRadius: 8, background: 'white', color: '#1A1A1A', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}
                                >
                                    {t('city_detail_modal.explore_city')}
                                </Link>
                                <button
                                    type="button"
                                    onClick={() => closeModal(setSelectedCity, setCityDescription)}
                                    style={{ width: 40, height: 40, borderRadius: 8, border: '1px solid rgba(255,255,255,0.2)', backgroundColor: 'transparent', cursor: 'pointer', color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                    aria-label={t('city_detail_modal.close')}
                                >
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div style={{ padding: '0 32px', marginBottom: 24 }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', background: '#1A1A1A', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <ModalMetric value={`${selectedCity.suitability_score?.toFixed(0) || '0'}%`} label={t('city_detail_modal.match')} />
                                <ModalMetric value={`${Math.round(selectedCity.distance_km || 0)} ${t('common.km')}`} label={t('city_detail_modal.distance')} />
                                <ModalMetric value={selectedCity.avg_rent ? `${t('common.inr_symbol')}${selectedCity.avg_rent.toLocaleString()}` : t('report.not_available')} label={t('city_detail_modal.avg_rent')} />
                                <ModalMetric value={`${cityDescription?.crime_rate.security_score ?? Math.round(selectedCity.suitability_score || 0)}/100`} label={t('city_detail_modal.safety')} />
                            </div>
                        </div>

                        <div style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '0 32px', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
                            {modalTabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    type="button"
                                    onClick={() => setActiveTab(tab.id)}
                                    style={{ padding: '0 0 16px 0', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', fontSize: 15, fontWeight: activeTab === tab.id ? 500 : 400, color: activeTab === tab.id ? 'white' : 'rgba(255,255,255,0.6)', borderBottom: activeTab === tab.id ? '2px solid white' : '2px solid transparent', whiteSpace: 'nowrap', position: 'relative', top: 1 }}
                                >
                                    {t(tab.key)}
                                </button>
                            ))}
                        </div>

                        <div style={{ padding: '32px', overflowY: 'auto', flex: 1, scrollbarWidth: 'none' }}>
                            {isLoadingDescription ? (
                                <div style={{ textAlign: 'center', padding: 60, color: '#D6C4AC' }}>
                                    <div className="loading-pulse" style={{ fontSize: 18 }}>
                                        {t('city_detail_modal.loading_title', { city: getSelectedCityName(selectedCity) })}
                                    </div>
                                    <p style={{ marginTop: 12, fontSize: 14 }}>
                                        {t('city_detail_modal.loading_description')}
                                    </p>
                                </div>
                            ) : cityDescription ? (
                                <>
                                    {activeTab === 'security' && (
                                        <div>
                                            <h4 style={modalHeadingStyle}>{t('city_detail_modal.security_score')}</h4>
                                            <div style={{ marginBottom: 24 }}>
                                                <ScoreBar score={cityDescription.crime_rate.security_score} color="#22C55E" />
                                            </div>
                                            <p style={modalTextStyle}>{cityDescription.crime_rate.description}</p>
                                            {renderListSection(t('city_detail_modal.key_factors'), cityDescription.crime_rate.key_factors)}
                                            {renderSourcesSection(t('city_detail_modal.sources'), cityDescription.crime_rate.sources)}
                                        </div>
                                    )}

                                    {activeTab === 'education' && (
                                        <div>
                                            <h4 style={modalHeadingStyle}>{t('city_detail_modal.education_score')}</h4>
                                            <div style={{ marginBottom: 24 }}>
                                                <ScoreBar score={cityDescription.education.score} color="#3B82F6" />
                                            </div>
                                            <p style={modalTextStyle}>{cityDescription.education.description}</p>
                                            {renderListSection(t('city_detail_modal.education_highlights'), cityDescription.education.highlights)}
                                            {renderListSection(t('city_detail_modal.key_factors'), cityDescription.education.key_factors)}
                                            {renderSourcesSection(t('city_detail_modal.sources'), cityDescription.education.sources)}
                                        </div>
                                    )}

                                    {activeTab === 'communities' && (
                                        <div>
                                            <h4 style={modalHeadingStyle}>{t('city_detail_modal.demographics_communities')}</h4>
                                            <p style={modalTextStyle}>{cityDescription.communities.demographics}</p>
                                            {cityDescription.communities.description && <p style={modalTextStyle}>{cityDescription.communities.description}</p>}
                                            {renderListSection(t('city_detail_modal.community_highlights'), cityDescription.communities.highlights)}
                                            {renderListSection(t('city_detail_modal.key_factors'), cityDescription.communities.key_factors)}
                                            {renderSourcesSection(t('city_detail_modal.sources'), cityDescription.communities.sources)}
                                        </div>
                                    )}

                                    {activeTab === 'connectivity' && (
                                        <div>
                                            <div className="connectivity-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 16, marginBottom: 24 }}>
                                                <FeatureCard value={cityDescription.connectivity.nearest_metro} label={t('city_detail_modal.nearest_metro_city')} />
                                                <FeatureCard value={`${cityDescription.connectivity.distance_km} ${t('common.km')}`} label={t('city_detail_modal.distance')} />
                                            </div>
                                            <p style={modalTextStyle}>{cityDescription.connectivity.description}</p>
                                            <p style={{ ...modalTextStyle, color: 'rgba(255,255,255,0.68)' }}>
                                                <strong style={{ color: 'rgba(255,255,255,0.9)' }}>{t('city_detail_modal.transport_options')}:</strong> {cityDescription.connectivity.transport_options}
                                            </p>
                                            {renderListSection(t('city_detail_modal.key_factors'), cityDescription.connectivity.key_factors)}
                                            {renderSourcesSection(t('city_detail_modal.sources'), cityDescription.connectivity.sources)}
                                        </div>
                                    )}

                                    {activeTab === 'hospitals' && (
                                        <div>
                                            <h4 style={modalHeadingStyle}>{t('city_detail_modal.tabs.healthcare')}</h4>
                                            <div style={{ marginBottom: 24 }}>
                                                <ScoreBar score={cityDescription.hospitals.score} color="#8B5CF6" />
                                            </div>
                                            <p style={modalTextStyle}>{cityDescription.hospitals.description}</p>
                                            {renderListSection(t('city_detail_modal.major_healthcare_facilities'), cityDescription.hospitals.facilities)}
                                            {renderListSection(t('city_detail_modal.key_factors'), cityDescription.hospitals.key_factors)}
                                            {renderSourcesSection(t('city_detail_modal.sources'), cityDescription.hospitals.sources)}
                                        </div>
                                    )}

                                    {activeTab === 'geography' && (
                                        <div>
                                            <div className="geography-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 16, marginBottom: 24 }}>
                                                <FeatureCard value={cityDescription.geography.terrain} label={t('city_detail_modal.terrain')} />
                                                <FeatureCard value={cityDescription.geography.climate} label={t('city_detail_modal.climate')} />
                                                {cityDescription.geography.elevation_m > 0 && (
                                                    <FeatureCard value={`${cityDescription.geography.elevation_m}m`} label={t('city_detail_modal.elevation')} />
                                                )}
                                            </div>
                                            <p style={modalTextStyle}>{cityDescription.geography.description}</p>
                                            {renderListSection(t('city_detail_modal.natural_features'), cityDescription.geography.features)}
                                            {renderListSection(t('city_detail_modal.key_factors'), cityDescription.geography.key_factors)}
                                            {renderSourcesSection(t('city_detail_modal.sources'), cityDescription.geography.sources)}
                                        </div>
                                    )}
                                </>
                            ) : descriptionError ? (
                                <div style={{ textAlign: 'center', padding: 40 }}>
                                    <div style={{ color: '#EF4444', fontSize: 16, fontWeight: 600, marginBottom: 8 }}>
                                        {t('report.save_errors.load_failed')}
                                    </div>
                                    <p style={{ color: '#C8B8A3', fontSize: 14, marginBottom: 20 }}>
                                        {t('report.save_errors.service_unavailable')}
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => selectedCity && handleCityClick(selectedCity)}
                                        className="btn-primary"
                                        style={{ padding: '10px 24px', fontSize: 14 }}
                                    >
                                        {t('report.save_errors.retry')}
                                    </button>
                                </div>
                            ) : (
                                <div style={{ textAlign: 'center', padding: 40, color: '#C8B8A3' }}>
                                    {t('report.save_errors.select_tab')}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function getAqiColor(aqi: number): string {
    if (aqi <= 50) return '#22C55E';
    if (aqi <= 100) return '#EAB308';
    if (aqi <= 150) return '#F97316';
    return '#EF4444';
}

function getAqiCategoryLabel(aqi: number, t: (key: string) => string): string {
    if (aqi <= 50) return t('report.aqi_categories.good');
    if (aqi <= 100) return t('report.aqi_categories.moderate');
    if (aqi <= 150) return t('report.aqi_categories.unhealthy_sensitive');
    if (aqi <= 200) return t('report.aqi_categories.unhealthy');
    if (aqi <= 300) return t('report.aqi_categories.very_unhealthy');
    return t('report.aqi_categories.hazardous');
}

function getSelectedCityName(city: SelectedCity): string {
    return city.city_name || city.target_city || '';
}

function getSelectedCityState(city: SelectedCity): string {
    return city.state || city.target_state || '';
}

function closeModal(
    setSelectedCity: Dispatch<SetStateAction<SelectedCity | null>>,
    setCityDescription: Dispatch<SetStateAction<CityDescription | null>>
) {
    setSelectedCity(null);
    setCityDescription(null);
}

function SectionHeader({ title, caption }: { title: string; caption: string }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 20, gap: 12, flexWrap: 'wrap' }}>
            <h2 style={{ fontSize: 20, fontWeight: 600, color: '#4A3B2A', margin: 0, fontFamily: 'var(--app-font-serif)' }}>{title}</h2>
            <span style={{ fontSize: 13, color: '#8B7355' }}>{caption}</span>
        </div>
    );
}

function SummaryCard({ label, primary, secondary, borderless = false }: { label: string; primary: string; secondary: string; borderless?: boolean }) {
    return (
        <div style={{ padding: '24px 20px', textAlign: 'center', borderRight: borderless ? 'none' : '1px solid #EAE6DF' }}>
            <div style={{ fontSize: 11, color: '#8B7355', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>{label}</div>
            <div style={{ fontSize: 14, color: '#4A3B2A', fontWeight: 500 }}>{primary}</div>
            <div style={{ fontSize: 13, color: '#8B7355', marginTop: 4 }}>{secondary}</div>
        </div>
    );
}

function MetricStat({ value, label }: { value: string; label: string }) {
    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 16, color: '#4A3B2A', fontWeight: 600 }}>{value}</div>
            <div style={{ fontSize: 12, color: '#8B7355', marginTop: 4 }}>{label}</div>
        </div>
    );
}

function SoftMetric({ value, label }: { value: string; label: string }) {
    return (
        <div style={{ background: '#FDFBF7', padding: '16px 12px', borderRadius: 8, textAlign: 'left' }}>
            <div style={{ fontSize: 15, color: '#4A3B2A', fontWeight: 600, marginBottom: 4 }}>{value}</div>
            <div style={{ fontSize: 11, color: '#8B7355' }}>{label}</div>
        </div>
    );
}

function ModalMetric({ value, label }: { value: string; label: string }) {
    return (
        <div style={{ padding: '16px 20px', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ fontSize: 18, color: 'white', fontWeight: 600 }}>{value}</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 4, textTransform: 'uppercase', letterSpacing: 0.5 }}>{label}</div>
        </div>
    );
}

function FeatureCard({ value, label }: { value: string; label: string }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 16, textAlign: 'center', backgroundColor: '#1A1A1A', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 12 }}>
            <div style={{ fontSize: 18, fontWeight: 600, color: '#ffffff', marginBottom: 6 }}>{value}</div>
            <div style={{ fontSize: 11, color: '#8B7355', textTransform: 'uppercase', letterSpacing: 0.5 }}>{label}</div>
        </div>
    );
}

function renderListSection(title: string, items?: string[]) {
    if (!items || items.length === 0) {
        return null;
    }

    return (
        <div style={{ marginTop: 28 }}>
            <h5 style={{ margin: 0, marginBottom: 12, fontSize: 13, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: 0.5 }}>
                {title}
            </h5>
            <ul style={{ margin: 0, paddingLeft: 20, color: 'rgba(255,255,255,0.82)', fontSize: 15, lineHeight: 1.6 }}>
                {items.map((item, index) => (
                    <li key={`${title}-${index}`} style={{ marginBottom: 10 }}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

function renderSourcesSection(title: string, items?: string[]) {
    if (!items || items.length === 0) {
        return null;
    }

    return (
        <div style={{ marginTop: 28 }}>
            <h5 style={{ margin: 0, marginBottom: 12, fontSize: 13, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: 0.5 }}>
                {title}
            </h5>
            <div style={{ background: '#1A1A1A', padding: 16, borderRadius: 8, color: 'rgba(255,255,255,0.7)', fontSize: 14 }}>
                {items.join(', ')}
            </div>
        </div>
    );
}

const secondaryButtonStyle: CSSProperties = {
    padding: '8px 24px',
    background: 'transparent',
    border: '1px solid #EAE6DF',
    borderRadius: 8,
    color: '#4A3B2A',
    fontSize: 13,
    fontWeight: 500,
    cursor: 'pointer',
};

const modalHeadingStyle: CSSProperties = {
    margin: '0 0 16px 0',
    fontSize: 16,
    color: 'white',
    fontWeight: 600,
};

const modalTextStyle: CSSProperties = {
    color: 'rgba(255,255,255,0.82)',
    lineHeight: 1.6,
    marginBottom: 20,
    fontSize: 15,
};

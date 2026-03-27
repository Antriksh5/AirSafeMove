'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import { useTranslation } from '../hooks/useTranslation';
import { deleteSavedRecommendation, fetchSavedRecommendations, type SavedRecommendation } from '../lib/api';
import { storeDirectExploreSession } from '../lib/session';

export default function HowItWorks() {
    const router = useRouter();
    const { user, token, profile } = useAuth();
    const { t } = useTranslation();
    const steps = [
        { number: '01', icon: '👤', title: t('marketing.steps.build_profile_title'), description: t('marketing.steps.build_profile_desc') },
        { number: '02', icon: '📋', title: t('marketing.steps.set_preferences_title'), description: t('marketing.steps.set_preferences_desc') },
        { number: '03', icon: '✨', title: t('marketing.steps.ai_analyses_title'), description: t('marketing.steps.ai_analyses_desc') },
        { number: '04', icon: '📊', title: t('marketing.steps.get_report_title'), description: t('marketing.steps.get_report_desc') },
    ];
    const features = [
        { icon: '📊', title: t('marketing.feature_cards.air_quality_title'), description: t('marketing.feature_cards.air_quality_desc') },
        { icon: '🏘️', title: t('marketing.feature_cards.housing_title'), description: t('marketing.feature_cards.housing_desc') },
        { icon: '💼', title: t('marketing.feature_cards.career_title'), description: t('marketing.feature_cards.career_desc') },
        { icon: '🔍', title: t('marketing.feature_cards.distance_title'), description: t('marketing.feature_cards.distance_desc') },
        { icon: '🏫', title: t('marketing.feature_cards.schools_title'), description: t('marketing.feature_cards.schools_desc') },
        { icon: '🌏', title: t('marketing.feature_cards.advice_title'), description: t('marketing.feature_cards.advice_desc') },
    ];
    const stepSectionRef = useRef<HTMLElement>(null);
    const featureSectionRef = useRef<HTMLElement>(null);
    const ctaSectionRef = useRef<HTMLElement>(null);
    const [isStepsVisible, setIsStepsVisible] = useState(false);
    const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);
    const [isCtaVisible, setIsCtaVisible] = useState(false);
    const [destinationCity, setDestinationCity] = useState('');
    const [profession, setProfession] = useState(profile?.profession || '');
    const [savedRecommendations, setSavedRecommendations] = useState<SavedRecommendation[]>([]);
    const [savedLoading, setSavedLoading] = useState(false);
    const [removingId, setRemovingId] = useState<string | null>(null);
    const [formError, setFormError] = useState('');

    useEffect(() => {
        if (profile?.profession) {
            setProfession(profile.profession);
        }
    }, [profile?.profession]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === stepSectionRef.current) setIsStepsVisible(true);
                        if (entry.target === featureSectionRef.current) setIsFeaturesVisible(true);
                        if (entry.target === ctaSectionRef.current) setIsCtaVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );
        if (stepSectionRef.current) observer.observe(stepSectionRef.current);
        if (featureSectionRef.current) observer.observe(featureSectionRef.current);
        if (ctaSectionRef.current) observer.observe(ctaSectionRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!user || !token) {
            setSavedRecommendations([]);
            return;
        }

        const loadSaved = async () => {
            setSavedLoading(true);
            try {
                const saved = await fetchSavedRecommendations(user.uid, token);
                setSavedRecommendations(saved);
            } finally {
                setSavedLoading(false);
            }
        };

        loadSaved();
    }, [token, user]);

    const handleExploreCity = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const trimmedCity = destinationCity.trim();
        const trimmedProfession = profession.trim();

        if (!trimmedCity || !trimmedProfession) {
            setFormError(t('marketing.cta_validation'));
            return;
        }

        setFormError('');

        if (!user) {
            router.push('/auth');
            return;
        }

        storeDirectExploreSession({
            profession: trimmedProfession,
            professions: [trimmedProfession],
            children: profile?.children,
            elderly: profile?.elderly,
        });
        router.push(`/city/${encodeURIComponent(trimmedCity)}`);
    };

    const handleRemoveSaved = async (savedId: string, targetCity: string) => {
        if (!user || !token) return;

        setRemovingId(savedId);
        try {
            const success = await deleteSavedRecommendation(savedId, user.uid, token);
            if (!success) return;

            setSavedRecommendations((previous) => previous.filter((item) => item.id !== savedId));
        } catch (error) {
            console.error(`Failed to remove saved recommendation for ${targetCity}:`, error);
        } finally {
            setRemovingId(null);
        }
    };

    return (
        <>
            <style>{`
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(32px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .step-card-hover:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(92,74,42,0.12); }
                .feature-card-warm:hover { transform: translateY(-4px); }
                .cta-input:focus { outline: none; border-color: #5C4A2A; box-shadow: 0 0 0 3px rgba(92,74,42,0.15); }
                .saved-card:hover { transform: translateY(-4px); box-shadow: 0 16px 36px rgba(92,74,42,0.12); }
                @media (max-width: 980px) {
                    .marketing-steps-grid { grid-template-columns: repeat(2, 1fr) !important; }
                    .marketing-features-grid { grid-template-columns: 1fr 1fr !important; }
                    .marketing-cta-grid { grid-template-columns: 1fr !important; }
                }
                @media (max-width: 640px) {
                    .marketing-steps-grid { grid-template-columns: 1fr !important; }
                    .marketing-features-grid { grid-template-columns: 1fr !important; }
                    .marketing-shell { margin: 0 !important; }
                    .marketing-cta-shell { padding: 32px 24px !important; }
                    .marketing-saved-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>

            <section
                id="how-it-works"
                ref={stepSectionRef}
                style={{ background: '#FDFAF4', padding: '100px 48px' }}
            >
                <div className="marketing-shell" style={{ maxWidth: 1160, margin: '0 55px' }}>
                    <p style={{
                        fontSize: 12, fontWeight: 700, letterSpacing: 2,
                        color: '#8B6914', textTransform: 'uppercase', marginBottom: 16,
                        opacity: isStepsVisible ? 1 : 0,
                        animation: isStepsVisible ? 'fadeUp 0.6s ease forwards' : 'none',
                    }}>
                        {t('marketing.how_it_works_label')}
                    </p>
                    <h2 style={{
                        fontSize: 'clamp(28px, 3.5vw, 44px)',
                        fontWeight: 800, color: '#1A1208', letterSpacing: '-1px',
                        fontFamily: 'var(--app-font-serif)', marginBottom: 16, maxWidth: 560,
                        opacity: isStepsVisible ? 1 : 0,
                        animation: isStepsVisible ? 'fadeUp 0.6s ease 0.1s forwards' : 'none',
                    }}>
                        {t('marketing.how_it_works_title')}
                    </h2>
                    <p style={{
                        fontSize: 16, color: '#6B5B3A', lineHeight: 1.7, marginBottom: 60, maxWidth: 520,
                        opacity: isStepsVisible ? 1 : 0,
                        animation: isStepsVisible ? 'fadeUp 0.6s ease 0.2s forwards' : 'none',
                    }}>
                        {t('marketing.how_it_works_description')}
                    </p>

                    <div
                        className="marketing-steps-grid"
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gap: 24,
                        }}
                    >
                        {steps.map((step, i) => (
                            <div
                                key={i}
                                className="step-card-hover"
                                style={{
                                    background: '#FFFBF2',
                                    border: '1px solid rgba(92,74,42,0.1)',
                                    borderRadius: 16,
                                    padding: '28px 24px',
                                    position: 'relative',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    opacity: isStepsVisible ? 1 : 0,
                                    animation: isStepsVisible ? `fadeUp 0.6s ease ${0.1 + i * 0.1}s forwards` : 'none',
                                }}
                            >
                                <div style={{
                                    fontSize: 11, fontWeight: 700, color: '#8B6914',
                                    letterSpacing: 1, marginBottom: 20, opacity: 0.8,
                                }}>
                                    {step.number}
                                </div>
                                <div style={{
                                    width: 44, height: 44, borderRadius: 12,
                                    background: 'rgba(139,105,20,0.1)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: 22, marginBottom: 16,
                                }}>
                                    {step.icon}
                                </div>
                                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#1A1208', marginBottom: 8 }}>
                                    {step.title}
                                </h3>
                                <p style={{ fontSize: 13, color: '#6B5B3A', lineHeight: 1.65 }}>
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section
                id="features"
                ref={featureSectionRef}
                style={{ background: '#2D2010', padding: '100px 48px' }}
            >
                <div className="marketing-shell" style={{ maxWidth: 1160, margin: '0 55px' }}>
                    <p style={{
                        fontSize: 12, fontWeight: 700, letterSpacing: 2,
                        color: '#C9A84C', textTransform: 'uppercase', marginBottom: 16,
                        opacity: isFeaturesVisible ? 1 : 0,
                        animation: isFeaturesVisible ? 'fadeUp 0.6s ease forwards' : 'none',
                    }}>
                        {t('marketing.features_label')}
                    </p>
                    <h2 style={{
                        fontSize: 'clamp(28px, 3.5vw, 44px)',
                        fontWeight: 800, color: '#F5EFE0', letterSpacing: '-1px',
                        fontFamily: 'var(--app-font-serif)', marginBottom: 16, maxWidth: 600,
                        opacity: isFeaturesVisible ? 1 : 0,
                        animation: isFeaturesVisible ? 'fadeUp 0.6s ease 0.1s forwards' : 'none',
                    }}>
                        {t('marketing.features_title')}
                    </h2>
                    <p style={{
                        fontSize: 16, color: 'rgba(245,239,224,0.65)', lineHeight: 1.7,
                        marginBottom: 60, maxWidth: 540,
                        opacity: isFeaturesVisible ? 1 : 0,
                        animation: isFeaturesVisible ? 'fadeUp 0.6s ease 0.2s forwards' : 'none',
                    }}>
                        {t('marketing.features_description')}
                    </p>

                    <div
                        className="marketing-features-grid"
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: 20,
                        }}
                    >
                        {features.map((feature, i) => (
                            <div
                                key={i}
                                className="feature-card-warm"
                                style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    borderRadius: 16, padding: '28px 24px',
                                    transition: 'transform 0.3s ease',
                                    opacity: isFeaturesVisible ? 1 : 0,
                                    animation: isFeaturesVisible ? `fadeUp 0.6s ease ${0.1 + i * 0.1}s forwards` : 'none',
                                }}
                            >
                                <div style={{
                                    width: 46, height: 46, borderRadius: 12,
                                    background: 'rgba(201,168,76,0.15)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: 22, marginBottom: 16,
                                }}>
                                    {feature.icon}
                                </div>
                                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#F5EFE0', marginBottom: 8 }}>
                                    {feature.title}
                                </h3>
                                <p style={{ fontSize: 13, color: 'rgba(245,239,224,0.6)', lineHeight: 1.65 }}>
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section
                ref={ctaSectionRef}
                style={{
                    background: 'linear-gradient(180deg, #F5EFE0 0%, #FBF7EE 100%)',
                    padding: '100px 48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div
                    className="marketing-cta-grid"
                    style={{
                        maxWidth: 1160,
                        width: '100%',
                        display: 'grid',
                        gridTemplateColumns: user ? 'minmax(320px, 420px) minmax(0, 1fr)' : 'minmax(320px, 420px)',
                        justifyContent: 'space-between',
                        gap: 36,
                        alignItems: 'start',
                    }}
                >
                    <div
                        className="marketing-cta-shell"
                        style={{
                            background: '#FFF9EF',
                            border: '1px solid rgba(92,74,42,0.1)',
                            borderRadius: 28,
                            padding: '38px 36px',
                            boxShadow: '0 28px 70px rgba(92,74,42,0.12)',
                            opacity: isCtaVisible ? 1 : 0,
                            animation: isCtaVisible ? 'fadeUp 0.7s ease forwards' : 'none',
                        }}
                    >
                        <h2 style={{
                            fontSize: 'clamp(32px, 4vw, 54px)',
                            fontWeight: 800,
                            color: '#1A1208',
                            letterSpacing: '-1.5px',
                            fontFamily: 'var(--app-font-serif)',
                            lineHeight: 1.05,
                            marginBottom: 18,
                        }}>
                            {t('marketing.cta_title_line1')}<br />
                            <em style={{ color: '#8B6914', fontStyle: 'italic' }}>{t('marketing.cta_title_line2')}</em>
                        </h2>
                        <p style={{ fontSize: 16, color: '#6B5B3A', lineHeight: 1.7, marginBottom: 30 }}>
                            {t(user ? 'marketing.cta_description_logged_in' : 'marketing.cta_description')}
                        </p>

                        <form onSubmit={handleExploreCity} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                            <input
                                type="text"
                                value={destinationCity}
                                onChange={(event) => setDestinationCity(event.target.value)}
                                placeholder={t('marketing.cta_destination_city')}
                                className="cta-input"
                                style={{
                                    padding: '15px 18px', borderRadius: 14, fontSize: 15,
                                    border: '1.5px solid rgba(92,74,42,0.18)',
                                    background: '#FFFBF2', color: '#1A1208',
                                    width: '100%', boxSizing: 'border-box',
                                    transition: 'all 0.2s',
                                }}
                            />
                            <input
                                type="text"
                                value={profession}
                                onChange={(event) => setProfession(event.target.value)}
                                placeholder={t('marketing.cta_profession')}
                                className="cta-input"
                                style={{
                                    padding: '15px 18px', borderRadius: 14, fontSize: 15,
                                    border: '1.5px solid rgba(92,74,42,0.18)',
                                    background: '#FFFBF2', color: '#1A1208',
                                    width: '100%', boxSizing: 'border-box',
                                    transition: 'all 0.2s',
                                }}
                            />
                            {formError && (
                                <div style={{ color: '#B42318', fontSize: 13, marginTop: -4 }}>
                                    {formError}
                                </div>
                            )}
                            <button
                                type="submit"
                                style={{
                                    background: '#6F572C', color: '#F5EFE0',
                                    padding: '16px 28px', borderRadius: 14,
                                    fontSize: 16, fontWeight: 700, textDecoration: 'none',
                                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                                    gap: 8, marginTop: 4, border: 'none', cursor: 'pointer',
                                    boxShadow: '0 12px 28px rgba(92,74,42,0.22)',
                                }}
                            >
                                {t(user ? 'marketing.cta_button' : 'marketing.cta_button_signed_out')}
                            </button>
                        </form>
                    </div>

                    {user && (
                        <div
                            style={{
                                opacity: isCtaVisible ? 1 : 0,
                                animation: isCtaVisible ? 'fadeUp 0.7s ease 0.1s forwards' : 'none',
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, flexWrap: 'wrap', marginBottom: 18 }}>
                                <div>
                                    <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#8B6914', marginBottom: 8 }}>
                                        {t('report.saved_recommendations')}
                                    </div>
                                    <h3 style={{ margin: 0, color: '#1A1208', fontSize: 28, fontFamily: 'var(--app-font-serif)' }}>
                                        {t('marketing.saved_title')}
                                    </h3>
                                </div>
                                <Link
                                    href="/results"
                                    style={{ color: '#5C4A2A', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}
                                >
                                    {t('marketing.saved_view_results')}
                                </Link>
                            </div>

                            {savedLoading ? (
                                <div style={{ background: 'rgba(255,255,255,0.72)', border: '1px dashed rgba(92,74,42,0.18)', borderRadius: 20, padding: '30px 24px', color: '#8B7355', fontSize: 14 }}>
                                    {t('common.loading')}
                                </div>
                            ) : savedRecommendations.length === 0 ? (
                                <div style={{ background: 'rgba(255,255,255,0.72)', border: '1px dashed rgba(92,74,42,0.18)', borderRadius: 20, padding: '30px 24px', color: '#8B7355', fontSize: 14, lineHeight: 1.6 }}>
                                    {t('report.no_saved_recommendations')}
                                </div>
                            ) : (
                                <div
                                    className="marketing-saved-grid"
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                                        gap: 18,
                                    }}
                                >
                                    {savedRecommendations.map((saved) => (
                                        <div
                                            key={saved.id}
                                            className="saved-card"
                                            style={{
                                                background: 'rgba(255,255,255,0.86)',
                                                border: '1px solid rgba(92,74,42,0.12)',
                                                borderRadius: 20,
                                                padding: 22,
                                                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                                                boxShadow: '0 10px 24px rgba(92,74,42,0.08)',
                                            }}
                                        >
                                            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'flex-start', marginBottom: 18 }}>
                                                <div>
                                                    <h4 style={{ margin: 0, color: '#1A1208', fontSize: 18, fontWeight: 700, fontFamily: 'var(--app-font-serif)' }}>
                                                        {saved.target_city}
                                                    </h4>
                                                    <div style={{ marginTop: 4, color: '#8B7355', fontSize: 13 }}>
                                                        {saved.target_state || t('report.not_available')}
                                                    </div>
                                                </div>
                                                <div style={{ background: '#F2E7CE', color: '#6F572C', padding: '6px 10px', borderRadius: 9999, fontSize: 12, fontWeight: 700 }}>
                                                    {saved.suitability_score?.toFixed(0) || '0'}%
                                                </div>
                                            </div>

                                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 10, marginBottom: 18 }}>
                                                <MetricPill label={t('report.card.aqi_improve')} value={`${saved.aqi_improvement_percent?.toFixed(0) || '0'}%`} />
                                                <MetricPill label={t('report.card.avg_rent')} value={saved.avg_rent ? `${t('common.inr_symbol')}${saved.avg_rent.toLocaleString()}` : t('report.not_available')} />
                                            </div>

                                            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                                                <Link
                                                    href={`/city/${encodeURIComponent(saved.target_city)}${saved.target_state ? `?state=${encodeURIComponent(saved.target_state)}` : ''}`}
                                                    onClick={() => {
                                                        if (profession.trim()) {
                                                            storeDirectExploreSession({
                                                                profession: profession.trim(),
                                                                professions: [profession.trim()],
                                                                children: profile?.children,
                                                                elderly: profile?.elderly,
                                                            });
                                                        }
                                                    }}
                                                    style={{
                                                        flex: 1,
                                                        minWidth: 140,
                                                        background: '#6F572C',
                                                        color: '#F8F2E7',
                                                        padding: '12px 14px',
                                                        borderRadius: 12,
                                                        textDecoration: 'none',
                                                        textAlign: 'center',
                                                        fontSize: 14,
                                                        fontWeight: 700,
                                                    }}
                                                >
                                                    {t('city_detail_modal.explore_city')}
                                                </Link>
                                                <button
                                                    type="button"
                                                    onClick={() => handleRemoveSaved(saved.id, saved.target_city)}
                                                    disabled={removingId === saved.id}
                                                    style={{
                                                        border: '1px solid rgba(176, 38, 38, 0.16)',
                                                        background: '#FFF5F5',
                                                        color: '#B42318',
                                                        padding: '12px 14px',
                                                        borderRadius: 12,
                                                        cursor: removingId === saved.id ? 'default' : 'pointer',
                                                        fontSize: 14,
                                                        fontWeight: 700,
                                                    }}
                                                >
                                                    {removingId === saved.id ? t('report.removing_saved') : t('report.remove_saved')}
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

function MetricPill({ label, value }: { label: string; value: string }) {
    return (
        <div style={{ background: '#FFF9EF', border: '1px solid rgba(92,74,42,0.09)', borderRadius: 14, padding: '12px 14px' }}>
            <div style={{ color: '#6F572C', fontSize: 15, fontWeight: 700 }}>{value}</div>
            <div style={{ color: '#8B7355', fontSize: 11, marginTop: 4 }}>{label}</div>
        </div>
    );
}

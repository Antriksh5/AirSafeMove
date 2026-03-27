'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from '../hooks/useTranslation';

export default function HowItWorks() {
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
            `}</style>

            <section
                id="how-it-works"
                ref={stepSectionRef}
                style={{ background: '#FDFAF4', padding: '100px 48px' }}
            >
                <div style={{ maxWidth: 1160, margin: '0 55px' }}>
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

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: 24,
                    }}>
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
                <div style={{ maxWidth: 1160, margin: '0 55px' }}>
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

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: 20,
                    }}>
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
                    background: '#F5EFE0',
                    padding: '100px 48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div style={{ maxWidth: 680, width: '100%', textAlign: 'left' }}>
                    <div style={{
                        opacity: isCtaVisible ? 1 : 0,
                        animation: isCtaVisible ? 'fadeUp 0.7s ease forwards' : 'none',
                    }}>
                        <h2 style={{
                            fontSize: 'clamp(32px, 4vw, 52px)',
                            fontWeight: 800, color: '#1A1208', letterSpacing: '-1.5px',
                            fontFamily: 'var(--app-font-serif)', lineHeight: 1.1, marginBottom: 20,
                        }}>
                            {t('marketing.cta_title_line1')}<br />
                            where you <em style={{ color: '#8B6914', fontStyle: 'italic' }}>belong?</em>
                        </h2>
                        <p style={{ fontSize: 16, color: '#6B5B3A', lineHeight: 1.7, marginBottom: 36 }}>
                            {t('marketing.cta_description')}
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 380 }}>
                            <input
                                type="text"
                                placeholder={t('marketing.cta_current_city')}
                                className="cta-input"
                                style={{
                                    padding: '14px 18px', borderRadius: 10, fontSize: 15,
                                    border: '1.5px solid rgba(92,74,42,0.25)',
                                    background: '#FFFBF2', color: '#1A1208',
                                    width: '100%', boxSizing: 'border-box',
                                    transition: 'all 0.2s',
                                }}
                            />
                            <input
                                type="text"
                                placeholder={t('marketing.cta_profession')}
                                className="cta-input"
                                style={{
                                    padding: '14px 18px', borderRadius: 10, fontSize: 15,
                                    border: '1.5px solid rgba(92,74,42,0.25)',
                                    background: '#FFFBF2', color: '#1A1208',
                                    width: '100%', boxSizing: 'border-box',
                                    transition: 'all 0.2s',
                                }}
                            />
                            <Link href="/wizard" style={{
                                background: '#5C4A2A', color: '#F5EFE0',
                                padding: '15px 28px', borderRadius: 10,
                                fontSize: 15, fontWeight: 700, textDecoration: 'none',
                                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                                gap: 8, marginTop: 4,
                                boxShadow: '0 4px 16px rgba(92,74,42,0.3)',
                                transition: 'all 0.2s',
                            }}>
                                {t('marketing.cta_button')}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

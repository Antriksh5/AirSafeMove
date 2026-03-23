'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const steps = [
    {
        number: '01',
        icon: '👤',
        title: 'Build your profile',
        description: 'Your city preferences, lifestyle, age, health conditions and career details.',
    },
    {
        number: '02',
        icon: '📋',
        title: 'Set your preferences',
        description: 'Define your maximum distance, budget, and housing preferences.',
    },
    {
        number: '03',
        icon: '✨',
        title: 'AI analyses cities',
        description: 'Our model scores all cities weighing AQI, cost of living, job market and utilities.',
    },
    {
        number: '04',
        icon: '📊',
        title: 'Get your report',
        description: 'You receive a personalised city report with detailed migration breakdown.',
    },
];

const features = [
    {
        icon: '📊',
        title: 'Air quality data',
        description: 'Live and historical AQI trends. 5 years of data across 25+ Indian cities.',
    },
    {
        icon: '🏘️',
        title: 'Housing & utilities',
        description: 'Compare rent, electricity, LPG rates, water charges and cost-of-living city by city.',
    },
    {
        icon: '💼',
        title: 'Career matching',
        description: 'Job openings aligned to your profile, industry demand and top support for your sector.',
    },
    {
        icon: '🔍',
        title: 'Distance-aware search',
        description: 'Filter by max distance and find locations that are home to people like you.',
    },
    {
        icon: '🏫',
        title: 'Schools & healthcare',
        description: 'Top-rated schools, hospitals and clinics scored near your potential new home.',
    },
    {
        icon: '🌏',
        title: 'AI migration advice',
        description: 'Personalised recommendations with plain-language explanations for each condition.',
    },
];

export default function HowItWorks() {
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

            {/* ────── HOW IT WORKS ────── */}
            <section
                id="how-it-works"
                ref={stepSectionRef}
                style={{ background: '#FDFAF4', padding: '100px 48px' }}
            >
                <div style={{ maxWidth: 1160, margin: '0 auto' }}>
                    {/* Section label */}
                    <p style={{
                        fontSize: 12, fontWeight: 700, letterSpacing: 2,
                        color: '#8B6914', textTransform: 'uppercase', marginBottom: 16,
                        opacity: isStepsVisible ? 1 : 0,
                        animation: isStepsVisible ? 'fadeUp 0.6s ease forwards' : 'none',
                    }}>
                        HOW IT WORKS
                    </p>
                    <h2 style={{
                        fontSize: 'clamp(28px, 3.5vw, 44px)',
                        fontWeight: 800, color: '#1A1208', letterSpacing: '-1px',
                        fontFamily: 'Georgia, serif', marginBottom: 16, maxWidth: 560,
                        opacity: isStepsVisible ? 1 : 0,
                        animation: isStepsVisible ? 'fadeUp 0.6s ease 0.1s forwards' : 'none',
                    }}>
                        Four steps to your ideal city
                    </h2>
                    <p style={{
                        fontSize: 16, color: '#6B5B3A', lineHeight: 1.7, marginBottom: 60, maxWidth: 520,
                        opacity: isStepsVisible ? 1 : 0,
                        animation: isStepsVisible ? 'fadeUp 0.6s ease 0.2s forwards' : 'none',
                    }}>
                        We go beyond just metrics. Just answer a few questions and let the data do the work.
                    </p>

                    {/* Steps grid */}
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
                                {/* Step number */}
                                <div style={{
                                    fontSize: 11, fontWeight: 700, color: '#8B6914',
                                    letterSpacing: 1, marginBottom: 20, opacity: 0.8,
                                }}>
                                    {step.number}
                                </div>
                                {/* Icon */}
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

            {/* ────── FEATURES ────── */}
            <section
                id="features"
                ref={featureSectionRef}
                style={{ background: '#2D2010', padding: '100px 48px' }}
            >
                <div style={{ maxWidth: 1160, margin: '0 auto' }}>
                    {/* Section label */}
                    <p style={{
                        fontSize: 12, fontWeight: 700, letterSpacing: 2,
                        color: '#C9A84C', textTransform: 'uppercase', marginBottom: 16,
                        opacity: isFeaturesVisible ? 1 : 0,
                        animation: isFeaturesVisible ? 'fadeUp 0.6s ease forwards' : 'none',
                    }}>
                        EVERY FACTOR COVERED
                    </p>
                    <h2 style={{
                        fontSize: 'clamp(28px, 3.5vw, 44px)',
                        fontWeight: 800, color: '#F5EFE0', letterSpacing: '-1px',
                        fontFamily: 'Georgia, serif', marginBottom: 16, maxWidth: 600,
                        opacity: isFeaturesVisible ? 1 : 0,
                        animation: isFeaturesVisible ? 'fadeUp 0.6s ease 0.1s forwards' : 'none',
                    }}>
                        Every factor that matters for your move
                    </h2>
                    <p style={{
                        fontSize: 16, color: 'rgba(245,239,224,0.65)', lineHeight: 1.7,
                        marginBottom: 60, maxWidth: 540,
                        opacity: isFeaturesVisible ? 1 : 0,
                        animation: isFeaturesVisible ? 'fadeUp 0.6s ease 0.2s forwards' : 'none',
                    }}>
                        We go beyond just rent — every necessity, compared across cities in one place.
                    </p>

                    {/* Features grid */}
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

            {/* ────── CTA SECTION ────── */}
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
                            fontFamily: 'Georgia, serif', lineHeight: 1.1, marginBottom: 20,
                        }}>
                            Ready to find<br />
                            where you{' '}
                            <em style={{ color: '#8B6914', fontStyle: 'italic' }}>belong?</em>
                        </h2>
                        <p style={{ fontSize: 16, color: '#6B5B3A', lineHeight: 1.7, marginBottom: 36 }}>
                            Join thousands of Indians moving smarter. Get data-driven recommendations with full data and AI-powered guidance.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 380 }}>
                            <input
                                type="text"
                                placeholder="Your current city"
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
                                placeholder="Your profession"
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
                                Find my city →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
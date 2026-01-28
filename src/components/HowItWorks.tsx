'use client';

import { useEffect, useRef, useState } from 'react';

const steps = [
    {
        number: '01',
        icon: '👤',
        title: 'Enter Your Profile',
        description: 'Tell us about yourself - your current city, profession, age, and migration preferences.'
    },
    {
        number: '02',
        icon: '⚙️',
        title: 'Set Constraints',
        description: 'Define your maximum distance, budget, and food preferences for personalized filtering.'
    },
    {
        number: '03',
        icon: '✨',
        title: 'AI Analysis',
        description: 'Our ML model analyzes AQI data, costs, and career opportunities to score cities.'
    },
    {
        number: '04',
        icon: '📋',
        title: 'Get Report',
        description: 'Receive top 5 city recommendations with detailed migration readiness report.'
    }
];

const features = [
    {
        icon: '📊',
        title: 'Real-time AQI Data',
        description: 'Access 5-year historical and current air quality data for 25+ Indian cities.'
    },
    {
        icon: '📍',
        title: 'Distance Optimization',
        description: 'Find the best cities within your preferred migration distance using Haversine formula.'
    },
    {
        icon: '💼',
        title: 'Profession Matching',
        description: 'Get recommendations based on job opportunities in your field across cities.'
    },
    {
        icon: '₹',
        title: 'Cost Analysis',
        description: 'Compare housing costs and find cities that match your budget requirements.'
    },
    {
        icon: '👥',
        title: 'Community Insights',
        description: 'Understand cultural compatibility and community profiles of recommended cities.'
    },
    {
        icon: '🤖',
        title: 'AI Advisory',
        description: 'Receive personalized migration advice with explainable AI recommendations.'
    }
];

export default function HowItWorks() {
    // Refs for scroll detection
    const stepSectionRef = useRef(null);
    const featureSectionRef = useRef(null);

    // Visibility states
    const [isStepsVisible, setIsStepsVisible] = useState(false);
    const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);

    useEffect(() => {
        const observerOptions = { threshold: 0.15 };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target === stepSectionRef.current) setIsStepsVisible(true);
                    if (entry.target === featureSectionRef.current) setIsFeaturesVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        if (stepSectionRef.current) observer.observe(stepSectionRef.current);
        if (featureSectionRef.current) observer.observe(featureSectionRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <style jsx>{`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-8px); }
                    100% { transform: translateY(0px); }
                }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0px); }
                }
                .fade-in-header {
                    opacity: 0;
                    transform: translateY(20px);
                    transition: all 0.8s ease-out;
                }
                .fade-in-header.visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                /* Hover effect for Feature Cards */
                .feature-card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .feature-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                    border-color: #2DD4BF; /* Teal border on hover */
                }
            `}</style>

            {/* --- SECTION 1: HOW IT WORKS --- */}
            <section
                id="how-it-works"
                ref={stepSectionRef}
                style={{
                    position: 'relative',
                    padding: '100px 32px 80px 32px',
                    background: 'white'
                }}
            >
                {/* SVG Wave */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', overflow: 'hidden', lineHeight: 0 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ position: 'relative', display: 'block', width: 'calc(100% + 1.3px)', height: 60 }}>
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#F0F9FF"></path>
                    </svg>
                </div>

                <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 10 }}>
                    <div className={`fade-in-header ${isStepsVisible ? 'visible' : ''}`} style={{ textAlign: 'center', marginBottom: 60 }}>
                        <h2 className="section-title">
                            How AirSafe Move Works
                        </h2>
                        <p style={{ fontSize: 16, color: '#64748B' }}>
                            Four simple steps to find your ideal clean-air destination
                        </p>
                    </div>

                    <div className="steps-grid">
                        {steps.map((step, index) => (
                            <div key={index} style={{
                                position: 'relative',
                                opacity: isStepsVisible ? 1 : 0,
                                animation: isStepsVisible ? `fadeInUp 0.8s ease-out forwards ${index * 0.2}s` : 'none'
                            }}>
                                <div style={{ height: '100%', animation: isStepsVisible ? `float 5s ease-in-out infinite` : 'none', animationDelay: `${index * 0.5}s` }}>
                                    <div style={{ position: 'absolute', top: -12, left: 16, background: '#14B8A6', color: 'white', padding: '4px 10px', borderRadius: 12, fontSize: 12, fontWeight: 600, zIndex: 1, boxShadow: '0 4px 6px -1px rgba(20, 184, 166, 0.3)' }}>
                                        {step.number}
                                    </div>
                                    <div className="card" style={{ paddingTop: 32, paddingBottom: 24, paddingLeft: 20, paddingRight: 20, height: '100%', position: 'relative', background: 'white', borderRadius: 16, border: '1px solid #F1F5F9', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)' }}>
                                        <div className="icon-circle" style={{ marginBottom: 16, fontSize: 32 }}>{step.icon}</div>
                                        <h3 style={{ fontSize: 18, fontWeight: 700, color: '#1E293B', marginBottom: 8 }}>{step.title}</h3>
                                        <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.6 }}>{step.description}</p>
                                    </div>
                                    {index < steps.length - 1 && (
                                        <div className="step-arrow">▶</div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SECTION 2: FEATURES (UPDATED) --- */}
            <section
                id="features"
                ref={featureSectionRef}
                style={{
                    padding: '100px 32px',
                    // Added a very subtle gradient to the section background itself
                    background: 'linear-gradient(180deg, #F8FAFC 0%, #F0FDFA 100%)'
                }}
            >
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <div className={`fade-in-header ${isFeaturesVisible ? 'visible' : ''}`} style={{ textAlign: 'center', marginBottom: 60 }}>
                        <h2 className="section-title">
                            Comprehensive Migration Intelligence
                        </h2>
                        <p style={{ fontSize: 16, color: '#64748B', maxWidth: 600, margin: '0 auto' }}>
                            Our AI analyzes multiple factors to give you the most suitable city
                            recommendations for a healthier, happier life.
                        </p>
                    </div>

                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="feature-card"
                                style={{
                                    background: 'white',
                                    padding: 32,
                                    borderRadius: 24,
                                    border: '1px solid #E2E8F0',
                                    // Animation Control
                                    opacity: isFeaturesVisible ? 1 : 0,
                                    animation: isFeaturesVisible ? `fadeInUp 0.6s ease-out forwards ${index * 0.1}s` : 'none'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
                                    {/* Animated Floating Icon with Gradient Background */}
                                    <div style={{
                                        minWidth: 56,
                                        height: 56,
                                        borderRadius: 16,
                                        // Vibrant Gradient Background
                                        background: 'linear-gradient(135deg, #CCFBF1 0%, #E0F2FE 100%)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: 28,
                                        // Floating animation applied to the icon specifically
                                        animation: isFeaturesVisible ? `float 4s ease-in-out infinite` : 'none',
                                        animationDelay: `${index * 0.3}s` // Staggered float
                                    }}>
                                        {feature.icon}
                                    </div>

                                    <div>
                                        <h3 style={{
                                            fontSize: 18,
                                            fontWeight: 700,
                                            color: '#1E293B',
                                            marginBottom: 8,
                                            marginTop: 4
                                        }}>
                                            {feature.title}
                                        </h3>
                                        <p style={{
                                            fontSize: 15,
                                            color: '#64748B',
                                            lineHeight: 1.6
                                        }}>
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
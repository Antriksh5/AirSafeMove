'use client';

import Link from 'next/link';

export default function Hero() {
    return (
        <section className="hero-section bg-gradient-main">
            <div style={{
                maxWidth: 1200,
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 60,
                alignItems: 'center'
            }}>
                {/* Left Content */}
                <div>
                    <div className="badge badge-teal" style={{ marginBottom: 20 }}>
                        <span style={{ fontSize: 12 }}>○</span>
                        AI-Powered Migration Advisor
                    </div>

                    <h1 style={{
                        fontSize: 48,
                        fontWeight: 700,
                        lineHeight: 1.2,
                        marginBottom: 20,
                        color: '#1E293B'
                    }}>
                        Migrate to{' '}
                        <span style={{ color: '#14B8A6' }}>Cleaner Air</span>
                        <br />
                        Live Healthier
                    </h1>

                    <p style={{
                        fontSize: 16,
                        color: '#64748B',
                        marginBottom: 32,
                        lineHeight: 1.6
                    }}>
                        Make data-driven relocation decisions with AI. Find cities with
                        better air quality, affordable living, and career opportunities tailored
                        to your profile.
                    </p>

                    <Link href="/wizard" className="btn-primary" style={{ fontSize: 16 }}>
                        Find Your City
                        <span>→</span>
                    </Link>

                    {/* Stats */}
                    <div style={{
                        display: 'flex',
                        gap: 40,
                        marginTop: 48,
                        paddingTop: 32,
                        borderTop: '1px solid #E2E8F0'
                    }}>
                        <div className="stat-box" style={{ textAlign: 'left', padding: 0 }}>
                            <div className="stat-value">25+</div>
                            <div className="stat-label">Cities Analyzed</div>
                        </div>
                        <div className="stat-box" style={{ textAlign: 'left', padding: 0 }}>
                            <div className="stat-value">5 Year</div>
                            <div className="stat-label">AQI Data</div>
                        </div>
                        <div className="stat-box" style={{ textAlign: 'left', padding: 0 }}>
                            <div className="stat-value" style={{ color: '#14B8A6' }}>100%</div>
                            <div className="stat-label">Free to Use</div>
                        </div>
                    </div>
                </div>

                {/* Right Content - AQI Comparison Card */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="aqi-comparison-card" style={{ maxWidth: 380, width: '100%' }}>
                        {/* AI Recommended Badge */}
                        <div style={{
                            position: 'absolute',
                            top: -10,
                            right: 20,
                            background: '#7C3AED',
                            color: 'white',
                            padding: '6px 12px',
                            borderRadius: 6,
                            fontSize: 12,
                            fontWeight: 600
                        }}>
                            AI Recommended
                        </div>

                        {/* Delhi (Current) */}
                        <div className="aqi-city-row">
                            <div className="aqi-badge aqi-hazardous" style={{ borderRadius: 8 }}>
                                285
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontWeight: 600, color: '#1E293B' }}>Delhi</div>
                                <div style={{ fontSize: 13, color: '#64748B' }}>Current AQI - Hazardous</div>
                            </div>
                        </div>

                        {/* Arrow indicating flow */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '8px 0',
                            gap: 12
                        }}>
                            <div style={{
                                flex: 1,
                                height: 4,
                                background: 'linear-gradient(90deg, #14B8A6 0%, #10B981 100%)',
                                borderRadius: 2
                            }} />
                            <span style={{ color: '#14B8A6', fontSize: 20 }}>→</span>
                        </div>

                        {/* Shimla (Target) */}
                        <div className="aqi-city-row" style={{ borderBottom: 'none' }}>
                            <div className="aqi-badge aqi-good" style={{ borderRadius: 8 }}>
                                48
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontWeight: 600, color: '#1E293B' }}>Shimla</div>
                                <div style={{ fontSize: 13, color: '#64748B' }}>Target AQI - Good</div>
                            </div>
                        </div>

                        {/* Improvement Badge */}
                        <div className="improvement-badge" style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8
                        }}>
                            <span style={{ fontSize: 16 }}>○</span>
                            <div>
                                <div style={{ fontWeight: 600 }}>83% AQI Improvement</div>
                                <div style={{ fontSize: 12, opacity: 0.8 }}>Significant health benefits expected</div>
                            </div>
                        </div>

                        {/* Distance */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                            marginTop: 16,
                            padding: '12px 16px',
                            background: '#F8FAFC',
                            borderRadius: 8
                        }}>
                            <div style={{
                                width: 32,
                                height: 32,
                                background: 'rgba(20, 184, 166, 0.1)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#14B8A6'
                            }}>
                                📍
                            </div>
                            <div>
                                <div style={{ fontWeight: 600, color: '#1E293B' }}>320 km</div>
                                <div style={{ fontSize: 12, color: '#64748B' }}>Distance</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

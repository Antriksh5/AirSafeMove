'use client';

import Link from 'next/link';

// Define common gradient styles to reuse
const textGradientStyle = {
    background: 'linear-gradient(90deg, #0EA5E9 0%, #10B981 100%)', // Sky blue to Emerald green
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent', // Fallback
};

const bgGradientStyle = {
    background: 'linear-gradient(90deg, #0EA5E9 0%, #10B981 100%)',
    color: 'white',
};

export default function Hero() {
    return (
        // UPDATED: Enhanced background gradient for more depth and freshness
        <section className="hero-section" style={{
            background: 'linear-gradient(180deg, #F0F9FF 0%, #ECFDF5 60%, #FFFFFF 100%)'
        }}>
            <div className="hero-grid">
                {/* Left Content */}
                <div className="hero-left">
                    <div className="badge badge-teal" style={{ marginBottom: 24, backgroundColor: '#E0F2FE', color: '#0284C7', border: '1px solid #BAE6FD' }}>
                        <span style={{ fontSize: 12, marginRight: 6 }}>●</span>
                        AI-Powered Migration Advisor
                    </div>

                    <h1 className="hero-title">
                        Migrate to{' '}
                        <br />
                        {/* UPDATED: Added vibrant gradient text */}
                        <span style={{
                            ...textGradientStyle,
                            fontWeight: 700
                        }}>
                            Cleaner Air
                        </span>
                        <br />
                        Live Healthier
                    </h1>

                    <p className="hero-subtitle">
                        Make data-driven relocation decisions with AI. Find cities with
                        better air quality, affordable living, and career opportunities tailored
                        to your profile.
                    </p>

                    {/* UPDATED: Gradient Button */}
                    <Link href="/wizard" className="btn-primary hero-cta" style={{
                        ...bgGradientStyle,
                        fontSize: 16,
                        fontWeight: 600,
                        padding: '14px 24px',
                        borderRadius: '12px',
                        alignItems: 'center',
                        gap: '8px',
                        border: 'none',
                        boxShadow: '0 10px 15px -3px rgba(14, 165, 233, 0.3)'
                    }}>
                        Find Your City
                        <span>→</span>
                    </Link>

                    {/* Stats */}
                    <div className="hero-stats">
                        <div className="stat-box" style={{ textAlign: 'left', padding: 0 }}>
                            <div className="stat-value" style={{ fontWeight: 700, color: '#1E293B' }}>25+</div>
                            <div className="stat-label" style={{ color: '#64748B', marginTop: 4 }}>Cities Analyzed</div>
                        </div>
                        <div className="stat-box" style={{ textAlign: 'left', padding: 0 }}>
                            <div className="stat-value" style={{ fontWeight: 700, color: '#1E293B' }}>5 Year</div>
                            <div className="stat-label" style={{ color: '#64748B', marginTop: 4 }}>AQI Data</div>
                        </div>
                        <div className="stat-box" style={{ textAlign: 'left', padding: 0 }}>
                            {/* UPDATED: Gradient text on the stat */}
                            <div className="stat-value" style={{ ...textGradientStyle, fontWeight: 700 }}>100%</div>
                            <div className="stat-label" style={{ color: '#64748B', marginTop: 4 }}>Free to Use</div>
                        </div>
                    </div>
                </div>

                {/* Right Content - AQI Comparison Card */}
                <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                    {/* AI Recommended Badge - Moved outside relative to the grid container for easier positioning */}
                    {/* UPDATED: Gradient background for the badge */}
                    <div style={{
                        ...bgGradientStyle,
                        position: 'absolute',
                        top: -20,
                        right: 20,
                        zIndex: 10,
                        padding: '8px 16px',
                        borderRadius: 50,
                        fontSize: 14,
                        fontWeight: 700,
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}>
                        ✨ AI Recommended
                    </div>

                    <div className="aqi-comparison-card" style={{
                        maxWidth: 500,
                        width: '100%',
                        background: '#FFFFFF',
                        borderRadius: '24px',
                        padding: '32px',
                        // UPDATED: Added a subtle colored shadow for pop
                        boxShadow: '0 20px 25px -5px rgba(14, 184, 166, 0.1), 0 10px 10px -5px rgba(14, 184, 166, 0.04)',
                        border: '1px solid #F0FDF4'
                    }}>

                        {/* Delhi (Current) */}
                        <div className="aqi-city-row" style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                            <div className="aqi-badge aqi-hazardous" style={{
                                borderRadius: 12,
                                background: '#FEF2F2', color: '#DC2626', padding: '12px', fontSize: 24, fontWeight: 700, minWidth: 80, textAlign: 'center'
                            }}>
                                285
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontWeight: 700, fontSize: 20, color: '#1E293B' }}>Delhi</div>
                                <div style={{ fontSize: 14, color: '#DC2626', fontWeight: 500 }}>Current AQI - Hazardous</div>
                            </div>
                        </div>

                        {/* Arrow indicating flow */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '12px 0',
                            gap: 12
                        }}>
                            {/* UPDATED: Vibrant gradient progress bar */}
                            <div style={{
                                flex: 1,
                                height: 6,
                                background: 'linear-gradient(90deg, #DC2626 0%, #F59E0B 50%, #10B981 100%)',
                                borderRadius: 10
                            }} />
                            {/* UPDATED: Gradient arrow */}
                            <span style={{ ...textGradientStyle, fontSize: 24 }}>→</span>
                        </div>

                        {/* Shimla (Target) */}
                        <div className="aqi-city-row" style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 20, paddingBottom: 24, borderBottom: '1px solid #F1F5F9' }}>
                            <div className="aqi-badge aqi-good" style={{
                                borderRadius: 12,
                                background: '#ECFDF5', color: '#059669', padding: '12px', fontSize: 24, fontWeight: 700, minWidth: 80, textAlign: 'center'
                            }}>
                                48
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontWeight: 700, fontSize: 20, color: '#1E293B' }}>Shimla</div>
                                <div style={{ fontSize: 14, color: '#059669', fontWeight: 500 }}>Target AQI - Good</div>
                            </div>
                        </div>

                        {/* Improvement Badge */}
                        <div className="improvement-badge" style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 12,
                            background: '#F0FDF4',
                            padding: '16px',
                            borderRadius: 16,
                            marginTop: 24,
                            border: '1px solid #DCFCE7'
                        }}>
                            <span style={{ fontSize: 20, color: '#10B981' }}>🎉</span>
                            <div>
                                {/* UPDATED: Gradient text for improvement */}
                                <div style={{ ...textGradientStyle, fontWeight: 700, fontSize: 18 }}>83% AQI Improvement</div>
                                <div style={{ fontSize: 14, color: '#334155' }}>Significant health benefits expected</div>
                            </div>
                        </div>

                        {/* Distance */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 12,
                            marginTop: 16,
                            padding: '12px 16px',
                            background: '#F8FAFC',
                            borderRadius: 12
                        }}>
                            <div style={{
                                width: 36,
                                height: 36,
                                background: '#E0F2FE',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#0EA5E9',
                                fontSize: 18
                            }}>
                                📍
                            </div>
                            <div>
                                <div style={{ fontWeight: 600, color: '#1E293B' }}>320 km</div>
                                <div style={{ fontSize: 13, color: '#64748B' }}>Distance</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
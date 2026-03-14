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
        <section className="hero-section" style={{
            background: 'transparent'
        }}>
            <div className="hero-grid">
                {/* Left Content */}
                <div className="hero-left">
                    <div className="badge badge-teal" style={{ marginBottom: 24, backgroundColor: 'rgba(14, 165, 233, 0.15)', color: '#38BDF8', border: '1px solid rgba(14, 165, 233, 0.3)' }}>
                        <span style={{ fontSize: 12, marginRight: 6 }}>●</span>
                        AI-Powered Migration Advisor
                    </div>

                    <h1 className="hero-title">
                        Migrate to{' '}
                        <br />
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

                    {/* Gradient Button */}
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
                        <div className="stat-box" style={{ textAlign: 'center', padding: 0 }}>
                            <div className="stat-value" style={{ fontWeight: 700, color: '#FFFFFF' }}>25+</div>
                            <div className="stat-label" style={{ color: 'rgba(255,255,255,0.6)', marginTop: 4 }}>Cities Analyzed</div>
                        </div>
                        <div className="stat-box" style={{ textAlign: 'center', padding: 0 }}>
                            <div className="stat-value" style={{ fontWeight: 700, color: '#FFFFFF' }}>5 Year</div>
                            <div className="stat-label" style={{ color: 'rgba(255,255,255,0.6)', marginTop: 4 }}>AQI Data</div>
                        </div>
                        <div className="stat-box" style={{ textAlign: 'center', padding: 0 }}>
                            <div className="stat-value" style={{ ...textGradientStyle, fontWeight: 700 }}>100%</div>
                            <div className="stat-label" style={{ color: 'rgba(255,255,255,0.6)', marginTop: 4 }}>Free to Use</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
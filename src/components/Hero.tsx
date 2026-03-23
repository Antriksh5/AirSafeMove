'use client';

import Link from 'next/link';

export default function Hero() {
    return (
        <section style={{
            background: '#F5EFE0',
            padding: '80px 48px 60px',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Subtle background texture */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(139,105,20,0.07) 0%, transparent 60%)',
                pointerEvents: 'none',
            }} />

            <div style={{ maxWidth: 1160, margin: '0 auto', position: 'relative' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>

                    {/* ── Left Content ── */}
                    <div>
                        {/* Badge */}
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: 8,
                            background: 'rgba(92,74,42,0.1)', border: '1px solid rgba(92,74,42,0.2)',
                            borderRadius: 20, padding: '6px 14px', marginBottom: 28,
                            fontSize: 13, fontWeight: 500, color: '#5C4A2A',
                        }}>
                            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#8B6914', display: 'inline-block' }} />
                            AI-Powered Migration Advisor
                        </div>

                        {/* Headline */}
                        <h1 style={{
                            fontSize: 'clamp(40px, 5vw, 58px)',
                            fontWeight: 800,
                            lineHeight: 1.12,
                            color: '#1A1208',
                            margin: '0 0 24px',
                            letterSpacing: '-1.5px',
                            fontFamily: 'Georgia, "Times New Roman", serif',
                        }}>
                            Find your next{' '}
                            <em style={{
                                fontStyle: 'italic',
                                color: '#8B6914',
                                fontFamily: 'Georgia, "Times New Roman", serif',
                            }}>clean-air{' '}
                            city</em>{' '}— with{' '}confidence.
                        </h1>

                        {/* Subtext */}
                        <p style={{
                            fontSize: 16,
                            color: '#6B5B3A',
                            lineHeight: 1.75,
                            marginBottom: 36,
                            maxWidth: 440,
                        }}>
                            Tell us about your family, career, and lifestyle. We match you with cities
                            where you'll truly thrive — covering housing, utilities, healthcare, schools and more.
                        </p>

                        {/* CTA */}
                        <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
                            <Link href="/wizard" style={{
                                background: '#5C4A2A',
                                color: '#F5EFE0',
                                padding: '14px 28px',
                                borderRadius: 10,
                                fontSize: 15,
                                fontWeight: 600,
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 8,
                                boxShadow: '0 4px 16px rgba(92,74,42,0.25)',
                                transition: 'all 0.2s',
                            }}>
                                Find Your City →
                            </Link>
                            <a href="#how-it-works" style={{
                                color: '#5C4A2A',
                                textDecoration: 'none',
                                fontSize: 15,
                                fontWeight: 500,
                                opacity: 0.8,
                            }}>
                                See how it works
                            </a>
                        </div>

                        {/* Stats Row */}
                        <div style={{
                            display: 'flex',
                            gap: 40,
                            marginTop: 52,
                            paddingTop: 40,
                            borderTop: '1px solid rgba(92,74,42,0.15)',
                        }}>
                            {[
                                { value: '25+', label: 'Cities Analyzed' },
                                { value: '5 yr', label: 'AQI Data' },
                                { value: '100%', label: 'Free to Use' },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <div style={{ fontSize: 26, fontWeight: 800, color: '#1A1208', letterSpacing: '-0.5px', fontFamily: 'Georgia, serif' }}>
                                        {stat.value}
                                    </div>
                                    <div style={{ fontSize: 13, color: '#8B7355', marginTop: 4, fontWeight: 500 }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Right: Card Mockup ── */}
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <div style={{
                            background: '#FFFBF2',
                            borderRadius: 20,
                            padding: 28,
                            boxShadow: '0 24px 64px rgba(92,74,42,0.18), 0 4px 12px rgba(0,0,0,0.06)',
                            width: '100%',
                            maxWidth: 360,
                            border: '1px solid rgba(92,74,42,0.1)',
                        }}>
                            {/* Card header */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                                <span style={{ fontSize: 13, fontWeight: 600, color: '#5C4A2A' }}>Plan</span>
                                <span style={{ fontSize: 12, color: '#8B7355' }}>AQI Matching</span>
                            </div>

                            {/* Filter row */}
                            <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
                                <div style={{
                                    flex: 1, background: '#F5EFE0', borderRadius: 8,
                                    padding: '10px 14px', fontSize: 13, color: '#5C4A2A', fontWeight: 500,
                                }}>
                                    ₹10,000
                                </div>
                                <div style={{
                                    background: '#F5EFE0', borderRadius: 8,
                                    padding: '10px 14px', fontSize: 13, color: '#5C4A2A', fontWeight: 500,
                                    minWidth: 70, display: 'flex', alignItems: 'center', gap: 6,
                                }}>
                                    <span style={{ fontSize: 16 }}>🔆</span> 14
                                </div>
                            </div>

                            {/* City cards */}
                            {[
                                { name: 'Bangalore', aqi: 'Unlimited', cost: '₹6,231', badge: '#22C55E', rating: '94.2pt' },
                                { name: 'Pune', aqi: 'Limited', cost: '₹5,012', badge: '#EAB308', rating: '88.1' },
                                { name: 'Hyderabad', aqi: 'Standard', cost: '₹4,872', badge: '#94A3B8', rating: '81.4' },
                            ].map((city, i) => (
                                <div key={city.name} style={{
                                    background: i === 0 ? '#5C4A2A' : '#F5EFE0',
                                    borderRadius: 12,
                                    padding: '14px 16px',
                                    marginBottom: i < 2 ? 10 : 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}>
                                    <div>
                                        <div style={{ fontSize: 13, fontWeight: 700, color: i === 0 ? '#F5EFE0' : '#1A1208', marginBottom: 3 }}>
                                            {city.aqi}
                                        </div>
                                        <div style={{ fontSize: 12, color: i === 0 ? 'rgba(245,239,224,0.7)' : '#8B7355' }}>
                                            {city.name}
                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ fontSize: 13, fontWeight: 700, color: i === 0 ? '#F5EFE0' : '#1A1208' }}>
                                            {city.rating}
                                        </div>
                                        <div style={{
                                            fontSize: 11, background: city.badge, color: 'white',
                                            borderRadius: 6, padding: '2px 8px', marginTop: 4,
                                            display: 'inline-block', fontWeight: 600,
                                        }}>
                                            {city.cost}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Bottom summary */}
                            <div style={{
                                marginTop: 16, paddingTop: 16,
                                borderTop: '1px solid rgba(92,74,42,0.12)',
                                display: 'flex', justifyContent: 'space-between',
                                fontSize: 12, color: '#8B7355', fontWeight: 500,
                            }}>
                                <span>AQI Score</span>
                                <span style={{ color: '#22C55E', fontWeight: 700 }}>↑ 32% better</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
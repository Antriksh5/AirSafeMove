'use client';

import Link from 'next/link';
import { useTranslation } from '../hooks/useTranslation';

export default function Hero() {
    const { t } = useTranslation();
    const stats = [
        { value: t('landing.stats.cities_analyzed_value'), label: t('landing.stats.cities_analyzed_label') },
        { value: t('landing.stats.aqi_data_value'), label: t('landing.stats.aqi_data_label') },
        { value: t('landing.stats.free_to_use_value'), label: t('landing.stats.free_to_use_label') },
    ];
    const mockCities = [
        { name: t('landing.mock_card.cities.bangalore_name'), aqi: t('landing.mock_card.cities.bangalore_status'), cost: t('landing.mock_card.cities.bangalore_cost'), badge: '#22C55E', rating: t('landing.mock_card.cities.bangalore_rating') },
        { name: t('landing.mock_card.cities.pune_name'), aqi: t('landing.mock_card.cities.pune_status'), cost: t('landing.mock_card.cities.pune_cost'), badge: '#EAB308', rating: t('landing.mock_card.cities.pune_rating') },
        { name: t('landing.mock_card.cities.hyderabad_name'), aqi: t('landing.mock_card.cities.hyderabad_status'), cost: t('landing.mock_card.cities.hyderabad_cost'), badge: '#94A3B8', rating: t('landing.mock_card.cities.hyderabad_rating') },
    ];

    return (
        <section style={{
            background: '#F5EFE0',
            padding: '80px 48px 60px',
            position: 'relative',
            overflow: 'hidden',
        }}>
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(139,105,20,0.07) 0%, transparent 60%)',
                pointerEvents: 'none',
            }} />

            <div style={{ maxWidth: 1160, margin: '0 55px', position: 'relative' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
                    <div>
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: 8,
                            background: 'rgba(92,74,42,0.1)', border: '1px solid rgba(92,74,42,0.2)',
                            borderRadius: 20, padding: '6px 14px', marginBottom: 28,
                            fontSize: 13, fontWeight: 500, color: '#5C4A2A',
                        }}>
                            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#8B6914', display: 'inline-block' }} />
                            {t('landing.hero_badge')}
                        </div>

                        <h1 style={{
                            fontSize: 'clamp(40px, 5vw, 58px)',
                            fontWeight: 800,
                            lineHeight: 1.12,
                            color: '#1A1208',
                            margin: '0 0 24px',
                            letterSpacing: '-1.5px',
                            fontFamily: 'var(--app-font-serif)',
                        }}>
                            {t('landing.hero_title_prefix')}{' '}
                            <em style={{
                                fontStyle: 'italic',
                                color: '#8B6914',
                                fontFamily: 'var(--app-font-serif)',
                            }}>{t('landing.hero_title_highlight')}</em>{' '}
                            {t('landing.hero_title_suffix')}
                        </h1>

                        <p style={{
                            fontSize: 16,
                            color: '#6B5B3A',
                            lineHeight: 1.75,
                            marginBottom: 36,
                            maxWidth: 440,
                        }}>
                            {t('landing.hero_description')}
                        </p>

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
                                {t('landing.hero_cta')}
                            </Link>
                            <a href="#how-it-works" style={{
                                color: '#5C4A2A',
                                textDecoration: 'none',
                                fontSize: 15,
                                fontWeight: 500,
                                opacity: 0.8,
                            }}>
                                {t('landing.see_how_it_works')}
                            </a>
                        </div>

                        <div style={{
                            display: 'flex',
                            gap: 40,
                            marginTop: 52,
                            paddingTop: 40,
                            borderTop: '1px solid rgba(92,74,42,0.15)',
                        }}>
                            {stats.map((stat) => (
                                <div key={stat.label}>
                                    <div style={{ fontSize: 26, fontWeight: 800, color: '#1A1208', letterSpacing: '-0.5px', fontFamily: 'var(--app-font-serif)' }}>
                                        {stat.value}
                                    </div>
                                    <div style={{ fontSize: 13, color: '#8B7355', marginTop: 4, fontWeight: 500 }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

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
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                                <span style={{ fontSize: 13, fontWeight: 600, color: '#5C4A2A' }}>{t('landing.mock_card.plan')}</span>
                                <span style={{ fontSize: 12, color: '#8B7355' }}>{t('landing.mock_card.aqi_matching')}</span>
                            </div>

                            <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
                                <div style={{
                                    flex: 1, background: '#F5EFE0', borderRadius: 8,
                                    padding: '10px 14px', fontSize: 13, color: '#5C4A2A', fontWeight: 500,
                                }}>
                                    {t('landing.mock_card.budget')}
                                </div>
                                <div style={{
                                    background: '#F5EFE0', borderRadius: 8,
                                    padding: '10px 14px', fontSize: 13, color: '#5C4A2A', fontWeight: 500,
                                    minWidth: 70, display: 'flex', alignItems: 'center', gap: 6,
                                }}>
                                    <span style={{ fontSize: 16 }}>🔆</span> {t('landing.mock_card.count')}
                                </div>
                            </div>

                            {mockCities.map((city, i) => (
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

                            <div style={{
                                marginTop: 16, paddingTop: 16,
                                borderTop: '1px solid rgba(92,74,42,0.12)',
                                display: 'flex', justifyContent: 'space-between',
                                fontSize: 12, color: '#8B7355', fontWeight: 500,
                            }}>
                                <span>{t('landing.mock_card.aqi_score')}</span>
                                <span style={{ color: '#22C55E', fontWeight: 700 }}>{t('landing.mock_card.better')}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

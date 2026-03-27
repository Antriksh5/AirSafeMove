'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from '../hooks/useTranslation';
import { resetPlanningSession } from '../lib/session';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { user, profile, signOut, loading } = useAuth();
    const router = useRouter();
    const { t } = useTranslation();

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    const handleSignOut = async () => {
        resetPlanningSession();
        await signOut();
        closeMobileMenu();
        router.push('/');
    };

    const handleStartPlanning = () => {
        resetPlanningSession();
        closeMobileMenu();
    };

    return (
        <header style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 48px',
            height: 64,
            background: '#F5EFE0',
            position: 'sticky',
            top: 0,
            zIndex: 50,
            borderBottom: '1px solid rgba(0,0,0,0.06)',
        }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                <img
                    src="/Logo.png"
                    alt={t('app.logo_alt')}
                    style={{
                        height: 155,
                        width: 'auto',
                        objectFit: 'contain',
                        display: 'block',
                    }}
                />
            </Link>

            <nav style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                <a href="#how-it-works" style={{ color: '#5C4A2A', textDecoration: 'none', fontSize: 15, fontWeight: 500 }}>
                    {t('nav.how_it_works')}
                </a>
                <a href="#features" style={{ color: '#5C4A2A', textDecoration: 'none', fontSize: 15, fontWeight: 500 }}>
                    {t('nav.features')}
                </a>
                <LanguageSwitcher />
                {loading ? null : user ? (
                    <>
                        <div style={{
                            display: 'flex', alignItems: 'center', gap: 8,
                            padding: '6px 14px', borderRadius: 8,
                            backgroundColor: 'rgba(92,74,42,0.12)',
                            border: '1px solid rgba(92,74,42,0.2)',
                        }}>
                            <div style={{
                                width: 28, height: 28, borderRadius: '50%',
                                background: '#8B6914', display: 'flex', alignItems: 'center',
                                justifyContent: 'center', color: 'white', fontSize: 12, fontWeight: 700,
                            }}>
                                {(profile?.name || user.email || '?')[0].toUpperCase()}
                            </div>
                            <span style={{ fontSize: 14, fontWeight: 500, color: '#2C1F0E' }}>
                                {profile?.name || user.email?.split('@')[0]}
                            </span>
                        </div>
                        <Link href="/wizard" onClick={handleStartPlanning} style={{
                            background: '#5C4A2A', color: '#F5EFE0',
                            padding: '10px 22px', borderRadius: 8,
                            fontSize: 14, fontWeight: 600, textDecoration: 'none',
                            transition: 'all 0.2s',
                        }}>
                            {t('nav.start_planning')}
                        </Link>
                        <button onClick={handleSignOut} style={{
                            background: 'none', border: '1px solid rgba(92,74,42,0.3)',
                            padding: '8px 16px', borderRadius: 8, fontSize: 14,
                            color: '#5C4A2A', cursor: 'pointer', fontWeight: 500,
                        }}>
                            {t('nav.sign_out')}
                        </button>
                    </>
                ) : (
                    <>
                        <Link href="/auth" style={{ color: '#5C4A2A', textDecoration: 'none', fontSize: 15, fontWeight: 500 }}>
                            {t('nav.login')}
                        </Link>
                        <Link href="/wizard" onClick={handleStartPlanning} style={{
                            background: '#5C4A2A', color: '#F5EFE0',
                            padding: '10px 22px', borderRadius: 8,
                            fontSize: 14, fontWeight: 600, textDecoration: 'none',
                        }}>
                            {t('nav.start_planning')}
                        </Link>
                    </>
                )}
            </nav>

            <button
                className="mobile-menu-btn"
                onClick={toggleMobileMenu}
                aria-label={t('nav.toggle_menu')}
                style={{ color: '#2C1F0E' }}
            >
                {isMobileMenuOpen ? '✕' : '☰'}
            </button>

            <nav className={`nav-links-mobile ${isMobileMenuOpen ? 'open' : ''}`} style={{
                background: '#F5EFE0',
                borderTop: '1px solid rgba(0,0,0,0.08)',
            }}>
                <a href="#how-it-works" style={{ color: '#5C4A2A', textDecoration: 'none', fontSize: 15 }} onClick={closeMobileMenu}>{t('nav.how_it_works')}</a>
                <a href="#features" style={{ color: '#5C4A2A', textDecoration: 'none', fontSize: 15 }} onClick={closeMobileMenu}>{t('nav.features')}</a>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <LanguageSwitcher />
                </div>
                {!loading && (user ? (
                    <>
                        <Link href="/wizard" onClick={handleStartPlanning} style={{
                            background: '#5C4A2A', color: '#F5EFE0', padding: '12px 20px',
                            borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: 'none', textAlign: 'center'
                        }}>{t('nav.start_planning')}</Link>
                        <button onClick={handleSignOut} style={{
                            background: 'none', border: '1px solid rgba(92,74,42,0.3)',
                            padding: '10px 16px', borderRadius: 8, fontSize: 14, color: '#8B1A1A', cursor: 'pointer',
                        }}>{t('nav.sign_out')}</button>
                    </>
                ) : (
                    <>
                        <Link href="/auth" onClick={closeMobileMenu} style={{ color: '#5C4A2A', textDecoration: 'none', fontSize: 15 }}>{t('nav.login')}</Link>
                        <Link href="/wizard" onClick={handleStartPlanning} style={{
                            background: '#5C4A2A', color: '#F5EFE0', padding: '12px 20px',
                            borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: 'none', textAlign: 'center'
                        }}>{t('nav.start_planning')}</Link>
                    </>
                ))}
            </nav>
        </header>
    );
}

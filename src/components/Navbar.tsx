'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { user, profile, signOut, loading } = useAuth();
    const router = useRouter();

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    const handleSignOut = async () => {
        await signOut();
        closeMobileMenu();
        router.push('/');
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
            {/* Logo */}
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                <div style={{
                    width: 32,
                    height: 32,
                    background: '#5C4A2A',
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 16,
                    color: '#F5EFE0',
                }}>
                    🌬️
                </div>
                <span style={{ fontWeight: 700, fontSize: 16, color: '#2C1F0E', letterSpacing: '-0.3px' }}>
                    AirSafe Move
                </span>
            </Link>

            {/* Desktop Navigation */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
                <a href="#how-it-works" style={{ color: '#5C4A2A', textDecoration: 'none', fontSize: 15, fontWeight: 500 }}>
                    How it Works
                </a>
                <a href="#features" style={{ color: '#5C4A2A', textDecoration: 'none', fontSize: 15, fontWeight: 500 }}>
                    Features
                </a>
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
                        <Link href="/wizard" style={{
                            background: '#5C4A2A', color: '#F5EFE0',
                            padding: '10px 22px', borderRadius: 8,
                            fontSize: 14, fontWeight: 600, textDecoration: 'none',
                            transition: 'all 0.2s',
                        }}>
                            Start Planning
                        </Link>
                        <button onClick={handleSignOut} style={{
                            background: 'none', border: '1px solid rgba(92,74,42,0.3)',
                            padding: '8px 16px', borderRadius: 8, fontSize: 14,
                            color: '#5C4A2A', cursor: 'pointer', fontWeight: 500,
                        }}>
                            Sign Out
                        </button>
                    </>
                ) : (
                    <>
                        <Link href="/auth" style={{ color: '#5C4A2A', textDecoration: 'none', fontSize: 15, fontWeight: 500 }}>
                            Login
                        </Link>
                        <Link href="/wizard" style={{
                            background: '#5C4A2A', color: '#F5EFE0',
                            padding: '10px 22px', borderRadius: 8,
                            fontSize: 14, fontWeight: 600, textDecoration: 'none',
                        }}>
                            Start Planning
                        </Link>
                    </>
                )}
            </nav>

            {/* Mobile Menu Button */}
            <button
                className="mobile-menu-btn"
                onClick={toggleMobileMenu}
                aria-label="Toggle navigation menu"
                style={{ color: '#2C1F0E' }}
            >
                {isMobileMenuOpen ? '✕' : '☰'}
            </button>

            {/* Mobile Navigation */}
            <nav className={`nav-links-mobile ${isMobileMenuOpen ? 'open' : ''}`} style={{
                background: '#F5EFE0',
                borderTop: '1px solid rgba(0,0,0,0.08)',
            }}>
                <a href="#how-it-works" style={{ color: '#5C4A2A', textDecoration: 'none', fontSize: 15 }} onClick={closeMobileMenu}>How it Works</a>
                <a href="#features" style={{ color: '#5C4A2A', textDecoration: 'none', fontSize: 15 }} onClick={closeMobileMenu}>Features</a>
                {!loading && (user ? (
                    <>
                        <Link href="/wizard" onClick={closeMobileMenu} style={{
                            background: '#5C4A2A', color: '#F5EFE0', padding: '12px 20px',
                            borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: 'none', textAlign: 'center'
                        }}>Start Planning</Link>
                        <button onClick={handleSignOut} style={{
                            background: 'none', border: '1px solid rgba(92,74,42,0.3)',
                            padding: '10px 16px', borderRadius: 8, fontSize: 14, color: '#8B1A1A', cursor: 'pointer',
                        }}>Sign Out</button>
                    </>
                ) : (
                    <>
                        <Link href="/auth" onClick={closeMobileMenu} style={{ color: '#5C4A2A', textDecoration: 'none', fontSize: 15 }}>Login</Link>
                        <Link href="/wizard" onClick={closeMobileMenu} style={{
                            background: '#5C4A2A', color: '#F5EFE0', padding: '12px 20px',
                            borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: 'none', textAlign: 'center'
                        }}>Start Planning</Link>
                    </>
                ))}
            </nav>
        </header>
    );
}

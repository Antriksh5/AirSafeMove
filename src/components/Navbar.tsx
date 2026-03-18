'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Logo from '../app/logo.png'
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { user, profile, signOut, loading } = useAuth();
    const router = useRouter();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const handleSignOut = async () => {
        await signOut();
        closeMobileMenu();
        router.push('/');
    };

    return (
        <header className="nav-header">
            <Link href="/" className="nav-logo" style={{ textDecoration: 'none' }}>
                <div style={{
                    width: 32,
                    height: 32,
                    background: 'linear-gradient(135deg, #fff 0%, #fff 100%)',
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: 16
                }}>
                    <img
                        src={Logo.src}
                        alt="AirSafe Move logo"
                        style={{ width: 20, height: 20, objectFit: 'contain', display: 'block' }}
                    />
                </div>
                <span>AirSafe Move</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="nav-links">
                <a href="#how-it-works" className="nav-link">How it Works</a>
                <a href="#features" className="nav-link">Features</a>
                {loading ? (
                    <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>
                        Loading...
                    </span>
                ) : user ? (
                    <>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                            padding: '6px 14px',
                            borderRadius: 8,
                            backgroundColor: 'rgba(124, 58, 237, 0.15)',
                            border: '1px solid rgba(124, 58, 237, 0.3)',
                        }}>
                            <div style={{
                                width: 28,
                                height: 28,
                                borderRadius: '50%',
                                background: '#7c3aed',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontSize: 12,
                                fontWeight: 700,
                            }}>
                                {(profile?.name || user.email || '?')[0].toUpperCase()}
                            </div>

                            <span style={{ fontSize: 14, fontWeight: 500, color: '#FFFFFF' }}>
                                {profile?.name || user.email?.split('@')[0]}
                            </span>
                        </div>

                        <Link href="/wizard" className="btn-primary" style={{ padding: '10px 20px', fontSize: 14 }}>
                            Start Planning
                        </Link>

                        <button
                            onClick={handleSignOut}
                            id="navbar-signout"
                            style={{
                                background: 'none',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                padding: '8px 16px',
                                borderRadius: 8,
                                fontSize: 14,
                                color: 'rgba(255, 255, 255, 0.7)',
                                cursor: 'pointer',
                                fontWeight: 500,
                                transition: 'all 0.2s',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = '#EF4444';
                                e.currentTarget.style.color = '#EF4444';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                            }}
                        >
                            Sign Out
                        </button>
                    </>
                ) : (
                    <>
                        <Link href="/auth" className="nav-link" style={{ fontWeight: 500 }}>
                            Login
                        </Link>

                        <Link href="/wizard" className="btn-primary" style={{ padding: '10px 20px', fontSize: 14 }}>
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
                aria-expanded={isMobileMenuOpen}
            >
                {isMobileMenuOpen ? '✕' : '☰'}
            </button>

            {/* Mobile Navigation */}
            <nav className={`nav-links-mobile ${isMobileMenuOpen ? 'open' : ''}`}>
                <a href="#how-it-works" className="nav-link" onClick={closeMobileMenu}>How it Works</a>
                <a href="#features" className="nav-link" onClick={closeMobileMenu}>Features</a>
                {!loading && (
                    user ? (
                        <>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8,
                                padding: '8px 0',
                                color: '#FFFFFF',
                                fontSize: 14,
                                fontWeight: 500,
                            }}>
                                <div style={{
                                    width: 28,
                                    height: 28,
                                    borderRadius: '50%',
                                    background: '#7c3aed',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontSize: 12,
                                    fontWeight: 700,
                                }}>
                                    {(profile?.name || user.email || '?')[0].toUpperCase()}
                                </div>
                                {profile?.name || user.email?.split('@')[0]}
                            </div>
                            <Link href="/wizard" className="btn-primary" style={{ padding: '10px 20px', fontSize: 14, textAlign: 'center' }} onClick={closeMobileMenu}>
                                Start Planning
                            </Link>
                            <button
                                onClick={handleSignOut}
                                style={{
                                    background: 'none',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    padding: '10px 16px',
                                    borderRadius: 8,
                                    fontSize: 14,
                                    color: '#EF4444',
                                    cursor: 'pointer',
                                    fontWeight: 500,
                                    textAlign: 'center',
                                }}
                            >
                                Sign Out
                            </button>
                        </>
                    ) : (
                        <>
                            <Link href="/auth" className="nav-link" style={{ fontWeight: 500 }} onClick={closeMobileMenu}>
                                Login
                            </Link>
                            <Link href="/wizard" className="btn-primary" style={{ padding: '10px 20px', fontSize: 14, textAlign: 'center' }} onClick={closeMobileMenu}>
                                Start Planning
                            </Link>
                        </>
                    )
                )}
            </nav>
        </header>
    );
}

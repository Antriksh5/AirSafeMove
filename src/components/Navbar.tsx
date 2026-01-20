'use client';

import Link from 'next/link';
import Logo from '../app/logo.png'
export default function Navbar() {
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
                    <img src={Logo.src} alt="AirSafe Move logo" />
                </div>
                <span>AirSafe Move</span>
            </Link>

            <nav className="nav-links">
                <a href="#how-it-works" className="nav-link">How it Works</a>
                <a href="#features" className="nav-link">Features</a>
                <Link href="/wizard" className="btn-primary" style={{ padding: '10px 20px', fontSize: 14 }}>
                    Start Planning
                </Link>
            </nav>
        </header>
    );
}

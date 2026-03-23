'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '../../context/AuthContext';
import { useEffect } from 'react';
import Navbar from '../../components/Navbar';

export default function AuthPage() {
    const router = useRouter();
    const { signIn, signUp, user, loading } = useAuth();
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    // Redirect if already logged in
    useEffect(() => {
        if (!loading && user) {
            router.push('/wizard');
        }
    }, [loading, user, router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');
        setIsSubmitting(true);

        try {
            if (isSignUp) {
                if (!name.trim()) {
                    setError('Please enter your name');
                    setIsSubmitting(false);
                    return;
                }
                const { error } = await signUp(email, password, name);
                if (error) {
                    setError(error);
                } else {
                    setSuccessMessage('Account created! Check your email for a confirmation link, or sign in directly.');
                    setIsSignUp(false);
                    setPassword('');
                }
            } else {
                const { error } = await signIn(email, password);
                if (error) {
                    setError(error);
                } else {
                    router.push('/wizard');
                }
            }
        } catch {
            setError('An unexpected error occurred');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
        < Navbar />
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            

            {/* Auth Form */}
            <div style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px 16px',
                backgroundColor: '#F5EFE0',
            }}>
                <div className="card" style={{
                    maxWidth: 440,
                    width: '100%',
                    padding: '48px 40px',
                    position: 'relative',
                    overflow: 'hidden',
                }}>
                    {/* Decorative gradient bar */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        background: 'var(--primary-teal)',
                    }} />

                    {/* Icon */}
                    <div style={{ textAlign: 'center', marginBottom: 24 }}>

                        <h1 style={{
                            fontSize: 28,
                            fontWeight: 700,
                            color: 'var(--text-primary)',
                            margin: '0 0 8px 0',
                            fontFamily: 'var(--font-serif)'
                        }}>
                            {isSignUp ? 'Create Account' : 'Welcome Back'}
                        </h1>
                        <p style={{ color: 'var(--text-secondary)', fontSize: 15, margin: 0 }}>
                            {isSignUp
                                ? ''
                                : 'Sign in to access your saved recommendations'}
                        </p>
                    </div>

                    {/* Error/Success Messages */}
                    {error && (
                        <div style={{
                            padding: '12px 16px',
                            borderRadius: 8,
                            backgroundColor: 'rgba(239, 68, 68, 0.08)',
                            border: '1px solid rgba(239, 68, 68, 0.2)',
                            color: '#DC2626',
                            fontSize: 14,
                            marginBottom: 20,
                        }}>
                            ⚠️ {error}
                        </div>
                    )}
                    {successMessage && (
                        <div style={{
                            padding: '12px 16px',
                            borderRadius: 8,
                            backgroundColor: 'rgba(16, 185, 129, 0.08)',
                            border: '1px solid rgba(16, 185, 129, 0.2)',
                            color: '#059669',
                            fontSize: 14,
                            marginBottom: 20,
                        }}>
                            ✅ {successMessage}
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit}>
                        {isSignUp && (
                            <div style={{ marginBottom: 20 }}>
                                <label style={{
                                    display: 'block',
                                    fontWeight: 600,
                                    marginBottom: 8,
                                    color: 'var(--text-primary)',
                                    fontSize: 14,
                                }}>
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="Enter your full name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    id="auth-name"
                                />
                            </div>
                        )}

                        <div style={{ marginBottom: 20 }}>
                            <label style={{
                                display: 'block',
                                fontWeight: 600,
                                marginBottom: 8,
                                color: 'var(--text-primary)',
                                fontSize: 14,
                            }}>
                                Email Address
                            </label>
                            <input
                                type="email"
                                className="form-input"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                id="auth-email"
                            />
                        </div>

                        <div style={{ marginBottom: 28 }}>
                            <label style={{
                                display: 'block',
                                fontWeight: 600,
                                marginBottom: 8,
                                color: 'var(--text-primary)',
                                fontSize: 14,
                            }}>
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-input"
                                placeholder={isSignUp ? 'Create a strong password' : 'Enter your password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                minLength={6}
                                id="auth-password"
                            />
                        </div>

                            <div style={{justifyContent: 'center', display: 'flex'}}>
                        <button
                            type="submit"
                            className="btn-primary"
                            disabled={isSubmitting}
                            id="auth-submit"
                            style={{
                                justifyContent: 'center',
                                display: 'flex',
                                width: '9rem',
                                padding: '14px 12px',
                                fontSize: 16,
                                fontWeight: 600,
                                opacity: isSubmitting ? 0.7 : 1,
                                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                            }}
                        >
                            {isSubmitting
                                ? '⏳ Processing...'
                                : isSignUp
                                    ? 'Create Account'
                                    : 'Sign In'}
                        </button>
                    </div>
                    </form>
                    {/* Toggle */}
                    <div style={{
                        textAlign: 'center',
                        marginTop: 24,
                        paddingTop: 24,
                        borderTop: '1px solid var(--glass-border)',
                    }}>
                        <p style={{ color: 'var(--text-secondary)', fontSize: 14, margin: 0 }}>
                            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                            
                            <button
                                type="button"
                                onClick={() => {
                                    setIsSignUp(!isSignUp);
                                    setError('');
                                    setSuccessMessage('');
                                }}
                                id="auth-toggle"
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: 'var(--primary-teal)',
                                    justifyContent: 'center',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    fontSize: 14,
                                    textDecoration: 'underline',
                                    textUnderlineOffset: 2,
                                }}
                            >
                                {isSignUp ? 'Sign In' : 'Create Account'}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

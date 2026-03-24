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
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            

            {/* Auth Form */}
            <div className="flex-1 flex items-center justify-center py-10 px-4 bg-[#F5EFE0]">
                <div className="card max-w-[440px] w-full py-12 px-10 relative overflow-hidden">
                    {/* Decorative gradient bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--primary-teal)]" />

                    {/* Icon */}
                    <div className="text-center mb-6">

                        <h1 className="text-[28px] font-bold text-[var(--text-primary)] mb-2 font-[var(--font-serif)]">
                            {isSignUp ? 'Create Account' : 'Welcome Back'}
                        </h1>
                        <p className="text-[var(--text-secondary)] text-[15px] m-0">
                            {isSignUp
                                ? ''
                                : 'Sign in to access your saved recommendations'}
                        </p>
                    </div>

                    {/* Error/Success Messages */}
                    {error && (
                        <div className="px-4 py-3 rounded-lg bg-[rgba(239,68,68,0.08)] border border-[rgba(239,68,68,0.2)] text-[#DC2626] text-[14px] mb-5">
                            ⚠️ {error}
                        </div>
                    )}
                    {successMessage && (
                        <div className="px-4 py-3 rounded-lg bg-[rgba(16,185,129,0.08)] border border-[rgba(16,185,129,0.2)] text-[#059669] text-[14px] mb-5">
                            ✅ {successMessage}
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit}>
                        {isSignUp && (
                            <div className="mb-5">
                                <label className="block font-semibold mb-2 text-[var(--text-primary)] text-[14px]">
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

                        <div className="mb-5">
                            <label className="block font-semibold mb-2 text-[var(--text-primary)] text-[14px]">
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

                        <div className="mb-7">
                            <label className="block font-semibold mb-2 text-[var(--text-primary)] text-[14px]">
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

                            <div className="flex justify-center">
                        <button
                            type="submit"
                            className={`btn-primary flex justify-center w-[9rem] py-[14px] px-3 text-[16px] font-semibold ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
                            disabled={isSubmitting}
                            id="auth-submit"
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
                    <div className="text-center mt-6 pt-6 border-t border-[var(--glass-border)]">
                        <p className="text-[var(--text-secondary)] text-[14px] m-0">
                            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                            
                            <button
                                type="button"
                                onClick={() => {
                                    setIsSignUp(!isSignUp);
                                    setError('');
                                    setSuccessMessage('');
                                }}
                                id="auth-toggle"
                                className="bg-transparent border-none text-[var(--primary-teal)] font-semibold cursor-pointer text-[14px] underline underline-offset-2"
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

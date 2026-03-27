'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';
import { useAuth } from '../../context/AuthContext';
import { useTranslation } from '../../hooks/useTranslation';
import { resetPlanningSession } from '../../lib/session';

export default function AuthPage() {
    const router = useRouter();
    const { signIn, signUp, user, loading } = useAuth();
    const { t } = useTranslation();
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        if (!loading && user) {
            resetPlanningSession();
            router.push('/wizard');
        }
    }, [loading, router, user]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setError('');
        setSuccessMessage('');
        setIsSubmitting(true);

        try {
            if (isSignUp) {
                if (!name.trim()) {
                    setError(t('auth.please_enter_name'));
                    setIsSubmitting(false);
                    return;
                }

                const { error: signUpError } = await signUp(email, password, name);
                if (signUpError) {
                    setError(signUpError);
                } else {
                    setSuccessMessage(t('auth.account_created'));
                    setIsSignUp(false);
                    setPassword('');
                }
            } else {
                const { error: signInError } = await signIn(email, password);
                if (signInError) {
                    setError(signInError);
                } else {
                    resetPlanningSession();
                    router.push('/wizard');
                }
            }
        } catch {
            setError(t('auth.unexpected_error'));
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen flex flex-col">
                <div className="flex-1 flex items-center justify-center py-10 px-4 bg-[#F5EFE0]">
                    <div className="card max-w-[440px] w-full py-12 px-10 relative overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--primary-teal)]" />

                        <div className="text-center mb-6">
                            <h1 className="text-[28px] font-bold text-[var(--text-primary)] mb-2 font-[var(--font-serif)]">
                                {isSignUp ? t('auth.create_account') : t('auth.welcome_back')}
                            </h1>
                            <p className="text-[var(--text-secondary)] text-[15px] m-0">
                                {isSignUp ? '' : t('auth.sign_in_saved_recommendations')}
                            </p>
                        </div>

                        {error && (
                            <div className="px-4 py-3 rounded-lg bg-[rgba(239,68,68,0.08)] border border-[rgba(239,68,68,0.2)] text-[#DC2626] text-[14px] mb-5">
                                {error}
                            </div>
                        )}

                        {successMessage && (
                            <div className="px-4 py-3 rounded-lg bg-[rgba(16,185,129,0.08)] border border-[rgba(16,185,129,0.2)] text-[#059669] text-[14px] mb-5">
                                {successMessage}
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            {isSignUp && (
                                <div className="mb-5">
                                    <label className="block font-semibold mb-2 text-[var(--text-primary)] text-[14px]">
                                        {t('auth.full_name')}
                                    </label>
                                    <input
                                        type="text"
                                        className="form-input"
                                        placeholder={t('auth.full_name_placeholder')}
                                        value={name}
                                        onChange={(event) => setName(event.target.value)}
                                        required
                                        id="auth-name"
                                    />
                                </div>
                            )}

                            <div className="mb-5">
                                <label className="block font-semibold mb-2 text-[var(--text-primary)] text-[14px]">
                                    {t('auth.email_address')}
                                </label>
                                <input
                                    type="email"
                                    className="form-input"
                                    placeholder={t('auth.email_placeholder')}
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    required
                                    id="auth-email"
                                />
                            </div>

                            <div className="mb-7">
                                <label className="block font-semibold mb-2 text-[var(--text-primary)] text-[14px]">
                                    {t('auth.password')}
                                </label>
                                <input
                                    type="password"
                                    className="form-input"
                                    placeholder={isSignUp ? t('auth.password_create_placeholder') : t('auth.password_signin_placeholder')}
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
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
                                        ? t('auth.processing')
                                        : isSignUp
                                            ? t('auth.create_account')
                                            : t('auth.sign_in')}
                                </button>
                            </div>
                        </form>

                        <div className="text-center mt-6 pt-6 border-t border-[var(--glass-border)]">
                            <p className="text-[var(--text-secondary)] text-[14px] m-0">
                                {isSignUp ? t('auth.already_have_account') : t('auth.dont_have_account')}{' '}
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
                                    {isSignUp ? t('auth.sign_in') : t('auth.create_account')}
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

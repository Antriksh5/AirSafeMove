'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';

export interface Profile {
    id: string;
    name: string | null;
    age: number | null;
    profession: string | null;
    current_city: string | null;
    max_distance_km: number | null;
    monthly_budget: number | null;
    family_type: string | null;
    total_members: number | null;
    children: number | null;
    elderly: number | null;
    health_conditions: string[] | null;
}

interface AuthContextType {
    user: User | null;
    session: Session | null;
    profile: Profile | null;
    loading: boolean;
    signUp: (email: string, password: string, name: string) => Promise<{ error: string | null }>;
    signIn: (email: string, password: string) => Promise<{ error: string | null }>;
    signOut: () => Promise<void>;
    refreshProfile: () => Promise<void>;
    updateProfile: (updates: { name?: string; profession?: string }) => Promise<{ error: string | null }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [session, setSession] = useState<Session | null>(null);
    const [profile, setProfile] = useState<Profile | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchProfile = async (userId: string) => {
        const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', userId)
            .single();

        if (!error && data) {
            setProfile(data as Profile);
        } else {
            setProfile(null);
        }
    };

    const refreshProfile = async () => {
        if (user) {
            await fetchProfile(user.id);
        }
    };

    const updateProfile = async (updates: { name?: string; profession?: string }) => {
        if (!user) {
            return { error: 'Not authenticated' };
        }

        const { data, error } = await supabase
            .from('profiles')
            .update(updates)
            .eq('id', user.id)
            .select()
            .single();

        if (error) {
            console.error('Error updating profile:', error);
            return { error: error.message };
        }

        if (data) {
            setProfile(prev => {
                if (!prev) return data as Profile;
                return { ...prev, ...updates } as Profile;
            });
        }

        return { error: null };
    };

    useEffect(() => {
        // Use onAuthStateChange as the single source of truth for session state.
        // It fires INITIAL_SESSION on setup, so a separate getSession() call is
        // unnecessary and was causing a race condition where loading/user would
        // flip twice, making the Login button appear inconsistently.
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                setSession(session);
                setUser(session?.user ?? null);
                if (session?.user) {
                    await fetchProfile(session.user.id);
                } else {
                    setProfile(null);
                }
                setLoading(false);
            }
        );

        return () => subscription.unsubscribe();
    }, []);

    const signUp = async (email: string, password: string, name: string) => {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) return { error: error.message };

        // Create a profile row for the new user
        if (data.user) {
            const { error: profileError } = await supabase
                .from('profiles')
                .insert({ id: data.user.id, name });

            if (profileError) {
                console.error('Error creating profile:', profileError);
            }
        }

        return { error: null };
    };

    const signIn = async (email: string, password: string) => {
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) return { error: error.message };
        return { error: null };
    };

    const signOut = async () => {
        await supabase.auth.signOut();
        setUser(null);
        setSession(null);
        setProfile(null);
    };

    return (
        <AuthContext.Provider value={{
            user,
            session,
            profile,
            loading,
            signUp,
            signIn,
            signOut,
            refreshProfile,
            updateProfile,
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

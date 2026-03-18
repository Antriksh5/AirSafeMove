'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut as firebaseSignOut,
    User,
    getIdToken
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';

export interface Profile {
    id: string;
    name: string | null;
    profession: string | null;
    // ... other fields matching your backend schemas
}

interface AuthContextType {
    user: User | null;
    profile: Profile | null;
    loading: boolean;
    token: string | null; // Added this to send to FastAPI
    signUp: (email: string, password: string, name: string) => Promise<{ error: string | null }>;
    signIn: (email: string, password: string) => Promise<{ error: string | null }>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [profile, setProfile] = useState<Profile | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                setUser(firebaseUser);
                const jwt = await getIdToken(firebaseUser);
                setToken(jwt);
                
                // Fetch profile from Firestore (Migrated from Supabase)
                const docRef = doc(db, "profiles", firebaseUser.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setProfile(docSnap.data() as Profile);
                }
            } else {
                setUser(null);
                setToken(null);
                setProfile(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const signUp = async (email: string, password: string, name: string) => {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            // Create profile in Firestore immediately
            await setDoc(doc(db, "profiles", res.user.uid), {
                id: res.user.uid,
                name: name,
                created_at: new Date().toISOString()
            });
            return { error: null };
        } catch (err: any) {
            return { error: err.message };
        }
    };

    const signIn = async (email: string, password: string) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            return { error: null };
        } catch (err: any) {
            return { error: err.message };
        }
    };

    const signOut = async () => {
        await firebaseSignOut(auth);
    };

    return (
        <AuthContext.Provider value={{ user, profile, loading, token, signUp, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext)!;
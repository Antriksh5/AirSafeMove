module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/AirSafeMove/src/lib/supabase.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/@supabase/supabase-js/dist/index.mjs [app-ssr] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://eojrcnwnirkqhmgkuwnm.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVvanJjbnduaXJrcWhtZ2t1d25tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM0NjYwMzQsImV4cCI6MjA4OTA0MjAzNH0.EO18kWW5pWO0HqTpzsKaEzSz5s8Qsks6G3ru1HFKzJY");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
}),
"[project]/AirSafeMove/src/context/AuthContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/lib/supabase.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider({ children }) {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const fetchProfile = async (userId)=>{
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('profiles').select('*').eq('id', userId).single();
        if (!error && data) {
            setProfile(data);
        } else {
            setProfile(null);
        }
    };
    const refreshProfile = async ()=>{
        if (user) {
            await fetchProfile(user.id);
        }
    };
    const updateProfile = async (updates)=>{
        if (!user) {
            return {
                error: 'Not authenticated'
            };
        }
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('profiles').update(updates).eq('id', user.id).select().single();
        if (error) {
            console.error('Error updating profile:', error);
            return {
                error: error.message
            };
        }
        if (data) {
            setProfile((prev)=>{
                if (!prev) return data;
                return {
                    ...prev,
                    ...updates
                };
            });
        }
        return {
            error: null
        };
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Use onAuthStateChange as the single source of truth for session state.
        // It fires INITIAL_SESSION on setup, so a separate getSession() call is
        // unnecessary and was causing a race condition where loading/user would
        // flip twice, making the Login button appear inconsistently.
        const { data: { subscription } } = __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.onAuthStateChange(async (event, session)=>{
            setSession(session);
            setUser(session?.user ?? null);
            setLoading(false);
            if (session?.user) {
                await fetchProfile(session.user.id);
            } else {
                setProfile(null);
            }
        });
        return ()=>subscription.unsubscribe();
    }, []);
    const signUp = async (email, password, name)=>{
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.signUp({
            email,
            password
        });
        if (error) return {
            error: error.message
        };
        // Create a profile row for the new user
        if (data.user) {
            const { error: profileError } = await __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('profiles').insert({
                id: data.user.id,
                name
            });
            if (profileError) {
                console.error('Error creating profile:', profileError);
            }
        }
        return {
            error: null
        };
    };
    const signIn = async (email, password)=>{
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.signInWithPassword({
            email,
            password
        });
        if (error) return {
            error: error.message
        };
        return {
            error: null
        };
    };
    const signOut = async ()=>{
        try {
            // Clear local state first so UI updates immediately
            setUser(null);
            setSession(null);
            setProfile(null);
            // Then sign out from Supabase
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
            if (error) {
                console.error('Sign out error:', error.message);
            }
        } catch (err) {
            console.error('Sign out exception:', err);
            // Still ensure state is cleared even if API call fails
            setUser(null);
            setSession(null);
            setProfile(null);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            session,
            profile,
            loading,
            signUp,
            signIn,
            signOut,
            refreshProfile,
            updateProfile
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/AirSafeMove/src/context/AuthContext.tsx",
        lineNumber: 164,
        columnNumber: 9
    }, this);
}
function useAuth() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
}),
"[project]/AirSafeMove/src/components/VideoBackground.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VideoBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function VideoBackground() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                autoPlay: true,
                loop: true,
                muted: true,
                playsInline: true,
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: -2
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                    src: "/bg-video.mp4",
                    type: "video/mp4"
                }, void 0, false, {
                    fileName: "[project]/AirSafeMove/src/components/VideoBackground.tsx",
                    lineNumber: 22,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/AirSafeMove/src/components/VideoBackground.tsx",
                lineNumber: 7,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.65) 0%, rgba(15, 23, 42, 0.75) 100%)',
                    zIndex: -1
                }
            }, void 0, false, {
                fileName: "[project]/AirSafeMove/src/components/VideoBackground.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9a435c2f._.js.map
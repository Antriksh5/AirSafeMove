module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/AirSafeMove/src/lib/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Backend API base URL
// export const API_BASE_URL = (process.env.NEXT_PUBLIC_API_URL || 'https://fastapi-backend-44079236102.asia-south1.run.app').replace(/\/$/, '');
// Temporarily force local backend for testing
__turbopack_context__.s([
    "API_BASE_URL",
    ()=>API_BASE_URL,
    "deleteSavedRecommendation",
    ()=>deleteSavedRecommendation,
    "fetchCities",
    ()=>fetchCities,
    "fetchCityDescription",
    ()=>fetchCityDescription,
    "fetchCityNames",
    ()=>fetchCityNames,
    "fetchProfessions",
    ()=>fetchProfessions,
    "fetchSavedRecommendations",
    ()=>fetchSavedRecommendations,
    "getAdvisory",
    ()=>getAdvisory,
    "getRecommendations",
    ()=>getRecommendations,
    "saveRecommendation",
    ()=>saveRecommendation
]);
const API_BASE_URL = 'http://127.0.0.1:8000';
async function fetchCities() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/cities/`);
        if (!response.ok) throw new Error('Failed to fetch cities');
        return response.json();
    } catch (error) {
        console.error('Error fetching cities:', error);
        return defaultCities;
    }
}
async function fetchCityNames() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/cities/names`);
        if (!response.ok) throw new Error('Failed to fetch city names');
        return response.json();
    } catch (error) {
        console.error('Error fetching city names:', error);
        return defaultCityNames;
    }
}
async function fetchProfessions() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/cities/professions`);
        if (!response.ok) throw new Error('Failed to fetch professions');
        return response.json();
    } catch (error) {
        console.error('Error fetching professions:', error);
        return defaultProfessions;
    }
}
async function fetchCityDescription(cityName, hasChildren = false, hasElderly = false) {
    try {
        const params = new URLSearchParams({
            has_children: hasChildren.toString(),
            has_elderly: hasElderly.toString()
        });
        const url = `${API_BASE_URL}/api/cities/description/${encodeURIComponent(cityName)}?${params}`;
        console.log(`Fetching city description from: ${url}`);
        const response = await fetch(url);
        if (!response.ok) {
            console.error(`fetchCityDescription failed with status: ${response.status}`);
            throw new Error(`Failed to fetch city description (Status: ${response.status})`);
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching city description:', error);
        throw error;
    }
}
async function getAdvisory(userName, age, profession, currentCity, currentAqi, familyType, totalMembers, children, elderly, healthConditions, recommendations, readinessScore, healthUrgency) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/advisory/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_name: userName,
                age,
                profession,
                current_city: currentCity,
                current_aqi: currentAqi,
                family_type: familyType,
                total_members: totalMembers,
                children,
                elderly,
                health_conditions: healthConditions,
                top_recommendations: recommendations,
                readiness_score: readinessScore,
                health_urgency: healthUrgency
            })
        });
        if (!response.ok) throw new Error('Failed to get advisory');
        return response.json();
    } catch (error) {
        console.error('Error getting advisory:', error);
        return {
            advisory: getMockAdvisory(userName, recommendations[0]),
            generated: false
        };
    }
}
async function getRecommendations(request, token// Added token
) {
    try {
        const headers = {
            'Content-Type': 'application/json'
        };
        // Include token if available (Backend will now require it for authenticated users)
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        const response = await fetch(`${API_BASE_URL}/api/recommendations/`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(request)
        });
        if (!response.ok) throw new Error('Failed to get recommendations');
        return response.json();
    } catch (error) {
        console.error('Error getting recommendations:', error);
        return getMockRecommendations(request);
    }
}
async function fetchSavedRecommendations(userId, token) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/user/saved?user_id=${encodeURIComponent(userId)}`, {
            headers: {
                'Authorization': `Bearer ${token}` // Required for backend Step 3
            }
        });
        if (!response.ok) {
            console.error(`fetchSavedRecommendations returned status: ${response.status}`);
            return [];
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching saved:', error);
        return [];
    }
}
async function saveRecommendation(data, token// Added token
) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/user/saved`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Required for backend Step 3
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            const errText = await response.text();
            console.error(`Save failed with status ${response.status}:`, errText);
            throw new Error(`Failed to save recommendation: ${response.status} - ${errText}`);
        }
        return response.json();
    } catch (error) {
        console.error('Error saving recommendation:', error);
        throw error;
    }
}
async function deleteSavedRecommendation(savedId, userId, token// Added token
) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/user/saved/${encodeURIComponent(savedId)}?user_id=${encodeURIComponent(userId)}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}` // Required for backend Step 3
            }
        });
        return response.ok;
    } catch (error) {
        console.error('Error deleting saved recommendation:', error);
        return false;
    }
}
// Default data for fallback
const defaultCityNames = [
    'Delhi',
    'Mumbai',
    'Bangalore',
    'Chennai',
    'Kolkata',
    'Hyderabad',
    'Pune',
    'Ahmedabad',
    'Jaipur',
    'Lucknow',
    'Shimla',
    'Dehradun',
    'Coimbatore',
    'Mysore',
    'Kochi',
    'Thiruvananthapuram',
    'Chandigarh',
    'Goa (Panaji)',
    'Visakhapatnam',
    'Indore',
    'Bhopal',
    'Nagpur',
    'Vadodara',
    'Surat',
    'Mangalore',
    'Pondicherry'
];
const defaultProfessions = [
    'IT/Software',
    'Healthcare',
    'Finance',
    'Education',
    'Manufacturing',
    'Government',
    'Retail',
    'Hospitality',
    'Media',
    'Legal',
    'Engineering',
    'Research',
    'Other'
];
const defaultCities = [
    {
        city_name: 'Delhi',
        state: 'Delhi',
        current_aqi: 285,
        avg_aqi_5yr: 268.5,
        aqi_trend: 'stable',
        avg_rent: 25000,
        job_score: 92,
        healthcare_score: 88
    },
    {
        city_name: 'Shimla',
        state: 'Himachal Pradesh',
        current_aqi: 48,
        avg_aqi_5yr: 52.3,
        aqi_trend: 'stable',
        avg_rent: 15000,
        job_score: 45,
        healthcare_score: 68
    }
];
// Mock data generators
function getMockRecommendations(request) {
    const currentCityAqi = getCityAqi(request.current_city);
    return {
        recommendations: [
            {
                city_name: 'Shimla',
                state: 'Himachal Pradesh',
                suitability_score: 87.5,
                aqi_improvement_percent: 83.2,
                respiratory_risk_reduction: 35.4,
                life_expectancy_gain_years: 2.1,
                distance_km: 320,
                avg_rent: 15000,
                job_match_score: 45,
                current_aqi: currentCityAqi,
                target_aqi: 48,
                healthcare_score: 68,
                aqi_trend: 'stable'
            },
            {
                city_name: 'Dehradun',
                state: 'Uttarakhand',
                suitability_score: 82.3,
                aqi_improvement_percent: 74.7,
                respiratory_risk_reduction: 28.2,
                life_expectancy_gain_years: 1.8,
                distance_km: 250,
                avg_rent: 14000,
                job_match_score: 55,
                current_aqi: currentCityAqi,
                target_aqi: 72,
                healthcare_score: 72,
                aqi_trend: 'improving'
            },
            {
                city_name: 'Mysore',
                state: 'Karnataka',
                suitability_score: 78.9,
                aqi_improvement_percent: 81.8,
                respiratory_risk_reduction: 32.1,
                life_expectancy_gain_years: 1.9,
                distance_km: 1980,
                avg_rent: 10000,
                job_match_score: 62,
                current_aqi: currentCityAqi,
                target_aqi: 52,
                healthcare_score: 78,
                aqi_trend: 'stable'
            },
            {
                city_name: 'Kochi',
                state: 'Kerala',
                suitability_score: 76.4,
                aqi_improvement_percent: 80.7,
                respiratory_risk_reduction: 30.5,
                life_expectancy_gain_years: 1.8,
                distance_km: 2100,
                avg_rent: 14000,
                job_match_score: 72,
                current_aqi: currentCityAqi,
                target_aqi: 55,
                healthcare_score: 90,
                aqi_trend: 'stable'
            },
            {
                city_name: 'Coimbatore',
                state: 'Tamil Nadu',
                suitability_score: 74.2,
                aqi_improvement_percent: 79.6,
                respiratory_risk_reduction: 29.8,
                life_expectancy_gain_years: 1.7,
                distance_km: 2050,
                avg_rent: 12000,
                job_match_score: 75,
                current_aqi: currentCityAqi,
                target_aqi: 58,
                healthcare_score: 85,
                aqi_trend: 'stable'
            }
        ],
        current_aqi: currentCityAqi,
        readiness_score: 72.5,
        health_urgency: 68.3,
        health_sensitivity: 55.0
    };
}
function getCityAqi(cityName) {
    const aqiMap = {
        'Delhi': 285,
        'Mumbai': 156,
        'Bangalore': 89,
        'Chennai': 78,
        'Kolkata': 168,
        'Hyderabad': 95,
        'Pune': 112,
        'Ahmedabad': 142,
        'Jaipur': 165,
        'Lucknow': 225
    };
    return aqiMap[cityName] || 150;
}
function getMockAdvisory(userName, topRec) {
    return `Dear ${userName},

Based on our comprehensive AI analysis, we strongly recommend considering migration from your current city to ${topRec.city_name}, ${topRec.state}.

This move offers a remarkable ${topRec.aqi_improvement_percent.toFixed(1)}% improvement in air quality, which translates to an estimated ${topRec.respiratory_risk_reduction.toFixed(1)}% reduction in respiratory health risks and a potential life expectancy gain of ${topRec.life_expectancy_gain_years} years based on epidemiological research.

The city is approximately ${topRec.distance_km.toFixed(0)} km from your current location with average monthly rent around ₹${topRec.avg_rent.toLocaleString()}.

We encourage you to visit ${topRec.city_name} to explore neighborhoods and job opportunities before making your final decision. Your family's health is an investment worth making.

Wishing you cleaner air and better health!`;
}
}),
"[project]/AirSafeMove/src/app/results/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResultsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/lib/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/context/AuthContext.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function getAqiColor(aqi) {
    if (aqi <= 50) return '#22C55E';
    if (aqi <= 100) return '#EAB308';
    if (aqi <= 150) return '#F97316';
    return '#EF4444';
}
function getAqiCategory(aqi) {
    if (aqi <= 50) return 'Good';
    if (aqi <= 100) return 'Moderate';
    if (aqi <= 150) return 'Unhealthy for Sensitive';
    if (aqi <= 200) return 'Unhealthy';
    if (aqi <= 300) return 'Very Unhealthy';
    return 'Hazardous';
}
function ScoreBar({ score, maxScore = 10, color }) {
    const percentage = score / maxScore * 100;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            width: '100%'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    height: 8,
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    borderRadius: 4,
                    overflow: 'hidden'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: `${percentage}%`,
                        height: '100%',
                        backgroundColor: color,
                        borderRadius: 4,
                        transition: 'width 0.3s ease'
                    }
                }, void 0, false, {
                    fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                    lineNumber: 71,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                lineNumber: 64,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontWeight: 600,
                    color,
                    minWidth: 40
                },
                children: [
                    score,
                    "/",
                    maxScore
                ]
            }, void 0, true, {
                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                lineNumber: 79,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
        lineNumber: 63,
        columnNumber: 9
    }, this);
}
function ResultsPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user, token, loading: authLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])(); // Extracted token for API calls
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedCity, setSelectedCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cityDescription, setCityDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoadingDescription, setIsLoadingDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [descriptionError, setDescriptionError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('security');
    const [savingCity, setSavingCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [savedCities, setSavedCities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [savedRecommendations, setSavedRecommendations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Protect route: redirect if not authenticated
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!authLoading && !user) {
            router.push('/auth');
        }
    }, [
        authLoading,
        user,
        router
    ]);
    // Load saved recommendations using Firebase UID and Token
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Wait until BOTH the user and the token are loaded
        if (!user || !token) return;
        const loadSaved = async ()=>{
            try {
                // Pass the token here
                const saved = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchSavedRecommendations"])(user.uid, token);
                setSavedRecommendations(saved);
                setSavedCities(new Set(saved.map((item)=>item.target_city)));
            } catch (error) {
                console.error('Error loading saved recommendations:', error);
            }
        };
        loadSaved();
    }, [
        user,
        token
    ]); // Add token to dependency array
    const handleSaveRecommendation = async (rec)=>{
        if (!user || !token) return;
        setSavingCity(rec.city_name);
        try {
            const inserted = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveRecommendation"])({
                user_id: user.uid,
                target_city: rec.city_name,
                target_state: rec.state,
                current_aqi: rec.current_aqi,
                target_aqi: rec.target_aqi,
                aqi_improvement_percent: rec.aqi_improvement_percent,
                suitability_score: rec.suitability_score,
                advisory_text: data?.advisory || null
            }, token); // Pass the auth token
            if (inserted) {
                setSavedCities((prev)=>new Set(prev).add(rec.city_name));
                setSavedRecommendations((prev)=>[
                        inserted,
                        ...prev
                    ]);
            } else {
                console.error('Error saving recommendation');
                alert('Database Error: Could not save recommendation. Check server logs.');
            }
        } catch (err) {
            console.error('Error saving:', err);
            alert('Unexpected Error: ' + err.message);
        } finally{
            setSavingCity(null);
        }
    };
    const handleRemoveSaved = async (savedId, targetCity)=>{
        if (!user || !token) return;
        try {
            const success = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteSavedRecommendation"])(savedId, user.uid, token);
            if (success) {
                setSavedRecommendations((prev)=>prev.filter((item)=>item.id !== savedId));
                setSavedCities((prev)=>{
                    const next = new Set(prev);
                    next.delete(targetCity);
                    return next;
                });
            } else {
                console.error('Failed to remove saved recommendation');
            }
        } catch (error) {
            console.error('Error removing saved recommendation:', error);
        }
    };
    const handleCityClick = async (rec)=>{
        setSelectedCity(rec);
        setCityDescription(null);
        setDescriptionError(false);
        setIsLoadingDescription(true);
        setActiveTab('security');
        try {
            const description = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchCityDescription"])(rec.city_name, data?.familyHealth.children ? data.familyHealth.children > 0 : false, data?.familyHealth.elderly ? data.familyHealth.elderly > 0 : false);
            setCityDescription(description);
        } catch (error) {
            console.error('Failed to load city description:', error);
            setDescriptionError(true);
        } finally{
            setIsLoadingDescription(false);
        }
    };
    const closeModal = ()=>{
        setSelectedCity(null);
        setCityDescription(null);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (authLoading) return;
        if (!user) return;
        const storedData = sessionStorage.getItem('airsafe_results');
        if (storedData) {
            setData(JSON.parse(storedData));
        } else {
            router.push('/wizard');
        }
    }, [
        router,
        authLoading,
        user
    ]);
    if (authLoading || !data) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'transparent'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "loading-pulse",
                style: {
                    color: 'rgba(255,255,255,0.7)'
                },
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                lineNumber: 219,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
            lineNumber: 212,
            columnNumber: 13
        }, this);
    }
    const topRec = data.recommendations[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: '100vh'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "nav-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "nav-logo",
                        style: {
                            textDecoration: 'none'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 32,
                                    height: 32,
                                    background: '#7c3aed',
                                    borderRadius: 8,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontSize: 16
                                },
                                children: "🌬️"
                            }, void 0, false, {
                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                lineNumber: 230,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "AirSafe Move"
                            }, void 0, false, {
                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                lineNumber: 243,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                        lineNumber: 229,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/wizard",
                        className: "btn-secondary",
                        children: "← New Assessment"
                    }, void 0, false, {
                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                        lineNumber: 245,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                lineNumber: 228,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "results-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            marginBottom: 40
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "badge badge-teal",
                                style: {
                                    marginBottom: 16
                                },
                                children: "✓ AI Analysis"
                            }, void 0, false, {
                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                lineNumber: 252,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "results-title",
                                children: "Migration Readiness Report"
                            }, void 0, false, {
                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                lineNumber: 255,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: 'rgba(255,255,255,0.6)'
                                },
                                children: [
                                    "Personalized recommendations for ",
                                    data.userName
                                ]
                            }, void 0, true, {
                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                lineNumber: 258,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                        lineNumber: 251,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card",
                        style: {
                            marginBottom: 24,
                            padding: 32
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "score-grid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "score-value",
                                            style: {
                                                color: '#7c3aed'
                                            },
                                            children: [
                                                data.readiness_score.toFixed(0),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                            lineNumber: 266,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                color: 'rgba(255,255,255,0.6)',
                                                fontSize: 14
                                            },
                                            children: "Migration Readiness"
                                        }, void 0, false, {
                                            fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                            lineNumber: 269,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                    lineNumber: 265,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "score-value",
                                            style: {
                                                color: getAqiColor(data.current_aqi)
                                            },
                                            children: data.current_aqi
                                        }, void 0, false, {
                                            fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                            lineNumber: 272,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                color: 'rgba(255,255,255,0.6)',
                                                fontSize: 14
                                            },
                                            children: [
                                                "Current AQI (",
                                                data.location.currentCity,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                            lineNumber: 275,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                    lineNumber: 271,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "score-value",
                                            style: {
                                                color: '#FFFFFF'
                                            },
                                            children: [
                                                topRec.aqi_improvement_percent.toFixed(0),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                            lineNumber: 278,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                color: 'rgba(255,255,255,0.6)',
                                                fontSize: 14
                                            },
                                            children: "Max AQI Improvement"
                                        }, void 0, false, {
                                            fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                            lineNumber: 281,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                    lineNumber: 277,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "score-value",
                                            style: {
                                                color: '#7c3aed'
                                            },
                                            children: [
                                                "+",
                                                topRec.life_expectancy_gain_years
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                            lineNumber: 284,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                color: 'rgba(255,255,255,0.6)',
                                                fontSize: 14
                                            },
                                            children: "Life Expectancy Gain (Years)"
                                        }, void 0, false, {
                                            fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                            lineNumber: 287,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                    lineNumber: 283,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                            lineNumber: 264,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                        lineNumber: 263,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: 24,
                            fontWeight: 600,
                            color: '#FFFFFF',
                            marginBottom: 16
                        },
                        children: "Top 5 Recommended Cities"
                    }, void 0, false, {
                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                        lineNumber: 292,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 16,
                            marginBottom: 32
                        },
                        children: data.recommendations.map((rec, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `recommendation-card ${index === 0 ? 'top' : ''}`,
                                onClick: ()=>handleCityClick(rec),
                                style: {
                                    cursor: 'pointer'
                                },
                                title: "Click to view detailed city information",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rec-card-content",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: 40,
                                                    height: 40,
                                                    borderRadius: 8,
                                                    background: index === 0 ? '#7c3aed' : 'rgba(255,255,255,0.1)',
                                                    color: index === 0 ? 'white' : 'rgba(255,255,255,0.6)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontWeight: 700,
                                                    fontSize: 16
                                                },
                                                children: [
                                                    "#",
                                                    index + 1
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                lineNumber: 306,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    gap: 4,
                                                    minWidth: 56
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: 48,
                                                            height: 48,
                                                            borderRadius: 8,
                                                            background: getAqiColor(rec.target_aqi),
                                                            color: 'white',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            fontWeight: 700,
                                                            fontSize: 16
                                                        },
                                                        children: rec.target_aqi
                                                    }, void 0, false, {
                                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                        lineNumber: 328,
                                                        columnNumber: 37
                                                    }, this),
                                                    rec.live_aqi != null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            textAlign: 'center'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 10,
                                                                    fontWeight: 700,
                                                                    color: '#7c3aed',
                                                                    lineHeight: 1.2,
                                                                    letterSpacing: '0.02em'
                                                                },
                                                                children: [
                                                                    "🟢 Live: ",
                                                                    rec.live_aqi
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                                lineNumber: 344,
                                                                columnNumber: 45
                                                            }, this),
                                                            rec.historical_avg_aqi != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 9,
                                                                    color: 'rgba(255,255,255,0.5)',
                                                                    lineHeight: 1.2
                                                                },
                                                                children: [
                                                                    "Avg: ",
                                                                    Math.round(rec.historical_avg_aqi)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                                lineNumber: 354,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                        lineNumber: 343,
                                                        columnNumber: 41
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 9,
                                                            color: 'rgba(255,255,255,0.5)',
                                                            textAlign: 'center',
                                                            lineHeight: 1.2
                                                        },
                                                        children: "Hist. avg"
                                                    }, void 0, false, {
                                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                        lineNumber: 364,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                lineNumber: 321,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontWeight: 600,
                                                            color: '#FFFFFF',
                                                            fontSize: 18
                                                        },
                                                        children: [
                                                            rec.city_name,
                                                            index === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    marginLeft: 8,
                                                                    background: '#7C3AED',
                                                                    color: 'white',
                                                                    padding: '2px 8px',
                                                                    borderRadius: 4,
                                                                    fontSize: 11,
                                                                    fontWeight: 600
                                                                },
                                                                children: "AI RECOMMENDED"
                                                            }, void 0, false, {
                                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                                lineNumber: 379,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                        lineNumber: 376,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            color: 'rgba(255,255,255,0.6)',
                                                            fontSize: 14
                                                        },
                                                        children: [
                                                            rec.state,
                                                            " • ",
                                                            getAqiCategory(rec.target_aqi)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                        lineNumber: 392,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                lineNumber: 375,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rec-scores",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            textAlign: 'center'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 20,
                                                                    fontWeight: 700,
                                                                    color: '#7c3aed'
                                                                },
                                                                children: [
                                                                    rec.aqi_improvement_percent.toFixed(0),
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                                lineNumber: 399,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 11,
                                                                    color: 'rgba(255,255,255,0.5)'
                                                                },
                                                                children: "AQI Improve"
                                                            }, void 0, false, {
                                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                                lineNumber: 402,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                        lineNumber: 398,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            textAlign: 'center'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 20,
                                                                    fontWeight: 700,
                                                                    color: '#FFFFFF'
                                                                },
                                                                children: [
                                                                    rec.distance_km.toFixed(0),
                                                                    " km"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                                lineNumber: 405,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 11,
                                                                    color: 'rgba(255,255,255,0.5)'
                                                                },
                                                                children: "Distance"
                                                            }, void 0, false, {
                                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                                lineNumber: 408,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                        lineNumber: 404,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            textAlign: 'center'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 20,
                                                                    fontWeight: 700,
                                                                    color: '#FFFFFF'
                                                                },
                                                                children: [
                                                                    "₹",
                                                                    rec.avg_rent.toLocaleString()
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                                lineNumber: 411,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 11,
                                                                    color: 'rgba(255,255,255,0.5)'
                                                                },
                                                                children: "Avg Rent"
                                                            }, void 0, false, {
                                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                                lineNumber: 414,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                        lineNumber: 410,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            textAlign: 'center'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 20,
                                                                    fontWeight: 700,
                                                                    color: '#7c3aed'
                                                                },
                                                                children: rec.suitability_score.toFixed(0)
                                                            }, void 0, false, {
                                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                                lineNumber: 417,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 11,
                                                                    color: 'rgba(255,255,255,0.5)'
                                                                },
                                                                children: "Score"
                                                            }, void 0, false, {
                                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                                lineNumber: 420,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                        lineNumber: 416,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                lineNumber: 397,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: (e)=>{
                                                        e.stopPropagation();
                                                        handleSaveRecommendation(rec);
                                                    },
                                                    disabled: savingCity === rec.city_name || savedCities.has(rec.city_name),
                                                    style: {
                                                        padding: '10px 18px',
                                                        borderRadius: 8,
                                                        border: 'none',
                                                        fontSize: 13,
                                                        fontWeight: 600,
                                                        cursor: savedCities.has(rec.city_name) ? 'default' : 'pointer',
                                                        background: savedCities.has(rec.city_name) ? 'rgba(16, 185, 129, 0.1)' : 'linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%)',
                                                        color: savedCities.has(rec.city_name) ? '#7c3aed' : 'white',
                                                        transition: 'all 0.2s',
                                                        whiteSpace: 'nowrap',
                                                        opacity: savingCity === rec.city_name ? 0.7 : 1
                                                    },
                                                    children: savedCities.has(rec.city_name) ? '✓ Saved' : savingCity === rec.city_name ? '⏳ Saving...' : '💾 Save to Profile'
                                                }, void 0, false, {
                                                    fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                    lineNumber: 425,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                lineNumber: 424,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                        lineNumber: 305,
                                        columnNumber: 29
                                    }, this),
                                    index === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "expanded-grid",
                                        style: {
                                            marginTop: 20,
                                            paddingTop: 20,
                                            borderTop: '1px dashed rgba(255,255,255,0.15)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "card",
                                                style: {
                                                    padding: 16,
                                                    textAlign: 'center',
                                                    background: 'rgba(16, 185, 129, 0.05)'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 24,
                                                            fontWeight: 700,
                                                            color: '#7c3aed'
                                                        },
                                                        children: [
                                                            rec.respiratory_risk_reduction.toFixed(1),
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                        lineNumber: 463,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 12,
                                                            color: 'rgba(255,255,255,0.5)'
                                                        },
                                                        children: "Respiratory Risk ↓"
                                                    }, void 0, false, {
                                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                        lineNumber: 466,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                lineNumber: 462,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "card",
                                                style: {
                                                    padding: 16,
                                                    textAlign: 'center',
                                                    background: 'rgba(124, 58, 237, 0.05)'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 24,
                                                            fontWeight: 700,
                                                            color: '#7c3aed'
                                                        },
                                                        children: [
                                                            "+",
                                                            rec.life_expectancy_gain_years,
                                                            " yrs"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                        lineNumber: 469,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 12,
                                                            color: 'rgba(255,255,255,0.5)'
                                                        },
                                                        children: "Life Expectancy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                        lineNumber: 472,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                lineNumber: 468,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "card",
                                                style: {
                                                    padding: 16,
                                                    textAlign: 'center',
                                                    background: 'rgba(59, 130, 246, 0.05)'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 24,
                                                            fontWeight: 700,
                                                            color: '#3B82F6'
                                                        },
                                                        children: [
                                                            rec.job_match_score,
                                                            "/100"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                        lineNumber: 475,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 12,
                                                            color: 'rgba(255,255,255,0.5)'
                                                        },
                                                        children: "Job Match"
                                                    }, void 0, false, {
                                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                        lineNumber: 478,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                lineNumber: 474,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "card",
                                                style: {
                                                    padding: 16,
                                                    textAlign: 'center',
                                                    background: 'rgba(139, 92, 246, 0.05)'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 24,
                                                            fontWeight: 700,
                                                            color: '#8B5CF6'
                                                        },
                                                        children: [
                                                            rec.healthcare_score,
                                                            "/100"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                        lineNumber: 481,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 12,
                                                            color: 'rgba(255,255,255,0.5)'
                                                        },
                                                        children: "Healthcare"
                                                    }, void 0, false, {
                                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                        lineNumber: 484,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                lineNumber: 480,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                        lineNumber: 457,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, rec.city_name, true, {
                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                lineNumber: 298,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                        lineNumber: 296,
                        columnNumber: 17
                    }, this),
                    savedRecommendations.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: 48
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 12,
                                    marginBottom: 24
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 40,
                                            height: 40,
                                            borderRadius: 12,
                                            background: 'rgba(124, 58, 237, 0.1)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: 20
                                        },
                                        children: "⭐"
                                    }, void 0, false, {
                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                        lineNumber: 495,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontSize: 24,
                                            fontWeight: 700,
                                            color: '#FFFFFF',
                                            margin: 0
                                        },
                                        children: "Saved Recommendations"
                                    }, void 0, false, {
                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                        lineNumber: 507,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                lineNumber: 494,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                                    gap: 20
                                },
                                children: savedRecommendations.map((rec)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card",
                                        style: {
                                            padding: '24px',
                                            position: 'relative',
                                            border: '1px solid rgba(255, 255, 255, 0.12)',
                                            background: 'rgba(255, 255, 255, 0.07)',
                                            backdropFilter: 'blur(16px)',
                                            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 16
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.transform = 'translateY(-4px)';
                                            e.currentTarget.style.boxShadow = '0 12px 24px -10px rgba(0,0,0,0.3)';
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = 'none';
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'flex-start'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontWeight: 700,
                                                                    fontSize: 20,
                                                                    color: '#FFFFFF'
                                                                },
                                                                children: rec.target_city
                                                            }, void 0, false, {
                                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                                lineNumber: 539,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    color: 'rgba(255,255,255,0.6)',
                                                                    fontSize: 13,
                                                                    fontWeight: 500,
                                                                    marginTop: 2
                                                                },
                                                                children: rec.target_state || 'India'
                                                            }, void 0, false, {
                                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                                lineNumber: 542,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                        lineNumber: 538,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleRemoveSaved(rec.id, rec.target_city),
                                                        style: {
                                                            border: '1px solid rgba(239, 68, 68, 0.3)',
                                                            background: 'rgba(239, 68, 68, 0.1)',
                                                            color: '#EF4444',
                                                            padding: '6px 10px',
                                                            borderRadius: 6,
                                                            cursor: 'pointer',
                                                            fontSize: 12,
                                                            fontWeight: 600,
                                                            transition: 'all 0.2s'
                                                        },
                                                        children: "Remove"
                                                    }, void 0, false, {
                                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                        lineNumber: 546,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                lineNumber: 537,
                                                columnNumber: 37
                                            }, this),
                                            rec.target_aqi != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    gap: 8,
                                                    flexWrap: 'wrap'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            padding: '6px 10px',
                                                            borderRadius: 6,
                                                            background: 'rgba(124, 58, 237, 0.08)',
                                                            border: '1px solid rgba(124, 58, 237, 0.2)',
                                                            color: '#6d28d9',
                                                            fontSize: 12,
                                                            fontWeight: 600
                                                        },
                                                        children: [
                                                            "Target AQI: ",
                                                            rec.target_aqi
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                        lineNumber: 566,
                                                        columnNumber: 45
                                                    }, this),
                                                    rec.aqi_improvement_percent != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            padding: '6px 10px',
                                                            borderRadius: 6,
                                                            background: 'rgba(124, 58, 237, 0.08)',
                                                            border: '1px solid rgba(124, 58, 237, 0.2)',
                                                            color: '#7C3AED',
                                                            fontSize: 12,
                                                            fontWeight: 600
                                                        },
                                                        children: [
                                                            rec.aqi_improvement_percent.toFixed(0),
                                                            "% Better"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                        lineNumber: 578,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                lineNumber: 565,
                                                columnNumber: 41
                                            }, this),
                                            rec.suitability_score != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginTop: 'auto',
                                                    paddingTop: 12,
                                                    borderTop: '1px solid rgba(255,255,255,0.1)'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            alignItems: 'center'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 13,
                                                                    color: 'rgba(255,255,255,0.6)'
                                                                },
                                                                children: "Suitability Score"
                                                            }, void 0, false, {
                                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                                lineNumber: 596,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 15,
                                                                    fontWeight: 700,
                                                                    color: '#FFFFFF'
                                                                },
                                                                children: rec.suitability_score.toFixed(1)
                                                            }, void 0, false, {
                                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                                lineNumber: 597,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                        lineNumber: 595,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            height: 6,
                                                            background: 'rgba(255,255,255,0.1)',
                                                            borderRadius: 3,
                                                            marginTop: 8,
                                                            overflow: 'hidden'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                height: '100%',
                                                                width: `${rec.suitability_score}%`,
                                                                background: '#7c3aed',
                                                                borderRadius: 3
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                            lineNumber: 600,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                        lineNumber: 599,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                lineNumber: 594,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, rec.id, true, {
                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                        lineNumber: 518,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                lineNumber: 512,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                        lineNumber: 493,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card",
                        style: {
                            marginBottom: 32,
                            padding: 32
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 12,
                                    marginBottom: 20
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 40,
                                            height: 40,
                                            background: 'linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%)',
                                            borderRadius: 8,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white',
                                            fontSize: 18
                                        },
                                        children: "🤖"
                                    }, void 0, false, {
                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                        lineNumber: 617,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontSize: 20,
                                            fontWeight: 600,
                                            color: '#FFFFFF',
                                            margin: 0
                                        },
                                        children: "AI Migration Advisory"
                                    }, void 0, false, {
                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                        lineNumber: 630,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                lineNumber: 616,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    color: 'rgba(255,255,255,0.7)',
                                    lineHeight: 1.8,
                                    whiteSpace: 'pre-wrap',
                                    fontSize: 15
                                },
                                children: data.advisory
                            }, void 0, false, {
                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                lineNumber: 634,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                        lineNumber: 615,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card",
                        style: {
                            marginBottom: 32,
                            padding: 24
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontSize: 18,
                                    fontWeight: 600,
                                    color: '#FFFFFF',
                                    marginBottom: 16
                                },
                                children: "Assessment Summary"
                            }, void 0, false, {
                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                lineNumber: 645,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "summary-grid",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    color: 'rgba(255,255,255,0.5)',
                                                    marginBottom: 4
                                                },
                                                children: "Profile"
                                            }, void 0, false, {
                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                lineNumber: 650,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontWeight: 500
                                                },
                                                children: [
                                                    data.userProfile.name,
                                                    ", ",
                                                    data.userProfile.age,
                                                    " years"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                lineNumber: 651,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    color: 'rgba(255,255,255,0.5)'
                                                },
                                                children: data.userProfile.profession
                                            }, void 0, false, {
                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                lineNumber: 652,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                        lineNumber: 649,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    color: 'rgba(255,255,255,0.5)',
                                                    marginBottom: 4
                                                },
                                                children: "Family"
                                            }, void 0, false, {
                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                lineNumber: 655,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontWeight: 500
                                                },
                                                children: data.familyHealth.familyType
                                            }, void 0, false, {
                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                lineNumber: 656,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    color: 'rgba(255,255,255,0.5)'
                                                },
                                                children: [
                                                    data.familyHealth.totalMembers,
                                                    " members",
                                                    data.familyHealth.children > 0 && `, ${data.familyHealth.children} children`,
                                                    data.familyHealth.elderly > 0 && `, ${data.familyHealth.elderly} elderly`
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                lineNumber: 657,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                        lineNumber: 654,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    color: 'rgba(255,255,255,0.5)',
                                                    marginBottom: 4
                                                },
                                                children: "Constraints"
                                            }, void 0, false, {
                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                lineNumber: 664,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontWeight: 500
                                                },
                                                children: [
                                                    "Max ",
                                                    data.location.maxDistance,
                                                    " km"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                lineNumber: 665,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    color: 'rgba(255,255,255,0.5)'
                                                },
                                                children: data.location.monthlyBudget ? `Budget: ₹${parseInt(data.location.monthlyBudget).toLocaleString()}` : 'No budget limit'
                                            }, void 0, false, {
                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                lineNumber: 666,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                        lineNumber: 663,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                lineNumber: 648,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                        lineNumber: 644,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "print-hidden action-buttons",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn-primary",
                                onClick: ()=>window.print(),
                                style: {
                                    padding: '14px 28px'
                                },
                                children: "📄 Download Report"
                            }, void 0, false, {
                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                lineNumber: 674,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/wizard",
                                className: "btn-secondary",
                                style: {
                                    padding: '14px 28px'
                                },
                                children: "🔄 New Assessment"
                            }, void 0, false, {
                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                lineNumber: 681,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                        lineNumber: 673,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                lineNumber: 250,
                columnNumber: 13
            }, this),
            selectedCity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-overlay",
                onClick: (e)=>e.target === e.currentTarget && closeModal(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "modal-header",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 16
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: 48,
                                                height: 48,
                                                borderRadius: 8,
                                                background: getAqiColor(selectedCity.target_aqi),
                                                color: 'white',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontWeight: 700,
                                                fontSize: 18
                                            },
                                            children: selectedCity.target_aqi
                                        }, void 0, false, {
                                            fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                            lineNumber: 695,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "modal-city-title",
                                                    children: selectedCity.city_name
                                                }, void 0, false, {
                                                    fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                    lineNumber: 710,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        margin: 0,
                                                        color: 'rgba(255,255,255,0.6)',
                                                        fontSize: 14
                                                    },
                                                    children: [
                                                        selectedCity.state,
                                                        " • ",
                                                        getAqiCategory(selectedCity.target_aqi)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                    lineNumber: 713,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                            lineNumber: 709,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                    lineNumber: 694,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: closeModal,
                                    style: {
                                        width: 40,
                                        height: 40,
                                        borderRadius: 8,
                                        border: 'none',
                                        backgroundColor: 'rgba(255,255,255,0.1)',
                                        cursor: 'pointer',
                                        fontSize: 20,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    },
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                    lineNumber: 718,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                            lineNumber: 693,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                borderBottom: '1px solid rgba(255,255,255,0.1)',
                                overflowX: 'auto',
                                padding: '0 16px'
                            },
                            children: [
                                {
                                    id: 'security',
                                    label: '🛡️ Security',
                                    icon: '🛡️'
                                },
                                {
                                    id: 'education',
                                    label: '📚 Education',
                                    icon: '📚'
                                },
                                {
                                    id: 'communities',
                                    label: '👥 Communities',
                                    icon: '👥'
                                },
                                {
                                    id: 'connectivity',
                                    label: '🚗 Connectivity',
                                    icon: '🚗'
                                },
                                {
                                    id: 'hospitals',
                                    label: '🏥 Healthcare',
                                    icon: '🏥'
                                },
                                {
                                    id: 'geography',
                                    label: '🏔️ Geography',
                                    icon: '🏔️'
                                }
                            ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab(tab.id),
                                    style: {
                                        padding: '12px 16px',
                                        border: 'none',
                                        backgroundColor: 'transparent',
                                        cursor: 'pointer',
                                        fontSize: 14,
                                        fontWeight: activeTab === tab.id ? 600 : 400,
                                        color: activeTab === tab.id ? '#7c3aed' : 'rgba(255,255,255,0.6)',
                                        borderBottom: activeTab === tab.id ? '2px solid #7c3aed' : '2px solid transparent',
                                        whiteSpace: 'nowrap'
                                    },
                                    children: tab.label
                                }, tab.id, false, {
                                    fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                    lineNumber: 751,
                                    columnNumber: 33
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                            lineNumber: 737,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "modal-body",
                            children: isLoadingDescription ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: 'center',
                                    padding: 60,
                                    color: 'rgba(255,255,255,0.6)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "loading-pulse",
                                        style: {
                                            fontSize: 18
                                        },
                                        children: [
                                            "🤖 AI is gathering information about ",
                                            selectedCity.city_name,
                                            "..."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                        lineNumber: 778,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            marginTop: 12,
                                            fontSize: 14
                                        },
                                        children: "Fetching crime statistics, education facilities, connectivity data, and more"
                                    }, void 0, false, {
                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                        lineNumber: 781,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                lineNumber: 773,
                                columnNumber: 33
                            }, this) : cityDescription ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    activeTab === 'security' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginBottom: 24
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        style: {
                                                            margin: 0,
                                                            marginBottom: 12,
                                                            fontSize: 16,
                                                            color: '#FFFFFF'
                                                        },
                                                        children: "Security Score"
                                                    }, void 0, false, {
                                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                        lineNumber: 790,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoreBar, {
                                                        score: cityDescription.crime_rate.security_score,
                                                        color: cityDescription.crime_rate.security_score >= 7 ? '#7c3aed' : cityDescription.crime_rate.security_score >= 5 ? '#F59E0B' : '#EF4444'
                                                    }, void 0, false, {
                                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                        lineNumber: 793,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                lineNumber: 789,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: 'rgba(255,255,255,0.7)',
                                                    lineHeight: 1.7
                                                },
                                                children: cityDescription.crime_rate.description
                                            }, void 0, false, {
                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                lineNumber: 798,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                        lineNumber: 788,
                                        columnNumber: 41
                                    }, this),
                                    activeTab === 'education' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginBottom: 24
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        style: {
                                                            margin: 0,
                                                            marginBottom: 12,
                                                            fontSize: 16,
                                                            color: '#FFFFFF'
                                                        },
                                                        children: "Education Score"
                                                    }, void 0, false, {
                                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                        lineNumber: 807,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoreBar, {
                                                        score: cityDescription.education.score,
                                                        color: "#3B82F6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                        lineNumber: 810,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                lineNumber: 806,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: 'rgba(255,255,255,0.7)',
                                                    lineHeight: 1.7,
                                                    marginBottom: 20
                                                },
                                                children: cityDescription.education.description
                                            }, void 0, false, {
                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                lineNumber: 815,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                style: {
                                                    margin: 0,
                                                    marginBottom: 12,
                                                    fontSize: 14,
                                                    color: 'rgba(255,255,255,0.6)'
                                                },
                                                children: "Key Educational Institutions"
                                            }, void 0, false, {
                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                lineNumber: 818,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                style: {
                                                    margin: 0,
                                                    paddingLeft: 20,
                                                    color: 'rgba(255,255,255,0.7)'
                                                },
                                                children: cityDescription.education.highlights.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        style: {
                                                            marginBottom: 8
                                                        },
                                                        children: item
                                                    }, i, false, {
                                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                        lineNumber: 823,
                                                        columnNumber: 53
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                lineNumber: 821,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                        lineNumber: 805,
                                        columnNumber: 41
                                    }, this),
                                    activeTab === 'communities' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                style: {
                                                    margin: 0,
                                                    marginBottom: 16,
                                                    fontSize: 16,
                                                    color: '#FFFFFF'
                                                },
                                                children: "Demographics & Communities"
                                            }, void 0, false, {
                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                lineNumber: 831,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: 'rgba(255,255,255,0.7)',
                                                    lineHeight: 1.7,
                                                    marginBottom: 20
                                                },
                                                children: cityDescription.communities.demographics
                                            }, void 0, false, {
                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                lineNumber: 834,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                style: {
                                                    margin: 0,
                                                    marginBottom: 12,
                                                    fontSize: 14,
                                                    color: 'rgba(255,255,255,0.6)'
                                                },
                                                children: "Community Highlights"
                                            }, void 0, false, {
                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                lineNumber: 837,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                style: {
                                                    margin: 0,
                                                    paddingLeft: 20,
                                                    color: 'rgba(255,255,255,0.7)'
                                                },
                                                children: cityDescription.communities.highlights.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        style: {
                                                            marginBottom: 8
                                                        },
                                                        children: item
                                                    }, i, false, {
                                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                        lineNumber: 842,
                                                        columnNumber: 53
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                lineNumber: 840,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                        lineNumber: 830,
                                        columnNumber: 41
                                    }, this),
                                    activeTab === 'connectivity' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "connectivity-grid",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "card",
                                                        style: {
                                                            padding: 20,
                                                            textAlign: 'center'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 28,
                                                                    fontWeight: 700,
                                                                    color: '#7c3aed'
                                                                },
                                                                children: cityDescription.connectivity.nearest_metro
                                                            }, void 0, false, {
                                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                                lineNumber: 852,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 12,
                                                                    color: 'rgba(255,255,255,0.5)'
                                                                },
                                                                children: "Nearest Metro City"
                                                            }, void 0, false, {
                                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                                lineNumber: 855,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                        lineNumber: 851,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "card",
                                                        style: {
                                                            padding: 20,
                                                            textAlign: 'center'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 28,
                                                                    fontWeight: 700,
                                                                    color: '#3B82F6'
                                                                },
                                                                children: [
                                                                    cityDescription.connectivity.distance_km,
                                                                    " km"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                                lineNumber: 860,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 12,
                                                                    color: 'rgba(255,255,255,0.5)'
                                                                },
                                                                children: "Distance"
                                                            }, void 0, false, {
                                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                                lineNumber: 863,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                        lineNumber: 859,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                lineNumber: 850,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: 'rgba(255,255,255,0.7)',
                                                    lineHeight: 1.7,
                                                    marginBottom: 12
                                                },
                                                children: cityDescription.connectivity.description
                                            }, void 0, false, {
                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                lineNumber: 868,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: 'rgba(255,255,255,0.6)',
                                                    fontSize: 14
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Transport Options:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                        lineNumber: 872,
                                                        columnNumber: 49
                                                    }, this),
                                                    " ",
                                                    cityDescription.connectivity.transport_options
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                lineNumber: 871,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                        lineNumber: 849,
                                        columnNumber: 41
                                    }, this),
                                    activeTab === 'hospitals' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginBottom: 24
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        style: {
                                                            margin: 0,
                                                            marginBottom: 12,
                                                            fontSize: 16,
                                                            color: '#FFFFFF'
                                                        },
                                                        children: "Healthcare Score"
                                                    }, void 0, false, {
                                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                        lineNumber: 880,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoreBar, {
                                                        score: cityDescription.hospitals.score,
                                                        color: "#8B5CF6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                        lineNumber: 883,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                lineNumber: 879,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: 'rgba(255,255,255,0.7)',
                                                    lineHeight: 1.7,
                                                    marginBottom: 20
                                                },
                                                children: cityDescription.hospitals.description
                                            }, void 0, false, {
                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                lineNumber: 888,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                style: {
                                                    margin: 0,
                                                    marginBottom: 12,
                                                    fontSize: 14,
                                                    color: 'rgba(255,255,255,0.6)'
                                                },
                                                children: "Major Healthcare Facilities"
                                            }, void 0, false, {
                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                lineNumber: 891,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                style: {
                                                    margin: 0,
                                                    paddingLeft: 20,
                                                    color: 'rgba(255,255,255,0.7)'
                                                },
                                                children: cityDescription.hospitals.facilities.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        style: {
                                                            marginBottom: 8
                                                        },
                                                        children: item
                                                    }, i, false, {
                                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                        lineNumber: 896,
                                                        columnNumber: 53
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                lineNumber: 894,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                        lineNumber: 878,
                                        columnNumber: 41
                                    }, this),
                                    activeTab === 'geography' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "geography-grid",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "card",
                                                        style: {
                                                            padding: 16,
                                                            textAlign: 'center'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 16,
                                                                    fontWeight: 600,
                                                                    color: '#7c3aed'
                                                                },
                                                                children: cityDescription.geography.terrain
                                                            }, void 0, false, {
                                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                                lineNumber: 906,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 11,
                                                                    color: 'rgba(255,255,255,0.5)'
                                                                },
                                                                children: "Terrain"
                                                            }, void 0, false, {
                                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                                lineNumber: 909,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                        lineNumber: 905,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "card",
                                                        style: {
                                                            padding: 16,
                                                            textAlign: 'center'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 16,
                                                                    fontWeight: 600,
                                                                    color: '#3B82F6'
                                                                },
                                                                children: cityDescription.geography.climate
                                                            }, void 0, false, {
                                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                                lineNumber: 912,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 11,
                                                                    color: 'rgba(255,255,255,0.5)'
                                                                },
                                                                children: "Climate"
                                                            }, void 0, false, {
                                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                                lineNumber: 915,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                        lineNumber: 911,
                                                        columnNumber: 49
                                                    }, this),
                                                    cityDescription.geography.elevation_m > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "card",
                                                        style: {
                                                            padding: 16,
                                                            textAlign: 'center'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 16,
                                                                    fontWeight: 600,
                                                                    color: '#8B5CF6'
                                                                },
                                                                children: [
                                                                    cityDescription.geography.elevation_m,
                                                                    "m"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                                lineNumber: 919,
                                                                columnNumber: 57
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 11,
                                                                    color: 'rgba(255,255,255,0.5)'
                                                                },
                                                                children: "Elevation"
                                                            }, void 0, false, {
                                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                                lineNumber: 922,
                                                                columnNumber: 57
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                        lineNumber: 918,
                                                        columnNumber: 53
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                lineNumber: 904,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: 'rgba(255,255,255,0.7)',
                                                    lineHeight: 1.7,
                                                    marginBottom: 20
                                                },
                                                children: cityDescription.geography.description
                                            }, void 0, false, {
                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                lineNumber: 926,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                style: {
                                                    margin: 0,
                                                    marginBottom: 12,
                                                    fontSize: 14,
                                                    color: 'rgba(255,255,255,0.6)'
                                                },
                                                children: "Natural Features"
                                            }, void 0, false, {
                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                lineNumber: 929,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                style: {
                                                    margin: 0,
                                                    paddingLeft: 20,
                                                    color: 'rgba(255,255,255,0.7)'
                                                },
                                                children: cityDescription.geography.features.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        style: {
                                                            marginBottom: 8
                                                        },
                                                        children: item
                                                    }, i, false, {
                                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                        lineNumber: 934,
                                                        columnNumber: 53
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                                lineNumber: 932,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                        lineNumber: 903,
                                        columnNumber: 41
                                    }, this)
                                ]
                            }, void 0, true) : descriptionError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: 'center',
                                    padding: 40
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 48,
                                            marginBottom: 16
                                        },
                                        children: "⚠️"
                                    }, void 0, false, {
                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                        lineNumber: 942,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            color: '#EF4444',
                                            fontSize: 16,
                                            fontWeight: 600,
                                            marginBottom: 8
                                        },
                                        children: "Failed to load city information"
                                    }, void 0, false, {
                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                        lineNumber: 943,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: 'rgba(255,255,255,0.5)',
                                            fontSize: 14,
                                            marginBottom: 20
                                        },
                                        children: "The AI service may be temporarily unavailable. Please try again."
                                    }, void 0, false, {
                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                        lineNumber: 946,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>selectedCity && handleCityClick(selectedCity),
                                        className: "btn-primary",
                                        style: {
                                            padding: '10px 24px',
                                            fontSize: 14
                                        },
                                        children: "🔄 Retry"
                                    }, void 0, false, {
                                        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                        lineNumber: 949,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                lineNumber: 941,
                                columnNumber: 33
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: 'center',
                                    padding: 40,
                                    color: 'rgba(255,255,255,0.5)'
                                },
                                children: "Select a tab to view city information."
                            }, void 0, false, {
                                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                                lineNumber: 958,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                            lineNumber: 771,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                    lineNumber: 692,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
                lineNumber: 688,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/AirSafeMove/src/app/results/page.tsx",
        lineNumber: 227,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0cb2e719._.js.map
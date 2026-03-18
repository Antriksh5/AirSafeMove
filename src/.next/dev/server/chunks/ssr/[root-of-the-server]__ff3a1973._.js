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
"[project]/AirSafeMove/src/components/StepIndicator.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StepIndicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function StepIndicator({ currentStep, steps }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "step-indicator",
        style: {
            marginBottom: 40
        },
        children: steps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "step-item",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `step-circle ${index < currentStep ? 'completed' : index === currentStep ? 'active' : 'inactive'}`,
                                children: step.icon
                            }, void 0, false, {
                                fileName: "[project]/AirSafeMove/src/components/StepIndicator.tsx",
                                lineNumber: 14,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 13,
                                    fontWeight: 500,
                                    color: index <= currentStep ? '#1E293B' : '#94A3B8'
                                },
                                children: step.label
                            }, void 0, false, {
                                fileName: "[project]/AirSafeMove/src/components/StepIndicator.tsx",
                                lineNumber: 21,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/AirSafeMove/src/components/StepIndicator.tsx",
                        lineNumber: 13,
                        columnNumber: 21
                    }, this),
                    index < steps.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `step-line ${index < currentStep ? 'active' : 'inactive'}`
                    }, void 0, false, {
                        fileName: "[project]/AirSafeMove/src/components/StepIndicator.tsx",
                        lineNumber: 31,
                        columnNumber: 25
                    }, this)
                ]
            }, index, true, {
                fileName: "[project]/AirSafeMove/src/components/StepIndicator.tsx",
                lineNumber: 12,
                columnNumber: 17
            }, this))
    }, void 0, false, {
        fileName: "[project]/AirSafeMove/src/components/StepIndicator.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
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
"[project]/AirSafeMove/src/app/wizard/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WizardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$components$2f$StepIndicator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/components/StepIndicator.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/lib/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/context/AuthContext.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const steps = [
    {
        label: 'Personal Info',
        icon: '👤'
    },
    {
        label: 'Location',
        icon: '📍'
    },
    {
        label: 'Family & Health',
        icon: '👨‍👩‍👧'
    }
];
const healthConditions = [
    {
        id: 'None',
        label: 'None',
        description: 'No health conditions in family'
    },
    {
        id: 'Asthma',
        label: 'Asthma',
        description: 'Chronic respiratory condition'
    },
    {
        id: 'COPD',
        label: 'COPD',
        description: 'Chronic obstructive pulmonary disease'
    },
    {
        id: 'Bronchitis',
        label: 'Bronchitis',
        description: 'Inflammation of bronchial tubes'
    },
    {
        id: 'Respiratory Allergies',
        label: 'Respiratory Allergies',
        description: 'Dust, pollen, or air allergies'
    },
    {
        id: 'Lung Disease',
        label: 'Lung Disease',
        description: 'Other lung-related conditions'
    },
    {
        id: 'Heart Disease',
        label: 'Heart Disease',
        description: 'Cardiovascular conditions'
    },
    {
        id: 'Elderly Respiratory Issues',
        label: 'Elderly Respiratory Issues',
        description: 'Age-related breathing problems'
    },
    {
        id: 'Other',
        label: 'Other',
        description: 'Specify other health conditions'
    }
];
const familyTypes = [
    'Nuclear Family',
    'Joint Family',
    'Single',
    'Couple'
];
function WizardPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cities, setCities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [professions, setProfessions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Form state
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        // Personal Info
        name: '',
        age: 30,
        profession: '',
        // Location
        currentCity: '',
        maxDistance: 500,
        monthlyBudget: '',
        // Family & Health
        familyType: 'Nuclear Family',
        totalMembers: 4,
        children: 1,
        elderly: 0,
        healthConditions: [
            'None'
        ]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchCityNames"])().then(setCities);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchProfessions"])().then(setProfessions);
    }, []);
    // Auto-fill form from profile
    const { profile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (profile) {
            setFormData((prev)=>({
                    ...prev,
                    name: profile.name || prev.name,
                    age: profile.age || prev.age,
                    profession: profile.profession || prev.profession,
                    currentCity: profile.current_city || prev.currentCity,
                    maxDistance: profile.max_distance_km || prev.maxDistance,
                    monthlyBudget: profile.monthly_budget ? String(profile.monthly_budget) : prev.monthlyBudget,
                    familyType: profile.family_type || prev.familyType,
                    totalMembers: profile.total_members || prev.totalMembers,
                    children: profile.children ?? prev.children,
                    elderly: profile.elderly ?? prev.elderly,
                    healthConditions: profile.health_conditions && profile.health_conditions.length > 0 ? profile.health_conditions : prev.healthConditions
                }));
        }
    }, [
        profile
    ]);
    // Helper: Determine if a field is disabled
    const isFieldDisabled = (field)=>{
        const { familyType } = formData;
        if (familyType === 'Single') {
            // Single: Total fixed at 1, Children fixed at 0. Elderly is Editable.
            if (field === 'totalMembers' || field === 'children') return true;
            return false;
        }
        if (familyType === 'Couple') {
            // Couple: Total fixed at 2, Children fixed at 0. Elderly is Editable.
            if (field === 'totalMembers' || field === 'children') return true;
            return false;
        }
        if (familyType === 'Nuclear Family') {
            // Nuclear: Elderly usually implies grandparents, so we disable it (0).
            if (field === 'elderly') return true;
            return false;
        }
        // Joint: All editable
        return false;
    };
    // Helper: Get Max limit for Elderly based on family type
    const getMaxElderly = ()=>{
        const { familyType, totalMembers } = formData;
        if (familyType === 'Single') return 1;
        if (familyType === 'Couple') return 2;
        if (familyType === 'Nuclear Family') return 0;
        return totalMembers; // Joint family
    };
    const handleInputChange = (field, value)=>{
        setFormData((prev)=>{
            const newData = {
                ...prev,
                [field]: value
            };
            // Logic to preset values when Family Type changes
            if (field === 'familyType') {
                if (value === 'Single') {
                    newData.totalMembers = 1;
                    newData.children = 0;
                    // Reset elderly if it exceeds the new limit (1)
                    if (prev.elderly > 1) newData.elderly = 1;
                } else if (value === 'Couple') {
                    newData.totalMembers = 2;
                    newData.children = 0;
                    // Reset elderly if it exceeds the new limit (2)
                    if (prev.elderly > 2) newData.elderly = 2;
                } else if (value === 'Nuclear Family') {
                    newData.elderly = 0; // Reset for nuclear
                    if (prev.totalMembers < 2) newData.totalMembers = 3;
                }
            }
            // Logic: If user changes Elderly count, ensure it doesn't exceed Total Members
            if (field === 'elderly') {
                const numValue = typeof value === 'number' ? value : parseInt(value) || 0;
                // We use the getter function, but since we are inside the setter and relying on 'prev', 
                // we need to be careful. Simplest is to check against strict types:
                if (prev.familyType === 'Single' && numValue > 1) newData.elderly = 1;
                if (prev.familyType === 'Couple' && numValue > 2) newData.elderly = 2;
                // For Joint, elderly cannot exceed total members
                if (prev.familyType === 'Joint Family' && numValue > prev.totalMembers) newData.elderly = prev.totalMembers;
            }
            return newData;
        });
    };
    const toggleHealthCondition = (conditionId)=>{
        setFormData((prev)=>{
            let newConditions = [
                ...prev.healthConditions
            ];
            if (conditionId === 'None') {
                newConditions = [
                    'None'
                ];
            } else {
                newConditions = newConditions.filter((c)=>c !== 'None');
                if (newConditions.includes(conditionId)) {
                    newConditions = newConditions.filter((c)=>c !== conditionId);
                } else {
                    newConditions.push(conditionId);
                }
                if (newConditions.length === 0) newConditions = [
                    'None'
                ];
            }
            return {
                ...prev,
                healthConditions: newConditions
            };
        });
    };
    const canProceed = ()=>{
        switch(currentStep){
            case 0:
                return formData.name.trim() && formData.profession;
            case 1:
                return formData.currentCity;
            case 2:
                return true;
            default:
                return false;
        }
    };
    const handleNext = ()=>{
        if (currentStep < steps.length - 1) setCurrentStep((prev)=>prev + 1);
    };
    const handlePrevious = ()=>{
        if (currentStep > 0) setCurrentStep((prev)=>prev - 1);
    };
    const handleSubmit = async ()=>{
        setIsLoading(true);
        try {
            const request = {
                current_city: formData.currentCity,
                age: formData.age,
                profession: formData.profession,
                max_distance_km: formData.maxDistance,
                monthly_budget: formData.monthlyBudget ? parseInt(formData.monthlyBudget) : null,
                family_type: formData.familyType,
                total_members: formData.totalMembers,
                children: formData.children,
                elderly: formData.elderly,
                health_conditions: formData.healthConditions
            };
            const recResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRecommendations"])(request);
            const advisoryResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAdvisory"])(formData.name, formData.age, formData.profession, formData.currentCity, recResponse.current_aqi, formData.familyType, formData.totalMembers, formData.children, formData.elderly, formData.healthConditions, recResponse.recommendations, recResponse.readiness_score, recResponse.health_urgency);
            const resultsData = {
                ...recResponse,
                advisory: advisoryResponse.advisory,
                userName: formData.name,
                userProfile: {
                    name: formData.name,
                    age: formData.age,
                    profession: formData.profession
                },
                familyHealth: {
                    familyType: formData.familyType,
                    totalMembers: formData.totalMembers,
                    children: formData.children,
                    elderly: formData.elderly,
                    healthConditions: formData.healthConditions
                },
                location: {
                    currentCity: formData.currentCity,
                    maxDistance: formData.maxDistance,
                    monthlyBudget: formData.monthlyBudget
                }
            };
            sessionStorage.setItem('airsafe_results', JSON.stringify(resultsData));
            router.push('/results');
        } catch (error) {
            console.error('Error submitting form:', error);
            setIsLoading(false);
        }
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'transparent'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card",
                style: {
                    padding: 60,
                    textAlign: 'center',
                    maxWidth: 400
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "loading-pulse",
                        style: {
                            marginBottom: 24
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: 80,
                                height: 80,
                                margin: '0 auto',
                                background: '#7c3aed',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: 32
                            },
                            children: "🧠"
                        }, void 0, false, {
                            fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                            lineNumber: 255,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                        lineNumber: 254,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: 24,
                            fontWeight: 600,
                            color: '#FFFFFF',
                            marginBottom: 12
                        },
                        children: "AI Analysis in Progress"
                    }, void 0, false, {
                        fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                        lineNumber: 257,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: 'rgba(255,255,255,0.6)',
                            marginBottom: 24
                        },
                        children: "Our ML models are analyzing AQI data, job markets, and health factors..."
                    }, void 0, false, {
                        fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                        lineNumber: 258,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "progress-bar",
                        style: {
                            width: '100%'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "progress-fill",
                            style: {
                                width: '60%',
                                animation: 'progress 2s ease-in-out infinite'
                            }
                        }, void 0, false, {
                            fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                            lineNumber: 259,
                            columnNumber: 77
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                        lineNumber: 259,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                lineNumber: 253,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
            lineNumber: 245,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: '100vh'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "wizard-container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card wizard-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$components$2f$StepIndicator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        currentStep: currentStep,
                        steps: steps
                    }, void 0, false, {
                        fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                        lineNumber: 269,
                        columnNumber: 21
                    }, this),
                    currentStep === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "wizard-title",
                                children: "Tell us about yourself"
                            }, void 0, false, {
                                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                lineNumber: 273,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: 'rgba(255,255,255,0.6)',
                                    textAlign: 'center',
                                    marginBottom: 32
                                },
                                children: "We'll use this to personalize your recommendations"
                            }, void 0, false, {
                                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                lineNumber: 274,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: 24
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: 'block',
                                            fontWeight: 600,
                                            marginBottom: 8,
                                            color: '#FFFFFF'
                                        },
                                        children: "Full Name"
                                    }, void 0, false, {
                                        fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                        lineNumber: 276,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        className: "form-input",
                                        placeholder: "Enter your name",
                                        value: formData.name,
                                        onChange: (e)=>handleInputChange('name', e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                        lineNumber: 277,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                lineNumber: 275,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: 24
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: 'block',
                                            fontWeight: 600,
                                            marginBottom: 8,
                                            color: '#FFFFFF'
                                        },
                                        children: [
                                            "Age: ",
                                            formData.age
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                        lineNumber: 280,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: "18",
                                        max: "80",
                                        value: formData.age,
                                        onChange: (e)=>handleInputChange('age', parseInt(e.target.value)),
                                        style: {
                                            width: '100%'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                        lineNumber: 281,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                lineNumber: 279,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: 24
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: 'block',
                                            fontWeight: 600,
                                            marginBottom: 8,
                                            color: '#FFFFFF'
                                        },
                                        children: "Profession"
                                    }, void 0, false, {
                                        fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                        lineNumber: 284,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "form-select",
                                        value: formData.profession,
                                        onChange: (e)=>handleInputChange('profession', e.target.value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Select your profession"
                                            }, void 0, false, {
                                                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                                lineNumber: 286,
                                                columnNumber: 37
                                            }, this),
                                            professions.map((prof)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: prof,
                                                    children: prof
                                                }, prof, false, {
                                                    fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 62
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                        lineNumber: 285,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                lineNumber: 283,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                        lineNumber: 272,
                        columnNumber: 25
                    }, this),
                    currentStep === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "wizard-title",
                                children: "Current Location"
                            }, void 0, false, {
                                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                lineNumber: 295,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: 'rgba(255,255,255,0.6)',
                                    textAlign: 'center',
                                    marginBottom: 32
                                },
                                children: "Help us understand where you're migrating from"
                            }, void 0, false, {
                                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                lineNumber: 296,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: 24
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: 'block',
                                            fontWeight: 600,
                                            marginBottom: 8,
                                            color: '#FFFFFF'
                                        },
                                        children: "Current City"
                                    }, void 0, false, {
                                        fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                        lineNumber: 298,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "form-select",
                                        value: formData.currentCity,
                                        onChange: (e)=>handleInputChange('currentCity', e.target.value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Select your current city"
                                            }, void 0, false, {
                                                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                                lineNumber: 300,
                                                columnNumber: 37
                                            }, this),
                                            cities.map((city)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: city,
                                                    children: city
                                                }, city, false, {
                                                    fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 57
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                        lineNumber: 299,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                lineNumber: 297,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: 24
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: 'block',
                                            fontWeight: 600,
                                            marginBottom: 8,
                                            color: '#FFFFFF'
                                        },
                                        children: [
                                            "Maximum Migration Distance: ",
                                            formData.maxDistance,
                                            " km"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                        lineNumber: 305,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: "100",
                                        max: "2500",
                                        step: "50",
                                        value: formData.maxDistance,
                                        onChange: (e)=>handleInputChange('maxDistance', parseInt(e.target.value)),
                                        style: {
                                            width: '100%'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                        lineNumber: 306,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            fontSize: 12,
                                            color: 'rgba(255,255,255,0.5)',
                                            marginTop: 4
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "100 km"
                                            }, void 0, false, {
                                                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                                lineNumber: 307,
                                                columnNumber: 159
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "2500 km"
                                            }, void 0, false, {
                                                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                                lineNumber: 307,
                                                columnNumber: 178
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                        lineNumber: 307,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                lineNumber: 304,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: 24
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: 'block',
                                            fontWeight: 600,
                                            marginBottom: 8,
                                            color: '#FFFFFF'
                                        },
                                        children: "Monthly Rent Budget (Optional)"
                                    }, void 0, false, {
                                        fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                        lineNumber: 310,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        className: "form-input",
                                        placeholder: "e.g., 20000",
                                        value: formData.monthlyBudget,
                                        onChange: (e)=>handleInputChange('monthlyBudget', e.target.value.replace(/\D/g, ''))
                                    }, void 0, false, {
                                        fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                        lineNumber: 311,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                lineNumber: 309,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                        lineNumber: 294,
                        columnNumber: 25
                    }, this),
                    currentStep === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "wizard-title",
                                children: "Family & Health Details"
                            }, void 0, false, {
                                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                lineNumber: 318,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: 'rgba(255,255,255,0.6)',
                                    textAlign: 'center',
                                    marginBottom: 32
                                },
                                children: "Help us find the best city for your family's health"
                            }, void 0, false, {
                                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                lineNumber: 319,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: 24
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: 'block',
                                            fontWeight: 600,
                                            marginBottom: 8,
                                            color: '#FFFFFF'
                                        },
                                        children: "Family Type"
                                    }, void 0, false, {
                                        fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                        lineNumber: 322,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "form-select",
                                        value: formData.familyType,
                                        onChange: (e)=>handleInputChange('familyType', e.target.value),
                                        children: familyTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: type,
                                                children: type
                                            }, type, false, {
                                                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                                lineNumber: 324,
                                                columnNumber: 62
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                        lineNumber: 323,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                lineNumber: 321,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "family-grid",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: 'block',
                                                    fontWeight: 600,
                                                    marginBottom: 8,
                                                    color: '#FFFFFF',
                                                    fontSize: 14
                                                },
                                                children: "Total Members"
                                            }, void 0, false, {
                                                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                                lineNumber: 330,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                className: "form-input",
                                                min: "1",
                                                max: "20",
                                                value: formData.totalMembers,
                                                onChange: (e)=>handleInputChange('totalMembers', parseInt(e.target.value) || 1),
                                                disabled: isFieldDisabled('totalMembers'),
                                                style: {
                                                    backgroundColor: isFieldDisabled('totalMembers') ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.08)',
                                                    cursor: isFieldDisabled('totalMembers') ? 'not-allowed' : 'text',
                                                    color: isFieldDisabled('totalMembers') ? 'rgba(255,255,255,0.3)' : '#FFFFFF'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                                lineNumber: 331,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                        lineNumber: 329,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: 'block',
                                                    fontWeight: 600,
                                                    marginBottom: 8,
                                                    color: '#FFFFFF',
                                                    fontSize: 14
                                                },
                                                children: "Children"
                                            }, void 0, false, {
                                                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                                lineNumber: 343,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                className: "form-input",
                                                min: "0",
                                                max: "10",
                                                value: formData.children,
                                                onChange: (e)=>handleInputChange('children', parseInt(e.target.value) || 0),
                                                disabled: isFieldDisabled('children'),
                                                style: {
                                                    backgroundColor: isFieldDisabled('children') ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.08)',
                                                    cursor: isFieldDisabled('children') ? 'not-allowed' : 'text',
                                                    color: isFieldDisabled('children') ? 'rgba(255,255,255,0.3)' : '#FFFFFF'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                                lineNumber: 344,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                        lineNumber: 342,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: 'block',
                                                    fontWeight: 600,
                                                    marginBottom: 8,
                                                    color: '#FFFFFF',
                                                    fontSize: 14
                                                },
                                                children: "Elderly (60+)"
                                            }, void 0, false, {
                                                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                                lineNumber: 356,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                className: "form-input",
                                                min: "0",
                                                // UPDATED: Dynamic Max based on Family Type
                                                max: getMaxElderly(),
                                                value: formData.elderly,
                                                onChange: (e)=>handleInputChange('elderly', parseInt(e.target.value) || 0),
                                                disabled: isFieldDisabled('elderly'),
                                                style: {
                                                    backgroundColor: isFieldDisabled('elderly') ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.08)',
                                                    cursor: isFieldDisabled('elderly') ? 'not-allowed' : 'text',
                                                    color: isFieldDisabled('elderly') ? 'rgba(255,255,255,0.3)' : '#FFFFFF'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                                lineNumber: 359,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                        lineNumber: 355,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                lineNumber: 328,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: 'block',
                                            fontWeight: 600,
                                            marginBottom: 12,
                                            color: '#FFFFFF'
                                        },
                                        children: "Health Conditions in Family (Select all that apply)"
                                    }, void 0, false, {
                                        fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                        lineNumber: 374,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "health-grid",
                                        children: healthConditions.map((condition)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `checkbox-card ${formData.healthConditions.includes(condition.id) ? 'selected' : ''}`,
                                                onClick: ()=>toggleHealthCondition(condition.id),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "checkbox-circle"
                                                    }, void 0, false, {
                                                        fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                                        lineNumber: 378,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontWeight: 600,
                                                                    color: '#FFFFFF',
                                                                    fontSize: 14
                                                                },
                                                                children: condition.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                                                lineNumber: 380,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 12,
                                                                    color: 'rgba(255,255,255,0.5)'
                                                                },
                                                                children: condition.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                                                lineNumber: 381,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                                        lineNumber: 379,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, condition.id, true, {
                                                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                                lineNumber: 377,
                                                columnNumber: 41
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                        lineNumber: 375,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                lineNumber: 373,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                        lineNumber: 317,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "wizard-buttons",
                        children: [
                            currentStep === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "btn-secondary",
                                children: "← Back to Home"
                            }, void 0, false, {
                                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                lineNumber: 391,
                                columnNumber: 46
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn-secondary",
                                onClick: handlePrevious,
                                children: "← Previous"
                            }, void 0, false, {
                                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                lineNumber: 391,
                                columnNumber: 111
                            }, this),
                            currentStep < steps.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn-primary",
                                onClick: handleNext,
                                disabled: !canProceed(),
                                style: {
                                    opacity: canProceed() ? 1 : 0.5
                                },
                                children: "Next →"
                            }, void 0, false, {
                                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                lineNumber: 393,
                                columnNumber: 29
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn-primary",
                                onClick: handleSubmit,
                                style: {
                                    background: '#7c3aed'
                                },
                                children: "Get Recommendations →"
                            }, void 0, false, {
                                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                lineNumber: 394,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                        lineNumber: 390,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                lineNumber: 268,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
            lineNumber: 267,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
        lineNumber: 266,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ff3a1973._.js.map
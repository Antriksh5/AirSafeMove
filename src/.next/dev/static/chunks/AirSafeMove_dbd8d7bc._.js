(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/AirSafeMove/src/components/StepIndicator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StepIndicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function StepIndicator({ currentStep, steps }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "step-indicator",
        style: {
            marginBottom: 40
        },
        children: steps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "step-item",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `step-circle ${index < currentStep ? 'completed' : index === currentStep ? 'active' : 'inactive'}`,
                                children: step.icon
                            }, void 0, false, {
                                fileName: "[project]/AirSafeMove/src/components/StepIndicator.tsx",
                                lineNumber: 14,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    index < steps.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_c = StepIndicator;
var _c;
__turbopack_context__.k.register(_c, "StepIndicator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/AirSafeMove/src/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Backend API base URL
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
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_BASE_URL = (("TURBOPACK compile-time value", "https://fastapi-backend-44079236102.asia-south1.run.app") || 'https://fastapi-backend-44079236102.asia-south1.run.app').replace(/\/$/, '');
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
async function getRecommendations(request) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/recommendations/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        });
        if (!response.ok) throw new Error('Failed to get recommendations');
        return response.json();
    } catch (error) {
        console.error('Error getting recommendations:', error);
        // Return mock data for demo
        return getMockRecommendations(request);
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
async function fetchSavedRecommendations(userId) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/user/saved?user_id=${encodeURIComponent(userId)}`);
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
async function saveRecommendation(data) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/user/saved`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
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
async function deleteSavedRecommendation(savedId, userId) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/user/saved/${encodeURIComponent(savedId)}?user_id=${encodeURIComponent(userId)}`, {
            method: 'DELETE'
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/AirSafeMove/src/app/wizard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WizardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$components$2f$StepIndicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/components/StepIndicator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/AirSafeMove/src/context/AuthContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cities, setCities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [professions, setProfessions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Form state
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WizardPage.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCityNames"])().then(setCities);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProfessions"])().then(setProfessions);
        }
    }["WizardPage.useEffect"], []);
    // Auto-fill form from profile
    const { profile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WizardPage.useEffect": ()=>{
            if (profile) {
                setFormData({
                    "WizardPage.useEffect": (prev)=>({
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
                        })
                }["WizardPage.useEffect"]);
            }
        }
    }["WizardPage.useEffect"], [
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
            const recResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRecommendations"])(request);
            const advisoryResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAdvisory"])(formData.name, formData.age, formData.profession, formData.currentCity, recResponse.current_aqi, formData.familyType, formData.totalMembers, formData.children, formData.elderly, formData.healthConditions, recResponse.recommendations, recResponse.readiness_score, recResponse.health_urgency);
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'transparent'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card",
                style: {
                    padding: 60,
                    textAlign: 'center',
                    maxWidth: 400
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "loading-pulse",
                        style: {
                            marginBottom: 24
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "progress-bar",
                        style: {
                            width: '100%'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: '100vh'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "wizard-container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card wizard-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$components$2f$StepIndicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        currentStep: currentStep,
                        steps: steps
                    }, void 0, false, {
                        fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                        lineNumber: 269,
                        columnNumber: 21
                    }, this),
                    currentStep === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "wizard-title",
                                children: "Tell us about yourself"
                            }, void 0, false, {
                                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                lineNumber: 273,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: 24
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: 24
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: 24
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "form-select",
                                        value: formData.profession,
                                        onChange: (e)=>handleInputChange('profession', e.target.value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Select your profession"
                                            }, void 0, false, {
                                                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                                lineNumber: 286,
                                                columnNumber: 37
                                            }, this),
                                            professions.map((prof)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
                    currentStep === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "wizard-title",
                                children: "Current Location"
                            }, void 0, false, {
                                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                lineNumber: 295,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: 24
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "form-select",
                                        value: formData.currentCity,
                                        onChange: (e)=>handleInputChange('currentCity', e.target.value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Select your current city"
                                            }, void 0, false, {
                                                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                                lineNumber: 300,
                                                columnNumber: 37
                                            }, this),
                                            cities.map((city)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: 24
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            fontSize: 12,
                                            color: 'rgba(255,255,255,0.5)',
                                            marginTop: 4
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "100 km"
                                            }, void 0, false, {
                                                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                                lineNumber: 307,
                                                columnNumber: 159
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: 24
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                    currentStep === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "wizard-title",
                                children: "Family & Health Details"
                            }, void 0, false, {
                                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                lineNumber: 318,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: 24
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "form-select",
                                        value: formData.familyType,
                                        onChange: (e)=>handleInputChange('familyType', e.target.value),
                                        children: familyTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "family-grid",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "health-grid",
                                        children: healthConditions.map((condition)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `checkbox-card ${formData.healthConditions.includes(condition.id) ? 'selected' : ''}`,
                                                onClick: ()=>toggleHealthCondition(condition.id),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "checkbox-circle"
                                                    }, void 0, false, {
                                                        fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                                        lineNumber: 378,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "wizard-buttons",
                        children: [
                            currentStep === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "btn-secondary",
                                children: "← Back to Home"
                            }, void 0, false, {
                                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                lineNumber: 391,
                                columnNumber: 46
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn-secondary",
                                onClick: handlePrevious,
                                children: "← Previous"
                            }, void 0, false, {
                                fileName: "[project]/AirSafeMove/src/app/wizard/page.tsx",
                                lineNumber: 391,
                                columnNumber: 111
                            }, this),
                            currentStep < steps.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_s(WizardPage, "XI7kdMllkNQ/5SZ5rbTStMcKR5w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = WizardPage;
var _c;
__turbopack_context__.k.register(_c, "WizardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/AirSafeMove/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
"[project]/AirSafeMove/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target, ...searchParamsList) {
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
} //# sourceMappingURL=querystring.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/AirSafeMove/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && `?${query}` || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return `${protocol}${host}${pathname}${search}${hash}`;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
                }
            });
        }
    }
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (previously via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (App.prototype?.getInitialProps) {
            const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = `Cannot find module for page: ${page}`;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
} //# sourceMappingURL=error-once.js.map
}),
"[project]/AirSafeMove/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$AirSafeMove$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/AirSafeMove/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/AirSafeMove/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _types = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
const _erroronce = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate) {
    if (typeof window !== 'undefined') {
        const { nodeName } = e.currentTarget;
        // anchors inside an svg have a lowercase nodeName
        const isAnchorNodeName = nodeName.toUpperCase() === 'A';
        if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
            // ignore click for browser’s default behavior
            return;
        }
        if (!(0, _islocalurl.isLocalURL)(href)) {
            if (replace) {
                // browser default behavior does not replace the history state
                // so we need to do it manually
                e.preventDefault();
                location.replace(href);
            }
            // ignore click for browser’s default behavior
            return;
        }
        e.preventDefault();
        if (onNavigate) {
            let isDefaultPrevented = false;
            onNavigate({
                preventDefault: ()=>{
                    isDefaultPrevented = true;
                }
            });
            if (isDefaultPrevented) {
                return;
            }
        }
        const { dispatchNavigateAction } = __turbopack_context__.r("[project]/AirSafeMove/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
        _react.default.startTransition(()=>{
            dispatchNavigateAction(as || href, replace ? 'replace' : 'push', scroll ?? true, linkInstanceRef.current);
        });
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const fetchStrategy = prefetchProp !== false ? getFetchStrategyFromPrefetchProp(prefetchProp) : _types.FetchStrategy.PPR;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto') {
                    throw createPropError({
                        key,
                        expected: '`boolean | "auto"`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (props.locale) {
            (0, _warnonce.warnOnce)('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof hrefProp === 'string') {
                href = hrefProp;
            } else if (typeof hrefProp === 'object' && typeof hrefProp.pathname === 'string') {
                href = hrefProp.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error(`Dynamic href \`${href}\` found in <Link> while using the \`/app\` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href`), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const { href, as } = _react.default.useMemo({
        "LinkComponent.useMemo": ()=>{
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
    }["LinkComponent.useMemo"], [
        hrefProp,
        asProp
    ]);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (children?.$$typeof === Symbol.for('react.lazy')) {
            throw Object.defineProperty(new Error(`\`<Link legacyBehavior>\` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's \`<a>\` tag.`), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: false,
                configurable: true
            });
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn(`"onClick" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link`);
            }
            if (onMouseEnterProp) {
                console.warn(`"onMouseEnter" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link`);
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error(`No children were passed to <Link> with \`href\` of \`${hrefProp}\` but one child is required https://nextjs.org/docs/messages/link-no-children`), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error(`Multiple children were passed to <Link> with \`href\` of \`${hrefProp}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if (children?.type === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, href, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        href,
        router,
        fetchStrategy,
        setOptimisticLinkStatus
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error(`Component rendered inside next/link has to pass click event to "onClick" prop.`), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(as);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, _erroronce.errorOnce)('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchProp(prefetchProp) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return prefetchProp === null || prefetchProp === 'auto' ? _types.FetchStrategy.PPR : // (although invalid values should've been filtered out by prop validation in dev)
        _types.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map
}),
]);

//# sourceMappingURL=AirSafeMove_dbd8d7bc._.js.map
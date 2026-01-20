'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import StepIndicator from '@/components/StepIndicator';
import { fetchCityNames, fetchProfessions, getRecommendations, getAdvisory, MigrationRequest } from '@/lib/api';

const steps = [
    { label: 'Personal Info', icon: '👤' },
    { label: 'Location', icon: '📍' },
    { label: 'Family & Health', icon: '👨‍👩‍👧' }
];

const healthConditions = [
    { id: 'None', label: 'None', description: 'No health conditions in family' },
    { id: 'Asthma', label: 'Asthma', description: 'Chronic respiratory condition' },
    { id: 'COPD', label: 'COPD', description: 'Chronic obstructive pulmonary disease' },
    { id: 'Bronchitis', label: 'Bronchitis', description: 'Inflammation of bronchial tubes' },
    { id: 'Respiratory Allergies', label: 'Respiratory Allergies', description: 'Dust, pollen, or air allergies' },
    { id: 'Lung Disease', label: 'Lung Disease', description: 'Other lung-related conditions' },
    { id: 'Heart Disease', label: 'Heart Disease', description: 'Cardiovascular conditions' },
    { id: 'Elderly Respiratory Issues', label: 'Elderly Respiratory Issues', description: 'Age-related breathing problems' },
    { id: 'Other', label: 'Other', description: 'Specify other health conditions' }
];

const familyTypes = ['Nuclear Family', 'Joint Family', 'Single', 'Couple'];

export default function WizardPage() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [cities, setCities] = useState<string[]>([]);
    const [professions, setProfessions] = useState<string[]>([]);

    // Form state
    const [formData, setFormData] = useState({
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
        healthConditions: ['None']
    });

    useEffect(() => {
        // Fetch dropdown data
        fetchCityNames().then(setCities);
        fetchProfessions().then(setProfessions);
    }, []);

    const handleInputChange = (field: string, value: string | number | string[]) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const toggleHealthCondition = (conditionId: string) => {
        setFormData(prev => {
            let newConditions = [...prev.healthConditions];

            if (conditionId === 'None') {
                newConditions = ['None'];
            } else {
                newConditions = newConditions.filter(c => c !== 'None');
                if (newConditions.includes(conditionId)) {
                    newConditions = newConditions.filter(c => c !== conditionId);
                } else {
                    newConditions.push(conditionId);
                }
                if (newConditions.length === 0) {
                    newConditions = ['None'];
                }
            }

            return { ...prev, healthConditions: newConditions };
        });
    };

    const canProceed = () => {
        switch (currentStep) {
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

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(prev => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        }
    };

    const handleSubmit = async () => {
        setIsLoading(true);

        try {
            const request: MigrationRequest = {
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

            // Get recommendations
            const recResponse = await getRecommendations(request);

            // Get AI advisory
            const advisoryResponse = await getAdvisory(
                formData.name,
                formData.age,
                formData.profession,
                formData.currentCity,
                recResponse.current_aqi,
                formData.familyType,
                formData.totalMembers,
                formData.children,
                formData.elderly,
                formData.healthConditions,
                recResponse.recommendations,
                recResponse.readiness_score,
                recResponse.health_urgency
            );

            // Store data and navigate to results
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

            // Store in sessionStorage and navigate
            sessionStorage.setItem('airsafe_results', JSON.stringify(resultsData));
            router.push('/results');
        } catch (error) {
            console.error('Error submitting form:', error);
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return (
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #E0F7FA 0%, #F8FAFC 50%, #E8F5E9 100%)'
            }}>
                <div className="card" style={{ padding: 60, textAlign: 'center', maxWidth: 400 }}>
                    <div className="loading-pulse" style={{ marginBottom: 24 }}>
                        <div style={{
                            width: 80,
                            height: 80,
                            margin: '0 auto',
                            background: 'linear-gradient(135deg, #14B8A6 0%, #06B6D4 100%)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 32
                        }}>
                            🧠
                        </div>
                    </div>
                    <h2 style={{ fontSize: 24, fontWeight: 600, color: '#1E293B', marginBottom: 12 }}>
                        AI Analysis in Progress
                    </h2>
                    <p style={{ color: '#64748B', marginBottom: 24 }}>
                        Our ML models are analyzing AQI data, job markets, and health factors to find your ideal city...
                    </p>
                    <div className="progress-bar" style={{ width: '100%' }}>
                        <div className="progress-fill" style={{ width: '60%', animation: 'progress 2s ease-in-out infinite' }} />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gradient-main" style={{ minHeight: '100vh' }}>
            <div className="wizard-container">
                <div className="card" style={{ padding: '40px 32px' }}>
                    {/* Step Indicator */}
                    <StepIndicator currentStep={currentStep} steps={steps} />

                    {/* Step 1: Personal Info */}
                    {currentStep === 0 && (
                        <div>
                            <h2 style={{ fontSize: 28, fontWeight: 700, color: '#1E293B', textAlign: 'center', marginBottom: 8 }}>
                                Tell us about yourself
                            </h2>
                            <p style={{ color: '#64748B', textAlign: 'center', marginBottom: 32 }}>
                                We'll use this to personalize your recommendations
                            </p>

                            <div style={{ marginBottom: 24 }}>
                                <label style={{ display: 'block', fontWeight: 600, marginBottom: 8, color: '#1E293B' }}>
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                />
                            </div>

                            <div style={{ marginBottom: 24 }}>
                                <label style={{ display: 'block', fontWeight: 600, marginBottom: 8, color: '#1E293B' }}>
                                    Age: {formData.age}
                                </label>
                                <input
                                    type="range"
                                    min="18"
                                    max="80"
                                    value={formData.age}
                                    onChange={(e) => handleInputChange('age', parseInt(e.target.value))}
                                    style={{ width: '100%' }}
                                />
                            </div>

                            <div style={{ marginBottom: 24 }}>
                                <label style={{ display: 'block', fontWeight: 600, marginBottom: 8, color: '#1E293B' }}>
                                    Profession
                                </label>
                                <select
                                    className="form-select"
                                    value={formData.profession}
                                    onChange={(e) => handleInputChange('profession', e.target.value)}
                                >
                                    <option value="">Select your profession</option>
                                    {professions.map(prof => (
                                        <option key={prof} value={prof}>{prof}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Location */}
                    {currentStep === 1 && (
                        <div>
                            <h2 style={{ fontSize: 28, fontWeight: 700, color: '#1E293B', textAlign: 'center', marginBottom: 8 }}>
                                Current Location
                            </h2>
                            <p style={{ color: '#64748B', textAlign: 'center', marginBottom: 32 }}>
                                Help us understand where you're migrating from
                            </p>

                            <div style={{ marginBottom: 24 }}>
                                <label style={{ display: 'block', fontWeight: 600, marginBottom: 8, color: '#1E293B' }}>
                                    Current City
                                </label>
                                <select
                                    className="form-select"
                                    value={formData.currentCity}
                                    onChange={(e) => handleInputChange('currentCity', e.target.value)}
                                >
                                    <option value="">Select your current city</option>
                                    {cities.map(city => (
                                        <option key={city} value={city}>{city}</option>
                                    ))}
                                </select>
                            </div>

                            <div style={{ marginBottom: 24 }}>
                                <label style={{ display: 'block', fontWeight: 600, marginBottom: 8, color: '#1E293B' }}>
                                    Maximum Migration Distance: {formData.maxDistance} km
                                </label>
                                <input
                                    type="range"
                                    min="100"
                                    max="2500"
                                    step="50"
                                    value={formData.maxDistance}
                                    onChange={(e) => handleInputChange('maxDistance', parseInt(e.target.value))}
                                    style={{ width: '100%' }}
                                />
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#94A3B8', marginTop: 4 }}>
                                    <span>100 km</span>
                                    <span>2500 km</span>
                                </div>
                            </div>

                            <div style={{ marginBottom: 24 }}>
                                <label style={{ display: 'block', fontWeight: 600, marginBottom: 8, color: '#1E293B' }}>
                                    Monthly Rent Budget (Optional)
                                </label>
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="e.g., 20000"
                                    value={formData.monthlyBudget}
                                    onChange={(e) => handleInputChange('monthlyBudget', e.target.value.replace(/\D/g, ''))}
                                />
                            </div>
                        </div>
                    )}

                    {/* Step 3: Family & Health */}
                    {currentStep === 2 && (
                        <div>
                            <h2 style={{ fontSize: 28, fontWeight: 700, color: '#1E293B', textAlign: 'center', marginBottom: 8 }}>
                                Family & Health Details
                            </h2>
                            <p style={{ color: '#64748B', textAlign: 'center', marginBottom: 32 }}>
                                Help us find the best city for your family's health
                            </p>

                            <div style={{ marginBottom: 24 }}>
                                <label style={{ display: 'block', fontWeight: 600, marginBottom: 8, color: '#1E293B' }}>
                                    Family Type
                                </label>
                                <select
                                    className="form-select"
                                    value={formData.familyType}
                                    onChange={(e) => handleInputChange('familyType', e.target.value)}
                                >
                                    {familyTypes.map(type => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 24 }}>
                                <div>
                                    <label style={{ display: 'block', fontWeight: 600, marginBottom: 8, color: '#1E293B', fontSize: 14 }}>
                                        Total Members
                                    </label>
                                    <input
                                        type="number"
                                        className="form-input"
                                        min="1"
                                        max="20"
                                        value={formData.totalMembers}
                                        onChange={(e) => handleInputChange('totalMembers', parseInt(e.target.value) || 1)}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontWeight: 600, marginBottom: 8, color: '#1E293B', fontSize: 14 }}>
                                        Children
                                    </label>
                                    <input
                                        type="number"
                                        className="form-input"
                                        min="0"
                                        max="10"
                                        value={formData.children}
                                        onChange={(e) => handleInputChange('children', parseInt(e.target.value) || 0)}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontWeight: 600, marginBottom: 8, color: '#1E293B', fontSize: 14 }}>
                                        Elderly (60+)
                                    </label>
                                    <input
                                        type="number"
                                        className="form-input"
                                        min="0"
                                        max="10"
                                        value={formData.elderly}
                                        onChange={(e) => handleInputChange('elderly', parseInt(e.target.value) || 0)}
                                    />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontWeight: 600, marginBottom: 12, color: '#1E293B' }}>
                                    Health Conditions in Family (Select all that apply)
                                </label>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
                                    {healthConditions.map(condition => (
                                        <div
                                            key={condition.id}
                                            className={`checkbox-card ${formData.healthConditions.includes(condition.id) ? 'selected' : ''}`}
                                            onClick={() => toggleHealthCondition(condition.id)}
                                        >
                                            <div className="checkbox-circle" />
                                            <div>
                                                <div style={{ fontWeight: 600, color: '#1E293B', fontSize: 14 }}>{condition.label}</div>
                                                <div style={{ fontSize: 12, color: '#64748B' }}>{condition.description}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Navigation */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 40,
                        paddingTop: 24,
                        borderTop: '1px solid #E2E8F0'
                    }}>
                        {currentStep === 0 ? (
                            <Link href="/" className="btn-secondary">
                                ← Back to Home
                            </Link>
                        ) : (
                            <button className="btn-secondary" onClick={handlePrevious}>
                                ← Previous
                            </button>
                        )}

                        {currentStep < steps.length - 1 ? (
                            <button
                                className="btn-primary"
                                onClick={handleNext}
                                disabled={!canProceed()}
                                style={{ opacity: canProceed() ? 1 : 0.5 }}
                            >
                                Next →
                            </button>
                        ) : (
                            <button
                                className="btn-primary"
                                onClick={handleSubmit}
                                style={{ background: 'linear-gradient(135deg, #14B8A6 0%, #10B981 100%)' }}
                            >
                                Get Recommendations →
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

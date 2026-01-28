'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import StepIndicator from '@/components/StepIndicator';
import { fetchCityNames, fetchProfessions, getRecommendations, getAdvisory } from '@/lib/api';

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
        fetchCityNames().then(setCities);
        fetchProfessions().then(setProfessions);
    }, []);

    // Helper: Determine if a field is disabled
    const isFieldDisabled = (field: string) => {
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
    const getMaxElderly = () => {
        const { familyType, totalMembers } = formData;
        if (familyType === 'Single') return 1;
        if (familyType === 'Couple') return 2;
        if (familyType === 'Nuclear Family') return 0;
        return totalMembers; // Joint family
    };

    const handleInputChange = (field: string, value: string | number) => {
        setFormData(prev => {
            const newData = { ...prev, [field]: value };

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
                const numValue = typeof value === 'number' ? value : parseInt(value as string) || 0;
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
                if (newConditions.length === 0) newConditions = ['None'];
            }
            return { ...prev, healthConditions: newConditions };
        });
    };

    const canProceed = () => {
        switch (currentStep) {
            case 0: return formData.name.trim() && formData.profession;
            case 1: return formData.currentCity;
            case 2: return true;
            default: return false;
        }
    };

    const handleNext = () => { if (currentStep < steps.length - 1) setCurrentStep(prev => prev + 1); };
    const handlePrevious = () => { if (currentStep > 0) setCurrentStep(prev => prev - 1); };

    const handleSubmit = async () => {
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

            const recResponse = await getRecommendations(request);

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

            const resultsData = {
                ...recResponse,
                advisory: advisoryResponse.advisory,
                userName: formData.name,
                userProfile: { name: formData.name, age: formData.age, profession: formData.profession },
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
                        <div style={{ width: 80, height: 80, margin: '0 auto', background: 'linear-gradient(135deg, #14B8A6 0%, #06B6D4 100%)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32 }}>🧠</div>
                    </div>
                    <h2 style={{ fontSize: 24, fontWeight: 600, color: '#1E293B', marginBottom: 12 }}>AI Analysis in Progress</h2>
                    <p style={{ color: '#64748B', marginBottom: 24 }}>Our ML models are analyzing AQI data, job markets, and health factors...</p>
                    <div className="progress-bar" style={{ width: '100%' }}><div className="progress-fill" style={{ width: '60%', animation: 'progress 2s ease-in-out infinite' }} /></div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gradient-main" style={{ minHeight: '100vh' }}>
            <div className="wizard-container">
                <div className="card wizard-card">
                    <StepIndicator currentStep={currentStep} steps={steps} />

                    {currentStep === 0 && (
                        <div>
                            <h2 className="wizard-title">Tell us about yourself</h2>
                            <p style={{ color: '#64748B', textAlign: 'center', marginBottom: 32 }}>We'll use this to personalize your recommendations</p>
                            <div style={{ marginBottom: 24 }}>
                                <label style={{ display: 'block', fontWeight: 600, marginBottom: 8, color: '#1E293B' }}>Full Name</label>
                                <input type="text" className="form-input" placeholder="Enter your name" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} />
                            </div>
                            <div style={{ marginBottom: 24 }}>
                                <label style={{ display: 'block', fontWeight: 600, marginBottom: 8, color: '#1E293B' }}>Age: {formData.age}</label>
                                <input type="range" min="18" max="80" value={formData.age} onChange={(e) => handleInputChange('age', parseInt(e.target.value))} style={{ width: '100%' }} />
                            </div>
                            <div style={{ marginBottom: 24 }}>
                                <label style={{ display: 'block', fontWeight: 600, marginBottom: 8, color: '#1E293B' }}>Profession</label>
                                <select className="form-select" value={formData.profession} onChange={(e) => handleInputChange('profession', e.target.value)}>
                                    <option value="">Select your profession</option>
                                    {professions.map(prof => <option key={prof} value={prof}>{prof}</option>)}
                                </select>
                            </div>
                        </div>
                    )}

                    {currentStep === 1 && (
                        <div>
                            <h2 className="wizard-title">Current Location</h2>
                            <p style={{ color: '#64748B', textAlign: 'center', marginBottom: 32 }}>Help us understand where you're migrating from</p>
                            <div style={{ marginBottom: 24 }}>
                                <label style={{ display: 'block', fontWeight: 600, marginBottom: 8, color: '#1E293B' }}>Current City</label>
                                <select className="form-select" value={formData.currentCity} onChange={(e) => handleInputChange('currentCity', e.target.value)}>
                                    <option value="">Select your current city</option>
                                    {cities.map(city => <option key={city} value={city}>{city}</option>)}
                                </select>
                            </div>
                            <div style={{ marginBottom: 24 }}>
                                <label style={{ display: 'block', fontWeight: 600, marginBottom: 8, color: '#1E293B' }}>Maximum Migration Distance: {formData.maxDistance} km</label>
                                <input type="range" min="100" max="2500" step="50" value={formData.maxDistance} onChange={(e) => handleInputChange('maxDistance', parseInt(e.target.value))} style={{ width: '100%' }} />
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#94A3B8', marginTop: 4 }}><span>100 km</span><span>2500 km</span></div>
                            </div>
                            <div style={{ marginBottom: 24 }}>
                                <label style={{ display: 'block', fontWeight: 600, marginBottom: 8, color: '#1E293B' }}>Monthly Rent Budget (Optional)</label>
                                <input type="text" className="form-input" placeholder="e.g., 20000" value={formData.monthlyBudget} onChange={(e) => handleInputChange('monthlyBudget', e.target.value.replace(/\D/g, ''))} />
                            </div>
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div>
                            <h2 className="wizard-title">Family & Health Details</h2>
                            <p style={{ color: '#64748B', textAlign: 'center', marginBottom: 32 }}>Help us find the best city for your family's health</p>

                            <div style={{ marginBottom: 24 }}>
                                <label style={{ display: 'block', fontWeight: 600, marginBottom: 8, color: '#1E293B' }}>Family Type</label>
                                <select className="form-select" value={formData.familyType} onChange={(e) => handleInputChange('familyType', e.target.value)}>
                                    {familyTypes.map(type => <option key={type} value={type}>{type}</option>)}
                                </select>
                            </div>

                            <div className="family-grid">
                                <div>
                                    <label style={{ display: 'block', fontWeight: 600, marginBottom: 8, color: '#1E293B', fontSize: 14 }}>Total Members</label>
                                    <input
                                        type="number"
                                        className="form-input"
                                        min="1"
                                        max="20"
                                        value={formData.totalMembers}
                                        onChange={(e) => handleInputChange('totalMembers', parseInt(e.target.value) || 1)}
                                        disabled={isFieldDisabled('totalMembers')}
                                        style={{ backgroundColor: isFieldDisabled('totalMembers') ? '#F1F5F9' : 'white', cursor: isFieldDisabled('totalMembers') ? 'not-allowed' : 'text', color: isFieldDisabled('totalMembers') ? '#94A3B8' : 'inherit' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontWeight: 600, marginBottom: 8, color: '#1E293B', fontSize: 14 }}>Children</label>
                                    <input
                                        type="number"
                                        className="form-input"
                                        min="0"
                                        max="10"
                                        value={formData.children}
                                        onChange={(e) => handleInputChange('children', parseInt(e.target.value) || 0)}
                                        disabled={isFieldDisabled('children')}
                                        style={{ backgroundColor: isFieldDisabled('children') ? '#F1F5F9' : 'white', cursor: isFieldDisabled('children') ? 'not-allowed' : 'text', color: isFieldDisabled('children') ? '#94A3B8' : 'inherit' }}
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
                                        // UPDATED: Dynamic Max based on Family Type
                                        max={getMaxElderly()}
                                        value={formData.elderly}
                                        onChange={(e) => handleInputChange('elderly', parseInt(e.target.value) || 0)}
                                        disabled={isFieldDisabled('elderly')}
                                        style={{ backgroundColor: isFieldDisabled('elderly') ? '#F1F5F9' : 'white', cursor: isFieldDisabled('elderly') ? 'not-allowed' : 'text', color: isFieldDisabled('elderly') ? '#94A3B8' : 'inherit' }}
                                    />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontWeight: 600, marginBottom: 12, color: '#1E293B' }}>Health Conditions in Family (Select all that apply)</label>
                                <div className="health-grid">
                                    {healthConditions.map(condition => (
                                        <div key={condition.id} className={`checkbox-card ${formData.healthConditions.includes(condition.id) ? 'selected' : ''}`} onClick={() => toggleHealthCondition(condition.id)}>
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

                    <div className="wizard-buttons">
                        {currentStep === 0 ? <Link href="/" className="btn-secondary">← Back to Home</Link> : <button className="btn-secondary" onClick={handlePrevious}>← Previous</button>}
                        {currentStep < steps.length - 1 ?
                            <button className="btn-primary" onClick={handleNext} disabled={!canProceed()} style={{ opacity: canProceed() ? 1 : 0.5 }}>Next →</button> :
                            <button className="btn-primary" onClick={handleSubmit} style={{ background: 'linear-gradient(135deg, #14B8A6 0%, #10B981 100%)' }}>Get Recommendations →</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
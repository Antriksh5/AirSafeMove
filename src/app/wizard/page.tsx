'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import StepIndicator from '../../components/StepIndicator';
import { fetchCityNames, fetchProfessions, getRecommendations, getAdvisory } from '../../lib/api';
import { useAuth } from '../../context/AuthContext';

const steps = [
    { 
        label: 'Personal info', 
        icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
    },
    { 
        label: 'Location', 
        icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
    },
    { 
        label: 'Family & health', 
        icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg>
    },
    { 
        label: 'Preferences', 
        icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" /></svg>
    }
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

    const [formData, setFormData] = useState({
        name: '',
        age: 30,
        professions: [] as string[],
        earningMembers: 1,
        currentCity: '',
        maxDistance: 500,
        monthlyBudget: '',
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

    const { profile, user, token } = useAuth();
    useEffect(() => {
        if (profile) {
            setFormData(prev => ({
                ...prev,
                name: profile.name || prev.name,
                age: profile.age || prev.age,
                professions: (profile as any).professions || (profile.profession ? [profile.profession] : prev.professions),
                earningMembers: (profile as any).earning_members || prev.earningMembers,
                currentCity: profile.current_city || prev.currentCity,
                maxDistance: profile.max_distance_km || prev.maxDistance,
                monthlyBudget: profile.monthly_budget ? String(profile.monthly_budget) : prev.monthlyBudget,
                familyType: profile.family_type || prev.familyType,
                totalMembers: profile.total_members || prev.totalMembers,
                children: profile.children ?? prev.children,
                elderly: profile.elderly ?? prev.elderly,
                healthConditions: profile.health_conditions && profile.health_conditions.length > 0 ? profile.health_conditions : prev.healthConditions,
            }));
        }
    }, [profile]);

    const isFieldDisabled = (field: string) => {
        const { familyType } = formData;
        if (familyType === 'Single') return field === 'totalMembers' || field === 'children';
        if (familyType === 'Couple') return field === 'totalMembers' || field === 'children';
        if (familyType === 'Nuclear Family') return field === 'elderly';
        return false;
    };

    const getMaxElderly = () => {
        const { familyType, totalMembers } = formData;
        if (familyType === 'Single') return 1;
        if (familyType === 'Couple') return 2;
        if (familyType === 'Nuclear Family') return 0;
        return totalMembers;
    };

    const handleInputChange = (field: string, value: string | number) => {
        setFormData(prev => {
            const newData = { ...prev, [field]: value };
            if (field === 'familyType') {
                if (value === 'Single') {
                    newData.totalMembers = 1; newData.children = 0;
                    if (prev.elderly > 1) newData.elderly = 1;
                } else if (value === 'Couple') {
                    newData.totalMembers = 2; newData.children = 0;
                    if (prev.elderly > 2) newData.elderly = 2;
                } else if (value === 'Nuclear Family') {
                    newData.elderly = 0; 
                    if (prev.totalMembers < 2) newData.totalMembers = 3;
                }
            }
            if (field === 'elderly') {
                const numValue = typeof value === 'number' ? value : parseInt(value as string) || 0;
                if (prev.familyType === 'Single' && numValue > 1) newData.elderly = 1;
                if (prev.familyType === 'Couple' && numValue > 2) newData.elderly = 2;
                if (prev.familyType === 'Joint Family' && numValue > prev.totalMembers) newData.elderly = prev.totalMembers;
            }
            return newData;
        });
    };

    const toggleHealthCondition = (conditionId: string) => {
        setFormData(prev => {
            let newConditions = [...prev.healthConditions];
            if (conditionId === 'None') newConditions = ['None'];
            else {
                newConditions = newConditions.filter(c => c !== 'None');
                if (newConditions.includes(conditionId)) newConditions = newConditions.filter(c => c !== conditionId);
                else newConditions.push(conditionId);
                if (newConditions.length === 0) newConditions = ['None'];
            }
            return { ...prev, healthConditions: newConditions };
        });
    };

    const toggleProfession = (prof: string) => {
        setFormData(prev => {
            const current = prev.professions;
            if (current.includes(prof)) return { ...prev, professions: current.filter(p => p !== prof) };
            if (current.length >= prev.earningMembers) return prev;
            return { ...prev, professions: [...current, prof] };
        });
    };

    const canProceed = () => {
        switch (currentStep) {
            case 0: return formData.name.trim() && formData.earningMembers >= 1 && formData.professions.length > 0;
            case 1: return formData.currentCity;
            case 2: return true;
            case 3: return true;
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
                professions: formData.professions,
                earning_members: formData.earningMembers,
                max_distance_km: formData.maxDistance,
                monthly_budget: formData.monthlyBudget ? parseInt(formData.monthlyBudget) : null,
                family_type: formData.familyType,
                total_members: formData.totalMembers,
                children: formData.children,
                elderly: formData.elderly,
                health_conditions: formData.healthConditions
            };

            const freshToken = user ? await user.getIdToken() : token ?? undefined;
            const recResponse = await getRecommendations(request, freshToken);
            const advisoryResponse = await getAdvisory(
                formData.name, formData.age, formData.professions, formData.earningMembers,
                formData.currentCity, recResponse.current_aqi, formData.familyType,
                formData.totalMembers, formData.children, formData.elderly,
                formData.healthConditions, recResponse.recommendations,
                recResponse.readiness_score, recResponse.health_urgency
            );

            const resultsData = {
                ...recResponse,
                advisory: advisoryResponse.advisory,
                userName: formData.name,
                userProfile: { name: formData.name, age: formData.age, professions: formData.professions, earningMembers: formData.earningMembers },
                familyHealth: { familyType: formData.familyType, totalMembers: formData.totalMembers, children: formData.children, elderly: formData.elderly, healthConditions: formData.healthConditions },
                location: { currentCity: formData.currentCity, maxDistance: formData.maxDistance, monthlyBudget: formData.monthlyBudget }
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
                minHeight: '100vh', display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', background: '#F5EFE0'
            }}>
                <div style={{ background: '#FFFFFF', borderRadius: 24, padding: 60, textAlign: 'center', maxWidth: 400, boxShadow: '0 40px 80px rgba(92, 74, 42, 0.08)' }}>
                    <div style={{ marginBottom: 24, animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}>
                        <div style={{ width: 80, height: 80, margin: '0 auto', background: '#5C4A2A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32 }}>🧠</div>
                    </div>
                    <h2 style={{ fontSize: 24, fontWeight: 600, color: '#1A1208', marginBottom: 12 }}>AI Analysis in Progress</h2>
                    <p style={{ color: '#6B5B3A', marginBottom: 24 }}>Our ML models are analyzing AQI data, job markets, and health factors...</p>
                </div>
            </div>
        );
    }

    // Custom Stepper + Pill styles
    const labelStyle = { fontSize: 13, fontWeight: 600, letterSpacing: 1, color: '#8B7355', textTransform: 'uppercase' as any, marginBottom: 12, display: 'block' };
    const inputStyle = { width: '100%', background: '#333333', color: '#FFFFFF', border: 'none', borderRadius: 8, padding: '16px 20px', fontSize: 16 };
    const outlineBtnStyle = { border: '1.5px solid #F0EEE4', background: 'transparent', color: '#8B7355', borderRadius: 12, padding: '12px 32px', fontSize: 15, fontWeight: 500, cursor: 'pointer', transition: 'all 0.2s' };
    const pillStyle = (selected: boolean, disabled: boolean) => ({
        border: '1.5px solid',
        borderColor: selected ? '#5C4A2A' : '#F0EEE4',
        background: selected ? 'rgba(92,74,42,0.06)' : 'transparent',
        color: selected ? '#5C4A2A' : disabled ? '#D4CFC5' : '#1A1208',
        padding: '10px 20px', borderRadius: 24, fontSize: 14, fontWeight: 500,
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.2s'
    });

    return (
        <div style={{ minHeight: '100vh', background: '#F5EFE0', padding: '60px 20px' }}>
            <div style={{ maxWidth: 680, margin: '0 auto' }}>
                <div style={{ background: '#FFFFFF', borderRadius: 24, padding: '48px', paddingBottom: 0, boxShadow: '0 40px 80px rgba(92, 74, 42, 0.08)', overflow: 'hidden' }}>
                    <StepIndicator currentStep={currentStep} steps={steps} />

                    <div style={{ minHeight: 400, paddingBottom: 48 }}>
                        {currentStep === 0 && (
                            <div>
                                <h2 style={{ fontSize: 32, fontWeight: 700, fontFamily: "'Libre Baskerville', serif", color: '#5C4A2A', marginBottom: 8 }}>Tell us about yourself</h2>
                                <p style={{ color: '#8B7355', marginBottom: 40, fontSize: 15 }}>We'll use this to personalize your city recommendations.</p>
                                
                                <div style={{ marginBottom: 32 }}>
                                    <label style={labelStyle}>Full Name</label>
                                    <input type="text" style={inputStyle} placeholder="Enter full name" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} />
                                </div>
                                
                                <div style={{ marginBottom: 32 }}>
                                    <label style={labelStyle}>Age</label>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                                        <div style={{ fontSize: 24, fontFamily: "'Libre Baskerville', serif", color: '#5C4A2A', minWidth: 40 }}>{formData.age}</div>
                                        <div style={{ flex: 1, position: 'relative' }}>
                                            <input type="range" min="18" max="80" value={formData.age} onChange={(e) => handleInputChange('age', parseInt(e.target.value))} 
                                                style={{ 
                                                    width: '100%', height: 4, outline: 'none', appearance: 'none', borderRadius: 2, position: 'relative', zIndex: 1,
                                                    background: `linear-gradient(to right, #8B6914 ${(formData.age - 18) / (80 - 18) * 100}%, #E5E0D8 ${(formData.age - 18) / (80 - 18) * 100}%)`
                                                }} />
                                            <style>{`
                                                input[type=range]::-webkit-slider-thumb { appearance: none; width: 20px; height: 20px; border-radius: 50%; background: #FFF; border: 3px solid #8B6914; cursor: pointer; transform: translateY(-8px); position: relative; zIndex: 2; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
                                                input[type=range]::-moz-range-thumb { width: 20px; height: 20px; border-radius: 50%; background: #FFF; border: 3px solid #8B6914; cursor: pointer; transform: translateY(-8px); position: relative; zIndex: 2; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
                                                input[type=range]::-webkit-slider-runnable-track { height: 4px; background: transparent; border-radius: 2px; }
                                            `}</style>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ marginBottom: 32 }}>
                                    <label style={labelStyle}>Earning Members In Family</label>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 8 }}>
                                        <button onClick={() => handleInputChange('earningMembers', Math.max(1, formData.earningMembers - 1))}
                                            style={{ width: 48, height: 48, background: '#FFFFFF', border: '1.5px solid #F0EEE4', borderRight: 'none', borderTopLeftRadius: 12, borderBottomLeftRadius: 12, color: '#D4CFC5', fontSize: 20, cursor: 'pointer' }}>-</button>
                                        <div style={{ width: 64, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', borderTop: '1.5px solid #F0EEE4', borderBottom: '1.5px solid #F0EEE4', fontSize: 16, color: '#1A1208', fontWeight: 500 }}>{formData.earningMembers}</div>
                                        <button onClick={() => handleInputChange('earningMembers', Math.min(10, formData.earningMembers + 1))}
                                            style={{ width: 48, height: 48, background: '#FFFFFF', border: '1.5px solid #F0EEE4', borderLeft: 'none', borderTopRightRadius: 12, borderBottomRightRadius: 12, color: '#D4CFC5', fontSize: 20, cursor: 'pointer' }}>+</button>
                                    </div>
                                    <p style={{ fontSize: 13, color: '#8B7355' }}>You can select up to {formData.earningMembers} profession{formData.earningMembers > 1 ? 's' : ''} below.</p>
                                </div>

                                <div>
                                    <label style={{...labelStyle, textTransform: 'uppercase', marginBottom: 12}}>Profession(s) <span style={{ textTransform: 'none', color: '#B5AFA4', fontWeight: 400 }}>— select up to {formData.earningMembers}</span></label>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                                        {professions.length > 0 ? professions.map(prof => {
                                            const isSelected = formData.professions.includes(prof);
                                            const isDisabled = !isSelected && formData.professions.length >= formData.earningMembers;
                                            return <button key={prof} type="button" onClick={() => toggleProfession(prof)} disabled={isDisabled} style={pillStyle(isSelected, isDisabled)}>{prof}</button>
                                        }) : (
                                            ['IT / Software', 'Healthcare', 'Finance', 'Education', 'Manufacturing', 'Government'].map(p => <button key={p} type="button" style={pillStyle(false, true)}>{p}</button>)
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                        {currentStep === 1 && (
                            <div>
                                <h2 style={{ fontSize: 32, fontWeight: 700, fontFamily: "'Libre Baskerville', serif", color: '#5C4A2A', marginBottom: 8 }}>Migrating from</h2>
                                <p style={{ color: '#8B7355', marginBottom: 40, fontSize: 15 }}>Tell us where your current baseline is.</p>
                                
                                <div style={{ marginBottom: 32 }}>
                                    <label style={labelStyle}>Current City</label>
                                    <select style={{ ...inputStyle, appearance: 'none', background: '#333333 url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23FFFFFF\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpath d=\'m6 9 6 6 6-6\'/%3E%3C/svg%3E") no-repeat right 20px center' }} value={formData.currentCity} onChange={(e) => handleInputChange('currentCity', e.target.value)}>
                                        <option value="">Select your current city</option>
                                        {cities.map(city => <option key={city} value={city}>{city}</option>)}
                                    </select>
                                </div>
                            </div>
                        )}

                        {currentStep === 2 && (
                            <div>
                                <h2 style={{ fontSize: 32, fontWeight: 700, fontFamily: "'Libre Baskerville', serif", color: '#5C4A2A', marginBottom: 8 }}>Your family</h2>
                                <p style={{ color: '#8B7355', marginBottom: 40, fontSize: 15 }}>Configure your household to get accurate recommendations.</p>

                                <div style={{ marginBottom: 32 }}>
                                    <label style={labelStyle}>Family Type</label>
                                    <select style={{ ...inputStyle, appearance: 'none', background: '#333333 url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23FFFFFF\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpath d=\'m6 9 6 6 6-6\'/%3E%3C/svg%3E") no-repeat right 20px center' }} value={formData.familyType} onChange={(e) => handleInputChange('familyType', e.target.value)}>
                                        {familyTypes.map(type => <option key={type} value={type}>{type}</option>)}
                                    </select>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, marginBottom: 32 }}>
                                    {[
                                        { label: 'Total Members', field: 'totalMembers', max: 20 },
                                        { label: 'Children', field: 'children', max: 10 },
                                        { label: 'Elderly (60+)', field: 'elderly', max: getMaxElderly() }
                                    ].map(({ label, field, max }) => {
                                        const val = formData[field as keyof typeof formData] as number;
                                        const disabled = isFieldDisabled(field);
                                        return (
                                            <div key={field}>
                                                <label style={{...labelStyle, fontSize: 11}}>{label}</label>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <button disabled={disabled} onClick={() => handleInputChange(field, Math.max(0, val - 1))}
                                                        style={{ flex: 1, padding: '12px 0', background: '#FFFFFF', border: '1.5px solid #F0EEE4', borderRight: 'none', borderTopLeftRadius: 12, borderBottomLeftRadius: 12, color: disabled ? '#F0EEE4' : '#8B7355', cursor: disabled ? 'not-allowed' : 'pointer' }}>-</button>
                                                    <div style={{ flex: 1.5, padding: '12px 0', textAlign: 'center', borderTop: '1.5px solid #F0EEE4', borderBottom: '1.5px solid #F0EEE4', fontSize: 14, color: disabled ? '#8B7355' : '#1A1208', opacity: disabled ? 0.5 : 1 }}>{val}</div>
                                                    <button disabled={disabled} onClick={() => handleInputChange(field, Math.min(max, val + 1))}
                                                        style={{ flex: 1, padding: '12px 0', background: '#FFFFFF', border: '1.5px solid #F0EEE4', borderLeft: 'none', borderTopRightRadius: 12, borderBottomRightRadius: 12, color: disabled ? '#F0EEE4' : '#8B7355', cursor: disabled ? 'not-allowed' : 'pointer' }}>+</button>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>

                                <div>
                                    <label style={{...labelStyle, marginBottom: 16}}>Health Conditions</label>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                                        {healthConditions.map(condition => {
                                            const isSelected = formData.healthConditions.includes(condition.id);
                                            return <button key={condition.id} onClick={() => toggleHealthCondition(condition.id)} style={pillStyle(isSelected, false)}>{condition.label}</button>
                                        })}
                                    </div>
                                </div>
                            </div>
                        )}

                        {currentStep === 3 && (
                            <div>
                                <h2 style={{ fontSize: 32, fontWeight: 700, fontFamily: "'Libre Baskerville', serif", color: '#5C4A2A', marginBottom: 8 }}>Final Preferences</h2>
                                <p style={{ color: '#8B7355', marginBottom: 40, fontSize: 15 }}>Fine-tuning constraints for the AI engine.</p>
                                
                                <div style={{ marginBottom: 40 }}>
                                    <label style={labelStyle}>Maximum Search Distance: <span style={{ fontFamily: "'Libre Baskerville', serif", textTransform: 'none', fontSize: 18, color: '#5C4A2A' }}>{formData.maxDistance} km</span></label>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                                        <div style={{ flex: 1, position: 'relative' }}>
                                            <input type="range" min="100" max="2500" step="50" value={formData.maxDistance} onChange={(e) => handleInputChange('maxDistance', parseInt(e.target.value))} 
                                                style={{ 
                                                    width: '100%', height: 4, outline: 'none', appearance: 'none', borderRadius: 2, position: 'relative', zIndex: 1,
                                                    background: `linear-gradient(to right, #8B6914 ${((formData.maxDistance - 100) / (2500 - 100)) * 100}%, #E5E0D8 ${((formData.maxDistance - 100) / (2500 - 100)) * 100}%)`
                                                }} />
                                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#B5AFA4', marginTop: 8 }}><span>100 km</span><span>2500 km</span></div>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ marginBottom: 32 }}>
                                    <label style={labelStyle}>Monthly Rent Budget (Optional)</label>
                                    <input type="text" style={inputStyle} placeholder="₹ 20,000" value={formData.monthlyBudget} onChange={(e) => handleInputChange('monthlyBudget', e.target.value.replace(/\D/g, ''))} />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Footer Row exactly matching the screenshot bottom section pattern */}
                    <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between', 
                        padding: '24px 48px', 
                        margin: '0 -48px', // offset card padding to fill bottom
                        background: '#FAF7F0',
                        borderTop: '1px solid #F0EEE4'
                    }}>
                        {currentStep === 0 ? (
                            <Link href="/" style={{ ...outlineBtnStyle, textDecoration: 'none', display: 'flex' } as any}>Back to home</Link>
                        ) : (
                            <button onClick={handlePrevious} style={outlineBtnStyle}>Previous</button>
                        )}
                        
                        <div style={{ fontSize: 14, color: '#8B7355', fontWeight: 500 }}>
                            Step {currentStep + 1} of {steps.length}
                        </div>

                        {currentStep < steps.length - 1 ? (
                            <button onClick={handleNext} disabled={!canProceed()} style={{ ...outlineBtnStyle, opacity: canProceed() ? 1 : 0.5, borderColor: canProceed() ? '#D4CFC5' : '#F0EEE4', color: canProceed() ? '#1A1208' : '#D4CFC5' }}>Next</button>
                        ) : (
                            <button onClick={handleSubmit} disabled={!canProceed()} style={{ ...outlineBtnStyle, background: canProceed() ? '#5C4A2A' : 'transparent', color: canProceed() ? '#FFF' : '#D4CFC5', borderColor: canProceed() ? '#5C4A2A' : '#F0EEE4' }}>Get Results</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
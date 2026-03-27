'use client';

import type { CSSProperties } from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import StepIndicator from '../../components/StepIndicator';
import { fetchCityNames, fetchProfessions, getRecommendations, getAdvisory } from '../../lib/api';
import { type Profile, useAuth } from '../../context/AuthContext';
import { useTranslation } from '../../hooks/useTranslation';
import { useLanguage } from '../../context/LanguageContext';

interface WizardProfile extends Profile {
    professions?: string[] | null;
    earning_members?: number | null;
}

export default function WizardPage() {
    const router = useRouter();
    const { t } = useTranslation();
    const { language } = useLanguage();
    const steps = [
        { label: t('wizard.steps.personal_info'), icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg> },
        { label: t('wizard.steps.location'), icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg> },
        { label: t('wizard.steps.family_health'), icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg> },
        { label: t('wizard.steps.preferences'), icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" /></svg> }
    ];
    const healthConditions = [
        { id: 'None', label: t('wizard.health_conditions_options.none') },
        { id: 'Asthma', label: t('wizard.health_conditions_options.asthma') },
        { id: 'COPD', label: t('wizard.health_conditions_options.copd') },
        { id: 'Bronchitis', label: t('wizard.health_conditions_options.bronchitis') },
        { id: 'Respiratory Allergies', label: t('wizard.health_conditions_options.respiratory_allergies') },
        { id: 'Lung Disease', label: t('wizard.health_conditions_options.lung_disease') },
        { id: 'Heart Disease', label: t('wizard.health_conditions_options.heart_disease') },
        { id: 'Elderly Respiratory Issues', label: t('wizard.health_conditions_options.elderly_respiratory_issues') },
        { id: 'Other', label: t('wizard.health_conditions_options.other') }
    ];
    const familyTypes = [
        t('wizard.family_types.nuclear_family'),
        t('wizard.family_types.joint_family'),
        t('wizard.family_types.single'),
        t('wizard.family_types.couple')
    ];

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
        familyType: t('wizard.family_types.nuclear_family'),
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
        const wizardProfile = profile as WizardProfile | null;
        if (wizardProfile) {
            // Prefill once profile data arrives from auth context.
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setFormData(prev => ({
                ...prev,
                name: wizardProfile.name || prev.name,
                age: wizardProfile.age || prev.age,
                professions: wizardProfile.professions || (wizardProfile.profession ? [wizardProfile.profession] : prev.professions),
                earningMembers: wizardProfile.earning_members || prev.earningMembers,
                currentCity: wizardProfile.current_city || prev.currentCity,
                maxDistance: wizardProfile.max_distance_km || prev.maxDistance,
                monthlyBudget: wizardProfile.monthly_budget ? String(wizardProfile.monthly_budget) : prev.monthlyBudget,
                familyType: wizardProfile.family_type || prev.familyType,
                totalMembers: wizardProfile.total_members || prev.totalMembers,
                children: wizardProfile.children ?? prev.children,
                elderly: wizardProfile.elderly ?? prev.elderly,
                healthConditions: wizardProfile.health_conditions && wizardProfile.health_conditions.length > 0 ? wizardProfile.health_conditions : prev.healthConditions,
            }));
        }
    }, [profile]);

    const isFieldDisabled = (field: string) => {
        const { familyType } = formData;
        if (familyType === t('wizard.family_types.single')) return field === 'totalMembers' || field === 'children';
        if (familyType === t('wizard.family_types.couple')) return field === 'totalMembers' || field === 'children';
        if (familyType === t('wizard.family_types.nuclear_family')) return field === 'elderly';
        return false;
    };

    const getMaxElderly = () => {
        const { familyType, totalMembers } = formData;
        if (familyType === t('wizard.family_types.single')) return 1;
        if (familyType === t('wizard.family_types.couple')) return 2;
        if (familyType === t('wizard.family_types.nuclear_family')) return 0;
        return totalMembers;
    };

    const handleInputChange = (field: string, value: string | number) => {
        setFormData(prev => {
            const newData = { ...prev, [field]: value };
            if (field === 'familyType') {
                if (value === t('wizard.family_types.single')) {
                    newData.totalMembers = 1; newData.children = 0;
                    if (prev.elderly > 1) newData.elderly = 1;
                } else if (value === t('wizard.family_types.couple')) {
                    newData.totalMembers = 2; newData.children = 0;
                    if (prev.elderly > 2) newData.elderly = 2;
                } else if (value === t('wizard.family_types.nuclear_family')) {
                    newData.elderly = 0;
                    if (prev.totalMembers < 2) newData.totalMembers = 3;
                }
            }
            if (field === 'elderly') {
                const numValue = typeof value === 'number' ? value : parseInt(value as string) || 0;
                if (prev.familyType === t('wizard.family_types.single') && numValue > 1) newData.elderly = 1;
                if (prev.familyType === t('wizard.family_types.couple') && numValue > 2) newData.elderly = 2;
                if (prev.familyType === t('wizard.family_types.joint_family') && numValue > prev.totalMembers) newData.elderly = prev.totalMembers;
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
                recResponse.readiness_score, recResponse.health_urgency, language
            );

            const resultsData = {
                ...recResponse,
                advisory: advisoryResponse.advisory,
                userName: formData.name,
                userProfile: {
                    name: formData.name,
                    age: formData.age,
                    profession: formData.professions[0] || '',
                    professions: formData.professions,
                    earningMembers: formData.earningMembers
                },
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
                    <h2 style={{ fontSize: 24, fontWeight: 600, color: '#1A1208', marginBottom: 12 }}>{t('wizard.loading_title')}</h2>
                    <p style={{ color: '#6B5B3A', marginBottom: 24 }}>{t('wizard.loading_description')}</p>
                </div>
            </div>
        );
    }

    const labelStyle = { fontSize: 12, fontWeight: 600, letterSpacing: 1, color: '#8B7355', textTransform: 'uppercase' as const, marginBottom: 8, display: 'block' };
    const inputStyle = { width: '100%', background: '#ffffff', color: '#1A1208', border: '1px solid #E7DED1', borderRadius: 12, padding: '12px 16px', fontSize: 14, boxShadow: '0 1px 2px rgba(92, 74, 42, 0.04)' };
    const selectStyle = {
        ...inputStyle,
        appearance: 'none' as const,
        paddingRight: 48,
        backgroundColor: '#FFFFFF',
        backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%238B7355\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpath d=\'m6 9 6 6 6-6\'/%3E%3C/svg%3E")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 16px center',
        backgroundSize: '16px',
    };
    const outlineBtnStyle = { border: '1.5px solid #F0EEE4', background: 'transparent', color: '#8B7355', borderRadius: 12, padding: '10px 24px', fontSize: 14, fontWeight: 500, cursor: 'pointer', transition: 'all 0.2s' };
    const backHomeLinkStyle: CSSProperties = { ...outlineBtnStyle, textDecoration: 'none', display: 'flex' };
    const counterButtonBaseStyle = {
        width: 42,
        height: 42,
        background: '#FFFFFF',
        border: '1.5px solid #E7DED1',
        color: '#8B7355',
        fontSize: 20,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 1,
        flexShrink: 0,
    };
    const pillStyle = (selected: boolean, disabled: boolean) => ({
        border: '1.5px solid',
        borderColor: selected ? '#5C4A2A' : '#F0EEE4',
        background: selected ? 'rgba(92,74,42,0.06)' : 'transparent',
        color: selected ? '#5C4A2A' : disabled ? '#D4CFC5' : '#1A1208',
        padding: '8px 16px', borderRadius: 24, fontSize: 13, fontWeight: 500,
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.2s'
    });

    return (
        <div style={{ minHeight: '100vh', background: '#F5EFE0', padding: '32px 20px' }}>
            <div style={{ maxWidth: 600, margin: '0 auto' }}>
                <div style={{ background: '#FFFFFF', borderRadius: 24, padding: '32px', paddingBottom: 0, boxShadow: '0 40px 80px rgba(92, 74, 42, 0.08)', overflow: 'hidden' }}>
                    <StepIndicator currentStep={currentStep} steps={steps} />

                    <div style={{ minHeight: 320, paddingBottom: 32 }}>
                        {currentStep === 0 && (
                            <div>
                                <h2 style={{ fontSize: 24, fontWeight: 700, fontFamily: 'var(--app-font-serif)', color: '#5C4A2A', marginBottom: 20 }}>{t('wizard.personal.title')}</h2>

                                <div style={{ marginBottom: 24 }}>
                                    <label style={labelStyle}>{t('wizard.personal.full_name')}</label>
                                    <input type="text" style={inputStyle} placeholder={t('wizard.personal.full_name_placeholder')} value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} />
                                </div>

                                <div style={{ marginBottom: 24 }}>
                                    <label style={labelStyle}>{t('wizard.personal.age')}</label>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                                        <div style={{ fontSize: 20, fontFamily: 'var(--app-font-serif)', color: '#5C4A2A', minWidth: 40 }}>{formData.age}</div>
                                        <div style={{ flex: 1, position: 'relative' }}>
                                            <input type="range" min="18" max="80" value={formData.age} onChange={(e) => handleInputChange('age', parseInt(e.target.value))}
                                                style={{
                                                    width: '100%', height: 3, outline: 'none', appearance: 'none', borderRadius: 2, position: 'relative', zIndex: 1,
                                                    background: `linear-gradient(to right, #8B6914 ${(formData.age - 18) / (80 - 18) * 100}%, #E5E0D8 ${(formData.age - 18) / (80 - 18) * 100}%)`
                                                }} />
                                            <style>{`
                                                input[type=range]::-webkit-slider-thumb { appearance: none; width: 16px; height: 16px; border-radius: 50%; background: #FFF; border: 3px solid #8B6914; cursor: pointer; transform: translateY(-6.5px); position: relative; zIndex: 2; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
                                                input[type=range]::-moz-range-thumb { width: 16px; height: 16px; border-radius: 50%; background: #FFF; border: 3px solid #8B6914; cursor: pointer; transform: translateY(-6.5px); position: relative; zIndex: 2; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
                                                input[type=range]::-webkit-slider-runnable-track { height: 3px; background: transparent; border-radius: 1.5px; }
                                            `}</style>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ marginBottom: 24 }}>
                                    <label style={labelStyle}>{t('wizard.personal.earning_members')}</label>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 8 }}>
                                        <button onClick={() => handleInputChange('earningMembers', Math.max(1, formData.earningMembers - 1))}
                                            style={{ width: 40, height: 40, background: '#FFFFFF', border: '1.5px solid #F0EEE4', borderRight: 'none', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, color: '#D4CFC5', fontSize: 18, cursor: 'pointer' }}>-</button>
                                        <div style={{ width: 56, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', borderTop: '1.5px solid #F0EEE4', borderBottom: '1.5px solid #F0EEE4', fontSize: 14, color: '#1A1208', fontWeight: 500 }}>{formData.earningMembers}</div>
                                        <button onClick={() => handleInputChange('earningMembers', Math.min(10, formData.earningMembers + 1))}
                                            style={{ width: 40, height: 40, background: '#FFFFFF', border: '1.5px solid #F0EEE4', borderLeft: 'none', borderTopRightRadius: 10, borderBottomRightRadius: 10, color: '#D4CFC5', fontSize: 18, cursor: 'pointer' }}>+</button>
                                    </div>
                                    <p style={{ fontSize: 13, color: '#8B7355' }}>
                                        {formData.earningMembers > 1 ? t('wizard.personal.can_select_plural', { n: formData.earningMembers }) : t('wizard.personal.can_select', { n: formData.earningMembers })}
                                    </p>
                                </div>

                                <div>
                                    <label style={{ ...labelStyle, textTransform: 'uppercase', marginBottom: 12 }}>
                                        {t('wizard.personal.professions')} <span style={{ textTransform: 'none', color: '#B5AFA4', fontWeight: 400 }}>- {t('wizard.personal.select_up_to', { n: formData.earningMembers })}</span>
                                    </label>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                                        {professions.length > 0 ? professions.map(prof => {
                                            const isSelected = formData.professions.includes(prof);
                                            const isDisabled = !isSelected && formData.professions.length >= formData.earningMembers;
                                            return <button key={prof} type="button" onClick={() => toggleProfession(prof)} disabled={isDisabled} style={pillStyle(isSelected, isDisabled)}>{prof}</button>;
                                        }) : (
                                            [t('wizard.professions.it_software'), t('wizard.professions.healthcare'), t('wizard.professions.finance'), t('wizard.professions.education'), t('wizard.professions.manufacturing'), t('wizard.professions.government')].map(p => <button key={p} type="button" style={pillStyle(false, true)}>{p}</button>)
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                        {currentStep === 1 && (
                            <div>
                                <h2 style={{ fontSize: 24, fontWeight: 700, fontFamily: 'var(--app-font-serif)', color: '#5C4A2A', marginBottom: 4 }}>{t('wizard.location.title')}</h2>
                                <p style={{ color: '#8B7355', marginBottom: 24, fontSize: 14 }}>{t('wizard.location.subtitle')}</p>

                                <div style={{ marginBottom: 24 }}>
                                    <label style={labelStyle}>{t('wizard.location.current_city')}</label>
                                    <select style={selectStyle} value={formData.currentCity} onChange={(e) => handleInputChange('currentCity', e.target.value)}>
                                        <option value="">{t('wizard.location.current_city_placeholder')}</option>
                                        {cities.map(city => <option key={city} value={city}>{city}</option>)}
                                    </select>
                                </div>
                            </div>
                        )}

                        {currentStep === 2 && (
                            <div>
                                <h2 style={{ fontSize: 24, fontWeight: 700, fontFamily: 'var(--app-font-serif)', color: '#5C4A2A', marginBottom: 4 }}>{t('wizard.family_health.title')}</h2>
                                <p style={{ color: '#8B7355', marginBottom: 24, fontSize: 14 }}>{t('wizard.family_health.subtitle')}</p>

                                <div style={{ marginBottom: 24 }}>
                                    <label style={labelStyle}>{t('wizard.family_health.family_type')}</label>
                                    <select style={selectStyle} value={formData.familyType} onChange={(e) => handleInputChange('familyType', e.target.value)}>
                                        {familyTypes.map(type => <option key={type} value={type}>{type}</option>)}
                                    </select>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 16, marginBottom: 32 }}>
                                    {[
                                        { label: t('wizard.family_health.total_members'), field: 'totalMembers', max: 20 },
                                        { label: t('wizard.family_health.children'), field: 'children', max: 10 },
                                        { label: t('wizard.family_health.elderly_60_plus'), field: 'elderly', max: getMaxElderly() }
                                    ].map(({ label, field, max }) => {
                                        const val = formData[field as keyof typeof formData] as number;
                                        const disabled = isFieldDisabled(field);
                                        return (
                                            <div key={field} style={{ background: '#FCFAF6', border: '1px solid #EFE6DA', borderRadius: 16, padding: 16, minHeight: 138, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                                <label style={{ ...labelStyle, fontSize: 11 }}>{label}</label>
                                                <div style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'center', marginTop: 10 }}>
                                                    <button disabled={disabled} onClick={() => handleInputChange(field, Math.max(0, val - 1))}
                                                        style={{ ...counterButtonBaseStyle, borderRight: 'none', borderTopLeftRadius: 12, borderBottomLeftRadius: 12, color: disabled ? '#D8D0C6' : '#8B7355', cursor: disabled ? 'not-allowed' : 'pointer', background: disabled ? '#F9F7F2' : '#FFFFFF' }}>-</button>
                                                    <div style={{ width: 72, height: 42, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', borderTop: '1.5px solid #E7DED1', borderBottom: '1.5px solid #E7DED1', background: disabled ? '#F9F7F2' : '#FFFFFF', fontSize: 18, color: disabled ? '#8B7355' : '#1A1208', fontWeight: 600, opacity: disabled ? 0.6 : 1 }}>{val}</div>
                                                    <button disabled={disabled} onClick={() => handleInputChange(field, Math.min(max, val + 1))}
                                                        style={{ ...counterButtonBaseStyle, borderLeft: 'none', borderTopRightRadius: 12, borderBottomRightRadius: 12, color: disabled ? '#D8D0C6' : '#8B7355', cursor: disabled ? 'not-allowed' : 'pointer', background: disabled ? '#F9F7F2' : '#FFFFFF' }}>+</button>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div>
                                    <label style={{ ...labelStyle, marginBottom: 16 }}>{t('wizard.family_health.health_conditions_label')}</label>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                                        {healthConditions.map(condition => {
                                            const isSelected = formData.healthConditions.includes(condition.id);
                                            return <button key={condition.id} onClick={() => toggleHealthCondition(condition.id)} style={pillStyle(isSelected, false)}>{condition.label}</button>;
                                        })}
                                    </div>
                                </div>
                            </div>
                        )}

                        {currentStep === 3 && (
                            <div>
                                <h2 style={{ fontSize: 24, fontWeight: 700, fontFamily: 'var(--app-font-serif)', color: '#5C4A2A', marginBottom: 4 }}>{t('wizard.preferences.title')}</h2>
                                <p style={{ color: '#8B7355', marginBottom: 24, fontSize: 14 }}>{t('wizard.preferences.subtitle')}</p>

                                <div style={{ marginBottom: 40 }}>
                                    <label style={labelStyle}>{t('wizard.preferences.maximum_search_distance')}: <span style={{ fontFamily: 'var(--app-font-serif)', textTransform: 'none', fontSize: 18, color: '#5C4A2A' }}>{formData.maxDistance} km</span></label>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                                        <div style={{ flex: 1, position: 'relative' }}>
                                            <input type="range" min="100" max="2500" step="50" value={formData.maxDistance} onChange={(e) => handleInputChange('maxDistance', parseInt(e.target.value))}
                                                style={{
                                                    width: '100%', height: 3, outline: 'none', appearance: 'none', borderRadius: 2, position: 'relative', zIndex: 1,
                                                    background: `linear-gradient(to right, #8B6914 ${((formData.maxDistance - 100) / (2500 - 100)) * 100}%, #E5E0D8 ${((formData.maxDistance - 100) / (2500 - 100)) * 100}%)`
                                                }} />
                                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#B5AFA4', marginTop: 8 }}><span>{t('wizard.preferences.minimum_distance')}</span><span>{t('wizard.preferences.maximum_distance')}</span></div>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ marginBottom: 24 }}>
                                    <label style={labelStyle}>{t('wizard.preferences.monthly_rent_label')}</label>
                                    <input type="text" style={inputStyle} placeholder={t('wizard.preferences.rent_placeholder_short')} value={formData.monthlyBudget} onChange={(e) => handleInputChange('monthlyBudget', e.target.value.replace(/\D/g, ''))} />
                                </div>
                            </div>
                        )}
                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '20px 32px',
                        margin: '0 -32px',
                        background: '#FAF7F0',
                        borderTop: '1px solid #F0EEE4'
                    }}>
                        {currentStep === 0 ? (
                            <Link href="/" style={backHomeLinkStyle}>{t('wizard.back_to_home')}</Link>
                        ) : (
                            <button onClick={handlePrevious} style={outlineBtnStyle}>{t('wizard.previous')}</button>
                        )}

                        <div style={{ fontSize: 14, color: '#8B7355', fontWeight: 500 }}>
                            {t('wizard.step_of', { current: currentStep + 1, total: steps.length })}
                        </div>

                        {currentStep < steps.length - 1 ? (
                            <button onClick={handleNext} disabled={!canProceed()} style={{ ...outlineBtnStyle, opacity: canProceed() ? 1 : 0.5, borderColor: canProceed() ? '#D4CFC5' : '#F0EEE4', color: canProceed() ? '#1A1208' : '#D4CFC5' }}>{t('wizard.next')}</button>
                        ) : (
                            <button onClick={handleSubmit} disabled={!canProceed()} style={{ ...outlineBtnStyle, background: canProceed() ? '#5C4A2A' : 'transparent', color: canProceed() ? '#FFF' : '#D4CFC5', borderColor: canProceed() ? '#5C4A2A' : '#F0EEE4' }}>{t('wizard.results')}</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

'use client';

interface StepIndicatorProps {
    currentStep: number;
    steps: { label: string; icon: string }[];
}

export default function StepIndicator({ currentStep, steps }: StepIndicatorProps) {
    return (
        <div className="step-indicator" style={{ marginBottom: 40 }}>
            {steps.map((step, index) => (
                <div key={index} className="step-item">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                        <div
                            className={`step-circle ${index < currentStep ? 'completed' :
                                    index === currentStep ? 'active' : 'inactive'
                                }`}
                        >
                            {step.icon}
                        </div>
                        <span style={{
                            fontSize: 13,
                            fontWeight: 500,
                            color: index <= currentStep ? '#1E293B' : '#94A3B8'
                        }}>
                            {step.label}
                        </span>
                    </div>

                    {index < steps.length - 1 && (
                        <div
                            className={`step-line ${index < currentStep ? 'active' : 'inactive'}`}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}

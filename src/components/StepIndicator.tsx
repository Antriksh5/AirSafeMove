'use client';

interface StepIndicatorProps {
    currentStep: number;
    steps: { label: string; icon: React.ReactNode }[];
}

export default function StepIndicator({ currentStep, steps }: StepIndicatorProps) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 0,
            marginBottom: 48,
            width: '100%',
        }}>
            {steps.map((step, index) => {
                const isCompleted = index < currentStep;
                const isActive = index === currentStep;

                return (
                    <div key={index} style={{
                        display: 'flex',
                        alignItems: 'center',
                        flex: index < steps.length - 1 ? 1 : 'none',
                    }}>
                        {/* Step Circle + Label Container */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 12,
                            position: 'relative',
                            width: 80, // fixed width for centering
                        }}>
                            <div style={{
                                width: 48,
                                height: 48,
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: isActive || isCompleted ? '#5C4A2A' : '#FFFBF2',
                                border: isActive || isCompleted ? '1.5px solid #5C4A2A' : '1.5px solid #E5E0D8',
                                color: isActive || isCompleted ? '#FFFBF2' : '#8B7355',
                                transition: 'all 0.3s ease',
                                zIndex: 2,
                            }}>
                                {/* Render the react node icon */}
                                <div style={{ width: 20, height: 20 }}>
                                    {step.icon}
                                </div>
                            </div>

                            <span style={{
                                fontSize: 13,
                                fontWeight: 500,
                                color: isActive || isCompleted ? '#5C4A2A' : '#8B7355',
                                whiteSpace: 'nowrap',
                                position: 'absolute',
                                top: 60,
                                textAlign: 'center',
                                width: 120, // wider than circle to prevent text wrap
                            }}>
                                {step.label}
                            </span>
                        </div>

                        {/* Connecting Line */}
                        {index < steps.length - 1 && (
                            <div style={{
                                flex: 1,
                                height: 1.5,
                                background: isCompleted ? '#E5E0D8' : '#E5E0D8',
                                margin: '0 8px',
                                position: 'relative',
                                top: -14, // align with centers of the 48px circles
                            }} />
                        )}
                    </div>
                );
            })}
        </div>
    );
}

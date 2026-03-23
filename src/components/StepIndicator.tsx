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
                            width: 60, // fixed width for centering
                        }}>
                            <div style={{
                                width: 40,
                                height: 40,
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
                                <div style={{ width: 18, height: 18 }}>
                                    {step.icon}
                                </div>
                            </div>

                            <span style={{
                                fontSize: 12,
                                fontWeight: 500,
                                color: isActive || isCompleted ? '#5C4A2A' : '#8B7355',
                                whiteSpace: 'nowrap',
                                position: 'absolute',
                                top: 48,
                                textAlign: 'center',
                                width: 100, // wider than circle to prevent text wrap
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
                                top: -8, // align with centers of the 40px circles
                            }} />
                        )}
                    </div>
                );
            })}
        </div>
    );
}

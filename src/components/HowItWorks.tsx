'use client';

const steps = [
    {
        number: '01',
        icon: '👤',
        title: 'Enter Your Profile',
        description: 'Tell us about yourself - your current city, profession, age, and migration preferences.'
    },
    {
        number: '02',
        icon: '⚙️',
        title: 'Set Constraints',
        description: 'Define your maximum distance, budget, and food preferences for personalized filtering.'
    },
    {
        number: '03',
        icon: '✨',
        title: 'AI Analysis',
        description: 'Our ML model analyzes AQI data, costs, and career opportunities to score cities.'
    },
    {
        number: '04',
        icon: '📋',
        title: 'Get Report',
        description: 'Receive top 5 city recommendations with detailed migration readiness report.'
    }
];

const features = [
    {
        icon: '📊',
        title: 'Real-time AQI Data',
        description: 'Access 5-year historical and current air quality data for 25+ Indian cities.'
    },
    {
        icon: '📍',
        title: 'Distance Optimization',
        description: 'Find the best cities within your preferred migration distance using Haversine formula.'
    },
    {
        icon: '💼',
        title: 'Profession Matching',
        description: 'Get recommendations based on job opportunities in your field across cities.'
    },
    {
        icon: '₹',
        title: 'Cost Analysis',
        description: 'Compare housing costs and find cities that match your budget requirements.'
    },
    {
        icon: '👥',
        title: 'Community Insights',
        description: 'Understand cultural compatibility and community profiles of recommended cities.'
    },
    {
        icon: '🤖',
        title: 'AI Advisory',
        description: 'Receive personalized migration advice with explainable AI recommendations.'
    }
];

export default function HowItWorks() {
    return (
        <>
            {/* How it Works Section */}
            <section id="how-it-works" style={{ padding: '80px 32px', background: 'white' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: 60 }}>
                        <h2 style={{ fontSize: 36, fontWeight: 700, color: '#1E293B', marginBottom: 12 }}>
                            How AirSafe Move Works
                        </h2>
                        <p style={{ fontSize: 16, color: '#64748B' }}>
                            Four simple steps to find your ideal clean-air destination
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: 24
                    }}>
                        {steps.map((step, index) => (
                            <div key={index} style={{ position: 'relative' }}>
                                {/* Step Number Badge */}
                                <div style={{
                                    position: 'absolute',
                                    top: -12,
                                    left: 16,
                                    background: '#14B8A6',
                                    color: 'white',
                                    padding: '4px 10px',
                                    borderRadius: 12,
                                    fontSize: 12,
                                    fontWeight: 600,
                                    zIndex: 1
                                }}>
                                    {step.number}
                                </div>

                                <div className="card" style={{
                                    paddingTop: 32,
                                    height: '100%',
                                    position: 'relative'
                                }}>
                                    <div className="icon-circle icon-teal" style={{ marginBottom: 16 }}>
                                        {step.icon}
                                    </div>
                                    <h3 style={{
                                        fontSize: 16,
                                        fontWeight: 600,
                                        color: '#1E293B',
                                        marginBottom: 8
                                    }}>
                                        {step.title}
                                    </h3>
                                    <p style={{
                                        fontSize: 13,
                                        color: '#64748B',
                                        lineHeight: 1.5
                                    }}>
                                        {step.description}
                                    </p>
                                </div>

                                {/* Connector Arrow */}
                                {index < steps.length - 1 && (
                                    <div style={{
                                        position: 'absolute',
                                        right: -20,
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        color: '#14B8A6',
                                        fontSize: 20,
                                        zIndex: 2
                                    }}>
                                        ▶
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" style={{
                padding: '80px 32px',
                background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)'
            }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: 60 }}>
                        <h2 style={{ fontSize: 36, fontWeight: 700, color: '#1E293B', marginBottom: 12 }}>
                            Comprehensive Migration Intelligence
                        </h2>
                        <p style={{ fontSize: 16, color: '#64748B', maxWidth: 600, margin: '0 auto' }}>
                            Our AI analyzes multiple factors to give you the most suitable city
                            recommendations for a healthier, happier life.
                        </p>
                    </div>

                    <div className="feature-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="card card-hover">
                                <div className="icon-circle icon-teal" style={{ marginBottom: 16 }}>
                                    {feature.icon}
                                </div>
                                <h3 style={{
                                    fontSize: 16,
                                    fontWeight: 600,
                                    color: '#1E293B',
                                    marginBottom: 8
                                }}>
                                    {feature.title}
                                </h3>
                                <p style={{
                                    fontSize: 14,
                                    color: '#64748B',
                                    lineHeight: 1.5
                                }}>
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

import React, { useState, useEffect, useRef } from 'react';

// Stats data - moved outside component to avoid dependency issues
const stats = [
    {
        id: 'students',
        label: 'Students',
        target: 850,
        suffix: '+',
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
        color: 'from-emerald-500 to-green-600',
        bgColor: 'bg-emerald-50',
        textColor: 'text-emerald-700'
    },
    {
        id: 'programs',
        label: 'Programs',
        target: 12,
        suffix: '+',
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
        color: 'from-amber-500 to-yellow-600',
        bgColor: 'bg-amber-50',
        textColor: 'text-amber-700'
    },
    {
        id: 'faculty',
        label: 'Faculty Members',
        target: 28,
        suffix: '+',
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        color: 'from-blue-500 to-indigo-600',
        bgColor: 'bg-blue-50',
        textColor: 'text-blue-700'
    },
    {
        id: 'graduates',
        label: 'Graduates',
        target: 1200,
        suffix: '+',
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        ),
        color: 'from-purple-500 to-pink-600',
        bgColor: 'bg-purple-50',
        textColor: 'text-purple-700'
    },
    {
        id: 'events',
        label: 'Events',
        target: 45,
        suffix: '+',
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
        color: 'from-teal-500 to-cyan-600',
        bgColor: 'bg-teal-50',
        textColor: 'text-teal-700'
    }
];

const Analytics = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [counters, setCounters] = useState({
        students: 0,
        programs: 0,
        faculty: 0,
        graduates: 0,
        events: 0
    });
    const sectionRef = useRef(null);

    // Animate counter
    const animateCounter = (id, target) => {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setCounters(prev => ({ ...prev, [id]: target }));
                clearInterval(timer);
            } else {
                setCounters(prev => ({ ...prev, [id]: Math.floor(current) }));
            }
        }, duration / steps);
    };

    // Intersection Observer for scroll animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isVisible) {
                        setIsVisible(true);
                        // Start animations
                        stats.forEach((stat) => {
                            animateCounter(stat.id, stat.target);
                        });
                    }
                });
            },
            { threshold: 0.2 }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [isVisible]);

    return (
        <section
            ref={sectionRef}
            className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-emerald-50 relative overflow-hidden"
        >
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">
                        Department Statistics
                    </h2>
                    <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Our achievements and growth in numbers
                    </p>
                </div>

                {/* Analytics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.id}
                            className={`${stat.bgColor} rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-${stat.textColor.split('-')[1]}-300 group`}
                            style={{
                                animationDelay: `${index * 100}ms`,
                                animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none',
                                opacity: isVisible ? 1 : 0
                            }}
                        >
                            {/* Icon */}
                            <div className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${stat.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                {stat.icon}
                            </div>

                            {/* Number */}
                            <div className="mb-2">
                                <span className={`text-4xl md:text-5xl font-bold ${stat.textColor} transition-all duration-300`}>
                                    {counters[stat.id]}
                                </span>
                                <span className={`text-2xl ${stat.textColor} font-semibold`}>
                                    {stat.suffix}
                                </span>
                            </div>

                            {/* Label */}
                            <h3 className={`text-lg font-semibold ${stat.textColor} mb-1`}>
                                {stat.label}
                            </h3>

                            {/* Progress Bar */}
                            <div className="mt-4 h-2 bg-white rounded-full overflow-hidden">
                                <div
                                    className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-2000 ease-out`}
                                    style={{
                                        width: isVisible ? `${(counters[stat.id] / stat.target) * 100}%` : '0%'
                                    }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="mt-12 text-center">
                    <p className="text-gray-600 text-sm">
                        * Statistics updated as of {new Date().getFullYear()}
                    </p>
                </div>
            </div>

            <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </section>
    );
};

export default Analytics;

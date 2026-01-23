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
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [counters, setCounters] = useState({
        students: 0,
        programs: 0,
        faculty: 0,
        graduates: 0,
        events: 0
    });
    const sectionRef = useRef(null);
    const intervalRef = useRef(null);
    const timeoutRef = useRef(null);

    // Calculate how many items to show per slide based on screen size
    const getItemsPerSlide = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth >= 1280) return 3; // xl: 3 items
            if (window.innerWidth >= 1024) return 3; // lg: 3 items
            if (window.innerWidth >= 640) return 2; // sm: 2 items
            return 1; // mobile: 1 item
        }
        return 3; // default
    };

    const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide());
    const totalSlides = Math.ceil(stats.length / itemsPerSlide);

    // Update items per slide on resize
    useEffect(() => {
        const handleResize = () => {
            setItemsPerSlide(getItemsPerSlide());
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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

    // Auto-rotate carousel timer (4 seconds)
    useEffect(() => {
        if (isAutoPlaying && isVisible) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
            }, 4000);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isAutoPlaying, isVisible, totalSlides]);

    // Intersection Observer for scroll animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isVisible) {
                        setIsVisible(true);
                        // Start animations for all stats
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

    // Pause auto-play on hover
    const handleMouseEnter = () => {
        setIsAutoPlaying(false);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    const handleMouseLeave = () => {
        setIsAutoPlaying(true);
    };

    // Manual navigation
    const goToSlide = (index) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            setIsAutoPlaying(true);
        }, 3000);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
        );
        setIsAutoPlaying(false);
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            setIsAutoPlaying(true);
        }, 3000);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        setIsAutoPlaying(false);
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            setIsAutoPlaying(true);
        }, 3000);
    };


    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

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

                {/* Carousel Container */}
                <div
                    className="relative max-w-7xl mx-auto"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Navigation Arrows */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white/90 backdrop-blur-sm text-emerald-700 p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 z-10 hidden md:flex items-center justify-center"
                        aria-label="Previous slide"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white/90 backdrop-blur-sm text-emerald-700 p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 z-10 hidden md:flex items-center justify-center"
                        aria-label="Next slide"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Carousel Slides */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${currentIndex * 100}%)`
                            }}
                        >
                            {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                                const start = slideIndex * itemsPerSlide;
                                const slideStats = stats.slice(start, start + itemsPerSlide);

                                return (
                                    <div
                                        key={slideIndex}
                                        className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2"
                                    >
                                        {slideStats.map((stat, index) => (
                                            <div
                                                key={stat.id}
                                                className={`${stat.bgColor} rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent group`}
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
                                );
                            })}
                        </div>
                    </div>

                    {/* Progress Indicator Dots */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all duration-300 ${index === currentIndex
                                    ? 'w-8 h-2 bg-emerald-600 rounded-full'
                                    : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-emerald-400'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Timer Progress Bar */}
                    {isAutoPlaying && isVisible && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
                            <div
                                className="h-full bg-gradient-to-r from-emerald-600 to-amber-500 transition-all duration-4000 ease-linear"
                                style={{
                                    width: '100%',
                                    animation: 'progress 4s linear infinite'
                                }}
                            ></div>
                        </div>
                    )}
                </div>

                {/* Slide Indicators (Labels) */}
                <div className="flex justify-center mt-8 space-x-3 flex-wrap gap-2">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`transition-all duration-300 text-sm ${index === currentIndex
                                ? 'bg-gradient-to-r from-emerald-600 to-amber-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg'
                                : 'bg-gray-200 text-gray-600 px-3 py-1 rounded-full hover:bg-gray-300'
                                }`}
                        >
                            Slide {index + 1}
                        </button>
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
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
        </section>
    );
};

export default Analytics;

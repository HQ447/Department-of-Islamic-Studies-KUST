import React, { useState, useEffect, useRef } from 'react';

// Messages data
const messages = [
    {
        id: 1,
        type: 'Department',
        title: 'Department Message',
        name: 'Department of Islamic Studies',
        designation: 'Academic Department',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
        message: 'The Department of Islamic Studies at Kohat University of Science & Technology is dedicated to providing comprehensive Islamic education that combines traditional Islamic scholarship with contemporary academic methodologies. We strive to produce graduates who are well-versed in Islamic sciences, capable of addressing modern challenges with Islamic wisdom, and committed to serving their communities with knowledge and integrity.',
        color: 'from-emerald-600 to-green-700',
        bgColor: 'bg-emerald-50',
        textColor: 'text-emerald-800'
    },
    {
        id: 2,
        type: 'Dean',
        title: "Dean's Message",
        name: 'Prof. Dr. Muhammad Ali Khan',
        designation: 'Dean, Faculty of Islamic Studies',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
        message: 'As the Dean of the Faculty of Islamic Studies, I am honored to lead a department that is committed to excellence in Islamic education and research. Our mission is to nurture scholars who can bridge the gap between traditional Islamic knowledge and contemporary challenges. We believe in fostering critical thinking, ethical leadership, and a deep understanding of Islamic principles that guide us in all aspects of life.',
        color: 'from-amber-600 to-yellow-700',
        bgColor: 'bg-amber-50',
        textColor: 'text-amber-800'
    },
    {
        id: 3,
        type: 'Chairman',
        title: "Chairman's Message",
        name: 'Dr. Ahmed Hassan',
        designation: 'Chairman, Department of Islamic Studies',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
        message: 'Welcome to the Department of Islamic Studies. Our department has been at the forefront of Islamic education, combining rigorous academic training with spiritual development. We take pride in our diverse programs, distinguished faculty, and the achievements of our students and alumni. Our commitment is to provide quality education that prepares students to be ambassadors of Islamic values in their professional and personal lives.',
        color: 'from-blue-600 to-indigo-700',
        bgColor: 'bg-blue-50',
        textColor: 'text-blue-800'
    }
];

const Messages = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const intervalRef = useRef(null);
    const timeoutRef = useRef(null);

    // Auto-rotate timer (5 seconds)
    useEffect(() => {
        if (isAutoPlaying) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
            }, 5000);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isAutoPlaying]);

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
        // Reset timer when manually navigating
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
            prevIndex === 0 ? messages.length - 1 : prevIndex - 1
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
        setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
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

    const currentMessage = messages[currentIndex];

    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-emerald-50 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">
                        Leadership Messages
                    </h2>
                    <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Words of wisdom from our leadership
                    </p>
                </div>

                {/* Slider Container */}
                <div
                    className="relative max-w-5xl mx-auto"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Main Message Card */}
                    <div className={`${currentMessage.bgColor} rounded-2xl shadow-2xl overflow-hidden transition-all duration-500`}>
                        <div className="grid md:grid-cols-2 gap-0">
                            {/* Image Section */}
                            <div className="relative h-64 md:h-auto bg-gradient-to-br from-gray-200 to-gray-300">
                                <img
                                    src={currentMessage.image}
                                    alt={currentMessage.name}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        // Fallback to gradient if image fails to load
                                        e.target.style.display = 'none';
                                        e.target.parentElement.className = `relative h-64 md:h-auto bg-gradient-to-br ${currentMessage.color}`;
                                    }}
                                />
                                {/* Overlay Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${currentMessage.color} opacity-20`}></div>

                                {/* Type Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className={`bg-white/90 backdrop-blur-sm ${currentMessage.textColor} px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}>
                                        {currentMessage.type}
                                    </span>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <div className="mb-4">
                                    <h3 className={`text-2xl md:text-3xl font-bold ${currentMessage.textColor} mb-2`}>
                                        {currentMessage.title}
                                    </h3>
                                    <div className="w-16 h-1 bg-amber-500 mb-4"></div>
                                </div>

                                <div className="mb-6">
                                    <h4 className={`text-xl font-bold ${currentMessage.textColor} mb-1`}>
                                        {currentMessage.name}
                                    </h4>
                                    <p className="text-gray-600 font-medium">
                                        {currentMessage.designation}
                                    </p>
                                </div>

                                <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6 line-clamp-4 md:line-clamp-none">
                                    {currentMessage.message}
                                </p>

                                {/* Quote Icon */}
                                <div className={`${currentMessage.textColor} opacity-20`}>
                                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.984z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    {/* <button
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm text-emerald-700 p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 z-10"
                        aria-label="Previous message"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm text-emerald-700 p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 z-10"
                        aria-label="Next message"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button> */}

                    {/* Progress Indicator */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                        {messages.map((_, index) => (
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
                    {isAutoPlaying && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
                            <div
                                className="h-full bg-gradient-to-r from-emerald-600 to-amber-500 transition-all duration-5000 ease-linear"
                                style={{
                                    width: '100%',
                                    animation: 'progress 5s linear infinite'
                                }}
                            ></div>
                        </div>
                    )}
                </div>

                {/* Slide Indicators (Dots) */}
                <div className="flex justify-center mt-8 space-x-3">
                    {messages.map((message, index) => (
                        <button
                            key={message.id}
                            onClick={() => goToSlide(index)}
                            className={`transition-all duration-300 ${index === currentIndex
                                ? `bg-gradient-to-r ${currentMessage.color} text-white px-6 py-2 rounded-full font-semibold shadow-lg`
                                : 'bg-gray-200 text-gray-600 px-4 py-2 rounded-full hover:bg-gray-300'
                                }`}
                        >
                            {message.type}
                        </button>
                    ))}
                </div>
            </div>

            <style>{`
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

export default Messages;

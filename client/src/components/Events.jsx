import React, { useState, useEffect, useRef } from 'react';
import events from '../assets/data/events.json';

const Events = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);

    // Sort events by date (newest first) and parse dates
    const sortedEvents = [...events].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA; // Newest first
    });

    // Always show 2 items per slide
    const itemsPerSlide = 2;
    const totalSlides = Math.ceil(sortedEvents.length / itemsPerSlide);

    // Auto-rotate carousel timer (5 seconds) - always playing
    useEffect(() => {
        if (totalSlides > 1) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
            }, 5000);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [totalSlides]);

    // Manual navigation
    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    return (
        <section id="events" className="py-16">
            <div className="container mx-auto px-4 ">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">Events & Conferences</h2>
                    <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Join us for our upcoming events, conferences, and activities
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative max-w-7xl mx-auto">
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
                                const slideEvents = sortedEvents.slice(start, start + itemsPerSlide);

                                return (
                                    <div
                                        key={slideIndex}
                                        className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-6 px-2"
                                    >
                                        {slideEvents.map((event, index) => (
                                            <div
                                                key={index}
                                                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-l-4 border-emerald-600 group"
                                            >
                                                <div className="p-6">
                                                    {/* Event Type Badge */}
                                                    <div className="flex items-center justify-between mb-4">
                                                        <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                                                            {event.type}
                                                        </span>
                                                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                            </svg>
                                                        </div>
                                                    </div>

                                                    {/* Event Title */}
                                                    <h3 className="text-xl font-bold text-emerald-800 mb-3 group-hover:text-emerald-900 transition-colors line-clamp-2">
                                                        {event.title}
                                                    </h3>

                                                    {/* Event Details */}
                                                    <div className="space-y-2 mb-4">
                                                        <div className="flex items-center text-gray-600">
                                                            <svg className="w-4 h-4 mr-2 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                            </svg>
                                                            <span className="text-sm">{event.date}</span>
                                                        </div>
                                                        <div className="flex items-center text-gray-600">
                                                            <svg className="w-4 h-4 mr-2 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                            <span className="text-sm">{event.time}</span>
                                                        </div>
                                                        <div className="flex items-center text-gray-600">
                                                            <svg className="w-4 h-4 mr-2 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            </svg>
                                                            <span className="text-sm">{event.location}</span>
                                                        </div>
                                                    </div>

                                                    {/* Description */}
                                                    <p className="text-gray-700 mb-4 leading-relaxed text-sm line-clamp-2">
                                                        {event.description}
                                                    </p>

                                                    {/* CTA */}
                                                    <a
                                                        href="#"
                                                        className="inline-flex items-center text-emerald-700 font-semibold hover:text-emerald-800 text-sm group-hover:gap-2 transition-all"
                                                    >
                                                        Learn More
                                                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Progress Indicator Dots */}
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
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

export default Events;

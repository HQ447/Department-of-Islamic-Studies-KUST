import React, { useState } from 'react';
import programs from '../assets/data/programs.json';

const Programs = () => {
    const [itemsToShow, setItemsToShow] = useState(6); // Initially show 6 items

    const handleLoadMore = () => {
        setItemsToShow(prev => prev + 6); // Load 6 more items
    };

    const visiblePrograms = programs.slice(0, itemsToShow);
    const hasMore = itemsToShow < programs.length;

    return (
        <section id="programs" className="py-16 ">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">Academic Programs</h2>
                    <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explore our diverse range of Islamic studies programs
                    </p>
                </div>

                {/* Programs Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {visiblePrograms.map((program, index) => (
                        <div
                            key={index}
                            className="bg-white border-2 border-emerald-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:border-emerald-400 group relative overflow-hidden"
                        >
                            {/* Decorative Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            {/* Level Badge */}
                            <div className="relative z-10 mb-3">
                                <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full inline-block shadow-sm">
                                    {program.level}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-emerald-800 text-xl font-bold mb-3 group-hover:text-emerald-900 transition-colors relative z-10">
                                {program.title}
                            </h3>

                            {/* Duration */}
                            <div className="flex items-center text-gray-600 mb-4 relative z-10">
                                <svg className="w-4 h-4 mr-2 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="font-medium text-sm">{program.duration}</span>
                            </div>
                            {/* Description */}
                            <div className="text-gray-600 mb-4 relative z-10 line-clamp-3 text-justify">
                                <p className="text-sm">{program.description}</p>
                            </div>

                            {/* Separator */}
                            <div className="border-t border-emerald-100 pt-4 mt-4 relative z-10">
                                {/* CTA Button */}
                                <a
                                    href="#"
                                    className="inline-flex items-center text-emerald-700 font-semibold hover:text-emerald-800 group-hover:gap-2 transition-all"
                                >
                                    View Details
                                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                {hasMore && (
                    <div className="text-center mt-12">
                        <button
                            onClick={handleLoadMore}
                            className="inline-flex items-center bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            Load More Programs
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Programs;

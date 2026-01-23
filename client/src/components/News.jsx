import React, { useState } from 'react';
import notifications from '../assets/data/notifications.json';

const News = () => {
    const [visibleCount, setVisibleCount] = useState(6);
    const newsItems = notifications;
    const itemsPerPage = 6;

    const handleLoadMore = () => {
        setVisibleCount((prev) => Math.min(prev + itemsPerPage, newsItems.length));
    };

    const visibleItems = newsItems.slice(0, visibleCount);
    const hasMore = visibleCount < newsItems.length;

    return (
        <section id="news" className="py-16  bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">Notifications & Announcements</h2>
                    <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Stay updated with the latest news, events, and announcements from our department
                    </p>
                </div>

                {/* News Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleItems.map((item, index) => (
                        <article
                            key={index}
                            className="bg-gradient-to-br from-white to-emerald-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-emerald-100"
                        >
                            {/* Category Badge */}
                            <div className="px-6 pt-6">
                                <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                                    {item.category}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="px-6 pb-6">
                                <h3 className="text-xl font-bold text-emerald-800 mb-3 hover:text-emerald-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-700 mb-4 leading-relaxed line-clamp-3">
                                    {item.excerpt}
                                </p>
                                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                    <span>{item.date}</span>
                                    <span>By {item.author}</span>
                                </div>
                                <a
                                    href="#"
                                    className="text-emerald-700 font-semibold hover:text-emerald-800 inline-flex items-center hover:underline"
                                >
                                    Read More
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Load More Button */}
                {hasMore && (
                    <div className="text-center mt-12">
                        <button
                            onClick={handleLoadMore}
                            className="inline-flex items-center bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            Load More
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <p className="text-gray-500 text-sm mt-2">
                            Showing {visibleCount} of {newsItems.length} news items
                        </p>
                    </div>
                )}

                {/* Show message when all items are loaded */}
                {!hasMore && newsItems.length > 6 && (
                    <div className="text-center mt-12">
                        <p className="text-emerald-700 font-medium">
                            All {newsItems.length} news items are displayed
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default News;

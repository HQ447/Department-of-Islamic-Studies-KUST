import React, { useState } from 'react';

// Faculty Card Component
const FacultyCard = ({ member, getInitials }) => {
    const initials = getInitials(member.name);

    return (
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300 shadow-md hover:shadow-lg">
            {/* Faculty Image/Initials */}
            <div className="flex justify-center mb-4">
                <div className="relative w-24 h-24">
                    {member.image ? (
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover rounded-full border-4 border-emerald-300 shadow-lg"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }}
                        />
                    ) : null}
                    <div
                        className={`w-full h-full rounded-full bg-gradient-to-br from-emerald-600 to-green-700 flex items-center justify-center border-4 border-emerald-300 shadow-lg ${member.image ? 'hidden' : ''}`}
                    >
                        <span className="text-white text-2xl font-bold">{initials}</span>
                    </div>
                </div>
            </div>

            {/* Faculty Info */}
            <div className="text-center">
                <h3 className="text-lg font-bold text-emerald-800 mb-2">{member.name}</h3>
                <span className="inline-block bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {member.designation}
                </span>
                <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <span className="font-medium">{member.specialization}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        <span>{member.qualification}</span>
                    </div>
                </div>

                {/* View Profile Button */}
                <div className="mt-4 pt-4 border-t border-emerald-200">
                    <a
                        href="#"
                        className="inline-flex items-center text-emerald-700 font-semibold hover:text-emerald-800 transition-colors text-sm"
                    >
                        View Profile
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

const Faculty = () => {
    const faculty = [
        {
            name: "Prof. Dr. Muhammad Ali",
            designation: "Chairman",
            specialization: "Quranic Studies & Tafsir",
            qualification: "PhD in Islamic Studies",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
        },
        {
            name: "Dr. Fatima Khan",
            designation: "Associate Professor",
            specialization: "Hadith Sciences",
            qualification: "PhD in Hadith Studies",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face"
        },
        {
            name: "Dr. Ahmed Hassan",
            designation: "Associate Professor",
            specialization: "Islamic Jurisprudence",
            qualification: "PhD in Fiqh",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
        },
        {
            name: "Dr. Ayesha Malik",
            designation: "Assistant Professor",
            specialization: "Islamic History",
            qualification: "PhD in Islamic History",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
        },
        {
            name: "Dr. Usman Shah",
            designation: "Assistant Professor",
            specialization: "Arabic Language & Literature",
            qualification: "PhD in Arabic",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face"
        },
        {
            name: "Dr. Zainab Ali",
            designation: "Assistant Professor",
            specialization: "Islamic Philosophy",
            qualification: "PhD in Islamic Philosophy",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face"
        }
    ];

    const getInitials = (name) => {
        return name
            .split(' ')
            .filter(n => n.length > 0 && !n.includes('.'))
            .map(n => n[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    return (
        <section id="faculty" className="py-16  bg-gradient-to-br from-gray-50 via-white to-emerald-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">Our Faculty</h2>
                    <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Meet our distinguished faculty members who are experts in their respective fields
                    </p>
                </div>

                {/* Faculty Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {faculty.map((member, index) => (
                        <FacultyCard key={index} member={member} getInitials={getInitials} />
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <a
                        href="#"
                        className="inline-flex items-center bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                        View All Faculty Members
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Faculty;

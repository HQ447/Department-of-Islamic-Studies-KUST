import React, { useState } from 'react';

// Faculty Card Component
const FacultyCard = ({ member, getInitials }) => {
    const [imageError, setImageError] = useState(false);
    const initials = getInitials(member.name);

    return (
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-2 border-emerald-100 group text-center">
            {/* Content Section */}
            <div className="p-6 pt-8">
                {/* Circular Image */}
                <div className="relative mb-6 flex justify-center">
                    <div className="relative w-32 h-32 md:w-36 md:h-36">
                        {!imageError && member.image ? (
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover rounded-full border-4 border-emerald-200 group-hover:border-emerald-400 transition-all duration-300 shadow-lg group-hover:scale-105"
                                onError={() => setImageError(true)}
                            />
                        ) : (
                            <div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-600 to-green-700 flex items-center justify-center border-4 border-emerald-200 group-hover:border-emerald-400 transition-all duration-300 shadow-lg">
                                <span className="text-white text-3xl md:text-4xl font-bold">{initials}</span>
                            </div>
                        )}
                        {/* Designation Badge */}
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                            <span className="bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg whitespace-nowrap">
                                {member.designation}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-emerald-800 mb-3 group-hover:text-emerald-900 transition-colors">
                    {member.name}
                </h3>

                {/* Specialization */}
                <div className="mb-3">
                    <div className="flex items-center justify-center text-emerald-600 mb-2">
                        <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <span className="text-sm font-semibold">{member.specialization}</span>
                    </div>
                </div>

                {/* Qualification */}
                <div className="mb-4">
                    <p className="text-sm text-gray-600 flex items-center justify-center">
                        <svg className="w-4 h-4 mr-2 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        {member.qualification}
                    </p>
                </div>

                {/* Separator */}
                <div className="border-t border-emerald-100 pt-4 mt-4">
                    {/* View Profile Button */}
                    <a
                        href="#"
                        className="inline-flex items-center text-emerald-700 font-semibold hover:text-emerald-800 group-hover:gap-2 transition-all text-sm"
                    >
                        View Profile
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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

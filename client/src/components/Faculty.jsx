import React from 'react';

const Faculty = () => {
    const faculty = [
        {
            name: "Prof. Dr. Muhammad Ali",
            designation: "Chairman",
            specialization: "Quranic Studies & Tafsir",
            qualification: "PhD in Islamic Studies"
        },
        {
            name: "Dr. Fatima Khan",
            designation: "Associate Professor",
            specialization: "Hadith Sciences",
            qualification: "PhD in Hadith Studies"
        },
        {
            name: "Dr. Ahmed Hassan",
            designation: "Associate Professor",
            specialization: "Islamic Jurisprudence",
            qualification: "PhD in Fiqh"
        },
        {
            name: "Dr. Ayesha Malik",
            designation: "Assistant Professor",
            specialization: "Islamic History",
            qualification: "PhD in Islamic History"
        },
        {
            name: "Dr. Usman Shah",
            designation: "Assistant Professor",
            specialization: "Arabic Language & Literature",
            qualification: "PhD in Arabic"
        },
        {
            name: "Dr. Zainab Ali",
            designation: "Assistant Professor",
            specialization: "Islamic Philosophy",
            qualification: "PhD in Islamic Philosophy"
        }
    ];

    return (
        <section id="faculty" className="py-16">
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
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {faculty.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center"
                        >
                            {/* Avatar Placeholder */}
                            <div className="w-24 h-24 bg-gradient-to-br from-emerald-600 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                                {member.name.split(' ').map(n => n[0]).join('')}
                            </div>

                            <h3 className="text-xl font-bold text-emerald-800 mb-1">{member.name}</h3>
                            <p className="text-emerald-600 font-semibold mb-2">{member.designation}</p>
                            <p className="text-gray-700 mb-2">{member.specialization}</p>
                            <p className="text-sm text-gray-500">{member.qualification}</p>

                            <div className="mt-4 pt-4 border-t border-gray-200">
                                <a
                                    href="#"
                                    className="text-emerald-700 hover:text-emerald-800 text-sm font-medium"
                                >
                                    View Profile →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <a
                        href="#"
                        className="inline-block text-emerald-700 hover:text-emerald-800 font-semibold border-2 border-emerald-700 px-6 py-2 rounded-lg transition-all hover:bg-emerald-50"
                    >
                        View All Faculty Members
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Faculty;

import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">About Our Department</h2>
                    <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A center of excellence in Islamic education and research
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    {/* About Content */}
                    <div>
                        <h3 className="text-2xl font-bold text-emerald-800 mb-4">Welcome Message</h3>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            The Department of Islamic Studies at Kohat University of Science & Technology
                            is dedicated to providing comprehensive Islamic education that combines traditional
                            Islamic scholarship with contemporary academic methodologies.
                        </p>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Our department strives to produce graduates who are well-versed in Islamic sciences,
                            capable of addressing modern challenges with Islamic wisdom, and committed to serving
                            their communities with knowledge and integrity.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            We offer a diverse range of programs designed to meet the educational needs of
                            students seeking to deepen their understanding of Islam and its application in
                            contemporary society.
                        </p>
                    </div>

                    {/* Image Placeholder */}
                    <div className="bg-gradient-to-br from-emerald-700 to-green-600 rounded-lg p-8 text-white shadow-xl">
                        <div className="text-center">
                            <svg className="w-24 h-24 mx-auto mb-4 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                            </svg>
                            <h4 className="text-xl font-bold mb-2">Islamic Excellence</h4>
                            <p className="text-emerald-100">Combining tradition with innovation</p>
                        </div>
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Mission */}
                    <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-emerald-600">
                        <div className="flex items-center mb-4">
                            <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                                <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-emerald-800">Our Mission</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            To provide quality Islamic education that integrates traditional Islamic scholarship
                            with modern academic approaches, preparing students to be knowledgeable, ethical,
                            and capable leaders who can contribute meaningfully to society while upholding
                            Islamic values and principles.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-amber-500">
                        <div className="flex items-center mb-4">
                            <div className="bg-amber-100 p-3 rounded-lg mr-4">
                                <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-emerald-800">Our Vision</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            To become a leading center of excellence in Islamic studies, recognized for academic
                            rigor, research innovation, and producing graduates who excel in both Islamic
                            scholarship and contemporary knowledge, contributing to the betterment of Muslim
                            communities and society at large.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

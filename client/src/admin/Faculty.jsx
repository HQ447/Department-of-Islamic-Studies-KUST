import React, { useState } from 'react';

function Faculty() {
    const [showAddForm, setShowAddForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        designation: '',
        specialization: '',
        qualification: '',
        image: ''
    });

    // Faculty data (same as in components/Faculty.jsx)
    const faculty = [
        {
            id: 1,
            name: "Prof. Dr.  Ali",
            designation: "Chairman",
            specialization: "Quranic Studies & Tafsir",
            qualification: "PhD in Islamic Studies",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
        },
        {
            id: 2,
            name: "Dr. Fatima Khan",
            designation: "Associate Professor",
            specialization: "Hadith Sciences",
            qualification: "PhD in Hadith Studies",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face"
        },
        {
            id: 3,
            name: "Dr. Ahmed Hassan",
            designation: "Associate Professor",
            specialization: "Islamic Jurisprudence",
            qualification: "PhD in Fiqh",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
        },
        {
            id: 4,
            name: "Dr. Ayesha Malik",
            designation: "Assistant Professor",
            specialization: "Islamic History",
            qualification: "PhD in Islamic History",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
        },
        {
            id: 5,
            name: "Dr. Usman Shah",
            designation: "Assistant Professor",
            specialization: "Arabic Language & Literature",
            qualification: "PhD in Arabic",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face"
        },
        {
            id: 6,
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

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Demo only - just reset form and cl
        alert('This is a demo. Faculty member would be added here.');
        setFormData({
            name: '',
            designation: '',
            specialization: '',
            qualification: '',
            image: ''
        });
        setShowAddForm(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50 p-4 md:p-8">
            {/* Header */}
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-2">Faculty Management</h1>
                    <p className="text-gray-600">Manage faculty members and their information</p>
                </div>
                <button
                    onClick={() => setShowAddForm(!showAddForm)}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    {showAddForm ? 'Cancel' : 'Add Faculty Member'}
                </button>
            </div>

            {/* Add Faculty Form */}
            {showAddForm && (
                <div className="mb-8 bg-white rounded-xl shadow-lg border-2 border-emerald-100 p-6">
                    <h2 className="text-xl font-bold text-emerald-800 mb-6">Add New Faculty Member</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="e.g., Prof. Dr. Muhammad Ali"
                                    className="w-full px-4 py-3 border-2 border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="designation" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Designation *
                                </label>
                                <select
                                    id="designation"
                                    name="designation"
                                    value={formData.designation}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border-2 border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all"
                                    required
                                >
                                    <option value="">Select Designation</option>
                                    <option value="Chairman">Chairman</option>
                                    <option value="Professor">Professor</option>
                                    <option value="Associate Professor">Associate Professor</option>
                                    <option value="Assistant Professor">Assistant Professor</option>
                                    <option value="Lecturer">Lecturer</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="specialization" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Specialization *
                                </label>
                                <input
                                    type="text"
                                    id="specialization"
                                    name="specialization"
                                    value={formData.specialization}
                                    onChange={handleInputChange}
                                    placeholder="e.g., Quranic Studies & Tafsir"
                                    className="w-full px-4 py-3 border-2 border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="qualification" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Qualification *
                                </label>
                                <input
                                    type="text"
                                    id="qualification"
                                    name="qualification"
                                    value={formData.qualification}
                                    onChange={handleInputChange}
                                    placeholder="e.g., PhD in Islamic Studies"
                                    className="w-full px-4 py-3 border-2 border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all"
                                    required
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label htmlFor="image" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Image URL (Optional)
                                </label>
                                <input
                                    type="url"
                                    id="image"
                                    name="image"
                                    value={formData.image}
                                    onChange={handleInputChange}
                                    placeholder="https://example.com/image.jpg"
                                    className="w-full px-4 py-3 border-2 border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all"
                                />
                            </div>
                        </div>
                        <div className="flex gap-4 pt-4">
                            <button
                                type="submit"
                                className="flex-1 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Add Faculty Member
                            </button>
                            <button
                                type="button"
                                onClick={() => {
                                    setShowAddForm(false);
                                    setFormData({
                                        name: '',
                                        designation: '',
                                        specialization: '',
                                        qualification: '',
                                        image: ''
                                    });
                                }}
                                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-xl transition-all duration-300"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Faculty List */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-emerald-100 p-6">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-emerald-800">All Faculty Members ({faculty.length})</h2>
                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            placeholder="Search faculty..."
                            className="px-4 py-2 border-2 border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400"
                        />
                    </div>
                </div>

                {/* Faculty Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {faculty.map((member) => {
                        const initials = getInitials(member.name);
                        return (
                            <div
                                key={member.id}
                                className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300 shadow-md hover:shadow-lg"
                            >
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

                                    {/* Actions */}
                                    <div className="mt-4 pt-4 border-t border-emerald-200 flex gap-2">
                                        <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
                                            Edit
                                        </button>
                                        <button className="flex-1 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Faculty;

import React, { useMemo, useState } from 'react'
import researches from '../assets/data/researches.json'

const DEMO_RESEARCHES = researches

function formatDate(dateStr) {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    })
}

function App() {
    const [query, setQuery] = useState('')
    const [supervisorFilter, setSupervisorFilter] = useState('all')
    const [yearFilter, setYearFilter] = useState('all')
    const [selectedResearch, setSelectedResearch] = useState(null)

    const supervisors = useMemo(
        () => Array.from(new Set(DEMO_RESEARCHES.map((r) => r.supervisor))),
        []
    )

    const years = useMemo(
        () =>
            Array.from(
                new Set(DEMO_RESEARCHES.map((r) => new Date(r.date).getFullYear()))
            ).sort((a, b) => b - a),
        []
    )

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase()
        return DEMO_RESEARCHES.filter((item) => {
            const matchesTitle = q
                ? item.title.toLowerCase().includes(q)
                : true
            const matchesSupervisor =
                supervisorFilter === 'all' || item.supervisor === supervisorFilter
            const matchesYear =
                yearFilter === 'all' ||
                new Date(item.date).getFullYear().toString() === yearFilter
            return matchesTitle && matchesSupervisor && matchesYear
        })
    }, [query, supervisorFilter, yearFilter])

    const alreadyExists = query.trim()
        ? DEMO_RESEARCHES.some((item) =>
            item.title.toLowerCase() === query.trim().toLowerCase()
        )
        : null

    // Detail "page" view
    if (selectedResearch) {
        const year = new Date(selectedResearch.date).getFullYear()
        return (
            <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50 py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        {/* Back Button */}
                        <button
                            onClick={() => setSelectedResearch(null)}
                            className="inline-flex items-center gap-2 mb-6 text-emerald-700 hover:text-emerald-800 font-medium transition-colors group"
                        >
                            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Research List
                        </button>

                        {/* Main Card */}
                        <div className="bg-white rounded-2xl shadow-xl border-2 border-emerald-100 overflow-hidden">
                            {/* Header Section */}
                            <div className="bg-gradient-to-r from-emerald-700 to-green-700 px-6 md:px-8 py-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                                        Research Detail • {year}
                                    </span>
                                </div>
                                <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                    {selectedResearch.title}
                                </h1>
                            </div>

                            {/* Content Section */}
                            <div className="p-6 md:p-8 space-y-6">
                                {/* Information Grid */}
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100">
                                        <div className="flex items-center gap-2 mb-2">
                                            <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                                                Scholar
                                            </p>
                                        </div>
                                        <p className="text-lg font-semibold text-emerald-900">{selectedResearch.scholarName}</p>
                                    </div>

                                    <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
                                        <div className="flex items-center gap-2 mb-2">
                                            <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            <p className="text-xs font-semibold uppercase tracking-wide text-amber-600">
                                                Supervisor
                                            </p>
                                        </div>
                                        <p className="text-lg font-semibold text-amber-900">{selectedResearch.supervisor}</p>
                                    </div>

                                    <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                                        <div className="flex items-center gap-2 mb-2">
                                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                                            </svg>
                                            <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                                                Registration No.
                                            </p>
                                        </div>
                                        <p className="text-lg font-semibold text-blue-900">{selectedResearch.regNo}</p>
                                    </div>

                                    <div className="bg-purple-50 rounded-xl p-5 border border-purple-100">
                                        <div className="flex items-center gap-2 mb-2">
                                            <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <p className="text-xs font-semibold uppercase tracking-wide text-purple-600">
                                                Completion Date
                                            </p>
                                        </div>
                                        <p className="text-lg font-semibold text-purple-900">
                                            {formatDate(selectedResearch.date)}
                                        </p>
                                    </div>
                                </div>

                                {/* Additional Info Section */}
                                <div className="rounded-xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-green-50 p-6 space-y-4">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                        <h3 className="text-lg font-bold text-emerald-900">Research Information</h3>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed">
                                        This is a demo detail view. In the real system you can store
                                        chapter-wise summaries, abstract, methodology, and PDF
                                        download link for this research.
                                    </p>
                                    <div className="pt-4 border-t border-emerald-200">
                                        <p className="text-sm italic text-emerald-800 font-medium">
                                            "And say, My Lord, increase me in knowledge." (Qur'an 20:114)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    // List + filters view
    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50 py-12 md:py-16">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <header className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 border-2 border-emerald-200 text-sm font-semibold text-emerald-800 mb-6">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                        </svg>
                        Department Archive • Islamic Studies
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">Our Research Work</h2>
                    <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Final Year Research Repository — Islamic Studies Department
                    </p>
                </header>

                {/* Main Content Card */}
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl border-2 border-emerald-100 overflow-hidden">
                        <div className="grid lg:grid-cols-[1.4fr_1fr]">
                            {/* Left: Search + Results */}
                            <section className="p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-emerald-100">
                                <div className="flex flex-col gap-6">
                                    {/* Section Header */}
                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-green-700 text-white font-bold shadow-lg">
                                                <span className="text-lg">البحث</span>
                                            </div>
                                            <h2 className="text-xl md:text-2xl font-bold text-emerald-900">
                                                Research Topic Checker
                                            </h2>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">
                                            Type a research title to see whether a similar topic already exists in the department records.
                                        </p>
                                    </div>

                                    {/* Search & Filters */}
                                    <div className="space-y-4">
                                        <label className="block text-sm font-semibold text-emerald-800 uppercase tracking-wide">
                                            Search & Filters
                                        </label>

                                        <div className="grid md:grid-cols-3 gap-4">
                                            {/* Search Input */}
                                            <div className="relative md:col-span-1">
                                                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                                    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                    </svg>
                                                </div>
                                                <input
                                                    value={query}
                                                    onChange={(e) => setQuery(e.target.value)}
                                                    placeholder="Search by research title"
                                                    className="w-full rounded-xl bg-white border-2 border-emerald-200 pl-11 pr-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all shadow-sm"
                                                />
                                            </div>

                                            {/* Supervisor Filter */}
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                                    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                                <select
                                                    value={supervisorFilter}
                                                    onChange={(e) => setSupervisorFilter(e.target.value)}
                                                    className="w-full rounded-xl bg-white border-2 border-emerald-200 pl-11 pr-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all shadow-sm appearance-none"
                                                >
                                                    <option value="all">All Supervisors</option>
                                                    {supervisors.map((name) => (
                                                        <option key={name} value={name}>
                                                            {name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>

                                            {/* Year Filter */}
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                                    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                                <select
                                                    value={yearFilter}
                                                    onChange={(e) => setYearFilter(e.target.value)}
                                                    className="w-full rounded-xl bg-white border-2 border-emerald-200 pl-11 pr-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all shadow-sm appearance-none"
                                                >
                                                    <option value="all">All Years</option>
                                                    {years.map((year) => (
                                                        <option key={year} value={year.toString()}>
                                                            {year}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        {/* Status Messages */}
                                        {query.trim() && (
                                            <div className="mt-2">
                                                {alreadyExists ? (
                                                    <div className="inline-flex items-center gap-2 rounded-xl bg-red-50 px-4 py-2.5 text-red-700 border-2 border-red-200 shadow-sm">
                                                        <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                                        </svg>
                                                        <span className="text-sm font-medium">A very similar title already exists. Consider refining your topic.</span>
                                                    </div>
                                                ) : filtered.length > 0 ? (
                                                    <div className="inline-flex items-center gap-2 rounded-xl bg-amber-50 px-4 py-2.5 text-amber-700 border-2 border-amber-200 shadow-sm">
                                                        <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                        </svg>
                                                        <span className="text-sm font-medium">Related topics found. Please review below before finalizing your title.</span>
                                                    </div>
                                                ) : (
                                                    <div className="inline-flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-2.5 text-emerald-800 border-2 border-emerald-200 shadow-sm">
                                                        <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                        <span className="text-sm font-medium">No similar titles found in the current demo data.</span>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>

                                    {/* Results Section */}
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                                <span className="font-medium">Showing <span className="text-emerald-700 font-bold">{filtered.length}</span> of <span className="text-emerald-700 font-bold">{DEMO_RESEARCHES.length}</span> records</span>
                                            </div>
                                            <span className="inline-flex items-center gap-2 text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                                                Demo dataset
                                            </span>
                                        </div>

                                        {/* Research List */}
                                        <div className="max-h-96 overflow-y-auto space-y-3 pr-2 custom-scrollbar">
                                            {filtered.map((item) => (
                                                <article
                                                    key={item.id}
                                                    onClick={() => setSelectedResearch(item)}
                                                    className="bg-white border-2 border-emerald-100 rounded-xl p-5 hover:border-emerald-400 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                                                >
                                                    <div className="flex items-start justify-between gap-3 mb-3">
                                                        <h3 className="font-bold text-base md:text-lg text-emerald-900 group-hover:text-emerald-700 transition-colors flex-1">
                                                            {item.title}
                                                        </h3>
                                                        <svg className="w-5 h-5 text-emerald-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </div>
                                                    <div className="grid sm:grid-cols-2 gap-3 text-sm">
                                                        <div className="flex items-center gap-2 text-gray-600">
                                                            <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                            </svg>
                                                            <span><span className="font-semibold text-gray-700">Scholar:</span> {item.scholarName}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-gray-600">
                                                            <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                            </svg>
                                                            <span><span className="font-semibold text-gray-700">Supervisor:</span> {item.supervisor}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-gray-600">
                                                            <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                                                            </svg>
                                                            <span><span className="font-semibold text-gray-700">Reg. No:</span> {item.regNo}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-gray-600">
                                                            <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                            </svg>
                                                            <span><span className="font-semibold text-gray-700">Date:</span> {formatDate(item.date)}</span>
                                                        </div>
                                                    </div>
                                                </article>
                                            ))}

                                            {filtered.length === 0 && (
                                                <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-8 text-center">
                                                    <svg className="w-12 h-12 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                    </svg>
                                                    <p className="text-gray-500 font-medium">No records match your search criteria.</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Right: Side Panel */}
                            <aside className="p-6 md:p-8 bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-100">
                                <div className="flex flex-col gap-6 h-full">
                                    {/* Department Overview */}
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-green-700 text-white shadow-lg">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </svg>
                                            </div>
                                            <h2 className="text-xl font-bold text-emerald-900">
                                                Department Overview
                                            </h2>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed">
                                            This interface is a concept archive for the{' '}
                                            <span className="font-bold text-emerald-800">
                                                Department of Islamic Studies, KUST
                                            </span>
                                            , helping students explore previous research and avoid topic duplication.
                                        </p>
                                    </div>

                                    {/* Quick Guidance */}
                                    <div className="bg-white rounded-xl border-2 border-emerald-200 p-5 shadow-sm">
                                        <div className="flex items-center gap-2 mb-4">
                                            <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                            </svg>
                                            <h3 className="text-sm font-bold tracking-wide text-emerald-800 uppercase">
                                                Quick Guidance
                                            </h3>
                                        </div>
                                        <ul className="space-y-3 text-sm text-gray-700">
                                            <li className="flex items-start gap-2">
                                                <span className="text-emerald-600 font-bold mt-0.5">•</span>
                                                <span>Start with a broad idea, then search for similar titles.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-emerald-600 font-bold mt-0.5">•</span>
                                                <span>If a similar topic exists, refine your focus (time, region, methodology).</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-emerald-600 font-bold mt-0.5">•</span>
                                                <span>Note the supervisor names for guidance on specific areas.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Footer Note */}
                                    <div className="mt-auto space-y-3 pt-4 border-t border-emerald-200">
                                        <p className="text-xs text-gray-600 leading-relaxed">
                                            Demo data only. In a real system, records would be managed by department administration with secure login.
                                        </p>
                                        <div className="bg-emerald-100 rounded-lg p-3 border border-emerald-200">
                                            <p className="text-xs italic text-emerald-800 font-medium text-center">
                                                "Rabbi zidni ilma" — My Lord, increase me in knowledge. (Qur'an 20:114)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default App
import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router';
// Stats data - moved outside component to avoid dependency issues
const stats = [
    { id: 'students', target: 500, label: 'Students' },
    { id: 'faculty', target: 25, label: 'Faculty' },
    { id: 'programs', target: 10, label: 'Programs' },
    { id: 'years', target: 15, label: 'Years' }
];

function Main() {
    const [counters, setCounters] = useState({
        students: 0,
        faculty: 0,
        programs: 0,
        years: 0
    });
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef(null);

    // Animate counter
    const animateCounter = (id, target) => {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setCounters(prev => ({ ...prev, [id]: target }));
                clearInterval(timer);
            } else {
                setCounters(prev => ({ ...prev, [id]: Math.floor(current) }));
            }
        }, duration / steps);
    };

    // Intersection Observer for scroll animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        // Start animations for all stats
                        stats.forEach((stat) => {
                            animateCounter(stat.id, stat.target);
                        });
                    }
                });
            },
            { threshold: 0.2 }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [hasAnimated]);

    return (
        <section ref={sectionRef} id="home" className="relative text-white overflow-hidden">
            {/* Background Image with Fade */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('https://jaamiah.com/wp-content/uploads/2019/05/Kohat-University-of-Science-and-Technology-Kohat-Campus-Featured-Image-1.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center top',
                }}
            >
                {/* Fade Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
            </div>

            {/* Gradient Theme Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/70 via-green-800/65 to-emerald-700/70"></div>

            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                ></div>
            </div>

            {/* Hero Content */}
            <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Islamic Calligraphy Style Title */}
                    <div className="mb-6">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                            Department of Islamic Studies
                        </h1>
                        <div className="w-32 h-1 bg-amber-400 mx-auto mb-4"></div>
                        <p className="text-xl md:text-2xl text-emerald-100 font-light">
                            Kohat University of Science & Technology
                        </p>
                    </div>

                    {/* Subtitles */}
                    <p className="text-lg md:text-xl text-emerald-50 mb-8 leading-relaxed max-w-2xl mx-auto">
                        Nurturing Islamic scholarship, promoting academic excellence, and fostering
                        a deep understanding of Islamic sciences and contemporary issues.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <NavLink
                            to="/researchWork"
                            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                        >
                            Research Work
                        </NavLink>
                        <a
                            href="#about"
                            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold transition-all border-2 border-white/30"
                        >
                            Learn More
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-white/20">
                        {stats.map((stat) => (
                            <div key={stat.id}>
                                <div className="text-3xl md:text-4xl font-bold text-amber-400">
                                    {counters[stat.id]}+
                                </div>
                                <div className="text-sm text-emerald-100 mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Main;

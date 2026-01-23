import React, { useState } from 'react';
import { Link } from 'react-router';
import About from './About';
import Programs from './Programs';
import Analytics from './Analytics';
import Messages from './Messages';
import Main from './Main';

import programs from '../assets/data/programs.json';

const Hero = () => {
  const [isPaused, setIsPaused] = useState(false);

  const notifications = [
    { text: "New Academic Year 2025-2026 Admissions Open - Apply Now!", link: "#admissions" },
    { text: "International Conference on Contemporary Islamic Issues - January 15, 2026", link: "#events" },
    { text: "Quran Memorization Competition Winners Announced - Congratulations!", link: "#news" },
    { text: "Guest Lecture: Understanding Modern Islamic Finance - November 28, 2025", link: "#events" }
  ];

  return (
    <section id="home" className="relative bg-gradient-to-br from-emerald-900 via-green-800 to-emerald-700 text-white overflow-hidden">
      {/* Floating Notification Bar - Below header */}
      <div className="bg-emerald-800/95 backdrop-blur-sm border-b border-emerald-700/50 py-2 overflow-hidden relative z-40">
        <div className="flex items-center">
          {/* Notification Icon */}
          <div className="flex-shrink-0 px-4 flex items-center">
            <svg className="w-4 h-4 text-amber-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
            <span className="ml-2 text-xs font-semibold text-amber-400 uppercase tracking-wide">Latest</span>
          </div>

          {/* Scrolling Text */}
          <div
            className="flex-1 overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="flex whitespace-nowrap"
              style={{
                animation: isPaused ? 'none' : 'scroll 30s linear infinite',
                animationPlayState: isPaused ? 'paused' : 'running'
              }}
            >
              {notifications.map((notification, index) => (
                <a
                  key={index}
                  href={notification.link}
                  className="inline-block px-8 text-sm text-emerald-50 hover:text-amber-400 transition-colors cursor-pointer"
                  onMouseEnter={() => setIsPaused(true)}
                >
                  {notification.text}
                </a>
              ))}
              {/* Duplicate for seamless loop */}
              {notifications.map((notification, index) => (
                <a
                  key={`duplicate-${index}`}
                  href={notification.link}
                  className="inline-block px-8 text-sm text-emerald-50 hover:text-amber-400 transition-colors cursor-pointer"
                  onMouseEnter={() => setIsPaused(true)}
                >
                  {notification.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Main />

      <About />
      <Messages />

      {/* Programs Preview Section */}
      <div className="programs py-16 md:py-24 bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">Featured Programs</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our premier academic programs in Islamic Studies
            </p>
          </div>

          {/* Programs Grid - Show only 3 programs */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {programs.slice(0, 3).map((program, index) => (
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

          {/* Show All Programs Button */}
          <div className="text-center">
            <Link
              to="/programs"
              className="inline-flex items-center bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Show All Programs
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

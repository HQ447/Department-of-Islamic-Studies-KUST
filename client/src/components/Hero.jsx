import React, { useState } from 'react';
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
      <div className="programs">

      </div>
    </section>
  );
};

export default Hero;

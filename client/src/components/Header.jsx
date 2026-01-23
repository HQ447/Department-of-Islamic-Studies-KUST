import React, { useState } from 'react';
import { NavLink } from 'react-router';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-emerald-800 to-green-700 shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="bg-white rounded-full p-2">
              <svg className="w-8 h-8 text-emerald-800" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </div>
            <div>
              <h1 className="text-white text-xl font-bold">Department of Islamic Studies</h1>
              <p className="text-emerald-100 text-xs">Kohat University of Science & Technology</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/" className="text-white hover:text-emerald-200 transition-colors font-medium">Home</NavLink>
            <NavLink to="/about" className="text-white hover:text-emerald-200 transition-colors font-medium">About</NavLink>
            <NavLink to="/programs" className="text-white hover:text-emerald-200 transition-colors font-medium">Programs</NavLink>
            <NavLink to="/faculty" className="text-white hover:text-emerald-200 transition-colors font-medium">Faculty</NavLink>
            <NavLink to="/news" className="text-white hover:text-emerald-200 transition-colors font-medium">News</NavLink>
            <NavLink to="/events" className="text-white hover:text-emerald-200 transition-colors font-medium">Events</NavLink>
            <NavLink to="/contact" className="bg-white text-emerald-800 px-4 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-medium">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <NavLink to="/" className="block text-white hover:text-emerald-200 transition-colors py-2">Home</NavLink>
            <NavLink to="/about" className="block text-white hover:text-emerald-200 transition-colors py-2">About</NavLink>
            <NavLink to="/programs" className="block text-white hover:text-emerald-200 transition-colors py-2">Programs</NavLink>
            <NavLink to="/faculty" className="block text-white hover:text-emerald-200 transition-colors py-2">Faculty</NavLink>
            <NavLink to="/news" className="block text-white hover:text-emerald-200 transition-colors py-2">News</NavLink>
            <NavLink to="/events" className="block text-white hover:text-emerald-200 transition-colors py-2">Events</NavLink>
            <NavLink to="/contact" className="block bg-white text-emerald-800 px-4 py-2 rounded-lg text-center">Contact</NavLink>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

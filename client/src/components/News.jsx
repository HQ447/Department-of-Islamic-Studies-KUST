import React from 'react';

const News = () => {
  const newsItems = [
    {
      title: "New Academic Year 2025-2026 Admissions Open",
      date: "December 15, 2025",
      author: "Admin",
      excerpt: "The Department of Islamic Studies is now accepting applications for the new academic year. Apply now for various undergraduate and graduate programs.",
      category: "Admissions"
    },
    {
      title: "International Conference on Contemporary Islamic Issues",
      date: "December 10, 2025",
      author: "Admin",
      excerpt: "Join us for an international conference discussing contemporary challenges facing the Muslim Ummah and Islamic solutions.",
      category: "Events"
    },
    {
      title: "Quran Memorization Competition Winners Announced",
      date: "December 5, 2025",
      author: "Admin",
      excerpt: "Congratulations to all participants and winners of the annual Quran memorization competition held at the department.",
      category: "Achievements"
    },
    {
      title: "Guest Lecture: Understanding Modern Islamic Finance",
      date: "November 28, 2025",
      author: "Admin",
      excerpt: "Renowned scholar Dr. Abdullah Al-Mansoori delivered an insightful lecture on Islamic finance principles and practices.",
      category: "Lectures"
    },
    {
      title: "Research Publication: New Book on Hadith Sciences",
      date: "November 20, 2025",
      author: "Admin",
      excerpt: "Dr. Fatima Khan's new book on Hadith Sciences has been published and is now available for students and scholars.",
      category: "Research"
    },
    {
      title: "Student Achievement: National Islamic Studies Olympiad",
      date: "November 15, 2025",
      author: "Admin",
      excerpt: "Our students secured top positions in the National Islamic Studies Olympiad, bringing honor to the department.",
      category: "Achievements"
    }
  ];

  return (
    <section id="news" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">News & Announcements</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest news, events, and announcements from our department
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className="bg-gradient-to-br from-white to-emerald-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-emerald-100"
            >
              {/* Category Badge */}
              <div className="px-6 pt-6">
                <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {item.category}
                </span>
              </div>

              {/* Content */}
              <div className="px-6 pb-6">
                <h3 className="text-xl font-bold text-emerald-800 mb-3 hover:text-emerald-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{item.date}</span>
                  <span>By {item.author}</span>
                </div>
                <a
                  href="#"
                  className="text-emerald-700 font-semibold hover:text-emerald-800 inline-flex items-center hover:underline"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            View All News
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;

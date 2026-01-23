import React from 'react';

const Programs = () => {
  const programs = [
    {
      title: "Bachelor of Islamic Studies",
      duration: "4 Years",
      level: "Undergraduate",
      description: "Comprehensive program covering Quranic studies, Hadith, Islamic jurisprudence, and Islamic history.",
      icon: "📖"
    },
    {
      title: "Master of Islamic Studies",
      duration: "2 Years",
      level: "Graduate",
      description: "Advanced studies in Islamic sciences with specialization options in various fields.",
      icon: "🎓"
    },
    {
      title: "PhD in Islamic Studies",
      duration: "3-5 Years",
      level: "Doctorate",
      description: "Research-oriented program for advanced scholars pursuing academic and research careers.",
      icon: "🔬"
    },
    {
      title: "Diploma in Arabic Language",
      duration: "1 Year",
      level: "Certificate",
      description: "Intensive Arabic language program for students seeking proficiency in classical and modern Arabic.",
      icon: "✍️"
    },
    {
      title: "Quranic Studies",
      duration: "2 Years",
      level: "Graduate",
      description: "Specialized program focusing on Quranic exegesis, recitation, and memorization techniques.",
      icon: "📿"
    },
    {
      title: "Islamic Jurisprudence",
      duration: "2 Years",
      level: "Graduate",
      description: "In-depth study of Islamic law, legal theory, and contemporary applications of Shariah.",
      icon: "⚖️"
    }
  ];

  return (
    <section id="programs" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">Academic Programs</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our diverse range of Islamic studies programs designed to meet your academic and career goals
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-emerald-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-emerald-100 hover:border-emerald-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{program.icon}</div>
                <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {program.level}
                </span>
              </div>
              <h3 className="text-xl font-bold text-emerald-800 mb-2 group-hover:text-emerald-600 transition-colors">
                {program.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">{program.duration}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{program.description}</p>
              <a
                href="#"
                className="text-emerald-700 font-semibold hover:text-emerald-800 inline-flex items-center group-hover:underline"
              >
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Programs;

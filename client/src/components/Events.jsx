import React from 'react';

const Events = () => {
  const events = [
    {
      title: "Annual Islamic Studies Conference 2025",
      date: "January 15, 2026",
      time: "9:00 AM - 5:00 PM",
      location: "Main Auditorium",
      description: "A comprehensive conference featuring renowned scholars discussing contemporary Islamic issues.",
      type: "Conference"
    },
    {
      title: "Quran Recitation Competition",
      date: "January 20, 2026",
      time: "2:00 PM - 6:00 PM",
      location: "Department Hall",
      description: "Annual competition for students to showcase their Quran recitation skills.",
      type: "Competition"
    },
    {
      title: "Guest Lecture Series: Modern Tafsir",
      date: "February 5, 2026",
      time: "3:00 PM - 5:00 PM",
      location: "Lecture Hall A",
      description: "Series of lectures by visiting scholars on modern approaches to Quranic exegesis.",
      type: "Lecture"
    },
    {
      title: "Islamic Art & Calligraphy Exhibition",
      date: "February 15, 2026",
      time: "10:00 AM - 4:00 PM",
      location: "Exhibition Hall",
      description: "Showcasing beautiful Islamic art and calligraphy works by students and faculty.",
      type: "Exhibition"
    }
  ];

  return (
    <section id="events" className="py-16 md:py-24 bg-gradient-to-br from-emerald-50 to-green-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">Upcoming Events</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us for our upcoming events, conferences, and activities
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-l-4 border-emerald-600"
            >
              <div className="p-6">
                {/* Event Type Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {event.type}
                  </span>
                  <div className="text-2xl">📅</div>
                </div>

                {/* Event Title */}
                <h3 className="text-xl font-bold text-emerald-800 mb-3">
                  {event.title}
                </h3>

                {/* Event Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{event.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {event.description}
                </p>

                {/* CTA */}
                <a
                  href="#"
                  className="inline-flex items-center text-emerald-700 font-semibold hover:text-emerald-800 hover:underline"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            View All Events
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;

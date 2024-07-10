import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const EventsPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { image: 'https://example.com/image1.jpg', title: 'Annual Fundraiser Gala' },
    { image: 'https://example.com/image2.jpg', title: 'Education Summit 2024' },
    { image: 'https://example.com/image3.jpg', title: 'Community Outreach Program' },
  ];

  const events = [
    { title: 'Scholarship Workshop', date: 'May 15, 2024', image: 'https://example.com/event1.jpg' },
    { title: 'Career Guidance Seminar', date: 'June 2, 2024', image: 'https://example.com/event2.jpg' },
    { title: 'Volunteer Training', date: 'June 20, 2024', image: 'https://example.com/event3.jpg' },
    { title: 'Fundraising Concert', date: 'July 10, 2024', image: 'https://example.com/event4.jpg' },
    { title: 'Tech Skills Bootcamp', date: 'August 5, 2024', image: 'https://example.com/event5.jpg' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Hero Section with Slideshow */}
      <div className="relative h-96 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white text-center">{slide.title}</h1>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Events Section */}
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
        <div className="overflow-x-auto whitespace-nowrap pb-4">
          <div className="inline-flex space-x-4">
            {events.map((event, index) => (
              <div key={index} className="w-64 flex-shrink-0">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;

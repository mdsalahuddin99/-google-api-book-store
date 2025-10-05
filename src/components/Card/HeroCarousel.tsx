import React, { useState, useEffect } from 'react';

const slides = [
  {
    heading: 'Easily Search Your Favorite Book',
    subheading: 'Quickly find any Book.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80', // search + friendly
  },
  {
    heading: 'Save Time with Smart Search',
    subheading: 'No more digging through docs — just search and go.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80', // people + tech UI
  },
  {
    heading: 'Read! Read!! Read!!!  ',
    subheading: 'No more digging through docs — just search and go.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80', // people + tech UI
  },
];

const HeroCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(next, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[200px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            current === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.heading}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-800 via-purple-500 to-purple-300 opacity-80 mix-blend-multiply"></div>

          {/* Text content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow mb-4">
              {slide.heading}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-6">
              {slide.subheading}
            </p>

          
      
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black/30 hover:bg-black/50 p-2 rounded-full z-20"
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black/30 hover:bg-black/50 p-2 rounded-full z-20"
        aria-label="Next"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === i ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;

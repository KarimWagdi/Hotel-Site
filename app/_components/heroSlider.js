"use client";

import { useState, useEffect } from 'react';
import outdoor1 from "../../public/assets/outdoor-1.jpg";
import beach1 from "../../public/assets/beach-1.jpg";
import dining1 from "../../public/assets/Dinning-1.jpg";
const slides = [
  {
    image: outdoor1.src,
    title: "Welcome to Royal Mandarin",
  },
  {
    image: beach1.src,
    title: "Luxury Redefined",
  },
  {
    image: dining1.src,
    title: "Experience Excellence",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/30" />
          </div>
          <div className="relative h-full flex items-center justify-center text-center">
            <div className="animate-fade-up">
              <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-display mb-6">
                {slide.title}
              </h1>
              <button className="bg-secondary text-primary px-8 py-3 rounded-full font-medium hover:bg-secondary/90 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
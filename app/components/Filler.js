'use client';

// Filler Component
import React from "react";

const Filler = () => {
  return (
    <div className="min-h-[calc(100vh-120px)] bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-zinc-800">Welcome to Our Hotel</h1>
        <p className="mt-4 text-zinc-600 text-lg">
          Explore our luxurious rooms, world-class amenities, and stunning views.
        </p>
        <a
          href="#booking"
          className="mt-6 inline-block bg-zinc-800 text-white px-6 py-3 rounded-lg hover:bg-zinc-200 hover:text-zinc-800 transition-colors duration-300"
        >
          Book Your Stay Now
        </a>
      </div>
    </div>
  );
};

export default Filler;

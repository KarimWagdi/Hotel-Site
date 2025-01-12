'use client';

import { useState } from 'react';

const categories = ["All", "Rooms", "Dining", "Outdoor", "Beach"];
const images = [
  {
    id: 1,
    url: "/assets/beach-1.jpg",
    category: "Beach",
    title: "Sunny Beach"
  },
  {
    id: 2,
    url: "/assets/beach-2.jpg",
    category: "Beach",
    title: "Sunny Beach"
  },
  {
    id: 3,
    url: "/assets/beach-3.jpg",
    category: "Beach",
    title: "Sunny Beach"
  },
  {
    id: 4,
    url: "/assets/dinning-1.jpg",
    category: "Dining",
    title: "Fine Dining"
  },
  {
    id: 5,
    url: "/assets/dinning-2.jpg",
    category: "Dining",
    title: "Elegant Restaurant"
  },
  {
    id: 6,
    url: "/assets/outdoor-1.jpg",
    category: "Outdoor",
    title: "Lush Garden"
  },
  {
    id: 7,
    url: "/assets/outdoor-2.jpg",
    category: "Outdoor",
    title: "Lush Garden"
  },
  {
    id: 8,
    url: "/assets/outdoor-3.jpg",
    category: "Outdoor",
    title: "Lush Garden"
  },
  {
    id: 9,
    url: "/assets/outdoor-4.jpg",
    category: "Outdoor",
    title: "Lush Garden"
  },
  {
    id: 10,
    url: "/assets/rooms-1.jpg",
    category: "Rooms",
    title: "Cozy Rooms"
  },
  {
    id: 11,
    url: "/assets/rooms-2.jpg",
    category: "Rooms",
    title: "Cozy Rooms"
  },
  {
    id: 12,
    url: "/assets/rooms-3.jpg",
    category: "Rooms",
    title: "Cozy Rooms"
  },
  {
    id: 13,
    url: "/assets/rooms-4.jpg",
    category: "Rooms",
    title: "Cozy Rooms"
  },
  {
    id: 14,
    url: "/assets/rooms-5.jpg",
    category: "Rooms",
    title: "Cozy Rooms"
  },
  {
    id: 15,
    url: "/assets/rooms-6.jpg",
    category: "Rooms",
    title: "Cozy Rooms"
  }
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = selectedCategory === "All" 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mt-10 text-4xl md:text-5xl font-serif text-center mb-12 text-[#1F4E5C]">Photo Gallery</h1>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-md border transition-colors duration-200 ${
              selectedCategory === category ? "bg-[#1F4E5C] text-white" : "border-gray-300 text-gray-600 hover:bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="relative group cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setSelectedImage(image.url)}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-xl font-serif">{image.title}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full p-4 relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

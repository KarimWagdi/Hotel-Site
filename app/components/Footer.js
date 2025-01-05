'use client';

// Footer Component
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-zinc-400">
              Experience unparalleled luxury and hospitality at our hotel. We are
              committed to providing you with the best stay.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li className="relative group">
                <a
                  href="#home"
                  className="transition-all inline-block relative group"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li className="relative group">
                <a
                  href="#rooms"
                  className="transition-all inline-block relative group"
                >
                  Rooms
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li className="relative group">
                <a
                  href="#amenities"
                  className="transition-all inline-block relative group"
                >
                  Amenities
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li className="relative group">
                <a
                  href="#gallery"
                  className="transition-all inline-block relative group"
                >
                  Gallery
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li className="relative group">
                <a
                  href="#contact"
                  className="transition-all inline-block relative group"
                >
                  Contact Us
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-zinc-400">
              <li>Phone: +1 234 567 890</li>
              <li>
                Email:{" "}
                <a
                  href="mailto:info@hotel.com"
                  className="relative group transition-all inline-block"
                >
                  info@hotel.com
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>Address: 123 Luxury Lane, Cityville</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-zinc-400">
          <p>&copy; {new Date().getFullYear()} Hotel Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-display text-primary bg-secondary">
            Royal Mandarin
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="#rooms" className="text-secondary hover:text-secondary transition-colors">Rooms</Link>
            <Link href="#dining" className="text-secondary hover:text-secondary transition-colors">Dining</Link>
            <Link href="#spa" className="text-secondary hover:text-secondary transition-colors">Spa</Link>
            <Link href="#experiences" className="text-secondary hover:text-secondary transition-colors">Experiences</Link>
            <Link href="/gallery" className="text-secondary hover:text-secondary transition-colors">Gallery</Link>
            <button className="bg-secondary text-primary px-4 py-2 rounded-full hover:bg-secondary/90 transition-colors">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg animate-fade-in">
            <div className="flex flex-col space-y-4 p-4">
              <Link href="#rooms" className="text-primary hover:text-secondary transition-colors">Rooms</Link>
              <Link href="#dining" className="text-primary hover:text-secondary transition-colors">Dining</Link>
              <Link href="#spa" className="text-primary hover:text-secondary transition-colors">Spa</Link>
              <Link href="#experiences" className="text-primary hover:text-secondary transition-colors">Experiences</Link>
              <button className="bg-secondary text-primary px-4 py-2 rounded-full hover:bg-secondary/90 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
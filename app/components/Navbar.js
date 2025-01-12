'use client'
import Link from "next/link";
// Navbar Component
import React, { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-transparent backdrop-blur-md transition-colors duration-300">
            <div className="container mx-auto flex justify-between items-center px-4 py-3">
                {/* Logo */}
                <div className="text-zinc-800 text-2xl font-bold">Logo</div>

                {/* Desktop Links */}
                <ul className="hidden md:flex space-x-6 text-zinc-800">
                    <li className="relative group">
                        <a href="/" className="transition-all">Home</a>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-zinc-800 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="relative group">
                        <Link href="/rooms" className="transition-all">Rooms</Link>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-zinc-800 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="relative group">
                        <a href="#destination" className="transition-all">Destination</a>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-zinc-800 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="relative group">
                        <a href="/gallery" className="transition-all">Gallery</a>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-zinc-800 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className="relative group">
                        <a href="#about" className="transition-all">About Us</a>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-zinc-800 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-zinc-800"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {isMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <ul className="absolute top-16 left-0 w-full bg-black bg-opacity-80 text-white flex flex-col space-y-4 py-4 px-6 md:hidden">
                        <li className="relative group">
                            <a href="#home" className="transition-all">Home</a>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <li className="relative group">
                            <a href="#rooms" className="transition-all">Rooms</a>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <li className="relative group">
                            <a href="#destination" className="transition-all">Destination</a>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <li className="relative group">
                            <a href="#gallery" className="transition-all">Gallery</a>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <li className="relative group">
                            <a href="#about" className="transition-all">About Us</a>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </li>
                    </ul>
                )}

                {/* CTA Button */}
                <div className="hidden md:block">
                    <a
                        href="#booking"
                        className="bg-zinc-800 text-white px-4 py-2 rounded hover:bg-zinc-200 hover:text-black transition-all duration-300" 
                    >
                        Book Now
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

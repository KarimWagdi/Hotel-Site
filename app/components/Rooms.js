"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import cover from '../../public/Kuredhivaru_xxxxxx_i128851_11by5.webp'
import room1 from '../../public/Downtown_Dubai_xxx_i126114_3by2.webp'
import room2 from '../../public/Downtown_Dubai_xxx_i126118_3by2.webp'
import room3 from '../../public/Downtown_Dubai_xxx_i126123_3by2.webp'
import room4 from '../../public/Downtown_Dubai_xxx_i126126_3by2.webp'
import room5 from '../../public/Downtown_Dubai_xxx_i127610_3by2.webp'
import room6 from '../../public/Downtown_Dubai_xxx_i126114_3by2.webp'

const rooms = [
    {
        id: 1,
        name: 'Deluxe Room',
        description: 'A comfortable room with a queen-sized bed, ensuite bathroom, and a balcony.',
        price: '$150/night',
        imageUrl: room1,
    },
    {
        id: 2,
        name: 'Suite',
        description: 'Spacious suite with a king-sized bed, living area, and stunning views.',
        price: '$250/night',
        imageUrl: room2,
    },
    {
        id: 3,
        name: 'Standard Room',
        description: 'A cozy room with all basic amenities for a comfortable stay.',
        price: '$100/night',
        imageUrl: room3,
    },
    {
        id: 4,
        name: 'Deluxe Room',
        description: 'A comfortable room with a queen-sized bed, ensuite bathroom, and a balcony.',
        price: '$150/night',
        imageUrl: room4,
    },
    {
        id: 5,
        name: 'Suite',
        description: 'Spacious suite with a king-sized bed, living area, and stunning views.',
        price: '$250/night',
        imageUrl: room5,
    },
    {
        id: 6,
        name: 'Standard Room',
        description: 'A cozy room with all basic amenities for a comfortable stay.',
        price: '$100/night',
        imageUrl: room6,
    },
];

const Rooms = () => {
    const [room, setRoom] = useState(null);
    const [roomCount, setRoomCount] = useState(1);
    const [adultsPerRoom, setAdultsPerRoom] = useState([1]);
    const [childrenPerRoom, setChildrenPerRoom] = useState([0]);

    function handleBooking(room) {
        setRoom(room);
        setRoomCount(1);
        setAdultsPerRoom([1]);
        setChildrenPerRoom([0]);
    }

    const close = () => {
        setRoom(null);
    };

    const handleRoomCountChange = (count) => {
        setRoomCount(count);
        setAdultsPerRoom(Array(count).fill(1));
        setChildrenPerRoom(Array(count).fill(0));
    };

    const handleAdultsChange = (index, value) => {
        const updatedAdults = [...adultsPerRoom];
        updatedAdults[index] = value;
        setAdultsPerRoom(updatedAdults);
    };

    const handleChildrenChange = (index, value) => {
        const updatedChildren = [...childrenPerRoom];
        updatedChildren[index] = value;
        setChildrenPerRoom(updatedChildren);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <main className="container mx-auto px-4 py-8">
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white shadow-lg py-8 text-center relative z-10 rounded-lg"
                >
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-800">City Name - Hotel Name</h1>
                </motion.div>

                <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${cover.src})` }} >
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="container mx-auto h-full flex flex-col justify-center items-center text-center text-white relative z-10">

                        <motion.h1
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="text-5xl md:text-7xl font-bold"
                        >
                            Welcome to Luxury Rooms
                        </motion.h1>


                        <motion.p
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="mt-4 text-xl md:text-2xl"
                        >
                            Your Perfect Getaway Awaits
                        </motion.p>

                        <motion.a

                            onClick={() => {
                                document.getElementById('our-rooms').scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="mt-8 px-6 py-3 cursor-pointer bg-primary-500 hover:bg-primary-700 text-white rounded-lg text-lg flex items-center"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            Explore Now <BsArrowRight className="ml-2" />
                        </motion.a>

                    </div>
                </section>

                <h2
                    id="our-rooms"
                    className="text-center mb-6 mt-6 text-3xl md:text-5xl font-bold"
                >
                    <motion.span
                        initial={{ scale: 1 }}
                        whileInView={{ scale: 1.5 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Our Rooms
                    </motion.span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {rooms.map((room) => (
                        <motion.div
                            key={room.id}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full"
                        >
                            <Image
                                src={room.imageUrl || '/images/room.jpg'}
                                alt={room.name || 'Placeholder Image'}
                                className="w-full h-64 object-cover"
                                width={400}
                                height={200}
                            />
                            <div className="p-4 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold mb-2 text-zinc-800">{room.name}</h3>
                                    <p className="text-gray-600 mb-4">{room.description}</p>
                                </div>
                                <div className='mt-auto'>
                                    <p className="text-zinc-600 font-bold mb-2">{room.price}</p>
                                    <motion.button
                                        onClick={() => handleBooking(room)}
                                        className="w-full bg-zinc-600 text-white py-2 rounded border hover:border-zinc-600 hover:bg-white hover:text-zinc-600 transition mt-auto"
                                    >
                                        Check Availability
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {room && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                        onClick={close}
                    >
                        <motion.div
                            initial={{ y: -50 }}
                            animate={{ y: 0 }}
                            className="bg-white p-8 rounded-lg shadow-lg w-3/4 max-w-2xl max-h-[80vh] overflow-y-auto relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h2 className="text-xl font-semibold mb-4 text-center">Book {room.name}</h2>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-600"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-600"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="flex justify-between space-x-4">
                                    <div className="flex-1">
                                        <label className="block text-gray-700 font-medium mb-2">Check-In</label>
                                        <input
                                            type="date"
                                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-600"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <label className="block text-gray-700 font-medium mb-2">Check-Out</label>
                                        <input
                                            type="date"
                                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-600"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Number of Rooms</label>
                                    <select
                                        value={roomCount}
                                        onChange={(e) => handleRoomCountChange(Number(e.target.value))}
                                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-600"
                                    >
                                        {[...Array(5).keys()].map((num) => (
                                            <option key={num + 1} value={num + 1}>
                                                {num + 1}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {[...Array(roomCount)].map((_, index) => (
                                    <div key={index} className="space-y-4">
                                        <h3 className="text-gray-700 font-medium">Room {index + 1}</h3>
                                        <div className="flex justify-between space-x-4">
                                            <div className="flex-1">
                                                <label className="block text-gray-700 font-medium mb-2">Adults</label>
                                                <select
                                                    value={adultsPerRoom[index]}
                                                    onChange={(e) => handleAdultsChange(index, Number(e.target.value))}
                                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-600"
                                                >
                                                    {[...Array(4).keys()].map((num) => (
                                                        <option key={num + 1} value={num + 1}>
                                                            {num + 1}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="flex-1">
                                                <label className="block text-gray-700 font-medium mb-2">Children</label>
                                                <select
                                                    value={childrenPerRoom[index]}
                                                    onChange={(e) => handleChildrenChange(index, Number(e.target.value))}
                                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-600"
                                                >
                                                    {[...Array(4).keys()].map((num) => (
                                                        <option key={num} value={num}>
                                                            {num}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <button
                                    type="submit"
                                    className="w-full bg-zinc-600 text-white py-2 border rounded hover:bg-white hover:text-zinc-600 hover:border-zinc-600 transition"
                                >
                                    Confirm Booking
                                </button>
                            </form>
                            <button
                                onClick={close}
                                className="mt-4 w-full text-zinc-600 underline hover:text-zinc-800"
                            >
                                Cancel
                            </button>
                        </motion.div>
                    </motion.div>
                )}

            </main>
        </div>
    );
};

export default Rooms;

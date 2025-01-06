"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import cover from '../../public/aja_p_1853-38_13by5.webp'

const rooms = [
    {
        id: 1,
        name: 'Deluxe Room',
        description: 'A comfortable room with a queen-sized bed, ensuite bathroom, and a balcony.',
        price: '$150/night',
        imageUrl: '/images/deluxe-room.jpg',
    },
    {
        id: 2,
        name: 'Suite',
        description: 'Spacious suite with a king-sized bed, living area, and stunning views.',
        price: '$250/night',
        imageUrl: '/images/suite.jpg',
    },
    {
        id: 3,
        name: 'Standard Room',
        description: 'A cozy room with all basic amenities for a comfortable stay.',
        price: '$100/night',
        imageUrl: '/images/standard-room.jpg',
    },
    {
        id: 4,
        name: 'Deluxe Room',
        description: 'A comfortable room with a queen-sized bed, ensuite bathroom, and a balcony.',
        price: '$150/night',
        imageUrl: '/images/deluxe-room.jpg',
    },
    {
        id: 5,
        name: 'Suite',
        description: 'Spacious suite with a king-sized bed, living area, and stunning views.',
        price: '$250/night',
        imageUrl: '/images/suite.jpg',
    },
    {
        id: 6,
        name: 'Standard Room',
        description: 'A cozy room with all basic amenities for a comfortable stay.',
        price: '$100/night',
        imageUrl: '/images/standard-room.jpg',
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
    }

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
                <div className="bg-white text-zinc-800 py-6 text-center relative z-10">
                    <h1 className="text-2xl md:text-4xl font-bold">City Name - Hotel Name</h1>
                </div>
                <Image
                    src={cover}
                    alt="City View"
                    className="w-full h-auto object-cover mt-4"
                />
                <h2 className="text-xl md:text-2xl font-semibold text-center mb-6 mt-6">Our Rooms</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {rooms.map((room) => (
                        <div
                            key={room.id}
                            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full">
                            <img
                                src={room.imageUrl || '/images/placeholder.jpg'}
                                alt={room.name || 'Placeholder Image'}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">{room.name}</h3>
                                    <p className="text-gray-600 mb-4">{room.description}</p>
                                </div>
                                <div className='mt-auto'>
                                    <p className="text-zinc-600 font-bold mb-2">{room.price}</p>
                                    <button
                                        onClick={() => handleBooking(room)}
                                        className="w-full bg-zinc-600 text-white py-2 rounded border hover:border-zinc-600 hover:bg-white hover:text-zinc-600 transition mt-auto"
                                    >
                                        Check Availability
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {room && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg max-h-[80vh] overflow-y-auto">
                            <h2 className="text-xl font-semibold mb-4">Book {room.name}</h2>
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
                        </div>
                    </div>
                )}

            </main>
        </div>
    );
};

export default Rooms;

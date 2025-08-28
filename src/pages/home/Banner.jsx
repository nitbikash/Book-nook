import React, { useState, useEffect } from 'react';
import '../../App.css';
import deepEnd from "../../assets/carousel/deepEnd.jpg";
import atmosphere from "../../assets/carousel/atmosphere.jpg";
import funnyStory from "../../assets/carousel/funnyStory.jpg";
import sayYoullRememberMe from "../../assets/carousel/sayYoullRememberMe.jpg";
import rewindItBack from "../../assets/carousel/rewindItBack.jpg";
import katabasis from "../../assets/carousel/katabasis.jpg";

const carouselItems = [
    { id: 1, title: "Deep End", img: deepEnd },
    { id: 2, title: "Atmosphere", img: atmosphere },
    { id: 3, title: "Funny Story", img: funnyStory },
    { id: 4, title: "Say You'll Remember Me", img: sayYoullRememberMe },
    { id: 5, title: "Rewind It Back", img: rewindItBack },
    { id: 6, title: "Katabasis", img: katabasis },
];

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [items, setItems] = useState(carouselItems.map((item, index) => ({
        ...item,
        order: index
    })));

    useEffect(() => {
        let interval;
        if (isAutoPlaying) {
            interval = setInterval(() => {
                handleNext();
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const handlePrevious = () => {
        setCurrentIndex(prev => (prev - 1 + carouselItems.length) % carouselItems.length);
        setItems(prevItems => prevItems.map(item => ({
            ...item,
            order: (item.order + 1) % carouselItems.length
        })));
    };

    const handleNext = () => {
        setCurrentIndex(prev => (prev + 1) % carouselItems.length);
        setItems(prevItems => prevItems.map(item => ({
            ...item,
            order: (item.order - 1 + carouselItems.length) % carouselItems.length
        })));
    };

    const getItemClass = (order) => {
        switch (order) {
            case 0: return 'focus';
            case 1: return 'big2';
            case 2: return 'small2';
            case carouselItems.length - 2: return 'small1';
            case carouselItems.length - 1: return 'big1';
            default: return 'hidden';
        }
    };

    return (
        <div
            className="flex flex-col md:flex-row items-center justify-between w-full p-8 gap-8 min-h-[600px] bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-xl">
            {/* Left Content Section */}
            <div className="w-full md:w-1/2 space-y-6 p-6 md:p-8 text-center md:text-left">
                <h1 className="sm:text-4xl md:text-5xl font-semibold text-gray-800 whitespace-nowrap">
                    New Releases This Week!
                </h1>
                <p className="text-gray-600">
                    Dive into a world of fresh stories and exciting reads with this week's newest arrivals! Whether
                    you're craving a thrilling mystery, a heartwarming romance, or the latest thought-provoking
                    non-fiction, our collection has something for everyone. Explore tales from bestselling authors and
                    discover rising stars in the literary world. Don't miss out—your next favorite book is just a click
                    away!
                </p>
                <button
                    className="btn-primary mt-6 px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-lg">
                    Subscribe!
                </button>
            </div>

            {/* Carousel Section */}
            <div
                className="w-full md:w-full relative h-[400px] md:h-[500px] pt-16 bg-gradient-to-tl from-blue-100 to-indigo-100 rounded-lg overflow-hidden shadow-xl">
                <div className="relative w-full h-full">
                    {/* Navigation Buttons */}
                    <button
                        onClick={handlePrevious}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 ease-in-out sm:left-2 md:left-4"
                    >
                        ←
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 ease-in-out sm:right-2 md:right-4"
                    >
                        →
                    </button>

                    {/* Carousel Items */}
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className={`absolute transition-all duration-500 ease-in-out ${getItemClass(item.order)}`}
                        >
                            <div
                                className={`
                        rounded-xl shadow-2xl p-4 bg-white transform transition-all duration-500 
                        ${item.order === 0 ? 'scale-110 shadow-2xl' : 'scale-90 shadow-lg'}
                    `}
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full md:h-[250px] lg:h-[300px] object-cover rounded-md shadow-md transition-all duration-300 ease-in-out"
                                />
                                <h3 className="mt-4 text-center text-sm sm:text-lg md:text-xl font-semibold text-gray-800">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Banner;

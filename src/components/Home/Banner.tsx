"use client"
import React, { useEffect, useState } from "react";
import {
  MdLocationOn,
  MdTravelExplore,
  MdOutlineDateRange,
} from "react-icons/md";
import { FaPaperPlane } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Banner = () => {
  const images = [
    "https://img.freepik.com/free-photo/backpacker-standing-sunrise-viewpoint-ja-bo-village-mae-hong-son-province-thailand_335224-1356.jpg?ga=GA1.1.1518679940.1727447932&semt=ais_hybrid&w=740",
    "https://img.freepik.com/free-photo/skogafoss-waterfall-iceland-guy-red-jacket-looks-skogafoss-waterfall_335224-593.jpg?ga=GA1.1.1518679940.1727447932&semt=ais_hybrid&w=740",
    "https://media.istockphoto.com/id/516449022/photo/lady-with-kayak.jpg?b=1&s=612x612&w=0&k=20&c=PsQQpGXVtV9dPDaH-DNEgeMAHjqkViCSQsSrkqlHKRk="
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    );
  };

    // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval); // Cleanup
  }, [currentIndex]);

  return (
    <div
      className="relative w-full h-[calc(100vh-80px)] md:h-[calc(100vh-100px)] lg:h-[calc(100vh-120px)] bg-cover bg-center transition-all duration-500"
      style={{
        backgroundImage: `url('${images[currentIndex]}')`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
        <p className="text-red-400 font-bold mb-4 uppercase tracking-widest text-sm md:text-base">
          Tour & Travel Agency
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 tracking-wide">
          Explore Beauty<br className="md:hidden" />  of Bangladesh
        </h1>
        <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-200">
          Velit integer eu tincidunt scelerisque. Sodales volutpat neque
          fermentum malesuada.
        </p>

        {/* Paper Planes */}
        <div className="absolute bottom-32 left-8 md:bottom-20 md:left-20 lg:left-40 xl:left-60">
          <FaPaperPlane className="text-white text-xl animate-float-one" />
          <div className="border-t border-dashed border-white w-24 mt-2 transform -rotate-12 animate-dash-left"></div>
        </div>
        <div className="absolute top-40 right-8 md:top-20 md:right-20 lg:right-40 xl:right-60">
          <FaPaperPlane className="text-white text-xl animate-float-two" />
          <div className="border-t border-dashed border-white w-24 mt-2 transform rotate-12 animate-dash-right"></div>
        </div>
      </div>

      {/* Prev/Next Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 text-black p-2 rounded-full z-20"
      >
        <FiChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 text-black p-2 rounded-full z-20"
      >
        <FiChevronRight size={24} />
      </button>

      {/* Search Bar */}
      <div className="mx-16 absolute bottom-0 left-0 right-0 z-20 bg-white/90 backdrop-blur-sm shadow-lg rounded-t-lg">
        <div className="flex flex-col md:flex-row items-center justify-between p-4 space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex items-center text-gray-700 w-full md:w-auto border-b md:border-b-0 md:border-r border-gray-300 pb-2 md:pb-0 md:pr-4">
            <MdLocationOn className="mr-2 text-blue-500" size={20} />
            <select className="bg-transparent outline-none w-full cursor-pointer">
              <option>Destination</option>
              <option>Asia</option>
              <option>Europe</option>
              <option>America</option>
            </select>
          </div>
          <div className="flex items-center text-gray-700 w-full md:w-auto border-b md:border-b-0 md:border-r border-gray-300 pb-2 md:pb-0 md:pr-4">
            <MdTravelExplore className="mr-2 text-green-500" size={20} />
            <select className="bg-transparent outline-none w-full cursor-pointer">
              <option>Trip Types</option>
              <option>Adventure</option>
              <option>Relaxation</option>
              <option>Cultural</option>
            </select>
          </div>
          <div className="flex items-center text-gray-700 w-full md:w-auto border-b md:border-b-0 md:border-r border-gray-300 pb-2 md:pb-0 md:pr-4">
            <BiWorld className="mr-2 text-purple-500" size={20} />
            <select className="bg-transparent outline-none w-full cursor-pointer">
              <option>Activity</option>
              <option>Hiking</option>
              <option>Beaching</option>
              <option>City Tour</option>
            </select>
          </div>
          <div className="flex items-center text-gray-700 w-full md:w-auto border-b md:border-b-0 border-gray-300 pb-2 md:pb-0 md:pr-4">
            <MdOutlineDateRange className="mr-2 text-orange-500" size={20} />
            <select className="bg-transparent outline-none w-full cursor-pointer">
              <option>4 Days - 10 Days</option>
              <option>1-3 Days</option>
              <option>10+ Days</option>
            </select>
          </div>
          <button className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-md hover:bg-indigo-700 transition-colors duration-300 w-full md:w-auto">
            Find Your Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

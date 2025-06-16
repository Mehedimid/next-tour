import React from 'react';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos, MdLocationOn, MdTravelExplore, MdOutlineDateRange } from 'react-icons/md';
import { FaPaperPlane } from 'react-icons/fa'; // For the small paper plane icons
import { BiWorld } from 'react-icons/bi'; // Another icon option for activity

const Banner = () => {
  return (
    <div className="relative w-full h-[calc(100vh-80px)] md:h-[calc(100vh-100px)] lg:h-[calc(100vh-120px)] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506929562872-bb443d21c471?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Main Content (Text and Arrows) */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
        {/* Left Arrow */}
        <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 p-3 rounded-full text-white hover:bg-white/30 transition-colors hidden md:block">
          <MdOutlineArrowBackIos size={24} />
        </button>

        {/* Text Content */}
        <p className="text-red-400 font-bold mb-4 uppercase tracking-widest text-sm md:text-base">
          Tour & Travel Agency
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 tracking-wide">
          Explore The <br className="md:hidden" /> Global Worlds
        </h1>
        <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-200">
          Velit integer eu tincidunt scelerisque. Sodales volutpat neque fermentum malesuada.
        </p>

        {/* Small decorative elements (paper planes and dashed lines) */}
        <div className="absolute bottom-32 left-8 md:bottom-20 md:left-20 lg:left-40 xl:left-60">
          <FaPaperPlane className="text-white text-xl animate-float-one" />
          <div className="border-t border-dashed border-white w-24 mt-2 transform -rotate-12 animate-dash-left"></div>
        </div>
        <div className="absolute top-40 right-8 md:top-20 md:right-20 lg:right-40 xl:right-60">
          <FaPaperPlane className="text-white text-xl animate-float-two" />
          <div className="border-t border-dashed border-white w-24 mt-2 transform rotate-12 animate-dash-right"></div>
        </div>

        {/* Right Arrow */}
        <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 p-3 rounded-full text-white hover:bg-white/30 transition-colors hidden md:block">
          <MdOutlineArrowForwardIos size={24} />
        </button>
      </div>

      {/* Bottom Search/Filter Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-white/90 backdrop-blur-sm shadow-lg rounded-t-lg mx-auto w-full max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between p-4 space-y-4 md:space-y-0 md:space-x-4">
          {/* Destination Dropdown */}
          <div className="flex items-center text-gray-700 w-full md:w-auto border-b md:border-b-0 md:border-r border-gray-300 pb-2 md:pb-0 md:pr-4">
            <MdLocationOn className="mr-2 text-blue-500" size={20} />
            <select className="bg-transparent outline-none w-full cursor-pointer">
              <option className='text-primary'>Destination</option>
              <option className='text-primary'>Asia</option>
              <option className='text-primary'>Europe</option>
              <option className='text-primary'>America</option>
            </select>
          </div>

          {/* Trip Types Dropdown */}
          <div className="flex items-center text-gray-700 w-full md:w-auto border-b md:border-b-0 md:border-r border-gray-300 pb-2 md:pb-0 md:pr-4">
            <MdTravelExplore className="mr-2 text-green-500" size={20} />
            <select className="bg-transparent outline-none w-full cursor-pointer">
              <option>Trip Types</option>
              <option>Adventure</option>
              <option>Relaxation</option>
              <option>Cultural</option>
            </select>
          </div>

          {/* Activity Dropdown */}
          <div className="flex items-center text-gray-700 w-full md:w-auto border-b md:border-b-0 md:border-r border-gray-300 pb-2 md:pb-0 md:pr-4">
            <BiWorld className="mr-2 text-purple-500" size={20} />
            <select className="bg-transparent outline-none w-full cursor-pointer">
              <option>Activity</option>
              <option>Hiking</option>
              <option>Beaching</option>
              <option>City Tour</option>
            </select>
          </div>

          {/* Duration Dropdown */}
          <div className="flex items-center text-gray-700 w-full md:w-auto border-b md:border-b-0 border-gray-300 pb-2 md:pb-0 md:pr-4">
            <MdOutlineDateRange className="mr-2 text-orange-500" size={20} />
            <select className="bg-transparent outline-none w-full cursor-pointer">
              <option>4 Days - 10 Days</option>
              <option>1-3 Days</option>
              <option>10+ Days</option>
            </select>
          </div>

          {/* Find Your Trip Button */}
          <button className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-md hover:bg-indigo-700 transition-colors duration-300 w-full md:w-auto">
            Find Your Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
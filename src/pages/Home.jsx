import React from 'react';
import hotel from '../assets/hotel.jpg';
import { FaPhoneAlt } from 'react-icons/fa'; // Import the phone icon
import './style.css';
import AboutUs from '../component/AboutUs';
import Facilities from '../component/Facilities';
import Rooms from '../component/Rooms';
import Amenties from '../component/Amenties';
import Testimonials from '../component/Testimonials';

const Home = () => {
  return (
    <>
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${hotel})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-10 md:pl-20">
        <div className="text-left max-w-lg mb-10 animate-slideInUp">
          <p className="text-white text-lg md:text-xl font-semibold mb-3 opacity-0 animate-fadeIn">Luxury Hotel and Restaurant</p>
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-4 leading-tight shadow-lg opacity-0 animate-fadeIn delay-300 my-text">
            Enjoy Your <span className="text-[#9d7e54]">Dream</span> Time With <span className="text-[#9d7e54]">Luxury</span> Experience
          </h1>
          <div className="mt-6 opacity-0 animate-fadeIn delay-500">
            <button className="bg-[#9d7e54] text-white px-6 py-3 rounded-lg text-lg md:text-xl font-bold hover:bg-gold-600 transition-colors duration-300 shadow-lg">
              Book Now
            </button>
            <div className="flex items-center mt-4 text-white text-lg md:text-xl font-semibold">
              <FaPhoneAlt className="mr-2" />
              <p>Call Us: 78990007</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AboutUs/>
    <Facilities/>
    <Rooms/>
    <Amenties/>
    <Testimonials/>
    </>
  );
};

export default Home;

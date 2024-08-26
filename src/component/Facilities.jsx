 import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TbArrowRightCircle, TbArrowLeftCircle } from 'react-icons/tb';
import { CgShapeRhombus } from 'react-icons/cg';
import { RiServiceFill } from "react-icons/ri";
import { GiHomeGarage, GiFruitTree } from 'react-icons/gi';
import { FaBedPulse } from 'react-icons/fa6';
import { MdBrunchDining, MdFamilyRestroom } from 'react-icons/md';
import './style.css';

const Facilities = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in milliseconds
      once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <div className="py-12 px-4 md:px-16">
      {/* Header Section */}
      <div className="flex items-center justify-center mb-8">
        <TbArrowLeftCircle className='text-[#9d7e54] text-2xl' />
        <CgShapeRhombus className='text-[#9d7e54] text-2xl mx-2' />
        <p className='text-lg md:text-xl font-semibold text-gray-800'>Facilities</p>
        <CgShapeRhombus className='text-[#9d7e54] text-2xl mx-2' />
        <TbArrowRightCircle className='text-[#9d7e54] text-2xl' />
      </div>

      {/* Title Section */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h1 className='text-3xl md:text-4xl font-bold text-gray-800'>
          Our Best <span className='text-[#9d7e54]'>Services</span>
        </h1>
      </div>

      {/* Facilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            icon: <GiHomeGarage className='icon text-[#9d7e54] text-6xl mb-4' />,
            title: 'Basic Facilities',
            items: ['Reception/Front Desk', 'Room Service', 'Housekeeping', 'Wi-Fi & Parking'],
            key: 'home',
            animation: 'fade-right'
          },
          {
            icon: <FaBedPulse className='icon text-[#9d7e54] text-6xl mb-4' />,
            title: 'Room Amenities',
            items: ['Comfortable Bedding', 'Bathroom & Pool', 'TV, AC & Heating'],
            key: 'bed',
            animation: 'fade-up'
          },
          {
            icon: <MdBrunchDining className='icon text-[#9d7e54] text-6xl mb-4' />,
            title: 'Dining Options',
            items: ['Restaurant & Cafe', 'Room Service', 'Cafe & Canteen'],
            key: 'brunch',
            animation: 'fade-left'
          },
          {
            icon: <MdFamilyRestroom className='icon text-[#9d7e54] text-6xl mb-4' />,
            title: 'Family Facilities',
            items: ['Family Rooms', 'Kids Club', 'Game Zone'],
            key: 'family',
            animation: 'fade-right'
          },
          {
            icon: <GiFruitTree className='icon text-[#9d7e54] text-6xl mb-4' />,
            title: 'Special Features',
            items: ['Custom Rooms', 'Terrace', 'Event Spaces'],
            key: 'fruit',
            animation: 'fade-up'
          },
          {
            icon: <RiServiceFill className='icon text-[#9d7e54] text-6xl mb-4' />,
            title: 'Special Features',
            items: ['Custom Rooms', 'Terrace', 'Event Spaces'],
            key: 'fruit-2',
            animation: 'fade-left'
          },
        ].map(({ icon, title, items, key, animation }) => (
          <div
            key={key}
            className="card bg-gray-100 rounded-3xl shadow-lg p-6"
            data-aos={animation}
          >
            {icon}
            <h2 className='text-xl font-semibold text-gray-800 mb-4'>{title}</h2>
            <div className="space-y-2 text-gray-600">
              {items.map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" className="mr-2 text-[#9d7e54]">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
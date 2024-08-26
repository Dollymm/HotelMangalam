import React from 'react';
import { TbArrowRightCircle, TbArrowLeftCircle } from 'react-icons/tb';
import { CgShapeRhombus } from 'react-icons/cg';

import carparking from '../assets/car-Parking.jpg';
import lift from '../assets/lift2.jpg';
import badrinath from '../assets/badrinath.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  prevArrow: <TbArrowLeftCircle className="text-[#9d7e54] text-3xl" />,
  nextArrow: <TbArrowRightCircle className="text-[#9d7e54] text-3xl" />,
};

const Amenties = () => {
  return (
    <div className='mt-9'>
      {/* Header Section */}
      <div className="flex items-center justify-center mb-8">
        <TbArrowLeftCircle className='text-[#736450] text-2xl' />
        <CgShapeRhombus className='text-[#9d7e54] text-2xl mx-2' />
        <p className='text-lg md:text-xl font-semibold text-gray-800'>Luxury Comfort</p>
        <CgShapeRhombus className='text-[#9d7e54] text-2xl mx-2' />
        <TbArrowRightCircle className='text-[#9d7e54] text-2xl' />
      </div>

      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className='text-3xl md:text-4xl font-bold text-gray-800'>
           <span className='text-[#9d7e54]'>Our</span> Amenities
        </h1>
      </div>

      {/* Facilities Carousel */}
      <div className="p-6 bg-gray-100 flex justify-center">
        <div className="w-full max-w-5xl">
          <Slider {...settings}>
            {/* Facility 1 */}
            <div className="flex items-center justify-center p-6 bg-gray-100 slick-slide">
              <div className="flex items-center w-full rounded-lg shadow-lg overflow-hidden">
                {/* Image Container */}
                <div className="relative w-1/2 overflow-hidden">
                  <img
                    src={carparking}
                    alt="Parking"
                    className="w-full h-full object-cover rounded-l-full"
                  />
                </div>
                
                {/* Content Container */}
                <div className="w-1/2 p-8">
                  <h2 className="text-2xl font-bold text-[#9d7e54]">Parking</h2>
                  <p className="text-black mt-2">
                    On-Site Parking: Our hotel provides ample on-site parking space for guests. Whether you're driving a compact car or an SUV, you'll find a parking spot conveniently located close to the hotel's entrance.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Facility 2 */}
            <div className="flex items-center justify-center p-6 bg-gray-100 slick-slide">
              <div className="flex items-center w-full rounded-lg shadow-lg overflow-hidden">
                {/* Image Container */}
                <div className="relative w-1/2 overflow-hidden">
                  <img
                    src={lift}
                    alt="Lift Facilities"
                    className="w-full h-full object-cover rounded-l-full"
                  />
                </div>
                
                {/* Content Container */}
                <div className="w-1/2 p-8">
                  <h2 className="text-2xl font-bold text-[#9d7e54]">Lift Facilities</h2>
                  <p className="text-black mt-2">
                    Our hotel is equipped with modern lift facilities for your convenience. Enjoy easy access to all floors, whether you're carrying heavy luggage or simply exploring.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Facility 3 */}
            <div className="flex sm:flex-col items-center justify-center p-6 bg-gray-100 slick-slide">
              <div className="flex items-center w-full rounded-lg shadow-lg overflow-hidden">
                {/* Image Container */}
                <div className="relative w-1/2 overflow-hidden">
                  <img
                    src={badrinath}
                    alt="Temple View"
                    className="w-full h-full object-cover rounded-l-full"
                  />
                </div>
                
                {/* Content Container */}
                <div className="w-1/2 p-8">
                  <h2 className="text-2xl font-bold text-[#9d7e54]">Temple View</h2>
                  <p className="text-black mt-2">
                    Enjoy a serene view of the temple from our hotel. The tranquil surroundings offer a perfect escape from the hustle and bustle of city life.
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Amenties;

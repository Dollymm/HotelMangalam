import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import inside1 from '../assets/inside1.jpg';
import inside2 from '../assets/inside2.jpeg';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration in milliseconds
      once: true, // whether the animation should happen only once
    });
  }, []);

  return (
    <div className="relative w-full min-h-screen flex flex-col md:flex-row items-center bg-gray-100 p-8 md:p-16">
      {/* Full Image */}
      <div data-aos="fade-right" className="w-full md:w-1/2 relative mb-8 md:mb-0">
        <img
          src={inside1}
          alt="Hotel Interior 1"
          className="w-full h-auto rounded-lg shadow-lg object-cover"
          style={{ maxHeight: '400px', objectFit: 'cover' }}
        />
      </div>

      {/* Text and Partial Overlay */}
      <div className="w-full md:w-1/2 flex flex-col justify-center relative">
        <div data-aos="fade-left" className="absolute inset-0 flex items-center justify-end">
          <img
            src={inside2}
            alt="Hotel Interior 2"
            className="w-2/3 h-auto rounded-lg shadow-lg object-cover"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 50%)' }}
          />
        </div>

        {/* Text Section */}
        <div data-aos="fade-up" className="relative z-20 mt-8 md:mt-0 md:pl-8">
          <h3 className="text-gray-700 text-lg md:text-xl font-semibold mb-2">The Mangalam Hotel</h3>
          <h1 className="text-black text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Where Elegance Meets <span className="text-[#766347]">Excellence</span>
          </h1>
          <p className="text-[#352f27] text-base md:text-lg leading-relaxed">
            Nestled in the heart of Uttrakhand, Mangalam stands as a beacon of elegance and sophistication. Our hotel seamlessly blends timeless charm with modern amenities, offering an unparalleled experience for discerning travelers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-black shadow-lg' : 'bg-black'}`}>
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center">
          {/* <img src="/path-to-your-logo" alt="Hotel Mangalam" className="w-10 h-10 rounded-full" /> */}
          <h1 className="ml-3 text-white text-2xl font-bold transition-colors duration-300">Hotel <span className='text-[#9d7e54]'>Mangalam</span></h1>
        </div>
        <div className="hidden md:flex items-center">
          <ul className="flex space-x-6 text-black">
            <li className="text-white transition-colors duration-300 hover:underline"><Link to='/'>Home</Link></li>
            <li className="text-white transition-colors duration-300"><Link to='/room'>Rooms</Link></li>
            <li className="text-white transition-colors duration-300"><Link to='/service'>Services</Link></li>
            <li className="text-white transition-colors duration-300"><Link to='/about'>About Us</Link></li>
            <li className="text-white transition-colors duration-300"><Link to='/near'>Attraction</Link></li>
            <li className="text-white transition-colors duration-300"><Link to='/contact'>Conatct US </Link></li>
          </ul>
          <button className="ml-6 border border-white text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300">
            Book Now
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="  text-white border border-black px-4 py-2 rounded-lg hover:bg-black transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 shadow-lg p-4 transition-transform duration-300 ease-in-out">
          <ul className="flex flex-col space-y-6 text-white">
            <li className="hover:text-red-600 transition-colors duration-300">Home</li>
            <li className="hover:text-red-600 transition-colors duration-300">Room</li>
            <li className="hover:text-red-600 transition-colors duration-300">Services</li>
            <li className="hover:text-red-600 transition-colors duration-300">About Us</li>
            <li className="hover:text-red-600 transition-colors duration-300">Blog</li>
            <li className="hover:text-red-600 transition-colors duration-300">Contact Us</li>
          </ul>
        
        </div>
      )}
    </div>
  );
};

export default Header;

import React from 'react';
import './style.css'

const Footer = () => {
  return (
    <footer className="bg-black  text-gray-300 py-10 px-6 md:px-12  ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Hotel Section */}
        <div>
          <h1 className="text-lg font-bold text-white mb-4">About Hotel</h1>
          <p className="text-gray-400">
            At Mangalam Hotel, guests are greeted with warm hospitality and modern amenities that ensure a comfortable stay. The rooms are tastefully designed, reflecting the simplicity and purity of the sacred location,.
          </p>
        </div>

        {/* Explore Section */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Explore</h2>
          <ul className="text-gray-400 space-y-2">
            <li>- Restaurant</li>
            <li>- Rooms & Suites</li>
            <li>- Events</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Contact</h2>
          <ul className="text-gray-400 space-y-2">
            <li>- About Us</li>
            <li>- Contact Us</li>
          </ul>
        </div>

        {/* Address Section */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Address</h2>
          <p className="text-gray-400 mb-4">Badrinath, Chamoli, Uttarakhand</p>
          <div>
            <h3 className="text-white mb-2">Email</h3>
            <p className="text-gray-400">badrinath@gmail.com</p>
          </div>
          <div className="mt-4">
            <h3 className="text-white mb-2">Phone No</h3>
            <p className="text-gray-400">9886665</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center border-t border-gray-700 pt-6">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Mangalam Hotel. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

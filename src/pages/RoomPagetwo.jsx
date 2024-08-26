import React, { useState, useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

import roomHero from '../assets/room5.jpeg'; // Hero image
import room1 from '../assets/room1.jpg';
import room2 from '../assets/room2.jpg';
import room3 from '../assets/room3.jpg';
import room4 from '../assets/room4.jpeg';

import Modal from './Modal'; // Import the Modal component

const Room = [
  {
    name: 'Single Room',
    category: 'Deluxe',
    img: {
      img1: room1,
      img2: room2,
      img3: room3,
    },
    price: '1000',
  },
  {
    name: 'Double Room',
    category: 'Family',
    img: {
      img1: room2,
      img2: room3,
      img3: room4,
    },
    price: '2000',
  },
  {
    name: 'Double Room',
    category: 'Single',
    img: {
      img1: room2,
      img2: room3,
      img3: room4,
    },
    price: '2000',
  },
];

const RoomPagetwo = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [date, setDate] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleCheckAvailability = () => {
    console.log('Checking availability for date:', date);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const filteredRooms = Room.filter((room) =>
    selectedCategory ? room.category === selectedCategory : true
  );

  return (
    <div className="container mx-auto p-6">
      {/* Hero Image */}
      <div className="relative mb-12" data-aos="fade-up">
        <img
          src={roomHero}
          alt="Hero Room"
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
        <p className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white text-lg px-4 py-2 rounded">
          Room Details
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Right Side: Check Availability and Room Types */}
        <div className="w-full h-[50%] md:w-1/3 p-4 bg-white border border-gray-200 rounded-lg shadow-lg" data-aos="fade-right">
          {/* Check Availability Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Check Availability</h2>
            <input
              type="date"
              value={date}
              onChange={handleDateChange}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4"
            />
            <button
              onClick={handleCheckAvailability}
              className="w-full bg-[#9d7e54] text-white px-4 py-2 rounded-lg hover:bg-black transition"
            >
              Check Rates
            </button>
          </div>

          {/* Room Type Section */}
          <div>
            <hr className='bg-black'/>
            <h1 className="text-2xl font-semibold mb-4">Room Type</h1>
            <ul>
              {['Deluxe', 'Single', 'Family'].map((category) => (
                <li key={category} className="my-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value={category}
                      checked={selectedCategory === category}
                      onChange={() => handleCategoryChange(category)}
                      className="mr-2"
                    />
                    {category}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          {/* Rules */}
          <div>
            <hr className='bg-black'/>
            <h1 className="text-2xl font-semibold text-black">Rules & Regulations</h1>
            <ul className="list-disc list-inside mt-4 text-gray-700">
              <li>No smoking inside the room</li>
              <li>Check-in: After 02:00pm</li>
              <li>Checkout: Before 11:00am</li>
              <li>No Pets</li>
              <li>Identification document is a must for hotel registration.</li>
            </ul>
          </div>

        </div>

        {/* Left Side: Filtered Room Images */}
        <div className="w-full md:w-2/3 p-4 bg-white border border-gray-200 rounded-lg shadow-lg" data-aos="fade-left">
          {filteredRooms.map((room, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{room.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.values(room.img).map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image}
                    alt={`${room.name} - Image ${imgIndex + 1}`}
                    className="w-full h-64 object-cover rounded-lg cursor-pointer transition-transform transform hover:scale-105"
                    onClick={() => handleImageClick(image)}
                    data-aos="zoom-in"
                  />
                ))}
              </div>
              <p className="text-gray-600 mt-4">Category: {room.category}</p>
              <p className="text-gray-600">Price: ₹{room.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Full Image */}
      <Modal image={selectedImage} onClose={handleCloseModal} />
    </div>
  );
};

export default RoomPagetwo;

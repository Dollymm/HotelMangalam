import React from 'react';
import room from '../assets/room5.jpeg';
import room1 from '../assets/room3.jpg';
import room2 from '../assets/room4.jpeg';
import room3 from '../assets/room6.jpeg';

const RoomPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-gray-100">
      {/* Hero Image and Room Details */}
      <div className="relative mb-12">
        <img src={room} alt="Room" className="w-full h-80 object-cover rounded-lg shadow-lg" />
        <p className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white text-lg px-4 py-2 rounded">Room Details</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Reservation Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-6 text-[#9d7e54]">Reservation</h1>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold">Check-In</label>
              <input type="date" className="w-full border border-gray-300 p-2 rounded mt-2" />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Check-Out</label>
              <input type="date" className="w-full border border-gray-300 p-2 rounded mt-2" />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Room</label>
              <select className="w-full border border-gray-300 p-2 rounded mt-2">
                <option>Single</option>
                <option>Double</option>
                <option>Suite</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Adults</label>
              <input type="number" className="w-full border border-gray-300 p-2 rounded mt-2" />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Children</label>
              <input type="number" className="w-full border border-gray-300 p-2 rounded mt-2" />
            </div>

          </div>
          <div className="mt-8">
            <h2 className="text-xl font-bold text-[#9d7e54]">Extra Services</h2>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>- Air Conditioner</li>
              <li>- Free Internet</li>
              <li>- LCD Television</li>
            </ul>
          </div>
          <div>
           <h2> Your Price</h2>

          </div>
        </div>

        {/* Room Images and Details */}
        <div className="md:col-span-2 space-y-8">
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <img src={room} alt="Room" className="w-full h-48 object-cover rounded-lg shadow-lg" />
              <div className="grid grid-cols-2 gap-2">
                <img src={room2} alt="Room" className="w-full h-24 object-cover rounded-lg shadow-lg" />
                <img src={room3} alt="Room" className="w-full h-24 object-cover rounded-lg shadow-lg" />
                <img src={room} alt="Room" className="w-full h-24 object-cover rounded-lg shadow-lg" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-800">Hotel Mangalam Room</h1>
            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fuga accusamus, quam itaque error eum similique impedit eveniet debitis. Odio aut fuga repellendus inventore? Repellat veritatis obcaecati voluptas alias, eum velit, porro totam, minima ullam sed dicta. Iusto, quasi consectetur?</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#9d7e54]">Amenities</h2>
            <ul className="list-disc list-inside mt-4 text-gray-700">
              <li>42 Inch flat screen TV</li>
              <li>In-room Safe</li>
              <li>Breakfast</li>
              <li>Complimentary bottled water</li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#9d7e54]">Rules & Regulations</h1>
            <ul className="list-disc list-inside mt-4 text-gray-700">
              <li>No smoking inside the room</li>
              <li>Check-in: After 02:00pm</li>
              <li>Checkout: Before 11:00am</li>
              <li>No Pets</li>
              <li>Identification document is a must for hotel registration.</li>
            </ul>
          </div>

          {/* Review Section */}
          <div>
            <h1 className="text-2xl font-bold text-[#9d7e54]">Add A Review</h1>
            <div className="mt-6 space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold">Your Name*</label>
                <input type="text" className=" w-full lg:w-[50%] border border-gray-300 p-2 rounded mt-2" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">Your Email*</label>
                <input type="email" className="w-full lg:w-[50%] border border-gray-300 p-2 rounded mt-2" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">Message*</label>
                <textarea className="w-full lg:w-[50%] border border-gray-300 p-2 rounded mt-2" rows="4"></textarea>
              </div>
              <button className="bg-[#9d7e54] text-white px-4 py-2 rounded shadow-lg hover:bg-[#8c714a]">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomPage;

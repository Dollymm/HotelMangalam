import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import badrinath from '../assets/badrinath.jpg';

export const AttractionData = [
  {
    name: 'Badrinath',
    category: 'Nearby',
    img: badrinath,
    des: 'A sacred site located in the Chamoli district, known for the famous Badrinath Temple.',
  },
  {
    name: 'Mana',
    category: 'Nearby',
    img: badrinath,
    des: 'The last Indian village before the Tibetan border, known for its natural beauty.',
  },
  {
    name: 'Vasudhara Falls',
    category: 'Chamoli',
    img: badrinath,
    des: 'A majestic waterfall near Mana village, ideal for nature lovers.',
  },
  {
    name: 'Satopanth Tal',
    category: 'Chamoli',
    img: badrinath,
    des: 'A high altitude lake known for its pristine waters and serene environment.',
  },
  {
    name: 'Charan Paduka',
    category: 'Uttarakhand',
    img: badrinath,
    des: 'A rock with footprints believed to be those of Lord Vishnu.',
  },
  {
    name: 'Neelkanth Peak',
    category: 'Uttarakhand',
    img: badrinath,
    des: 'A prominent peak offering stunning views, popular among trekkers.',
  },
];

const Attraction = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in milliseconds
      once: true, // whether animation should happen only once
    });
  }, []);

  const filteredAttractions = selectedCategory === 'All'
    ? AttractionData
    : AttractionData.filter(attraction => attraction.category === selectedCategory);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-96">
        <img src={badrinath} alt="Badrinath" className="w-full h-full object-cover filter brightness-50" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <h1 className="text-white text-3xl lg:text-5xl font-extrabold tracking-wider shadow-lg" data-aos="fade-up">
            Discover <span className="text-[#9d7e54]">Badrinath</span> Attractions
          </h1>
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-screen-xl mx-auto py-16 px-4 text-center" data-aos="fade-up">
        <h2 className="text-5xl font-bold text-gray-800 mb-10">Area Attractions</h2>
        <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Explore the enchanting cultural and natural beauty that Badrinath has to offer. From sacred temples to breathtaking landscapes, these attractions will make your visit truly unforgettable.
        </p>
      </div>

      {/* Filter Options */}
      <div className="flex justify-center space-x-6 mb-16" data-aos="fade-up">
        {['All', 'Nearby', 'Chamoli', 'Uttarakhand'].map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`py-3 px-8 rounded-full font-medium transition duration-300 shadow-md ${selectedCategory === category ? 'bg-[#9d7e54] text-white' : 'bg-white text-gray-800 border border-gray-300 hover:bg-[#9d7e54] hover:text-white'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Attraction List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-screen-xl mx-auto px-4">
        {filteredAttractions.map((attraction, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
          >
            <div className="relative">
              <img src={attraction.img} alt={attraction.name} className="w-full h-60 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 rounded-t-xl"></div>
              <h3 className="absolute bottom-6 left-6 text-2xl font-semibold text-white">
                {attraction.name}
              </h3>
            </div>
            <div className="p-8">
              <p className="text-gray-700 mb-6">{attraction.des}</p>
              <button className="py-3 px-6 border border-black text-black rounded-full font-medium hover:bg-[#9d7e54] transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attraction;

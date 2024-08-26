import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import hotel from '../assets/hotel1.jpeg';
import hotel2 from '../assets/hotel2.jpeg';
import hotel3 from '../assets/hotel3.jpeg';

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="container mx-auto py-16 bg-gray-50">
      {/* Hero Image with Overlay Text */}
      <div className="relative w-full h-96 mb-3 ">
        <img src={hotel} alt="Badrinath" className="w-full h-full object-cover filter brightness-50" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <h1 className="text-white text-3xl lg:text-5xl font-extrabold tracking-wider shadow-lg" data-aos="fade-up">
            <span className="text-[#9d7e54]">About</span> Us
          </h1>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="text-center  mb-16 max-w-4xl mx-auto px-4" data-aos="fade-up">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Everything Right Where You Need It
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart. I
          feel the charm of existence in this spot, surrounded by the beauty of
          nature. I am so happy, dear guest, to share this serenity with you.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          While the lovely valley teems with vapor around me, only a few stray
          gleams steal into the inner sanctuary. It’s a place of peace, comfort,
          and tranquility.
        </p>
      </div>

      {/* Gallery Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 px-4">
        <img
          src={hotel}
          alt="Hotel"
          className="w-full h-56 object-cover rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
          data-aos="fade-right"
        />
        <img
          src={hotel2}
          alt="Hotel"
          className="w-full h-56 object-cover rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
          data-aos="fade-up"
        />
        <img
          src={hotel3}
          alt="Hotel"
          className="w-full h-56 object-cover rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
          data-aos="fade-left"
        />
      </div>

      {/* Call to Action Section */}
      <div className="relative py-16 px-8 bg-black rounded-2xl shadow-2xl text-white text-center" data-aos="zoom-in">
        <h2 className="text-4xl font-bold mb-6">Exclusive Offer</h2>
        <p className="text-xl mb-8">
          Book now and save 20% on your next stay. Enjoy a luxurious retreat at
          Mangalam Hotel and experience the finest in hospitality.
        </p>
        <button className="bg-yellow-500 text-black font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-600 transition-colors duration-300">
          Book Now
        </button>
        <div className="absolute inset-0 bg-cover bg-center rounded-2xl opacity-10" style={{ backgroundImage: `url(${hotel})` }}></div>
      </div>
    </div>
  );
};

export default AboutPage;

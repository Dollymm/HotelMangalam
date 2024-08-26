import React, { useEffect } from 'react';
import { TbArrowRightCircle, TbArrowLeftCircle } from 'react-icons/tb';
import { CgShapeRhombus } from 'react-icons/cg';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Make sure AOS CSS is imported
import review from '../assets/review.jpg'
import review2 from '../assets/review2.jpg'
import review3 from '../assets/review3.png'

const testimonials = [
  {
    name: "vedant Bhatt",
    role: "Business Traveler",
    photo:review,
    feedback: "My stay at Hotel Mangalam was nothing short of exceptional. The staff was incredibly welcoming, the rooms were immaculately clean, and the amenities exceeded my expectations. I highly recommend this hotel for both comfort and leisure stays.",
  },
  {
    name: "Advik sharma",
    role: "Vacationer",
    photo: review2,
    feedback: "Hotel Mangalam provided a perfect retreat during our family vacation. The spacious rooms and beautiful surroundings made our stay memorable. The staff was friendly and attentive, making sure we had everything we needed. We'll definitely return!",
  },
  {
    name: "Aditi ",
    role: "Family",
    photo: review3,
    feedback: 'Our stay at Hotel Mangalam was a truly spiritual experience. The serene environment and peaceful ambiance offered a perfect sanctuary for reflection and relaxation. The location’s tranquility and the attentive service made our visit exceptionally rejuvenating. Ideal for those seeking spiritual solace and a serene escape.',
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="py-16 bg-gray-100">
      {/* Header Section */}
      <div className="flex items-center justify-center mb-8">
        <TbArrowLeftCircle className="text-[#9d7e54] text-2xl" />
        <CgShapeRhombus className="text-[#9d7e54] text-2xl mx-2" />
        <p className="text-lg md:text-xl font-semibold text-gray-800">Testimonials</p>
        <CgShapeRhombus className="text-[#9d7e54] text-2xl mx-2" />
        <TbArrowRightCircle className="text-[#9d7e54] text-2xl" />
      </div>

      {/* Title Section */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Echoes <span className="text-[#9d7e54]">Of <span className="text-gray-800">Brilliance</span></span>
        </h1>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-6">
        {/* <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
          What Our Guests Say
        </h2> */}
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-[#9d7e54]"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

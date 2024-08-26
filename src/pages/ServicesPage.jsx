import React from 'react'
import hotel from '../assets/hotel1.jpeg'
import Facilities from '../component/Facilities'
const ServicesPage = () => {
  return (
    <div>
         <div className="relative w-full h-96">
        <img src={hotel} alt="Badrinath" className="w-full h-full object-cover filter brightness-50" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
          <h1 className="text-white text-3xl lg:text-5xl font-extrabold tracking-wider shadow-lg" data-aos="fade-up">
             <span className="text-[#9d7e54]">Our</span> Services
          </h1>
        </div>
       
      </div>
          <Facilities/>
    </div>
  )
}

export default ServicesPage
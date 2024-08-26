import React from 'react';
import 'aos/dist/aos.css'; // Import AOS animations
import AOS from 'aos';

import heroImage from '../assets/hotel1.jpeg';

const ContactPage = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <main className="mb-20 bg-[#f6f3f4]">
      {/* Hero Section */}
      <div
        className="relative flex items-center justify-center text-center bg-black bg-opacity-50 h-96"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="absolute inset-0 jarallax"
          data-speed="0.2"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -1,
          }}
        />
        <div className="z-10 text-white">
          <small className="block text-lg slide-animated one" data-aos="fade-up">
            Luxury Hotel Experience
          </small>
          <h1 className="text-4xl font-bold slide-animated two" data-aos="fade-up">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Contact Information and Form */}
      <div className="container mx-auto my-16 px-6 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:order-2 bg-white p-8 rounded-lg shadow-lg" data-aos="fade-left">
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <i className="bi bi-geo-alt text-3xl text-gray-600"></i>
                <div>
                  <h4 className="text-xl font-semibold">Address</h4>
                  <p className="text-gray-700">PO Box 97845 Baker St. 567, Los Angeles<br />California - US.</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <i className="bi bi-envelope-paper text-3xl text-gray-600"></i>
                <div>
                  <h4 className="text-xl font-semibold">Email address</h4>
                  <p className="text-gray-700">
                    <a href="mailto:booking@Paradise.com" className="text-blue-600">booking@Paradise.com</a> - <a href="mailto:info@Paradise.com" className="text-blue-600">info@Paradise.com</a>
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <i className="bi bi-telephone text-3xl text-gray-600"></i>
                <div>
                  <h4 className="text-xl font-semibold">Telephone</h4>
                  <p className="text-gray-700">
                    + 61 (2) 8093 3402<br />
                    <small>Monday to Friday 9am - 7pm</small>
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 p-8 rounded-lg " data-aos="fade-right">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <form action="phpmailer/contact_template_email.php" method="post" id="contactform" autoComplete="off">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="name_contact"
                    placeholder="Name"
                    name="name_contact"
                    required
                  />
                  <label htmlFor="name_contact" className="form-label inline-block mb-2 text-gray-700">Name</label>
                </div>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="lastname_contact"
                    placeholder="Last Name"
                    name="lastname_contact"
                    required
                  />
                  <label htmlFor="lastname_contact" className="form-label inline-block mb-2 text-gray-700">Last Name</label>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="email_contact"
                    placeholder="Email"
                    name="email_contact"
                    required
                  />
                  <label htmlFor="email_contact" className="form-label inline-block mb-2 text-gray-700">Email</label>
                </div>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="phone_contact"
                    placeholder="Telephone"
                    name="phone_contact"
                    required
                  />
                  <label htmlFor="phone_contact" className="form-label inline-block mb-2 text-gray-700">Telephone</label>
                </div>
              </div>
              <div className="form-floating mb-4">
                <textarea
                  className="form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="message_contact"
                  name="message_contact"
                  placeholder="Message"
                  rows="4"
                  required
                ></textarea>
                <label htmlFor="message_contact" className="form-label inline-block mb-2 text-gray-700">Message</label>
              </div>
           
              <button
                type="submit"
                className="btn_1 outline lg:w-[20%] py-3 px-6 bg-black text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;

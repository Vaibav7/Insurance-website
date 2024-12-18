import React from 'react';

import { FaUsers, FaShieldAlt, FaRegHandshake } from 'react-icons/fa'; // You can use any icons

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-[#88BDBC] to-[#254E58] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center">
        <h1 className="text-5xl font-semibold mb-12">About Us</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* About Info 1 */}
          <div className="bg-white text-[#254E58] p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 ease-in-out hover:scale-105">
            <div className="flex justify-center mb-6">
              <img
                src="../src/assets/focus.png"
                alt="About Image 1"
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">Customer Focused</h3>
            <p className="text-gray-600 mb-4">
              We put our clients first, tailoring our insurance solutions to meet your unique needs and priorities.
            </p>
            <div className="flex justify-center text-yellow-400">
              <FaUsers size={24} />
            </div>
          </div>

          {/* About Info 2 */}
          <div className="bg-white text-[#254E58] p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 ease-in-out hover:scale-105">
            <div className="flex justify-center mb-6">
              <img
                src="../src/assets/plans.png"
                alt="About Image 2"
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">Comprehensive Plans</h3>
            <p className="text-gray-1000 mb-4 ">
              Our plans are designed to cover all aspects of life, ensuring that you're protected wherever you go.
            </p>
            <div className="flex justify-center text-yellow-400">
              <FaShieldAlt size={24} />
            </div>
          </div>

          {/* About Info 3 */}
          <div className="bg-white text-[#254E58] p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 ease-in-out hover:scale-105">
            <div className="flex justify-center mb-6">
              <img
                src="../src/assets/partner.png"
                alt="About Image 3"
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">Trustworthy Partners</h3>
            <p className="text-gray-600 mb-4">
              We partner with some of the most trusted names in the industry to bring you the best coverage options.
            </p>
            <div className="flex justify-center text-yellow-400">
              <FaRegHandshake size={24} />
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-center">
          <p className="text-lg text-gray-200 mb-4">
            Our mission is to provide you with reliable, customized insurance solutions, so you can enjoy peace of mind.
          </p>
          <button className="bg-[#254E58] text-white py-2 px-6 rounded-md hover:bg-[#88BDBC] transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

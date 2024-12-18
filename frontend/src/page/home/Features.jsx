import React from 'react';
import { FaShieldAlt, FaHandHoldingUsd, FaUsers, FaRegHandshake } from 'react-icons/fa';
import { motion } from 'framer-motion'; // For animation

export default function Features() {
  return (
    <section className="py-20 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center">
        <h2 className="text-3xl font-semibold text-[#254E58] mb-12">
          Our Insurance Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Feature 1 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-2xl hover:shadow-xl transform hover:scale-105 transition duration-300 hover:bg-[#88BDBC] hover:text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-4xl text-[#254E58] mb-4 hover:text-white">
              <FaShieldAlt />
            </div>
            <h3 className="text-xl font-bold text-[#254E58] mb-2 hover:text-white">Comprehensive Coverage</h3>
            <p className="text-gray-600 hover:text-white">
              We offer a range of insurance plans to protect you, your family, and your assets.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-2xl hover:shadow-xl transform hover:scale-105 transition duration-300 hover:bg-[#88BDBC] hover:text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-4xl text-[#254E58] mb-4 hover:text-white">
              <FaHandHoldingUsd />
            </div>
            <h3 className="text-xl font-bold text-[#254E58] mb-2 hover:text-white">Affordable Premiums</h3>
            <p className="text-gray-600 hover:text-white">
              Our insurance policies come with affordable premiums to fit every budget.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            className="bg-[#ffffff] p-6 rounded-lg shadow-2xl hover:shadow-xl transform hover:scale-105 transition duration-300 hover:bg-[#88BDBC] hover:text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-4xl text-[#254E58] mb-4 hover:text-white">
              <FaUsers />
            </div>
            <h3 className="text-xl font-bold text-[#254E58] mb-2 hover:text-white">Personalized Service</h3>
            <p className="text-gray-600 hover:text-white">
              We offer personalized consultation to tailor policies that best fit your needs.
            </p>
          </motion.div>

          {/* Feature 4 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-2xl hover:shadow-xl transform hover:scale-105 transition duration-300 hover:bg-[#88BDBC] hover:text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="text-4xl text-[#254E58] mb-4 hover:text-white">
              <FaRegHandshake />
            </div>
            <h3 className="text-xl font-bold text-[#254E58] mb-2 hover:text-white">Trustworthy Partners</h3>
            <p className="text-gray-600 hover:text-white">
              We work with trusted partners to provide you with the most reliable insurance solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { FaRegHandshake, FaShieldAlt, FaUsers, FaHandsHelping } from 'react-icons/fa';

export default function AboutUs() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#88BDBC] to-[#254E58] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl mb-12"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Discover our story, values, and commitment to providing the best insurance coverage for you and your family.
          </motion.p>
          <motion.button
            className="bg-white text-[#254E58] py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:bg-[#254E58] hover:text-white transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Learn More
          </motion.button>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 px-6 sm:px-12 text-center bg-gray-100">
        <motion.h2
          className="text-3xl font-semibold text-[#254E58] mb-8"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Mission
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 mb-12"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Our mission is to provide comprehensive, affordable insurance that offers peace of mind and security for individuals, families, and businesses alike. We believe in building long-lasting relationships based on trust, reliability, and a personalized approach to insurance.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Mission Icon 1 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-4xl text-[#254E58] mb-4">
              <FaShieldAlt />
            </div>
            <h3 className="text-xl font-semibold text-[#254E58] mb-2">Comprehensive Protection</h3>
            <p className="text-gray-600">
              We offer a wide range of insurance services to ensure your life and assets are fully protected.
            </p>
          </motion.div>

          {/* Mission Icon 2 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-4xl text-[#254E58] mb-4">
              <FaUsers />
            </div>
            <h3 className="text-xl font-semibold text-[#254E58] mb-2">Customer-Centric Approach</h3>
            <p className="text-gray-600">
              Our clients are our priority. We tailor insurance plans to meet your unique needs and preferences.
            </p>
          </motion.div>

          {/* Mission Icon 3 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-4xl text-[#254E58] mb-4">
              <FaHandsHelping />
            </div>
            <h3 className="text-xl font-semibold text-[#254E58] mb-2">Support When You Need It</h3>
            <p className="text-gray-600">
              Our dedicated support team is available around the clock to assist with any questions or claims.
            </p>
          </motion.div>

          {/* Mission Icon 4 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="text-4xl text-[#254E58] mb-4">
              <FaRegHandshake />
            </div>
            <h3 className="text-xl font-semibold text-[#254E58] mb-2">Trusted Partnerships</h3>
            <p className="text-gray-600">
              We work with trusted industry leaders to offer the best insurance solutions available.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-6 sm:px-12 text-center bg-white">
        <motion.h2
          className="text-3xl font-semibold text-[#254E58] mb-8"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Values
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 mb-12"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Our values guide us in every aspect of our business, from the products we offer to the way we treat our clients.
        </motion.p>
        <div className="flex justify-center space-x-10">
          <motion.div
            className="p-6 bg-[#88BDBC] text-white rounded-full shadow-lg transform hover:scale-110 transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-bold">Integrity</h3>
          </motion.div>
          <motion.div
            className="p-6 bg-[#88BDBC] text-white rounded-full shadow-lg transform hover:scale-110 transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, delay: 0.2 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-bold">Transparency</h3>
          </motion.div>
          <motion.div
            className="p-6 bg-[#88BDBC] text-white rounded-full shadow-lg transform hover:scale-110 transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, delay: 0.4 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-bold">Trust</h3>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#254E58] text-white text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company. All Rights Reserved. | Designed with ❤️.
        </p>
      </footer>
    </div>
  );
}

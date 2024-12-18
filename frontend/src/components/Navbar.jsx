
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import React Icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and Company Name */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src="/src/assets/logo.png" alt="Logo" className="h-12 w-auto mr-2" />
              <span className="text-2xl font-bold text-[#254E58]">InsuranceHub</span> {/* Company Name */}
            </Link>
          </div>

          {/* Toggle Button for Mobile */}
          <div className="flex sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {/* React Icons for Menu */}
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>

          {/* Navigation Links */}
          <div className={`sm:flex items-center ${isOpen ? "block" : "hidden"}`}>
            <div className="flex flex-col sm:flex-row sm:space-x-8 mt-40 sm:mt-0 bg-white sm:">
              <Link to="/" className="text-gray-700 hover:text-[#ff2a2a] px-3 py-2 rounded-md text-lg font-medium">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-[#ff2a2a] px-3 py-2 rounded-md text-lg font-medium">
                About Us
              </Link>
              <Link to="/products" className="text-gray-700 hover:text-[#ff2a2a] px-3 py-2 rounded-md text-lg font-medium">
                Insurance Products
              </Link>
              <Link to="/support" className="text-gray-700 hover:text-[#ff2a2a] px-3 py-2 rounded-md text-lg font-medium">
                Support
              </Link>
              <Link to="/signin" className="text-gray-700 hover:text-[#ff2a2a] px-3 py-2 rounded-md text-lg font-medium">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

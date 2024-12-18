import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // Social media icons

export default function Footer() {
  return (
    <footer className="bg-[#254E58] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center">
        {/* Footer Content */}
        <div className="mb-8">
          <p className="text-lg">
            Providing trusted insurance solutions for over 20 years. We're here to help you protect what matters most.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#88BDBC]">
            <FaFacebookF size={24} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#88BDBC]">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#88BDBC]">
            <FaLinkedinIn size={24} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#88BDBC]">
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul>
              <li><a href="#about" className="hover:text-[#88BDBC]">About Us</a></li>
              <li><a href="#services" className="hover:text-[#88BDBC]">Services</a></li>
              <li><a href="#contact" className="hover:text-[#88BDBC]">Contact</a></li>
              <li><a href="#blog" className="hover:text-[#88BDBC]">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul>
              <li><a href="#faq" className="hover:text-[#88BDBC]">FAQ</a></li>
              <li><a href="#help" className="hover:text-[#88BDBC]">Help Center</a></li>
              <li><a href="#terms" className="hover:text-[#88BDBC]">Terms & Conditions</a></li>
              <li><a href="#privacy" className="hover:text-[#88BDBC]">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul>
              <li><a href="#quote" className="hover:text-[#88BDBC]">Get a Quote</a></li>
              <li><a href="#claims" className="hover:text-[#88BDBC]">Claims</a></li>
              <li><a href="#careers" className="hover:text-[#88BDBC]">Careers</a></li>
              <li><a href="#newsletter" className="hover:text-[#88BDBC]">Newsletter</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul>
              <li><a href="mailto:info@company.com" className="hover:text-[#88BDBC]">info@company.com</a></li>
              <li><a href="tel:+1234567890" className="hover:text-[#88BDBC]">+1 (234) 567-890</a></li>
              <li><a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#88BDBC]">Our Office</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white pt-6 mt-6">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Insurance Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

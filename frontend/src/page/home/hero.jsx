import React from 'react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-[#254E58] to-[#112D32] min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row items-center">
        
        {/* Text Section */}
        <div className="md:w-1/2 text-white text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Protect Your Future with Confidence
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Discover comprehensive insurance plans tailored to your needs. Secure your tomorrow, today.
          </p>
          <button className="bg-[#88BDBC] hover:bg-[#6E6658] text-white font-semibold px-6 py-3 rounded-lg transition duration-300">
            Get a Quote
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/src/assets/h.png"
            alt="Insurance Illustration"
            className="max-w-full h-auto rounded-lg "
          />
        </div>

      </div>
    </div>
  );
}

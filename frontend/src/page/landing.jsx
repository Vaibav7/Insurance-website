import React from 'react';
import Hero from './home/hero';
import Features from './home/Features';
import About from './home/about';
import Testimonials from './home/testimonal';
import About from './home/about';

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Features Section */}
        <Features />

        {/* About Us Section */}
        <About />

        {/* Testimonials Section */}
        <Testimonials />
      </main>

    </div>
  );
}

export default LandingPage;

import React from 'react';

export default function NewsTicker() {
  return (
    <div className="bg-[#ffffff] text-#254E58 py-4">
      <div className="max-w-7xl mx-auto px-1 sm:px-1">
        <div className="overflow-hidden whitespace-nowrap h-18 flex items-center justify-center mb-0">
          <div className="inline-block animate-marquee">
            <p className="text-xl font-semibold">
              Breaking News: Our new insurance plans are now live! Get the best coverage for your needs today. | 
              Stay safe with our comprehensive health plans. | Join our customer family and enjoy exclusive benefits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

const ParallaxBanner = () => {
  return (
    <div className="relative h-96 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/api/placeholder/1920/600"
          alt="Technology Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0783B9]/80">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-center text-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Transforming Businesses Through Technology
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Leading IT solutions provider in the UAE and across the Middle East
              </p>
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ParallaxBanner;
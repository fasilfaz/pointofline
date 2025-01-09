import React from 'react';
import { IoCheckmarkCircle } from "react-icons/io5";

const AboutPage = () => {
  const facts = [
    { title: "Top Security", description: "We help businesses to keep any physical information with services that are convenient and secure." },
    { title: "Quality Service", description: "We often assess the service quality provided to our customers in order to improve our services." },
    { title: "Timely Delivery", description: "We have fully adopted the very basic concept of timely and quality service and ensure the timely delivery." },
    { title: "Expert Analysis", description: "Our analysis examines its purpose, provisions, and relevant case law and offers advice for LLC." },
    { title: "Best Consultancy", description: "We have well defined track of procedural precision and ethical standards in our Consulting services." },
    { title: "24/7 Live Support", description: "It is important for us always to be available with efficient and prompt customer service" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section with new design */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0783B9] opacity-90"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <p className="text-lg text-white/80 mb-4">Welcome to</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About Point of Line
            </h1>
            <div className="w-20 h-1 bg-white mb-6"></div>
            <p className="text-xl text-white/90">
              Leading software development company providing the very best in computer technology
            </p>
          </div>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <h2 className="text-3xl font-bold text-gray-900 relative">
                Who We Are
                <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#0783B9]"></div>
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              Point of Line is a software development company, providing the very best in computer technology by developing products and services that are user friendly, powerful and reliable. As a leading software developer in India and Middle East, Point of Line provides "Perfect ERP Solutions" to customers around the world.
            </p>
            <p className="text-lg text-gray-600">
              Since 2004, the company's solutions have helped define the organization's financial and operational standards, delivering precision, reliability and efficiency to entire business process.
            </p>
          </div>
          <div className="relative h-64 lg:h-full rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/api/placeholder/600/400"
              alt="About Point of Line"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Facts Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 relative inline-block">
              Some Facts About Us
              <div className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-[#0783B9]"></div>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facts.map((fact, index) => (
              <div 
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <IoCheckmarkCircle className="text-[#0783B9] text-2xl flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {fact.title}
                    </h3>
                    <p className="text-gray-600">
                      {fact.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 relative inline-block">
              Our Global Presence
              <div className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-[#0783B9]"></div>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* UAE Office */}
            <div className="p-8 bg-white rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-[#0783B9] mb-4">Point of Line - UAE</h3>
              <p className="text-gray-600">
                Flat 801, Sahel Tower-1, Opp Ahli Club Accommodation, Al Nahda,
                P.O.BOX.125625, Dubai, UAE
              </p>
              <p className="text-gray-600 mt-2 font-semibold">
                Mob: +971 4 2506060
              </p>
            </div>
            
            {/* Saudi Arabia Office */}
            <div className="p-8 bg-white rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-[#0783B9] mb-4">Point of Line - Saudi Arabia</h3>
              <p className="text-gray-600">
                Point Of Line Information Technology Company,
                Baladiyyah Street, Jeddah, Saudi Arabia
              </p>
              <p className="text-gray-600 mt-2 font-semibold">
                +966 565732288
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
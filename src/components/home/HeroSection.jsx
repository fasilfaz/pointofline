import Button from '../common/Button';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0783B9] to-[#0783B9] opacity-90"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 mt-6">
            Point of Line Information Technology
          </h1>
          <p className="text-xl md:text-2xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
            Your Trusted Partner in Advanced IT Solutions
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline">Our Services</Button>
            <Button variant="primary">Contact Us</Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,144C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
import { FaNetworkWired, FaDatabase, FaShieldAlt, FaVideo, FaUsers, FaLaptop } from "react-icons/fa";


const ServicesSection = () => {
  const services = [
    {
      icon: <FaNetworkWired size={32} />,
      title: "Fiber Cabling",
      description: "Enterprise-grade fiber optic solutions ensuring lightning-fast connectivity",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaDatabase size={32} />,
      title: "Data Centre",
      description: "State-of-the-art data center solutions with maximum security",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <FaShieldAlt size={32} />,
      title: "Access Control",
      description: "Advanced security systems for complete peace of mind",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <FaVideo size={32} />,
      title: "Video Wall",
      description: "Immersive visual solutions for command centers and presentations",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <FaUsers size={32} />,
      title: "Meeting Rooms",
      description: "Smart meeting room solutions for modern collaboration",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <FaLaptop size={32} />,
      title: "IT Hardware",
      description: "Premium IT equipment and comprehensive support services",
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions tailored to meet the demands of modern enterprises
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="opacity-0 translate-y-4 animate-fade-in-up group relative"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="h-full bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="p-8">
                  <div className="text-blue-600 mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
                
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(1rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
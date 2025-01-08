import { motion } from 'framer-motion';
import { Network, Database, Shield, Video, Users, Laptop } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Network size={32} />,
      title: "Fiber Cabling",
      description: "Enterprise-grade fiber optic solutions ensuring lightning-fast connectivity",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Database size={32} />,
      title: "Data Centre",
      description: "State-of-the-art data center solutions with maximum security",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <Shield size={32} />,
      title: "Access Control",
      description: "Advanced security systems for complete peace of mind",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Video size={32} />,
      title: "Video Wall",
      description: "Immersive visual solutions for command centers and presentations",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Users size={32} />,
      title: "Meeting Rooms",
      description: "Smart meeting room solutions for modern collaboration",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Laptop size={32} />,
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
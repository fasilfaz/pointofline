import { useState } from 'react';
import { HiHome, HiServer, HiInformationCircle, HiCollection, HiMail } from "react-icons/hi";
import { HiXMark, HiBars3 } from "react-icons/hi2";

const Navigation = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#', icon: <HiHome className="inline-block mr-2" size={20} /> },
    { label: 'Services', href: '#services', icon: <HiServer className="inline-block mr-2" size={20} /> },
    { label: 'About', href: '#about', icon: <HiInformationCircle className="inline-block mr-2" size={20} /> },
    { label: 'Projects', href: '#projects', icon: <HiCollection className="inline-block mr-2" size={20} /> },
    { label: 'Contact', href: '#contact', icon: <HiMail className="inline-block mr-2" size={20} /> }
  ];

  return (
    <nav className="flex items-center">
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`
              ${isScrolled ? 'text-gray-700' : 'text-white'} 
              hover:text-blue-500 transition-colors duration-200
              font-medium flex items-center
            `}
          >
            {item.label}
          </a>
        ))}
        <button className={`
          px-4 py-2 rounded-lg
          ${isScrolled 
            ? 'bg-blue-900 text-white' 
            : 'bg-white text-blue-900'} 
          hover:opacity-90 transition-all duration-200
          font-medium flex items-center
        `}>
          Get Started
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`p-2 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <HiXMark size={24} /> : <HiBars3 size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg mt-2 py-4 md:hidden">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-6 py-2 text-gray-700 hover:bg-gray-50 flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.icon}
              {item.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <button className="w-full px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
// src/components/layout/Navigation.jsx
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
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
              font-medium
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
          font-medium
        `}>
          Get Started
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`p-2 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg mt-2 py-4 md:hidden">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-6 py-2 text-gray-700 hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <button className="w-full px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
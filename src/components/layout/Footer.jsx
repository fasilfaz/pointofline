// src/components/layout/Footer.jsx
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ChevronRight,
  Globe
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Point of Line IT</h3>
            <p className="text-gray-300 mb-6">
              Leading provider of innovative IT solutions across the Middle East, 
              delivering excellence in technology services since 2015.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook size={20} />} />
              <SocialLink href="#" icon={<Twitter size={20} />} />
              <SocialLink href="#" icon={<Linkedin size={20} />} />
              <SocialLink href="#" icon={<Instagram size={20} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                'About Us',
                'Our Services',
                'Case Studies',
                'Latest News',
                'Careers',
                'Contact Us'
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-white flex items-center group">
                    <ChevronRight size={16} className="mr-2 transition-transform transform group-hover:translate-x-1" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Fiber Cabling',
                'Data Centre Solutions',
                'Access Control',
                'Video Wall Systems',
                'IT Hardware',
                'Network Security'
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-300 hover:text-white flex items-center group">
                    <ChevronRight size={16} className="mr-2 transition-transform transform group-hover:translate-x-1" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+97165540005" className="text-gray-300 hover:text-white flex items-center">
                  <Phone size={20} className="mr-3 flex-shrink-0" />
                  <span>+971 6 554 0005</span>
                </a>
              </li>
              <li>
                <a href="mailto:pointofline@ksa.com" className="text-gray-300 hover:text-white flex items-center">
                  <Mail size={20} className="mr-3 flex-shrink-0" />
                  <span>pointofline@ksa.com</span>
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Sharjah - UAE<br />
                  P.O. Box: 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 pt-8 border-t border-blue-800">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-300 mb-6">
              Stay updated with our latest news and special offers
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-blue-800 border border-blue-700 focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © {currentYear} Point of Line IT. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-300 hover:text-white text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-sm">
                Cookie Policy
              </a>
              <button className="flex items-center text-gray-300 hover:text-white text-sm">
                <Globe size={16} className="mr-2" />
                العربية
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Social Link Component
const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors"
  >
    {icon}
  </a>
);

export default Footer;
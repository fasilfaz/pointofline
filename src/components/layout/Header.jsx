import { useState, useEffect } from 'react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import Navigation from './Navigation';

const Header = () => {
  const scrollPosition = useScrollPosition();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(scrollPosition > 50);
  }, [scrollPosition]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className={`text-2xl font-bold ${
              isScrolled ? 'text-[#0783B9]' : 'text-white'
            }`}>
              Point of Line IT
            </h1>
          </div>
          <Navigation isScrolled={isScrolled} />
        </div>
      </div>
    </header>
  );
};

export default Header;
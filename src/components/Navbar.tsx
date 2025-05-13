
import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Phone, ChevronDown } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="block">
              <h1 className={`font-corinthia text-2xl md:text-3xl font-semibold ${isScrolled ? 'text-corinthia-black' : 'text-white'}`}>CORINTHIA LONDON</h1>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {['Rooms & Suites', 'Dining', 'Spa & Wellness', 'Meetings & Events', 'Offers', 'Gallery'].map((item) => (
              <div key={item} className="relative group">
                <a 
                  href="#" 
                  className={`flex items-center text-sm font-medium ${
                    isScrolled ? 'text-corinthia-darkgray hover:text-corinthia-gold' : 'text-white hover:text-corinthia-gold'
                  } transition-colors`}
                >
                  {item}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </a>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-2">
                    <a href="#" className="block px-4 py-2 text-sm text-corinthia-darkgray hover:bg-corinthia-cream hover:text-corinthia-gold">Option 1</a>
                    <a href="#" className="block px-4 py-2 text-sm text-corinthia-darkgray hover:bg-corinthia-cream hover:text-corinthia-gold">Option 2</a>
                    <a href="#" className="block px-4 py-2 text-sm text-corinthia-darkgray hover:bg-corinthia-cream hover:text-corinthia-gold">Option 3</a>
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className={`p-2 rounded-full ${isScrolled ? 'text-corinthia-darkgray hover:text-corinthia-gold' : 'text-white hover:text-corinthia-gold'}`}>
              <Search className="h-5 w-5" />
            </button>
            <Button>Book Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={toggleMobileMenu}
              className={`p-2 ${isScrolled ? 'text-corinthia-darkgray' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-2">
            <nav className="space-y-1">
              {['Rooms & Suites', 'Dining', 'Spa & Wellness', 'Meetings & Events', 'Offers', 'Gallery'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block py-2 px-3 text-corinthia-darkgray hover:bg-corinthia-cream hover:text-corinthia-gold rounded-md"
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 pb-2">
                <Button className="w-full mb-2">Book Now</Button>
                <div className="flex justify-center mt-4 space-x-4">
                  <a href="tel:+442079308181" className="flex items-center text-corinthia-darkgray hover:text-corinthia-gold">
                    <Phone className="h-4 w-4 mr-2" />
                    <span className="text-sm">+44 20 7930 8181</span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;


import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-corinthia-black text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Contact */}
          <div>
            <h2 className="font-corinthia text-2xl mb-6">CORINTHIA LONDON</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-corinthia-gold flex-shrink-0 mt-1" />
                <span className="text-sm">Whitehall Place, Westminster, London, SW1A 2BD, United Kingdom</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-corinthia-gold" />
                <span className="text-sm">+44 20 7930 8181</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-corinthia-gold" />
                <span className="text-sm">london@corinthia.com</span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Rooms & Suites', 'Restaurants & Bars', 'Spa & Wellness', 'Meetings & Events', 'Special Offers', 'Gallery', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-corinthia-gold transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Destinations */}
          <div>
            <h3 className="text-lg font-medium mb-6">Destinations</h3>
            <ul className="space-y-3">
              {['London', 'Budapest', 'Lisbon', 'Prague', 'St. Petersburg', 'Malta'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-corinthia-gold transition-colors">Corinthia {item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-medium mb-6">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe to receive special offers and updates</p>
            <form className="mb-6">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-white/10 text-white text-sm px-4 py-2 flex-grow focus:outline-none focus:ring-1 focus:ring-corinthia-gold"
                />
                <button 
                  type="submit" 
                  className="bg-corinthia-gold hover:bg-corinthia-darkgold text-white px-4 text-sm transition-colors"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-corinthia-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-corinthia-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-corinthia-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-corinthia-gold transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Corinthia Hotels. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {['Privacy Policy', 'Terms & Conditions', 'Cookie Policy', 'Sitemap'].map((item) => (
              <a key={item} href="#" className="text-xs text-gray-400 hover:text-corinthia-gold transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

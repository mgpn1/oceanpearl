
import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center animate-fade-in"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')"
        }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative h-full flex items-center justify-center text-center text-white px-4">
        <div className="max-w-4xl animate-fade-in">
          <h1 className="font-corinthia text-5xl md:text-6xl lg:text-7xl font-light mb-6">Experience Timeless Luxury</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Where contemporary elegance meets traditional luxury in the heart of London</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-white/90 hover:bg-white text-corinthia-darkgray px-6 py-3 uppercase tracking-wider text-sm font-medium transition-colors">
              Book Your Stay
            </button>
            <button className="bg-corinthia-gold/90 hover:bg-corinthia-gold text-white px-6 py-3 uppercase tracking-wider text-sm font-medium transition-colors">
              Explore Hotel
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <button 
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white opacity-80 hover:opacity-100 transition-opacity animate-bounce"
      >
        <span className="text-xs uppercase tracking-wider mb-2">Discover</span>
        <ChevronDown className="h-6 w-6" />
      </button>
    </div>
  );
};

export default HeroSection;

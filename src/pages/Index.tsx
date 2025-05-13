
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import RoomSection from '../components/RoomSection';
import AmenitiesSection from '../components/AmenitiesSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <RoomSection />
        <AmenitiesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

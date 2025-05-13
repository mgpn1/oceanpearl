
import React from 'react';
import { Utensils, Dumbbell, Wifi, Coffee, Moon, Car } from 'lucide-react';

const amenities = [
  {
    id: 1,
    title: 'Fine Dining',
    description: 'Experience culinary excellence at our award-winning restaurants.',
    icon: <Utensils className="h-8 w-8 text-corinthia-gold" />
  },
  {
    id: 2,
    title: 'Spa & Fitness',
    description: 'Relax and rejuvenate at our world-class spa and fitness center.',
    icon: <Dumbbell className="h-8 w-8 text-corinthia-gold" />
  },
  {
    id: 3,
    title: 'Complimentary Wi-Fi',
    description: 'Stay connected with high-speed internet throughout your stay.',
    icon: <Wifi className="h-8 w-8 text-corinthia-gold" />
  },
  {
    id: 4,
    title: 'Room Service',
    description: '24-hour room service offering a wide range of culinary delights.',
    icon: <Coffee className="h-8 w-8 text-corinthia-gold" />
  },
  {
    id: 5,
    title: 'Turndown Service',
    description: 'Enjoy our signature evening turndown service for a peaceful night.',
    icon: <Moon className="h-8 w-8 text-corinthia-gold" />
  },
  {
    id: 6,
    title: 'Valet Parking',
    description: 'Valet parking service available for your convenience.',
    icon: <Car className="h-8 w-8 text-corinthia-gold" />
  }
];

const AmenitiesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-corinthia text-4xl md:text-5xl mb-4">Services & Amenities</h2>
          <div className="w-20 h-0.5 bg-corinthia-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-corinthia-darkgray">Experience unparalleled luxury with our comprehensive range of services and amenities tailored to exceed your expectations.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity) => (
            <div key={amenity.id} className="p-6 border border-corinthia-lightgray bg-white amenity-card">
              <div className="mb-4">
                {amenity.icon}
              </div>
              <h3 className="font-corinthia text-2xl mb-2">{amenity.title}</h3>
              <p className="text-sm text-corinthia-darkgray">{amenity.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative h-96 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                alt="Luxury spa" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-6 lg:p-12">
              <h3 className="font-corinthia text-3xl md:text-4xl mb-4">The ESPA Life at Corinthia</h3>
              <div className="w-20 h-0.5 bg-corinthia-gold mb-6"></div>
              <p className="mb-6 text-corinthia-darkgray">
                Spread over four floors, our award-winning spa offers an array of innovative treatments, therapies and fitness services to nurture your well-being.
              </p>
              <p className="mb-8 text-corinthia-darkgray">
                From holistic wellness to beauty treatments, our expert practitioners create bespoke experiences tailored to your individual needs.
              </p>
              <button className="self-start uppercase tracking-wider text-sm font-medium text-corinthia-gold border-b border-corinthia-gold pb-1 hover:text-corinthia-darkgold hover:border-corinthia-darkgold transition-colors">
                Discover More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;

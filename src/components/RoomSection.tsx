
import React from 'react';
import Button from './Button';

const rooms = [
  {
    id: 1,
    name: 'Deluxe King Room',
    description: 'Discover timeless elegance in our spacious Deluxe King Rooms, offering city views and luxurious amenities.',
    image: 'https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    price: 'From £650 per night'
  },
  {
    id: 2,
    name: 'Executive Suite',
    description: 'Our Executive Suites provide separate living and sleeping areas with bespoke furnishings and marble bathrooms.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    price: 'From £950 per night'
  },
  {
    id: 3,
    name: 'Penthouse Suite',
    description: 'Experience ultimate luxury in our Penthouse Suite with panoramic London views, private terrace and personalized service.',
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    price: 'From £2,500 per night'
  }
];

const RoomSection = () => {
  return (
    <section className="py-16 md:py-24 bg-corinthia-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-corinthia text-4xl md:text-5xl mb-4">Rooms & Suites</h2>
          <div className="w-20 h-0.5 bg-corinthia-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-corinthia-darkgray">Contemporary elegance meets traditional luxury in our beautifully appointed rooms and suites, offering comfort and sophistication in the heart of London.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white shadow-md overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-corinthia text-2xl mb-2">{room.name}</h3>
                <p className="text-sm text-corinthia-darkgray mb-4">{room.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-corinthia-gold font-medium">{room.price}</span>
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="primary" size="lg" className="px-10">View All Accommodations</Button>
        </div>
      </div>
    </section>
  );
};

export default RoomSection;

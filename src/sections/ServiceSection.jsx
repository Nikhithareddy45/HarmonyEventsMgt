import React from 'react';
import ServicesCard from '../components/ServicesCard';
import '../styles/ServicesCard.css';
import events from './../assets/events.png';
import guests from './../assets/guests.png';
import location from './../assets/location.png';
import music from  './../assets/music.png';
import photo from './../assets/photo.png';
import catering from './../assets/catering.png';

import eventplanning from '../assets/Event-planning.png'
import guestMgmt from '../assets/welcome.jpg'
import venue from '../assets/venue-selection.jpg';
import photography from '../assets/photography.jpg';
import cateringImg from '../assets/catering-bigimage.jpg';
import Entertainment from '../assets/event-entertainment.jpg';
function Services() {
    const servicesData = [
  {
    img: eventplanning,
    icon: events,
    title: 'Event Planning',
    desp: 'Complete event planning services from concept to execution.',
  },
  {
    img: guestMgmt,
    icon: guests,
    title: 'Guest Management',
    desp: 'Efficient guest list management and RSVP tracking.',
  },
  {
    img: venue,
    icon: location,
    title: 'Venue Selection',
    desp: 'Premium venues across India for your perfect celebration',
  },
  {
    img:photography,
    icon: photo,
    title: 'Photography & Videography',
    desp: 'Capture every moment with our professional photography and videography services.',
  },
  {
    img:Entertainment,
    icon: music,
    title: 'Entertainment',
    desp: 'Live music, DJs, and entertainment options to keep your guests engaged.',
  },
  {
    img: cateringImg,
    icon:catering,
    title: 'Catering',
    desp: 'Delicious catering services with a variety of cuisines to choose from.',
  }
];
  return (
    <div className="services">
      {servicesData.map((service, index) => (
        <ServicesCard
          key={index}
          img={service.img}
          icon={service.icon}
          title={service.title}
          desp={service.desp}
        />
      ))}
    </div>
  );
}

export default Services;
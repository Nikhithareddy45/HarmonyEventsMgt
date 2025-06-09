import React from 'react';
import ServiceDetailCard from '../components/ServiceDetailCard';
import serviceImage from '../assets/pre-wedding.jpg';
import corporateGalas from '../assets/Wedding-ceremony.jpeg';
import productlaunches from '../assets/Reception-image.jpeg';


function CorporateSection() {
    const ServiceDetails =[
    {
      img: serviceImage,
      head: "Pre-Wedding Ceremonies",
      para: "Mehendi, Sangeet, Haldi celebrations",
      detail1: "Traditional Mehendi Artists",
      detail2: "Live Music & DJ",
      detail3: "Floral Decorations",
      detail4: "Photography"
    },
    {
      img: corporateGalas,
      head: "Wedding Ceremony",
      para: "Sacred rituals with modern elegance",
      detail1: "Mandap Decoration",
      detail2: "Pandit Services",
      detail3: "Fire Arrangements",
      detail4: "Guest Seating"
    },
    {
      img: productlaunches,
      head: "Reception & Party",
      para: "Grand celebration with family & friends",
      detail1: "Venue Decoration",
      detail2: "Catering Services",
      detail3: "Entertainment",
      detail4: "Photography & Videography"
    }
]
  return (
    <>
      <div className="corporate-services-flex">
        {ServiceDetails.map((service, index) => (
          <ServiceDetailCard
            key={index}
            img={service.img}
            head={service.head}
            para={service.para}
            detail1={service.detail1}
            detail2={service.detail2}
            detail3={service.detail3}
            detail4={service.detail4}
          />
        ))}
      </div>
    </>
  );
}

export default CorporateSection;


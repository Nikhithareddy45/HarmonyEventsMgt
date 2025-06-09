import React from 'react';
import ServiceDetailCard from '../components/ServiceDetailCard';
import serviceImage from '../assets/corporate-events.jpg';
import corporateGalas from '../assets/corporate-galas.jpg';
import productlaunches from '../assets/product-launches.jpg';

function CorporateSection() {
    const ServiceDetails =[
    {
      img: serviceImage,
      head: "Conferences & Services",
      para: "Professional events with cutting-edge technology",
      detail1: "AV Equipment",
      detail2: "Stage Setup",
      detail3: "Registration Desk",
      detail4: "Networking Areas"
    },
    {
      img: corporateGalas,
      head: "Corporate Galas",
      para: "Tailored solutions for business gatherings",
      detail1: "Venue Selection",
      detail2: "Catering Services",
      detail3: "Event Coordination",
      detail4: "Post-Event Analysis"
    },
    {
      img: productlaunches,
      head: "Product Launches",
      para: "Innovative launches that make an impact",
      detail1: "Creative Concepts",
      detail2: "Media Coverage",
      detail3: "Audience Engagement",
      detail4: "Feedback Collection"
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


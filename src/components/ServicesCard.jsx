import React from 'react';
import '../styles/ServicesCard.css';

function ServicesCard({ img, icon, title, desp }) {
  return (
    <div className="services-card">
      <img className="services-card-img" src={img} alt="Service" />
      <div className="service-icon-flex">
        <img className="services-card-icon" src={icon} alt="Icon" />
      <h3 className="services-card-h1 font1">{title}</h3>
      </div>
      <p className="font2">{desp}</p>
    </div>
  );
}

export default ServicesCard;
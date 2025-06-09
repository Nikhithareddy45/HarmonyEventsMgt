import React from 'react';
import { GoTrophy } from 'react-icons/go';
import '../styles/ServiceDetailCard.css'; 
function ServiceDetailCard({ img, head, para, detail1, detail2, detail3, detail4 }) {
   
  return (

    <div className="service-detail-card">
      <img src={img} className='service-detail-img'alt="Service" />
      <div className="service-detail-card-content">
        <h2 className="service-detail-card-title font1">{head}</h2>
        <p className="font2">{para}</p>
      </div>
      <div className="service-list">
        <div className="service-list-detail">
          <GoTrophy className="trophy-icon" /><span>{detail1}</span>
        </div>
        <div className="service-list-detail">
          <GoTrophy className="trophy-icon" /><span>{detail2}</span>
        </div>
        <div className="service-list-detail">
          <GoTrophy className="trophy-icon" /><span>{detail3}</span>
        </div>
        <div className="service-list-detail">
          <GoTrophy className="trophy-icon" /><span>{detail4}</span>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetailCard;

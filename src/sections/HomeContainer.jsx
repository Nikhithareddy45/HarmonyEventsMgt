import React from 'react'
import mainImage from './../assets/main-image.jpg'
import '../styles/HomeContainer.css' 
import MainImagepic from '../components/MainImagepic'
function HomeContainer() {
  return (
    <div className='home-container'>
        <div className="home-container-1">
            <h1 className="font1">Creates <span>Magical</span> Moments</h1>
            <p className="font2">From intimate weddings to grand corporate celebrations, we transform your vision into unforgettable experiences</p>       
        </div>
        <MainImagepic img={mainImage} />
        <div className="home-container-3">
            <button className='plan-btn font2'>Plan your Event</button>   
            <button className='portfolio-btn font2'>View Portfolio</button>   
        </div>     
     
    </div>
  )
}

export default HomeContainer

import React from 'react'
import Heading from '../components/Heading'
import WeddingImage from '../assets/Wedding-img.jpg'
import MainImagepic from '../components/MainImagepic'
import WeddingSection from '../sections/WeddingSection'
// import '../styles/Weddings.css'
function Weddings() {
  return (
    <>
        {/* import { GiDiamondRing } from "react-icons/gi";
<GiDiamondRing /> */}
        <Heading head='Our <span>Weddings</span>' para='Creating magical wedding experiences that blend traditional Indian customs with modern luxury' />
        <MainImagepic img={WeddingImage} />
        <Heading head="Our<span> Wedding Services</span>" para=""/>
        <WeddingSection />
    </>
  )
}

export default Weddings

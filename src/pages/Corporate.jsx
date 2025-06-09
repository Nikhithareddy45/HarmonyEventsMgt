import React from 'react'
import Heading from '../components/Heading'
// import '../styles/Corporate.css'
 import CorporateImage from '../assets/corporate-events.jpg'
import MainImagepic from '../components/MainImagepic'
import CorporateSection from '../sections/CorporateSection'

function Corporate() {
  return (
    <>
        <Heading head='Our <span>Corporate </span> Events' para='Professional event management for conferences, galas, product launches, and business celebrations' />
        <MainImagepic img={CorporateImage} />
        <Heading head="Our<span> Corporate Services</span>" para=""/>
        <CorporateSection/>
        {/* <Heading head="Corporate <span>Gallery</span>" para=""/> */}

    </>
  )
}

export default Corporate

// import { MdOutlineCorporateFare } from "react-icons/md";
// <MdOutlineCorporateFare />
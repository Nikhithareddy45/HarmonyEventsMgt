import React from 'react'
import Navbar from '../components/Navbar'
import Heading from '../components/Heading'
import HomeContainer from '../sections/HomeContainer'
import ServiceSection from '../sections/ServiceSection'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
function Home() {
  return (
    <>
      <HomeContainer/>
      <Heading head='Our <span>Services</span>' para='We offer a wide range of services to cater to your needs.' />
      <ServiceSection/>
      <Heading head='Join Our <span>Celebration</span>' para="We can't wait to celebrate with you! Please confirm your attendance" />
      <Contact/>
    </>
  )
}

export default Home

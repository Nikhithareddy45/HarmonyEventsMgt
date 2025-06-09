import React from 'react'
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
function ContactPage() {
  return (
    <>
      <Heading head='<span>Plan your Event</span>' para="Let's discuss your dream event and make it a reality" />
      <Contact/>
    </>
  )
}

export default ContactPage

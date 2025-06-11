import React from 'react'
import '../styles/Footer.css' // Assuming you have a CSS file for styles
// import phone from '../assets/location.png'
import logo from '../../public/images/logo.png'
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlinePhone } from "react-icons/md";
import { TbHome } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
// import Link from 'react-router-dom'
function Footer() {
  return (
    <>
    <div className='footer-container'>
    <footer className='footer'>
      <div className="footer-1">
          <img className="logo" src={logo} alt="logo" />
          <h1 className="font1"><span>Harmony Events</span></h1>
        <p className='font2'>
          Creating magical experiences for weddings and corporate events with traditional Indian elegance and modern luxury.
        </p>
        <div className="social-media">
            {/* <Link></Link> */}
            <a href="https://www.instagram.com/harmonyevents6?igsh=MW8zNzF5bmNpZm80aA==" target="_blank" rel="noopener noreferrer"><FaInstagram className="icon" fontSize={24}/></a>
            {/* <a href="http://" target="_blank" rel="noopener noreferrer"><FaInstagram className="icon" fontSize={24}/></a> */}
        </div>
      </div>
      <div className="footer-2">
            <h2 className="font1">Contact Us</h2>
            <div className="address">
              <div className="address-detail">
                <MdOutlinePhone className='icon'/>
                <p className='font2'>+91 63045 03904</p>
              </div>
              <div className="address-detail">
                <HiOutlineMail className='icon'/>
                <p className='font2'> harmonyeventsteam@gmail.com</p>
              </div>
              <div className="address-detail">
                {/* <img src={phone} alt="" srcset="" /><p className='font2'>Pillar No. 143, 16 Shatters Hyderguda, Attapur, Hyderabad - 500048</p> */}
                <TbHome className='icon'/>
                <p className='font2'>Pillar No. 143, 16 Shatters Hyderguda, Attapur, Hyderabad - 500048</p>
              </div>
            </div>

      </div>
     
    </footer>
      <div className="copyright-div">
         <p className="font2 copyright">Copyright ©️ 2024 |<strong> Harmony Events </strong>| All Rights Reserved</p>
      </div>
    </div>
    </>
  )
}

export default Footer


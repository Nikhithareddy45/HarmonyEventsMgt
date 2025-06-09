import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/images/logo.png';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img className="logo" src={logo} alt="logo" />
        <h1 className="font1"><span>Harmony Events</span></h1>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? '×' : '☰'}
      </div>

      <ul className={`navbar-right ${isOpen ? 'open' : ''}`}>
        <li className='font2'><Link className='nav-links' to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li className='font2'><Link className='nav-links' to="/weddings" onClick={() => setIsOpen(false)}>Weddings</Link></li>
        <li className='font2'><Link className='nav-links' to="/corporate" onClick={() => setIsOpen(false)}>Corporate</Link></li>
        <li className='font2'><Link className='nav-links' to="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link></li>
        <li className='font2'><Link className='nav-links' to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;

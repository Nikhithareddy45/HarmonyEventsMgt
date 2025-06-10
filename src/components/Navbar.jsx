import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/images/logo.png";
import "../styles/Navbar.css";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const MotionDiv = motion.div;  // define once outside component

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <MotionDiv
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="navbar-left">
        <img className="logo" src={logo} alt="logo" />
        <h1 className="font1">
          <span>Harmony Events</span>
        </h1>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <IoClose /> : <HiMenu />}
      </div>

      <ul className={`navbar-right ${isOpen ? "open" : ""}`}>
        <li className="font2">
          <Link className="nav-links" to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li className="font2">
          <Link
            className="nav-links"
            to="/weddings"
            onClick={() => setIsOpen(false)}
          >
            Weddings
          </Link>
        </li>
        <li className="font2">
          <Link
            className="nav-links"
            to="/corporate"
            onClick={() => setIsOpen(false)}
          >
            Corporate
          </Link>
        </li>
        <li className="font2">
          <Link
            className="nav-links"
            to="/portfolio"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </Link>
        </li>
        <li className="font2">
          <Link
            className="nav-links"
            to="/contact"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </MotionDiv>
  );
}

export default Navbar;

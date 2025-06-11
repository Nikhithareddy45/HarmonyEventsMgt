import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './styles/App.css';
import Weddings from './pages/Weddings';
import Corporate from './pages/Corporate';
import Portfolio from './pages/Portfolio';
import Contact from './pages/ContactPage';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LocomotiveScroll from './components/Locomotive';

function App() {
  return (
    // <LocomotiveScroll> 
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weddings" element={<Weddings />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    // </LocomotiveScroll>
  );
}

export default App;

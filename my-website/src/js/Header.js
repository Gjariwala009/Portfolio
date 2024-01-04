import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import '../css/Header.css';
import About from './About';

function Header() {
  return (
    <Router>
      <div>
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/portfolio">Portfolio</Link>
          <div className="contact">
          <p>Phone: +1 (902) 329-9889</p>
        </div>
        </div>
        <div className="header">
          <div className="logo">GAVIN<br />JARIWALA</div>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        
      </div>
    </Router>
  );
}

export default Header;

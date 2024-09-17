import React from 'react';
import './Nsection.css';

const Nsection = () => {
  return (
    <nav className="navbar">
      <div className="company-name">PRAKASH INTERIOR</div>
      <ul className="nav-links">
        <li><a href="#home">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#services">GALLERY</a></li>
        <li><a href="#services">SERVICES</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </nav>
  );
};

export default Nsection;

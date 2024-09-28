import "./Nsection.css";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "../../index.css"

const Nsection = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="brand">
          <a href="/" className="logo-link">
            <img src="/images/logo_pk.jpg" alt="Logo" className="logo" />
            <span className="firstname">PRAKASH</span>&nbsp;INTERIOR
          </a>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <FaBars />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <a href="/" className="link_option">
                HOME
              </a>
            </li>
            <li>
              <a href="#services-section" className="link_option">
                SERVICES
              </a>
            </li>
            <li>
              <a href="/gallery" className="link_option">
                GALLERY
              </a>
            </li>
            <li>
              <a href="/aboutUs" className="link_option">
                ABOUT US
              </a>
            </li>
            <li>
              <a href="#contact-section">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nsection;

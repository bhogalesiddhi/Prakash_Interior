import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">

      {/* Links Section */}
      <div className="footer_section">
        <h2>Links</h2>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/aboutUs">About</a></li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Services Section */}
      <div className="footer_section">
        <h2>Services</h2>
        <ul>
          <li>Civil Work</li>
          <li>Marble & Tiles fixing</li>
          <li>Marble Polishing</li>
          <li>Plumbing</li>
          <li>Pop & False Ceiling</li>
          <li>Painting</li>
          <li>WaterProffing</li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="footer_section">
        <h2>Have a Question?</h2>
        <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
        <p>+2 392 3929 210</p>
        <p>info@yourdomain.com</p>
        <div className="socials">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer_bottom">
        <p>
          Copyright ©2024 All rights reserved | This website is made with{" "}
          <span className="heart">❤</span> by Psycoders
        </p>
      </div>
    </div>
  );
};

export default Footer;

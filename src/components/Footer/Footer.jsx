import React from "react";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="connect_with_us">
        <h1>Prakash Interiors</h1>
        <div className="socials">
          <a href="https://www.whatsapp.com/">
            <FaWhatsapp />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram />
          </a>
          <a href="#">
            <MdOutlineMail />
          </a>
        </div>
      </div>
      <div className="company">
        <h2>Company</h2>
        <ul>
          <li>About Us</li>
          <li>Services</li>
          <li>Reviews</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="support">
        <h2>Support</h2>
        <ul>
          <li>FAQ</li>
          <li>Locations</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

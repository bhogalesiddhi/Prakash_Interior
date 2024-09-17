// frontend/src/components/Map.js
import React from 'react';
import './Map.css';

const Map = () => {
  return (
    <div className="map-container">
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d893.0950152872672!2d72.82682319292856!3d18.980523015547973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3be7ce677b61becf%3A0xe2c194313c0be737!2sShirin%20Apartment%2C%20593%2C%20K%20K%20Road%2C%20Kasturba%20Quarters%2C%20Jacob%20Circle%2C%20Mumbai%2C%20Maharashtra%20400011!3m2!1d18.9803329!2d72.8275026!5e0!3m2!1sen!2sin!4v1716907322257!5m2!1sen!2sin"
        width="800"
        height="750"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;

import React from "react";
import { Link } from "react-router-dom";
import "./Gallery.css"; // Import your CSS file

function Gallery() {
  return (
    <div className="gallery-container">
      <h2>Gallery</h2>
      {/* Gallery Photos */}
      <div className="gallery-photos">
        {/* Display three photos in one row */}
        <img src="/images/photo1.jpeg" alt="interior" />
        <img src="/images/photo2.jpeg" alt="Interior" />
        <img src="/images/photo3.jpeg" alt="interior" />
      </div>
      {/* Button to redirect to services page */}
      <Link to="/services">
        <button className="view-more-button">View More</button>
      </Link>
    </div>
  );
}

export default Gallery;

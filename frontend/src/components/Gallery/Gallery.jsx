import React from "react";
import { Link } from "react-router-dom";
import "./Gallery.css"; // Import your CSS file

function Gallery() {
  return (
    <div className="gallery-container">
      <div class="section-heading">
        <h2>
          <span>Our</span> Gallery
        </h2>
        <div class="underline"></div>
      </div>
      {/* Gallery Photos */}
      <div className="gallery-photos">
        {/* Display three photos in one row */}
        <img src="/images/photo1.jpeg" alt="interior" />
        <img src="/images/photo2.jpeg" alt="Interior" />
        <img src="/images/photo3.jpeg" alt="interior" />
        <img src="/images/photo4.jpeg" alt="interior" />
        <img src="/images/photo5.jpeg" alt="interior" />
        <img src="/images/photo6.jpeg" alt="interior" />
        <img src="/images/photo11.jpeg" alt="interior" />
        <img src="/images/photo12.jpeg" alt="interior" />
        <img src="/images/marblepolish1.jpeg" alt="interior" />
        {/* <img src="/images/marblepolish2.jpeg" alt="interior" /> */}
        {/* <img src="/images/marblepolish3.jpeg" alt="interior" /> */}
      </div>
      {/* Button to redirect to services page */}
      <Link to="/gallery" className="gallery-container">
        <button className="view-more-button">View More</button>
      </Link>
    </div>
  );
}

export default Gallery;

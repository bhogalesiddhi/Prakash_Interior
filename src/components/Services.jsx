import React, { useState } from "react";
import "./Services.css"; // Import your CSS file
import NewNavbar from "./NewNavbar/NewNavbar";

function Services() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="services-container">
      <NewNavbar />
      <h2 className="serviceHeading">Our Work</h2>

      {/* Display all services and images */}
      <div className="services">
        {/* Image 1 */}
        <div
          className="service-image"
          onClick={() => handleImageClick("/images/photo1.jpeg")}
        >
          <img src="/images/photo1.jpeg" alt="Service 1" />
        </div>
        {/* Image 2 */}
        <div
          className="service-image"
          onClick={() => handleImageClick("/images/photo2.jpeg")}
        >
          <img src="/images/photo2.jpeg" alt="Service 2" />
        </div>
        {/* Image 3 */}
        <div
          className="service-image"
          onClick={() => handleImageClick("/images/photo3.jpeg")}
        >
          <img src="/images/photo3.jpeg" alt="Service 3" />
        </div>

        <div
          className="service-image"
          onClick={() => handleImageClick("/images/photo4.jpeg")}
        >
          <img src="/images/photo4.jpeg" alt="Service 3" />
        </div>

        <div
          className="service-image"
          onClick={() => handleImageClick("/images/photo5.jpeg")}
        >
          <img src="/images/photo5.jpeg" alt="Service 3" />
        </div>

        <div
          className="service-image"
          onClick={() => handleImageClick("/images/photo6.jpeg")}
        >
          <img src="/images/photo6.jpeg" alt="Service 3" />
        </div>

        <div
          className="service-image"
          onClick={() => handleImageClick("/images/photo7.jpeg")}
        >
          <img src="/images/photo7.jpeg" alt="Service 3" />
        </div>

        <div
          className="service-image"
          onClick={() => handleImageClick("/images/photo8.png")}
        >
          <img src="/images/photo8.png" alt="Service 3" />
        </div>

        <div
          className="service-image"
          onClick={() => handleImageClick("/images/photo9.jpeg")}
        >
          <img src="/images/photo9.jpeg" alt="Service 3" />
        </div>

        {/* Add more images as needed */}
      </div>
      {/* Modal for displaying full image */}
      {selectedImage && (
        <div>
          <div className="modal-overlay" onClick={handleCloseModal}></div>
          <div className="modal">
            <span className="close" onClick={handleCloseModal}>
              ×
            </span>
            <img src={selectedImage} alt="Full Size" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;

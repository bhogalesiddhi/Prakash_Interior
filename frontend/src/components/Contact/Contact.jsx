// // frontend/src/components/Contact.js
// import React, { useRef } from "react";
// import axios from "axios";
// import "./Contact.css";

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     const formData = new FormData(form.current);
//     const data = {
//       user_name: formData.get("user_name"),
//       user_email: formData.get("user_email"),
//       message: formData.get("message"),
//     };

//     axios
//       .post("http://localhost:5000/send", data) // Ensure this URL matches your backend URL
//       .then((response) => {
//         console.log("Email sent:", response.data);
//         e.target.reset();
//       })
//       .catch((error) => {
//         console.error("There was an error sending the email:", error);
//       });
//   };

//   return (
//     <div className="contact-container">
//       <div className="left-section">
//         <div class="map-container box">
//           <iframe
//             title="map"
//             src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d893.0950152872672!2d72.82682319292856!3d18.980523015547973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3be7ce677b61becf%3A0xe2c194313c0be737!2sShirin%20Apartment%2C%20593%2C%20K%20K%20Road%2C%20Kasturba%20Quarters%2C%20Jacob%20Circle%2C%20Mumbai%2C%20Maharashtra%20400011!3m2!1d18.9803329!2d72.8275026!5e0!3m2!1sen!2sin!4v1716907322257!5m2!1sen!2sin"
//             // width="700"
//             // height="650"
//             allowfullscreen=""
//             loading="lazy"
//             referrerpolicy="no-referrer-when-downgrade"
//           ></iframe>
//         </div>
//       </div>
//       <div className="right-section">
//         <form ref={form} onSubmit={sendEmail}>
//           <p>Contact Us</p>
//           <label>Name</label>
//           <input type="text" name="user_name" />
//           <label>Email</label>
//           <input type="email" name="user_email" />
//           <label>Message</label>
//           <textarea name="message" />
//           <input type="submit" value="Send" />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useRef } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons'; // Import icons
import './Contact.css';
import Map from "../Map/Map";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const data = {
      user_name: formData.get("user_name"),
      user_email: formData.get("user_email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    axios
      .post("http://localhost:5000/send", data)
      .then((response) => {
        console.log("Email sent:", response.data);
        e.target.reset();
      })
      .catch((error) => {
        console.error("There was an error sending the email:", error);
      });
  };

  return (
    <div className="contact-container" id='contact-section'>
      <Map/>
      <div class="section-heading">
  <h2><span>Need</span> Assistance?</h2>
  <div class="underline"></div>
</div>
    <div className="contact-form-container">
      
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
        </div>
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <ul>
          <li>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> 
            Address: 198 West 21th Street, Suite 721 New York NY 10016
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} className="icon" /> 
            Phone: +1235 2355 98
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} className="icon" /> 
            Email: info@yoursite.com
          </li>
          <li>
            <FontAwesomeIcon icon={faGlobe} className="icon" /> 
            Website: yoursite.com
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Contact;


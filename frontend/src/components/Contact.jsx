// frontend/src/components/Contact.js
import React, { useRef } from "react";
import axios from "axios";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const data = {
      user_name: formData.get("user_name"),
      user_email: formData.get("user_email"),
      message: formData.get("message"),
    };

    axios
      .post("http://localhost:5000/send", data) // Ensure this URL matches your backend URL
      .then((response) => {
        console.log("Email sent:", response.data);
        e.target.reset();
      })
      .catch((error) => {
        console.error("There was an error sending the email:", error);
      });
  };

  return (
    <div className="contact-container">
      <div className="left-section">
        <h2 className="head1">GET IN TOUCH</h2>
        <p className="head2">
          We are here to help and answer any questions you might have. Get
          started by filling out the enquiry form to contact our team. Get
          started with building.
        </p>
      </div>
      <div className="right-section">
        <form ref={form} onSubmit={sendEmail}>
          <p>Contact Us</p>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;

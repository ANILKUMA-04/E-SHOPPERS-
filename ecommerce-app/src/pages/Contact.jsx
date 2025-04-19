import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Reach out to us using the details below:</p>
      <div className="contact-details">
        <div className="contact-item">
          <h3>Email</h3>
          <p>support@eshopper.com</p>
        </div>
        <div className="contact-item">
          <h3>Phone</h3>
          <p>+1 (123) 456-7890</p>
        </div>
        <div className="contact-item">
          <h3>Address</h3>
          <p>123 E-Shopper Lane, Suite 100<br />Hyderabad,India </p>
        </div>
      </div>
      <form className="contact-form">
        <h3>Send Us a Message</h3>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contactPage">
      <div className="contactHero">
        <h1>Contact Us</h1>
        <p>Have questions, feedback, or need help with your order? We’d love to hear from you!</p>
      </div>

      <div className="contactContainer">
        <div className="contactInfoCard">
          <h2>Get In Touch</h2>
          <p className="infoSubtitle">Feel free to contact us anytime. We aim to respond within 24 hours.</p>

          <div className="infoList">
            <div className="infoItem">
              <strong>Location:</strong>
              <p>Tyre, Lebanon</p>
            </div>
            <div className="infoItem">
              <strong>Email:</strong>
              <p>support@MKMshop.com</p>
            </div>
            <div className="infoItem">
              <strong>Phone:</strong>
              <p>+961 70 000 000</p>
            </div>
            <div className="infoItem">
              <strong>Working Hours:</strong>
              <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>

        <div className="contactFormCard">
          <h2>Send Us A Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="formGroup">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="formGroup">
              <label>Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="formGroup">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Subject of your message"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="formGroup">
              <label>Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submitBtn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
import React, { useState } from "react";
import "../styles/ContactPage.css";

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We'll contact you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      {/* Left Section - Contact Form */}
      <div className="contact-form">
        <h2>Contact Us</h2>
        <p>Have a query about stalls or orders? Reach out to us below!</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Right Section - Famous Owners */}
      <div className="contact-owners">
        <h3>Our Famous Stall Owners</h3>
        <div className="owner-card">
          <div className="owner-icon">🍦</div>
          <div>
            <h4>Ramesh Kumar</h4>
            <p>Ice Cream Stall</p>
            <p>📞 +91 98765 43210</p>
          </div>
        </div>
        <div className="owner-card">
          <div className="owner-icon">🍲</div>
          <div>
            <h4>Anita Sharma</h4>
            <p>Chaat & Snacks</p>
            <p>📞 +91 91234 56789</p>
          </div>
        </div>
        <div className="owner-card">
          <div className="owner-icon">🎂</div>
          <div>
            <h4>Vikram Singh</h4>
            <p>Cakes & Desserts</p>
            <p>📞 +91 99887 66554</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;

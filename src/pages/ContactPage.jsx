import React, { useState } from "react";
import { useToast } from "../contexts/ToastContext";
import "./ContactPage.css";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  const validateForm = () => {
    const newErrors = {};
    
    if (!form.name) {
      newErrors.name = "Name is required";
    } else if (form.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }
    
    if (!form.message) {
      newErrors.message = "Message is required";
    } else if (form.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ""
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      addToast("Please fix the errors", "error");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      
      const data = await response.json();
      addToast("✅ " + data.message, "success");
      setForm({ name: "", email: "", message: "" });
      setErrors({});
    } catch (error) {
      addToast("❌ " + (error.message || "Failed to send message"), "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1>📧 Contact Us</h1>
          <p>Get in touch with our team</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <h3>📍 Address</h3>
              <p>123 Healthcare St, Dhaka, Bangladesh</p>
            </div>
            <div className="info-card">
              <h3>📞 Phone</h3>
              <p>+880 1234 567890</p>
            </div>
            <div className="info-card">
              <h3>⏰ Hours</h3>
              <p>Mon - Sat: 9:00 AM - 6:00 PM<br />Sunday: Closed</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                disabled={loading}
                className={errors.name ? "input-error" : ""}
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                disabled={loading}
                className={errors.email ? "input-error" : ""}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                value={form.message}
                onChange={handleChange}
                disabled={loading}
                rows="5"
                className={errors.message ? "input-error" : ""}
              ></textarea>
              {errors.message && <span className="error-text">{errors.message}</span>}
            </div>

            <button 
              type="submit" 
              className="contact-btn"
              disabled={loading}
            >
              {loading ? "⏳ Sending..." : "📤 Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Capricious Monir</h3>
          <p>Professional healthcare services in Bangladesh providing quality medical consultation and care.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="WhatsApp">💬</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/appointment">Appointment</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="#services">General Health Advice</a></li>
            <li><a href="#services">Health Monitoring</a></li>
            <li><a href="#services">Skin & Sexual Health</a></li>
            <li><a href="#services">Mental Counseling</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>📍 Cox's Bazar, Bangladesh</p>
          <p>📞 +880 1234 567890</p>
          <p>📧 contact@monirclinic.com</p>
          <p>⏰ Mon-Sat: 9:00 AM - 6:00 PM</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Capricious Monir Online Clinic. All rights reserved.</p>
        <p>Developed with ❤️ by <a href="#" className="dev-link">Aynal Haque Milon</a></p>
      </div>
    </footer>
  );
}

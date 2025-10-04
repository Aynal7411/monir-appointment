import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">Capricious Monir</Link>

        <div className="menu-toggle" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </div>

        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/services" onClick={() => setOpen(false)}>Services</Link></li>
          <li><Link to="/appointment" onClick={() => setOpen(false)}>Appointment</Link></li>
          <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>

          <li><Link to="/login" onClick={() => setOpen(false)}>Login</Link></li>
          <li><Link to="/register" onClick={() => setOpen(false)}>Register</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

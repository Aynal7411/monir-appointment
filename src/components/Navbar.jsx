import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useToast } from "../contexts/ToastContext";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    addToast("Logged out successfully", "success");
    navigate("/");
    setOpen(false);
  };

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

          {isAuthenticated ? (
            <>
              <li><Link to="/dashboard" onClick={() => setOpen(false)} className="nav-dashboard">📊 Dashboard</Link></li>
              <li className="user-info">
                <span className="user-name">👤 {user?.name}</span>
              </li>
              <li>
                <button 
                  className="logout-btn" 
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li><Link to="/login" onClick={() => setOpen(false)}>Login</Link></li>
              <li><Link to="/register" onClick={() => setOpen(false)}>Register</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

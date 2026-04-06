import React, { useState } from "react";
import { useToast } from "../contexts/ToastContext";
import { useAuth } from "../contexts/AuthContext";
import "./AppointmentPage.css";

export default function AppointmentPage() {
  const [form, setForm] = useState({ name: "", email: "", date: "", notes: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();
  const { user, isAuthenticated } = useAuth();

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
    
    if (!form.date) {
      newErrors.date = "Date is required";
    } else {
      const selectedDate = new Date(form.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = "Please select a future date";
      }
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
      const response = await fetch("http://localhost:5000/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      
      if (!response.ok) {
        throw new Error("Failed to book appointment");
      }
      
      const data = await response.json();
      addToast(data.message || "✅ Appointment booked successfully!", "success");
      setForm({ name: "", email: "", date: "", notes: "" });
      setErrors({});
    } catch (error) {
      addToast(error.message || "❌ Failed to book appointment", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="appointment-page">
      <div className="appointment-container">
        <div className="appointment-header">
          <h1>📅 Book an Appointment</h1>
          <p>Schedule a consultation with our healthcare provider</p>
        </div>

        <form onSubmit={handleSubmit} className="appointment-form">
          <div className="form-row">
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
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Preferred Date</label>
              <input
                id="date"
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                disabled={loading}
                className={errors.date ? "input-error" : ""}
                min={new Date().toISOString().split('T')[0]}
              />
              {errors.date && <span className="error-text">{errors.date}</span>}
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="notes">Additional Notes (Optional)</label>
            <textarea
              id="notes"
              name="notes"
              placeholder="Describe your symptoms or concerns..."
              value={form.notes}
              onChange={handleChange}
              disabled={loading}
              rows="4"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="appointment-btn" 
            disabled={loading}
          >
            {loading ? "⏳ Booking..." : "📅 Book Appointment"}
          </button>
        </form>

        <div className="appointment-info">
          <h3>ℹ️ Important Information</h3>
          <ul>
            <li>Please book appointments at least 2 days in advance</li>
            <li>You will receive a confirmation email after booking</li>
            <li>For urgent matters, please call our hotline</li>
            <li>Cancellations must be made 24 hours before the appointment</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

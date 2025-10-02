import React, { useState } from "react";
import "./AppointmentPage.css";

export default function AppointmentPage() {
  const [form, setForm] = useState({ name: "", email: "", date: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked for ${form.name} on ${form.date}`);
  };

  return (
    <div className="appointment-page">
      <h1>Book an Appointment</h1>
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
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
}

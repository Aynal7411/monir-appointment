import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Capricious Monir’s Clinic</h1>
        <p>Serving the Rohingya community with compassion and care.</p>
        <a href="/appointment" className="btn">Book Appointment</a>
      </div>
    </section>
  );
}

export default Hero;

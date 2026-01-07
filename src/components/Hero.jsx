import React from "react";
import "./Hero.css";
import clinicImage from "../assets/monir.jpg";
import Mylist from "./Mylist";

const Hero = () => {
  return (
    <section className="hero" role="banner">
      <div className="hero-container">
        <div className="hero-text">
          <h1>
            Capricious Monir’s <span>Clinic</span>
          </h1>

          <p className="hero-subtitle">
            Serving the Rohingya community with compassion, dignity, and care.
          </p>

          <p className="hero-description">
            Providing reliable medical support across Cox’s Bazar and Greater
            Chittagong with trusted professionals and modern facilities.
          </p>

          <div className="hero-actions">
            <a href="/appointment" className="btn-primary">
              Book Appointment
            </a>
            <a href="/contact" className="btn-outline">
              Contact Us
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={clinicImage} alt="Capricious Monir Clinic" loading="lazy" />
        </div>
      </div>

      <Mylist />
    </section>
  );
};

export default Hero;

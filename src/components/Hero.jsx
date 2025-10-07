import React from "react";
import "./Hero.css";
import clinicImage from "../assets/monir.jpg"; 
import Mylist from "./Mylist";
import Flower from "./Folwer";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src={clinicImage} alt="Clinic" className="hero-img" />
        <h1>Welcome to Capricious Monir’s Clinic</h1>
        <p>Serving the Rohingya community with compassion and care.</p>
        <p>Manage and support Coxbazar's and Greater Chittagong Trip.</p>
        <a href="/appointment" className="btn">Book Appointment</a>
      </div>
      <Mylist />
      <Flower />
    </section>
  );
}

export default Hero;

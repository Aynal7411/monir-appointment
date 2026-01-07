import React from "react";
import "./Mylist.css";

const SERVICES = [
  "Open Community Discussion & Counseling",
  "Refreshment & Guided Trip Arrangement",
  "Peaceful & Secure Accommodation Support",
  "Fresh Sea Fish & Organic Food Services",
];

const Mylist = () => {
  return (
    <section className="service-section" aria-labelledby="service-heading">
      <div className="service-container">
        <h2 id="service-heading">
          Monir’s <span>Clinical Services</span>
        </h2>

        <ul className="service-list">
          {SERVICES.map((service, index) => (
            <li key={index} className="service-item">
              <span className="service-icon">✔</span>
              <span className="service-text">{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Mylist;

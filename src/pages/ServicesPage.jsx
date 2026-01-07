import React from "react";
import "./ServicesPage.css";

const SERVICES = [
  "General Health Advice",
  "Observe Health Condition Day by Day",
  "Sex and Skin Disease Advice",
  "Child Health and Growth Monitoring",
  "Mental Counseling",
];

export default function ServicesPage() {
  return (
    <section className="services-page">
      <div className="container">
        <h1 className="services-heading">Monir's <span>Services</span></h1>
        <p className="services-subtitle">
          We provide holistic healthcare and counseling services for adults, children, and families.
        </p>
        <div className="services-list">
          {SERVICES.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-icon">✔️</div>
              <p>{service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

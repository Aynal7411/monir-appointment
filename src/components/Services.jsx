import React from "react";
import "./Services.css";

const SERVICES = [
  {
    title: "General Health Consultation",
    description: "Comprehensive health advice for both adults and children.",
  },
  {
    title: "Physical & Mental Care",
    description: "Holistic physical treatment combined with mental wellness support.",
  },
  {
    title: "Partner Mental Counseling",
    description: "Confidential counseling services for couples and partners.",
  },
  {
    title: "Nature-Based Wellness Care",
    description: "Healing and relaxation through nature-focused care programs.",
  },
  {
    title: "Child Health & Growth Monitoring",
    description: "Regular child health checkups and growth tracking.",
  },
];

const Services = () => {
  return (
    <section className="services-section" aria-labelledby="services-heading">
      <div className="services-container">
        <h2 id="services-heading">
          Our <span>Services</span>
        </h2>

        <div className="services-grid">
          {SERVICES.map((service, index) => (
            <article key={index} className="service-card">
              <div className="service-icon">🩺</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

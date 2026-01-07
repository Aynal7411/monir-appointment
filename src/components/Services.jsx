import React from "react";
import "./Services.css";

const SERVICES = [
  {
    title: "General Health Consultation",
    description: "Comprehensive health advice for both adults and children.",
    icon: "🩺",
  },
  {
    title: "Physical & Mental Care",
    description: "Holistic physical treatment combined with mental wellness support.",
    icon: "💪🧠",
  },
  {
    title: "Partner Mental Counseling",
    description: "Confidential counseling services for couples and partners.",
    icon: "💞",
  },
  {
    title: "Nature-Based Wellness Care",
    description: "Healing and relaxation through nature-focused care programs.",
    icon: "🌿",
  },
  {
    title: "Child Health & Growth Monitoring",
    description: "Regular child health checkups and growth tracking.",
    icon: "👶📊",
  },
];

const Services = () => {
  return (
    <section className="services-section" aria-labelledby="services-heading">
      <div className="services-container">
        <h2 id="services-heading" className="services-title">
          Our <span>Services</span>
        </h2>
        <p className="services-description">
          We provide comprehensive care and wellness programs designed for all ages, 
          ensuring health, mental well-being, and holistic support for our community.
        </p>

        <div className="services-grid">
          {SERVICES.map((service, index) => (
            <article key={index} className="service-card">
              <div className="service-icon" aria-hidden="true">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-text">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

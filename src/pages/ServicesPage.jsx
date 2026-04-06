import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ServicesPage.css";

const SERVICES = [
  {
    id: 1,
    title: "General Health Advice",
    description: "Comprehensive health consultations for overall wellness",
    icon: "🏥"
  },
  {
    id: 2,
    title: "Health Condition Monitoring",
    description: "Track and monitor your health conditions day by day",
    icon: "📊"
  },
  {
    id: 3,
    title: "Skin & Sexual Health",
    description: "Expert advice on dermatology and sexual health matters",
    icon: "💊"
  },
  {
    id: 4,
    title: "Child Health & Growth",
    description: "Specialized care for children's health and development",
    icon: "👶"
  },
  {
    id: 5,
    title: "Mental Health Counseling",
    description: "Professional mental health support and counseling services",
    icon: "🧠"
  }
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/appointment");
  };

  return (
    <section className="services-page">
      <div className="container">
        <div className="services-header">
          <h1>Our <span className="highlight">Services</span></h1>
          <p>Comprehensive healthcare solutions tailored for you</p>
        </div>

        <div className="services-grid">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className={`service-card ${selectedService?.id === service.id ? "active" : ""}`}
              onClick={() => setSelectedService(selectedService?.id === service.id ? null : service)}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-footer">
                <button 
                  className="service-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBooking();
                  }}
                >
                  Book Now →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <h2>Ready to take care of your health?</h2>
          <p>Book your appointment with our professional healthcare provider</p>
          <button className="cta-btn" onClick={handleBooking}>
            📅 Schedule Appointment
          </button>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import "./BangladeshMap.css";

const BangladeshMap = () => {
  return (
    <section className="map-section" aria-labelledby="map-heading">
      <h2 id="map-heading">
        Our <span>Service Coverage</span> Across Bangladesh
      </h2>

      <p className="map-description">
        Capricious Monir’s Clinic is dedicated to serving communities with
        compassion, focusing on healthcare, mental wellness, and humanitarian
        support—especially for vulnerable populations.
      </p>

      <div className="map-wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 600"
          role="img"
          aria-label="Bangladesh inspired healthcare service map"
          className="bangladesh-map"
        >
          {/* Background */}
          <rect width="100%" height="100%" fill="#006a4e" />

          {/* Red circle (flag inspired) */}
          <circle cx="460" cy="300" r="140" fill="#f42a41" />

          {/* Coverage points */}
          <circle cx="520" cy="360" r="10" fill="#ffffff" />
          <circle cx="600" cy="420" r="10" fill="#ffffff" />
          <circle cx="480" cy="430" r="10" fill="#ffffff" />

          {/* Labels */}
          <text x="540" y="355">Cox’s Bazar</text>
          <text x="620" y="415">Chittagong</text>
          <text x="500" y="460">Community Care Zones</text>
        </svg>
      </div>

      <div className="map-points">
        <ul>
          <li>✔ Healthcare support for adults & children</li>
          <li>✔ Mental counseling & partner wellness</li>
          <li>✔ Rohingya community humanitarian assistance</li>
          <li>✔ Nature-based healing & peaceful accommodation</li>
        </ul>
      </div>
    </section>
  );
};

export default BangladeshMap;

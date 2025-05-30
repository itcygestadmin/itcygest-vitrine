import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">
          IT Cygest: Your Strategic IT & Cybersecurity Ally
          </h1>
          <p className="hero-subtitle">
           Your trusted partner in cybersecurity and IT project management. With over 20 years of experience, we ensure your information systems are secure and efficient.
          </p>
          <p className="hero-subtitle">
           We help businesses secure their digital assets and deliver complex projects with confidence so you can focus on what matters most.
          </p>
          
        </div>
      </div>
    </section>
  );
}

import "./AboutUs.css";
import React from 'react';

function AboutUs() {
  return (
    <section className="about-container" id="about">
      <div className="about-content">
        
        <h2>About IT Cygest</h2>
        <p>
          <span role="img" aria-label="fusée">🚀</span> Founded in 2021, <strong>IT Cygest</strong> is a firm
          specializing in project and programme management, as well as
          cybersecurity services. We help organizations align their IT
          initiatives with strategic goals while protecting their critical
          assets from ever-evolving cyber threats.
        </p>
        <p>
          <span role="img" aria-label="cible">🎯</span> Our mission is to deliver expert guidance, tailored strategies, and
          hands-on support to drive innovation, efficiency, and resilience
          across IT environments.
        </p>
        <p>
          <span role="img" aria-label="bouclier">🛡</span> Whether you're launching a digital transformation project, managing
          complex portfolios, or securing sensitive systems, IT Cygest is your
          trusted partner.
        </p>
      </div>
    </section>
  );
}

export default AboutUs;

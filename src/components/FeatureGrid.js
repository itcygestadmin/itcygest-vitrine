import React from "react";
import "./FeatureGrid.css";

const features = [
  "Reduce risks and prevent costly overruns",
  "Access on-demand consulting or a virtual CISO (vCISO)",
  "Deliver comprehensive project management support",
  "Translate strategic objectives into actionable program goals",
  "Drive program strategy alignment across all components",
  "Accelerate the delivery of strategic value",
  "Enable secure and scalable digital transformation",
  "Prepare your organization for cybersecurity certifications"
];

export default function FeatureGrid() {
  return (
    <section className="feature-grid-section">
      <h2 className="feature-title">How Can IT Cygest Help You Succeed?</h2>
      <div className="feature-grid">
        {features.map((item, index) => (
          <div key={index} className="feature-card">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

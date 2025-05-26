import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "CTO, Solutello",
    feedback:
      "IT Cygest helped us structure our entire cybersecurity program and guided us toward ISO 27001 certification. Their pragmatic approach made a complex process feel manageable and efficient."
  },
  {
    name: "CEO, Econolunette inc.",
    feedback:
      "With IT Cygest acting as our virtual CISO, we finally gained a clear, prioritized roadmap for securing our digital transformation initiatives."
  },
  {
    name: "CISO, Econolunette inc.",
    feedback:
      "IT Cygest’s leadership in program and risk management allowed us to align IT security with our strategic goals and reduce compliance gaps by over 40%."
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <h2 className="testimonials-title">What Our Clients Say</h2>
      <div className="testimonials-list">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">
            <p className="testimonial-feedback">"{t.feedback}"</p>
            <p className="testimonial-author">– {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

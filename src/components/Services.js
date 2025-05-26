import React, { useState } from "react";
import "./Services.css";

const services = [
  {
    title: "Project Management",
    description: [
      "Your Projects Deserve More Than Chaos — They Deserve Command.",
      "Delivering projects on time and on target isn’t luck — it’s leadership backed by methodology.",
      "We bring clarity, control, and confidence to your project portfolio using globally recognized frameworks.",
      "With IT Cygest, your technology initiatives move forward without delays or budget overruns."
    ],
    image: "/assets/Program_Strategy.png",
    features: [
      "Full project management (turnkey delivery)",
      "Targeted support (PMO assistance, coordination, project recovery)",
      "Mentoring and coaching for internal project managers",
      "Implementation or optimization of internal PM methodologies"
    ]
  },
  {
    title: "Strategic Program Management",
    description: [
      "Align your objectives, maximize your impact.",
      "Every project should be part of a broader vision.",
      "We structure your strategic program for accelerated and measurable growth."
    ],
    image: "/assets/pics_prg_mgt.jpg",
    features: [
      "Improved organizational agility and alignment",
      "Centralized oversight with decentralized execution",
      "Reduced risk of redundant efforts or initiative failure"
    ]
  },
  {
    title: "Cybersecurity Consulting",
    description: [
      "Protect your data, strengthen your cybersecurity.",
      "Cyberattacks evolve — so should your security.",
      "IT Cygest offers in-depth analysis and robust solutions to anticipate threats."
    ],
    image: "/assets/Cyber_IT.jpg",
    features: [
      "Security Risk Assessment & Strategy",
      "Security Architecture & Controls Design",
      "Compliance & Governance",
      "Incident Response & Business Continuity",
      "Security Awareness & Human Risk Reduction",
      "Third-Party & Cloud Security"

    ]
  },
  {
    title: "Digital Transformation Support",
    description: [
      "Take your business to the next level with cloud applications.",
      "The digital shift is real, be ready!",
      "Optimization, collaboration, cloud security.",
      "Automation, artificial intelligence, IT optimization.",
      "Our experts support you through a smooth and efficient transition.",
      "With IT Cygest, transform your business using tools that make a real difference."
    ],
    image: "/assets/digital_transform.jpg",
    features: [
      "Strategic Alignment & Transformation Planning",
      "Benefits Realization Management",
      "Digital Governance & Oversight",
      "Integrated Execution & Delivery Coordination",
      "Stakeholder Engagement & Change Leadership"
    ]
  }
];

function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="service-section">
    <div className="service-grid">
      {services.map((service, index) => (
        <div
          key={index}
          className="service-card"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img
            src={service.image}
            alt={service.title}
            className="product-image"
          />
          <h3 className="service-name">{service.title}</h3>

          <div className="service-desc">
            {service.description.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          {hoveredIndex === index && (
            <ul className="tree-features show">
              {service.features.map((feature, idx) => (
                <li key={idx} className="tree-node">
                  <span className="tree-branch">--</span>
                  <span className="tree-text">{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
        </section>
  );
}

export default Services;

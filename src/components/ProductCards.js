import React from "react";
import "./ProductCards.css";

const products = [
  {
    title: "Our Expertise",
    description: "With over 20 years of experience, we specialize in securing information systems and providing IT project management solutions tailored to your needs.",
    image: "/assets/xxlarge.jpg"
  },
  {
    title: "Our Approach",
    description: "We employ a comprehensive approach to cybersecurity, ensuring your business is protected against evolving threats.",
    image: "/assets/Approche.jpg"
  },
  {
    title: "Consulting Services",
    description: "Our consulting services are designed to help businesses navigate the complexities of IT project management and cybersecurity.",
    image: "/assets/Consulting.jpg"
  },
  {
    title: "Why Choose Us?",
    description: "Too many organizations struggle with cybersecurity complexity and IT project failures. Without the right guidance, you risk lost revenue, data breaches, and damaged trust.",
    image: "/assets/ChooseUS.jpg"
  }
];

export default function ProductCards() {
  return (
    <section className="product-section">

      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h3 className="product-name">{product.title}</h3>
            <p className="product-desc">{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

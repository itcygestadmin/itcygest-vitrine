import "./Faq.css";
import React from 'react'; // ✅ Ajout requis



function Faq() {
    return (
      
      <div className="faq-container" id="faq">
        {/* Première ligne de deux carrés */}
        <section className="faq-row">
          <div className="faq-box">
            <h2>What services do you offer?</h2>
            <p>We provide a range of services including cybersecurity assessments, IT project management, and compliance consulting.</p>
          </div>

          <div className="faq-box">
            <h2>What industries do you serve?</h2>
            <p>We serve various industries including finance, healthcare, and technology, helping them secure their information systems.</p>

          </div>
        </section>
  
        {/* Deuxième ligne de deux carrés */}
        <section className="faq-row" >
          <div className="faq-box">
            <h2>Can you assist with compliance?</h2>
            <p>Absolutely, we help organizations navigate compliance requirements such as ISO-27001, GDPR, HIPAA, and PCI-DSS.</p>

          </div>
          <div className="faq-box">
            <h2>What is your experience?</h2>
            <p>With over 20 years in the industry, we have a proven track record of helping businesses enhance their cybersecurity posture.</p>

          </div>
        </section>

         {/* Troisième ligne de deux carrés */}
         <section className="faq-row" >
          <div className="faq-box">
            <h2>Do you offer training?</h2>
            <p>Yes, we provide training sessions on cybersecurity best practices and IT project management methodologies.</p>

          </div>
          <div className="faq-box">
            <h2>How can I contact you?</h2>
            <p>You can reach us via our website contact form or by calling our office directly at (514) 249-7972.</p>

          </div>
        </section>
  
        {/* Dernière section en rectangle sous les carrés 
        <section className="faq-rectangle">
          <h2>Support à la transformation numérique</h2>
          <p>🔥 Le digital change la donne : soyez prêts !</p>
          <p>💼 Automatisation, intelligence artificielle, optimisation IT.</p>
          <p>🚀 Avec IT Cygest, transformez votre entreprise avec des outils qui font la différence.</p>
        </section> */}
      </div>
    );
  }
  
  export default Faq;
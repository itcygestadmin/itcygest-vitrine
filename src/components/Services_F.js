import "./Services.css";

function Services() {
    return (
      
      <div className="services-container" id="services">
        {/* Première ligne de deux carrés */}
        <section className="services-row">
          <div className="service-box">
            <h2>Gestion de projet TI</h2>
            <p>💡 Des projets TI maîtrisés de bout en bout.</p>
            <p>👉 Avec IT Cygest, vos initiatives technologiques avancent sans retard ni dépassement de budget.</p>
            <p>🎯 Méthodes éprouvées. Outils performants. Résultats concrets.</p>
          </div>
          <div className="service-box">
            <h2>Gestion de programme stratégique</h2>
            <p>🚀 Alignez vos objectifs, maximisez votre impact.</p>
            <p>🔗 Chaque projet doit s’intégrer à une vision plus large.</p>
            <p>💡 Nous structurons votre programme stratégique pour une croissance accélérée et mesurable.</p>
          </div>
        </section>
  
        {/* Deuxième ligne de deux carrés */}
        <section className="services-row" >
          <div className="service-box">
            <h2>Conseil en cybersécurité</h2>
            <p>🛡 Protégez vos données, renforcez votre cybersécurité.</p>
            <p>⚡️ Les cyberattaques évoluent, votre sécurité aussi.</p>
            <p>💼 IT Cygest vous offre une analyse approfondie et des solutions robustes pour anticiper les menaces.</p>
          </div>
          <div className="service-box">
            <h2>Implantation Microsoft 365 & Azure</h2>
            <p>🔄 Passez au niveau supérieur avec Microsoft 365 et Azure.</p>
            <p>🎯 Optimisation, collaboration, sécurité cloud.</p>
            <p>💡 Nos experts vous accompagnent pour une transition fluide et performante.</p>
          </div>
        </section>
  
        {/* Dernière section en rectangle sous les carrés */}
        <section className="service-rectangle">
          <h2>Support à la transformation numérique</h2>
          <p>🔥 Le digital change la donne : soyez prêts !</p>
          <p>💼 Automatisation, intelligence artificielle, optimisation IT.</p>
          <p>🚀 Avec IT Cygest, transformez votre entreprise avec des outils qui font la différence.</p>
        </section>
      </div>
    );
  }
  
  export default Services;
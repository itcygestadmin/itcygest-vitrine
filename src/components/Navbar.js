import "./Navbar.css";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

// ✅ Ajout du logo

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
       <img src="/assets/Logov4.png" alt="Logo IT Cygest" style={{ width: '160px', height: '80px', borderRadius: '10%' }} />
      
      <ul className="nav-links">
        {/* Lien vers la page d'accueil */}
        <li>
          <Link to="/" className="home-link">Home</Link>
        </li>
        
        {/* Lien vers la page des services */}
        <li>
          <Link to="/services">Services</Link>
        </li>
                {/* Ancre vers la section FAQ sur la même page */}
                <li>
          <Link to="/faq">FAQ</Link>
        </li>
         {/* Ancre vers la section Testimonials sur la même page */}
         <li>
          <Link to="/testimonials">Testimonials</Link>
        </li>
        
        {/* Lien vers la page Contact Us, en utilisant React Router */}
        <li>
          <a href="/#contact">Contact Us</a>
        </li>
        

        
     
          {/* Lien vers la page About Us */}
          <li>
          <Link to="/aboutus">About Us</Link>
        </li>
      </ul>
    </nav>
  );
  }
  
  export default Navbar;
  
import "./Navbar.css";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // ✅ État pour le menu mobile

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <img
        src="/assets/Logov4.png"
        alt="Logo IT Cygest"
        className="logo"
      />

      {/* ✅ Bouton hamburger pour le menu mobile */}
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      {/* ✅ Ajout de la classe "active" si menuOpen est true */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" className="home-link" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
        </li>
        <li>
          <Link to="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
        </li>
        <li>
          <Link to="/testimonials" onClick={() => setMenuOpen(false)}>Testimonials</Link>
        </li>
        <li>
          <a href="/#contact" onClick={() => setMenuOpen(false)}>Contact Us</a>
        </li>
        <li>
          <Link to="/aboutus" onClick={() => setMenuOpen(false)}>About Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

  
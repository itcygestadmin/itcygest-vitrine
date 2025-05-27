import "./Navbar.css";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  // ✅ Délai pour éviter fermeture brutale du menu
  const handleLinkClick = () => {
    setTimeout(() => setMenuOpen(false), 200);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <img
        src="/assets/Logov4.png"
        alt="Logo IT Cygest"
        className="logo"
      />

      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
        <li><Link to="/services" onClick={handleLinkClick}>Services</Link></li>
        <li><Link to="/faq" onClick={handleLinkClick}>FAQ</Link></li>
        <li><Link to="/testimonials" onClick={handleLinkClick}>Testimonials</Link></li>
        <li><a href="/#contact" onClick={handleLinkClick}>Contact Us</a></li>
        <li><Link to="/aboutus" onClick={handleLinkClick}>About Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;


  
import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';

function Footer() {
  return (
<footer className="footer" id="contact">
  <div className="footer-main">
    <a href="mailto:info@itcygest.com" className="contact-btn">Contact Us</a>
    <span className="separator">|</span>
    <span>Email: info@itcygest.com</span>
    <span className="separator">|</span>
    <span>Phone: +1 514 249 7972</span>
    <span className="separator">|</span>
    <Link to="/privacy">Privacy Policy</Link>
  </div>
  <div className="footer-bottom">
    <p>© 2025 IT Cygest. All rights reserved.</p>
  </div>
</footer>
  );
}

export default Footer;

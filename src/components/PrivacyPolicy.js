import React from "react";
import "./PrivacyPolicy.css"; // ✅ lien vers le fichier CSS

export default function PrivacyPolicy() {
  return (
    <section className="privacy-container">
      <h1>Privacy Policy</h1>
      <p>Last updated: June 2025</p>

      <p>
        IT Cygest Management (“we”, “our”, or “us”) is committed to protecting your privacy.
        This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
      </p>

      <h2>Information We Collect</h2>
      <p>We may collect information such as:</p>
      <ul>
        <li>Your email address if you contact us</li>
        <li>Anonymous usage data via tools like Google Analytics</li>
        <li>Information you provide via contact forms</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>We may use your information to:</p>
      <ul>
        <li>Respond to inquiries or contact you if requested</li>
        <li>Improve the user experience on our website</li>
        <li>Monitor website usage for analytics purposes</li>
      </ul>

      <h2>Third-Party Services</h2>
      <p>
        We may use third-party tools such as analytics services or embedded content.
        These tools may collect data in accordance with their own privacy policies.
      </p>

      <h2>Data Security</h2>
      <p>
        We implement reasonable security measures to protect your data.
        However, no method of transmission over the internet is 100% secure.
      </p>

      <h2>Your Rights</h2>
      <p>
        You may contact us to access, correct, or delete any personal information we may have collected.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions or concerns about this policy, you may contact us at:
        <a href="mailto:info@itcygest.com">info@itcygest.com</a>
      </p>
    </section>
  );
}
import React from "react";
import "./References.css"
import { BadgeCheck, ShieldCheck, Briefcase } from "lucide-react";

const Card = ({ children, className }) => (
  <div className={`card ${className || ""}`} style={{
    backgroundColor: '#fff',
    borderRadius: '16px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    padding: '24px',
    marginBottom: '16px'
  }}>
    {children}
  </div>
);

export default function References() {
  return (
    <section style={{ padding: '2rem', backgroundColor: '#f9fafb' }}>
      <div style={{ maxWidth: '2048px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '1.5rem', color: '#1f2937' }}>
          Security & Trust Center
        </h2>
        <p style={{ color: '#4b5563', textAlign: 'center', marginBottom: '2rem' }}>
          At <strong>IT Cygest</strong>, we emphasize excellence, professional rigor,
          and confidentiality in every engagement. Our lead consultant brings over
          20 years of experience in project management, cybersecurity, and IT governance. 
          We believe trust is earned through transparency, certifications, and a proven track record. 
          Our commitment to professional integrity is backed by recognized credentials and industry memberships:
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
          <Card style={{ flex: '1 1 100%', maxWidth: '48%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <BadgeCheck color="#16a34a" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937' }}>
                Certifications & Memberships
              </h3>
            </div>
            <ul style={{ color: '#374151', textAlign: 'left', paddingLeft: '1rem' }}>
              <li>PMP® (Project Management Professional) certified</li>
              <li>Member of the Ordre des ingénieurs du Québec (OIQ)</li>
              <li>Recognized expert in cybersecurity and risk management</li>
            </ul>
          </Card>

          <Card style={{ flex: '1 1 100%', maxWidth: '48%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Briefcase color="#2563eb" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937' }}>
                Client Experience
              </h3>
            </div>
            <ul style={{ color: '#374151',textAlign: 'left', paddingLeft: '1rem' }}>
              <li>Desjardins – Strategic project management & cybersecurity governance</li>
              <li>Large organizations across financial, public, and tech sectors</li>
              <li>Complex mandates in regulated environments with multidisciplinary teams</li>
            </ul>
          </Card>

          <Card style={{ flex: '1 1 100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <ShieldCheck color="#7c3aed" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937' }}>
                Areas of Expertise
              </h3>
            </div>
            <ul style={{ color: '#374151',textAlign: 'left', paddingLeft: '1rem' }}>
              <li>Program & portfolio management</li>
              <li>Cybersecurity posture assessment & improvement</li>
              <li>Regulatory compliance (ISO 27001, NIST, PCI-DSS)</li>
              <li>Risk analysis, IT audit, and remediation planning</li>
            </ul>
          </Card>
        </div>

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <p style={{ fontSize: '1.125rem', fontWeight: '500', color: '#1f2937' }}>
            Whether it's cybersecurity audits, IT crisis management, or PMO setup,
            <br className="hidden md:inline" />
            we provide high-level expertise tailored to your needs.
          </p>
        </div>
      </div>
    </section>
  );
}

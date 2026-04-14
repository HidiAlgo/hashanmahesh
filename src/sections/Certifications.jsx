import React, { useState, useEffect } from 'react';
import { certifications } from '../data/content';

export default function Certifications() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return (
    <section id="certifications" className="section">
      <h2 className="section-heading">Certifications</h2>
      <div className="section-heading-line" />
      <p className="section-subheading">Courses completed & credentials earned 🏅</p>

      <div
        className="cert-grid"
        style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)' }}
      >
        {certifications.map((cert, i) => (
          <div
            key={i}
            className="note-card cert-card fade-up"
            style={{
              animationDelay: `${i * 0.07}s`,
              padding: isMobile ? '1.25rem 1.25rem 1rem' : undefined,
            }}
          >
            <div className="cert-stripe" style={{ background: cert.color }} />
            <div className="cert-badge" style={{ background: cert.color + '18', border: `1.5px solid ${cert.color}40`, color: cert.color }}>
              {cert.type.toUpperCase().slice(0, 3)}
            </div>
            <p className="cert-title">{cert.title}</p>
            <p className="cert-issuer">{cert.issuer}</p>
            <div className="cert-footer">
              <span className="cert-date">{cert.date}</span>
              {cert.credentialId && <span className="cert-id"># {cert.credentialId}</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
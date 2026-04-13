import React from 'react';
import { certifications } from '../data/content';

export default function Certifications() {
  return (
    <section id="certifications" style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
      <h2 className="section-heading">Certifications</h2>
      <div className="section-heading-line" />
      <p className="section-subheading">Courses completed &amp; credentials earned 🏅</p>

      <div
        className="cert-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1rem',
        }}
      >
        {certifications.map((cert, i) => (
          <div
            key={i}
            className="note-card fade-up"
            style={{ animationDelay: `${i * 0.07}s` }}
          >
            {/* colour strip at top */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0,
              height: 3,
              background: cert.color,
              borderRadius: '1px 1px 0 0',
            }} />

            {/* issuer badge */}
            <div style={{
              width: 34, height: 34,
              background: cert.color + '16',
              border: `1.5px solid ${cert.color}38`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '0.7rem',
              marginTop: '0.3rem',
            }}>
              <span style={{
                fontFamily: 'Special Elite, cursive',
                fontSize: '0.65rem',
                color: cert.color,
                fontWeight: 700,
                letterSpacing: 0.5,
              }}>
                {cert.type.toUpperCase().slice(0, 3)}
              </span>
            </div>

            <h3 style={{
              fontFamily: 'Kalam, cursive',
              fontSize: '0.98rem',
              fontWeight: 700,
              color: 'var(--ink)',
              lineHeight: 1.35,
              marginBottom: '0.35rem',
            }}>
              {cert.title}
            </h3>

            <p style={{
              fontFamily: 'Kalam, cursive',
              fontSize: '0.85rem',
              color: 'var(--ink-faint)',
              marginBottom: '0.6rem',
              lineHeight: 1.3,
            }}>
              {cert.issuer}
            </p>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '4px',
              marginTop: 'auto',
            }}>
              <span style={{
                fontFamily: 'Special Elite, cursive',
                fontSize: '0.76rem',
                color: 'var(--ink-ghost)',
              }}>
                {cert.date}
              </span>
              {cert.credentialId && (
                <span style={{
                  fontFamily: 'Special Elite, cursive',
                  fontSize: '0.68rem',
                  color: 'var(--ink-ghost)',
                  padding: '1px 5px',
                  border: '1px solid var(--border)',
                }}>
                  #{cert.credentialId}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="sticky-note">
        <span>✏</span>
        <span>
          Replace placeholder data in{' '}
          <code style={{
            fontSize: '0.78rem',
            background: 'rgba(0,0,0,0.06)',
            padding: '1px 5px',
            fontFamily: 'monospace',
          }}>
            src/data/content.js
          </code>{' '}
          with your real certificates.
        </span>
      </div>
    </section>
  );
}

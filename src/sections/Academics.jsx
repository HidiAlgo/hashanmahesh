import React from 'react';
import { academics } from '../data/content';

export default function Academics() {
  return (
    <section id="academics" style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
      <h2 className="section-heading">Academics</h2>
      <div className="section-heading-line" />
      <p className="section-subheading">The long journey through books &amp; late nights 📚</p>

      {/* timeline wrapper */}
      <div style={{ position: 'relative', paddingLeft: '1.5rem' }}>
        {/* vertical timeline line */}
        <div style={{
          position: 'absolute',
          left: 4,
          top: 8,
          bottom: 8,
          width: 1,
          background: 'repeating-linear-gradient(180deg, var(--accent) 0 6px, transparent 6px 12px)',
          opacity: 0.4,
        }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {academics.map((item, i) => (
            <div key={i} className="academic-card" style={{ position: 'relative' }}>
              {/* timeline dot */}
              <div className="timeline-dot" style={{
                position: 'absolute',
                left: '-1.85rem',
                top: '1.35rem',
                width: 10, height: 10,
                borderRadius: '50%',
                background: 'var(--accent)',
                border: '2px solid var(--paper)',
                boxShadow: '0 0 0 2px var(--accent)',
                zIndex: 1,
              }} />

              <article className={`note-card fade-up`} style={{ animationDelay: `${i * 0.1}s` }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '0.5rem',
                }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                      <h3 style={{
                        fontFamily: 'Caveat, cursive',
                        fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
                        fontWeight: 700,
                        color: 'var(--ink)',
                      }}>
                        {item.degree}
                      </h3>
                    </div>
                    <p style={{
                      fontFamily: 'Kalam, cursive',
                      fontSize: '1rem',
                      color: 'var(--accent)',
                    }}>
                      {item.institution}
                    </p>
                  </div>

                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <span style={{
                      fontFamily: 'Special Elite, cursive',
                      fontSize: '0.82rem',
                      color: 'var(--ink-faint)',
                      display: 'block',
                    }}>
                      {item.year}
                    </span>
                    {item.gpa && (
                      <span className="hl" style={{
                        fontFamily: 'Kalam, cursive',
                        fontSize: '0.88rem',
                        color: 'var(--ink-mid)',
                        marginTop: '3px',
                        display: 'inline-block',
                      }}>
                        GPA: {item.gpa}
                      </span>
                    )}
                  </div>
                </div>

                {item.thesis && (
                  <div style={{
                    paddingLeft: '0.9rem',
                    borderLeft: '2px solid var(--border)',
                    marginTop: '0.6rem',
                  }}>
                    <span style={{
                      fontFamily: 'Kalam, cursive',
                      fontSize: '0.78rem',
                      color: 'var(--ink-ghost)',
                      fontStyle: 'italic',
                      display: 'block',
                      marginBottom: '2px',
                    }}>
                      Thesis:
                    </span>
                    <p style={{
                      fontFamily: 'Kalam, cursive',
                      fontSize: '0.93rem',
                      color: 'var(--ink-mid)',
                      fontStyle: 'italic',
                      lineHeight: 1.55,
                    }}>
                      "{item.thesis}"
                    </p>
                  </div>
                )}
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

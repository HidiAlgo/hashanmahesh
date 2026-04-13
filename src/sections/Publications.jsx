import React, { useState } from 'react';
import { publications } from '../data/content';

export default function Publications() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="publications" style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
      <h2 className="section-heading">Publications</h2>
      <div className="section-heading-line" />
      <p className="section-subheading">Research papers &amp; academic writing 🔬</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
        {publications.map((pub, i) => (
          <article
            key={i}
            className="note-card fade-up"
            style={{ animationDelay: `${i * 0.09}s`, cursor: 'pointer' }}
            onClick={() => setExpanded(expanded === i ? null : i)}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '0.75rem',
            }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{
                  fontFamily: 'Kalam, cursive',
                  fontSize: 'clamp(0.97rem, 2.5vw, 1.08rem)',
                  fontWeight: 700,
                  color: 'var(--ink)',
                  lineHeight: 1.4,
                  marginBottom: '0.3rem',
                }}>
                  {pub.title}
                </h3>

                <p style={{
                  fontFamily: 'Special Elite, cursive',
                  fontSize: '0.83rem',
                  color: 'var(--accent)',
                  marginBottom: '0.25rem',
                }}>
                  {pub.journal}
                </p>

                <p style={{
                  fontFamily: 'Kalam, cursive',
                  fontSize: '0.83rem',
                  color: 'var(--ink-faint)',
                  marginBottom: '0.55rem',
                }}>
                  {pub.authors} · {pub.year}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px' }}>
                  {pub.tags.map((tag, j) => (
                    <span key={j} className="tag tag-filled">{tag}</span>
                  ))}
                </div>
              </div>

              {/* expand toggle */}
              <span style={{
                fontFamily: 'Caveat, cursive',
                fontSize: '1.3rem',
                color: 'var(--ink-ghost)',
                flexShrink: 0,
                transition: 'transform 0.2s',
                transform: expanded === i ? 'rotate(180deg)' : 'none',
                marginTop: '2px',
                lineHeight: 1,
              }}>
                ▾
              </span>
            </div>

            {/* Expandable abstract */}
            <div style={{
              maxHeight: expanded === i ? '300px' : 0,
              overflow: 'hidden',
              transition: 'max-height 0.3s ease',
            }}>
              <div style={{
                paddingTop: '0.75rem',
                marginTop: '0.65rem',
                borderTop: '1px dashed var(--border)',
              }}>
                <p style={{
                  fontFamily: 'Kalam, cursive',
                  fontSize: '0.93rem',
                  color: 'var(--ink-mid)',
                  lineHeight: 1.7,
                  marginBottom: '0.65rem',
                }}>
                  <span style={{ color: 'var(--ink-ghost)', fontStyle: 'italic' }}>Abstract — </span>
                  {pub.abstract}
                </p>
                {pub.doi && (
                  <a
                    href={pub.doi.startsWith('http') ? pub.doi : `https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    style={{
                      fontFamily: 'Special Elite, cursive',
                      fontSize: '0.76rem',
                      color: 'var(--accent)',
                      textDecoration: 'none',
                      border: '1px solid rgba(30,61,114,0.4)',
                      padding: '2px 8px',
                      display: 'inline-block',
                    }}
                  >
                    DOI / View ↗
                  </a>
                )}
              </div>
            </div>

            {/* tap hint */}
            {expanded !== i && (
              <p style={{
                fontFamily: 'Caveat, cursive',
                fontSize: '0.75rem',
                color: 'var(--ink-ghost)',
                marginTop: '0.6rem',
                fontStyle: 'italic',
              }}>
                tap to read abstract ↓
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

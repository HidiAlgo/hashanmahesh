import React from 'react';
import { profile } from '../data/content';

export default function About() {
  return (
    <section id="about" style={{ paddingTop: '2.5rem', paddingBottom: '1.5rem' }}>
      <div style={{ marginBottom: '2rem', position: 'relative' }}>

        {/* pg.01 margin note — hidden on mobile via .timeline-dot pattern */}
        <span className="margin-pg-note" style={{
          position: 'absolute',
          left: '-3.2rem',
          top: '0.6rem',
          fontFamily: 'Caveat, cursive',
          fontSize: '0.68rem',
          color: 'var(--ink-ghost)',
          writingMode: 'vertical-rl',
          letterSpacing: 2,
          userSelect: 'none',
        }}>
          pg.01
        </span>

        <h1 className="fade-up fade-up-1" style={{
          fontFamily: 'Caveat, cursive',
          fontSize: 'clamp(2.4rem, 8vw, 4.4rem)',
          fontWeight: 700,
          lineHeight: 1.1,
          color: 'var(--ink)',
          marginBottom: '0.4rem',
        }}>
          Hi, I'm{' '}
          <span className="sketch-underline" style={{ color: 'var(--accent)' }}>
            {profile.name}
          </span>
        </h1>

        <p className="fade-up fade-up-2" style={{
          fontFamily: 'Kalam, cursive',
          fontSize: 'clamp(1rem, 2.8vw, 1.3rem)',
          color: 'var(--ink-mid)',
          fontStyle: 'italic',
          marginBottom: '0.65rem',
        }}>
          — {profile.role}
        </p>

        <p className="fade-up fade-up-2" style={{
          fontFamily: 'Kalam, cursive',
          fontSize: '0.98rem',
          color: 'var(--ink-faint)',
          fontStyle: 'italic',
        }}>
          <span className="hl">{profile.tagline}</span>
        </p>
      </div>

      {/* Bio + photo */}
      <div
        className="fade-up fade-up-3 about-bio-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: profile.avatar ? '1fr 170px' : '1fr',
          gap: '2rem',
          alignItems: 'start',
        }}
      >
        <div>
          {profile.bio.split('\n\n').map((para, i) => (
            <p key={i} style={{
              fontFamily: 'Kalam, cursive',
              fontSize: '1.08rem',
              lineHeight: 1.95,
              color: 'var(--ink-mid)',
              marginBottom: '0.9rem',
            }}>
              {para.trim()}
            </p>
          ))}
        </div>

        {profile.avatar && (
          <div className="about-photo" style={{ textAlign: 'center' }}>
            {/* polaroid style */}
            <div style={{
              background: 'white',
              padding: '8px 8px 28px',
              display: 'inline-block',
              transform: 'rotate(2deg)',
              boxShadow: '2px 3px 10px rgba(0,0,0,0.15)',
              border: '1px solid var(--border)',
            }}>
              <div style={{ width: 140, height: 140, overflow: 'hidden', background: '#e8e4dc' }}>
                <img src={profile.avatar} alt={profile.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
            <p style={{
              fontFamily: 'Caveat, cursive', fontSize: '0.8rem',
              color: 'var(--ink-faint)', marginTop: '0.4rem',
              transform: 'rotate(-1deg)', display: 'block',
            }}>
              ↑ that's me :)
            </p>
          </div>
        )}
      </div>

      {/* Contact strip */}
      <div className="fade-up fade-up-4 contact-strip" style={{
        marginTop: '1.75rem',
        paddingTop: '1.25rem',
        borderTop: '1px dashed var(--border)',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.65rem',
        alignItems: 'center',
      }}>
        {[
          { icon: '✉', label: profile.email,    href: `mailto:${profile.email}` },
          { icon: '⌥', label: 'GitHub',          href: profile.github   },
          { icon: '⬡', label: 'LinkedIn',        href: profile.linkedin },
          { icon: '◉', label: profile.location  },
        ].map((item, i) =>
          item.href ? (
            <a key={i} href={item.href} target="_blank" rel="noopener noreferrer"
              style={{
                fontFamily: 'Kalam, cursive', fontSize: '0.93rem',
                color: 'var(--accent)', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                padding: '4px 10px', border: '1px solid rgba(30,61,114,0.38)',
                transition: 'background 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.background='var(--accent-light)'}
              onMouseLeave={e => e.currentTarget.style.background='transparent'}
            >
              {item.icon} {item.label}
            </a>
          ) : (
            <span key={i} style={{
              fontFamily: 'Kalam, cursive', fontSize: '0.93rem',
              color: 'var(--ink-faint)', display: 'inline-flex',
              alignItems: 'center', gap: '0.35rem', padding: '4px 6px',
            }}>
              {item.icon} {item.label}
            </span>
          )
        )}
      </div>
    </section>
  );
}

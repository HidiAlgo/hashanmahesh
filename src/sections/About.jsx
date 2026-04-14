import React from 'react';
import { profile } from '../data/content';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="fade-up delay-1" style={{ marginBottom: '0.25rem', position: 'relative' }}>
        <span style={{
          position: 'absolute', left: '-2rem', top: '0.6rem',
          fontFamily: 'Caveat, cursive', fontSize: '0.68rem',
          color: 'var(--ink-ghost)', transform: 'rotate(-90deg)',
          transformOrigin: 'center', whiteSpace: 'nowrap', letterSpacing: 1,
          pointerEvents: 'none', userSelect: 'none',
        }}>pg. 01</span>
        <h1 className="about-name">
          Hi, I'm{' '}
          <span className="sketch-ul" style={{ color: 'var(--accent)' }}>
            {profile.name}
          </span>
        </h1>
        <p className="about-role fade-up delay-2">— {profile.role}</p>
        <p className="about-tagline fade-up delay-2">{profile.tagline}</p>
      </div>

      {/* Photo always on its own row on mobile */}
      {profile.avatar && (
        <div className="about-photo-mobile fade-up delay-2">
          <div className="about-photo-frame">
            <img src={profile.avatar} alt={profile.name} />
          </div>
          <span className="about-photo-caption">↑ that's me!</span>
        </div>
      )}

      {/* Bio — full width always */}
      <div className="about-bio fade-up delay-3">
        {profile.bio.split('\n\n').map((para, i) => (
          <p key={i}>{para.trim()}</p>
        ))}
      </div>

      <div className="contact-strip fade-up delay-4">
        <a href={`mailto:${profile.email}`} className="contact-link">✉ {profile.email}</a>
        <a href={profile.github}   target="_blank" rel="noopener noreferrer" className="contact-link">◈ GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">⬡ LinkedIn</a>
        <span className="contact-plain">⊙ {profile.location}</span>
      </div>
    </section>
  );
}
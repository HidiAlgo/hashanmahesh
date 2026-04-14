import React, { useState } from 'react';
import { experience } from '../data/content';

export default function Experience() {
  const [expanded, setExpanded] = useState(0); // first card open by default

  return (
    <section id="experience" className="section">
      <h2 className="section-heading">Experience</h2>
      <div className="section-heading-line" />
      <p className="section-subheading">Where I've worked & what I built 💼</p>

      <div className="exp-list">
        {experience.map((job, i) => (
          <div
            key={i}
            className="note-card exp-card fade-up"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {/* Timeline dot */}
            <div className="exp-dot" />

            {/* Header row — always visible */}
            <div
              className="exp-header"
              onClick={() => setExpanded(expanded === i ? null : i)}
              style={{ cursor: 'pointer' }}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="exp-role-row">
                  <h3 className="exp-role">{job.role}</h3>
                  <span className={`exp-type-badge exp-type-${job.type === 'Internship' ? 'intern' : 'full'}`}>
                    {job.type}
                  </span>
                </div>
                <p className="exp-company">{job.company}</p>
                <div className="exp-meta">
                  <span className="exp-period">{job.period}</span>
                  <span className="exp-sep">·</span>
                  <span className="exp-location">{job.location}</span>
                </div>
              </div>
              <span className={`pub-chevron${expanded === i ? ' open' : ''}`}>▾</span>
            </div>

            {/* Expandable bullets */}
            <div className="pub-abstract" style={{ maxHeight: expanded === i ? 400 : 0 }}>
              <div className="exp-body">
                <ul className="exp-bullets">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="exp-bullet">
                      <span className="exp-bullet-dot">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginTop: '0.75rem' }}>
                  {job.tags.map((t, j) => <span key={j} className="tag tag-accent">{t}</span>)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

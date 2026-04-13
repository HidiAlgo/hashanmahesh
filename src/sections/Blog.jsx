import React from 'react';
import { blogPosts } from '../data/content';

export default function Blog() {
  return (
    <section id="blog" style={{ paddingTop: '1.5rem', paddingBottom: '2rem' }}>
      <h2 className="section-heading">Blog</h2>
      <div className="section-heading-line" />
      <p className="section-subheading">Thoughts, ideas &amp; things I've learned along the way ✍</p>

      {/* Small explanatory note — paper-style */}
      <div style={{
        fontFamily: 'Caveat, cursive',
        fontSize: '0.88rem',
        color: 'var(--ink-faint)',
        fontStyle: 'italic',
        marginBottom: '1.25rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
      }}>
        <span style={{ fontSize: '0.95rem' }}>📎</span>
        Articles published on LinkedIn — click any card to read in full
      </div>

      <div
        className="blog-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.1rem',
        }}
      >
        {blogPosts.map((post, i) => (
          <a
            key={i}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="note-card fade-up"
            style={{
              animationDelay: `${i * 0.07}s`,
              display: 'flex',
              flexDirection: 'column',
              textDecoration: 'none',
              color: 'inherit',
              minHeight: 200,

              /* slight tilt variation for that scattered-on-desk feel */
              transform: i % 2 === 0 ? 'rotate(-0.3deg)' : 'rotate(0.4deg)',
            }}
          >
            {/* Date + platform pill */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '0.55rem',
            }}>
              <span style={{
                fontFamily: 'Special Elite, cursive',
                fontSize: '0.74rem',
                color: 'var(--ink-ghost)',
              }}>
                {post.date}
              </span>
              <span style={{
                fontFamily: 'Kalam, cursive',
                fontSize: '0.72rem',
                color: '#0A66C2',
                background: 'rgba(10,102,194,0.07)',
                border: '1px solid rgba(10,102,194,0.22)',
                padding: '1px 7px',
              }}>
                {post.platform}
              </span>
            </div>

            {/* Title */}
            <h3 style={{
              fontFamily: 'Kalam, cursive',
              fontSize: 'clamp(0.95rem, 2.2vw, 1.05rem)',
              fontWeight: 700,
              color: 'var(--ink)',
              lineHeight: 1.4,
              marginBottom: '0.5rem',
            }}>
              {post.title}
            </h3>

            {/* Excerpt */}
            <p style={{
              fontFamily: 'Kalam, cursive',
              fontSize: '0.88rem',
              color: 'var(--ink-faint)',
              lineHeight: 1.6,
              flex: 1,
              marginBottom: '0.75rem',
            }}>
              {post.excerpt}
            </p>

            {/* Footer row */}
            <div style={{
              borderTop: '1px dashed var(--border)',
              paddingTop: '0.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '4px',
            }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2px' }}>
                {post.tags.slice(0, 2).map((tag, j) => (
                  <span key={j} className="tag" style={{ fontSize: '0.7rem' }}>{tag}</span>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                {post.reactions && (
                  <span style={{
                    fontFamily: 'Kalam, cursive',
                    fontSize: '0.78rem',
                    color: 'var(--ink-ghost)',
                  }}>
                    ♡ {post.reactions}
                  </span>
                )}
                <span style={{
                  fontFamily: 'Kalam, cursive',
                  fontSize: '0.78rem',
                  color: 'var(--ink-ghost)',
                }}>
                  {post.readTime}
                </span>
              </div>
            </div>

            {/* "read on LinkedIn" link strip — shows on hover */}
            <div style={{
              marginTop: '0.55rem',
              fontFamily: 'Caveat, cursive',
              fontSize: '0.82rem',
              color: 'var(--accent)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              opacity: 0.6,
              transition: 'opacity 0.15s',
            }}
              className="blog-read-link"
            >
              <span>↗</span> read full article on LinkedIn
            </div>
          </a>
        ))}
      </div>

      <style>{`
        .blog-grid .note-card:hover .blog-read-link { opacity: 1 !important; }
        .blog-grid .note-card:hover { transform: translateY(-3px) rotate(0deg) !important; }
      `}</style>
    </section>
  );
}

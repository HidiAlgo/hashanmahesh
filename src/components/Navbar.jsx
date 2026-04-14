import React, { useState, useEffect } from 'react';
import { profile } from '../data/content';

const SECTIONS = ['about', 'academics', 'experience', 'certifications', 'publications', 'blog'];

export default function Navbar() {
  const [active, setActive]   = useState('about');
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i]);
        if (el && window.scrollY >= el.offsetTop - 130) {
          setActive(SECTIONS[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    if (!open) return;
    const close = (e) => {
      if (!e.target.closest('.navbar')) setOpen(false);
    };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [open]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  const [first, ...rest] = profile.name.split(' ');
  const last = rest.join(' ');

  return (
    <nav className="navbar" style={{
      boxShadow: scrolled ? '0 2px 14px rgba(0,0,0,0.1)' : 'none',
      transition: 'box-shadow 0.2s',
    }}>
      <div className="navbar-inner">
        {/* Brand */}
        <a
          href="#about"
          className="navbar-brand"
          onClick={e => { e.preventDefault(); scrollTo('about'); }}
        >
          {first} <span className="accent">{last}</span>
          <span className="sub">— portfolio</span>
        </a>

        {/* Desktop nav links */}
        <ul className={`navbar-links${open ? ' open' : ''}`}>
          {SECTIONS.map(s => (
            <li key={s}>
              <a
                href={`#${s}`}
                className={active === s ? 'active' : ''}
                onClick={e => { e.preventDefault(); scrollTo(s); }}
              >
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="nav-toggle"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span style={{ transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ opacity: open ? 0 : 1 }} />
          <span style={{ transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </div>
    </nav>
  );
}

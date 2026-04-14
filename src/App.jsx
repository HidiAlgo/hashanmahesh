import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import About from './sections/About';
import Academics from './sections/Academics';
import Certifications from './sections/Certifications';
import Publications from './sections/Publications';
import Experience from './sections/Experience';
import Blog from './sections/Blog';

function SpiralBinding() {
  return (
    <div className="spiral-binding">
      {Array.from({ length: 22 }).map((_, i) => (
        <div key={i} className="spiral-ring" />
      ))}
    </div>
  );
}

function DoodleDivider({ label }) {
  return (
    <div className="doodle-divider">
      <div className="doodle-divider-line" />
      <span className="doodle-divider-text">✦ {label} ✦</span>
      <div className="doodle-divider-line" />
    </div>
  );
}

function Footer() {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '2rem 1rem',
      fontFamily: 'Caveat, cursive',
      fontSize: '0.9rem',
      color: 'var(--ink-ghost)',
      lineHeight: 2,
    }}>
      <div style={{ fontSize: '1.4rem', marginBottom: '0.25rem', color: 'var(--border)' }}>— ✦ —</div>
      <div>crafted with care · built with React · deployed on GitHub Pages</div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main className="page-container">
        <div className="paper">
          <SpiralBinding />
          <div className="paper-margin-line" />
          <div className="paper-content">
            <About />
            <DoodleDivider label="education" />
            <Academics />
            <DoodleDivider label="— experience —" />
            <Experience />
            <DoodleDivider label="credentials" />
            <Certifications />
            <DoodleDivider label="research" />
            <Publications />
            <DoodleDivider label="writing" />
            <Blog />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

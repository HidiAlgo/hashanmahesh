import React from 'react';
import { blogPosts } from '../data/content';

export default function Blog() {
  return (
    <section id="blog" className="section">
      <h2 className="section-heading">Blog</h2>
      <div className="section-heading-line" />
      <p className="section-subheading">Thoughts, ideas & things I've learned ✍</p>

      <div className="blog-grid">
        {blogPosts.map((post, i) => (
          <a
            key={i}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-card fade-up"
            style={{ animationDelay: `${i * 0.07}s`, background: '#eef1f7', borderColor: '#c4cde0' }}
          >
            <div className="blog-card-top">
              <span className="blog-date">{post.date}</span>
              <span className="blog-platform-badge">{post.platform}</span>
            </div>

            <h3 className="blog-title">{post.title}</h3>
            <p className="blog-excerpt">{post.excerpt}</p>

            <div className="blog-footer">
              <div className="blog-tags">
                {post.tags.map((t, j) => <span key={j} className="tag">{t}</span>)}
              </div>
              <div className="blog-meta">
                {post.reactions && <span className="blog-reactions">♡ {post.reactions}</span>}
                <span className="blog-readtime">{post.readTime}</span>
              </div>
            </div>

            <span className="blog-read-more">read on LinkedIn ↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}
# 📓 Personal Portfolio

A handcrafted pen-and-paper style React portfolio. Built for GitHub Pages with GitHub Actions CI/CD.

## ✨ Features
- Paper & ink aesthetic with ruled lines, spiral binding, and handwritten fonts
- Sections: About, Academics, Certifications, Publications, Blog
- Smooth scroll navigation with active section tracking
- Expandable publication cards
- Fully responsive (mobile-friendly)
- Auto-deploys to GitHub Pages on every push to `main`

---

## 🚀 Getting Started

### 1. Clone & install
```bash
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio
npm install
npm start
```

### 2. Personalise your content
Edit `src/data/content.js` — all your info lives here:
- `profile` — name, role, bio, links, photo
- `academics` — degrees and institutions
- `certifications` — Udemy, LinkedIn, AWS, etc.
- `publications` — research papers with abstracts
- `blogPosts` — LinkedIn articles

### 3. Add your photo (optional)
```js
// src/data/content.js
import avatar from './assets/avatar.jpg';   // put your photo in src/assets/

export const profile = {
  avatar: avatar,   // swap null for this
  ...
};
```

### 4. Add certificate images (optional)
Drop `.jpg`/`.png` files in `src/assets/certificates/` and reference them in the `certifications` array.

---

## 🌐 Deploy to GitHub Pages

### Option A — GitHub Actions (recommended, already set up!)
1. Go to your repo → **Settings → Pages**
2. Set **Source** to **GitHub Actions**
3. Push to `main` — it deploys automatically ✅

### Option B — Manual deploy
```bash
# First, update homepage in package.json:
# "homepage": "https://YOUR_USERNAME.github.io/portfolio"

npm run deploy
```

---

## 🔧 Customisation

### Change fonts
Fonts are loaded in `public/index.html`. Swap any Google Font there and update the CSS variables in `src/index.css`:
```css
--font-hand: 'YourFont', cursive;
```

### Add a new section
1. Create `src/sections/YourSection.jsx`
2. Add data to `src/data/content.js`
3. Import and render in `src/App.jsx`
4. Add the nav entry in `src/components/Navbar.jsx`

---

## 📁 Project Structure
```
portfolio/
├── public/
│   └── index.html          ← Google Fonts loaded here
├── src/
│   ├── assets/             ← Photos, certificate images
│   ├── components/
│   │   └── Navbar.jsx
│   ├── data/
│   │   └── content.js      ← ⭐ ALL YOUR DATA LIVES HERE
│   ├── sections/
│   │   ├── About.jsx
│   │   ├── Academics.jsx
│   │   ├── Certifications.jsx
│   │   ├── Publications.jsx
│   │   └── Blog.jsx
│   ├── App.jsx
│   ├── index.css           ← Global styles & paper theme
│   └── index.js
├── .github/
│   └── workflows/
│       └── deploy.yml      ← CI/CD pipeline
├── .gitignore
├── package.json
└── README.md
```

---

Made with ✏️ and React.

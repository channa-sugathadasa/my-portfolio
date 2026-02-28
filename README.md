# 🎮 MERN Stack Portfolio — Game-Themed Dark UI

A fully responsive, game-inspired developer portfolio built with **React + Vite + Tailwind CSS**.
GitHub dark aesthetic meets cyberpunk game UI. Neon glows, matrix rain, terminal animations, XP bars, and more.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🧱 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite 4 |
| Styling | Tailwind CSS 3, Custom CSS |
| Icons | Lucide React |
| Fonts | Orbitron, Share Tech Mono, Rajdhani |
| Animations | Pure CSS / JS |

---

## 🗂 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # HUD-style navigation with active section tracking
│   ├── Hero.jsx            # Matrix rain canvas + typewriter hero
│   ├── About.jsx           # Terminal-animated bio + stats
│   ├── ContributionGraph.jsx  # GitHub-style contribution heatmap
│   ├── Skills.jsx          # XP bar skill tree with category tabs
│   ├── Projects.jsx        # Game-card project showcase with filters
│   ├── Experience.jsx      # Timeline with expandable job cards
│   ├── Contact.jsx         # API-styled contact form + info
│   └── Footer.jsx          # Minimal footer
├── App.jsx                 # Loading screen, scroll progress, layout
├── main.jsx                # Entry point
└── index.css               # Global styles, scanlines, neon effects
```

---

## ✨ Features

- **Boot screen** with animated loading bar and system log
- **Matrix rain canvas** in hero background
- **Typewriter effect** cycling through developer roles
- **GitHub-style contribution graph** with hover tooltips
- **Skill XP bars** with animated fills by category
- **Project cards** with rarity system (Legendary/Epic/Rare)
- **Expandable timeline** for work experience
- **Terminal-styled contact form** with submit simulation
- **Scroll progress bar** with neon gradient
- **Active section tracking** in navbar
- **Fully responsive** — mobile, tablet, desktop
- **Scanline overlay** for authentic CRT feel
- **Corner bracket decorations** on cards

---

## 🎨 Customization

### Update Your Info
- **Name & role**: `src/components/Hero.jsx`
- **Bio & stats**: `src/components/About.jsx`
- **Skill levels**: `src/components/Skills.jsx` → `skillCategories` array
- **Projects**: `src/components/Projects.jsx` → `projects` array
- **Work history**: `src/components/Experience.jsx` → `experiences` array
- **Contact info**: `src/components/Contact.jsx` → `contactInfo` array

### Connect Real Contact Form
Replace the simulated submit in `Contact.jsx` with a real API call:
```js
// Example with EmailJS:
await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY');

// Or with a custom backend:
await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
});
```

### Deploy
```bash
# Vercel (recommended)
npx vercel

# Or build and deploy to any static host
npm run build
# Upload /dist folder
```

---

## 🎨 Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `gh-bg` | `#0d1117` | Main background |
| `gh-surface` | `#161b22` | Cards, panels |
| `gh-border` | `#30363d` | Borders |
| `gh-cyan` | `#00d9ff` | Primary accent, neon |
| `gh-blue` | `#58a6ff` | Secondary accent |
| `gh-green` | `#39d353` | Success, contribution |
| `gh-purple` | `#bc8cff` | Keywords, highlights |
| `gh-orange` | `#ffa657` | Warnings, values |

---

Made with ❤️ + ☕ + 🎮

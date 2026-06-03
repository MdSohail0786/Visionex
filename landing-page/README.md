# Visionex Landing Page

Production-ready React + Vite landing page.

## Stack
- React 18 + Vite 5
- Plain CSS (no Tailwind)
- Component-based architecture

## Quick Start
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy to Vercel
```bash
npm i -g vercel
vercel --prod
```

## Structure
```
src/
├── components/     # All UI components (each with JSX + CSS)
├── data/           # services.js, testimonials.js
├── hooks/          # useScrollFadeIn
├── App.jsx
├── main.jsx
└── index.css       # Design tokens + global styles
```

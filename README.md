# Srijit Banerjee — Portfolio

Personal portfolio site. React + Vite, no UI framework, no runtime dependencies beyond React.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # serve the production build locally
```

## Editing content

All site content lives in [`src/data/resume.js`](src/data/resume.js) — name, links,
experience, projects, skills, education, leadership. Edit that file; the components read from it.
You shouldn't need to touch JSX to update your resume.

Colors and fonts are CSS variables at the top of [`src/styles.css`](src/styles.css), defined twice:
once under `[data-theme='dark']` and once under `[data-theme='light']`. Change a color in **both**
or one theme will drift.

## Assets

- `public/headshot.jpg` — cropped from `~/Downloads/SrijitBanerjee.PNG` to 640x800. Replace with
  any 4:5 portrait at the same path.
- `public/Srijit_Banerjee_Resume.pdf` — copied from `~/Downloads/2026 Jobs/`. **This is a manual
  copy, not a symlink** — re-copy it here when you update your resume, or the download button
  serves a stale PDF.

## Theming

Defaults to dark, falls back to the OS preference on first visit, then remembers the choice in
`localStorage` under `theme`. An inline script in [`index.html`](index.html) applies the theme
before first paint to avoid a flash; it must stay inline and before the app bundle.

## Deploying

The build is fully static, so anything that serves files works.

**Netlify / Vercel:** point at this directory. Build command `npm run build`, publish directory `dist`.

**GitHub Pages:** if you deploy to a project repo (`github.com/srijit316/<repo>`), set `base`
in [`vite.config.js`](vite.config.js) to `'/<repo>/'` first — otherwise assets 404. If you deploy
to `srijit316.github.io`, leave `base` as `'/'`.

## Notes

- Node 18 is what this was built against; Vite is pinned to 5.x because Vite 6+ requires Node 20+.
- Scroll animations and the pulsing hero dot are disabled under `prefers-reduced-motion`.

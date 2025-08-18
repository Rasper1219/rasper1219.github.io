# Ryan Portfolio (Astro + React Islands + Tailwind)

Choices: Astro (static), React islands for interactive bits, Tailwind, MDX-ready. Dark, neo‑retro Swiss vibe. Deployed to GitHub Pages.

## Quick start
```bash
npm i
npm run dev
```

## Configure
- Edit `src/data/siteConfig.ts` (your name, email, LinkedIn, GitHub).
- For **GitHub Pages**:
  - If deploying to `username.github.io/repo-name/`, set `base: '/repo-name/'` in `astro.config.mjs` and in `SITE.base`.
  - If deploying to `username.github.io`, keep `base: '/'`.
  - Set `site` in `astro.config.mjs` to your full URL (improves SEO/sitemaps).
- To enable **download counting** with privacy-friendly analytics:
  - Create a free Plausible site for your domain (e.g., `username.github.io`), then set `SITE.analytics.plausibleDomain` to that string.
  - The "Resume Download" button will then emit a custom event.

## Pages
- `/` Home with CTA + download résumé (island)
- `/projects` Placeholder grid
- `/paper` Paper abstract page
- `/about` About + photos placeholders
- `/resume` PDF download + print page placeholder
- `/contact` Email + LinkedIn only
- `/writing` Blog/notes (later)

## React Islands
- `ResumeDownloadButton` (client:load): emits a Plausible "Resume Download" event, falls back to local debug counter.

## Deploy to GitHub Pages
1. Create a repo and push.
2. Update `astro.config.mjs` `site` and `base` per above.
3. Ensure Actions are enabled; the included workflow will build & deploy to Pages on pushes to `main`.

## Quality
- Fast by default (Astro), accessible color contrast, keyboard friendly.
- No tracking unless you enable Plausible.

## Next steps
- Replace placeholders with real content.
- Add screenshots to projects.
- Consider a future light theme + toggle.
- Optional: OG image automation later.

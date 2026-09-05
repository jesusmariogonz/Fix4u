# Lighthouse

This project targets Lighthouse scores of ≥95 for Performance, SEO,
Accessibility, and Best Practices (via `next/image`, `next/font` with
`display: swap`, minimal client JS, no render-blocking scripts, and
semantic HTML with a single `<h1>` and per-section `<h2>`s).

**Local dev server numbers are not representative** — `next dev` runs
unoptimized, unminified code with hot-reload overhead, so running Lighthouse
against `localhost:3000` in dev mode will report misleadingly low scores.
There is no live URL yet in this sandbox, so scores have not been measured
here.

## How to measure once deployed

1. Deploy the project to Vercel (see README.md).
2. Run a production build check locally if you want a rough sanity check
   before deploying:
   ```bash
   npm run build && npm run start
   npx lighthouse http://localhost:3000 --view
   ```
3. Once deployed, run Lighthouse against the real Vercel URL:
   ```bash
   npx lighthouse https://<your-project>.vercel.app --view
   ```
   The `--view` flag opens the HTML report in your browser automatically.
4. For an official/lab-independent measurement, you can also use
   [PageSpeed Insights](https://pagespeed.web.dev) with the live URL, which
   also reports field data (CrUX) once enough real traffic accumulates.

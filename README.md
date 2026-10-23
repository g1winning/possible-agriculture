# Possible Agriculture — website

The static site for **possibleagriculture.com.au** — biological farm consulting and biochar supply, Australia.

Built with Astro + Tailwind, deployed to GitHub Pages, edited as Markdown.

---

## What's in this folder

```
site/
├── astro.config.mjs        Build config (site URL, integrations)
├── tailwind.config.mjs     Brand-locked design tokens (colour, type, spacing)
├── package.json            Dependencies
├── design-system/
│   ├── MASTER.md           Single source of truth for visual decisions
│   └── pages/              Page-specific overrides (if any)
├── public/
│   ├── CNAME               possibleagriculture.com.au — for GitHub Pages
│   ├── robots.txt
│   └── images/, pdfs/      Static assets
├── src/
│   ├── layouts/            Page layouts (BaseLayout, etc.)
│   ├── components/         Reusable UI components
│   ├── pages/              Each .astro file = a URL route
│   ├── content/            Markdown collections (library entries, case studies)
│   ├── lib/                Helper modules (claims register, citations)
│   └── styles/global.css   CSS custom properties + base styles
└── .github/workflows/
    └── deploy.yml          GitHub Pages deploy on push to main
```

---

## Running locally

Once Node 20+ is installed:

```
cd site
npm install
npm run dev
```

The site will be available at <http://localhost:4321>.

## Building for production

```
cd site
npm run build
```

The built static site lands in `dist/` — that's what gets deployed to GitHub Pages.

To preview the production build locally:

```
npm run preview
```

---

## How to edit content

### Editing a page's copy

Most page copy lives directly in the `.astro` file under `src/pages/`. Open the file in any text editor, change the text between the tags, save. The dev server will hot-reload automatically.

### Adding a library entry

The library index is `src/data/library.json`, one object per document (title, authors or publisher, source group, year, pages, file size, topic, summary, the longer note behind "More about this document", keywords, `href` for a PDF held under `public/pdfs/library/`, and `sourceUrl` for the original). Add an object, drop the PDF in `public/pdfs/library/` with the same slug, and the page picks it up on the next build. The topic and source lists at the top of the file set the filter chips and the dropdown. The build pipeline that produced the October 2026 index lives in `../10-library-ingestion-system/` (see `LIBRARY-ACQUISITION-PLAN-OCT2026.md`).

### Adding a case study

Same pattern — add a `.md` file to `src/content/case-studies/`.

### Changing the brand palette or typography

Edit `tailwind.config.mjs` (the source of truth) and `src/styles/global.css` (the CSS custom properties). Don't change these without updating `design-system/MASTER.md` first.

---

## Deploying

### To GitHub Pages

1. Push the repo to GitHub.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. The workflow at `.github/workflows/deploy.yml` will build and deploy on every push to `main`.
4. The `public/CNAME` file tells GitHub Pages to serve the site at `possibleagriculture.com.au`.

### DNS

When DNS is ready, point:
- `www.possibleagriculture.com.au` CNAME → `<github-username>.github.io`
- Apex `possibleagriculture.com.au` A → GitHub Pages IPs (185.199.108.153 / .109.153 / .110.153 / .111.153)

Enable **Enforce HTTPS** in GitHub Pages settings after DNS is propagated.

---

## Content rules (always)

Every quantitative claim on the site must trace back to `/defensible-claims-register.md` in the parent folder. The design-system file at `design-system/MASTER.md` §13 lists the binding content rules — read it before editing.

---

## Reference docs

- `design-system/MASTER.md` — visual & component rules.
- `CLAUDE-BUILD-NOTES.md` — what's built, what's deferred.
- `AI-IMAGE-PROMPTS.md` — slot-by-slot prompts for Gemini / Nano Banana.
- `LIBRARY-EXPANSION-PLAN.md` — NotebookLM workflow for new library entries.
- `INSIGHTS-ARTICLE-PLAN.md` — first 12 article topics for the SEO content engine.
- `../WEBSITE-BUILD-BRIEF.md` — original brief.
- `../TRANSITION-HANDOFF.md` — project state.
- `../defensible-claims-register.md` — binding numbers + citations.
- `../.claude/brand-voice-guidelines.md` — voice rules.
- `../page-rewrites.md` — page-by-page content source (v1 — superseded by current site).

# Scrutiny pass — issues found by Claude (June 2026)

Run after the visible-rendering fixes Luca flagged. This is everything else I caught while auditing the site end-to-end. Each item has a status: ✅ fixed already, 🛠 needs your input, ⚠️ flagged for the next pass.

---

## Visible-render issues (the ones you flagged) — all fixed

| Issue | Status | What I changed |
|---|---|---|
| Yellow CTA button text invisible until hovered | ✅ | `a:not(.btn)` scoping in `global.css` — link-colour rule no longer cascades into buttons. |
| Heading text invisible on dark sections (numbers strip, enquiry rail) | ✅ | Removed the explicit `color` on `h1-h6` base rule so headings inherit `.on-dark` white. |
| "luca@" truncated in footer | ✅ | Full address rendered, layout adjusted to wrap break-all. |
| "possible agriculture" lowercase wordmark | ✅ | Title-Case "Possible Agriculture" in header, footer, brochure-hero on `/biochar`. |
| "Two decades" / "20+ years" specific-year claims | ✅ | Softened to "years in the field" / "founder-led, field-evidenced" everywhere. |
| Toothpaste image (IMG_7004.jpg derivatives) | ✅ | Removed from `/biochar` and segment slots; product variant tiles now use brand-styled SVG placeholders pending AI replacement. Underlying .jpg files still exist in `public/images/product/` (mount permissions blocked deletion — list of files to delete in Finder is in `AI-IMAGE-PROMPTS.md`). |
| Services / Natural Pools structure | ✅ | Services nav is now a dropdown with 6 items including Natural Pools as a peer service rather than a footer link. Mobile menu uses an expandable details pattern. |
| Compost library merged into main library | ✅ | Three compost-biochar entries added with farmer-translation summaries; `/library/compost` redirects to `/library`; the topic filter handles the compost subset. |
| Indigenous burning practices framing | ✅ (draft) | Woven into `/about`, `/biochar`, `/services/forest-management`. **Needs your review of wording before publication** — see below. |
| About-page CV/expertise dimension | ✅ | Six-card grid covering biochar production, biological farming/agronomy, silvaculture, environmental remediation, livestock nutrition, and carbon farming. |

---

## Things only you can resolve

### 🛠 1. Indigenous burning framing — review the wording

I've drafted the framing on three pages:

- `/about` — a "Provenance — In the ancient way" section.
- `/biochar` — a paragraph in the "How it's made" section.
- `/services/forest-management` — a "The deeper context" section.

The wording is respectful and treats the connection as continuation-not-invention, with an acknowledgment of Country. **But I'm not the right person to sign off on the wording.** Two specific things to check:

- **Whether you want the Acknowledgement of Country statement on each page or only on `/about`.** Currently it's on `/about` and `/services/forest-management`. Some Australian businesses prefer it once per site; some prefer it on every page.
- **The claim that "the majority of Australia's soil organic carbon was built through Aboriginal cultural burning"** is currently stated without an inline citation. The library expansion plan flags this as a critical paper to find — once we have a peer-reviewed source, the claim becomes citation-grounded. Until then, the strong framing relies on consensus knowledge.

If you want me to soften the wording, strengthen it, or restructure it, send back the version you'd like and I'll propagate.

### 🛠 2. CV detail on `/about`

The CV section is structured as six expertise areas but uses general framing ("After enough time in the field..."). It needs your actual:

- **Years in biochar production** (rough is fine — even a "since [year]" anchor).
- **Years in biological farming consulting** (same).
- **Any named credentials, courses, or formal qualifications** you'd want to list.
- **2–4 specific notable projects** (with permission to name them) — e.g., a council parkland trial, a feedlot pilot, a notable forest-management engagement.
- **Industry affiliations** — ANZBI? Carbon Farmers of Australia? Any committee or board positions?

Send me a brain-dump and I'll convert it into clean copy that fits the existing structure.

### 🛠 3. ABN

`src/lib/site.ts` has `abn: ''` — flagged with a TODO. Send me the ABN and I'll populate it; it appears in the footer and improves AU local-SEO trust signals.

### 🛠 4. NotebookLM library expansion — sign-off on approach

See `LIBRARY-EXPANSION-PLAN.md`. The workflow is documented; the affirmative-utility test gate is in place. I need:

- Your `nlm login` confirmation in terminal (one-time auth).
- A list of 5–10 priority papers you'd like added next (URL/DOI/title).
- Especially: the cultural-burning + soil-carbon paper(s) so we can citation-ground the framing in section 1 above.

### 🛠 5. Insights / articles — confirm the 12-article topic list

See `INSIGHTS-ARTICLE-PLAN.md`. I've drafted 12 article topics with primary keywords, audiences, target pages, and rough effort estimates. I need your sign-off on:

- Which topics to write (strike any that don't fit).
- The production order (or a different order).
- Whether you'd like me to draft article 1 — application rates — as the template piece, so we can agree on tone before producing the rest.

### 🛠 6. AI images

See `AI-IMAGE-PROMPTS.md`. 30+ image slots with paste-ready prompts for Gemini / Nano Banana Pro / Imagen / Midjourney. Generate them at your pace; the file paths are already wired in the site so swapping in real images is a copy-into-folder operation.

Three slots are the highest priority because they're currently SVG placeholders that obviously say "AI image needed":

- `variant-powder.svg` → `variant-powder.jpg`
- `variant-granules.svg` → `variant-granules.jpg`
- `variant-mix.svg` → `variant-mix.jpg`

The about-page portrait of you at the kiln is also high priority — currently using a landscape, which works visually but isn't the founder-present asset the brand calls for.

---

## Items I caught and fixed during the scrutiny pass

| Item | Status | Fix |
|---|---|---|
| `apple-touch-icon.png` referenced in BaseLayout but file doesn't exist (would 404) | ✅ | Removed the apple-touch-icon link tag; SVG favicon is sufficient. |
| Footer "Natural pools" link removed (now in Services dropdown) | ✅ | Replaced with About link in footer secondary. |
| Insights collection warning at build time | ⚠️ | Cosmetic — Astro warns when a content collection is empty. Disappears as soon as the first article publishes with `draft: false`. Safe to ignore. |
| Sitemap doesn't include /insights | ⚠️ | Sitemap auto-generates from pages that exist at build time. `/insights` is in the sitemap; individual article pages will be added automatically when published. |

---

## Items flagged for the NEXT scrutiny pass (after these revisions land)

### Mobile-viewport spot-checks

I've verified the layouts compile cleanly. I have not yet visually inspected the rendered pages at 375px on a real device (or in DevTools). The CSS is mobile-first and the components were built with the 375 / 640 / 768 / 1024 / 1280 breakpoints in mind, but real-device verification needs your eyes on a phone.

### Form delivery

The contact form posts to `https://formsubmit.co/luca@possibleagriculture.com.au`. **First submission triggers an activation email FormSubmit sends to that address — you must click the link in that email before any subsequent submissions actually deliver.** Worth doing now while the site is in dev, so the form is hot the moment the site goes live.

### Citation tooltips on mobile

The `<Citation>` component renders an inline source mark with a hover tooltip on desktop. On mobile (touch), tapping the source mark triggers `:focus-within` to show the tooltip — but the UX is less obvious than on desktop. If users on phone are missing the citations, we'll need a different mobile pattern (probably a small `i` icon + tap-to-reveal).

### Analytics

Not wired. When you're ready: GA4 measurement ID drops into a `<script>` block in `BaseLayout.astro`, plus Search Console verification (either via meta tag or DNS TXT). This is a 10-minute job whenever you say go.

### Performance budget

Lighthouse hasn't been run yet — needs to be done against the actual production build on staging. Targets per the design system MASTER: Performance, Accessibility, Best Practices, SEO each ≥ 90.

---

## What I think the next session should tackle (in order)

1. You confirm the indigenous-burning wording is right (or send revisions).
2. You send the CV brain-dump for the About page expansion.
3. You run NotebookLM source acquisition on the 9 suggested gap papers in `LIBRARY-EXPANSION-PLAN.md` and we add the strongest 4–6 new entries.
4. You generate the highest-priority AI images (three product variants + about portrait).
5. We draft Insights article 1 — "How much biochar do I add per acre / per hectare?" — as the template piece for the article engine.
6. We run a full pre-launch checklist: real-device mobile pass, form delivery test, Lighthouse audit, sitemap re-submit to Search Console.

Then DNS cutover, with your express sign-off.

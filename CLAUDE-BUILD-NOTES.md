# Build notes — first delivery (18 May 2026)

This is the v1 cut of the Possible Agriculture website rebuild. Built end-to-end by Claude on 18 May 2026 from the WEBSITE-BUILD-BRIEF, TRANSITION-HANDOFF, page-rewrites v2, brand-voice v2, defensible-claims-register v2, brochure-design-spec, and the UI/UX Pro Max design-intelligence skill.

## What's in this commit

**21 pages.** Home · Biochar hub · Biochar/pricing · Biochar/turf-and-golf · Biochar/livestock-and-dairy · Biochar/councils · Biochar/farmers · Services hub · Services/biological-farming · Services/forest-management · Services/carbon-farming · Services/water-treatment · Library hub · Library/compost · Case-studies index · Case-studies/[slug] (Rebbeck + Biochar Now) · About · Contact · Contact/thanks · Natural Pools · 404.

**17 reusable components.** BaseLayout · Header · Footer · Hero · Section · Button · CardSegment · CardLibrary · CardCase · Citation (with tooltip + source URL) · ClaimCallout · FAQ (with FAQPage JSON-LD) · EnquiryForm (FormSubmit-wired) · Stamp · QuadBullets · LibraryFilter (live search + tag filter) · TrustStrip · Prose.

**13 library entries** with farmer-translation summaries replacing the original academic titles. Yu 2013 (water), Joseph 2021 (mechanisms), Sørmo 2021 (PFAS), Leng & Preston (cattle), Rebbeck 2023 (dairy), Huang 2020 (leaching), ANZBI 2020 (sector overview), USGA 2018 (the document people misquote), biochar-2× soil C, feed supplements, IBI compost, Kelpie Wilson shelterbelt, vet review.

**2 case studies** properly attributed. Rebbeck 2023 South Australia dairy (with the bridge line — Mara Seeds was the product used). Biochar Now California golf course (the 50% irrigation figure correctly attributed to Biochar Now, not Possible Agriculture).

**Typed claims register** at `src/lib/claims.ts` — every quantitative claim in the site resolves through one named lookup so a single edit propagates everywhere.

**Legacy URL redirects** at the `astro.config.mjs` level. `/home`, `/contact-us`, `/farmers-and-feedlotters`, `/turf-growers-golf-courses`, `/councils`, `/our-services/forest-managment` (typo), and a few others all redirect cleanly to their new homes.

**SEO defaults.** Unique title and meta description per page. JSON-LD Organization on every page; Product on home + biochar; LocalBusiness on contact; FAQPage on every FAQ block. Sitemap auto-generated at `/sitemap-index.xml`. robots.txt. CNAME pointing at the production domain. Open Graph and Twitter card meta.

**Accessibility defaults.** Skip-to-main link. One H1 per page. Focus rings visible (3px bush-gold, 2px offset). 44px+ touch targets on every interactive element. `prefers-reduced-motion` collapses transitions to 0.01s. All images have descriptive alt text. Form labels properly associated.

**ACL §18 verification done.** No "world's best" / "cheapest" / "best quality" unqualified anywhere on the site. Every cost claim is qualified (feed-grade activated, on-farm flame-curtain method, among the highest in the literature). The 50% irrigation figure appears only as a Biochar Now attribution. The 12–50% Joseph 2021 figure is correctly labelled as N₂O + CH₄, never "VOC emissions". The Rebbeck dairy bridge line is on every reference (trial used Mara Seeds; Possible Ag is higher-grade; replication pending). "Forest Management" spelled correctly, with a redirect from the legacy typo URL. m³ throughout. Phone formatted as `0457 341 053` with `tel:+61457341053`.

## What's NOT in this commit

- **AI-generated hero photography.** The site ships with existing brand photography from `04-images-and-screenshots/`. The image filenames are semantically named (`home-pasture-golden-hour.jpg`, `kiln-flame-curtain.jpg`, etc.) so AI-generated replacements can be dropped in by overwriting files in `public/images/hero/`, `public/images/segments/`, and `public/images/product/` — no rebuild needed.
- **Per-m³ pricing.** The `/biochar/pricing` page ships with the "Request a quote" structure, ready for actual prices to be slotted in when ready. One Markdown-style edit to swap from request-flow to price-table.
- **Joseph 2021 PDF.** The paper is referenced via DOI link (its sourceUrl) because the PDF isn't in the project folders. Add it later to `public/pdfs/library/joseph-2021-how-biochar-works.pdf` and uncomment the `pdfFile` line in `src/content/library/joseph-2021-mechanisms.md`.
- **ABN in footer.** Currently empty in `src/lib/site.ts` (`abn: ''`) — populate with Luca's actual ABN to show it in the footer.
- **GA4 / Search Console.** Not wired up. When ready, add the GA4 measurement ID to a `<script>` block in `BaseLayout.astro`, and verify Search Console via the same head meta or a DNS TXT record.
- **FormSubmit activation.** The contact form posts to `https://formsubmit.co/luca@possibleagriculture.com.au`. First submission triggers an activation email to that inbox — Luca must click the link before subsequent submissions are delivered. Until that's done, the form looks like it's working but the email won't arrive.

## How to run locally

```
cd site
npm install
npm run dev
```

Open <http://localhost:4321> — the site hot-reloads as files change.

To build for production:

```
npm run build
```

The static site lands in `dist/`. Preview the production build with `npm run preview`.

## How to deploy to GitHub Pages

1. Initialise a Git repo at the `site/` folder, push to GitHub.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. The workflow at `.github/workflows/deploy.yml` runs on every push to `main`.
4. After the first successful deploy, set the custom domain at **Settings → Pages → Custom domain** to `possibleagriculture.com.au`. The `public/CNAME` file is already in place.
5. Once DNS is pointing at GitHub Pages, tick **Enforce HTTPS**.

## Sanity-check checklist (run before any DNS cutover)

- [ ] Walk every page on the staging URL. Especially: home, biochar, biochar/pricing, library, contact.
- [ ] Tab through the homepage with the keyboard only — focus rings visible everywhere.
- [ ] Open the site on a phone. Hero readable above fold. CTA tappable.
- [ ] Submit the contact form once. Click the FormSubmit activation email when it arrives.
- [ ] Run a Lighthouse audit. Performance/Accessibility/Best-Practices/SEO each ≥ 90.
- [ ] Open the sitemap-index.xml — confirm all expected URLs listed.
- [ ] Check the citation tooltips on the homepage "The numbers" section actually appear on hover/focus.
- [ ] Test the library filter — search "PFAS", select Turf topic, etc. — works without page reload.

Once Luca signs off, then and only then change DNS.

---

*All terminal commands in this file are intentionally formatted as copyable code blocks per Luca's preference.*

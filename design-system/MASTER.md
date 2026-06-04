# Possible Agriculture — Design System (MASTER)

**Built:** 18 May 2026
**Status:** v1 — locked for the website build phase. Any deviation must be raised before implementing.
**Inputs synthesised:**
- Brochure design spec (`/brochure-design-spec.md`) — the locked brand visual system.
- Brand voice guidelines v2 (`/.claude/brand-voice-guidelines.md`) — voice constants + tone flexes.
- UI/UX Pro Max design-system query (run 18 May 2026): "agriculture biochar commerce sustainable australian rural earth-toned founder-led".
- UI/UX Pro Max SKILL.md Quick Reference (Priority 1–10 rules).
- WEBSITE-BUILD-BRIEF.md §5 (site architecture).
- defensible-claims-register v2 (binding numbers + citation handling).

**How to use this file:**
- When building any page, **read this MASTER.md first.**
- Then check `design-system/pages/<page-slug>.md` for page-specific overrides; if it exists, its rules take precedence within that page only.
- If neither answers a question, default to the UI/UX Pro Max Quick Reference (Priority order 1 → 10).
- Do not introduce a colour, font, shadow, radius, or motion value outside this file without a design-system PR (update this file first, then implement).

---

## 1. Brand essence (one-line, anchors every visual decision)

> Biology-first farming, made practical for Australian conditions — by people who'd rather show you the kiln than send you a pitch deck.

If a visual choice doesn't pass the test of feeling *grounded, founder-present, and biology-first*, it belongs to a different brand.

---

## 2. Style direction

**Primary style:** **Organic Biophilic** (UI/UX Pro Max query result) **layered with Editorial Trust & Authority** (UI/UX Pro Max landing-pattern result for commerce-intent with substantiated claims).

The site reads as:
- **Editorial-grounded** — long-form copy in clean columns, the founder's voice carried through, citations visible but not interrupting flow.
- **Photo-led** — landscape photography of Western Victoria does the heavy lifting; UI chrome stays out of the way.
- **Confidently earth-toned** — the brochure's bush palette anchors every page; pure greens and SaaS-tech colours are off-limits.
- **Premium without gloss** — generous whitespace, large type, restrained motion. Never neon, never crypto-pink, never "biotech" mint.

### 2.1 Anti-patterns (Do not use)

| Forbidden | Why |
|---|---|
| Bright primary colours (`#FF0000`, `#0000FF`, `#00FF00`) | Kills the bush character — brand reads as cartoon, not paddock. |
| Pastels (`#FFE5E5`, `#E5F0FF`) | Same reason — too saccharine for a working-country brand. |
| "Biotech green" / mint (`#00C896`, `#10B981`) | Wrong category. The brand is ancient method + science, not SaaS. |
| AI purple/pink gradients | The UI/UX Pro Max anti-pattern list flags this explicitly. |
| Stock photography | The brand's authenticity is the differentiator. |
| Emoji used as icons | Use SVG (Lucide / Heroicons). |
| Drone-shot landscapes | The brand reads at human eye level. |
| Glassmorphism / blur backgrounds | Wrong vocabulary — too "tech app". |
| Round avatar circles "Our Team" grid | Founder-present is one founder, not a corporate page. |
| Multiple H1s per page | One H1 per page — SEO and a11y rule. |

---

## 3. Colour system

All colours are anchored to the brochure design spec §2 (locked palette). Hex values are working estimates pending colour-pick from the InDesign source files; close enough for production.

### 3.1 Core tokens

| Token | Hex | WCAG AA on `paper` | WCAG AA on `ink` | Role |
|---|---|---|---|---|
| `--ink` | `#0E0E0E` | 21:1 ✅ | — | Primary text, display headings, wordmark |
| `--paper` | `#FFFFFF` | — | 21:1 ✅ | Page background, reverse text on dark |
| `--bark` | `#1F2820` | 14.8:1 ✅ | 1.4:1 ❌ (use for backgrounds only) | Dark hero overlays, footer, audience strips |
| `--bush-gold` | `#D9A65A` | 2.6:1 ❌ (large text + non-text only) | 8.1:1 ✅ | Primary CTA fills (dark text), warm accents, in-line emphasis on dark backgrounds |
| `--sage` | `#7A8265` | 3.7:1 (large text only) | 5.7:1 ✅ | Secondary buttons, sub-headings, divider rules |
| `--eucalypt` | `#3D4B36` | 9.8:1 ✅ | 2.1:1 ❌ | Body text on warm tints, dark accents, hover states |
| `--sky` | `#A4B5BD` | 2.6:1 ❌ | 8.1:1 ✅ | Cool background tints, secondary on dark, decorative |
| `--umber` | `#6B3F26` | 8.6:1 ✅ | 2.4:1 ❌ | Warm body text on cream tints, citation marks, footnotes |
| `--char` | `#0E0E0E` | (alias of `--ink`) | — | Product photography matte; same value, separate semantic name |

### 3.2 Semantic tokens (use these in components, not raw hex)

| Semantic | Resolves to | Where it's used |
|---|---|---|
| `--color-bg` | `--paper` (`#FFFFFF`) | Default page background |
| `--color-bg-tint` | `#FAF7F1` (warm off-white, derived) | Section alternates, card backgrounds on light pages |
| `--color-bg-dark` | `--bark` (`#1F2820`) | Hero overlays, footer, audience strips |
| `--color-text` | `--ink` (`#0E0E0E`) | Body copy, headings |
| `--color-text-muted` | `#4A4A47` (warm slate, derived from --ink at 70%) | Secondary text, captions, metadata |
| `--color-text-inverse` | `--paper` (`#FFFFFF`) | Text on dark backgrounds |
| `--color-accent` | `--bush-gold` (`#D9A65A`) | Primary CTA, in-text highlight, hover under-line |
| `--color-accent-ink` | `--ink` on `--bush-gold` (8.1:1 ✅) | Text inside CTA buttons |
| `--color-secondary` | `--sage` (`#7A8265`) | Secondary buttons, headings on dark, link colour on light |
| `--color-rule` | `--sage` at 40% | Divider rules, table borders |
| `--color-citation` | `--umber` (`#6B3F26`) | Citation marks, footnote callouts, source labels |
| `--color-success` | `#3D4B36` (`--eucalypt`) | Form success state (kept on-brand, not SaaS-green) |
| `--color-error` | `#9B3A2E` (custom dark terracotta) | Form error state, ACL §18 disclaimers |
| `--color-focus` | `--bush-gold` outlined | Keyboard focus ring (3px solid, offset 2px) |

### 3.3 Contrast rules (binding)

- **Body text (16px+):** minimum 4.5:1 — `--color-text` on `--color-bg` is 21:1 ✅, `--color-text-muted` on `--color-bg` is 9.5:1 ✅.
- **Large text (24px+):** minimum 3:1 acceptable but aim higher.
- **Non-text UI (borders, focus rings, icons):** minimum 3:1.
- **CTA button text:** verified 8.1:1 (`--ink` on `--bush-gold`).
- **Citation/source text:** never below 7:1 — use `--ink` not `--color-text-muted` for footnote text.

### 3.4 Dark surfaces (footer, audience strips, hero overlays)

- Background: `--bark` (`#1F2820`).
- Body text: `--paper` (`#FFFFFF`) — 14.8:1 ✅.
- Secondary text: `--sky` (`#A4B5BD`) — 8.1:1 ✅.
- Accent: `--bush-gold` (`#D9A65A`) — 8.1:1 ✅, used for inline emphasis and link underlines.
- Borders: rgba(255,255,255,0.12).

---

## 4. Typography

Brand-locked per brand-voice §10b.2 and brochure-design-spec §3. Free-tier Google Fonts to keep the site editable by Luca without licensing complexity.

### 4.1 Faces

| Role | Family | Weights loaded | Why |
|---|---|---|---|
| **Display** | Montserrat | 800 (Black), 700 (Bold), 600 (SemiBold) | The wordmark face. Geometric, confident, founder-stated. |
| **Body** | Open Sans | 400 (Regular), 600 (SemiBold), 700 (Bold), 400 italic | Humanist, comfortable at long-form length, generous x-height. |

**Why these specifically:** the brochures already use them. The website inheriting the same pair makes the entire brand feel like one ecosystem. Free tier means Luca can edit forever without breaking type licensing.

### 4.2 Type scale (mobile-first)

Pixel values are mobile; desktop scales noted where they diverge. Line-height in absolute pixels for tight control.

| Style | Family | Mobile px / lh | Desktop px / lh | Weight | Tracking | Use |
|---|---|---|---|---|---|---|
| `display` | Montserrat | 56 / 60 | 96 / 96 | 800 | -1% | Hero headlines only |
| `h1` | Montserrat | 40 / 44 | 64 / 68 | 800 | -1% | Page H1 (one per page) |
| `h2` | Montserrat | 28 / 34 | 40 / 46 | 700 | 0 | Section headings |
| `h3` | Montserrat | 22 / 28 | 28 / 34 | 700 | 0 | Sub-section, card titles |
| `h4` | Montserrat | 18 / 24 | 20 / 26 | 600 | 0 | Tertiary headings, table headers |
| `eyebrow` | Montserrat | 12 / 18 | 14 / 20 | 600 | +10% UPPER | Section eyebrows, audience strips, "PRODUCED IN WESTERN VICTORIA" stamp |
| `body-lg` | Open Sans | 19 / 30 | 20 / 32 | 400 | 0 | Lead paragraphs, intro copy |
| `body` | Open Sans | 17 / 28 | 17 / 28 | 400 | 0 | Default body |
| `body-sm` | Open Sans | 15 / 24 | 15 / 24 | 400 | 0 | Captions, secondary info |
| `caption` | Open Sans | 13 / 20 | 13 / 20 | 400 | 0 | Image captions, footnotes |
| `citation` | Open Sans italic | 14 / 22 | 14 / 22 | 400 italic | 0 | In-text citation marks, source attribution |
| `quote` | Open Sans italic | 22 / 34 | 26 / 38 | 400 italic | 0 | Pull-quotes, founder asides |
| `mono` | (system mono fallback) | 14 / 22 | 14 / 22 | 400 | 0 | m³ unit blocks, numerical tables |

**Body min 17px** (above the UI/UX Pro Max minimum of 16) — the site is information-heavy and the audience often reads on phone while on-farm. Comfortable reading wins over compact layout.

### 4.3 Hierarchy rules

- **One H1 per page** (UI/UX Pro Max critical rule + SEO).
- **Sequential heading levels** — never h2 → h4. (UI/UX Pro Max `heading-hierarchy`.)
- **Section headings are sentence case** ("Biochar for councils and parklands", not "Biochar For Councils And Parklands") — per brand-voice §6.
- **Eyebrows above sections** for visual rhythm: 12px uppercase Montserrat 600, +10% tracking, `--sage` colour — sits 8px above an `h2`.
- **Line length:** body limited to 65–75 characters (set via `max-w-prose` Tailwind + custom).
- **Display/H1 width:** allow longer measure (up to 90ch) so headlines don't break awkwardly.

### 4.4 Citation pattern (binding)

Every quantitative claim from `defensible-claims-register.md` v2 must be cited inline. The citation pattern:

- In-line: *"…over 2.7× its dry weight in water (Yu et al., 2013)."*
- Hover/tap: full citation appears as a tooltip on desktop and a footnote-style detail on mobile (component: `<Citation>`).
- Source links in citations open in a new tab.
- The "(Yu et al., 2013)" gets `--color-citation` (`--umber`) colour and a 1px dotted under-rule.

---

## 5. Spacing & layout

### 5.1 Spacing scale

8-point baseline. Tokens align to Tailwind's default `spacing` scale but with project-specific section-level tokens.

| Token | px | Use |
|---|---|---|
| `--space-1` | 4 | Hair-line gaps, icon nudges |
| `--space-2` | 8 | Tight clusters (icon + label) |
| `--space-3` | 12 | Form field internal padding |
| `--space-4` | 16 | Card internal padding (mobile) |
| `--space-5` | 24 | Default text block gap |
| `--space-6` | 32 | Card internal padding (desktop), inter-element |
| `--space-7` | 48 | Sub-section gap |
| `--space-8` | 64 | Inter-section gap (mobile) |
| `--space-9` | 96 | Inter-section gap (desktop) |
| `--space-10` | 128 | Hero internal vertical padding |

### 5.2 Container widths

| Container | Max-width | Use |
|---|---|---|
| `prose` | 72ch (~640px at body size) | Body copy, narrative pages (`/about`, library entries) |
| `narrow` | 768px | Single-column content with side notes |
| `default` | 1120px | Most content sections |
| `wide` | 1280px | Image-led sections, segment card grids |
| `full` | 100% | Hero full-bleed sections, footer |

### 5.3 Breakpoints

UI/UX Pro Max systematic breakpoints: 375 / 640 / 768 / 1024 / 1280 / 1440. Tailwind defaults align except 375 (which is mobile baseline, no breakpoint needed):

| Tailwind | px | Device class |
|---|---|---|
| (base) | 0–639 | Small phone |
| `sm:` | 640+ | Large phone, small tablet portrait |
| `md:` | 768+ | Tablet |
| `lg:` | 1024+ | Tablet landscape, small laptop |
| `xl:` | 1280+ | Laptop, desktop |
| `2xl:` | 1536+ | Large desktop |

**Mobile-first:** every component starts at 375px and scales up. Never `xl:` first then `sm:`.

### 5.4 Vertical rhythm

- 8px baseline grid governs everything.
- Display/H1 sits on multiples of 8.
- Body text line-height is 28px (multiples of 4 align fine).
- Inter-section spacing on desktop: 96px (`--space-9`).
- Inter-section spacing on mobile: 64px (`--space-8`).
- Hero internal vertical padding: 128px desktop, 96px mobile.

### 5.5 Grid

12-column grid on desktop with 32px gutters. On tablet 8 columns with 24px gutters. On mobile a 4-column grid with 16px gutters. Most content sections use a centered max-width and the grid governs sub-arrangement (e.g., the four segment cards on `/` use a `1 / 2 / 4`-column responsive layout).

---

## 6. Elevation, radius, motion

### 6.1 Shadows

The brochures don't use heavy shadows. Web should mirror this — shadows are subtle, used to lift interactive elements off the page, never decorative.

| Token | Value | Use |
|---|---|---|
| `--shadow-sm` | `0 1px 2px rgba(14, 14, 14, 0.06)` | Buttons, inputs at rest |
| `--shadow-md` | `0 4px 12px rgba(14, 14, 14, 0.08)` | Cards at rest |
| `--shadow-lg` | `0 12px 32px rgba(14, 14, 14, 0.12)` | Card hover, modals |
| `--shadow-focus` | `0 0 0 3px rgba(217, 166, 90, 0.45)` | Keyboard focus ring (the bush-gold accent at 45% alpha) |

### 6.2 Border radius

The brochures are angular. The website inherits that discipline — small radius for chrome, but never zero (keeps it warm).

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | 4px | Inputs, small badges |
| `--radius-md` | 8px | Buttons, alert blocks |
| `--radius-lg` | 12px | Cards |
| `--radius-xl` | 20px | Hero image masks, feature cards |
| `--radius-pill` | 9999px | Pill tags, audience chips |

### 6.3 Motion

UI/UX Pro Max rules (Priority 7) — durations 150–300ms, transform/opacity only, respect `prefers-reduced-motion`, exit faster than enter.

| Token | Value | Use |
|---|---|---|
| `--duration-fast` | 150ms | Hover state, focus state, button press |
| `--duration-base` | 220ms | Card lift, accordion expand |
| `--duration-slow` | 320ms | Modal/slide-in, page-level reveals |
| `--easing-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Default — feel of natural deceleration |
| `--easing-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | Two-way transitions (accordions) |

**Reduced motion:** every transition collapses to a 0.01s duration when `prefers-reduced-motion: reduce`. No parallax. No auto-scrolling video.

---

## 7. Iconography

- **Library:** **Lucide** (free, MIT, comprehensive, matches the geometric Montserrat character).
- **Style:** stroke 1.75px (matches Montserrat weight). All icons sized as design tokens (`icon-sm` 16, `icon-md` 20, `icon-base` 24, `icon-lg` 32, `icon-hero` 48).
- **No emoji icons** (UI/UX Pro Max critical rule).
- **No mixed icon sets** — Lucide only, with one exception: the brand wordmark uses a custom SVG.
- **Filled vs outline:** outline only at the same hierarchy level. Filled used only for an "active state" indicator in tabs/segment cards.

---

## 8. Photography rules

Per brochure-design-spec §4 and Luca's direction on 2026-05-18:

- **Existing brand photography first.** Pull from `04-images-and-screenshots/` where it tells the right story. Most of the v1 site can ship on existing assets.
- **AI-generated only when existing fails.** Reference the AI-image prompts in `brochure-image-prompts.md` if/when generating; anchor every prompt with "late afternoon golden hour, Western Victoria, Australian eucalypts, rolling grassland, foreground fallen log, soft natural lighting, photographer-quality not stock".
- **No stock.** Ever.
- **Aspect ratios:**
  - Hero: `21:9` desktop, `4:5` mobile (mobile wants more vertical reach for above-the-fold copy).
  - Segment cards: `4:3`.
  - Product close-ups: `1:1`.
  - Library/case-study cards: `3:2`.
- **Treatment:** subtle warm vignette (radial gradient from corner to centre, 10% opacity, `--ink`) on hero images that carry text — improves contrast without flattening the photography.
- **Alt text mandatory** (UI/UX Pro Max critical rule + SEO quick-win). Format: descriptive, never decorative. E.g., *"Late-afternoon Western Victoria pasture with a fallen eucalypt log in foreground"*, not *"hero"*.

---

## 9. Components (the library)

Every component below has a single source of truth in `/site/src/components/`. Pages compose from these — no one-off styles in pages.

| Component | File | Use |
|---|---|---|
| `BaseLayout` | `layouts/BaseLayout.astro` | Wraps every page — sets meta, OG, JSON-LD, Header, Footer |
| `Header` | `components/Header.astro` | Top nav with logo, primary nav, mobile menu |
| `Footer` | `components/Footer.astro` | ABN, contact, legal, sitemap, secondary nav |
| `Hero` | `components/Hero.astro` | Page hero — eyebrow + H1 + sub + CTA + image |
| `Section` | `components/Section.astro` | Standard content section wrapper with eyebrow + heading + body slot |
| `Button` | `components/Button.astro` | Primary, secondary, ghost variants |
| `CardSegment` | `components/CardSegment.astro` | The four segment cards on the homepage |
| `CardLibrary` | `components/CardLibrary.astro` | Library entries: title, summary, "why this matters", citation, download |
| `CardCase` | `components/CardCase.astro` | Case study cards |
| `Citation` | `components/Citation.astro` | In-text citation with tooltip-style detail |
| `ClaimCallout` | `components/ClaimCallout.astro` | Big-number callout: stat + label + source |
| `FAQ` | `components/FAQ.astro` | Accordion FAQ block (JSON-LD FAQPage schema) |
| `EnquiryForm` | `components/EnquiryForm.astro` | FormSubmit-wired form (no JS dependency) |
| `Stamp` | `components/Stamp.astro` | "PRODUCED IN WESTERN VICTORIA" credibility stamp |
| `QuadBullets` | `components/QuadBullets.astro` | The four-bullet quad ("More sustainable. More effective. More reliable. More pure.") |
| `LibraryFilter` | `components/LibraryFilter.astro` | Tag + topic + search filter for /library |
| `Prose` | `components/Prose.astro` | Long-form copy container — applies prose typography defaults |

---

## 10. Page-level patterns

### 10.1 Single primary CTA per page (UI/UX Pro Max rule)

Every page has exactly one **primary** CTA:
- `/` Home: "Get a biochar quote" → `/contact`
- `/biochar` & sub-pages: "Request pricing & delivery" → `/contact?subject=biochar-quote`
- `/services/*`: "Book a consult" → `/contact?subject=consult`
- `/library`: "Talk to us about your project" → `/contact`
- `/case-studies`: "Run a trial on your property" → `/contact`
- `/about`: "Get in touch" → `/contact`
- `/natural-pools`: "Email Luca" → `mailto:luca@possibleagriculture.com.au`

Secondary CTAs always visually subordinate (sage outline, not bush-gold fill).

### 10.2 Trust strip pattern

Below the hero on commerce-intent pages:

> **88.6% NATA-tested carbon · Australian Sugargum hardwood · Sold by the cubic metre**

Three icon + line items, sage colour, eyebrow weight.

### 10.3 Hero pattern

```
[Eyebrow — sentence-case, sage, 12px]
[H1 — Montserrat 800, sentence case]
[Lead paragraph — body-lg, max-w-prose]
[Primary CTA — bush-gold fill] [Secondary CTA — ghost]
[Trust strip — below CTAs, body-sm]
[Hero image — full bleed below or to side, with warm-vignette overlay]
```

### 10.4 Section pattern

```
[Eyebrow]
[H2]
[Body — optional sub-paragraph in body-lg]
[Content — slot: prose, cards, table, callout, etc.]
[Section CTA — optional, secondary variant]
```

### 10.5 Page footer enquiry rail (every page)

Last section above the global footer on every page except `/contact`: a single dark-`--bark` strip with one line + one primary CTA — e.g.,

> Got a paddock, a putting green, or a parkland with a biochar question? **Talk to us →**

---

## 11. Accessibility checklist (binding for every page before merge)

Adapted from UI/UX Pro Max Quick Reference §1–§2 and the pre-delivery checklist.

- [ ] Single H1; sequential heading hierarchy.
- [ ] All meaningful images have descriptive alt text.
- [ ] Decorative-only images use `alt=""`.
- [ ] Body text contrast ≥ 4.5:1; UI text ≥ 4.5:1; non-text UI ≥ 3:1.
- [ ] Focus rings visible on every interactive element (3px bush-gold, 2px offset).
- [ ] Touch targets ≥ 44×44px (mobile primary CTA, nav items, form fields).
- [ ] Form inputs all have `<label for>` (placeholder-only is a fail).
- [ ] Error messages near the relevant field, with text not just colour.
- [ ] No reliance on hover for primary information.
- [ ] `prefers-reduced-motion` respected (motion collapses to 0.01s).
- [ ] Tab order matches visual order.
- [ ] Skip-to-main-content link at top of every page.
- [ ] All quantitative claims cite a source.
- [ ] Page loads in < 2.5s on 4G (Lighthouse Performance ≥ 90).
- [ ] Mobile viewport meta correct (`width=device-width, initial-scale=1`), zoom not disabled.
- [ ] No horizontal scroll on any breakpoint.

---

## 12. SEO defaults (every page)

- Unique `<title>` ≤ 60 chars including " | Possible Agriculture".
- Unique `<meta name="description">` 150–160 chars.
- One H1 with the primary keyword in the first 60 chars.
- OG image (1200×630) — defaults to the page hero or the brand hero.
- OG title + description.
- Canonical URL set.
- JSON-LD: Organization on every page; LocalBusiness on contact; Product/Service on biochar pages; FAQPage where the FAQ component is used.
- Sitemap.xml auto-generated by Astro Sitemap integration.
- robots.txt allows all, references sitemap.
- Image filenames descriptive (e.g., `kiln-flame-curtain-western-victoria.jpg` not `IMG_1234.jpg`).
- Internal links use clean URLs, no anchor `#h.xxxx` legacy.

---

## 13. Content rules (binding for every word on the site)

- Every quantitative claim traces to `defensible-claims-register.md` v2.
- Wordmark: **"Possible Agriculture Biochar"** in body copy, brochure wordmark **"biochar / made by possible agriculture"** as the visual hero on the homepage and the `/biochar` page.
- Never "Arible" — retired. If found in source materials (e.g., `page-rewrites.md` still uses it), replace on build.
- Never "world's best", "cheapest", "lowest-cost" unqualified. Use feed-grade / flame-curtain / among-the-highest qualifiers per `possible_ag_product_positioning.md`.
- Never "VOC emissions" when citing the 12–50% Joseph 2021 figure — use "non-CO₂ greenhouse gas emissions (N₂O + CH₄)".
- Attribute 50% irrigation savings to Biochar Now (US case study); never claim it for PA Biochar.
- Apply the Rebbeck bridge line whenever the dairy result is cited: *"That trial used Mara Seeds Biochar; Possible Agriculture Biochar is higher-grade hardwood at higher pyrolysis temperatures, so we expect equivalent or better results — replication pending."*
- "Forest Management" (not "Forrest" / "Managment").
- "m³" not "m3".
- Sentence-case headings.
- Phone number: `0457 341 053`, wrapped as `tel:+61457341053`.

---

## 14. Page overrides

Page-specific overrides live in `design-system/pages/<slug>.md` and take precedence within that page. Default conventions:

- `/` Home — overrides allowed on hero density.
- `/biochar` — overrides for the product variants grid.
- `/library` — overrides for the filter UI.
- `/natural-pools` — looser personality, founder voice in first person.

---

## 15. What "done" looks like (visual)

When a page is built, run through this:

1. **Open at 375px** — does the hero copy fit above the fold? Is the primary CTA visible?
2. **Open at 1440px** — does the long measure of prose break to a column width that respects line-length rules?
3. **Tab through every interactive element** — focus rings visible everywhere?
4. **Toggle `prefers-reduced-motion`** — motion collapses cleanly?
5. **Run Lighthouse** — Performance, Accessibility, Best Practices, SEO each ≥ 90?
6. **Open the page on a sunny phone outdoors** — is the text readable? (The audience reads on-farm.)

If any of these fail, the page isn't ready.

---

*Prepared 18 May 2026 by Claude. Single source of truth for the Possible Agriculture website. Update this file first; implement after.*

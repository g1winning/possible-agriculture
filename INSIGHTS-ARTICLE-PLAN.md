# /insights — SEO article plan (v1)

The `/insights` section is the SEO content engine for `possibleagriculture.com.au`. Each article targets a specific long-tail search query that a real prospect would type, and answers it in plain English while routing them toward a relevant product or service page.

Articles are stored as Markdown files at `site/src/content/insights/<slug>.md` and surfaced automatically by `/insights/index.astro` once `draft: false` is set in their frontmatter.

---

## How each article should be structured

```markdown
---
title: <H1 — promise of the article, includes primary keyword>
description: <150–160 char meta description with primary keyword early>
publishedAt: 2026-MM-DD
audience: [farmers | councils | turf | researchers | general]
topics: [biochar-soil | biochar-livestock | ... | silvaculture | farming-practice]
image: /images/insights/<slug>-hero.jpg
imageAlt: <descriptive alt text>
readingTime: <"6 min read">
featured: <true/false>
draft: <true while drafting, false to publish>
---

<First paragraph — restates the question and previews the answer. SEO needs
the primary keyword in the first 100 words.>

## Subhead 1
<Concrete, mechanism-led explanation. Cite at least one library paper inline.>

## Subhead 2
...

## What to do next
<2–3 sentence wrap-up + one CTA linking to the relevant /biochar/* or
/services/* page.>
```

Every article ends with a CTA to the right commerce page. The article is the lead generator; the segment page is the conversion target.

---

## First wave — 12 article topics

Ordered by SEO impact / effort ratio. Each row has the primary keyword we're targeting (the search query a prospect actually types), the audience, the target segment page, and the angle.

### 1. "How much biochar do I add per acre / per hectare?"
- **Primary keyword:** biochar application rate per hectare Australia
- **Audience:** farmers
- **Topic:** biochar-soil, farming-practice
- **Angle:** A rate calculator article. Walks through the four use-cases (pasture, row crops, composting, livestock ration), with the published rates pulled from the library, plus a sample calculation. CTA → `/biochar/farmers`.
- **Effort:** Half-day

### 2. "Does biochar actually increase milk yield in dairy cows?"
- **Primary keyword:** biochar dairy cow milk yield
- **Audience:** farmers
- **Topic:** biochar-livestock
- **Angle:** Honest treatment of the Rebbeck trial with the bridge line. Why 1 of 4 dairies saw a strong result. What to look for if you want to replicate. CTA → `/biochar/livestock-and-dairy`.
- **Effort:** Half-day

### 3. "Can biochar reduce PFAS in contaminated soil?"
- **Primary keyword:** biochar PFAS remediation
- **Audience:** councils, researchers
- **Topic:** biochar-pfas, biochar-water
- **Angle:** The Sørmo 2021 paper in plain English. Why it works in low-organic soils and not high-organic. How a council would pilot it. CTA → `/biochar/councils`.
- **Effort:** Half-day

### 4. "Is biochar approved for use on USGA-spec putting greens?"
- **Primary keyword:** biochar USGA putting green
- **Audience:** turf
- **Topic:** biochar-turf
- **Angle:** Demolish the "USGA approved" myth honestly, then make the case for biochar as compatible-with-principles. The Yu 2013 doubling effect on sandy soils. Pilot offer on a single green. CTA → `/biochar/turf-and-golf`.
- **Effort:** Half-day

### 5. "How is biochar made on a farm? (The flame-curtain method)"
- **Primary keyword:** how to make biochar on a farm
- **Audience:** farmers, general
- **Topic:** biochar-process, silvaculture
- **Angle:** The flame-curtain method explained, with photos / video embed from the YouTube channel. Why on-farm is the cheapest option in Australia for woody-waste streams. CTA → `/services/forest-management`.
- **Effort:** Half-day to full day (needs Luca's video or photo input)

### 6. "What's the difference between biochar, charcoal, and activated carbon?"
- **Primary keyword:** biochar vs charcoal difference
- **Audience:** general
- **Topic:** biochar-process
- **Angle:** A glossary-style explainer that pulls in the SIMCOA distinction (non-equivalent comparator) and the activated-biochar profile. Useful for SEO authority. CTA → `/biochar`.
- **Effort:** Half-day

### 7. "Can I claim ACCUs for biochar on my farm?"
- **Primary keyword:** biochar ACCU carbon credits Australia
- **Audience:** farmers, councils
- **Topic:** biochar-carbon
- **Angle:** Honest scoping article: yes, in principle; no, not automatically. How the Clean Energy Regulator assesses, what methodologies fit, what the realistic earnings look like. CTA → `/services/carbon-farming`.
- **Effort:** Day

### 8. "Aboriginal cultural burning and the carbon in Australia's soils"
- **Primary keyword:** Aboriginal cultural burning soil carbon
- **Audience:** general, researchers
- **Topic:** biochar-carbon, silvaculture
- **Angle:** The historical-cultural framing that the rest of the site references in passing. Properly sourced, respectful, acknowledging Country. Positions Possible Agriculture's practice as continuation rather than invention. **Sensitive — Luca should review wording carefully before publish.** CTA → `/services/forest-management`.
- **Effort:** Day plus consultation

### 9. "How biochar reduces nitrogen and phosphorus runoff into waterways"
- **Primary keyword:** biochar nitrogen leaching reduction
- **Audience:** farmers, councils
- **Topic:** biochar-soil, biochar-water
- **Angle:** The Huang 2020 table in plain English. Particularly relevant for farmers using high-N fertiliser and for councils worried about stormwater nutrient loads. CTA → `/biochar/councils` and `/biochar/farmers`.
- **Effort:** Half-day

### 10. "What does 1% soil organic carbon actually mean for my farm?"
- **Primary keyword:** soil organic carbon increase by 1 percent
- **Audience:** farmers, councils
- **Topic:** biochar-carbon, farming-practice
- **Angle:** The 165 t CO₂-e / 75,000 L water-holding numbers in operational terms. Why this is the lever, not the metric. The distinction between sequestered carbon and a creditable emission reduction. CTA → `/services/carbon-farming`.
- **Effort:** Half-day

### 11. "Biochar in feedlot rations — what the cattle research actually shows"
- **Primary keyword:** biochar feedlot cattle methane
- **Audience:** farmers
- **Topic:** biochar-livestock
- **Angle:** Leng & Preston in plain language. The 25% live-weight gain, the 22% methane reduction, the rice-husk-vs-hardwood caveat. Why this is interesting if you're feeding 500+ head. CTA → `/biochar/livestock-and-dairy`.
- **Effort:** Half-day

### 12. "Silvaculture for Australian farms — turning fire load into soil carbon"
- **Primary keyword:** silvaculture forest management Australian farm
- **Audience:** farmers, general
- **Topic:** silvaculture, biochar-carbon
- **Angle:** A high-level brand piece tying together shelterbelt design, biomass conversion, fire-load reduction, and Indigenous burning practice. The "why this work matters" essay. CTA → `/services/forest-management`.
- **Effort:** Day

---

## Production cadence suggestion

- **Month 1:** articles 1, 2, 4 (the three highest-conversion segment leads — pricing/rate questions, dairy, golf).
- **Month 2:** articles 3, 5, 9.
- **Month 3:** articles 7, 10, 11.
- **Month 4+:** articles 6, 8, 12 (the brand and authority pieces — important but less directly conversion-driven).

After the first 12 are live, the cadence drops to one article per month (manageable solo workload) covering follow-up questions, new field-trial outcomes, and seasonal topics.

---

## Tagging and internal linking discipline

- Every article tags `topics: [...]` and `audience: [...]` matching the library schema. Future filter UI on `/insights` will mirror the library filter.
- Every article links inline to at least 2 library papers (citation-grounded) and 1 segment / service page (conversion target).
- Every article CTA at the foot ends with a link to the most relevant `/biochar/*` or `/services/*` page. No article ends on a wave — always end on a doorway.

---

## What I (Claude) will do next, with your sign-off

1. You review the 12 topics above. Strike any that don't fit, add any I missed.
2. You confirm the production order (or pick a different order).
3. I draft article 1 — application rates — as the template piece so we agree on tone, length, citation density, and CTA discipline before producing the rest.
4. We iterate that template once, then I produce articles 2–4 on the same shape.
5. The rest follow the production cadence above.

Until you sign off here, `/insights` ships as a placeholder page saying "first articles being drafted." The article files don't exist yet on the site.

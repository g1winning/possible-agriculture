# Library expansion via NotebookLM

A workflow for systematically expanding the `/library` with new biochar papers, gated by an affirmative-utility test so we only publish papers that *support* biochar — not ambiguous, hostile, or off-topic work.

---

## The principle

The library is **a sales asset wearing an academic shirt**. Every paper on the site is there because it makes the case for biochar in farming, livestock, councils, turf, water, or environmental remediation. Papers that don't pass the affirmative-utility test stay off the public site even if they're scientifically interesting.

Out of scope for the website library — even if the papers exist on NotebookLM:

- Mining and metallurgical applications of biochar/carbon
- Papers whose net conclusion is *negative* or *neutral-ambiguous* on biochar
- Papers that cover biochar in fundamentally different feedstocks (e.g., manure-only chars) without addressing wood-biochar effects
- Off-domain biochar work (battery electrodes, water-electrolysis catalysts, etc.)

---

## Step 1 — source acquisition in NotebookLM

Add new sources to the existing notebook ([Possible Agriculture — Brand & Claims Substantiation](https://notebooklm.google.com/notebook/fba31003-87f1-4f41-9b72-2e974cb11073)) using `source_add`.

Suggested search vectors to feed in (Google Scholar / WebFetch / arXiv):

```
biochar dairy milk yield 2024
biochar feed lot Australia
biochar PFAS remediation field trial 2023 2024
biochar stormwater filter media
biochar putting green sandy soil USGA
biochar nitrogen leaching pasture
biochar carbon farming methodology Australia ACCU
biochar manure compost windrow ammonia
biochar feed efficiency sheep
biochar greenhouse trial soil carbon
biochar heavy metal remediation field
biochar livestock methane Australia
biochar wood vinegar agricultural
biochar reforestation soil amendment
biochar council urban stormwater Australia
```

Run each search, identify 2–3 candidate papers per vector, and add them as sources to the notebook.

---

## Step 2 — the affirmative-utility test

For every candidate paper, ask NotebookLM these five questions in order. Reject if any answer is "no" or "ambiguous."

### Question 1 — domain check

> Does this paper cover one or more of: biochar in agricultural soils, biochar in livestock feed, biochar in turf or sports grounds, biochar in council greenspaces or stormwater, biochar in contaminated-site remediation (PFAS, heavy metals, hydrocarbons), or biochar in composting? **Reject** if the paper's primary scope is mining, metallurgy, battery electrodes, water electrolysis catalysts, or any non-agricultural / non-environmental remediation use.

### Question 2 — feedstock relevance

> Does this paper specifically address hardwood, high-temperature, or activated biochar — or does it address a feedstock (rice husk, manure, lignocellulose generally) that is methodologically relevant enough to inform a Sugargum-hardwood-based product? **Reject** if it's only about a feedstock with no transferable findings (e.g., pure manure char, peat char).

### Question 3 — affirmative utility

> Does this paper's findings *support* the use of biochar for the application it studies — meaning the measured outcome is a benefit (yield up, methane down, leaching down, water-holding up, contaminant down, etc.)? **Reject** if the findings are neutral or negative on biochar.

### Question 4 — methodology robustness

> Is the paper methodologically robust — peer-reviewed (or a credible industry report from a recognised body like ANZBI, IBI, USDA, CSIRO), with replicated measurements, named feedstocks, clear application rates, and identified caveats? **Reject** if it's an opinion piece, a single anecdotal observation, or a marketing whitepaper from a competing biochar producer.

### Question 5 — translatability

> Can the paper's headline finding be translated into a one-line "what this means for your operation" statement that an Australian farmer, council manager, or turf superintendent would understand and act on? **Reject** if the finding is so domain-specific or methodologically narrow that it can't be made operationally useful.

---

## Step 3 — generate library entry

For papers that pass all five tests, generate a library entry in `site/src/content/library/<slug>.md` using this template:

```markdown
---
title: <NEW farmer-translation title, not the academic one>
originalTitle: <the actual paper title>
authors: <surname et al. or full citation block>
year: <YYYY>
journal: <if peer-reviewed>
doi: <if available>
pdfFile: <slug>.pdf  # or omit if no PDF; sourceUrl is the access point
topics: [<select from biochar-soil / biochar-livestock / biochar-turf /
         biochar-councils / biochar-water / biochar-compost / biochar-pfas /
         biochar-carbon / biochar-process>]
audience: [<select from farmers / councils / turf / researchers / general>]
whyItMatters: <1–2 sentence farmer-translation: what does the finding mean
  for someone running an operation? Be specific. Talk dollars, paddocks,
  yield, water, methane, compaction — not "this study contributes to the
  understanding of...">
keyFinding: <the headline result, on-brand, written for an operator who
  reads the AFR not the JAS>
rating: foundational | strong-evidence | supporting | context
yearRelevance: current | classic
pageCount: <number>
citation: <full bibliographic citation>
sourceUrl: <DOI or publisher URL>
featured: <true if this should appear in the "Foundational and high-evidence"
  band on /library, false otherwise — keep the featured set to 5–7 papers max>
order: <integer for sorting within rating band>
---

<2–4 paragraphs of context. Write for the operator. Lead with what the
paper actually shows. Include caveats — but in plain language, not journal
hedging. Close with how the finding fits into Possible Agriculture's
practice.>
```

Then copy the PDF (if available) to `site/public/pdfs/library/<slug>.pdf`.

---

## Step 4 — rating discipline

Use ratings parsimoniously so the library remains a meaningful filter.

- **foundational** — the paper that everything else cites. Max 4–5 across the whole library. (Currently: Yu 2013, Joseph 2021, Sørmo 2021.)
- **strong-evidence** — peer-reviewed, replicated, directly applicable. Max 8–12. (Currently: Leng & Preston, Rebbeck 2023, Huang 2020.)
- **supporting** — relevant and useful but not the headline source. Most papers.
- **context** — industry reports, USGA-style guidance, reference compilations. The library bibliography rather than the evidence base.

---

## Step 5 — quarterly refresh cadence

The library should grow but stay legible. Aim for:

- **Per quarter:** add 3–6 new entries that pass the affirmative-utility test.
- **Per year:** re-rate everything. Move strong-evidence papers to foundational only if they're being consistently cited in everything else. Demote supporting papers to context if newer, stronger work has superseded them.
- **Don't grow past ~40 entries.** Past that point the filter UX stops working and the library starts looking like a journal database rather than a sales asset.

---

## Starter list — papers to evaluate next

Once you've authenticated NotebookLM, run the affirmative-utility test on these candidate searches. They're chosen to fill known gaps in the current library:

| Gap | Suggested search | Why it matters |
|---|---|---|
| Recent Australian field trials | "biochar Australia field trial 2023 2024" | The current library is heavy on 2012–2021 work. Recent Australian-context work strengthens the procurement case for councils. |
| PFAS field deployments | "biochar PFAS field trial in-situ" | Sørmo 2021 is the foundational paper but it's lab-scale; a field deployment would let us pitch council remediation projects more confidently. |
| Stormwater installations | "biochar bioretention urban stormwater" | We cite ASCE column trial data but don't have a real installation case. A council pilot study would be ideal. |
| Pasture-scale soil carbon | "biochar pasture soil organic carbon long-term" | The 1% SOC numbers are theoretical extrapolations — a long-term pasture trial showing measured SOC increase would underwrite the carbon-farming page properly. |
| Dairy replication trials | "biochar dairy cow milk yield Holstein Friesian" | Rebbeck 2023 is the Australian anchor; international replication studies strengthen the case. |
| Sheep / lamb feed additive | "biochar sheep ewe lamb feed conversion" | We have cattle and poultry; the sheep market is a gap. |
| Sports turf wear recovery | "biochar sports field compaction recovery" | The USGA conversation needs a sports-turf-specific paper, not just sandy-soil generalist work. |
| Council case studies | "biochar municipal greenspace urban park" | We have one council page but no real-world council deployment case study. |
| Cultural burning + soil carbon | "Aboriginal cultural burning soil carbon Australia" | The Indigenous-practice framing on the site needs a peer-reviewed source for the "majority of Australian soil carbon" claim. **This one is critical** — currently a strong claim with no inline citation. |

---

## What I (Claude) will do next, with your sign-off

1. You authenticate NotebookLM (one-time `nlm login` in terminal).
2. You point me at any candidate papers you'd like prioritised (URL or DOI).
3. I'll run the affirmative-utility test against each, in NotebookLM if available or via WebFetch otherwise.
4. For papers that pass, I'll draft the library entry in the exact Markdown format above and stage it under `site/src/content/library/`.
5. We review the staged entries together before merging them into the live library.

Until you confirm direction here, the library stays at 16 entries (13 main + 3 newly merged compost).

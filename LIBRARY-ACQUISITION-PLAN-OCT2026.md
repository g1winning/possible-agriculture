# Biochar library: the October 2026 rebuild

The library grew from 25 entries to 230 on 21 October 2026. It now takes the shape of the Landcare Library on swglandcare.org.au: one index file at `src/data/library.json`, documents grouped by topic with a count beside each heading, a search box, a filter by source, a two or three sentence summary under every title, a longer note behind "More about this document", the PDF held on the site where the licence allows, with the original linked beside it. Every entry reports a result in favour of biochar for the use it studied. Neutral or negative findings stayed out, as did mining, battery or catalyst uses.

## Where the documents came from

Four wells, worked in this order.

The PDFs already on the Mac. Seven unfiled papers from the August crop evidence round joined the index: Genesio (Tuscany vineyards), Major (Colombian maize), Morley with Di Bella (Herbert River cane), Muhlack (Wine Australia prunings), Rafiq (pyrolysis temperature), the Rebbeck dung beetle presentation, plus the Australian Turfgrass Management Journal article the turf page already cited. The corn stover harvesting papers were left out because they are feedstock economics, not evidence for biochar.

OpenAlex, the open index of scholarly literature. Fifty-six searches across the eleven topics returned 1,159 open access records with abstracts. A keyword filter dropped the off-domain material (electrodes, catalysts, dye adsorption), a citation threshold dropped the thin tail, leaving 774. Seven vetting agents read those against the affirmative test in the ingestion system (folder 10): 400 accepted, 165 maybe, 209 rejected. From the accepts, 126 went into the index by priority: every meta-analysis, multi-year field trial, livestock trial or Australian study, then the strongest single-site work in the thinner topics. The rejections are listed in `10-library-ingestion-system/registers/run-2026-10-21/rejections-2026-10-21.md`; the list is worth a read because it shows which claims have no backing yet.

Institutional publishers. A research agent worked through the International Biochar Initiative, the American Biochar Institute (the old US Biochar Initiative), the European Biochar Certificate, ANZBI, the Ithaka Institute's Biochar Journal, the Lehmann archive at Cornell, the US Forest Service, USDA, FAO, the World Bank, the IPCC 2019 biochar appendix, NSW DPI, CSIRO, Hort Innovation, Wine Australia, the New Zealand Agricultural Greenhouse Gas Research Centre, the Stockholm tree project, plus the extension services of Washington State, Utah, Nebraska, Vermont, Oregon, Delaware, British Columbia. It verified 100 documents; 72 made the index.

Overseas producers. Pacific Biochar (California) with Carbon Gold (Devon) were the only producers whose pages carried named trials with rates and measured outcomes: the Oasis vineyard sixth harvest report, the Terra Nostra urban tree trial, the Okehampton golf trial. Biochar Now, Wakefield, Sonnenerde, Novocarbo, Carbofex gave nothing beyond marketing. No Australian seller appears anywhere in the index.

## What was hosted, what was linked

179 of the 230 documents are held on the site under `public/pdfs/library/` (about 430 MB, within the GitHub Pages limits): every PDF that could be obtained, whoever published it. The scripted pipeline fetched 116; the rest came through a browser session over 22 to 24 October, because MDPI, Wiley, Elsevier, Taylor and Francis and the smaller publishers refuse every scripted fetch. The working method for each: open the article page in Chrome, follow its own PDF link, press the viewer's download button, then match the saved file to its entry by the DOI printed inside it. Chrome needs automatic downloads allowed for the publisher and its asset domain, and "ask where to save" switched off. The other 51 link to the publisher or the host page: the Biochar Journal articles are web pages with no PDF, about a dozen papers are paywalled despite an open access flag in OpenAlex (Chan 2007, Van Zwieten 2009, Blackwell 2010, Lehmann 2021, Ahmad 2013, Jeffery 2011, Beesley 2011, Yu 2018, Biederman 2012, Dickinson 2014, Drake 2015, Ye 2019, Zhou 2018), and a few sit behind captchas at IOP and the small publishers. A copy of any of them can be added by hand: save the PDF as `public/pdfs/library/<slug>.pdf` and set `href` in the index.

## The summaries

Every entry has a summary of 40 to 70 words, a longer note of 90 to 160 words, with five to eight keywords for search. The writers worked from the paper's own text where the PDF was held, otherwise from the abstract or the page. Across the 42,500 words: "and" at 1.96 per 100, "that" at 0.13 per 100, no dashes. The 25 entries carried over were rewritten to the same standard; the old Markdown files are archived in `10-library-ingestion-system/archive-markdown-entries-oct2026/`.

## For Luca to decide

Whether the four paywalled Elsevier PDFs the site already hosted (Sørmo, Silvani, Rajapaksha, Li) stay hosted or revert to links. Whether 65 entries under Soil and crops is too many for one shelf, or whether a split into cropping, pasture, soil water, soil chemistry would read better. Nothing has been committed or pushed.

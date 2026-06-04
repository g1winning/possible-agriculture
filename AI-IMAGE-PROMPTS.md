# AI image prompts for the Possible Agriculture website

Drop these prompts into **Gemini 2.5 Flash Image (Nano Banana)**, **Imagen 4**, or **Midjourney**. Save outputs at the file path shown for each slot, then re-deploy — no rebuild needed for image swaps.

---

## Brand anchors — paste at the top of every prompt

These keep generated imagery in the Possible Agriculture aesthetic. Combine the brand anchor block with one of the specific slot prompts below.

> Late afternoon golden hour, Western Victoria, Australia. Documentary-natural photography, not stock. Soft natural lighting, rolling grassland, scattered native eucalypts, distant low ranges, cloud-flecked sky. Earth-toned palette: bush gold, sage green, deep eucalypt, burnt umber, country sky. Photographer-quality, eye-level perspective, naturalistic colour grade. No drone shots, no aerial views, no oversaturated tourism colours, no SaaS or biotech corporate aesthetic, no people posing for the camera, no AI-purple or AI-pink gradients, no cinematic lens flares, no glossy hyperreal stylisation.

## Output specs

| Slot | Aspect ratio | File path | Replaces |
|---|---|---|---|
| Home hero | 21:9 | `site/public/images/hero/home-pasture-golden-hour.jpg` | existing |
| Biochar product hero | 4:3 | `site/public/images/hero/biochar-product.jpg` | existing |
| Kiln in operation | 3:2 | `site/public/images/hero/kiln-flame-curtain.jpg` | existing |
| Golf hero | 21:9 | `site/public/images/hero/golf-fairway-golden-hour.jpg` | existing |
| Parkland hero | 21:9 | `site/public/images/hero/parkland-eucalypts.jpg` | existing |
| Dairy hero | 21:9 | `site/public/images/hero/dairy-cattle-pasture.jpg` | existing |
| Farm paddock | 21:9 | `site/public/images/hero/farm-paddock.jpg` | existing |
| Forest management hero | 21:9 | `site/public/images/hero/forest-management.jpg` | existing |
| Carbon farming hero | 21:9 | `site/public/images/hero/carbon-farming.jpg` | existing |
| Water treatment hero | 21:9 | `site/public/images/hero/water-treatment.jpg` | existing |
| Biological farming hero | 21:9 | `site/public/images/hero/biological-farming.jpg` | existing |
| Library hero | 21:9 | `site/public/images/hero/library.jpg` | existing |
| Case-studies hero | 21:9 | `site/public/images/hero/case-studies.jpg` | existing |
| Natural pools hero | 21:9 | `site/public/images/hero/natural-pool.jpg` | existing |
| About / Luca portrait | 3:4 | `site/public/images/hero/about-luca.jpg` | existing |
| Services overview | 4:5 | `site/public/images/hero/services-pasture.jpg` | existing |
| Carbon powder product | 1:1 | `site/public/images/product/variant-powder.jpg` | SVG placeholder |
| 2 mm granules product | 1:1 | `site/public/images/product/variant-granules.jpg` | SVG placeholder |
| 2–20 mm mix product | 1:1 | `site/public/images/product/variant-mix.jpg` | SVG placeholder |
| Segment — biochar product | 4:3 | `site/public/images/segments/biochar-product.jpg` | existing |
| Segment — golf | 4:3 | `site/public/images/segments/golf-fairway.jpg` | existing |
| Segment — councils | 4:3 | `site/public/images/segments/councils-park.jpg` | existing |
| Segment — dairy | 4:3 | `site/public/images/segments/dairy-cattle.jpg` | existing |
| Segment — farm | 4:3 | `site/public/images/segments/farm-paddock.jpg` | existing |
| Segment — biological | 4:3 | `site/public/images/segments/biological-farming.jpg` | existing |
| Segment — forest | 4:3 | `site/public/images/segments/forest-management.jpg` | existing |
| Segment — water | 4:3 | `site/public/images/segments/water-treatment.jpg` | existing |
| Segment — carbon | 4:3 | `site/public/images/segments/carbon-farming.jpg` | existing |
| Case study — Rebbeck dairy | 3:2 | `site/public/images/case-studies/rebbeck-dairy.jpg` | existing |
| Case study — Biochar Now golf | 3:2 | `site/public/images/case-studies/biochar-now-golf.jpg` | existing |
| OG default | 1200×630 | `site/public/images/og/default-og.jpg` | existing |

---

## Slot-by-slot prompts

### Home hero — `home-pasture-golden-hour.jpg`

> [Brand anchors]. Wide landscape, 21:9. Late afternoon Western Victoria pasture, low golden sun raking across the grass from camera left, scattered shelterbelt eucalypts in middle distance, a single weathered fence line cutting horizontally across the frame, low ranges in the far distance. A fallen eucalypt log in the lower left foreground. No people. Composition should leave the upper right quadrant open and lighter — for hero text overlay. Mood: confident, grounded, productive country.

### Biochar product hero — `biochar-product.jpg`

> [Brand anchors]. 4:3. A pair of work-weathered Australian hands holding a generous mound of activated hardwood biochar — fine, granular, deep matte black with a slight sheen. Background: out-of-focus golden grass and late afternoon light. Texture detail visible: porous, irregular grain, mix of fine and coarse pieces. Documentary close-up, no styling tricks, natural lighting only.

### Kiln in operation — `kiln-flame-curtain.jpg`

> [Brand anchors]. 3:2. Flame-curtain biochar kiln in operation on a Western Victorian farm at late afternoon. Open-top cone-shaped pyrolysis pit, visible glowing embers and a curtain of orange-yellow flame at the upper rim, smoke rising thin and clean against a pale evening sky. Operator in work clothes (back to camera, no face visible) tending the burn with a long iron. Surrounding paddock: dry golden grass, distant eucalypt windbreak. Authentic working scene — not staged.

### Golf hero — `golf-fairway-golden-hour.jpg`

> [Brand anchors]. 21:9. An Australian golf course at late golden hour. Tightly-mown fairway curving away from camera, native eucalypts lining the rough on both sides, the green just visible in middle distance with a flag pole. Long warm shadows from the trees stretching across the grass. No people. No oversaturated tourism greens — the colour should feel like real Australian turf, slightly bleached by sun. Composition keeps the upper third lighter for text overlay.

### Parkland hero — `parkland-eucalypts.jpg`

> [Brand anchors]. 21:9. A public council parkland in Western Victoria at late afternoon. Mature spreading eucalypts with hollow trunks, well-managed grass underfoot, a curving path edge visible at the bottom of the frame, a wooden park bench in middle distance (empty, no figures). Late golden sun filtering through high tree canopy creating dappled light on the grass. Civic feel — somewhere a council manager would recognise as theirs.

### Dairy hero — `dairy-cattle-pasture.jpg`

> [Brand anchors]. 21:9. A small herd of dairy cattle (Holstein Friesian or Jersey) grazing on Australian pasture at late afternoon. The cattle are mid-distance, not portrait-close. Strong horizontal composition: golden grass, the line of cattle, eucalypt windbreak behind, distant ranges. One animal looking calmly toward the camera. Working farm aesthetic — not idealised dairy advertising.

### Farm paddock — `farm-paddock.jpg`

> [Brand anchors]. 21:9. A mixed-use Australian farm paddock at late afternoon. Mid-distance: a few beef cattle near a water trough. Foreground: golden grass with a single weathered post in the lower left. Mid-distance: shelterbelt of mature eucalypts. Distant: low rolling hills. Working farm character — visible signs of use, not pristine. A small cloud bank low on the horizon.

### Forest management hero — `forest-management.jpg`

> [Brand anchors]. 21:9. An Australian eucalypt shelterbelt at golden hour. Tall mature trees in middle distance creating a windbreak line, dropped limbs and ground litter visible in the foreground (the fire-load that becomes biochar feedstock), pasture stretching beyond the shelterbelt. Late afternoon light catching the tree trunks vertically. Composition emphasises the relationship between standing forest and ground-level biomass.

### Carbon farming hero — `carbon-farming.jpg`

> [Brand anchors]. 21:9. A wide grassland scene under a cloudy sky at late afternoon. Foreground: a slight rise of dark soil where a recent biochar amendment has been incorporated, visible against the surrounding lighter pasture. Middle distance: healthy pasture stretching toward shelterbelt. The image should read as "carbon being built into the land" without being literal — the soil-colour contrast does the work.

### Water treatment hero — `water-treatment.jpg`

> [Brand anchors]. 21:9. A vegetated stormwater treatment swale in a Western Victorian setting at late afternoon. Slow-moving water in the foreground edge, planted with native rushes and sedges, a paved verge or council edging at one side, parkland grass behind. Documentary infrastructure photography — not glamorous, just honest. The mood is "real working civic infrastructure."

### Biological farming hero — `biological-farming.jpg`

> [Brand anchors]. 21:9. A documentary view of biological farming in practice. A farmer's hands (cropped, no face) cupping rich dark soil with visible root mass and worms, golden grass blurred in the background, late afternoon light from camera right. The frame emphasises the soil — what's beneath the pasture, not the pasture itself. Earthy, hands-on, working — not "wellness shoot" sanitised.

### Library hero — `library.jpg`

> [Brand anchors]. 21:9. A weathered wooden farm desk in late afternoon light. Spread across it: a few printed research papers (academic-looking — column layout, charts visible but unreadable), a folded brochure, a Sample jar of biochar with a hand-written label, a pen, a coffee cup. Real-working-environment composition. The light is warm and natural, low-angle from camera left. No people. No laptops.

### Case-studies hero — `case-studies.jpg`

> [Brand anchors]. 21:9. A field-trial site in late afternoon. Two adjoining paddock sections — one slightly darker soil (the biochar-amended trial plot), one lighter (control). A simple wooden trial marker stake in middle distance with a hand-written label visible but unreadable. A researcher figure (back to camera, no face) walking the boundary between the two plots with a clipboard. Documentary research aesthetic.

### Natural pools hero — `natural-pool.jpg`

> [Brand anchors]. 21:9. A natural swimming pool on an Australian farm at dusk — late golden hour transitioning to blue hour. The pool is a large, irregular-edged farm dam with a clear deep swim zone (foreground) and a planted regeneration zone (visible at far edge) separated by a low underwater wall. Water reflecting the dusk sky. Surrounding: golden pasture, distant eucalypts, low ranges. A simple timber jetty extending a short way into the water on the right side. No people.

### About / Luca portrait — `about-luca.jpg`

> [Brand anchors]. 3:4 vertical portrait. A male Australian farmer (mid-career, weathered, lived-in face — wears practicality not vanity) standing in front of a flame-curtain biochar kiln on his own farm at late afternoon. Work clothes, sleeves rolled up, slight smile, looking slightly off-camera (toward the kiln). One hand on the kiln's lip, the other holding a sample of finished biochar. Natural late-day lighting, no studio look, no shallow-DOF beauty portrait — the kiln and the paddock should be present in the frame, not blurred out. Mood: founder-present, operator-led, evidence-based confidence.

### Services overview — `services-pasture.jpg`

> [Brand anchors]. 4:5 vertical. A working farmer walking through golden Western Victorian pasture in late afternoon light, carrying a small bucket of biochar. Composition: figure off-centre in the lower third of the frame, eucalypt shelterbelt behind, late sun raking from camera right. Photographer-quality documentary feel. The whole frame should read as "this is the consulting half of the practice" — purposeful, on-the-ground.

---

## Product variant tiles (replace SVG placeholders)

These are the most critical — the current site has plain SVG placeholders here saying "AI image needed."

### Carbon powder — `variant-powder.jpg`

> [Brand anchors] — but **product close-up, neutral backdrop**, not landscape. 1:1 square. A wide-mouthed glass jar tipped slightly forward on a weathered natural-pine board, the jar half-full of fine biochar powder. A small spill of the same powder fanning out from the mouth of the jar toward the camera, displaying the texture: very fine, deep matte black, slightly glittering with the carbon grains. Late afternoon golden light from camera right, soft shadows. No props beyond the jar and the spill. Background out-of-focus pasture in warm bokeh.

### 2 mm granules — `variant-granules.jpg`

> [Brand anchors] — product close-up, neutral backdrop. 1:1 square. A natural hessian sack rolled down at the top, sitting on weathered timber, half-full of uniform 2 mm biochar granules. A scoop of the same granules tipped in front of the sack, individual granules clearly visible — porous, irregular, deep matte black with a slight sheen. Late afternoon golden side-light. The texture detail is the hero of the shot.

### 2–20 mm mix — `variant-mix.jpg`

> [Brand anchors] — product close-up, neutral backdrop. 1:1 square. A wooden produce crate at late afternoon, filled with mixed-grade biochar pieces ranging from coarse 2 mm grain to chunky 20 mm pieces. Some pieces sitting outside the crate on the timber surface. Strong texture and irregular shape visible — clearly hardwood-derived, with the wood-grain echo still legible in the larger chunks. Warm natural light, no studio props.

---

## Files in the current Desktop folder that should be deleted

These are the toothpaste-derived JPG placeholders that the SVG variant tiles now replace. The sandbox couldn't delete them, but you can in Finder:

```
~/Desktop/Possible-Agriculture-Refresh/site/public/images/product/variant-powder.jpg
~/Desktop/Possible-Agriculture-Refresh/site/public/images/product/variant-granules.jpg
~/Desktop/Possible-Agriculture-Refresh/site/public/images/product/variant-mix.jpg
```

Once you generate AI replacements (per the prompts above), save them with **the same filenames** (`.jpg`, not `.svg`), and update the three image paths in `site/src/pages/biochar/index.astro` from `.svg` back to `.jpg`. Or leave it as `.jpg` from the start and overwrite the existing files; the page will pick up the new image without a rebuild.

---

## Tips for getting consistent output

1. **Use the same model and the same brand-anchor block for every image** — consistency comes from anchoring the style, not from one-off prompt tuning.
2. **Generate 3–4 variants per slot** and pick the one with the most "real photo, working country" feel. Discard anything that reads as stock, oversaturated, or stylised.
3. **Resize and compress** before saving into `public/images/`: target 200–400 KB per JPG. Use 80% quality, progressive encoding.
4. **Preserve aspect ratio exactly** as listed above — the layout assumes it.
5. **No text in the image.** The site renders type over the image, not into the image.
6. **No people whose faces are visible** unless it's the Luca portrait — keeps the photography brand-locked to country and product, and avoids future model-release headaches.

// Possible Agriculture — defensible claims register (typed)
// Single source of truth in code, mirroring /defensible-claims-register.md v2.
// Pages should import named claims rather than embedding numbers inline so any
// future correction propagates with one edit.

export type Claim = {
  id: string;
  /** The headline number / fact, written for inline use. */
  value: string;
  /** Short description of what's being measured. */
  topic: string;
  /** Inline-citation form, e.g., "Yu et al., 2013". */
  shortCite: string;
  /** Full citation. */
  fullCite: string;
  /** External URL where the source can be verified. */
  sourceUrl?: string;
  /** Optional explainer / caveat shown alongside the citation tooltip. */
  caveat?: string;
};

export const claims: Record<string, Claim> = {
  carbonContent: {
    id: 'carbonContent',
    value: '88.6% total carbon',
    topic: 'NATA-accredited lab test (Southern Cross University EAL, Aug 2022). Among the highest carbon content reported in the published biochar literature.',
    shortCite: 'NATA-accredited test, Southern Cross University EAL, 2022',
    fullCite: 'Southern Cross University Environmental Analysis Laboratory, NATA-accredited carbon-content test, August 2022.',
  },
  waterHoldingBiochar: {
    id: 'waterHoldingBiochar',
    value: 'over 2.7× its dry weight in water',
    topic: 'Water holding capacity of pure biochar',
    shortCite: 'Yu et al., 2013',
    fullCite: 'Yu OY, Raichle B, Sink S (2013). Impact of biochar on the water holding capacity of loamy sand soil. International Journal of Energy and Environmental Engineering 4:44.',
    sourceUrl: 'https://link.springer.com/article/10.1186/2251-6832-4-44',
  },
  waterHoldingSoil: {
    id: 'waterHoldingSoil',
    value: 'doubles water-holding capacity of sandy or loamy-sand soils at 9% mixture',
    topic: 'Soil-level water holding effect',
    shortCite: 'Yu et al., 2013',
    fullCite: 'Yu OY, Raichle B, Sink S (2013). Impact of biochar on the water holding capacity of loamy sand soil. International Journal of Energy and Environmental Engineering 4:44.',
    sourceUrl: 'https://link.springer.com/article/10.1186/2251-6832-4-44',
  },
  irrigationSavings: {
    id: 'irrigationSavings',
    value: 'up to 40%',
    topic: 'Irrigation savings in turf trials',
    shortCite: 'Possible Agriculture trials',
    fullCite: 'Possible Agriculture (formerly Arible) turf brochure trial data. Site-specific results vary by soil, climate and application rate.',
    caveat: 'A separate US case study (Biochar Now) reported 50% in similar conditions using a different product — that figure belongs to Biochar Now, not Possible Agriculture.',
  },
  liveWeightGain: {
    id: 'liveWeightGain',
    value: 'up to 25% live-weight gain',
    topic: 'Cattle on cassava-based ration with biochar at 0.6% of dietary DM',
    shortCite: 'Leng & Preston',
    fullCite: 'Leng RA, Preston TR. Effects of biochar on live-weight gain and methane emissions of cattle on a cassava-based diet. Livestock Research for Rural Development.',
    caveat: 'Trial used rice-husk biochar at 900°C. Possible Agriculture Biochar is hardwood at high pyrolysis temperature — feedstock differs but the high-temperature property transfers.',
  },
  methaneAlone: {
    id: 'methaneAlone',
    value: '22% reduction in enteric methane',
    topic: 'Cattle, biochar alone in ration',
    shortCite: 'Leng & Preston',
    fullCite: 'Leng RA, Preston TR. Effects of biochar on live-weight gain and methane emissions of cattle on a cassava-based diet. Livestock Research for Rural Development.',
  },
  methaneCombined: {
    id: 'methaneCombined',
    value: '41% reduction',
    topic: 'Cattle, biochar combined with potassium nitrate',
    shortCite: 'Leng & Preston',
    fullCite: 'Leng RA, Preston TR. Effects of biochar on live-weight gain and methane emissions of cattle on a cassava-based diet. Livestock Research for Rural Development.',
  },
  milkYield: {
    id: 'milkYield',
    value: 'around +2 L/cow/day',
    topic: 'Australian dairy trial — biochar at ~1% of mixed ration',
    shortCite: 'Rebbeck, 2023',
    fullCite: 'Rebbeck M (2023). Mara Seeds Biochar dairy trial, four South Australian dairies. One dairy reported ~+2 L/cow/day milk yield, +0.1 kg/day solids, ~$130k/year additional profit on a 250-cow herd.',
    caveat: 'Trial used Mara Seeds Biochar. Possible Agriculture Biochar is higher-grade hardwood at higher pyrolysis temperatures than the product used in the trial, so we expect equivalent or better results — replication pending.',
  },
  pfasReduction: {
    id: 'pfasReduction',
    value: 'up to 98–100% PFAS leaching reduction at 5% activated biochar in low-organic-matter soils',
    topic: 'PFAS immobilisation',
    shortCite: 'Sørmo et al., 2021',
    fullCite: 'Sørmo E, Silvani L, Bjerkli N, Hagemann N, Zimmerman AR, Hale SE, Hansen CB, Hartnik T, Cornelissen G (2021). Stabilization of PFAS-contaminated soil with activated biochar. Science of the Total Environment 763, 144034.',
    sourceUrl: 'https://doi.org/10.1016/j.scitotenv.2020.144034',
    caveat: 'Performance reduces in soils with high organic matter. For contaminated-site remediation, recommend a site-specific pilot trial.',
  },
  nLeach: {
    id: 'nLeach',
    value: '17.6–37.7% reduction in total nitrogen leaching at 2–8% biochar',
    topic: 'Soil nitrogen leaching',
    shortCite: 'Huang et al., 2020',
    fullCite: 'Huang Z et al. (2020). Effects of biochar application on soil leaching of nitrogen and phosphorus. IOP Conference Series: Earth and Environmental Science 424, 012015.',
    sourceUrl: 'https://iopscience.iop.org/article/10.1088/1755-1315/424/1/012015',
  },
  pLeach: {
    id: 'pLeach',
    value: '12.0–26.0% reduction in total phosphorus leaching at 2–8% biochar',
    topic: 'Soil phosphorus leaching',
    shortCite: 'Huang et al., 2020',
    fullCite: 'Huang Z et al. (2020). Effects of biochar application on soil leaching of nitrogen and phosphorus. IOP Conference Series: Earth and Environmental Science 424, 012015.',
    sourceUrl: 'https://iopscience.iop.org/article/10.1088/1755-1315/424/1/012015',
  },
  stormwater: {
    id: 'stormwater',
    value: '86% TSS, 86% nitrate, 47% phosphate, 18–75% heavy metals removed',
    topic: 'Stormwater filtration through biochar media',
    shortCite: 'ASCE study',
    fullCite: 'American Society of Civil Engineers (ASCE) urban-stormwater biochar column study.',
  },
  soc1pCO2e: {
    id: 'soc1pCO2e',
    value: '~165 t CO₂-e sequestered per hectare',
    topic: '1% increase in soil organic carbon (top 30 cm, bulk density 1.5 t/m³)',
    shortCite: 'SCIG',
    fullCite: 'Soil Carbon Industry Group (Australia). Why soil carbon. https://www.scig.org.au/why-soil-carbon/',
    sourceUrl: 'https://www.scig.org.au/why-soil-carbon/',
    caveat: 'Sequestered carbon is distinct from a creditable emission reduction under the Emissions Reduction Fund. Credits require project methodology approval by the Clean Energy Regulator.',
  },
  soc1pWater: {
    id: 'soc1pWater',
    value: 'up to ~75,000 L additional water-holding per acre (~187,000 L per hectare)',
    topic: '1% increase in soil organic carbon — water-holding effect',
    shortCite: 'USDA-NRCS, cited Bryant 2015',
    fullCite: 'USDA-NRCS conservative estimate, cited Bryant L (2015). NRDC report on soil carbon and water-holding capacity.',
  },
  noncoGHG: {
    id: 'noncoGHG',
    value: '12–50% reduction in non-CO₂ greenhouse gas (N₂O + CH₄) emissions from soils',
    topic: 'Soil GHG response to biochar',
    shortCite: 'Joseph et al., 2021',
    fullCite: 'Joseph S, Cowie AL, Van Zwieten L, Bolan N, Budai A, Buss W, Cayuela ML, Graber ER, Ippolito JA, Kuzyakov Y, Luo Y, Ok YS, Palansooriya KN, Shepherd J, Stephens S, Weng ZH, Lehmann J (2021). How biochar works, and when it doesn\'t: A review of mechanisms controlling soil and plant responses to biochar. GCB Bioenergy 13(11): 1731-1764.',
    sourceUrl: 'https://doi.org/10.1111/gcbb.12885',
    caveat: 'Earlier Possible Ag materials labelled this as "VOC emissions" — that was a misattribution. The 12–50% range refers to N₂O and CH₄.',
  },
  heavyMetals: {
    id: 'heavyMetals',
    value: '17–39% reduction in plant tissue heavy-metal concentrations',
    topic: 'Heavy-metal uptake in plants on biochar-amended soils',
    shortCite: 'Joseph et al., 2021',
    fullCite: 'Joseph S et al. (2021). How biochar works, and when it doesn\'t. GCB Bioenergy 13(11): 1731-1764.',
    sourceUrl: 'https://doi.org/10.1111/gcbb.12885',
  },
  plantProductivity: {
    id: 'plantProductivity',
    value: '10–42% increase in plant productivity',
    topic: 'At 1% biochar application',
    shortCite: 'Joseph et al., 2021',
    fullCite: 'Joseph S et al. (2021). How biochar works, and when it doesn\'t. GCB Bioenergy 13(11): 1731-1764.',
    sourceUrl: 'https://doi.org/10.1111/gcbb.12885',
  },
  plantAvailableP: {
    id: 'plantAvailableP',
    value: 'up to 4.6× increase in plant-available phosphorus',
    topic: 'Across feedstocks, 95% CI 3.4–5.9',
    shortCite: 'Joseph et al., 2021',
    fullCite: 'Joseph S et al. (2021). How biochar works, and when it doesn\'t. GCB Bioenergy 13(11): 1731-1764.',
    sourceUrl: 'https://doi.org/10.1111/gcbb.12885',
  },
} as const;

export type ClaimId = keyof typeof claims;

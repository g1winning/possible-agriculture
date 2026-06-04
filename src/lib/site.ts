// Site-wide constants — single source of truth for contact details, URLs, nav.

export const site = {
  name: 'Possible Agriculture',
  legalName: 'Possible Agriculture',
  abn: '71 561 718 933',
  tagline: 'Biological farm consulting, services and supply — across Australia.',
  description:
    'Biological farm consultancy and producer of Possible Agriculture Biochar — sustainably made Sugargum hardwood biochar, NATA-tested at 88.6% total carbon. Sold by the cubic metre.',
  url: 'https://possibleagriculture.com.au',
  domain: 'possibleagriculture.com.au',

  founder: {
    name: 'Luca Brew',
    phone: '0457 341 053',
    phoneTel: '+61457341053',
    email: 'luca@possibleagriculture.com.au',
  },

  // Geoffrey appears on brochures only, not on the website.
  // Kept here for reference; not surfaced in any page.
  brochureContact: {
    name: 'Geoffrey Bowll',
    phone: '0400 284 411',
  },

  location: {
    region: 'Central Victoria',
    country: 'Australia',
    serviceArea: 'Central Victoria and across Australia',
  },

  social: {
    youtube: 'https://www.youtube.com/@PossibleAgriculture',
  },

  // The form endpoint — FormSubmit lets us POST a form to luca@... without a backend.
  // FormSubmit requires the first submission to be confirmed by clicking a link
  // from FormSubmit in the recipient inbox. Until that is done, submissions go nowhere.
  formEndpoint: 'https://formsubmit.co/luca@possibleagriculture.com.au',

  // Cloudflare Web Analytics token. Sign up at https://dash.cloudflare.com → Web Analytics
  // → Add a site → enter possibleagriculture.com.au → copy the token from the snippet
  // (the value of `data-cf-beacon='{"token": "..."}'`). Paste it here.
  // Empty string = analytics disabled.
  cloudflareAnalyticsToken: '',
} as const;

// Primary navigation. Items with a `sub` array render as dropdowns on
// desktop and as expandable groups in the mobile menu.
export const nav = {
  primary: [
    {
      label: 'Biochar',
      href: '/biochar',
      sub: [
        { label: 'Biochar — overview', href: '/biochar', description: 'What it is, how it\'s made, what it does' },
        { label: 'Pricing & delivery', href: '/biochar/pricing', description: 'By the m³ — quoted for your operation' },
        { label: 'For turf & golf', href: '/biochar/turf-and-golf', description: 'Less water, better roots, faster recovery' },
        { label: 'For livestock & dairy', href: '/biochar/livestock-and-dairy', description: 'Feed efficiency, methane, dairy yield' },
        { label: 'For councils & parklands', href: '/biochar/councils', description: 'Stormwater, contaminants, soil carbon' },
        { label: 'For farmers & feedlotters', href: '/biochar/farmers', description: 'Soil, manure, ration, ACCU scoping' },
      ],
    },
    {
      label: 'Services',
      href: '/services',
      sub: [
        { label: 'Services — overview', href: '/services', description: 'All four service tracks at a glance' },
        { label: 'Biological farming', href: '/services/biological-farming', description: 'Soil biology, system design, implementation' },
        { label: 'Forest management & silvaculture', href: '/services/forest-management', description: 'Reforestation, biomass, fire-load reduction' },
        { label: 'Carbon farming & ACCUs', href: '/services/carbon-farming', description: 'Scoping eligibility under the ERF' },
        { label: 'Water treatment', href: '/services/water-treatment', description: 'Stormwater, runoff, remediation' },
        { label: 'Natural pools', href: '/natural-pools', description: 'Self-cleaning farm dams — side project' },
      ],
    },
    { label: 'Case studies', href: '/case-studies' },
    { label: 'Library', href: '/library' },
    { label: 'Insights', href: '/insights' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  biocharSub: [
    { label: 'Biochar — overview', href: '/biochar' },
    { label: 'Pricing & delivery', href: '/biochar/pricing' },
    { label: 'For turf & golf', href: '/biochar/turf-and-golf' },
    { label: 'For livestock & dairy', href: '/biochar/livestock-and-dairy' },
    { label: 'For councils & parklands', href: '/biochar/councils' },
    { label: 'For farmers & feedlotters', href: '/biochar/farmers' },
  ],
  servicesSub: [
    { label: 'Services — overview', href: '/services' },
    { label: 'Biological farming', href: '/services/biological-farming' },
    { label: 'Forest management & silvaculture', href: '/services/forest-management' },
    { label: 'Carbon farming & ACCUs', href: '/services/carbon-farming' },
    { label: 'Water treatment', href: '/services/water-treatment' },
    { label: 'Natural pools', href: '/natural-pools' },
  ],
  footerSecondary: [
    { label: 'YouTube channel', href: 'https://www.youtube.com/@PossibleAgriculture' },
  ],
} as const;

// Legacy URL redirects — handled in `_redirects` for some hosts; here as reference.
export const legacyRedirects = [
  { from: '/our-services/forest-managment', to: '/services/forest-management' },
  { from: '/home', to: '/' },
  { from: '/farmers-and-feedlotters', to: '/biochar/farmers' },
  { from: '/turf-growers-golf-courses', to: '/biochar/turf-and-golf' },
  { from: '/councils', to: '/biochar/councils' },
  { from: '/contact-us', to: '/contact' },
];

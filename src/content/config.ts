// Astro content collections — Library entries + Case studies
// Edit these schemas if a new field is needed; rebuild types with `npm run astro check`.

import { defineCollection, z } from 'astro:content';

const library = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    originalTitle: z.string().optional(),
    authors: z.string(),
    year: z.number(),
    journal: z.string().optional(),
    doi: z.string().optional(),
    pdfFile: z.string().optional(), // relative to /public/pdfs/library/ — if absent, sourceUrl is used as the primary link
    topics: z.array(
      z.enum([
        'biochar-soil',
        'biochar-livestock',
        'biochar-turf',
        'biochar-councils',
        'biochar-water',
        'biochar-compost',
        'biochar-pfas',
        'biochar-carbon',
        'biochar-process',
        'silvaculture',
        'farming-practice',
      ]),
    ),
    audience: z.array(
      z.enum(['farmers', 'councils', 'turf', 'researchers', 'general']),
    ),
    whyItMatters: z.string(), // 1–2 sentence farmer-facing translation
    keyFinding: z.string(), // the headline result, on-brand
    rating: z.enum(['foundational', 'strong-evidence', 'supporting', 'context']).default('supporting'),
    yearRelevance: z.enum(['current', 'classic']).default('current'),
    pageCount: z.number().optional(),
    citation: z.string(), // full citation string
    sourceUrl: z.string().url().optional(),
    pubmedId: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    operation: z.string(), // e.g., "Dairy", "Golf course", "Council parklands"
    location: z.string(),
    year: z.number(),
    headlineMetric: z.object({
      value: z.string(), // e.g., "+2 L/cow/day"
      label: z.string(), // e.g., "milk yield increase"
    }),
    attribution: z.string().optional(), // for trials we cite but didn't run
    productUsed: z.string().optional(),
    bridgeNote: z.string().optional(), // the Rebbeck-style bridge line
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    citation: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const insights = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.date(),
    updatedAt: z.date().optional(),
    audience: z.array(
      z.enum(['farmers', 'councils', 'turf', 'researchers', 'general']),
    ),
    topics: z.array(
      z.enum([
        'biochar-soil',
        'biochar-livestock',
        'biochar-turf',
        'biochar-councils',
        'biochar-water',
        'biochar-compost',
        'biochar-pfas',
        'biochar-carbon',
        'biochar-process',
        'silvaculture',
        'farming-practice',
      ]),
    ),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    readingTime: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(true),
  }),
});

export const collections = {
  library,
  'case-studies': caseStudies,
  insights,
};

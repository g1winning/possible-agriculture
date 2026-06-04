// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://possibleagriculture.com.au',
  // GitHub Pages with custom domain: site root is "/"
  // (If launched first on <user>.github.io/possibleagriculture, change to `base: '/possibleagriculture'`.)
  base: '/',
  output: 'static',
  trailingSlash: 'ignore',
  // Legacy URL redirects — pre-rebuild URLs map cleanly to new ones
  redirects: {
    '/home': '/',
    '/our-services': '/services',
    '/our-services/forest-managment': '/services/forest-management',
    '/our-services/forest-management': '/services/forest-management',
    '/farmers-and-feedlotters': '/biochar/farmers',
    '/turf-growers-golf-courses': '/biochar/turf-and-golf',
    '/councils': '/biochar/councils',
    '/contact-us': '/contact',
    '/biochar/biochar-library': '/library',
    '/library/compost': '/library',
  },
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto',
  },
  image: {
    // Allow processing local images during build
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  integrations: [
    tailwind({
      // We control base styles in src/styles/global.css; let Tailwind handle the rest
      applyBaseStyles: false,
    }),
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) =>
        // Exclude any draft or admin paths from the sitemap if/when they exist
        !page.includes('/drafts/') && !page.includes('/admin/'),
    }),
    mdx(),
  ],
  vite: {
    ssr: {
      noExternal: ['@astrojs/*'],
    },
  },
});

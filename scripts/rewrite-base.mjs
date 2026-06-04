#!/usr/bin/env node
// Post-build step: rewrite absolute root-relative URLs in the built HTML so
// they resolve correctly when the site is served from a subpath like
// https://g1winning.github.io/possible-agriculture/.
//
// Source code uses href="/foo" and src="/foo" (clean and DNS-cutover-ready).
// This script prefixes every internal /path with the configured base prefix
// in the dist/ output. When `base: '/'` in astro.config.mjs (post-cutover),
// the script is a no-op.
//
// Run automatically as part of `npm run build` via package.json's "build"
// script. Invoke manually with `node scripts/rewrite-base.mjs`.

import { readFile, writeFile, readdir, stat } from 'node:fs/promises';
import { join, extname } from 'node:path';

// Read base from astro.config.mjs by simple regex (avoiding importing the ESM config).
const config = await readFile('astro.config.mjs', 'utf8');
const productionFlag = /const PRODUCTION_DOMAIN\s*=\s*(true|false)/.exec(config);
const isProduction = productionFlag && productionFlag[1] === 'true';
const base = isProduction ? '/' : '/possible-agriculture';

if (base === '/' || base === '') {
  console.log('  [rewrite-base] base = "/" — nothing to do');
  process.exit(0);
}

const DIST = 'dist';
const PREFIX = base.replace(/\/$/, ''); // strip trailing slash if any
console.log(`  [rewrite-base] prefixing absolute paths with "${PREFIX}"`);

// Patterns: href, src, srcset, action — anything pointing at root-relative URLs.
// Must NOT match: protocol URLs (http://), protocol-relative (//), anchor (#),
// mailto/tel, or paths that already start with the prefix.
const PROTOCOL_OR_SPECIAL = /^(?:[a-z]+:|\/\/|#|mailto:|tel:|data:)/i;

function rewriteAttribute(html, attr) {
  // Match attr="/anything" OR attr="/" — must start with / but otherwise tolerate anything.
  const re = new RegExp(`(${attr}=["'])(\\/[^"']*)`, 'g');
  return html.replace(re, (match, lead, path) => {
    if (PROTOCOL_OR_SPECIAL.test(path)) return match;
    if (path.startsWith(`${PREFIX}/`) || path === PREFIX) return match;
    // Handle bare "/" → "/possible-agriculture/"
    if (path === '/') return `${lead}${PREFIX}/`;
    return `${lead}${PREFIX}${path}`;
  });
}

function rewriteSrcset(html) {
  // srcset="path 1x, path2 2x" — comma-separated
  return html.replace(/(srcset=["'])([^"']+)(["'])/g, (_, lead, value, end) => {
    const items = value.split(',').map((item) => {
      const [url, ...rest] = item.trim().split(/\s+/);
      if (!url || PROTOCOL_OR_SPECIAL.test(url) || !url.startsWith('/') || url.startsWith(`${PREFIX}/`)) {
        return item.trim();
      }
      return `${PREFIX}${url}${rest.length ? ' ' + rest.join(' ') : ''}`;
    });
    return `${lead}${items.join(', ')}${end}`;
  });
}

function rewriteJsonLdContent(html) {
  // Rewrite paths inside JSON-LD <script type="application/ld+json"> blocks
  // — these contain `url` and `image` fields that are absolute URLs at the
  // production domain. Don't touch those (they're production absolute URLs).
  // Nothing to do here.
  return html;
}

async function walk(dir) {
  const entries = await readdir(dir);
  for (const entry of entries) {
    const full = join(dir, entry);
    const s = await stat(full);
    if (s.isDirectory()) {
      await walk(full);
    } else if (extname(entry) === '.html') {
      let html = await readFile(full, 'utf8');
      html = rewriteAttribute(html, 'href');
      html = rewriteAttribute(html, 'src');
      html = rewriteAttribute(html, 'action');
      html = rewriteSrcset(html);
      html = rewriteJsonLdContent(html);
      await writeFile(full, html);
    }
  }
}

await walk(DIST);
console.log('  [rewrite-base] done');

/** @type {import('tailwindcss').Config} */
// Possible Agriculture — Tailwind config
// Tokens map 1:1 to /design-system/MASTER.md §3–§6. Do not introduce values outside this file.

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // §3 Colour system — brand-locked tokens
      colors: {
        // Core tokens
        ink: '#0E0E0E',
        paper: '#FFFFFF',
        bark: '#1F2820',
        'bush-gold': {
          DEFAULT: '#D9A65A',
          50: '#FBF5EA',
          100: '#F4E5C5',
          200: '#EBD09A',
          300: '#E2BC72',
          400: '#D9A65A',
          500: '#C8923F',
          600: '#A6772F',
          700: '#7C5921',
          800: '#553D17',
          900: '#332309',
        },
        sage: {
          DEFAULT: '#7A8265',
          50: '#F2F3EF',
          100: '#DDE0D5',
          200: '#C2C7B5',
          300: '#A5AC94',
          400: '#8A9279',
          500: '#7A8265',
          600: '#5F664D',
          700: '#474D38',
          800: '#2F3324',
          900: '#1A1C13',
        },
        eucalypt: {
          DEFAULT: '#3D4B36',
          50: '#EDF0EB',
          100: '#D3DACC',
          200: '#B0BDA6',
          300: '#8B9C80',
          400: '#677C5A',
          500: '#4E613E',
          600: '#3D4B36',
          700: '#2E3829',
          800: '#1F261B',
          900: '#10130E',
        },
        sky: {
          DEFAULT: '#A4B5BD',
          50: '#F2F5F6',
          100: '#DDE4E7',
          200: '#C2CFD4',
          300: '#A4B5BD',
          400: '#849AA4',
          500: '#67808C',
          600: '#536771',
          700: '#3F4E56',
          800: '#2A353A',
          900: '#161B1F',
        },
        umber: {
          DEFAULT: '#6B3F26',
          50: '#F3ECE6',
          100: '#DDC8B6',
          200: '#C2A180',
          300: '#A87B52',
          400: '#8A5E36',
          500: '#6B3F26',
          600: '#54311E',
          700: '#3D2317',
          800: '#27170E',
          900: '#130B07',
        },
        char: '#0E0E0E',

        // Semantic tokens — components should use these
        bg: {
          DEFAULT: '#FFFFFF',
          tint: '#FAF7F1',
          warm: '#F4EFE3',
          dark: '#1F2820',
        },
        text: {
          DEFAULT: '#0E0E0E',
          muted: '#4A4A47',
          inverse: '#FFFFFF',
          citation: '#6B3F26',
        },
        rule: {
          DEFAULT: 'rgba(122, 130, 101, 0.4)',
          dark: 'rgba(255, 255, 255, 0.12)',
        },
        success: '#3D4B36',
        error: '#9B3A2E',
      },

      // §4 Typography
      fontFamily: {
        display: ['Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['Open Sans', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        // Pixel-exact tokens from /design-system/MASTER.md §4.2
        // [fontSize, { lineHeight, letterSpacing, fontWeight }]
        eyebrow: ['0.75rem', { lineHeight: '1.125rem', letterSpacing: '0.1em', fontWeight: '600' }],
        'eyebrow-lg': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.1em', fontWeight: '600' }],
        caption: ['0.8125rem', { lineHeight: '1.25rem' }],
        citation: ['0.875rem', { lineHeight: '1.375rem', fontStyle: 'italic' }],
        'body-sm': ['0.9375rem', { lineHeight: '1.5rem' }],
        body: ['1.0625rem', { lineHeight: '1.75rem' }],
        'body-lg': ['1.1875rem', { lineHeight: '1.875rem' }],
        h4: ['1.125rem', { lineHeight: '1.5rem', fontWeight: '600' }],
        'h4-lg': ['1.25rem', { lineHeight: '1.625rem', fontWeight: '600' }],
        h3: ['1.375rem', { lineHeight: '1.75rem', fontWeight: '700' }],
        'h3-lg': ['1.75rem', { lineHeight: '2.125rem', fontWeight: '700' }],
        h2: ['1.75rem', { lineHeight: '2.125rem', fontWeight: '700' }],
        'h2-lg': ['2.5rem', { lineHeight: '2.875rem', fontWeight: '700' }],
        h1: ['2.5rem', { lineHeight: '2.75rem', letterSpacing: '-0.01em', fontWeight: '800' }],
        'h1-lg': ['4rem', { lineHeight: '4.25rem', letterSpacing: '-0.01em', fontWeight: '800' }],
        display: ['3.5rem', { lineHeight: '3.75rem', letterSpacing: '-0.01em', fontWeight: '800' }],
        'display-lg': ['6rem', { lineHeight: '6rem', letterSpacing: '-0.01em', fontWeight: '800' }],
        quote: ['1.375rem', { lineHeight: '2.125rem', fontStyle: 'italic' }],
        'quote-lg': ['1.625rem', { lineHeight: '2.375rem', fontStyle: 'italic' }],
      },

      // §5 Spacing scale (8pt baseline)
      spacing: {
        '1.5': '0.375rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '36': '9rem',
      },

      // §5.2 Container max-widths
      maxWidth: {
        prose: '72ch',
        narrow: '768px',
        default: '1120px',
        wide: '1280px',
      },

      // §6 Shadows
      boxShadow: {
        sm: '0 1px 2px rgba(14, 14, 14, 0.06)',
        DEFAULT: '0 2px 4px rgba(14, 14, 14, 0.06)',
        md: '0 4px 12px rgba(14, 14, 14, 0.08)',
        lg: '0 12px 32px rgba(14, 14, 14, 0.12)',
        xl: '0 24px 60px rgba(14, 14, 14, 0.14)',
        focus: '0 0 0 3px rgba(217, 166, 90, 0.45)',
      },

      // §6 Radius
      borderRadius: {
        sm: '4px',
        DEFAULT: '6px',
        md: '8px',
        lg: '12px',
        xl: '20px',
        '2xl': '28px',
        pill: '9999px',
      },

      // §6 Motion
      transitionDuration: {
        fast: '150ms',
        base: '220ms',
        slow: '320ms',
      },
      transitionTimingFunction: {
        'out-quart': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out-quart': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },

      aspectRatio: {
        hero: '21 / 9',
        'hero-mobile': '4 / 5',
        product: '1 / 1',
        case: '3 / 2',
        segment: '4 / 3',
      },

      // Typography plugin theme overrides
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.text.DEFAULT'),
            '--tw-prose-headings': theme('colors.ink'),
            '--tw-prose-lead': theme('colors.text.DEFAULT'),
            '--tw-prose-links': theme('colors.eucalypt.700'),
            '--tw-prose-bold': theme('colors.ink'),
            '--tw-prose-counters': theme('colors.sage.700'),
            '--tw-prose-bullets': theme('colors.sage.500'),
            '--tw-prose-hr': theme('colors.sage.200'),
            '--tw-prose-quotes': theme('colors.eucalypt.700'),
            '--tw-prose-quote-borders': theme('colors.bush-gold.DEFAULT'),
            '--tw-prose-captions': theme('colors.text.muted'),
            '--tw-prose-code': theme('colors.umber.700'),
            '--tw-prose-pre-code': theme('colors.paper'),
            '--tw-prose-pre-bg': theme('colors.bark'),
            '--tw-prose-th-borders': theme('colors.sage.300'),
            '--tw-prose-td-borders': theme('colors.sage.200'),
            color: theme('colors.text.DEFAULT'),
            maxWidth: '72ch',
            fontSize: '1.0625rem',
            lineHeight: '1.75rem',
            a: {
              color: theme('colors.eucalypt.700'),
              textUnderlineOffset: '3px',
              textDecorationThickness: '1px',
              fontWeight: '600',
              '&:hover': { color: theme('colors.bush-gold.600') },
            },
            'h1, h2, h3, h4': {
              fontFamily: theme('fontFamily.display').join(', '),
              fontWeight: '700',
              color: theme('colors.ink'),
            },
            h1: { fontSize: '2.5rem', lineHeight: '2.75rem', fontWeight: '800' },
            h2: { fontSize: '1.75rem', lineHeight: '2.125rem' },
            h3: { fontSize: '1.375rem', lineHeight: '1.75rem' },
            blockquote: {
              fontFamily: theme('fontFamily.sans').join(', '),
              fontStyle: 'italic',
              borderLeftWidth: '3px',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

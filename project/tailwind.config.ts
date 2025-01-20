import type { Config } from 'tailwindcss';
import fluid, { extract, screens, fontSize } from 'fluid-tailwind';
import forms from '@tailwindcss/forms';
import plugin from 'tailwindcss/plugin';

export default {
    content: {
        files: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
        extract,
    },
    theme: {
        screens,
        fontSize,
        extend: {
            screens: {
                xs: '20rem', // 320px
                sm: '23.4375rem', // 375px
                md: '48rem', // 768px
                lg: '64rem', // 1024px
                xl: '80rem', // 1280px
                '2xl': '96rem', // 1536px
                '3xl': '120rem', // 1920px
                '4xl': '160rem', // 2560px
                '5xl': '240rem', // 3840px
            },
            fontSize: {
                '6xl': '3.75rem', // 60px
                '7xl': '4.5rem', // 72px
                '8xl': '6rem', // 96px
                '9xl': '8rem', // 128px
                '10xl': '10rem', // 160px
                '11xl': '12rem', // 192px
                '12xl': '14rem', // 224px
            },
            colors: {
                text: {
                    primary: 'hsl(var(--text-primary) / <alpha-value>)',
                    secondary: 'hsl(var(--text-secondary) / <alpha-value>)',
                    inverted: 'hsl(var(--text-inverted) / <alpha-value>)',
                },
                logo: {
                    'gradient-1': 'hsl(var(--logo-gradient-1) / <alpha-value>)',
                    'gradient-2': 'hsl(var(--logo-gradient-2) / <alpha-value>)',
                    'gradient-3': 'hsl(var(--logo-gradient-3) / <alpha-value>)',
                },
                body: {
                    'gradient-1': 'hsl(var(--gradient-bg-color-1) / <alpha-value>)',
                    'gradient-2': 'hsl(var(--gradient-bg-color-2) / <alpha-value>)',
                    'gradient-3': 'hsl(var(--gradient-bg-color-3) / <alpha-value>)',
                    'gradient-4': 'hsl(var(--gradient-bg-color-4) / <alpha-value>)',
                },
                header: {
                    primary: 'hsl(var(--header-primary) / <alpha-value>)',
                },
                footer: {
                    primary: 'hsl(var(--footer-primary) / <alpha-value>)',
                },
                github: {
                    'stats-bg': 'hsl(var(--github-stats-bg) / <alpha-value>)',
                    'stats-icon': 'hsl(var(--github-stats-icon) / <alpha-value>)',
                    'stats-text': 'hsl(var(--github-stats-text) / <alpha-value>)',
                },
            },
        },
    },
    plugins: [
        fluid({
            checkSC144: false,
        }),
        forms,
        plugin(function ({ addUtilities }) {
            addUtilities({
                '.body-bg': {
                    position: 'relative',
                    '&::before': {
                        content: '""',
                        top: '0',
                        left: '0',
                        width: '100vw',
                        height: '100lvh',
                        position: 'fixed',
                        background: 'url(/body-backdrop.webp)',
                        'background-size': 'cover',
                        'background-position': 'center',
                        'background-repeat': 'no-repeat',
                        zIndex: '-50',
                    },
                },
            });
        }),
        plugin(function ({ addComponents }) {
            addComponents({
                // Base card style used across components
                '.card-base': {
                    '@apply rounded-xl border border-white/10 bg-white/[0.03] transition-all duration-150 lg:backdrop-blur-sm': {},
                    '&:hover': {
                        '@apply -translate-y-1 border-white/20 bg-white/[0.05]': {},
                    },
                },

                // Card with padding variant
                '.card-padded': {
                    '@apply card-base p-6': {},
                },

                // Gradient text styles
                '.gradient-text': {
                    '@apply bg-gradient-to-r from-logo-gradient-1 via-logo-gradient-2 to-logo-gradient-3 bg-clip-text text-transparent': {},
                },

                '.gradient-text-purple': {
                    '@apply bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent': {},
                },
            });
        }),
    ],
} satisfies Config;

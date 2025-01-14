import type { Config } from 'tailwindcss';
import fluid, { extract, screens, fontSize } from 'fluid-tailwind';
import forms from '@tailwindcss/forms';
import plugin from 'tailwindcss/plugin';
import animate from 'tailwindcss-animate';

export default {
    darkMode: ['class'],
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
                github: {
                    'stats-bg': 'hsl(var(--github-stats-bg) / <alpha-value>)',
                    'stats-icon': 'hsl(var(--github-stats-icon) / <alpha-value>)',
                    'stats-text': 'hsl(var(--github-stats-text) / <alpha-value>)',
                },
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
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
                '.body-gradient': {
                    background:
                        'linear-gradient(to bottom right, hsl(var(--gradient-bg-color-1)) 0%, hsl(var(--gradient-bg-color-2)) 35%, hsl(var(--gradient-bg-color-3)) 65%, hsl(var(--gradient-bg-color-4)) 100%)',
                    'background-attachment': 'fixed',
                },
            });
        }),
        animate,
    ],
    safelist: ['grid-cols-1', 'grid-cols-2', 'grid-cols-3', 'grid-cols-4', 'grid-cols-5'],
} satisfies Config;

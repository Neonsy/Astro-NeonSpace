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
                logo: {
                    'gradient-1': 'var(--logo-gradient-1)',
                    'gradient-2': 'var(--logo-gradient-2)',
                    'gradient-3': 'var(--logo-gradient-3)',
                },
                body: {
                    'gradient-1': 'var(--gradient-bg-color-1)',
                    'gradient-2': 'var(--gradient-bg-color-2)',
                    'gradient-3': 'var(--gradient-bg-color-3)',
                    'gradient-4': 'var(--gradient-bg-color-4)',
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
                '.body-gradient': {
                    'background':
                        'linear-gradient(to bottom right, var(--gradient-bg-color-1) 0%, var(--gradient-bg-color-2) 35%, var(--gradient-bg-color-3) 65%, var(--gradient-bg-color-4) 100%)',
                },
            });
        }),
    ],
} satisfies Config;

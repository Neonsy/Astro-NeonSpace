import type { Config } from 'tailwindcss';
import fluid, { extract, screens, fontSize } from 'fluid-tailwind';
import forms from '@tailwindcss/forms';

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
            },
        },
    },
    plugins: [
        fluid({
            checkSC144: false,
        }),
        forms,
    ],
} satisfies Config;

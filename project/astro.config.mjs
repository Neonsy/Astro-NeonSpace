// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

const ReactCompilerConfig = {
    // Optional: configure specific directories
    // sources: (filename) => {
    //   return filename.indexOf('src/components') !== -1;
    // },
    // Optional: specify React version if not using React 19
    // target: '18'
};

// https://astro.build/config
export default defineConfig({
    devToolbar: {
        enabled: false,
    },
    integrations: [
        tailwind(),
        react({
            babel: {
                plugins: [['babel-plugin-react-compiler', ReactCompilerConfig]],
            },
        }),
    ],
    site: 'https://astro-neonspace.vercel.app',
    trailingSlash: 'never',
    adapter: vercel(),
    output: 'server',
});

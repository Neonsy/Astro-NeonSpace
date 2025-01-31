// @ts-check
import { defineConfig, envField } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import clerk from '@clerk/astro';

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
        tailwind({ applyBaseStyles: false }),
        react({
            babel: {
                plugins: [['babel-plugin-react-compiler', ReactCompilerConfig]],
            },
        }),
        clerk(),
    ],
    site: 'https://neonsy.space',
    trailingSlash: 'never',
    adapter: vercel(),
    output: 'server',

});

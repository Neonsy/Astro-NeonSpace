import eslintPluginAstro from 'eslint-plugin-astro';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintConfigPrettier from 'eslint-config-prettier';
import tsParser from '@typescript-eslint/parser';
import astroParser from 'astro-eslint-parser';

export default [
    {
        files: ['**/*.astro'],
        plugins: {
            astro: eslintPluginAstro,
            'jsx-a11y': eslintPluginJsxA11y,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        languageOptions: {
            parser: astroParser,
            parserOptions: {
                parser: tsParser,
                extraFileExtensions: ['.astro'],
                sourceType: 'module',
            },
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        rules: {
            ...eslintPluginAstro.configs.recommended.rules,
            ...eslintPluginJsxA11y.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        },
    },
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                sourceType: 'module',
            },
        },
    },
    eslintConfigPrettier,
];

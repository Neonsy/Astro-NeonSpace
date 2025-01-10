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
        },
        languageOptions: {
            parser: astroParser,
            parserOptions: {
                parser: tsParser,
                extraFileExtensions: ['.astro'],
                sourceType: 'module',
            },
        },
        rules: {
            ...eslintPluginAstro.configs.recommended.rules,
            ...eslintPluginJsxA11y.configs.recommended.rules,
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

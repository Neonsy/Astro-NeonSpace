import tsParser from '@typescript-eslint/parser';
import astroParser from 'astro-eslint-parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import reactCompiler from 'eslint-plugin-react-compiler';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
    {
        files: ['**/*.astro'],
        plugins: {
            astro: eslintPluginAstro,
            'jsx-a11y': eslintPluginJsxA11y,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            'react-compiler': reactCompiler,
        },
        languageOptions: {
            parser: astroParser,
            parserOptions: {
                parser: tsParser,
                extraFileExtensions: ['.astro'],
                sourceType: 'module',
            },
            ecmaVersion: 2020,
        },
        rules: {
            ...eslintPluginAstro.configs.recommended.rules,
            ...eslintPluginJsxA11y.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': ['error', { allowConstantExport: true }],
            'react-compiler/react-compiler': 'error',
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

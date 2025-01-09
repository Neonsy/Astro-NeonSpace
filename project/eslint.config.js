import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginJsxA11y.configs.recommended,
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
  // This disables rules that conflict with Prettier
  eslintConfigPrettier,
];

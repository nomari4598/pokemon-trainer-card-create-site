import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      // "prettier/prettier": [
      //   "error",
      //   {
      //     // Prettierルールを追加
      //     semi: true,
      //     singleQuote: false,
      //     trailingComma: "es5",
      //     tabWidth: 2,
      //     useTabs: false,
      //     bracketSpacing: true,
      //     jsxBracketSameLine: false,
      //   },
      // ],
    },
  },
  {
    ignores: ["node_modules/", "dist/"],
  },
];

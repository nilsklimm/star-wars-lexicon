import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      indent: ["error", 2],
      "object-curly-spacing": ["error", "always"],
      "comma-dangle": ["error", "always-multiline"],
      "react/jsx-first-prop-new-line": ["error", "multiline"],
      "react/jsx-max-props-per-line": ["error", { maximum: 3 }],
    },
  },
]);

export default eslintConfig;

import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import { fixupPluginRules } from "@eslint/compat";
import stylistic from "@stylistic/eslint-plugin";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";
import tsParser from "@typescript-eslint/parser";
import _import from "eslint-plugin-import";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

export default tseslint.config(
  { ignores: ["**/node_modules", "*.(js|cjs|mjs)", "**/*.js"] },
  js.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  ...compat.extends("plugin:import/typescript"),
  {
    plugins: {
      react,
      import: fixupPluginRules(_import),
      "react-hooks": fixupPluginRules(reactHooks),
      "simple-import-sort": simpleImportSort,
      "@stylistic": stylistic,
      prettier,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2015,
        __ENVIRONMENT__: "readonly",
      },
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        project: true,
        ecmaFeatures: {
          modules: true,
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: false,
        createDefaultProgram: true,
      },
    },
    settings: {
      react: { version: "detect" },
      "import/resolver": {
        typescript: {
          node: {
            extensions: [".js", ".jsx", ".ts", ".tsx"],
            moduleDirectory: ["node_modules", "./src/"],
          },
        },
      },
    },
    rules: {
      "@typescript-eslint/no-dynamic-delete": "off",
      "@typescript-eslint/no-restricted-types": [
        "error",
        {
          types: {
            Object: {
              message: "Avoid using the `Object` type. Did you mean `object`?",
              fixWith: "object",
            },
            Function: {
              message:
                "Avoid using the `Function` type. Prefer a specific function type, like `() => void`.",
              fixWith: "() => void",
            },
            Boolean: {
              message:
                "Avoid using the `Boolean` type. Did you mean `boolean`?",
              fixWith: "boolean",
            },
            Number: {
              message: "Avoid using the `Number` type. Did you mean `number`?",
              fixWith: "number",
            },
            String: {
              message: "Avoid using the `String` type. Did you mean `string`?",
              fixWith: "string",
            },
            Symbol: {
              message:
                "Avoid using the `Symbol` type. Did you mean `symbol`?}}",
              fixWith: "symbol",
            },
          },
        },
      ],
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/consistent-generic-constructors": "off",
      "@typescript-eslint/member-ordering": [
        "warn",
        {
          default: [
            "signature",
            "public-static-field",
            "protected-static-field",
            "private-static-field",
            "public-field",
            "protected-field",
            "private-field",
            "static-field",
            "field",
            "public-constructor",
            "protected-constructor",
            "private-constructor",
            "constructor",
            "public-static-method",
            "protected-static-method",
            "private-static-method",
            "public-method",
            "protected-method",
            "private-method",
            "static-method",
            "method",
          ],
        },
      ],
      "@typescript-eslint/naming-convention": [
        "warn",
        {
          selector: "default",
          format: ["camelCase", "PascalCase", "UPPER_CASE"],
          leadingUnderscore: "allow",
        },
        { selector: "interface", format: ["PascalCase"] },
        {
          leadingUnderscore: "allow",
          selector: "property",
          format: ["camelCase", "PascalCase", "UPPER_CASE", "snake_case"],
        },
      ],
      "@typescript-eslint/no-empty-function": [
        "warn",
        { allow: ["constructors"] },
      ],
      "@typescript-eslint/no-floating-promises": "off",
      "@typescript-eslint/no-misused-promises": [
        "error",
        { checksVoidReturn: false, checksConditionals: true },
      ],
      "@typescript-eslint/no-unnecessary-type-assertion": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { ignoreRestSiblings: true, caughtErrorsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-unused-expressions": [
        "error",
        { allowTernary: true, allowShortCircuit: true },
      ],
      "@typescript-eslint/prefer-for-of": "warn",
      "@typescript-eslint/prefer-function-type": "warn",
      "@typescript-eslint/restrict-template-expressions": "warn",
      "@typescript-eslint/unbound-method": "off",
      "@typescript-eslint/unified-signatures": "error",
      "@typescript-eslint/array-type": ["error", { default: "array" }],
      "@stylistic/semi": "warn",
      camelcase: "off",
      curly: ["error", "multi-line"],
      "guard-for-in": "off",
      "dot-notation": "warn",
      "id-denylist": [
        "error",
        "any",
        "boolean",
        "number",
        "string",
        "Undefined",
        "Symbol",
        "object",
      ],
      "import/extensions": "off",
      "import/namespace": "off",
      "import/no-named-as-default-member": "off",
      "import/no-unresolved": "error",
      "max-classes-per-file": ["error", 1],
      "no-async-promise-executor": "error",
      "no-caller": "error",
      "no-case-declarations": "error",
      "no-constant-condition": "error",
      "no-debugger": "error",
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-nested-ternary": "warn",
      "no-new-wrappers": "error",
      "no-throw-literal": "error",
      "no-undef": "off",
      "no-undef-init": "warn",
      "no-unused-expressions": "off",
      "object-shorthand": "warn",
      "one-var": ["warn", "never"],
      radix: "off",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^react", "^mobx", "^@\\w", "^\\w"],
            ["^src\\/.*"],
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          ],
        },
      ],
      "@typescript-eslint/no-shadow": [
        "error",
        { builtinGlobals: false, hoist: "functions", allow: [] },
      ],
      "no-return-assign": "error",
      "react/jsx-filename-extension": [
        "warn",
        { extensions: [".jsx", ".tsx"] },
      ],
      "react/prop-types": "off",
      "react/display-name": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "no-shadow": "off",
      "no-restricted-exports": [
        "error",
        { restrictDefaultExports: { direct: true } },
      ],
      eqeqeq: ["error", "allow-null"],
      "no-else-return": ["error", { allowElseIf: false }],
      "no-empty-function": [
        "error",
        { allow: ["constructors", "functions", "methods"] },
      ],
      "no-console": "error",
      "prettier/prettier": ["error", { endOfLine: "auto" }],
    },
  },
);

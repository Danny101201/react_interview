import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import jest from 'eslint-plugin-jest';
import stylistic from '@stylistic/eslint-plugin'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends(
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "airbnb",
    // https://eslint.style/packages/ts
    // "airbnb-typescript",
    "plugin:@next/next/recommended",
    "prettier",
), {
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.jasmine,
            ...globals.jest,
            ...jest.environments.globals.globals,
            ...globals.node,
        },

        parser: tsParser,
        ecmaVersion: 5,
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },

            project: ["./tsconfig.json", "./tsconfig.eslint.json"],
        },
    },

    settings: {
        react: {
            version: "detect",
        },
    },

    rules: {
        "react/require-default-props": "off",
        "react/destructuring-assignment": "warn",
        "react/react-in-jsx-scope": "off",
        "react/jsx-props-no-spreading": "off",
        "react/jsx-curly-spacing": ["error", "never"],

        "react/jsx-sort-props": ["warn", {
            callbacksLast: true,
            reservedFirst: true,
            shorthandFirst: true,
        }],

        "react/jsx-tag-spacing": ["error", {
            closingSlash: "never",
            beforeClosing: "never",
            beforeSelfClosing: "always",
        }],

        "react/function-component-definition": ["error", {
            namedComponents: "arrow-function",
            unnamedComponents: "arrow-function",
        }],

        "react/no-unknown-property": ["error", {
            ignore: ["jsx", "global"],
        }],

        "react/prop-types": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "import/extensions": "off",
        "import/prefer-default-export": "off",

        "no-param-reassign": ["error", {
            ignorePropertyModificationsFor: ["draft"],
        }],
    },
    plugins: {
        '@stylistic': stylistic
    }
}, ...compat.extends(
    "plugin:jest/recommended",
    "plugin:jest-dom/recommended",
    "plugin:testing-library/react",
).map(config => ({
    ...config,
    files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
}))];
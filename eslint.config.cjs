const {
    defineConfig,
    globalIgnores,
} = require("eslint/config");

const globals = require("globals");

const {
    fixupConfigRules,
} = require("@eslint/compat");

const reactRefresh = require("eslint-plugin-react-refresh").default;
const js = require("@eslint/js");
const tseslint = require("typescript-eslint");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([
    ...tseslint.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
            },

            ecmaVersion: "latest",
            sourceType: "module",
            parserOptions: {},
        },

        extends: fixupConfigRules(compat.extends(
            "eslint:recommended",
            "plugin:react/recommended",
            "plugin:react/jsx-runtime",
            "plugin:react-hooks/recommended",
        )),

        settings: {
            react: {
                version: "detect",
            },
        },

        plugins: {
            "react-refresh": reactRefresh,
        },

        rules: {
            "react-refresh/only-export-components": ["warn", {
                allowConstantExport: true,
            }],
            "react/prop-types": "off",
        },
    },
    globalIgnores(["**/dist", "**/eslint.config.cjs"]),
]);

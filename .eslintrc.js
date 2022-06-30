module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks",
        "@typescript-eslint",
        "prettier"
    ],
    settings: {
        react: {
            version: "detect",
        },
    },
    rules: {
        /*quotes: ["error", "double"],
        "linebreak-style": "off", // don't care about windows vs unix newline differences
        "max-len": ["error", { code: 120 }], // can add exceptions to line length rule here
        "eol-last": ["off", "never"], // don't care about files ending in newline
        "prefer-const": "warn",
        "require-jsdoc": "off",
        "no-unused-vars": "off", // typescript version is "warn", so having this "on" or "warn" creates redundant errors/warnings
        "@typescript-eslint/no-unused-vars": "warn",
        "object-curly-spacing": ["error", "always"],
        "no-prototype-builtins": "warn",
        "@typescript-eslint/no-empty-interface": "warn",
        "prettier/prettier": ["error"],
        "no-constant-condition": "off",*/
        "react/react-in-jsx-scope": "off",
        "camelcase": "error",
        "spaced-comment": "error",
        "quotes": ["error", "single"],
        "no-duplicate-imports": "error"
    },
}

module.exports = {
    plugins: ["@html-eslint"],
    overrides: [
    {
        files: ["*.html"],
        parser: "@html-eslint/parser",
        extends: ["plugin:@html-eslint/recommended"]
    }
    ],
    rules: {
        "@html-eslint/require-closing-tags": "error",
    },
    settings: {
        allowSelfClosingCustom: true,
        selfClosing: "always"
    }
}

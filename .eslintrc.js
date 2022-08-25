module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: [
    "plugin:jest/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  ignorePatterns: ["src/*.scss"],
  rules: {
    "no-console": "off",
    "jest/valid-title": "off",
    "import/prefer-default-export": "off",
    "no-alert": "off",
    "no-restricted-globals": "off",
    "no-plusplus": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "max-len": [
      "off",
      {
        ignoreComments: true,
      },
    ],
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-explicit-any": ["off"],
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-unused-vars":"off",
    "no-unused-vars": ["off", { argsIgnorePattern: "^_" }],
  },
};

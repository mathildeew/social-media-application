`{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "overrides": [
    {
      "files": ["**/*.test.js", "src/helpers/**/*.js"],
      "env": { "jest": true },
      "plugins": ["jest"],
      "extends": ["plugin:jest/recommended"],
      "rules": {
        "jest/prefer-expect-assertions": "off",
        "no-undef": "off",
        "no-global-assign": "off"
      }
    },
    {
      "files": ["**/*.cy.js", "cypress.config.js"],
      "env": { "cypress/globals": true },
      "plugins": ["cypress"],
      "extends": ["plugin:cypress/recommended"],
      "rules": {
        "cypress/no-unnecessary-waiting": "off",
        "no-unused-vars": "off",
        "no-undef": "off"
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  }
}`;

export default {
  setItem: jest.fn((key, value) => (localStorage[key] = value)),
  getItem: jest.fn((key) => localStorage[key] || null),
  removeItem: jest.fn((key) => delete localStorage[key]),
  clear: jest.fn(() => (localStorage = {})),
};

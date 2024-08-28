export default {
  env: {
    jest: true,
    node: true,
    browser: true
  },
  files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
  ignores: [
    "node_modules",
    "coverage",
    "src/__test__"
  ],
  rules: {
    "prefer-const": "warn",
    "no-constant-binary-expression": "error"
  }
};

   
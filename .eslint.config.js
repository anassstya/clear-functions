export default [
  {
    'env': {
      'jest': true,
      'node': true,
      'browser': true
    },

    files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
    rules: {
        "prefer-const": "warn",
        "no-constant-binary-expression": "error"
    }
  },
  
];
   
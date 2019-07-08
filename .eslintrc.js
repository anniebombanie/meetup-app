module.exports = {
  // enable plugin
  plugins: ["prettier"],
  // makes it work
  rules: {
    "prettier/prettier": ["warn", { trailingComma: "es5", singleQuote: true }],
  },
  // makes sure they don't conflict for formatting
  extends: ["prettier", "react-app"]
};
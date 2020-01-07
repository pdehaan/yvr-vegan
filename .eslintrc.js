module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ["eslint:recommended"],
  overrides: [
    {
      files: ["./src/site/_includes/js/*.js"],
      env: {
        browser: true,
        commonjs: false,
        node: false
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    indent: ["error", 2]
  }
};

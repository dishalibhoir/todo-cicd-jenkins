module.exports = {
  ignores: ['node_modules/**', 'package-lock.json'],
  env: {
    node: true,
    es6: true,
    mocha: true  // This will include all the Mocha globals
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'off'
    // The json/no-empty-keys rule would need a plugin
  }
};

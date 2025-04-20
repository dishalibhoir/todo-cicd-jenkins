// eslint.config.js
export default [
    {
      ignores: ['node_modules/**', 'package-lock.json'],
    },
    {
      files: ['**/*.js'],
      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        globals: {
          // Add Mocha globals explicitly
          describe: true,
          it: true,
          before: true,
          after: true,
          beforeEach: true,
          afterEach: true
        }
      },
      rules: {
        'no-unused-vars': 'warn',
        'no-console': 'off',
        // Disable json/no-empty-keys rule
        'json/no-empty-keys': 'off',
      },
    }
  ];

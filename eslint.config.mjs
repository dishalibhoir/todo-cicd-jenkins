// eslint.config.mjs
import js from '@eslint/js';
import globals from 'globals';
import eslintPluginNode from 'eslint-plugin-n';
import eslintPluginImport from 'eslint-plugin-import';

export default [
  // Base ESLint recommended rules
  js.configs.recommended,
  
  // Node.js specific rules and globals
  {
    plugins: {
      n: eslintPluginNode,
      import: eslintPluginImport
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node, // Node.js global variables
      }
    },
    rules: {
      // Node.js specific rules
      'n/handle-callback-err': 'error',
      'n/no-callback-literal': 'error',
      'n/no-deprecated-api': 'error',
      'n/no-exports-assign': 'error',
      'n/no-new-require': 'error',
      'n/no-path-concat': 'error',
      'n/process-exit-as-throw': 'error',
      
      // Import/export rules
      'import/no-unresolved': 'error',
      'import/named': 'error',
      'import/namespace': 'error',
      'import/default': 'error',
      'import/export': 'error',
      
      // CommonJS specific rules
      'no-var-requires': 'off', // Allow require()
      'strict': ['error', 'global'] // Global strict mode
    }
  },
  
  // Project-specific rules
  {
    rules: {
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'indent': ['error', 2],
      'no-console': 'warn',
      'camelcase': 'error',
      'eqeqeq': 'error',
      'no-unused-vars': 'warn'
    }
  }
];

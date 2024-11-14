import globals from 'globals';
import pluginJs from '@eslint/js';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { globals: globals.browser },
    ignores: ['./config/*.js', '!**/eslint.config.js'],
    extends: ["next/babel","next/core-web-vitals"],
    rules: {
      'no-console': 'warn',
      //* Avoid Bugs
      'no-undef': 'error',
      'semi': 'error',
      'semi-spacing': 'error',
      //* Best Practices
      'eqeqeq': 'warn',
      'no-invalid-this': 'error',
      'no-return-assign': 'error',
      'no-unused-expressions': ['error', { 'allowTernary': true }],
      'no-useless-concat': 'error',
      'no-useless-return': 'error',
      'no-constant-condition': 'warn',
      'no-unused-vars': ['warn', { 'argsIgnorePattern': 'req|res|next|__' }],
      //* Enhance Readability
      'indent': ['error', 2, { 'SwitchCase': 1 }],
      'no-mixed-spaces-and-tabs': 'warn',
      'space-before-blocks': 'error',
      'space-in-parens': 'error',
      'space-infix-ops': 'error',
      'space-unary-ops': 'error',
      'quotes': ['error', 'single'],
      //* ES6
      'arrow-spacing': 'error',
      'no-confusing-arrow': 'error',
      'no-duplicate-imports': 'error',
      'no-var': 'error',
      'object-shorthand': 'off',
      'prefer-const': 'error',
      'prefer-template': 'warn'
    }
  },
  pluginJs.configs.recommended,
];
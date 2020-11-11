module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'google',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/prop-types': 0,
    'require-jsdoc': 0,
    'max-len': ['error', {'code': 120}],
    'camelcase': 'off',
  },
  ignorePatterns: ['*.stories.tsx'],
  overrides: [
    {
      files: ['*.validation.ts'],
      rules: {
        'no-unused-vars': 'off',
      },
    },
  ],
};

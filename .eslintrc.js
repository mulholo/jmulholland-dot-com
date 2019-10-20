module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    'jest/globals': true,
  },
  plugins: ['@typescript-eslint', 'react', 'jest'],
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'eslint-config-prettier', // must be last
    'prettier/@typescript-eslint',
  ],
  rules: {
    'react/prop-types': 0,
    'jsx-quotes': ['error', 'prefer-single'],
    'react/no-unescaped-entities': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-empty-interface': 0,
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-var-requires': 0,
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      'Hyperlink',
      { name: 'Link', linkAttribute: 'to' },
    ],
  },
}

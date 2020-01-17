module.exports = {
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
  plugins: ['react', 'jest'],
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'eslint-config-prettier', // must be last
  ],
  rules: {
    'react/prop-types': 0,
    'jsx-quotes': ['error', 'prefer-single'],
    'react/no-unescaped-entities': 0,
  },
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

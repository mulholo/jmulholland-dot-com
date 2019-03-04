module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    'jest/globals': true,
  },
  extends: [
    'standard',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'eslint-config-prettier', // must be last
  ],
  plugins: ['react', 'jest'],
  rules: {
    'react/prop-types': 0,
    'jsx-quotes': ['error', 'prefer-single'],
    'react/no-unescaped-entities': 0,
  },
  settings: {
    react: {
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
    },
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      'Hyperlink',
      { name: 'Link', linkAttribute: 'to' },
    ],
  },
}

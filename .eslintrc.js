module.exports = {
  env: {
    'jest/globals': true,
  },
  extends: [
    'standard',
    'plugin:jest/recommended',
    'eslint-config-prettier', // must be last
  ],
  plugins: ['react', 'jest'],
  rules: {
    'react/prop-types': 0,
    'jsx-quotes': ['error', 'prefer-single'],
    'react/no-unescaped-entities': 0,
  },
}

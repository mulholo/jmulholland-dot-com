module.exports = {
  //parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  env: {
    'jest/globals': true,
  },
  plugins: ['react', 'jest' /*'@typescript-eslint' */],
  extends: [
    'standard',
    // 'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'eslint-config-prettier', // must be last
    // 'prettier/@typescript-eslint',
  ],
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

const path = require('path');

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['airbnb-base', 'plugin:vue/recommended', 'prettier'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: false,
    },
  },
  plugins: ['vue', 'prettier'],
  globals: {
    path: true,
    axios: true,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: {
              '@': path.resolve('src/vue'),
            },
            extensions: ['.js', '.json', '.vue'],
          },
        },
      },
    },
  },
  rules: {
    'vue/v-slot-style': [
      'error',
      {
        atComponent: 'longform',
        default: 'longform',
        named: 'longform',
      },
    ],
    'vue/component-definition-name-casing': ['error', 'kebab-case'],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'prefer-destructuring': 'off',
    'linebreak-style': ['error', 'unix'],
    camelcase: 'warn',
    'prettier/prettier': 'error',
  },
};

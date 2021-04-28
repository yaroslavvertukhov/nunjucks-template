const path = require('path');

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['airbnb-base', 'plugin:vue/recommended'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: false,
    },
  },
  plugins: ['vue'],
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
    'vue/v-slot-style': ['error', {
      atComponent: 'longform',
      default: 'longform',
      named: 'longform',
    }],
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'prefer-destructuring': 'off',
    'linebreak-style': ['error', 'unix'],
    camelcase: 'warn',
  },
};

const path = require('path');

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/essential',
    'plugin:vue/recommended',
    'prettier',
  ],
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
    'vue/v-on-function-call': ['error'],
    'vue/no-template-shadow': 'off',
    'no-var': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'prefer-destructuring': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    camelcase: 'warn',
    'prettier/prettier': 'error',
    'no-plusplus': ['off'],
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'func-names': ['off'],
    'no-new': ['off'],
  },
};

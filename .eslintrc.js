module.exports = {
  env: {
    jest: true,
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    shallow: true,
    render: true,
    mount: true,
    shallowToJson: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', 'avoid-escape'],
    'no-underscore-dangle': 'off',
    'no-restricted-globals': 'off',
    'no-console': 'off',
    'no-plusplus': 'off',
    'no-shadow': 0,
    semi: 0,
    'import/no-named-as-default': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'react/default-props-match-prop-types': 0,
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelAttributes: ['label']
      }
    ],
    'max-len': 0,
    'import/prefer-default-export': 0,
    'no-param-reassign': 0,
    'import/no-unresolved': 0,
    camelcase: 0,
    'react/no-unescaped-entities': 0,
    'react/forbid-prop-types': 0,
    'prefer-const': 0,
    'react/no-array-index-key': 0
  },
  parser: 'babel-eslint'
}

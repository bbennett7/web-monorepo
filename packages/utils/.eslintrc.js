module.exports = {
  extends: [
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  plugins: ['prettier'],
  ignorePatterns: ['**/coverage/**', 'jest.config.js', '.eslintrc.js', 'rollup.config.js'],
  rules: {
    'array-element-newline': ['error', {
      'ArrayExpression': 'consistent',
      'ArrayPattern': { 'minItems': 3 },
     }],
    'prettier/prettier': ['error', { 'singleQuote': true }],
  },
  overrides: [
    {
      files: ['**/*.test.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      }
    },
    {
      files: ['__mocks__/**'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
      }
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
  parser: '@typescript-eslint/parser',
  'parserOptions': {
    'project': './tsconfig.json'
},
  env: {
    jest: true,
    node: true,
  },
}

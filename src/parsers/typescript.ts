import parser from '@typescript-eslint/parser'

export default {
  name: 'dethdkn/tsParser',
  files: ['**/*.?([cm])[jt]s?(x)', '**/*.vue'],
  languageOptions: {
    parser,
    parserOptions: {
      extraFileExtensions: ['.vue'],
      sourceType: 'module',
    },
  },
}

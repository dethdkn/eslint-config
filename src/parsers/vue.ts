import parser from 'vue-eslint-parser'

export default {
  name: 'dethdkn/vueParser',
  files: ['**/*.vue'],
  languageOptions: {
    parser,
    parserOptions: {
      extraFileExtensions: ['.vue'],
      sourceType: 'module',
      ecmaFeatures: { jsx: true },
      parser: {
        version: '7.9.0',
        meta: { name: 'typescript-eslint/parser', version: '7.9.0' },
      },
    },
  },
}

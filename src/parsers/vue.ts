import tsparser from '@typescript-eslint/parser'
import parser from 'vue-eslint-parser'

export default {
  name: 'dethdkn/vue/parser',
  files: ['**/*.vue'],
  languageOptions: {
    parser,
    parserOptions: {
      extraFileExtensions: ['.vue'],
      parser: tsparser,
      sourceType: 'module' as const,
    },
  },
}

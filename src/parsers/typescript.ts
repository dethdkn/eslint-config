import parser from '@typescript-eslint/parser'

export default {
  name: 'dethdkn/typescript/parser',
  files: ['**/*.?([cm])[jt]s?(x)'],
  languageOptions: {
    parser,
    parserOptions: {
      extraFileExtensions: ['.vue'],
      sourceType: 'module' as const,
    },
  },
}

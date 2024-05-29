import parser from 'jsonc-eslint-parser'

export default {
  name: 'dethdkn/json/parser',
  files: ['**/*.json', '**/*.jsonc', '**/*.json5'],
  languageOptions: {
    parser,
  },
}

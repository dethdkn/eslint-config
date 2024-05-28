import parser from 'jsonc-eslint-parser'

export default {
  name: 'dethdkn/jsonParser',
  files: ['**/*.json', '**/*.jsonc', '**/*.json5'],
  languageOptions: {
    parser,
  },
}

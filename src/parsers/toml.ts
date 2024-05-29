import parser from 'toml-eslint-parser'

export default {
  name: 'dethdkn/toml/parser',
  files: ['**/*.toml'],
  languageOptions: {
    parser,
  },
}

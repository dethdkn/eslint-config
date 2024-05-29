import parser from 'yaml-eslint-parser'

export default {
  name: 'dethdkn/yaml/parser',
  files: ['**/*.yml', '**/*.yaml'],
  languageOptions: {
    parser,
  },
}

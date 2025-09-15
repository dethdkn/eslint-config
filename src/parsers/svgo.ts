import type { Linter } from 'eslint'
import { parserPlain as parser } from 'eslint-plugin-svgo'

export default {
  name: 'dethdkn/svgo/parser',
  files: ['**/*.svg'],
  languageOptions: {
    parser,
  },
} as Linter.Config

import type { Linter } from 'eslint'
import toml from 'eslint-plugin-toml'

export default {
  name: 'dethdkn/toml/rules',
  plugins: { toml },
  files: ['**/*.toml'],
  rules: {
    'stylistic/spaced-comment': ['off'],
    'toml/comma-style': ['error'],
    'toml/keys-order': ['error'],
    'toml/no-space-dots': ['error'],
    'toml/no-unreadable-number-separator': ['error'],
    'toml/precision-of-fractional-seconds': ['error'],
    'toml/precision-of-integer': ['error'],
    'toml/tables-order': ['error'],
    'toml/vue-custom-block/no-parsing-error': ['error'],
    'toml/array-bracket-newline': ['error'],
    'toml/array-bracket-spacing': ['error'],
    'toml/array-element-newline': ['error'],
    'toml/indent': ['error', 2],
    'toml/inline-table-curly-spacing': ['error'],
    'toml/key-spacing': ['error'],
    'toml/padding-line-between-pairs': ['error'],
    'toml/padding-line-between-tables': ['error'],
    'toml/quoted-keys': ['error'],
    'toml/spaced-comment': ['error'],
    'toml/table-bracket-spacing': ['error'],
  },
} as Linter.FlatConfig

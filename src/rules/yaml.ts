import type { Linter } from 'eslint'
import yaml from 'eslint-plugin-yml'

export default {
  name: 'dethdkn/yaml/rules',
  plugins: { yaml },
  files: ['**/*.yml', '**/*.yaml'],
  rules: {
    'stylistic/spaced-comment': ['off'],
    'yaml/block-mapping': ['error'],
    'yaml/block-sequence': ['error'],
    'yaml/no-empty-key': ['error'],
    'yaml/no-empty-sequence-entry': ['error'],
    'yaml/no-irregular-whitespace': ['error'],
    'yaml/plain-scalar': ['error'],
    'yaml/vue-custom-block/no-parsing-error': ['error'],
    'yaml/block-mapping-question-indicator-newline': ['error'],
    'yaml/block-sequence-hyphen-indicator-newline': ['error'],
    'yaml/flow-mapping-curly-newline': ['error'],
    'yaml/flow-mapping-curly-spacing': ['error'],
    'yaml/flow-sequence-bracket-newline': ['error'],
    'yaml/flow-sequence-bracket-spacing': ['error'],
    'yaml/indent': ['error', 2],
    'yaml/key-spacing': ['error'],
    'yaml/no-tab-indent': ['error'],
    'yaml/quotes': ['error', { avoidEscape: false, prefer: 'single' }],
    'yaml/spaced-comment': ['error'],
  },
} as Linter.FlatConfig

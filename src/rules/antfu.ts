import type { Linter } from 'eslint'
import antfu from 'eslint-plugin-antfu'

export default {
  name: 'dethdkn/antfu/rules',
  plugins: { antfu },
  rules: {
    'antfu/consistent-list-newline': ['error'],
    'antfu/import-dedupe': ['error'],
    'antfu/no-import-node-modules-by-path': ['error'],
    'antfu/top-level-function': ['error'],
  },
} as Linter.FlatConfig

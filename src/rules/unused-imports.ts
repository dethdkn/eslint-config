import type { Linter } from 'eslint'

import unusedImports from 'eslint-plugin-unused-imports'

export default {
  name: 'dethdkn/unused-imports/rules',
  plugins: { 'unused-imports': unusedImports },
  rules: {
    'unused-imports/no-unused-vars': ['error', { args: 'after-used', argsIgnorePattern: '^_', ignoreRestSiblings: true, vars: 'all', varsIgnorePattern: '^_' }],
    'unused-imports/no-unused-imports': ['error'],
  },
} as Linter.FlatConfig

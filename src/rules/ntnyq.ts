import type { Linter } from 'eslint'
import ntnyq from 'eslint-plugin-ntnyq'

export default {
  name: 'dethdkn/ntnyq/rules',
  plugins: { ntnyq },
  rules: {
    'ntnyq/no-duplicate-exports': ['error'],
  },
} as Linter.Config

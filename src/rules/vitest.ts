import type { Linter } from 'eslint'

import onlyTest from 'eslint-plugin-no-only-tests'
import vitest from 'eslint-plugin-vitest'

export default {
  name: 'dethdkn/vitest/rules',
  plugins: { 'only-test': onlyTest, vitest },
  rules: {
    'only-test/no-only-tests': ['error'],
    'vitest/consistent-test-it': ['error', { fn: 'it', withinDescribe: 'it' }],
    'vitest/no-identical-title': ['error'],
    'vitest/no-import-node-test': ['error'],
    'vitest/prefer-hooks-in-order': ['error'],
    'vitest/prefer-lowercase-title': ['error'],
  },
} as Linter.FlatConfig

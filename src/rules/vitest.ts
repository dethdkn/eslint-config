import type { Linter } from 'eslint'
import vitest from '@vitest/eslint-plugin'
import onlyTest from 'eslint-plugin-no-only-tests'

export default {
  name: 'dethdkn/vitest/rules',
  // eslint-disable-next-line typescript/no-explicit-any
  plugins: { 'only-test': onlyTest, 'vitest': vitest as any },
  rules: {
    'only-test/no-only-tests': ['error'],
    'vitest/consistent-test-it': ['error', { fn: 'it', withinDescribe: 'it' }],
    'vitest/no-identical-title': ['error'],
    'vitest/no-import-node-test': ['error'],
    'vitest/prefer-hooks-in-order': ['error'],
    'vitest/prefer-lowercase-title': ['error'],
  },
} as Linter.Config

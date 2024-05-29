import type { Linter } from 'eslint'
import node from 'eslint-plugin-n'

export default {
  name: 'dethdkn/node/rules',
  plugins: { node },
  rules: {
    'node/global-require': ['error'],
    'node/handle-callback-err': ['error', '^(err|error)$'],
    'node/no-deprecated-api': ['error'],
    'node/no-exports-assign': ['error'],
    'node/no-new-require': ['error'],
    'node/no-path-concat': ['error'],
    'node/prefer-global/buffer': ['error', 'never'],
    'node/prefer-global/process': ['error', 'never'],
    'node/prefer-promises/fs': ['error'],
    'node/process-exit-as-throw': ['error'],
  },
} as Linter.FlatConfig

import type { Linter } from 'eslint'
import * as importx from 'eslint-plugin-import-x'

export default {
  name: 'dethdkn/importx/rules',
  plugins: { importx } as { importx: unknown },
  rules: {
    'importx/first': ['error'],
    'importx/no-duplicates': ['error'],
    'importx/no-mutable-exports': ['error'],
    'importx/no-named-default': ['error'],
    'importx/no-self-import': ['error'],
    'importx/no-webpack-loader-syntax': ['error'],
    'importx/newline-after-import': ['error'],
  },
} as Linter.Config

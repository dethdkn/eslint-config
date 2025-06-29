import type { Linter } from 'eslint'
// @ts-ignore no types support for eslint-plugin-promise
import promise from 'eslint-plugin-promise'

export default {
  name: 'dethdkn/promise/rules',
  plugins: { promise },
  rules: {
    'promise/always-return': ['error'],
    'promise/catch-or-return': ['error'],
    'promise/no-multiple-resolved': ['error'],
    'promise/no-nesting': ['error'],
    'promise/no-new-statics': ['error'],
    'promise/no-promise-in-callback': ['error'],
    'promise/no-return-in-finally': ['error'],
    'promise/no-return-wrap': ['error'],
    'promise/param-names': ['error'],
    'promise/prefer-await-to-callbacks': ['error'],
    'promise/prefer-await-to-then': ['error'],
    'promise/spec-only': ['error'],
    'promise/valid-params': ['error'],
  },
} as Linter.Config

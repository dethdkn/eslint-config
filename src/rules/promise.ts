import type { Linter } from 'eslint'
import promise from 'eslint-plugin-promise'

export default {
  name: 'dethdkn/promise/rules',
  plugins: { promise },
  rules: {
    'promise/always-return': ['error'],
    'promise/catch-or-return': ['error'],
    // https://github.com/eslint-community/eslint-plugin-promise/issues/472
    // 'promise/no-multiple-resolved': ['error'],
    'promise/no-nesting': ['error'],
    'promise/no-new-statics': ['error'],
    'promise/no-promise-in-callback': ['error'],
    'promise/no-return-in-finally': ['error'],
    'promise/no-return-wrap': ['error'],
    'promise/param-names': ['error'],
    'promise/prefer-await-to-callbacks': ['error'],
    'promise/prefer-await-to-then': ['error'],
    'promise/valid-params': ['error'],
  },
} as Linter.FlatConfig

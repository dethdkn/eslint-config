import * as importx from 'eslint-plugin-import-x'

export default {
  name: 'dethdkn/importx/rules',
  plugins: { importx },
  rules: {
    'importx/first': ['error'],
    'importx/no-duplicates': ['error'],
    'importx/no-mutable-exports': ['error'],
    'importx/no-named-default': ['error'],
    'importx/no-self-import': ['error'],
    'importx/no-webpack-loader-syntax': ['error'],
    'importx/order': ['error'],
    'importx/newline-after-import': ['error'],
  },
}

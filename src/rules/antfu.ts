import antfu from 'eslint-plugin-antfu'

export default {
  name: 'dethdkn/antfu',
  plugins: { antfu: antfu },
  rules: {
    'antfu/consistent-list-newline': ['error'],
    'antfu/import-dedupe': ['error'],
    'antfu/top-level-function': ['error'],
  },
}

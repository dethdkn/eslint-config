import antfu from 'eslint-plugin-antfu'

export default {
  name: 'dethdkn/antfu',
  plugins: { antfu },
  rules: {
    'antfu/consistent-list-newline': ['error'],
    'antfu/import-dedupe': ['error'],
    'antfu/no-import-node-modules-by-path': ['error'],
    'antfu/top-level-function': ['error'],
  },
}

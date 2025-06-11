import type { Linter } from 'eslint'
// @ts-ignore no types support for eslint-comments plugin
import eslintComments from '@eslint-community/eslint-plugin-eslint-comments'

export default {
  name: 'dethdkn/eslint-comments/rules',
  plugins: { 'eslint-comments': eslintComments },
  rules: {
    'eslint-comments/no-aggregating-enable': ['error'],
    'eslint-comments/no-duplicate-disable': ['error'],
    'eslint-comments/no-unlimited-disable': ['error'],
    'eslint-comments/no-unused-enable': ['error'],
  },
} as Linter.Config

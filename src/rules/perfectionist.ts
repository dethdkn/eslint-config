import type { Linter } from 'eslint'
import perfectionist from 'eslint-plugin-perfectionist'

export default {
  name: 'dethdkn/perfectionist/rules',
  plugins: { perfectionist },
  rules: {
    'perfectionist/sort-array-includes': ['error'],
    'perfectionist/sort-exports': ['error'],
    'perfectionist/sort-imports': ['error', { newlinesBetween: 'never' }],
    'perfectionist/sort-named-exports': ['error'],
    'perfectionist/sort-intersection-types': ['error'],
    'perfectionist/sort-union-types': ['error'],
  },
} as Linter.FlatConfig

import perfectionist from 'eslint-plugin-perfectionist'

export default {
  name: 'dethdkn/perfectionist',
  plugins: { perfectionist },
  rules: {
    'perfectionist/sort-array-includes': ['error'],
    'perfectionist/sort-exports': ['error'],
    'perfectionist/sort-imports': ['error'],
    'perfectionist/sort-named-exports': ['error'],
    // thinking about this one
    // 'perfectionist/sort-vue-attributes': ['error'],
  },
}
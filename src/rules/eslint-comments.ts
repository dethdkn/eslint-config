import eslintComments from 'eslint-plugin-eslint-comments'

export default {
  name: 'dethdkn/eslint-comments',
  plugins: { 'eslint-comments': eslintComments },
  rules: {
    'eslint-comments/no-aggregating-enable': ['error'],
    'eslint-comments/no-duplicate-disable': ['error'],
    'eslint-comments/no-unlimited-disable': ['error'],
    'eslint-comments/no-unused-enable': ['error'],
  },
}

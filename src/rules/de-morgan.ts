import type { Linter } from 'eslint'
import deMorgan from 'eslint-plugin-de-morgan'

export default {
  name: 'dethdkn/de-morgan/rules',
  plugins: { 'de-morgan': deMorgan },
  rules: {
    'de-morgan/no-negated-conjunction': ['error'],
    'de-morgan/no-negated-disjunction': ['error'],
  },
} as Linter.Config

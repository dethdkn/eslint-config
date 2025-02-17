import type { Linter } from 'eslint'
import reactI18n from 'eslint-plugin-i18next'

export default {
  name: 'dethdkn/react-i18n/rules',
  plugins: { 'react-i18n': reactI18n },
  rules: {
    'react-i18n/no-literal-string': ['error'],
  },
} as Linter.Config

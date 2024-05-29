import nuxt from '@nuxt/eslint-plugin'
import type { Linter } from 'eslint'

export default {
  name: 'dethdkn/nuxt/rules',
  plugins: { nuxt },
  rules: {
    'nuxt/prefer-import-meta': ['error'],
  },
} as Linter.FlatConfig

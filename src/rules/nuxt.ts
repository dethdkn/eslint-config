import type { Linter } from 'eslint'
import nuxt from '@nuxt/eslint-plugin'

export default {
  name: 'dethdkn/nuxt/rules',
  plugins: { nuxt },
  rules: {
    'nuxt/prefer-import-meta': ['error'],
  },
} as Linter.Config

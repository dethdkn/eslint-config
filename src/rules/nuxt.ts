import type { Linter } from 'eslint'
import nuxt from '@nuxt/eslint-plugin'

export default {
  name: 'dethdkn/nuxt/rules',
  plugins: { nuxt },
  rules: {
    'nuxt/prefer-import-meta': ['error'],
    'nuxt/nuxt-config-keys-order': ['error'],
  },
} as Linter.Config

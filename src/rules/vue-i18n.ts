import type { Linter } from 'eslint'
import vueI18n from '@intlify/eslint-plugin-vue-i18n'

export default (ignores?: string[]) => ({
  name: 'dethdkn/vue-i18n/rules',
  plugins: { 'vue-i18n': vueI18n },
  rules: {
    'vue-i18n/no-deprecated-i18n-component': ['error'],
    'vue-i18n/no-deprecated-i18n-place-attr': ['error'],
    'vue-i18n/no-deprecated-i18n-places-prop': ['error'],
    'vue-i18n/no-deprecated-modulo-syntax': ['error'],
    'vue-i18n/no-deprecated-tc': ['error'],
    'vue-i18n/no-deprecated-v-t': ['error'],
    'vue-i18n/no-html-messages': ['error'],
    'vue-i18n/no-i18n-t-path-prop': ['error'],
    'vue-i18n/no-v-html': ['error'],
    'vue-i18n/valid-message-syntax': ['error'],
    'vue-i18n/key-format-style': ['error', 'snake_case'],
    'vue-i18n/no-duplicate-keys-in-locale': ['error'],
    'vue-i18n/no-missing-keys-in-other-locales': ['error'],
    'vue-i18n/no-unused-keys': ['error', { extensions: ['.js', '.ts', '.vue'], ignores }],
    'vue-i18n/prefer-sfc-lang-attr': ['error'],
    'vue-i18n/prefer-linked-key-with-paren': ['error'],
    'vue-i18n/sfc-locale-attr': ['error'],
  },
  settings: {
    'vue-i18n': {
      localeDir: ['./i18n/locales/*.json'],
      messageSyntaxVersion: '^11.0.0',
    },
  },
} as Linter.Config)

import i18n from '@intlify/eslint-plugin-vue-i18n'
import type { Linter } from 'eslint'

export default (hasI18n: boolean): Linter.FlatConfig => {
  const val = hasI18n ? 'error' : 'off'
  return {
    name: 'dethdkn/i18n/rules',
    plugins: { i18n },
    rules: {
      'i18n/no-deprecated-i18n-component': [val],
      'i18n/no-deprecated-i18n-place-attr': [val],
      'i18n/no-deprecated-i18n-places-prop': [val],
      'i18n/no-deprecated-modulo-syntax': [val],
      'i18n/no-deprecated-tc': [val],
      'i18n/no-html-messages': [val],
      'i18n/no-i18n-t-path-prop': [val],
      'i18n/no-v-html': [val],
      'i18n/valid-message-syntax': [val],
      'i18n/key-format-style': [val, 'snake_case'],
      'i18n/no-duplicate-keys-in-locale': [val],
      'i18n/no-missing-keys-in-other-locales': [val],
      'i18n/no-unused-keys': [val, { extensions: ['.js', '.ts', '.vue'] }],
      'i18n/prefer-sfc-lang-attr': [val],
      'i18n/prefer-linked-key-with-paren': [val],
      'i18n/sfc-locale-attr': [val],
    },
    settings: {
      'vue-i18n': {
        localeDir: './locales/*.json',
        messageSyntaxVersion: '^9.0.0',
      },
    },
  }
}

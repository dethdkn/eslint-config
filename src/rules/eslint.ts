import type { Linter } from 'eslint'
import eslint from 'eslint-plugin-eslint-plugin'

export default {
  name: 'dethdkn/eslint/rules',
  plugins: { eslint },
  rules: {
    // rules
    'eslint/fixer-return': ['error'],
    'eslint/no-deprecated-context-methods': ['error'],
    'eslint/no-deprecated-report-api': ['error'],
    'eslint/no-missing-message-ids': ['error'],
    'eslint/no-missing-placeholders': ['error'],
    'eslint/no-unused-message-ids': ['error'],
    'eslint/no-unused-placeholders': ['error'],
    'eslint/no-useless-token-range': ['error'],
    'eslint/prefer-message-ids': ['error'],
    'eslint/prefer-object-rule': ['error'],
    'eslint/prefer-placeholders': ['error'],
    'eslint/prefer-replace-text': ['error'],
    'eslint/require-meta-default-options': ['error'],
    'eslint/require-meta-docs-recommended': ['error'],
    'eslint/require-meta-docs-url': ['error'],
    'eslint/require-meta-fixable': ['error'],
    'eslint/require-meta-has-suggestions': ['error'],
    'eslint/require-meta-schema': ['error'],
    'eslint/require-meta-schema-description': ['error'],
    'eslint/require-meta-type': ['error'],
    // tests
    'eslint/no-identical-tests': ['error'],
    'eslint/no-only-tests': ['error'],
    'eslint/prefer-output-null': ['error'],
  },
} as Linter.Config

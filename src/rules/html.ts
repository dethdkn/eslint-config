import type { Linter } from 'eslint'
import html from '@html-eslint/eslint-plugin'

export default {
  name: 'dethdkn/html/rules',
  plugins: { html },
  rules: {
    // Best Practice
    'html/no-duplicate-attrs': ['error'],
    'html/no-duplicate-class': ['error'],
    'html/no-duplicate-id': ['error'],
    'html/no-extra-spacing-text': ['error'],
    'html/no-nested-interactive': ['error'],
    'html/no-obsolete-tags': ['error'],
    'html/no-script-style-type': ['error'],
    'html/no-target-blank': ['error'],
    'html/prefer-https': ['error'],
    'html/require-closing-tags': ['error'],
    'html/require-li-container': ['error'],
    // SEO
    'html/no-multiple-h1': ['error'],
    // Accessibility
    'html/no-abstract-roles': ['error'],
    'html/no-accesskey-attrs': ['error'],
    'html/no-aria-hidden-body': ['error'],
    'html/no-heading-inside-button': ['error'],
    'html/no-invalid-role': ['error'],
    'html/no-non-scalable-viewport': ['error'],
    'html/no-positive-tabindex': ['error'],
    'html/no-skip-heading-levels': ['error'],
    'html/require-frame-title': ['error'],
    'html/require-img-alt': ['error'],
    'html/require-input-label': ['error'],
    // Style
    'html/element-newline': ['error'],
    'html/id-naming-convention': ['error', 'camelCase'],
    'html/indent': ['error', 2],
    'html/lowercase': ['error'],
    'html/no-extra-spacing-attrs': ['error'],
    'html/no-multiple-empty-lines': ['error', { max: 1 }],
    'html/no-trailing-spaces': ['error'],
    'html/quotes': ['error'],
    'html/sort-attrs': ['error'],
  },
} as Linter.Config

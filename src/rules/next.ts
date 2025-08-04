import type { Linter } from 'eslint'
import next from '@next/eslint-plugin-next'

export default {
  name: 'dethdkn/next/rules',
  plugins: { next } as { next: unknown },
  rules: {
    'next/google-font-display': ['error'],
    'next/google-font-preconnect': ['error'],
    'next/inline-script-id': ['error'],
    'next/next-script-for-ga': ['error'],
    'next/no-assign-module-variable': ['error'],
    'next/no-async-client-component': ['error'],
    'next/no-before-interactive-script-outside-document': ['error'],
    'next/no-css-tags': ['error'],
    'next/no-document-import-in-page': ['error'],
    'next/no-duplicate-head': ['error'],
    'next/no-head-element': ['error'],
    'next/no-head-import-in-document': ['error'],
    'next/no-html-link-for-pages': ['error'],
    'next/no-img-element': ['error'],
    'next/no-page-custom-font': ['error'],
    'next/no-script-component-in-head': ['error'],
    'next/no-styled-jsx-in-document': ['error'],
    'next/no-sync-scripts': ['error'],
    'next/no-title-in-document-head': ['error'],
    'next/no-typos': ['error'],
    'next/no-unwanted-polyfillio': ['error'],
  },
} as Linter.Config

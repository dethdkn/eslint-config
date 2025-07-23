import type { Linter } from 'eslint'
import tailwind from 'eslint-plugin-tailwindcss'

export default {
  name: 'dethdkn/tailwind/rules',
  plugins: { tailwind },
  rules: {
    'tailwind/classnames-order': ['warn'],
    // 'tailwind/enforces-negative-arbitrary-values': ['warn'],
    // 'tailwind/enforces-shorthand': ['warn'],
    // 'tailwind/migration-from-tailwind-2': ['warn'],
    // 'tailwind/no-contradicting-classname': ['warn'],
    // 'tailwind/no-custom-classname': ['error'],
    // 'tailwind/no-unnecessary-arbitrary-value': ['warn'],
  },
} as Linter.Config

import type { Linter } from 'eslint'
import drizzle from 'eslint-plugin-drizzle'

export default {
  name: 'dethdkn/drizzle/rules',
  plugins: { drizzle },
  rules: {
    'drizzle/enforce-delete-with-where': ['error', { drizzleObjectName: 'drizzle' }],
    'drizzle/enforce-update-with-where': ['error', { drizzleObjectName: 'drizzle' }],
  },
} as Linter.Config

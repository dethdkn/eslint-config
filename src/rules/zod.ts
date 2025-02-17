import type { Linter } from 'eslint'
import zod from 'eslint-plugin-zod'

export default {
  name: 'dethdkn/zod/rules',
  plugins: { zod },
  rules: {
    'zod/prefer-enum': ['error'],
  },
} as Linter.Config

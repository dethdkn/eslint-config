import type { Linter } from 'eslint'
import { plugin as svgo } from 'eslint-plugin-svgo'

export default {
  name: 'dethdkn/svgo/rules',
  plugins: { svgo },
  files: ['**/*.svg'],
  rules: {
    'svgo/svgo': ['error'],
    'stylistic/eol-last': ['off'], // disables conflicting rule
  },
} as Linter.Config

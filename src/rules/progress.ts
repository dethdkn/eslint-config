import type { Linter } from 'eslint'
import progress from 'eslint-plugin-file-progress'

export default {
  name: 'dethdkn/progress/rules',
  plugins: { progress },
  rules: { 'progress/activate': 1 },
} as Linter.Config

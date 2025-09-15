import type { Linter } from 'eslint'
import sxzz from 'eslint-plugin-sxzz'

export default (fullPackage?: boolean) => ({
  name: 'dethdkn/sxzz/rules',
  plugins: { sxzz },
  rules: {
    'sxzz/prefer-string-function': ['error'],
    'sxzz/require-package-field': [fullPackage ? 'error' : 'off'],
  },
} as Linter.Config)

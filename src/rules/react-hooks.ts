import type { Linter } from 'eslint'
import reactHooks from 'eslint-plugin-react-hooks'

export default {
  name: 'dethdkn/react-hooks/rules',
  plugins: { 'react-hooks': reactHooks },
  rules: {
    'react-hooks/exhaustive-deps': ['warn'],
    'react-hooks/rules-of-hooks': ['error'],
  },
} as Linter.Config

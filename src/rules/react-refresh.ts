import type { Linter } from 'eslint'
import reactRefresh from 'eslint-plugin-react-refresh'

export default {
  name: 'dethdkn/react-refresh/rules',
  plugins: { 'react-refresh': reactRefresh },
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true, allowExportNames: [] }],
  },
} as Linter.Config

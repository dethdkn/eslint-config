import type { Linter } from 'eslint'
import reactRefresh from 'eslint-plugin-react-refresh'

export default (next: boolean): Linter.Config => ({
  name: 'dethdkn/react-refresh/rules',
  plugins: { 'react-refresh': reactRefresh },
  rules: {
    'react-refresh/only-export-components': [next ? 'off' : 'warn', { allowConstantExport: true, allowExportNames: [] }],
  },
})

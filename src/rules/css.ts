import type { Linter } from 'eslint'
import css from 'eslint-plugin-css'

export default {
  name: 'dethdkn/css/rules',
  plugins: { css },
  rules: {
    'css/no-dupe-properties': ['warn'],
    'css/no-invalid-color-hex': ['warn'],
    'css/no-shorthand-property-overrides': ['warn'],
    'css/no-unknown-property': ['warn'],
    'css/no-unknown-unit': ['warn'],
    'css/named-color': ['warn', 'never'],
    'css/no-length-zero-unit': ['warn'],
    'css/no-useless-color-alpha': ['warn'],
    'css/prefer-reduce-shorthand-property-box-values': ['warn'],
    'css/color-hex-style': ['warn'],
    'css/no-number-trailing-zeros': ['warn'],
    'css/number-leading-zero': ['warn'],
    'css/property-casing': ['warn'],
  },
} as Linter.Config

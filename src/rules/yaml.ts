import type { Linter } from 'eslint'
import yaml from 'eslint-plugin-yml'

export default {
  name: 'dethdkn/yaml/rules',
  plugins: { yaml },
  rules: {
    'yaml/block-mapping': ['error'],
  },
} as Linter.FlatConfig

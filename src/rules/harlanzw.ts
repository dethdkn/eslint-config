import type { Linter } from 'eslint'
import harlanzw from 'eslint-plugin-harlanzw'

export default {
  name: 'dethdkn/harlanzw/rules',
  plugins: { harlanzw },
  rules: {
    'harlanzw/vue-no-faux-composables': ['error'],
    'harlanzw/vue-no-nested-reactivity': ['error'],
    'harlanzw/vue-no-ref-access-in-templates': ['error'],
    'harlanzw/vue-no-torefs-on-props': ['error'],
  },
} as Linter.Config

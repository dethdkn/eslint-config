import type { Linter } from 'eslint'
import accessibility from 'eslint-plugin-vuejs-accessibility'

export default {
  name: 'dethdkn/accessibility/rules',
  plugins: { accessibility },
  rules: {
    'accessibility/alt-text': ['warn'],
    'accessibility/anchor-has-content': ['warn'],
    'accessibility/aria-props': ['warn'],
    'accessibility/aria-role': ['warn'],
    'accessibility/aria-unsupported-elements': ['warn'],
    'accessibility/click-events-have-key-events': ['warn'],
    'accessibility/form-control-has-label': ['warn'],
    'accessibility/heading-has-content': ['warn'],
    'accessibility/iframe-has-title': ['warn'],
    'accessibility/label-has-for': ['warn'],
    'accessibility/mouse-events-have-key-events': ['warn'],
    'accessibility/no-access-key': ['warn'],
    'accessibility/no-autofocus': ['warn'],
    'accessibility/no-distracting-elements': ['warn'],
    'accessibility/no-redundant-roles': ['warn'],
    'accessibility/no-static-element-interactions': ['warn'],
    'accessibility/role-has-required-aria-props': ['warn'],
    'accessibility/tabindex-no-positive': ['warn'],
  },
} as Linter.FlatConfig

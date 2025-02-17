import type { Linter } from 'eslint'
import vueA11y from 'eslint-plugin-vuejs-accessibility'

export default {
  name: 'dethdkn/vue-a11y/rules',
  plugins: { 'vue-a11y': vueA11y },
  rules: {
    'vue-a11y/alt-text': ['warn'],
    'vue-a11y/anchor-has-content': ['warn'],
    'vue-a11y/aria-props': ['warn'],
    'vue-a11y/aria-role': ['warn'],
    'vue-a11y/aria-unsupported-elements': ['warn'],
    'vue-a11y/click-events-have-key-events': ['warn'],
    'vue-a11y/form-control-has-label': ['warn'],
    'vue-a11y/heading-has-content': ['warn'],
    'vue-a11y/iframe-has-title': ['warn'],
    'vue-a11y/label-has-for': ['warn', { required: { some: ['nesting', 'id'] }, components: ['label', 'UFormGroup'], controlComponents: [
      'input',
      'meter',
      'progress',
      'select',
      'textarea',
      'UInput',
      'UMeter',
      'UProgress',
      'USelect',
      'USelectMenu',
      'UTextarea',
      'AutoComplete',
      'Calendar',
      'CascadeSelect',
      'Checkbox',
      'Chips',
      'ColorPicker',
      'Dropdown',
      'Editor',
      'FloatLabel',
      'InputMask',
      'InputNumber',
      'InputOtp',
      'InputSwitch',
      'InputText',
      'Knob',
      'Listbox',
      'MultiSelect',
      'Password',
      'RadioButton',
      'Rating',
      'SelectButton',
      'Slider',
      'Textarea',
      'ToggleButton',
      'TreeSelect',
      'TriStateCheckbox',
      'VCalendar',
    ] }],
    'vue-a11y/mouse-events-have-key-events': ['warn'],
    'vue-a11y/no-access-key': ['warn'],
    'vue-a11y/no-aria-hidden-on-focusable': ['warn'],
    'vue-a11y/no-autofocus': ['warn'],
    'vue-a11y/no-distracting-elements': ['warn'],
    'vue-a11y/no-redundant-roles': ['warn'],
    'vue-a11y/no-role-presentation-on-focusable': ['warn'],
    'vue-a11y/no-static-element-interactions': ['warn'],
    'vue-a11y/role-has-required-aria-props': ['warn'],
    'vue-a11y/tabindex-no-positive': ['warn'],
  },
} as Linter.Config

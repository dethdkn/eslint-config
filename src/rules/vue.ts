import type { Linter } from 'eslint'
import vue from 'eslint-plugin-vue'

export default (tailwind: boolean, nuxt: boolean, i18n: boolean): Linter.FlatConfig => ({
  name: 'dethdkn/vue/rules',
  plugins: { vue },
  rules: {
    // Base Rules
    'vue/comment-directive': ['error', { reportUnusedDisableDirectives: true }],
    'vue/jsx-uses-vars': ['error'],
    // Priority A: Essential for Vue.js 3.x
    'vue/no-arrow-functions-in-watch': ['error'],
    'vue/no-async-in-computed-properties': ['error'],
    'vue/no-child-content': ['warn'],
    'vue/no-computed-properties-in-data': ['error'],
    'vue/no-deprecated-data-object-declaration': ['error'],
    'vue/no-deprecated-destroyed-lifecycle': ['error'],
    'vue/no-deprecated-dollar-listeners-api': ['error'],
    'vue/no-deprecated-dollar-scopedslots-api': ['error'],
    'vue/no-deprecated-events-api': ['error'],
    'vue/no-deprecated-filter': ['error'],
    'vue/no-deprecated-functional-template': ['error'],
    'vue/no-deprecated-html-element-is': ['error'],
    'vue/no-deprecated-inline-template': ['error'],
    'vue/no-deprecated-props-default-this': ['error'],
    'vue/no-deprecated-router-link-tag-prop': ['error'],
    'vue/no-deprecated-scope-attribute': ['error'],
    'vue/no-deprecated-slot-attribute': ['error'],
    'vue/no-deprecated-slot-scope-attribute': ['error'],
    'vue/no-deprecated-v-bind-sync': ['error'],
    'vue/no-deprecated-v-is': ['error'],
    'vue/no-deprecated-v-on-native-modifier': ['error'],
    'vue/no-deprecated-v-on-number-modifiers': ['error'],
    'vue/no-deprecated-vue-config-keycodes': ['error'],
    'vue/no-dupe-keys': ['error'],
    'vue/no-dupe-v-else-if': ['warn'],
    'vue/no-duplicate-attributes': ['error'],
    'vue/no-export-in-script-setup': ['error'],
    'vue/no-expose-after-await': ['error'],
    'vue/no-lifecycle-after-await': ['error'],
    'vue/no-mutating-props': ['error'],
    'vue/no-parsing-error': ['error'],
    'vue/no-ref-as-operand': ['error'],
    'vue/no-reserved-component-names': ['error'],
    'vue/no-reserved-keys': ['error'],
    'vue/no-reserved-props': ['error'],
    'vue/no-shared-component-data': ['error'],
    'vue/no-side-effects-in-computed-properties': ['error'],
    'vue/no-template-key': ['error'],
    'vue/no-textarea-mustache': ['error'],
    'vue/no-unused-components': ['error'],
    'vue/no-unused-vars': ['warn'],
    'vue/no-use-computed-property-like-method': ['error'],
    'vue/no-use-v-if-with-v-for': ['error'],
    'vue/no-useless-template-attributes': ['error'],
    'vue/no-v-for-template-key-on-child': ['error'],
    'vue/no-v-text-v-html-on-component': ['error'],
    'vue/no-watch-after-await': ['error'],
    'vue/prefer-import-from-vue': ['error'],
    'vue/require-component-is': ['error'],
    'vue/require-prop-type-constructor': ['error'],
    'vue/require-render-return': ['error'],
    'vue/require-slots-as-functions': ['error'],
    'vue/require-toggle-inside-transition': ['error'],
    'vue/require-v-for-key': ['error'],
    'vue/require-valid-default-prop': ['error'],
    'vue/return-in-computed-property': ['error'],
    'vue/return-in-emits-validator': ['error'],
    'vue/use-v-on-exact': ['error'],
    'vue/valid-attribute-name': ['error'],
    'vue/valid-define-emits': ['error'],
    'vue/valid-define-props': ['error'],
    'vue/valid-next-tick': ['error'],
    'vue/valid-template-root': ['error'],
    'vue/valid-v-bind': ['error'],
    'vue/valid-v-cloak': ['error'],
    'vue/valid-v-else-if': ['error'],
    'vue/valid-v-else': ['error'],
    'vue/valid-v-for': ['error'],
    'vue/valid-v-html': ['error'],
    'vue/valid-v-if': ['error'],
    'vue/valid-v-is': ['error'],
    'vue/valid-v-memo': ['error'],
    'vue/valid-v-model': ['error'],
    'vue/valid-v-on': ['error'],
    'vue/valid-v-once': ['error'],
    'vue/valid-v-pre': ['error'],
    'vue/valid-v-show': ['error'],
    'vue/valid-v-slot': ['error'],
    'vue/valid-v-text': ['error'],
    // Priority B: Strongly Recommended for Vue.js 3.x
    'vue/attribute-hyphenation': ['warn'],
    'vue/component-definition-name-casing': ['error'],
    'vue/first-attribute-linebreak': ['warn'],
    'vue/html-closing-bracket-newline': ['warn'],
    'vue/html-closing-bracket-spacing': ['warn'],
    'vue/html-end-tags': ['error'],
    'vue/html-indent': ['error', 2],
    'vue/html-quotes': ['warn'],
    'vue/html-self-closing': ['warn'],
    'vue/multiline-html-element-content-newline': ['warn'],
    'vue/mustache-interpolation-spacing': ['warn'],
    'vue/no-multi-spaces': ['error'],
    'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
    'vue/no-template-shadow': ['error'],
    'vue/one-component-per-file': ['error'],
    'vue/prop-name-casing': ['error'],
    'vue/require-default-prop': ['error'],
    'vue/require-explicit-emits': ['error'],
    'vue/require-prop-types': ['error'],
    'vue/singleline-html-element-content-newline': ['warn'],
    'vue/v-bind-style': ['warn'],
    'vue/v-on-event-hyphenation': ['warn'],
    'vue/v-on-style': ['warn'],
    'vue/v-slot-style': ['error'],
    // Priority C: Recommended for Vue.js 3.x
    'vue/attributes-order': ['warn'],
    'vue/no-lone-template': ['error'],
    'vue/no-multiple-slot-args': ['error'],
    'vue/no-v-html': ['error'],
    'vue/order-in-components': ['error'],
    'vue/this-in-template': ['error'],
    // Uncategorized
    'vue/block-lang': ['error', { script: { lang: 'ts' } }],
    'vue/block-order': ['warn', { order: ['script', 'template', 'style'] }],
    'vue/block-tag-newline': ['warn'],
    'vue/component-api-style': ['error', ['script-setup']],
    'vue/component-name-in-template-casing': ['error'],
    'vue/component-options-name-casing': ['error'],
    'vue/custom-event-name-casing': ['error'],
    'vue/define-emits-declaration': ['error'],
    'vue/define-macros-order': ['error', { order: ['defineOptions', 'defineProps', 'defineEmits', 'defineSlots'] }],
    'vue/define-props-declaration': ['error', 'runtime'],
    'vue/enforce-style-attribute': ['error', { allow: ['scoped'] }],
    'vue/html-comment-content-newline': ['warn'],
    'vue/html-comment-content-spacing': ['warn'],
    'vue/html-comment-indent': ['error', 2],
    'vue/next-tick-style': ['error'],
    'vue/no-bare-strings-in-template': [i18n ? 'error' : 'off'],
    'vue/no-boolean-default': ['error'],
    'vue/no-deprecated-model-definition': ['error'],
    'vue/no-duplicate-attr-inheritance': ['error'],
    'vue/no-multiple-objects-in-class': ['error'],
    'vue/no-potential-component-option-typo': ['error'],
    'vue/no-ref-object-reactivity-loss': ['error'],
    'vue/no-required-prop-with-default': ['error'],
    'vue/no-restricted-block': [tailwind ? 'error' : 'off', { element: 'style', message: 'Use TailwindCSS instead.' }],
    'vue/no-restricted-html-elements': [nuxt ? 'error' : 'off', { element: 'a', message: 'Use <NuxtLink> instead.' }],
    'vue/no-restricted-static-attribute': [tailwind ? 'error' : 'off', { key: 'style', message: 'Use TailwindCSS instead.' }],
    'vue/no-root-v-if': ['error'],
    'vue/no-setup-props-reactivity-loss': ['error'],
    'vue/no-this-in-before-route-enter': ['error'],
    'vue/no-unused-emit-declarations': ['error'],
    'vue/no-unused-properties': ['error'],
    'vue/no-unused-refs': ['error'],
    'vue/no-use-v-else-with-v-for': ['error'],
    'vue/no-useless-mustaches': ['warn'],
    'vue/no-useless-v-bind': ['warn'],
    'vue/no-v-text': ['error'],
    'vue/padding-line-between-blocks': ['error'],
    'vue/prefer-define-options': ['error'],
    'vue/prefer-separate-static-class': ['error'],
    'vue/prefer-true-attribute-shorthand': ['error'],
    'vue/require-typed-ref': ['error'],
  },
})

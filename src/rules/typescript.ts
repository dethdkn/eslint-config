import type { Linter } from 'eslint'

import { plugin } from 'typescript-eslint'

export default (nuxt: boolean): Linter.FlatConfig => ({
  name: 'dethdkn/typescript/rules',
  // @ts-ignore - This is a valid value
  plugins: { typescript: plugin },
  rules: {
    'typescript/array-type': ['error'],
    'typescript/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
    'typescript/class-literal-property-style': ['error'],
    'typescript/consistent-generic-constructors': ['error'],
    'typescript/consistent-indexed-object-style': ['error'],
    'typescript/consistent-type-definitions': ['error'],
    'typescript/default-param-last': ['error'],
    'typescript/method-signature-style': ['warn'],
    'typescript/no-array-constructor': ['error'],
    'typescript/no-duplicate-enum-values': ['error'],
    'typescript/no-dynamic-delete': ['error'],
    'typescript/no-empty-object-type': ['error'],
    'typescript/no-explicit-any': ['error'],
    'typescript/no-extra-non-null-assertion': ['error'],
    'typescript/no-extraneous-class': ['error'],
    'typescript/no-inferrable-types': ['error'],
    'typescript/no-invalid-void-type': ['error'],
    'typescript/no-misused-new': ['error'],
    'typescript/no-namespace': ['error'],
    'typescript/no-non-null-asserted-nullish-coalescing': ['error'],
    'typescript/no-non-null-asserted-optional-chain': ['error'],
    'typescript/no-non-null-assertion': ['error'],
    'typescript/no-require-imports': ['error'],
    'typescript/no-this-alias': ['error'],
    'typescript/no-unnecessary-type-constraint': ['error'],
    'typescript/no-unsafe-declaration-merging': ['error'],
    'typescript/no-unsafe-function-type': ['error'],
    'typescript/no-use-before-define': [nuxt ? 'off' : 'error', { classes: false, functions: false, variables: true }],
    'typescript/no-useless-constructor': ['error'],
    'typescript/no-wrapper-object-types': ['error'],
    'typescript/prefer-as-const': ['error'],
    'typescript/prefer-function-type': ['error'],
    'typescript/prefer-literal-enum-member': ['error'],
  },
})

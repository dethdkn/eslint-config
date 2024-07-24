import type { Linter } from 'eslint'
import stylistic from '@stylistic/eslint-plugin'

export default {
  name: 'dethdkn/stylistic/rules',
  plugins: { stylistic },
  rules: {
    'stylistic/array-bracket-newline': ['error', 'consistent'],
    'stylistic/array-bracket-spacing': ['error', 'never'],
    'stylistic/array-element-newline': ['error', 'consistent'],
    'stylistic/arrow-parens': ['error', 'as-needed'],
    'stylistic/arrow-spacing': ['error', { before: true, after: true }],
    'stylistic/block-spacing': ['error', 'always'],
    'stylistic/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
    'stylistic/comma-dangle': ['error', 'always-multiline'],
    'stylistic/comma-spacing': ['error', { before: false, after: true }],
    'stylistic/comma-style': ['error', 'last'],
    'stylistic/computed-property-spacing': ['error', 'never', { enforceForClassMembers: true }],
    'stylistic/dot-location': ['error', 'property'],
    'stylistic/eol-last': ['error', 'always'],
    'stylistic/function-call-argument-newline': ['error', 'never'],
    'stylistic/function-call-spacing': ['error', 'never'],
    'stylistic/function-paren-newline': ['error', 'never'],
    'stylistic/generator-star-spacing': ['error', 'before'],
    'stylistic/implicit-arrow-linebreak': ['error', 'beside'],
    'stylistic/indent': ['error', 2],
    'stylistic/indent-binary-ops': ['error', 2],
    'stylistic/key-spacing': ['error', { afterColon: true, beforeColon: false }],
    'stylistic/keyword-spacing': ['error', { overrides: { if: { after: false }, for: { after: false }, while: { after: false } } }],
    'stylistic/lines-between-class-members': ['error', 'always'],
    'stylistic/max-statements-per-line': ['error', { max: 1 }],
    'stylistic/member-delimiter-style': ['error', { multiline: { delimiter: 'comma', requireLast: true }, singleline: { delimiter: 'comma', requireLast: false }, multilineDetection: 'brackets' }],
    'stylistic/multiline-ternary': ['error', 'always-multiline'],
    'stylistic/new-parens': ['error', 'always'],
    'stylistic/no-extra-parens': ['error', 'functions'],
    'stylistic/no-floating-decimal': ['error'],
    'stylistic/no-mixed-operators': ['error', { allowSamePrecedence: true, groups: [['==', '!=', '===', '!==', '>', '>=', '<', '<='], ['&&', '||'], ['in', 'instanceof']] }],
    'stylistic/no-mixed-spaces-and-tabs': ['error'],
    'stylistic/no-multi-spaces': ['error'],
    'stylistic/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
    'stylistic/no-tabs': ['error'],
    'stylistic/no-trailing-spaces': ['error'],
    'stylistic/no-whitespace-before-property': ['error'],
    'stylistic/nonblock-statement-body-position': ['error', 'beside'],
    'stylistic/object-curly-spacing': ['error', 'always'],
    'stylistic/operator-linebreak': ['error', 'none'],
    'stylistic/padded-blocks': ['error', 'never'],
    'stylistic/quote-props': ['error', 'consistent-as-needed'],
    'stylistic/quotes': ['error', 'single', { allowTemplateLiterals: true, avoidEscape: false }],
    'stylistic/rest-spread-spacing': ['error', 'never'],
    'stylistic/semi': ['error', 'never'],
    'stylistic/semi-spacing': ['error', { before: false, after: true }],
    'stylistic/space-before-blocks': ['error', 'never'],
    'stylistic/space-before-function-paren': ['error', { anonymous: 'never', asyncArrow: 'always', named: 'never' }],
    'stylistic/space-in-parens': ['error', 'never'],
    'stylistic/space-infix-ops': ['error'],
    'stylistic/space-unary-ops': ['error', { nonwords: false, words: true }],
    'stylistic/spaced-comment': ['error', 'always', { block: { balanced: true, exceptions: ['*'], markers: ['!'] }, line: { exceptions: ['/', '#'], markers: ['/'] } }],
    'stylistic/switch-colon-spacing': ['error', { after: true, before: false }],
    'stylistic/template-curly-spacing': ['error', 'never'],
    'stylistic/template-tag-spacing': ['error', 'never'],
    'stylistic/type-annotation-spacing': ['error', { after: true, before: false }],
    'stylistic/type-generic-spacing': ['error'],
    'stylistic/type-named-tuple-spacing': ['error'],
    'stylistic/wrap-iife': ['error', 'inside'],
  },
} as Linter.FlatConfig

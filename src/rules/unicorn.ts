import unicorn from 'eslint-plugin-unicorn'

export default {
  name: 'dethdkn/unicorn/rules',
  plugins: { unicorn },
  rules: {
    'unicorn/catch-error-name': ['error'],
    'unicorn/consistent-destructuring': ['error'],
    'unicorn/consistent-function-scoping': ['error'],
    'unicorn/empty-brace-spaces': ['error'],
    'unicorn/error-message': ['error'],
    'unicorn/escape-case': ['error'],
    'unicorn/no-array-for-each': ['error'],
    'unicorn/no-array-push-push': ['error'],
    'unicorn/no-array-reduce': ['error'],
    'unicorn/no-await-in-promise-methods': ['error'],
    'unicorn/no-empty-file': ['error'],
    'unicorn/no-for-loop': ['error'],
    'unicorn/no-hex-escape': ['error'],
    'unicorn/no-instanceof-array': ['error'],
    'unicorn/no-new-array': ['error'],
    'unicorn/no-new-buffer': ['error'],
    'unicorn/no-process-exit': ['error'],
    'unicorn/no-single-promise-in-promise-methods': ['error'],
    'unicorn/no-unnecessary-await': ['error'],
    'unicorn/no-useless-promise-resolve-reject': ['error'],
    'unicorn/no-useless-spread': ['error'],
    'unicorn/no-useless-switch-case': ['error'],
    'unicorn/no-useless-undefined': ['error'],
    'unicorn/no-zero-fractions': ['error'],
    'unicorn/number-literal-case': ['error'],
    'unicorn/prefer-array-find': ['error'],
    'unicorn/prefer-array-flat-map': ['error'],
    'unicorn/prefer-array-flat': ['error'],
    'unicorn/prefer-array-index-of': ['error'],
    'unicorn/prefer-array-some': ['error'],
    'unicorn/prefer-code-point': ['error'],
    'unicorn/prefer-date-now': ['error'],
    'unicorn/prefer-dom-node-append': ['error'],
    'unicorn/prefer-dom-node-dataset': ['error'],
    'unicorn/prefer-dom-node-remove': ['error'],
    'unicorn/prefer-dom-node-text-content': ['error'],
    'unicorn/prefer-includes': ['error'],
    'unicorn/prefer-keyboard-event-key': ['error'],
    'unicorn/prefer-modern-dom-apis': ['error'],
    'unicorn/prefer-modern-math-apis': ['error'],
    'unicorn/prefer-module': ['error'],
    'unicorn/prefer-native-coercion-functions': ['error'],
    'unicorn/prefer-node-protocol': ['error'],
    'unicorn/prefer-number-properties': ['error'],
    'unicorn/prefer-object-from-entries': ['error'],
    'unicorn/prefer-optional-catch-binding': ['error'],
    'unicorn/prefer-prototype-methods': ['error'],
    'unicorn/prefer-query-selector': ['error'],
    'unicorn/prefer-reflect-apply': ['error'],
    'unicorn/prefer-regexp-test': ['error'],
    'unicorn/prefer-spread': ['error'],
    'unicorn/prefer-string-replace-all': ['error'],
    'unicorn/prefer-string-slice': ['error'],
    'unicorn/prefer-string-starts-ends-with': ['error'],
    'unicorn/prefer-string-trim-start-end': ['error'],
    'unicorn/prefer-structured-clone': ['error'],
    'unicorn/prefer-top-level-await': ['error'],
    'unicorn/prefer-type-error': ['error'],
    'unicorn/require-array-join-separator': ['error'],
    'unicorn/template-indent': ['error'],
    'unicorn/text-encoding-identifier-case': ['error'],
    'unicorn/throw-new-error': ['error'],
  },
}

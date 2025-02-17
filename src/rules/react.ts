import type { Linter } from 'eslint'
import react from '@eslint-react/eslint-plugin'

export default {
  name: 'dethdkn/react/rules',
  plugins: { react } as { react: unknown },
  rules: {
    'react/ensure-forward-ref-using-ref': ['error'],
    'react/no-access-state-in-setstate': ['error'],
    'react/no-array-index-key': ['error'],
    'react/no-children-count': ['error'],
    'react/no-children-for-each': ['error'],
    'react/no-children-map': ['error'],
    'react/no-children-only': ['error'],
    'react/no-children-prop': ['error'],
    'react/no-children-to-array': ['error'],
    'react/no-class-component': ['error'],
    'react/no-clone-element': ['error'],
    'react/no-comment-textnodes': ['error'],
    'react/no-component-will-mount': ['error'],
    'react/no-component-will-receive-props': ['error'],
    'react/no-component-will-update': ['error'],
    'react/no-context-provider': ['error'],
    'react/no-create-ref': ['error'],
    'react/no-default-props': ['error'],
    'react/no-direct-mutation-state': ['error'],
    'react/no-duplicate-jsx-props': ['error'],
    'react/no-duplicate-key': ['error'],
    'react/no-forward-ref': ['error'],
    'react/no-implicit-key': ['error'],
    'react/no-missing-component-display-name': ['error'],
    'react/no-missing-key': ['error'],
    'react/no-nested-components': ['error'],
    'react/no-prop-types': ['error'],
    'react/no-redundant-should-component-update': ['error'],
    'react/no-set-state-in-component-did-mount': ['error'],
    'react/no-set-state-in-component-did-update': ['error'],
    'react/no-set-state-in-component-will-update': ['error'],
    'react/no-string-refs': ['error'],
    'react/no-unsafe-component-will-mount': ['error'],
    'react/no-unsafe-component-will-receive-props': ['error'],
    'react/no-unsafe-component-will-update': ['error'],
    'react/no-unstable-context-value': ['error'],
    'react/no-unstable-default-props': ['error'],
    'react/no-unused-class-component-members': ['error'],
    'react/no-unused-state': ['error'],
    'react/no-use-context': ['error'],
    'react/no-useless-fragment': ['error'],
    'react/prefer-destructuring-assignment': ['error'],
    'react/prefer-shorthand-boolean': ['error'],
    'react/prefer-shorthand-fragment': ['error'],
    'react/use-jsx-vars': ['error'],
    // DOM
    'react/dom/no-void-elements-with-children': ['error'],
    'react/dom/no-dangerously-set-innerhtml': ['error'],
    'react/dom/no-dangerously-set-innerhtml-with-children': ['error'],
    'react/dom/no-find-dom-node': ['error'],
    'react/dom/no-missing-button-type': ['error'],
    'react/dom/no-missing-iframe-sandbox': ['error'],
    'react/dom/no-namespace': ['error'],
    'react/dom/no-render-return-value': ['error'],
    'react/dom/no-script-url': ['error'],
    'react/dom/no-unknown-property': ['error'],
    'react/dom/no-unsafe-iframe-sandbox': ['error'],
    'react/dom/no-unsafe-target-blank': ['error'],
    // Web API
    'react/web-api/no-leaked-event-listener': ['error'],
    'react/web-api/no-leaked-interval': ['error'],
    'react/web-api/no-leaked-resize-observer': ['error'],
    'react/web-api/no-leaked-timeout': ['error'],
    // Hooks Extra
    'react/hooks-extra/no-unnecessary-use-callback': ['error'],
    'react/hooks-extra/no-unnecessary-use-memo': ['error'],
    'react/hooks-extra/no-useless-custom-hooks': ['error'],
    'react/hooks-extra/no-direct-set-state-in-use-effect': ['error'],
    'react/hooks-extra/no-direct-set-state-in-use-layout-effect': ['error'],
    'react/hooks-extra/prefer-use-state-lazy-initialization': ['error'],
    // Naming Convention
    'react/naming-convention/component-name': ['error'],
    'react/naming-convention/use-state': ['error'],
  },
} as Linter.Config

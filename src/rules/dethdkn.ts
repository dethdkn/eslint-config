import type { TSESTree } from '@typescript-eslint/utils'
import type { Linter, Rule } from 'eslint'

const dethdkn = {
  rules: {
    trmlog: {
      meta: { type: 'problem', fixable: 'code', docs: { description: 'Ensure trmLog is always awaited.', recommended: false, url: 'https://github.com/dethdkn/eslint-config' }, messages: { requireAwait: 'Calls to trmLog must be awaited.' } },
      create: (context: Rule.RuleContext) => ({
        CallExpression: (node: TSESTree.CallExpression) => {
          if(node.callee.type === 'Identifier' && node.callee.name === 'trmLog' && node.parent.type !== 'AwaitExpression') context.report({
            node,
            messageId: 'requireAwait',
            fix: fixer => fixer.insertTextBefore(node, 'await '),
          })
        },
      }),
    },
  },
}

export default {
  name: 'dethdkn/dethdkn/rules',
  plugins: { dethdkn },
  rules: {
    'dethdkn/trmlog': ['error'],
  },
} as Linter.Config

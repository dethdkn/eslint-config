import tsParser from './parsers/typescript.js'
import vueParser from './parsers/vue.js'
import ignores from './rules/ignores.js'
import stylistic from './rules/stylistic.js'
import antfu from './rules/antfu.js'
import javascript from './rules/javascript.js'
import unusedImports from './rules/unused-imports.js'
import eslintComments from './rules/eslint-comments.js'
import node from './rules/node.js'
import jsdoc from './rules/jsdoc.js'
import importx from './rules/importx.js'
import unicorn from './rules/unicorn.js'
import perfectionist from './rules/perfectionist.js'

export default (opts?: { tailwind?: boolean, nuxt?: boolean }) => {
  const tailwind = opts?.tailwind !== false
  const nuxt = opts?.nuxt !== false

  const lint: {}[] = []

  lint.push(ignores)
  lint.push(tsParser)
  lint.push(vueParser)
  lint.push(stylistic)
  lint.push(antfu)
  lint.push(javascript(nuxt))
  lint.push(unusedImports)
  lint.push(eslintComments)
  lint.push(node)
  lint.push(jsdoc)
  lint.push(importx)
  lint.push(unicorn)
  lint.push(perfectionist)

  return lint
}

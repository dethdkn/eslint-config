import jsonParser from './parsers/json.js'
import tsParser from './parsers/typescript.js'
import vueParser from './parsers/vue.js'
import antfu from './rules/antfu.js'
import eslintComments from './rules/eslint-comments.js'
import ignores from './rules/ignores.js'
import importx from './rules/importx.js'
import javascript from './rules/javascript.js'
import jsdoc from './rules/jsdoc.js'
import json from './rules/json.js'
import node from './rules/node.js'
import perfectionist from './rules/perfectionist.js'
import regexp from './rules/regexp.js'
import stylistic from './rules/stylistic.js'
import typescript from './rules/typescript.js'
import unicorn from './rules/unicorn.js'
import unusedImports from './rules/unused-imports.js'

export default (opts?: { tailwind?: boolean, nuxt?: boolean }) => {
  const tailwind = opts?.tailwind !== false
  const nuxt = opts?.nuxt !== false

  const lint: unknown[] = []

  lint.push(ignores, tsParser, jsonParser, vueParser, stylistic, antfu, javascript, unusedImports, eslintComments, node, jsdoc, importx, unicorn, perfectionist, regexp, typescript(nuxt), ...json)

  return lint
}

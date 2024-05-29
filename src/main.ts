import jsonParser from './parsers/json.js'
import tomlParser from './parsers/toml.js'
import tsParser from './parsers/typescript.js'
import vueParser from './parsers/vue.js'
import yamlParser from './parsers/yaml.js'
import antfu from './rules/antfu.js'
import eslintComments from './rules/eslint-comments.js'
import ignores from './rules/ignores.js'
import importx from './rules/importx.js'
import javascript from './rules/javascript.js'
import jsdoc from './rules/jsdoc.js'
import json from './rules/json.js'
import node from './rules/node.js'
import nuxt from './rules/nuxt.js'
import perfectionist from './rules/perfectionist.js'
import regexp from './rules/regexp.js'
import stylistic from './rules/stylistic.js'
import tailwind from './rules/tailwind.js'
import typescript from './rules/typescript.js'
import unicorn from './rules/unicorn.js'
import unusedImports from './rules/unused-imports.js'
import vue from './rules/vue.js'

export default (opts?: { tailwind?: boolean, nuxt?: boolean }) => {
  const hasTailwind = opts?.tailwind !== false
  const hasNuxt = opts?.nuxt !== false

  const lint: unknown[] = []

  lint.push(ignores, tsParser, vueParser, jsonParser, tomlParser, yamlParser, stylistic, antfu, javascript, unusedImports, eslintComments, node, jsdoc, importx, unicorn, perfectionist, regexp, typescript(hasNuxt), ...json, vue(hasTailwind, hasNuxt))

  if(hasTailwind) lint.push(tailwind)
  if(hasNuxt) lint.push(nuxt)

  return lint
}

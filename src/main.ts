import jsonParser from './parsers/json.js'
import tomlParser from './parsers/toml.js'
import tsParser from './parsers/typescript.js'
import vueParser from './parsers/vue.js'
import yamlParser from './parsers/yaml.js'
import accessibility from './rules/accessibility.js'
import antfu from './rules/antfu.js'
import eslintComments from './rules/eslint-comments.js'
import i18n from './rules/i18n.js'
import ignores from './rules/ignores.js'
import importx from './rules/importx.js'
import javascript from './rules/javascript.js'
import jsdoc from './rules/jsdoc.js'
import json from './rules/json.js'
import node from './rules/node.js'
import nuxt from './rules/nuxt.js'
import perfectionist from './rules/perfectionist.js'
import regexp from './rules/regexp.js'
import security from './rules/security.js'
import stylistic from './rules/stylistic.js'
import tailwind from './rules/tailwind.js'
import toml from './rules/toml.js'
import typescript from './rules/typescript.js'
import unicorn from './rules/unicorn.js'
import unusedImports from './rules/unused-imports.js'
import vitest from './rules/vitest.js'
import vue from './rules/vue.js'
import yaml from './rules/yaml.js'
import type { Linter } from 'eslint'

export default (opts?: { tailwind?: boolean, nuxt?: boolean, i18n?: boolean }) => {
  const hasTailwind = opts?.tailwind !== false
  const hasNuxt = opts?.nuxt !== false
  const hasI18n = opts?.i18n === true

  const lint: Linter.FlatConfig[] = []

  lint.push(ignores, tsParser, vueParser, jsonParser, tomlParser, yamlParser, stylistic, antfu, javascript(hasNuxt), unusedImports, eslintComments, node, security, jsdoc, importx, ...unicorn(hasNuxt), perfectionist, regexp, typescript(hasNuxt), vitest, ...json, vue(hasTailwind, hasNuxt, hasI18n))

  if(hasTailwind) lint.push(tailwind)
  if(hasNuxt) lint.push(nuxt)

  lint.push(accessibility, i18n(hasI18n), yaml, toml)

  return lint
}

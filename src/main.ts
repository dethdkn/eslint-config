import type { Linter } from 'eslint'
import htmlParser from './parsers/html'
import jsonParser from './parsers/json'
import svgoParser from './parsers/svgo'
import tomlParser from './parsers/toml'
import typescriptParser from './parsers/typescript'
import yamlParser from './parsers/yaml'
import antfu from './rules/antfu'
import css from './rules/css'
import deMorgan from './rules/de-morgan'
import dethdkn from './rules/dethdkn'
import drizzle from './rules/drizzle'
import eslintComments from './rules/eslint-comments'
import html from './rules/html'
import ignores from './rules/ignores'
import importx from './rules/importx'
import javascript from './rules/javascript'
import jsdoc from './rules/jsdoc'
import json from './rules/json'
import node from './rules/node'
import ntnyq from './rules/ntnyq'
import perfectionist from './rules/perfectionist'
import progress from './rules/progress'
import promise from './rules/promise'
import regexp from './rules/regexp'
import security from './rules/security'
import stylistic from './rules/stylistic'
import svgo from './rules/svgo'
import sxzz from './rules/sxzz'
import toml from './rules/toml'
import typescript from './rules/typescript'
import unicorn from './rules/unicorn'
import unusedImports from './rules/unused-imports'
import vitest from './rules/vitest'
import yaml from './rules/yaml'
import zod from './rules/zod'

/**
 * @function
 * Returns an ESLint configuration based on the provided options.
 *
 * @example
 * // eslint.config.mjs
 * export default dethdkn({ tailwind: true, vue:true, nuxt: true })
 *
 */
export default async (plugins?: { tailwind?: boolean, vue?: boolean, nuxt?: boolean, vueI18n?: boolean, react?: boolean, next?: boolean, reactI18n?: boolean, eslintEslint?: boolean, autoImports?: boolean }, opts?: { whiteListClasses?: string[], i18nIgnores?: string[], fullPackageJson?: boolean }) => {
  const hasTailwind = plugins?.tailwind === true
  const hasVue = plugins?.vue === true
  const hasNuxt = plugins?.nuxt === true
  const hasVueI18n = plugins?.vueI18n === true
  const hasReact = plugins?.react === true
  const hasNext = plugins?.next === true
  const hasReactI18n = plugins?.reactI18n === true
  const hasEslintEslint = plugins?.eslintEslint === true
  const hasAutoImports = (plugins?.autoImports === true) || hasNuxt

  if(hasNuxt && !hasVue) throw new Error('Nuxt requires Vue')
  if(hasVueI18n && !hasVue) throw new Error('Vue i18n requires Vue')
  if(hasNext && !hasReact) throw new Error('Next requires React')
  if(hasReactI18n && !hasReact) throw new Error('React i18n requires React')

  const lint: Linter.Config[] = [
    ignores,
    progress,
    htmlParser,
    html,
    javascript({ autoImports: hasAutoImports, nuxt: hasNuxt }),
    node,
    importx,
    unusedImports,
    promise,
    security,
    deMorgan,
    eslintComments,
    jsdoc,
    antfu,
    dethdkn,
    sxzz(opts?.fullPackageJson),
    ntnyq,
    drizzle,
    zod,
    typescriptParser,
    typescript(hasNuxt),
    stylistic,
    css,
    regexp,
    perfectionist,
    ...unicorn(hasNuxt),
    vitest,
    jsonParser,
    ...json,
    svgoParser,
    svgo,
    yamlParser,
    yaml,
    tomlParser,
    toml,
  ]

  if(hasTailwind){
    const tailwindConfig = await import('./rules/tailwind.js')
    lint.push(tailwindConfig.default(opts?.whiteListClasses))
  }

  if(hasVue){
    const [vueParser, vueConfig, vueA11yConfig, harlanzwConfig] = await Promise.all([
      import('./parsers/vue.js'),
      import('./rules/vue.js'),
      import('./rules/vue-a11y.js'),
      import('./rules/harlanzw.js'),
    ])
    lint.push(vueParser.default, vueConfig.default(hasTailwind, hasNuxt, hasVueI18n), vueA11yConfig.default, harlanzwConfig.default)
  }

  if(hasVueI18n){
    const vueI18nConfig = await import('./rules/vue-i18n.js')
    lint.push(vueI18nConfig.default(opts?.i18nIgnores))
  }

  if(hasNuxt){
    const nuxtConfig = await import('./rules/nuxt.js')
    lint.push(nuxtConfig.default)
  }

  if(hasReact){
    const [reactConfig, reactHooksConfig, reactRefreshConfig, reactA11y] = await Promise.all([
      import('./rules/react.js'),
      import('./rules/react-hooks.js'),
      import('./rules/react-refresh.js'),
      import('./rules/react-a11y.js'),
    ])
    lint.push(reactConfig.default, reactHooksConfig.default, reactRefreshConfig.default(hasNext), reactA11y.default)
  }

  if(hasReactI18n){
    const reactI18nConfig = await import('./rules/react-i18n.js')
    lint.push(reactI18nConfig.default)
  }

  if(hasNext){
    const nextConfig = await import('./rules/next.js')
    lint.push(nextConfig.default)
  }

  if(hasEslintEslint){
    const eslintEslintConfig = await import('./rules/eslint.js')
    lint.push(eslintEslintConfig.default)
  }

  return lint
}

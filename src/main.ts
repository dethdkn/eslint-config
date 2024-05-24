import tsParser from './parsers/typescript.js'
import vueParser from './parsers/vue.js'
import ignores from './rules/ignores.js'
import stylistic from './rules/stylistic.js'
import antfu from './rules/antfu.js'
import javascript from './rules/javascript.js'

export default function(opts?: { typescript?: boolean, tailwind?: boolean, vue?: boolean, nuxt?: boolean }){
  const typescript = opts?.typescript !== false
  const tailwind = opts?.tailwind !== false
  const vue = opts?.vue !== false
  const nuxt = opts?.nuxt !== false

  const lint: {}[] = []

  lint.push(ignores)
  lint.push(tsParser)
  lint.push(vueParser)
  lint.push(stylistic)
  lint.push(antfu)
  lint.push(javascript(nuxt))

  return lint
}

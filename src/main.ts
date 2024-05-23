import tsParser from './parsers/typescript.js'
import vueParser from './parsers/vue.js'
import ignores from './rules/ignores.js'
import stylistic from './rules/stylistic.js'
import antfu from './rules/antfu.js'
import javascript from './rules/javascript.js'

export default function(opts?: { typescript?: boolean, tailwind?: boolean, vue?: boolean, nuxt?: boolean }){
  const typescript = opts?.typescript === false ? false : true
  const tailwind = opts?.tailwind === false ? false : true
  const vue = opts?.vue === false ? false : true
  const nuxt = opts?.nuxt === false ? false : true

  const lint: {}[] = []

  lint.push(ignores)
  lint.push(tsParser)
  lint.push(vueParser)
  lint.push(stylistic)
  lint.push(antfu)
  lint.push(javascript(nuxt))

  return lint
}

const i = true

if(true === i) console.log(1)
else { console.log(2) }

const a = [{ 1: 0.2 }, [3 + 3, 4 + 4, 5]]

const b = { a: 2, d: 5, p: 4, o: 3, t: 6 }

function h(){
  console.log('hello')
}

function zz(x: Function){
  x()
  console.log('zz')
}

zz((d: any) => d)

zz(function ggg(d: number){
  return d
})

import type { Linter } from 'eslint'

declare const dethdkn: (opts?: { tailwind?: boolean, nuxt?: boolean, i18n?: boolean })=> Linter.FlatConfig[]

export default dethdkn

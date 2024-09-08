import type { Linter } from 'eslint'

/**
 * @function
 * Returns an ESLint configuration based on the provided options.
 *
 * @example
 * // eslint.config.mjs
 * export default dethdkn({ tailwind: true, nuxt: true, i18n: true })
 *
 */
declare const dethdkn: (opts?: { tailwind?: boolean, nuxt?: boolean, i18n?: boolean })=> Linter.Config[]

export default dethdkn

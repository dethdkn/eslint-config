import { describe, expect, it } from 'vitest'
import dethdkn from '../src/main'

describe('dethdkn ESLint config generator', () => {
  it('should generate default config without crashing', async () => {
    const config = await dethdkn()
    expect(Array.isArray(config)).toBe(true)
    expect(config.length).toBeGreaterThan(0)
  })

  it('should throw if Nuxt is true but Vue is false', async () => {
    await expect(() => dethdkn({ nuxt: true })).rejects.toThrow('Nuxt requires Vue')
  })

  it('should throw if Vue i18n is true but Vue is false', async () => {
    await expect(() => dethdkn({ vueI18n: true })).rejects.toThrow('Vue i18n requires Vue')
  })

  it('should throw if Next is true but React is false', async () => {
    await expect(() => dethdkn({ next: true })).rejects.toThrow('Next requires React')
  })

  it('should throw if React i18n is true but React is false', async () => {
    await expect(() => dethdkn({ reactI18n: true })).rejects.toThrow('React i18n requires React')
  })
})

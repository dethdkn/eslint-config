<h1 align="center">@dethdkn/eslint-config</h1>
<p align="center">🧹 My Opinionated ESLint Config</p>

<p align="center">
   <a href="https://rosa.dev.br">
      <img src="https://img.shields.io/badge/check me!-👻-F28AA9" alt="rosa.dev.br"/>
   </a>
   <a href="https://github.com/dethdkn/eslint-config/blob/main/LICENSE">
      <img src="https://img.shields.io/github/license/dethdkn/eslint-config?color=%233da639&logo=open%20source%20initiative" alt="License"/>
  </a>
  <a href="https://github.com/antfu/eslint-config">
      <img src="https://antfu.me/badge-code-style.svg" alt="Antfu"/>
   </a>
   <a href="https://gitmoji.dev">
      <img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67" alt="Gitmoji"/>
   </a>
</p>

## 📦 About This Package
This is my opinionated `eslint-config`, heavily inspired by <a href="https://github.com/antfu/eslint-config">Antfu's config</a>. This setup is a combination of the following rules:

- <a href="https://html-eslint.org" target="_blank">
     <img src="https://html-eslint.org/logo_32x32.716351c9.png" alt="HTML" width="12">
        HTML (hbs)
  </a>
- <a href="https://eslint.org/docs/latest/rules" target="_blank">
     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="Javascript" width="12">
        Javascript
  </a>
- <a href="https://github.com/eslint-community/eslint-plugin-n" target="_blank">
     <img src="https://nodejs.org/static/images/favicons/favicon.png" alt="Node" width="12">
        Node
  </a>
- <a href="https://github.com/un-ts/eslint-plugin-import-x" target="_blank">
     <img src="https://eslint.org/favicon.ico" alt="Eslint" width="12">
        Import X
  </a>
- <a href="https://github.com/sweepline/eslint-plugin-unused-imports" target="_blank">
     <img src="https://eslint.org/favicon.ico" alt="Eslint" width="12">
        Unused Imports
  </a>
- <a href="https://github.com/eslint-community/eslint-plugin-promise" target="_blank">
     <img src="https://eslint.org/favicon.ico" alt="Eslint" width="12">
        Promise
  </a>
- <a href="https://github.com/eslint-community/eslint-plugin-security" target="_blank">
     <img src="https://eslint.org/favicon.ico" alt="Eslint" width="12">
        Security
  </a>
- <a href="https://mysticatea.github.io/eslint-plugin-eslint-comments" target="_blank">
     <img src="https://eslint.org/favicon.ico" alt="Eslint" width="12">
        Eslint Comments
  </a>
- <a href="https://github.com/gajus/eslint-plugin-jsdoc" target="_blank">
     <img src="https://eslint.org/favicon.ico" alt="Eslint" width="12">
        JSDoc
  </a>
- <a href="https://github.com/antfu/eslint-plugin-antfu" target="_blank">
     <img src="https://antfu.me/favicon.svg" alt="Antfu" width="12">
        Antfu
  </a>
- <a href="https://orm.drizzle.team/docs/eslint-plugin" target="_blank">
     <img src="https://orm.drizzle.team/favicon.ico" alt="Drizzle" width="12">
        Drizzle
  </a>
- <a href="https://github.com/gajus/eslint-plugin-zod" target="_blank">
     <img src="https://zod.dev/icon.png" alt="Zod" width="12">
        Zod
  </a>
- <a href="https://typescript-eslint.io/rules" target="_blank">
     <img src="https://www.typescriptlang.org/favicon-32x32.png" alt="Typescript" width="12">
        Typescript
  </a>
- <a href="https://eslint.style" target="_blank">
     <img src="https://eslint.style/logo.svg" alt="Stylistic" width="12">
        Stylistic
  </a>
- <a href="https://ota-meshi.github.io/eslint-plugin-css/" target="_blank">
     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="TailwindCSS" width="12">
        CSS
  </a>
- <a href="https://ota-meshi.github.io/eslint-plugin-regexp" target="_blank">
     <img src="https://eslint.org/favicon.ico" alt="Eslint" width="12">
        Regexp
  </a>
- <a href="https://eslint-plugin-perfectionist.azat.io" target="_blank">
     <img src="https://eslint-plugin-perfectionist.azat.io/favicon.ico" alt="Perfectionist" width="12">
        Perfectionist
  </a>
- <a href="https://github.com/sindresorhus/eslint-plugin-unicorn" target="_blank">
     <img src="https://eslint.org/favicon.ico" alt="Eslint" width="12">
        Unicorn
  </a>
- <a href="https://github.com/veritem/eslint-plugin-vitest" target="_blank">
     <img src="https://vitest.dev/favicon.ico" alt="Vitest" width="12">
        Vitest
  </a>
- <a href="https://ota-meshi.github.io/eslint-plugin-jsonc" target="_blank">
     <img src="https://www.json.org/favicon.png" alt="Json" width="12">
        Json
  </a>
- <a href="https://ota-meshi.github.io/eslint-plugin-yml" target="_blank">
     <img src="https://yaml.org/favicon.svg" alt="Yaml" width="12">
        Yaml
  </a>
- <a href="https://ota-meshi.github.io/eslint-plugin-toml" target="_blank">
     <img src="https://toml.io/favicon.png" alt="Toml" width="12">
        Toml
  </a>
- <a href="https://github.com/francoismassart/eslint-plugin-tailwindcss" target="_blank">
     <img src="https://tailwindcss.com/favicons/favicon-16x16.png" alt="TailwindCSS" width="12">
        TailwindCSS<span style="color:red;">*</span>
  </a>
- <a href="https://eslint.vuejs.org" target="_blank">
     <img src="https://vuejs.org/logo.svg" alt="Vue" width="12">
        Vue<span style="color:red;">*</span>
  </a>
- <a href="https://vue-a11y.github.io/eslint-plugin-vuejs-accessibility" target="_blank">
     <img src="https://vuejs.org/logo.svg" alt="Eslint" width="12">
        vue-a11y<span style="color:red;">*</span>
  </a>
- <a href="https://eslint-plugin-vue-i18n.intlify.dev/" target="_blank">
     <img src="https://vuejs.org/logo.svg" alt="Eslint" width="12">
        vue-i18n<span style="color:red;">*</span>
  </a>
- <a href="https://eslint.nuxt.com/packages/plugin" target="_blank">
     <img src="https://nuxt.com/icon.png" alt="Nuxt" width="12">
        Nuxt<span style="color:red;">*</span>
  </a>
- <a href="https://github.com/Rel1cx/eslint-react" target="_blank">
     <img src="https://react.dev/favicon.ico" alt="Nuxt" width="12">
        React<span style="color:red;">*</span>
  </a>
- <a href="https://github.com/edvardchen/eslint-plugin-i18next" target="_blank">
     <img src="https://react.dev/favicon.ico" alt="Nuxt" width="12">
        React-i18n<span style="color:red;">*</span>
  </a>
- <a href="https://nextjs.org/docs/app/api-reference/config/eslint" target="_blank">
     <img src="https://nextjs.org/favicon.ico" alt="Nuxt" width="12">
        Next<span style="color:red;">*</span>
  </a>
- And more...
<p align="center" style="color:red;">*Not enabled by default</p>
<h3 align="center">
  <a href="https://eslint.rosa.dev.br">Click here to check all rules</a>
</h3>

## 🚀 Setup

1. Install with your favorite package manager:
   - **pnpm** : `pnpm add -D eslint @dethdkn/eslint-config`
   - npm : `npm i -D eslint @dethdkn/eslint-config`
   - yarn : `yarn add -D eslint @dethdkn/eslint-config`
   - bun : `bun add -D eslint @dethdkn/eslint-config`

2. Create a `eslint.config.mjs` in the project root:
```js
// eslint.config.mjs
import dethdkn from '@dethdkn/eslint-config'

export default dethdkn()
```

3. Add lint scripts to `package.json`:
```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

4. Add the following configuration to `.vscode/settings.json`:
```json
{
  // Disable the default formatter, use eslint instead
  "prettier.enable": false,
  "editor.formatOnSave": false,

  // Auto fix
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },

  // Silent the stylistic rules in you IDE, but still auto fix them
  "eslint.rules.customizations": [
    { "rule": "style/*", "severity": "off" },
    { "rule": "format/*", "severity": "off" },
    { "rule": "*-indent", "severity": "off" },
    { "rule": "*-spacing", "severity": "off" },
    { "rule": "*-spaces", "severity": "off" },
    { "rule": "*-order", "severity": "off" },
    { "rule": "*-dangle", "severity": "off" },
    { "rule": "*-newline", "severity": "off" },
    { "rule": "*quotes", "severity": "off" },
    { "rule": "*semi", "severity": "off" }
  ],

  // Enable eslint for all supported languages
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "handlebars",
    "markdown",
    "json",
    "jsonc",
    "yaml",
    "toml",
    "xml",
    "gql",
    "graphql",
    "css",
    "less",
    "scss",
    "pcss",
    "postcss"
  ]
}
```

## ⚙️ Options

- `tailwind`, `vue`, `nuxt`, `vueI18n`, `react`, `next`, `reactI18n`, `autoImports` rules can be enabled:
```js
// eslint.config.mjs
import dethdkn from '@dethdkn/eslint-config'

export default dethdkn({ tailwind: true, vue: true, nuxt: true, vueI18n: true, react: true, next: true, reactI18n: true, autoImports: true })
```

## 📝 License

Copyright © 2024 [Gabriel 'DethDKN' Rosa](https://github.com/dethdkn)\
This project is under [MIT license](https://github.com/dethdkn/eslint-config/blob/main/LICENSE)

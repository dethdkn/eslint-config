import vue from 'eslint-plugin-vue'

export default (tailwind: boolean, nuxt: boolean) => ({
  name: 'dethdkn/vue',
  plugins: { vue },
  rules: {
    'vue/consistent-list-newline': ['error'],
  },
})

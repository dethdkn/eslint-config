import vue from 'eslint-plugin-vue'

export default (tailwind: boolean, nuxt: boolean) => ({
  name: 'dethdkn/vue/rules',
  plugins: { vue },
  rules: {
    'vue/comment-directive': ['error'],
  },
})

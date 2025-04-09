import parser from '@html-eslint/parser'

export default {
  name: 'dethdkn/html/parser',
  files: ['**/*.html', '**/*.hbs'],
  languageOptions: {
    parser,
    parserOptions: {
      templateEngineSyntax: {
        '{{': '}}',
      },
    },
  },
}

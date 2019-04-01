module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'prettier',
    'prettier/vue'
  ],
  plugins: [
    '@typescript-eslint',
    'prettier'
  ],
  // add your custom rules here
  rules: {}
}

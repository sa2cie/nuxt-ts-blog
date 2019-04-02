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
    'prettier/vue',
    'airbnb-standard'
  ],
  plugins: [
    '@typescript-eslint',
    'prettier'
  ],
  // add your custom rules here
  rules: {
    "no-console": ["off"],
    'no-unused-vars': 'off',
    'typescript/no-unused-vars': 'off',
    "import/no-extraneous-dependencies": ["off"],
    'import/no-unresolved': 'off',
    'lines-between-class-members': 'off',
    'class-methods-use-this': 'off',
    'vue/no-v-html': 'off'
  }
}

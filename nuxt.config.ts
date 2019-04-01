import { Configuration } from 'webpack'
import { Context } from '@nuxt/vue-app'
import pkg from './package.json'
import { getConfigForKeys } from './libs/config.js'
import { createClient } from './plugins/contentful.js'
import { CONFIG } from './assets/js/constants'

// CONSTANTS
const { SITE_NAME } = CONFIG;
const ctfConfig = getConfigForKeys([
  'CTF_BLOG_POST_TYPE_ID',
  'CTF_SPACE_ID',
  'CTF_CDA_ACCESS_TOKEN',
  'CTF_GA_TRACKING_ID'
])
const cdaClient = createClient(ctfConfig)

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: `ページタイトル | ${SITE_NAME}`,
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Extensions
   */
  extensions: ['ts', 'js'],

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#009688' },

  /*
   ** Global CSS
   */
  css: [
    'normalize.css',
    '@fortawesome/fontawesome-free-webfonts',
    '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css',
    '@/assets/css/base.scss'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/plugins/ga.js', ssr: false }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    "@nuxtjs/vuetify"
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config: Configuration, ctx: Context) {
      // Run ESLint on save
      if (config.module && ctx.isDev && ctx.isClient) {
        config.module.rules.push(
          {
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/
          }
        )
      }
    }
  },
  generate: {
    routes() {
      return cdaClient
        .getEntries({ content_type: ctfConfig.CTF_BLOG_POST_TYPE_ID })
        .then(entries => [...entries.items.map(entry => `/post/${entry.sys.id}`)])
    }
  },
  env: {
    CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: ctfConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_BLOG_POST_TYPE_ID: ctfConfig.CTF_BLOG_POST_TYPE_ID,
    CTF_GA_TRACKING_ID: ctfConfig.CTF_GA_TRACKING_ID
  }
}

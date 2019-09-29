import NuxtConfiguration from '@nuxt/config'
import StylelintPlugin from 'stylelint-webpack-plugin'
import hooks from './src/hooks'
import * as localSessions from './src/store/localSessions'

require('dotenv').config()

const defaultUrl = 'https://vuefes.jp/2019/'
const defaultTitle = 'Vue Fes Japan 2019'
const defaultDescription =
  '2019年10月12日（土）に開催される日本最大級の Vue.js カンファレンス。国内外の著名スピーカーによるセッションの他、ユーザー同士が気軽に話し合える場も設ける予定です。ぜひ、一緒に Vue.js を楽しみ、盛り上げていきましょう！'
const defaultOgImageUrl = 'https://vuefes.jp/2019/opengraph.png'
const applicationName = 'Vue Fes' // 「ホーム画面に追加」したときのアプリケーション名

const config: NuxtConfiguration = {
  mode: 'universal',
  srcDir: 'src/',
  router: {
    base: '/2019/'
  },
  hooks: hooks(this),
  head: {
    htmlAttrs: {
      lang: 'ja'
    },
    title: defaultTitle,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'og:locale', content: 'ja_JP' },
      { name: 'og:type', content: 'website' },
      { name: 'og:site_name', content: 'Vue Fes Japan 2019' },
      { name: 'twitter:creator', content: '@vuefes' },
      { hid: 'description', name: 'description', content: defaultDescription },
      { hid: 'og:url', name: 'og:url', content: defaultUrl },
      { hid: 'og:title', name: 'og:title', content: defaultTitle },
      {
        hid: 'og:description',
        name: 'og:description',
        content: defaultDescription
      },
      { hid: 'og:image', name: 'og:image', content: defaultOgImageUrl },
      {
        hid: 'og:image:secure_url',
        name: 'og:image:secure_url',
        content: defaultOgImageUrl
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      { hid: 'twitter:title', name: 'twitter:title', content: defaultTitle },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: defaultDescription
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: defaultOgImageUrl
      },
      {
        name: 'application-name',
        content: applicationName
      },
      {
        name: 'apple-mobile-web-app-title',
        content: applicationName
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/2019/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        href: '/2019/apple-touch-icon.png',
        sizes: '180x180'
      }
    ]
  },
  loading: { color: '#fff' },
  css: ['~/assets/stylesheets/main.scss'],
  plugins: [
    { src: '~/plugins/typekit', mode: 'client' },
    { src: '~/plugins/vee-validate' },
    { src: '~/plugins/vue-lazyload', mode: 'client' },
    { src: '~/plugins/sponsor-anchor', mode: 'client' }
  ],
  modules: [
    '@nuxtjs/dotenv',
    [
      'nuxt-fontawesome',
      {
        component: 'fa'
      }
    ],
    [
      '@nuxtjs/google-analytics',
      {
        id: process.env.GA_TRACKING_ID || 'UA-XXXXXXX-X'
      }
    ],
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/pwa',
      {
        icon: {
          iconSrc: 'src/static/apple-touch-icon.png'
        }
      }
    ]
  ],
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID || 'PLEASE_SET_CTF_SPACE_ID',
    CTF_CDA_ACCESS_TOKEN:
      process.env.CTF_CDA_ACCESS_TOKEN || 'PLEASE_SET_CTF_CDA_ACCESS_TOKEN',
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY || 'PLEASE_SET_ME'
  },
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module!.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        config.plugins!.push(
          new StylelintPlugin({
            files: ['**/*.vue', '**/*.scss']
          })
        )
      }
    }
  },
  generate: {
    dir: 'dist/2019',
    routes: localSessions
      .state()
      .sessions.map(session => `/sessions/${session.speakerId}`)
  },
  styleResources: {
    scss: [
      '~/assets/stylesheets/foundation/variables.scss',
      '~/assets/stylesheets/foundation/colors.scss'
    ]
  },
  manifest: {
    short_name: 'Vue Fes',
    name: 'Vue Fes'
  }
}

export default config

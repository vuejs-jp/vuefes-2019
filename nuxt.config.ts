import { nuxtViteConfig } from './build/nuxt-vite'

const defaultUrl = 'https://vuefes.jp/2019/'
const defaultTitle = 'Vue Fes Japan 2019'
const defaultDescription =
  '2019年10月12日（土）に開催される日本最大級の Vue.js カンファレンス。国内外の著名スピーカーによるセッションの他、ユーザー同士が気軽に話し合える場も設ける予定です。ぜひ、一緒に Vue.js を楽しみ、盛り上げていきましょう！'
const defaultOgImageUrl = 'https://vuefes.jp/2019/opengraph.png'
const applicationName = 'Vue Fes'

export default defineNuxtConfig({
  compatibilityDate: '2026-03-25',
  srcDir: 'src/',
  ssr: true,
  devtools: {
    enabled: true,
  },
  app: {
    baseURL: '/2019/',
    head: {
      htmlAttrs: {
        lang: 'ja',
      },
      title: defaultTitle,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'og:locale', content: 'ja_JP' },
        { name: 'og:type', content: 'website' },
        { name: 'og:site_name', content: 'Vue Fes Japan 2019' },
        { name: 'twitter:creator', content: '@vuefes' },
        { name: 'description', content: defaultDescription },
        { name: 'og:url', content: defaultUrl },
        { name: 'og:title', content: defaultTitle },
        { name: 'og:description', content: defaultDescription },
        { name: 'og:image', content: defaultOgImageUrl },
        { name: 'og:image:secure_url', content: defaultOgImageUrl },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: defaultTitle },
        { name: 'twitter:description', content: defaultDescription },
        { name: 'twitter:image', content: defaultOgImageUrl },
        { name: 'application-name', content: applicationName },
        { name: 'apple-mobile-web-app-title', content: applicationName },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/2019/favicon.ico' },
        {
          rel: 'apple-touch-icon',
          href: '/2019/apple-touch-icon.png',
          sizes: '180x180',
        },
      ],
    },
  },
  css: ['normalize.css/normalize.css', '~/assets/stylesheets/main.scss'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  modules: ['@nuxt/test-utils/module'],
  runtimeConfig: {
    contentfulSpaceId: process.env.CTF_SPACE_ID || '',
    contentfulAccessToken: process.env.CTF_CDA_ACCESS_TOKEN || '',
    public: {
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY || '',
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
  vite: nuxtViteConfig,
})

import NuxtConfiguration from '@nuxt/config'
import StylelintPlugin from 'stylelint-webpack-plugin'
import hooks from './src/hooks'

const defaultOgImageUrl: string = 'https://vuefes.jp/2019/opengraph.png'

const config: NuxtConfiguration = {
  mode: 'universal',
  srcDir: 'src/',
  router: {
    base: '/2019/'
  },
  hooks: hooks(this),
  head: {
    title: 'vuefes-2019',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Vue Fes Japan 2019'
      },
      { hid: 'og:image', name: 'og:image', content: defaultOgImageUrl },
      {
        hid: 'og:image:secure_url',
        name: 'og:image:secure_url',
        content: defaultOgImageUrl
      }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://use.typekit.net/ecl1lua.css' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: ['~/assets/stylesheets/main.scss'],
  plugins: [{ src: '~/plugins/vee-validate' }],
  modules: [
    [
      'nuxt-fontawesome',
      {
        component: 'fa'
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
    dir: 'dist/2019'
  },
  styleResources: {
    scss: [
      '~/assets/stylesheets/foundation/variables.scss',
      '~/assets/stylesheets/foundation/colors.scss'
    ]
  }
}

export default config

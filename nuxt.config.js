import StylelintPlugin from 'stylelint-webpack-plugin'
import pkg from './package'

export default {
  mode: 'universal',
  srcDir: 'src/',
  router: {
    base: '/2019/'
  },
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: [{ src: '~/assets/stylesheets/main.scss', lang: 'scss' }],
  plugins: [],
  modules: [
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
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        config.plugins.push(
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

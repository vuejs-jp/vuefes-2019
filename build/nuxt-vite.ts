import { fileURLToPath } from 'node:url'

const srcDir = fileURLToPath(new URL('../src', import.meta.url))

export const nuxtViteConfig = {
  resolve: {
    alias: {
      '~': srcDir,
      '@': srcDir,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: [
          '@use "@/assets/stylesheets/foundation/variables.scss" as *;',
          '@use "@/assets/stylesheets/foundation/colors.scss" as *;',
        ].join('\n'),
      },
    },
  },
  optimizeDeps: {
    include: [
      '@fortawesome/vue-fontawesome',
      'dayjs',
      'contentful',
      '@fortawesome/free-brands-svg-icons',
      'gsap',
    ],
  },
}

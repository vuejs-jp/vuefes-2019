import { defineVitestProject } from '@nuxt/test-utils/config'
import { defineConfig } from 'vitest/config'
import { nuxtViteConfig } from './build/nuxt-vite'

export default defineConfig(async () => ({
  ...nuxtViteConfig,
  test: {
    projects: [
      {
        test: {
          name: 'unit',
          include: ['test/unit/*.spec.ts'],
          environment: 'node',
        },
      },
      await defineVitestProject({
        test: {
          name: 'nuxt',
          include: ['test/nuxt/*.spec.ts'],
          environment: 'nuxt',
        },
      }),
    ],
  },
}))

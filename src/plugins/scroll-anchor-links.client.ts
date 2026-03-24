import type { Router } from 'vue-router'

export default defineNuxtPlugin((nuxtApp) => {
  const router = nuxtApp.$router as Router

  router.afterEach((to) => {
    if (!to.hash) {
      return
    }

    requestAnimationFrame(() => {
      const element = document.querySelector<HTMLElement>(to.hash)

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    })
  })
})

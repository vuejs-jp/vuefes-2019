type LazyContainerBinding = {
  selector?: string
}

const observerMap = new WeakMap<HTMLElement, IntersectionObserver>()

function loadImage(element: HTMLImageElement) {
  const src = element.dataset.src
  const srcset = element.dataset.srcset

  if (src) {
    element.src = src
  }

  if (srcset) {
    element.srcset = srcset
  }

  element.loading = 'lazy'
}

function setupObserver(element: HTMLElement, selector = 'img') {
  observerMap.get(element)?.disconnect()

  const targets = Array.from(
    element.querySelectorAll<HTMLImageElement>(selector),
  )

  if (!targets.length) {
    return
  }

  if (!('IntersectionObserver' in window)) {
    targets.forEach(loadImage)
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) {
        return
      }

      targets.forEach(loadImage)
      observer.disconnect()
    },
    {
      rootMargin: '2160px',
      threshold: 0,
    },
  )

  observer.observe(element)
  observerMap.set(element, observer)
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('lazy-container', {
    mounted(element, binding) {
      const value = binding.value as LazyContainerBinding | undefined
      setupObserver(element, value?.selector)
    },
    updated(element, binding) {
      const value = binding.value as LazyContainerBinding | undefined
      setupObserver(element, value?.selector)
    },
    unmounted(element) {
      observerMap.get(element)?.disconnect()
    },
  })
})

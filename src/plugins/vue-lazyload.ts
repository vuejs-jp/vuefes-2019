import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  throttleWait: 100,
  observer: true,
  observerOptions: {
    rootMargin: '2160px',
    threshold: 0
  }
})

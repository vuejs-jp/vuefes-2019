import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  loading: 'loading',
  throttleWait: 100,
  observer: true,
  observerOptions: {
    rootMargin: '2160px',
    threshold: 0
  }
})

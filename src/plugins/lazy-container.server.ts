export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('lazy-container', {
    getSSRProps() {
      return {}
    },
  })
})

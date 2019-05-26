import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  loading: 'loading',
  throttleWait: 4000 // TODO: デバッグ用の値なので、あとで値を変更する
})

import { mount, RouterLinkStub, createLocalVue } from '@vue/test-utils'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueLazyLoad from 'vue-lazyload'
import Vuex from 'vuex'
import createFullStore from 'test/unit/specs/utils/createFullStore'
import HomePage from '~/pages/index.vue'

const localVue = createLocalVue()

localVue.use(VueLazyLoad)
localVue.use(Vuex)

const store = createFullStore(Vuex)

describe('HomePage', () => {
  test('レンダリングできる', () => {
    const wrapper = mount(HomePage, {
      localVue,
      store,
      stubs: {
        NuxtLink: RouterLinkStub,
        Fa: FontAwesomeIcon,
        'no-ssr': '<div></div>'
      }
    })
    expect(wrapper.find('.home-page').isVisible()).toBeTruthy()
  })
})

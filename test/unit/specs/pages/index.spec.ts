import { mount, RouterLinkStub, createLocalVue } from '@vue/test-utils'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueLazyLoad from 'vue-lazyload'
import HomePage from '~/pages/index.vue'

const localVue = createLocalVue()

localVue.use(VueLazyLoad)

describe('HomePage', () => {
  test('レンダリングできる', () => {
    const wrapper = mount(HomePage, {
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub,
        Fa: FontAwesomeIcon,
        'no-ssr': '<div></div>'
      }
    })
    expect(wrapper.find('.home-page').isVisible()).toBeTruthy()
  })
})

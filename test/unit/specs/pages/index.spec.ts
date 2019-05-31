import { mount, RouterLinkStub } from '@vue/test-utils'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import HomePage from '~/pages/index.vue'

describe('HomePage', () => {
  // FIXME: TypeError: Expected parameter accessToken
  test('レンダリングできる', () => {
    const wrapper = mount(HomePage, {
      stubs: {
        NuxtLink: RouterLinkStub,
        Fa: FontAwesomeIcon,
        'no-ssr': '<div></div>'
      }
    })
    expect(wrapper.find('.home-page').isVisible()).toBeTruthy()
  })
})

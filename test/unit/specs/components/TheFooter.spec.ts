import { mount, RouterLinkStub } from '@vue/test-utils'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import TheFooter from '~/components/TheFooter.vue'

describe('TheFooter', () => {
  test('レンダリングできる', () => {
    const wrapper = mount(TheFooter, {
      stubs: {
        NuxtLink: RouterLinkStub,
        Fa: FontAwesomeIcon
      }
    })
    expect(wrapper.find('.the-footer').isVisible()).toBeTruthy()
  })
})

import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import ContactPage from '~/pages/contact.vue'

describe('ContactPage', () => {
  test('レンダリングできる', () => {
    const wrapper = shallowMount(ContactPage, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.find('.contact').isVisible()).toBeTruthy()
  })
})

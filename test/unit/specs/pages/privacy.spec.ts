import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import PrivacyPage from '~/pages/privacy.vue'

describe('PrivacyPage', () => {
  test('レンダリングできる', () => {
    const wrapper = shallowMount(PrivacyPage, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.find('.privacy-page').isVisible()).toBeTruthy()
  })
})

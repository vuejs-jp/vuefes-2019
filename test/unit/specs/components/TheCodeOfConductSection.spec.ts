import { mount, RouterLinkStub } from '@vue/test-utils'
import TheCodeOfConductSection from '~/components/TheCodeOfConductSection.vue'

describe('TheCodeOfConductSection', () => {
  test('レンダリングできる', () => {
    const wrapper = mount(TheCodeOfConductSection, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(
      wrapper.find('.the-code-of-conduct-section').isVisible()
    ).toBeTruthy()
  })
})

import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import CodeOfConductPage from '~/pages/code-of-conduct.vue'

describe('CodeOfConductPage', () => {
  test('レンダリングできる', () => {
    const wrapper = shallowMount(CodeOfConductPage, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.find('.code-of-conduct-page').isVisible()).toBeTruthy()
  })
})

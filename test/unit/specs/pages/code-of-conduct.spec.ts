import { mount, RouterLinkStub } from '@vue/test-utils'
import CodeOfConduct from '~/pages/code-of-conduct.vue'

describe('CodeOfConduct', () => {
  test('レンダリングできる', () => {
    const wrapper = mount(CodeOfConduct, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.find('.code-of-conduct').isVisible()).toBeTruthy()
  })
})

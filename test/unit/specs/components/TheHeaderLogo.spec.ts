import { mount, RouterLinkStub } from '@vue/test-utils'
import TheHeaderLogo from '~/components/TheHeaderLogo.vue'

describe('TheHeaderLogo', () => {
  test('トップページへのリンクをレンダリングできる', () => {
    const wrapper = mount(TheHeaderLogo, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.find('a').props().to).toEqual('/')
  })
})

import Vue from 'vue'
import { mount, RouterLinkStub, Wrapper } from '@vue/test-utils'
import CodeOfConductPage from '~/pages/code-of-conduct.vue'

describe('CodeOfConductPage', () => {
  let wrapper: Wrapper<Vue>

  beforeEach(() => {
    wrapper = mount(CodeOfConductPage, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
  })

  test('レンダリングできる', () => {
    expect(wrapper.find('.code-of-conduct-page').isVisible()).toBeTruthy()
  })

  test('NuxtLink がルートパス指定になっており、かつ Trailing Slash が入っている', () => {
    const nuxtLinks: Wrapper<Vue>[] = wrapper.findAll(RouterLinkStub).wrappers

    for (const nuxtLink of nuxtLinks) {
      expect(nuxtLink.props().to).toEqual(
        expect.stringMatching(/^\/([\w-]+\/)?$/)
      )
    }
  })
})

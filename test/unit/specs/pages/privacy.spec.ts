import Vue from 'vue'
import { shallowMount, RouterLinkStub, Wrapper } from '@vue/test-utils'
import PrivacyPage from '~/pages/privacy.vue'

describe('PrivacyPage', () => {
  let wrapper: Wrapper<Vue>

  beforeEach(() => {
    wrapper = shallowMount(PrivacyPage, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
  })

  test('レンダリングできる', () => {
    expect(wrapper.find('.privacy-page').isVisible()).toBeTruthy()
  })

  test('NuxtLink がルートパス指定になっており、かつ Trailing Slash が入っている', () => {
    const nuxtLinks: Wrapper<Vue>[] = wrapper.findAll('.nuxt-link').wrappers

    for (const nuxtLink of nuxtLinks) {
      expect(nuxtLink.props().to).toEqual(
        expect.stringMatching(/^\/([\w-]+\/)?$/)
      )
    }
  })
})

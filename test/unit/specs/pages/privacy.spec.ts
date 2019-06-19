import Vue from 'vue'
import { mount, RouterLinkStub, Wrapper } from '@vue/test-utils'
import PrivacyPage from '~/pages/privacy.vue'

describe('PrivacyPage', () => {
  let wrapper: Wrapper<Vue>

  beforeEach(() => {
    wrapper = mount(PrivacyPage, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
  })

  test('レンダリングできる', () => {
    expect(wrapper.find('.privacy-page').isVisible()).toBeTruthy()
  })

  test('NuxtLink がルートパス指定になっており、かつ Trailing Slash が入っている', () => {
    expect(wrapper.find(RouterLinkStub).props().to).toBe('/')
  })
})

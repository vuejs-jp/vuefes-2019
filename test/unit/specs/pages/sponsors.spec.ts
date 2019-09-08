import Vue from 'vue'
import { mount, RouterLinkStub, Wrapper } from '@vue/test-utils'
import SponsorsPage from '~/pages/sponsors.vue'

describe('SponsorsPage', () => {
  let wrapper: Wrapper<Vue>

  beforeEach(() => {
    wrapper = mount(SponsorsPage, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
  })

  test('レンダリングできる', () => {
    expect(wrapper.find('.sponsors-page').isVisible()).toBeTruthy()
  })
})

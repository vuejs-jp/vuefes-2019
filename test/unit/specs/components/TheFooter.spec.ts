import Vue from 'vue'
import { mount, RouterLinkStub, Wrapper } from '@vue/test-utils'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import TheFooter from '~/components/TheFooter.vue'

describe('TheFooter', () => {
  let wrapper: Wrapper<Vue>

  beforeEach(() => {
    wrapper = mount(TheFooter, {
      stubs: {
        NuxtLink: RouterLinkStub,
        Fa: FontAwesomeIcon
      }
    })
  })

  test('レンダリングできる', () => {
    expect(wrapper.find('.the-footer').isVisible()).toBeTruthy()
  })

  test('NuxtLink がルートパス指定になっており、かつ Trailing Slash が入っている', () => {
    const nuxtLinks: Wrapper<Vue>[] = wrapper.findAll('.nuxt-link').wrappers

    for (const nuxtLink of nuxtLinks) {
      expect(nuxtLink.props().to).toEqual(
        expect.stringMatching(/(^\/[\w-]+\/$|\/)/)
      )
    }
  })
})

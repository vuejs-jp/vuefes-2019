import { mount, RouterLinkStub } from '@vue/test-utils'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import TheFooter from '~/components/TheFooter.vue'

describe('TheFooter', () => {
  let wrapper

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
    for (const link of wrapper.findAll('.menu-list a').wrappers) {
      expect(link.props().to).toEqual(expect.stringMatching(/^\/[\w-]+\/$/))
    }
  })
})

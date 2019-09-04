import { mount, createLocalVue, RouterLinkStub, Wrapper } from '@vue/test-utils'
import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import TheFooter from '~/components/TheFooter.vue'

const localVue = createLocalVue()

localVue.use(VueLazyLoad)

describe('TheFooter', () => {
  let wrapper: Wrapper<Vue>

  beforeEach(() => {
    wrapper = mount(TheFooter, {
      localVue,
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
    const nuxtLinks: Wrapper<Vue>[] = wrapper.findAll(RouterLinkStub).wrappers

    for (const nuxtLink of nuxtLinks) {
      expect(nuxtLink.props().to).toEqual(
        expect.stringMatching(/^\/([\w-]+\/)?$/)
      )
    }
  })
})

import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import VueLazyLoad from 'vue-lazyload'
import Vuex from 'vuex'
import createFullStore from 'test/unit/specs/utils/createFullStore'
import TheSpeakerListSection from '~/components/TheSpeakerListSection.vue'

const localVue = createLocalVue()

localVue.use(VueLazyLoad)
localVue.use(Vuex)

const store = createFullStore(Vuex)

describe('TheSpeakerListSection', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(TheSpeakerListSection, {
      localVue,
      store,
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
  })

  test('レンダリングできる', () => {
    expect(wrapper.find('.the-speaker-list-section').isVisible()).toBeTruthy()
  })

  test('リンクに Trailing Slash が入っている', () => {
    expect(wrapper.find('.avatar-link').props().to).toBe('/sessions/yyx990803/')
    expect(wrapper.find('.name-link').props().to).toBe('/sessions/yyx990803/')
  })
})

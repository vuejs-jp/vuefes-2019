import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import createFullStore from '../../utils/createFullStore'
import SessionPage from '~/pages/sessions/_speakerId.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

const store = createFullStore(Vuex)

describe('SessionPage', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(SessionPage, {
      localVue,
      store,
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
  })

  test('レンダリングできる', () => {
    const data = wrapper.vm.$options.asyncData({
      params: { speakerId: 'yyx990803' },
      route: { parh: '/sessions/yyx990803' }
    })
    wrapper.setData(data)

    expect(wrapper.find('.session-page').isVisible()).toBeTruthy()
  })
})

import { mount, createLocalVue } from '@vue/test-utils'
import VueLazyLoad from 'vue-lazyload'
import Vuex from 'vuex'
import TheSpeakerListSection from '~/components/TheSpeakerListSection.vue'
import * as speakers from '~/store/speakers'

const localVue = createLocalVue()

localVue.use(VueLazyLoad)
localVue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    speakers: {
      namespaced: true,
      state: speakers.state,
      getters: speakers.getters
    }
  }
})

describe('TheSpeakerListSection', () => {
  test.skip('レンダリングできる', () => {
    const wrapper = mount(TheSpeakerListSection, {
      localVue,
      store
    })
    expect(wrapper.find('.the-speaker-list-section').isVisible()).toBeTruthy()
  })
})

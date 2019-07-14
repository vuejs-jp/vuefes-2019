import { mount, createLocalVue } from '@vue/test-utils'
import VueLazyLoad from 'vue-lazyload'
import Vuex from 'vuex'
import TheSpeakerListSection from '~/components/TheSpeakerListSection.vue'
import * as speakers from '~/store/speakers'

const localVue = createLocalVue()
const store = () => {
  return new Vuex.Store({
    modules: {
      speakers: {
        namespaced: true,
        state: speakers.state,
        getters: speakers.getters
      }
    }
  })
}

localVue.use(VueLazyLoad)
localVue.use(Vuex)

describe('TheSpeakerListSection', () => {
  test.skip('レンダリングできる', () => {
    // FIXME: error TS2345: Argument of type 'VueConstructor<Vue>' is not assignable to parameter of type 'FunctionalComponentOptions<Record<string, any>, PropsDefinition<Record<string, any>>>'.
    // Property 'functional' is missing in type 'VueConstructor<Vue>' but required in type 'FunctionalComponentOptions<Record<string, any>, PropsDefinition<Record<string, any>>>'.
    const wrapper = mount(TheSpeakerListSection, {
      localVue,
      store
    })
    expect(wrapper.find('.the-speaker-list-section').isVisible()).toBeTruthy()
  })
})

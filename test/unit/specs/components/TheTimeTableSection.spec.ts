import { mount, RouterLinkStub, createLocalVue } from '@vue/test-utils'
import VueLazyLoad from 'vue-lazyload'
import Vuex from 'vuex'
import createFullStore from '../utils/createFullStore'
import TheTimeTableSection from '~/components/TheTimeTableSection.vue'

const localVue = createLocalVue()

localVue.use(VueLazyLoad)
localVue.use(Vuex)

const store = createFullStore(Vuex)

describe('TheTimeTableSection', () => {
  test('レンダリングできる', () => {
    const wrapper = mount(TheTimeTableSection, {
      localVue,
      store,
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.find('.the-time-table-section').isVisible()).toBeTruthy()
  })
})

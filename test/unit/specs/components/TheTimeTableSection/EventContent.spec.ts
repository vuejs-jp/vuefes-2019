import { mount, RouterLinkStub, createLocalVue } from '@vue/test-utils'
import VueLazyLoad from 'vue-lazyload'
import Vuex from 'vuex'
import createFullStore from '../../utils/createFullStore'
import keynote from '../../../../fixtures/contentful/keynote'
import sessions from '../../../../fixtures/contentful/sessions'
import events from '../../../../fixtures/contentful/events'
import EventContent from '~/components/TheTimeTableSection/EventContent.vue'

const localVue = createLocalVue()

localVue.use(VueLazyLoad)
localVue.use(Vuex)

const store = createFullStore(Vuex)

const mountEventContent = content => {
  return mount(EventContent, {
    localVue,
    store,
    propsData: {
      content
    },
    stubs: {
      NuxtLink: RouterLinkStub
    }
  })
}

describe('EventContent', () => {
  let wrapper

  describe('content がキーノートのとき', () => {
    beforeEach(() => {
      wrapper = mountEventContent(keynote)
    })

    test('Keynote を表示できる', () => {
      expect(wrapper.find('.keynote').isVisible()).toBeTruthy()
    })
  })

  describe('content が Session のとき', () => {
    beforeEach(() => {
      wrapper = mountEventContent(sessions[0])
    })

    test('Session を表示できる', () => {
      expect(wrapper.find('.session').isVisible()).toBeTruthy()
    })
  })

  describe('content が Event のとき', () => {
    beforeEach(() => {
      wrapper = mountEventContent(events[0])
    })

    test('Event を表示できる', () => {
      expect(wrapper.find('.event').isVisible()).toBeTruthy()
    })
  })
})

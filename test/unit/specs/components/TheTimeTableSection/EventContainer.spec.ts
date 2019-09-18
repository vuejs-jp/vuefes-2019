import { mount, RouterLinkStub, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import createFullStore from '../../utils/createFullStore'
import eventContainerWithParts from '../../../../fixtures/contentful/eventContainerWithParts'
import eventContainerWithoutParts from '../../../../fixtures/contentful/eventContainerWithoutParts'
import EventContainer from '~/components/TheTimeTableSection/EventContainer.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

const store = createFullStore(Vuex)

const mountEventContainer = eventContainer => {
  return mount(EventContainer, {
    localVue,
    store,
    propsData: {
      eventContainer
    },
    stubs: {
      NuxtLink: RouterLinkStub
    }
  })
}

describe('EventContainer', () => {
  let wrapper

  describe('EventContainerParts を持っているとき', () => {
    beforeEach(() => {
      wrapper = mountEventContainer(eventContainerWithParts)
    })

    test('EventContainerPart を表示できる', () => {
      expect(wrapper.find('.event-container-part').isVisible()).toBeTruthy()
    })

    test('EventContent を表示できる', () => {
      expect(wrapper.find('.event-content').isVisible()).toBeTruthy()
    })
  })

  describe('EventContainerParts を持っていないとき', () => {
    beforeEach(() => {
      wrapper = mountEventContainer(eventContainerWithoutParts)
    })

    test('EventContainerPart を表示しない', () => {
      expect(wrapper.find('.event-container-part').exists()).toBeFalsy()
    })

    test('EventContent を表示できる', () => {
      expect(wrapper.find('.event-content').isVisible()).toBeTruthy()
    })
  })
})

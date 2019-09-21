import { mount, RouterLinkStub, createLocalVue } from '@vue/test-utils'
import VueLazyLoad from 'vue-lazyload'
import Vuex from 'vuex'
import createFullStore from '../../utils/createFullStore'
import eventContainerWithParts from '../../../../fixtures/contentful/eventContainerWithParts'
import eventContainerWithoutParts from '../../../../fixtures/contentful/eventContainerWithoutParts'
import eventContainerWithSessionHavingTranslation from '../../../../fixtures/contentful/eventContainerWithSessionHavingTranslation'
import eventContainerWithSessionNotHavingTranslation from '../../../../fixtures/contentful/eventContainerWithSessionNotHavingTranslation'
import eventContainerWithEventsClosed from '../../../../fixtures/contentful/eventContainerWithEventsClosed'
import EventContainer from '~/components/TheTimeTableSection/EventContainer.vue'

const localVue = createLocalVue()

localVue.use(VueLazyLoad)
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

  describe('hasTranslation', () => {
    describe('contents が Session を持っているとき', () => {
      describe('Session が hasTranslation: true のとき', () => {
        beforeEach(() => {
          wrapper = mountEventContainer(
            eventContainerWithSessionHavingTranslation
          )
        })

        test('truthy を返す', () => {
          expect(wrapper.vm.hasTranslation).toBeTruthy()
        })
      })

      describe('Session が hasTranslation: false のとき', () => {
        beforeEach(() => {
          wrapper = mountEventContainer(
            eventContainerWithSessionNotHavingTranslation
          )
        })

        test('falsy を返す', () => {
          expect(wrapper.vm.hasTranslation).toBeFalsy()
        })
      })
    })

    describe('contents が Session を持っていないとき', () => {
      beforeEach(() => {
        wrapper = mountEventContainer(eventContainerWithEventsClosed)
      })

      test('falsy を返す', () => {
        expect(wrapper.vm.hasTranslation).toBeFalsy()
      })
    })
  })

  describe('hasEventsClosed', () => {
    describe('クローズ Event を持っているとき', () => {
      beforeEach(() => {
        wrapper = mountEventContainer(eventContainerWithEventsClosed)
      })

      test('truthy を返す', () => {
        expect(wrapper.vm.hasEventsClosed).toBeTruthy()
      })
    })
  })
})

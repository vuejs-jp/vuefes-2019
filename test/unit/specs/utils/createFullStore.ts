import speakersData from '../../__mocks__/speakers'
import eventContainersData from '../../__mocks__/eventContainers'
import eventContainerPartsData from '../../__mocks__/eventContainerParts'
import * as localSessions from '~/store/localSessions'
import * as localSpeakers from '~/store/localSpeakers'
import * as speakers from '~/store/speakers'
import * as timeTableSections from '~/store/timeTableSections'
import * as eventContainers from '~/store/eventContainers'
import * as eventContainerParts from '~/store/eventContainerParts'

export default Vuex => {
  const store = new Vuex.Store({
    modules: {
      localSessions: {
        namespaced: true,
        ...localSessions
      },
      localSpeakers: {
        namespaced: true,
        ...localSpeakers
      },
      speakers: {
        namespaced: true,
        ...speakers
      },
      timeTableSections: {
        namespaced: true,
        ...timeTableSections
      },
      eventContainers: {
        namespaced: true,
        ...eventContainers
      },
      eventContainerParts: {
        namespaced: true,
        ...eventContainerParts
      }
    }
  })

  store.commit('speakers/setSpeakers', speakersData)
  store.commit('eventContainers/setEventContainers', eventContainersData)
  store.commit(
    'eventContainerParts/setEventContainerParts',
    eventContainerPartsData
  )

  return store
}

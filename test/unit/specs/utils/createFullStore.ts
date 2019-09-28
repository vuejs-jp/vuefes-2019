import speakersData from '../../../fixtures/contentful/speakers'
import timeTableSectionsData from '../../../fixtures/contentful/timeTableSections'
import eventContainersData from '../../../fixtures/contentful/eventContainers'
import eventContainerPartsData from '../../../fixtures/contentful/eventContainerParts'
import sponsorsData from '../../../fixtures/contentful/sponsorList'
import * as localSessions from '~/store/localSessions'
import * as localSpeakers from '~/store/localSpeakers'
import * as speakers from '~/store/speakers'
import * as timeTableSections from '~/store/timeTableSections'
import * as eventContainers from '~/store/eventContainers'
import * as eventContainerParts from '~/store/eventContainerParts'
import * as sponsors from '~/store/sponsors'

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
      },
      sponsors: {
        namespaced: true,
        ...sponsors
      }
    }
  })

  // nuxtServerInit と同様のことを行う
  store.commit('speakers/setSpeakers', speakersData)
  store.commit('timeTableSections/setTimeTableSections', timeTableSectionsData)
  store.commit('eventContainers/setEventContainers', eventContainersData)
  store.commit(
    'eventContainerParts/setEventContainerParts',
    eventContainerPartsData
  )
  store.commit('sponsors/setSponsors', sponsorsData)

  return store
}

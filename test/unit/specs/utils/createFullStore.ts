import cloneDeep from 'lodash.clonedeep'
import speakersData from '../../../fixtures/contentful/speakers'
import timeTableSectionsData from '../../../fixtures/contentful/timeTableSections'
import eventContainersData from '../../../fixtures/contentful/eventContainers'
import eventContainerPartsData from '../../../fixtures/contentful/eventContainerParts'
import sponsorsData from '../../../fixtures/contentful/sponsors'
import assetData from '../../../fixtures/contentful/asset'
import * as localSessions from '~/store/localSessions'
import * as localSpeakers from '~/store/localSpeakers'
import * as speakers from '~/store/speakers'
import * as timeTableSections from '~/store/timeTableSections'
import * as eventContainers from '~/store/eventContainers'
import * as eventContainerParts from '~/store/eventContainerParts'
import * as sponsors from '~/store/sponsors'

const speakersDataWithAssets = cloneDeep(speakersData).map(speaker => {
  speaker.fields.avatar = assetData
  speaker.fields.avatar2x = assetData
  return speaker
})

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
  store.commit('speakers/setSpeakers', speakersDataWithAssets)
  store.commit('timeTableSections/setTimeTableSections', timeTableSectionsData)
  store.commit('eventContainers/setEventContainers', eventContainersData)
  store.commit(
    'eventContainerParts/setEventContainerParts',
    eventContainerPartsData
  )
  store.commit('sponsors/setSponsors', sponsorsData)

  return store
}

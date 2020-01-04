import cloneDeep from 'lodash.clonedeep'
import { Getters, Mutations, Actions } from '~/types/store'
import Speaker from '~/types/speaker'
import { getAsset, getSpeakers } from '~/plugins/contentful'

namespace Speakers {
  export type State = {
    speakers: Speaker[]
  }

  export type Getters = {
    all: Speaker[]
    find: (id: string) => Speaker | undefined
  }

  export type Mutations = {
    setSpeakers: Speaker[]
    updateSpeaker: Speaker
  }

  export type Actions = {
    initialize: undefined
    fetchSpeakers: undefined
    fetchAsset: Speaker
  }
}

export const state = (): Speakers.State => ({
  speakers: []
})

export const getters: Getters<Speakers.State, Speakers.Getters> = {
  all: state => {
    return state.speakers
  },
  find: state => id => {
    return state.speakers.find(speaker => speaker.sys.id === id)
  }
}

export const mutations: Mutations<Speakers.State, Speakers.Mutations> = {
  setSpeakers(state, speakers) {
    state.speakers = speakers
  },

  updateSpeaker(state, newSpeaker) {
    state.speakers = state.speakers.map(speaker =>
      speaker.sys.id === newSpeaker.sys.id ? newSpeaker : speaker
    )
  }
}

export const actions: Actions<
  Speakers.State,
  Speakers.Actions,
  Speakers.Getters,
  Speakers.Mutations
> = {
  async initialize({ getters, dispatch }) {
    await dispatch('fetchSpeakers')
    await Promise.all(
      getters.all.map(speaker => dispatch('fetchAsset', speaker))
    )
  },

  async fetchSpeakers({ commit }) {
    const speakers: Speaker[] = await getSpeakers()
    commit('setSpeakers', speakers)
  },

  async fetchAsset({ commit }, speaker) {
    const newSpeaker = cloneDeep(speaker)

    const [newAvatar, newAvatar2x] = await Promise.all([
      // @ts-ignore error TS2532: Object is possibly 'undefined'
      getAsset(speaker.fields.avatar.sys.id),

      // @ts-ignore error TS2532: Object is possibly 'undefined'
      getAsset(speaker.fields.avatar2x.sys.id)
    ])

    newSpeaker.fields.avatar = newAvatar
    newSpeaker.fields.avatar2x = newAvatar2x

    commit('updateSpeaker', newSpeaker)
  }
}

import { Getters, Mutations, Actions } from '~/types/store'
import Speaker from '~/types/speaker'
import { getSpeakers } from '~/plugins/contentful'

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
  }

  export type Actions = {
    fetchSpeakers: void
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
  setSpeakers(state, payload) {
    state.speakers = payload
  }
}

export const actions: Actions<
  Speakers.State,
  Speakers.Actions,
  Speakers.Getters,
  Speakers.Mutations
> = {
  async fetchSpeakers({ commit }) {
    const speakers: Speaker[] = await getSpeakers()
    commit('setSpeakers', speakers)
  }
}

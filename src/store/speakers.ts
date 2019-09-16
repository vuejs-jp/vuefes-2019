import { Getters, Mutations, Actions } from '~/types/store'
import { EntrySys, EntryLink, AssetLink } from '~/types/contentful'
import { getSpeakers } from '~/plugins/contentful'

export type Speaker = {
  sys: EntrySys
  fields: {
    name: string
    title: string
    avatar: AssetLink
    avatar2x: AssetLink
    twitter: string | null
    github: string
    description: string
    sessions: EntryLink[]
  }
}

namespace Speakers {
  export type State = {
    speakers: Speaker[]
  }

  export type Getters = {
    all: Speaker[]
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

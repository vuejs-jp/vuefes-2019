import { Getters, Mutations, Actions } from '~/types/store'
import { Sys, EntryLink, AssetLink } from '~/types/contentful'
import { getSessions } from '~/plugins/contentful'

export type Session = {
  sys: Sys
  fields: {
    title: string
    time: number
    description: string
    ogImage: AssetLink
    speakers: EntryLink[]
  }
}

namespace Sessions {
  export type State = {
    sessions: Session[]
  }

  export type Getters = {
    all: Session[]
  }

  export type Mutations = {
    setSessions: Session[]
  }

  export type Actions = {
    fetchSessions: void
  }
}

export const state = (): Sessions.State => ({
  sessions: []
})

export const getters: Getters<Sessions.State, Sessions.Getters> = {
  all: state => {
    return state.sessions
  }
}

export const mutations: Mutations<Sessions.State, Sessions.Mutations> = {
  setSessions(state, payload) {
    state.sessions = payload
  }
}

export const actions: Actions<
  Sessions.State,
  Sessions.Actions,
  Sessions.Getters,
  Sessions.Mutations
> = {
  async fetchSessions({ commit }) {
    const sessions: Session[] = await getSessions()
    commit('setSessions', sessions)
  }
}

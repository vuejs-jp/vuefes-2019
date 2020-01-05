import cloneDeep from 'lodash.clonedeep'
import { Getters, Mutations, Actions } from '~/types/store'
import Session from '~/types/session'
import { getAsset, getSessions } from '~/plugins/contentful'

namespace Sessions {
  export type State = {
    sessions: Session[]
  }

  export type Getters = {
    all: Session[]
    find: (id: string) => Session | undefined
  }

  export type Mutations = {
    setSessions: Session[]
    updateSession: Session
  }

  export type Actions = {
    initialize: undefined
    fetchSessions: void
    fetchAsset: Session
  }
}

export const state = (): Sessions.State => ({
  sessions: []
})

export const getters: Getters<Sessions.State, Sessions.Getters> = {
  all: state => {
    return state.sessions
  },
  find: state => id => {
    return state.sessions.find(session => session.sys.id === id)
  }
}

export const mutations: Mutations<Sessions.State, Sessions.Mutations> = {
  setSessions(state, payload) {
    state.sessions = payload
  },

  updateSession(state, newSession) {
    state.sessions = state.sessions.map(session =>
      session.sys.id === newSession.sys.id ? newSession : session
    )
  }
}

export const actions: Actions<
  Sessions.State,
  Sessions.Actions,
  Sessions.Getters,
  Sessions.Mutations
> = {
  async initialize({ getters, dispatch }) {
    await dispatch('fetchSessions')
    await Promise.all(
      getters.all.map(session => dispatch('fetchAsset', session))
    )
  },

  async fetchSessions({ commit }) {
    const sessions: Session[] = await getSessions()
    commit('setSessions', sessions)
  },

  async fetchAsset({ commit }, session) {
    const newSession = cloneDeep(session)

    // @ts-ignore error TS2532: Object is possibly 'undefined'
    newSession.fields.ogImage = await getAsset(session.fields.ogImage.sys.id)

    commit('updateSession', newSession)
  }
}

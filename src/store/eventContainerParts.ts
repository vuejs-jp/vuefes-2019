import { Getters, Mutations, Actions } from '~/types/store'
import EventContainerPart from '~/types/eventContainerPart'
import { getEventContainerParts } from '~/plugins/contentful'

namespace EventContainerParts {
  export type State = {
    eventContainerParts: EventContainerPart[]
  }

  export type Getters = {
    find: (id: string) => EventContainerPart | undefined
  }

  export type Mutations = {
    setEventContainerParts: EventContainerPart[]
  }

  export type Actions = {
    fetchEventContainerParts: void
  }
}

export const state = (): EventContainerParts.State => ({
  eventContainerParts: []
})

export const getters: Getters<
  EventContainerParts.State,
  EventContainerParts.Getters
> = {
  find: state => id => {
    return state.eventContainerParts.find(
      eventContainerPart => eventContainerPart.sys.id === id
    )
  }
}

export const mutations: Mutations<
  EventContainerParts.State,
  EventContainerParts.Mutations
> = {
  setEventContainerParts(state, payload) {
    state.eventContainerParts = payload
  }
}

export const actions: Actions<
  EventContainerParts.State,
  EventContainerParts.Actions,
  EventContainerParts.Getters,
  EventContainerParts.Mutations
> = {
  async fetchEventContainerParts({ commit }) {
    const eventContainerParts: EventContainerPart[] = await getEventContainerParts()
    commit('setEventContainerParts', eventContainerParts)
  }
}

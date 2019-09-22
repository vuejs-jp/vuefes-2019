import { Getters, Mutations, Actions } from '~/types/store'
import EventContainer from '~/types/eventContainer'
import { getEventContainers } from '~/plugins/contentful'

namespace EventContainers {
  export type State = {
    eventContainers: EventContainer[]
  }

  export type Getters = {
    find: (id: string) => EventContainer | undefined
  }

  export type Mutations = {
    setEventContainers: EventContainer[]
  }

  export type Actions = {
    fetchEventContainers: void
  }
}

export const state = (): EventContainers.State => ({
  eventContainers: []
})

export const getters: Getters<
  EventContainers.State,
  EventContainers.Getters
> = {
  find: state => id => {
    return state.eventContainers.find(
      eventContainer => eventContainer.sys.id === id
    )
  }
}

export const mutations: Mutations<
  EventContainers.State,
  EventContainers.Mutations
> = {
  setEventContainers(state, payload) {
    state.eventContainers = payload
  }
}

export const actions: Actions<
  EventContainers.State,
  EventContainers.Actions,
  EventContainers.Getters,
  EventContainers.Mutations
> = {
  async fetchEventContainers({ commit }) {
    const eventContainers: EventContainer[] = await getEventContainers()
    commit('setEventContainers', eventContainers)
  }
}

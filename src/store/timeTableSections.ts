import { Getters, Mutations, Actions } from '~/types/store'
import { TimeTableSection } from '~/types/timeTableSection'
import { getTimeTableSections } from '~/plugins/contentful'

namespace TimeTableSections {
  export type State = {
    timeTableSections: TimeTableSection[]
  }

  export type Getters = {
    all: TimeTableSection[]
  }

  export type Mutations = {
    setTimeTableSections: TimeTableSection[]
  }

  export type Actions = {
    fetchTimeTableSections: void
  }
}

export const state = (): TimeTableSections.State => ({
  timeTableSections: []
})

export const getters: Getters<
  TimeTableSections.State,
  TimeTableSections.Getters
> = {
  all: state => {
    return state.timeTableSections
  }
}

export const mutations: Mutations<
  TimeTableSections.State,
  TimeTableSections.Mutations
> = {
  setTimeTableSections(state, payload) {
    state.timeTableSections = payload
  }
}

export const actions: Actions<
  TimeTableSections.State,
  TimeTableSections.Actions,
  TimeTableSections.Getters,
  TimeTableSections.Mutations
> = {
  async fetchTimeTableSections({ commit }) {
    const timeTableSections: TimeTableSection[] = await getTimeTableSections()
    commit('setTimeTableSections', timeTableSections)
  }
}

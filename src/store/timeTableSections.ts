import { Getters, Mutations } from '~/types/store'
import { TimeTableSection } from '~/types/timeTableSection'

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

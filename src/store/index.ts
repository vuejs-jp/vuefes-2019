export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('timeTableSections/fetchTimeTableSections')
  }
}

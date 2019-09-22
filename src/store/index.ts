export const actions = {
  async nuxtServerInit({ dispatch }) {
    await Promise.all([
      dispatch('speakers/fetchSpeakers'),
      dispatch('timeTableSections/fetchTimeTableSections'),
      dispatch('eventContainers/fetchEventContainers'),
      dispatch('eventContainerParts/fetchEventContainerParts')
    ]).catch(error => console.error(error))
  }
}

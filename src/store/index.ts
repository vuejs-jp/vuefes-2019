export const actions = {
  async nuxtServerInit({ dispatch }) {
    await Promise.all([
      dispatch('speakers/fetchSpeakers'),
      dispatch('timeTableSections/fetchTimeTableSections'),
      dispatch('eventContainers/fetchEventContainers'),
      dispatch('eventContainerParts/fetchEventContainerParts'),
      dispatch('sponsors/fetchSponsors')
    ]).catch(error => console.error(error))
  }
}

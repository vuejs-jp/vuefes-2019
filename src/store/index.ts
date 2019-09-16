export const actions = {
  async nuxtServerInit({ dispatch }) {
    // TODO: Contentful へ並列でリクエストを送るようにする
    await dispatch('timeTableSections/fetchTimeTableSections')
    await dispatch('eventContainers/fetchEventContainers')
    await dispatch('eventContainerParts/fetchEventContainerParts')
  }
}

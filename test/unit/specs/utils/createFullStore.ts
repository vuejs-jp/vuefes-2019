import * as localSessions from '~/store/localSessions'
import * as localSpeakers from '~/store/localSpeakers'

export default Vuex => {
  return new Vuex.Store({
    modules: {
      localSessions: {
        namespaced: true,
        ...localSessions
      },
      localSpeakers: {
        namespaced: true,
        ...localSpeakers
      }
    }
  })
}

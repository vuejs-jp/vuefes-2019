import * as sessions from '~/store/sessions'
import * as speakers from '~/store/speakers'

export default Vuex => {
  return new Vuex.Store({
    modules: {
      sessions: {
        namespaced: true,
        ...sessions
      },
      speakers: {
        namespaced: true,
        ...speakers
      }
    }
  })
}

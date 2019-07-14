import * as sessions from '~/store/sessions'
import * as speakers from '~/store/speakers'

export default Vuex => {
  return new Vuex.Store({
    modules: {
      sessions: {
        namespaced: true,
        state: sessions.state,
        getters: sessions.getters
      },
      speakers: {
        namespaced: true,
        state: speakers.state,
        getters: speakers.getters
      }
    }
  })
}

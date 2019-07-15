import 'vuex'

declare module 'vuex' {
  type Getters<S, G, RS = {}, RG = {}> = {
    [K in keyof G]: (
      state: S,
      getters?: G,
      rootState?: RS,
      rootGetters?: RG
    ) => G[K]
  }
}

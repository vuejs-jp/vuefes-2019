export type Getters<S, G, RS = {}, RG = {}> = {
  [K in keyof G]: (
    state: S,
    getters?: G,
    rootState?: RS,
    rootGetters?: RG
  ) => G[K]
}

export type Mutations<S, M> = {
  [K in keyof M]: (state: S, payload: M[K]) => void
}

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

type Commit<M> = <T extends keyof M>(type: T, payload?: M[T]) => void
type Dispatch<A> = <T extends keyof A>(type: T, payload?: A[T]) => any

type Context<S, A, G, M, RS, RG> = {
  commit: Commit<M>
  dispatch: Dispatch<A>
  state: S
  getters: G
  rootState: RS
  rootGetters: RG
}

export type Actions<S, A, G = {}, M = {}, RS = {}, RG = {}> = {
  [K in keyof A]: (context: Context<S, A, G, M, RS, RG>, payload: A[K]) => any
}

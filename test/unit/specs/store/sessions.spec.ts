import sessions from '../../../fixtures/contentful/sessions'
import * as contentful from '~/plugins/contentful'
import {
  state as initialState,
  getters,
  mutations,
  actions
} from '~/store/sessions'

describe('sessions module', () => {
  let state

  beforeEach(() => {
    state = initialState()
  })

  describe('getters', () => {
    describe('all', () => {
      beforeEach(() => {
        state.sessions = sessions
      })

      test('すべての sessions を取得できる', () => {
        expect(getters.all(state)).toEqual(sessions)
      })
    })
  })

  describe('mutations', () => {
    describe('setSessions', () => {
      test('sessions をセットできる', () => {
        mutations.setSessions(state, sessions)
        expect(state.sessions).toEqual(sessions)
      })
    })
  })

  describe('actions', () => {
    describe('fetchSessions', () => {
      beforeEach(() => {
        // @ts-ignore error TS2540: Cannot assign to 'getSessions' because it is a read-only property.
        contentful.getSessions = jest.fn().mockResolvedValue(sessions)
      })

      test('sessions を取得してセットする', async () => {
        const commit = jest.fn()

        // @ts-ignore error TS2345: Argument of type '{ commit: Mock<any, any>; }' is not assignable to parameter of type 'Context<State, Actions, Getters, Mutations, {}, {}>'.
        // Type '{ commit: Mock<any, any>; }' is missing the following properties from type 'Context<State, Actions, Getters, Mutations, {}, {}>': dispatch, state, getters, rootState, rootGetters
        await actions.fetchSessions({ commit })

        expect(commit).toHaveBeenCalledWith('setSessions', sessions)
      })
    })
  })
})

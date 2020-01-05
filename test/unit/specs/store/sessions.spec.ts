import cloneDeep from 'lodash.clonedeep'
import sessions from 'test/fixtures/contentful/sessions'
import asset from 'test/fixtures/contentful/asset'
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
    state.sessions = sessions
  })

  describe('getters', () => {
    describe('all', () => {
      test('すべての sessions を取得できる', () => {
        expect(getters.all(state)).toEqual(sessions)
      })
    })

    describe('find', () => {
      const id: string = sessions[0].sys.id

      test('id が一致する Session を取得できる', () => {
        expect(getters.find(state)(id)).toEqual(sessions[0])
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

    describe('updateSession', () => {
      const newSession = cloneDeep(sessions[0])
      newSession.fields.title = 'New Session'

      test('session を更新（置換）できる', () => {
        mutations.updateSession(state, newSession)
        expect(state.sessions).toContain(newSession)
      })
    })
  })

  describe('actions', () => {
    const mockedGetters = { all: sessions }
    const dispatch = jest.fn()

    describe('initialize', () => {
      test('スピーカー情報及びアセットを取得する', async () => {
        // @ts-ignore error TS2739: Type 'Mock<any, any>' is missing the following properties from type 'Getters': all, find
        await actions.initialize({ getters: mockedGetters, dispatch })

        expect(dispatch).toHaveBeenNthCalledWith(1, 'fetchSessions')
        expect(dispatch).toHaveBeenNthCalledWith(2, 'fetchAsset', sessions[0])
      })
    })

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

    describe('fetchAsset', () => {
      const commit = jest.fn()
      const newSession = cloneDeep(sessions[0])
      newSession.fields.ogImage = asset

      beforeEach(() => {
        // @ts-ignore error TS2540: Cannot assign to 'getAsset' because it is a read-only property.
        contentful.getAsset = jest.fn().mockResolvedValue(asset)
      })

      test('アセットを取得して Session を更新する', async () => {
        // @ts-ignore error TS2345: Argument of type '{ commit: Mock<any, any>; }' is not assignable to parameter of type 'Context<State, Actions, Getters, Mutations, {}, {}>'.
        // Type '{ commit: Mock<any, any>; }' is missing the following properties from type 'Context<State, Actions, Getters, Mutations, {}, {}>': dispatch, state, getters, rootState, rootGetters
        await actions.fetchAsset({ commit }, sessions[0])

        expect(commit).toHaveBeenCalledWith('updateSession', newSession)
      })
    })
  })
})

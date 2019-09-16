import eventContainers from '../../__mocks__/eventContainers'
import * as contentful from '~/plugins/contentful'
import {
  state as initialState,
  getters,
  mutations,
  actions
} from '~/store/eventContainers'

describe('eventContainers module', () => {
  let state

  beforeEach(() => {
    state = initialState()
  })

  describe('getters', () => {
    describe('find', () => {
      beforeEach(() => {
        state.eventContainers = eventContainers
      })

      test('id が一致する EventContainer を取得できる', () => {
        const id: string = eventContainers[0].sys.id
        expect(getters.find(state)(id)).toEqual(eventContainers[0])
      })
    })
  })

  describe('mutations', () => {
    describe('setEventContainers', () => {
      test('eventContainers をセットできる', () => {
        mutations.setEventContainers(state, eventContainers)
        expect(state.eventContainers).toEqual(eventContainers)
      })
    })
  })

  describe('actions', () => {
    describe('fetchEventContainers', () => {
      beforeEach(() => {
        // @ts-ignore error TS2540: Cannot assign to 'getEventContainers' because it is a read-only property.
        contentful.getEventContainers = jest
          .fn()
          .mockResolvedValue(eventContainers)
      })

      test('eventContainers を取得してセットする', async () => {
        const commit = jest.fn()

        // @ts-ignore error TS2345: Argument of type '{ commit: Mock<any, any>; }' is not assignable to parameter of type 'Context<State, Actions, Getters, Mutations, {}, {}>'.
        // Type '{ commit: Mock<any, any>; }' is missing the following properties from type 'Context<State, Actions, Getters, Mutations, {}, {}>': dispatch, state, getters, rootState, rootGetters
        await actions.fetchEventContainers({ commit })

        expect(commit).toHaveBeenCalledWith(
          'setEventContainers',
          eventContainers
        )
      })
    })
  })
})

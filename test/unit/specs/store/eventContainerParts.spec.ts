import eventContainerParts from '../../../fixtures/contentful/eventContainerParts'
import * as contentful from '~/plugins/contentful'
import {
  state as initialState,
  getters,
  mutations,
  actions
} from '~/store/eventContainerParts'

describe('eventContainerParts module', () => {
  let state

  beforeEach(() => {
    state = initialState()
  })

  describe('getters', () => {
    describe('find', () => {
      beforeEach(() => {
        state.eventContainerParts = eventContainerParts
      })

      test('id が一致する EventContainerPart を取得できる', () => {
        const id: string = eventContainerParts[0].sys.id
        expect(getters.find(state)(id)).toEqual(eventContainerParts[0])
      })
    })
  })

  describe('mutations', () => {
    describe('setEventContainerParts', () => {
      test('eventContainerParts をセットできる', () => {
        mutations.setEventContainerParts(state, eventContainerParts)
        expect(state.eventContainerParts).toEqual(eventContainerParts)
      })
    })
  })

  describe('actions', () => {
    describe('fetchEventContainerParts', () => {
      beforeEach(() => {
        // @ts-ignore error TS2540: Cannot assign to 'getEventContainerParts' because it is a read-only property.
        contentful.getEventContainerParts = jest
          .fn()
          .mockResolvedValue(eventContainerParts)
      })

      test('eventContainerParts を取得してセットする', async () => {
        const commit = jest.fn()

        // @ts-ignore error TS2345: Argument of type '{ commit: Mock<any, any>; }' is not assignable to parameter of type 'Context<State, Actions, Getters, Mutations, {}, {}>'.
        // Type '{ commit: Mock<any, any>; }' is missing the following properties from type 'Context<State, Actions, Getters, Mutations, {}, {}>': dispatch, state, getters, rootState, rootGetters
        await actions.fetchEventContainerParts({ commit })

        expect(commit).toHaveBeenCalledWith(
          'setEventContainerParts',
          eventContainerParts
        )
      })
    })
  })
})

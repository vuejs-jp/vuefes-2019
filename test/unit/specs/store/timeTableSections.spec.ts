import timeTableSections from '../../__mocks__/timeTableSections'
import * as contentful from '~/plugins/contentful'
import {
  state as initialState,
  getters,
  mutations,
  actions
} from '~/store/timeTableSections'

describe('timeTableSections module', () => {
  let state

  beforeEach(() => {
    state = initialState()
  })

  describe('getters', () => {
    describe('all', () => {
      beforeEach(() => {
        state.timeTableSections = timeTableSections
      })

      test('すべての timeTableSections を取得できる', () => {
        expect(getters.all(state)).toEqual(timeTableSections)
      })
    })
  })

  describe('mutations', () => {
    describe('setTimeTableSections', () => {
      test('timeTableSections をセットできる', () => {
        mutations.setTimeTableSections(state, timeTableSections)
        expect(state.timeTableSections).toEqual(timeTableSections)
      })
    })
  })

  describe('actions', () => {
    describe('fetchTimeTableSections', () => {
      beforeEach(() => {
        // @ts-ignore error TS2540: Cannot assign to 'getTimeTableSections' because it is a read-only property.
        contentful.getTimeTableSections = jest
          .fn()
          .mockResolvedValue(timeTableSections)
      })

      test('TimeTableSections を取得してセットする', async () => {
        const commit = jest.fn()

        // @ts-ignore error TS2345: Argument of type '{ commit: Mock<any, any>; }' is not assignable to parameter of type 'Context<State, Actions, Getters, Mutations, {}, {}>'.
        // Type '{ commit: Mock<any, any>; }' is missing the following properties from type 'Context<State, Actions, Getters, Mutations, {}, {}>': dispatch, state, getters, rootState, rootGetters
        await actions.fetchTimeTableSections({ commit })

        expect(commit).toHaveBeenCalledWith(
          'setTimeTableSections',
          timeTableSections
        )
      })
    })
  })
})

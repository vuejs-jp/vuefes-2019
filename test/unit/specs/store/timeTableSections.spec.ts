import timeTableSections from '../../__mocks__/timeTableSections'
import {
  state as initialState,
  getters,
  mutations
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
      test('TimeTableSections をセットできる', () => {
        mutations.setTimeTableSections(state, timeTableSections)
        expect(state.timeTableSections).toEqual(timeTableSections)
      })
    })
  })
})

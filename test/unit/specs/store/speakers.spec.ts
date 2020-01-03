import cloneDeep from 'lodash.clonedeep'
import speakers from '../../../fixtures/contentful/speakers'
import * as contentful from '~/plugins/contentful'
import {
  state as initialState,
  getters,
  mutations,
  actions
} from '~/store/speakers'

describe('speakers module', () => {
  let state

  beforeEach(() => {
    state = initialState()
    state.speakers = speakers
  })

  describe('getters', () => {
    describe('all', () => {
      test('すべての speakers を取得できる', () => {
        expect(getters.all(state)).toEqual(speakers)
      })
    })

    describe('find', () => {
      test('id が一致する Speaker を取得できる', () => {
        const id: string = speakers[0].sys.id
        expect(getters.find(state)(id)).toEqual(speakers[0])
      })
    })
  })

  describe('mutations', () => {
    describe('setSpeakers', () => {
      test('speakers をセットできる', () => {
        mutations.setSpeakers(state, speakers)
        expect(state.speakers).toEqual(speakers)
      })
    })

    describe('updateSpeaker', () => {
      let newSpeaker

      beforeEach(() => {
        newSpeaker = cloneDeep(speakers[0])
        newSpeaker.fields.name = 'New Speaker'
      })

      test('speaker を更新（置換）できる', () => {
        mutations.updateSpeaker(state, newSpeaker)
        expect(state.speakers).toContain(newSpeaker)
      })
    })
  })

  describe('actions', () => {
    describe('fetchSpeakers', () => {
      beforeEach(() => {
        // @ts-ignore error TS2540: Cannot assign to 'getSpeakers' because it is a read-only property.
        contentful.getSpeakers = jest.fn().mockResolvedValue(speakers)
      })

      test('speakers を取得してセットする', async () => {
        const commit = jest.fn()

        // @ts-ignore error TS2345: Argument of type '{ commit: Mock<any, any>; }' is not assignable to parameter of type 'Context<State, Actions, Getters, Mutations, {}, {}>'.
        // Type '{ commit: Mock<any, any>; }' is missing the following properties from type 'Context<State, Actions, Getters, Mutations, {}, {}>': dispatch, state, getters, rootState, rootGetters
        await actions.fetchSpeakers({ commit })

        expect(commit).toHaveBeenCalledWith('setSpeakers', speakers)
      })
    })
  })
})

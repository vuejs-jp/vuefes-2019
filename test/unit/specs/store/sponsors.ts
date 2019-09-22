import sponsorList from '../../../fixtures/contentful/sponsors'
import * as contentful from '~/plugins/contentful'
import {
  state as initialState,
  getters,
  mutations,
  actions
} from '~/store/sponsors'

describe('sponsors module', () => {
  let state

  beforeEach(() => {
    state = initialState()
  })

  describe('getters', () => {
    describe('sponsorsByPlan', () => {
      beforeEach(() => {
        state.sponsors = sponsorList
      })

      test('plan と一致するスポンサー情報のみ取得できる', () => {
        expect(
          // 'platinum' と一致するスポンサーが取得できる
          getters.sponsorsByPlan(state.sponsors)(state.sponsorPlans[0].plan)
        ).toEqual(sponsorList[2])
      })
    })
  })

  describe('mutations', () => {
    describe('setSponsors', () => {
      test('SponsorList をセットできる', () => {
        mutations.setSponsors(state, sponsorList)
        expect(state.sponsors).toEqual(sponsorList)
      })
    })
  })

  describe('actions', () => {
    describe('fetchSponsors', () => {
      beforeEach(() => {
        // @ts-ignore error TS2540: Cannot assign to 'getSponsors' because it is a read-only property.
        contentful.getSponsors = jest.fn().mockResolvedValue(sponsorList)
      })

      test('sponsorList を取得してセットする', async () => {
        const commit = jest.fn()

        // Context の型を備えたモックを準備するのが大変でコストに見合わないため @ts-ignore
        // @ts-ignore error TS2345: Argument of type '{ commit: Mock<any, any>; }' is not assignable to parameter of type 'Context<State, Actions, Getters, Mutations, {}, {}>'.
        // Type '{ commit: Mock<any, any>; }' is missing the following properties from type 'Context<State, Actions, Getters, Mutations, {}, {}>': dispatch, state, getters, rootState, rootGettersts
        await actions.fetchSponsors({ commit })

        expect(commit).toHaveBeenCalledWith('setSponsors', sponsorList)
      })
    })
  })
})

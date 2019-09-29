import sponsors from '../../../fixtures/contentful/sponsors'
import * as contentful from '~/plugins/contentful'
import Sponsor from '~/types/sponsor'
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
        state.sponsors = sponsors
      })

      test('plan と一致するスポンサー情報のみ取得できる', () => {
        const platinumSponsors: Sponsor[] = [sponsors[2]]
        expect(getters.sponsorsByPlan(state)('platinum')).toEqual(
          platinumSponsors
        )
      })
    })

    describe('sponsorPlansHavingSponsors', () => {
      beforeEach(() => {
        state.sponsors = sponsors
      })

      test('スポンサーを持っている sponsorPlan の一覧を取得できる', () => {
        expect(
          // Getters の型を備えたスタブを準備するのが大変でコストに見合わないため @ts-ignore
          // @ts-ignore error TS2339: Argument of type '{ sponsorsByPlan: (plan: string) => any; }' is not assignable to parameter of type 'Getters'.
          // Property 'sponsorPlansHavingSponsors' is missing in type '{ sponsorsByPlan: (plan: string) => any; }' but required in type 'Getters'.
          getters.sponsorPlansHavingSponsors(state, {
            sponsorsByPlan: getters.sponsorsByPlan(state)
          })
        ).toEqual([
          { name: 'PLATINUM', plan: 'platinum' },
          { name: 'SILVER', plan: 'silver' }
        ])
      })
    })
  })

  describe('mutations', () => {
    describe('setSponsors', () => {
      test('SponsorList をセットできる', () => {
        mutations.setSponsors(state, sponsors)
        expect(state.sponsors).toEqual(sponsors)
      })
    })
  })

  describe('actions', () => {
    describe('fetchSponsors', () => {
      beforeEach(() => {
        // @ts-ignore error TS2540: Cannot assign to 'getSponsors' because it is a read-only property.
        contentful.getSponsors = jest.fn().mockResolvedValue(sponsors)
      })

      test('sponsorList を取得してセットする', async () => {
        const commit = jest.fn()

        // Context の型を備えたモックを準備するのが大変でコストに見合わないため @ts-ignore
        // @ts-ignore error TS2345: Argument of type '{ commit: Mock<any, any>; }' is not assignable to parameter of type 'Context<State, Actions, Getters, Mutations, {}, {}>'.
        // Type '{ commit: Mock<any, any>; }' is missing the following properties from type 'Context<State, Actions, Getters, Mutations, {}, {}>': dispatch, state, getters, rootState, rootGettersts
        await actions.fetchSponsors({ commit })

        expect(commit).toHaveBeenCalledWith('setSponsors', sponsors)
      })
    })
  })
})

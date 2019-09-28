import sponsorList from '../../../fixtures/contentful/sponsors'
import * as contentful from '~/plugins/contentful'
import { SponsorPlans } from '~/types/sponsors'
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
        const platinumSponsor: SponsorPlans = sponsorList[2]
        expect(getters.sponsorsByPlan(state)('platinum')[0]).toEqual(
          platinumSponsor
        )
      })
    })

    describe('sponsorPlansToHaveSponsor', () => {
      beforeEach(() => {
        state.sponsors = sponsorList
      })

      test('スポンサーを持っている sponsorPlan の一覧を取得できる', () => {
        const sponsorsByPlanStub = {
          sponsorsByPlan: (plan: string) => {
            return state.sponsors.filter(
              sponsor => sponsor.fields.plan === plan
            )
          }
        }
        expect(
          // Getters の型を備えたスタブを準備するのが大変でコストに見合わないため @ts-ignore
          // @ts-ignore error TS2339: Argument of type '{ sponsorsByPlan: (plan: string) => any; }' is not assignable to parameter of type 'Getters'.
          // Property 'sponsorPlansToHaveSponsor' is missing in type '{ sponsorsByPlan: (plan: string) => any; }' but required in type 'Getters'.
          getters.sponsorPlansToHaveSponsor(state, sponsorsByPlanStub)
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

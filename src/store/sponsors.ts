import { Getters, Mutations, Actions } from '~/types/store'
import { SponsorList, SponsorPlans } from '~/types/sponsors'
import { getSponsors } from '~/plugins/contentful'

namespace Sponsors {
  export type State = {
    sponsors: SponsorList[]
    sponsorPlans: SponsorPlans[]
  }

  export type Getters = {
    sponsorsByPlan: (plan: string) => SponsorList[]
    sponsorPlansToHaveSponsor: SponsorPlans[]
  }

  export type Mutations = {
    setSponsors: SponsorList[]
  }

  export type Actions = {
    fetchSponsors: void
  }
}

export const state = (): Sponsors.State => ({
  sponsors: [],
  sponsorPlans: [
    { plan: 'platinum', name: 'PLATINUM' },
    { plan: 'gold', name: 'GOLD' },
    { plan: 'silver', name: 'SILVER' },
    { plan: 'bronze', name: 'BRONZE' },
    { plan: 'special', name: 'SPECIAL' },
    { plan: 'room', name: 'ROOM' },
    { plan: 'translation', name: '同時通訳' },
    { plan: 'commercial', name: '幕間 CM' },
    { plan: 'toast', name: 'カンパイ' },
    { plan: 'lunch', name: 'LUNCH' },
    { plan: 'refreshment', name: 'REFRESHMENT' },
    { plan: 'video', name: 'VIDEO' },
    { plan: 'media', name: 'MEDIA' }
  ]
})

export const getters: Getters<Sponsors.State, Sponsors.Getters> = {
  sponsorsByPlan: state => plan => {
    return state.sponsors.filter(sponsor => sponsor.fields.plan === plan)
  },
  sponsorPlansToHaveSponsor: (state, getters) => {
    return state.sponsorPlans.filter(
      // @ts-ignore TS2532: Object is possibly 'undefined'
      // FIXME: getters?: Stores.Getters と定義していて、getters は引数として使わない場合があるので、これで正しいのでは？
      sponsorPlan => getters.sponsorsByPlan(sponsorPlan.plan).length > 0
    )
  }
}

export const mutations: Mutations<Sponsors.State, Sponsors.Mutations> = {
  setSponsors(state, payload) {
    state.sponsors = payload
  }
}

export const actions: Actions<
  Sponsors.State,
  Sponsors.Actions,
  Sponsors.Getters,
  Sponsors.Mutations
> = {
  async fetchSponsors({ commit }) {
    const sponsors: SponsorList[] = await getSponsors()
    commit('setSponsors', sponsors)
  }
}

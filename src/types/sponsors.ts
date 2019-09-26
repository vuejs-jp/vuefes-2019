import { EntrySys, Asset } from '~/types/contentful'

export interface SponsorList {
  sys: EntrySys
  fields: {
    plan: string
    name: string
    url: string
    banner: Asset
    pr: string
    appliedAt: string
  }
}

export interface SponsorPlans {
  plan: string
  name: string
}

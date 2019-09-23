import { EntrySys, Asset } from '~/types/contentful'

export default interface SponsorList {
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

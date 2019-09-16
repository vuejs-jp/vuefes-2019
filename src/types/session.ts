import { EntrySys, Asset, EntryLink, AssetLink } from '~/types/contentful'

export default interface Session {
  sys: EntrySys
  fields: {
    title: string
    time: number
    description: string
    ogImage: Asset | AssetLink
    speakers: EntryLink[]
  }
}

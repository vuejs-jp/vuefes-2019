import { EntrySys, EntryLink, AssetLink } from '~/types/contentful'

export default interface Speaker {
  sys: EntrySys
  fields: {
    name: string
    title: string
    avatar: AssetLink
    avatar2x: AssetLink
    twitter: string | null
    github: string
    description: string
    sessions: EntryLink[]
  }
}

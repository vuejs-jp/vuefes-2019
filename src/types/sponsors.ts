import { EntrySys, EntryLink } from '~/types/contentful'

export default interface SponsorList {
  sys: EntrySys
  fields: {
    plan: string
    name: string
    url: string
    banner: {
      sys: {
        space: {
          sys: EntryLink
        }
        id: string
        type: string
        createdAt: string
        updatedAt: string
        environment: {
          sys: EntryLink
        }
        revision: number
        locale: string
      }
      fields: {
        title: string
        file: {
          url: string
          details: {
            size: number
            image: {
              width: number
              height: number
            }
          }
          fileName: string
          contentType: string
        }
      }
    }
    pr: string
    appliedAt: string
  }
}

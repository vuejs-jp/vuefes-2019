import { EntrySys, EntryLink } from '~/types/contentful'

export type TimeTableSection = {
  sys: EntrySys
  fields: {
    titleForContentful: string
    startAt: string
    endAt: string
    eventContainers: EntryLink[]
  }
}

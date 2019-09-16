import { EntrySys, EntryLink } from '~/types/contentful'

export default interface TimeTableSection {
  sys: EntrySys
  fields: {
    titleForContentful: string
    startAt: string
    endAt: string
    eventContainers: EntryLink[]
  }
}

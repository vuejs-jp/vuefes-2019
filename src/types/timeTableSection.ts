import { EntrySys, EntryLink } from '~/types/contentful'

export default interface TimeTableSection {
  sys: EntrySys
  fields: {
    titleForContentful: string // Contentful での操作時にどうしても識別するタイトルが必要であるため
    startAt: string // タイムゾーン情報を持つ。例: '2019-10-12T09:30:00+09:00'
    endAt: string // タイムゾーン情報を持つ。例: '2019-10-12T09:30:00+09:00'
    eventContainers: EntryLink[]
  }
}

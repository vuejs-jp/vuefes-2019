import { EntrySys } from '~/types/contentful'

export type Event = {
  sys: EntrySys
  fields: {
    title: string
  }
}

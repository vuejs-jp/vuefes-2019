import { EntrySys } from '~/types/contentful'

export default interface Event {
  sys: EntrySys
  fields: {
    title: string
  }
}

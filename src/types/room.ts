import { EntrySys } from '~/types/contentful'

export default interface Room {
  sys: EntrySys
  fields: {
    name: string
  }
}

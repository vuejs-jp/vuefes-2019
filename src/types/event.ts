import { Sys } from '~/types/contentful'

export type Event = {
  sys: Sys
  fields: {
    title: string
  }
}

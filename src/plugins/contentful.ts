import { ContentfulClientApi, Entry } from 'contentful/index'

const contentful = require('contentful')
const client: ContentfulClientApi = contentful.createClient({
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN
})

export const getSponsors = (): Promise<Entry<any>[]> => {
  return client
    .getEntries({
      content_type: 'sponsor'
      // FIXME: order: '-publishedAt'
    })
    .then(response => response.items)
}

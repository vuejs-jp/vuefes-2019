export type Sys = {
  space: Object
  id: string
  type: 'Entry'
  createdAt: string
  updatedAt: string
  environment: Object
  revision: number
  contentType: {
    sys: {
      type: 'Link'
      linkType: 'ContentType'
      id: string
    }
  }
  locale: 'en-US'
}

export type EntryLink = {
  sys: {
    type: 'Link'
    linkType: 'Entry'
    id: string
  }
}

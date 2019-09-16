export type EntrySys = {
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

export type AssetSys = {
  space: Object
  id: string
  type: 'Asset'
  createdAt: string
  updatedAt: string
  environment: Object
  revision: number
  locale: 'en-US'
}

export type Asset = {
  sys: AssetSys
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

export type AssetLink = {
  sys: {
    type: 'Link'
    linkType: 'Asset'
    id: string
  }
}

import { Asset } from '~/types/contentful'

const asset: Asset = {
  sys: {
    space: {
      sys: {
        type: 'Link',
        linkType: 'Space',
        id: 'makqrw5hfm9d'
      }
    },
    id: '1Bqb7VVTxdnL3zZIh8FNJD',
    type: 'Asset',
    createdAt: '2019-08-27T09:08:50.871Z',
    updatedAt: '2019-08-27T09:08:50.871Z',
    environment: {
      sys: {
        id: 'master',
        type: 'Link',
        linkType: 'Environment'
      }
    },
    revision: 1,
    locale: 'en-US'
  },
  fields: {
    title: 'jlooper',
    file: {
      url:
        '//images.ctfassets.net/makqrw5hfm9d/1Bqb7VVTxdnL3zZIh8FNJD/ba31d2b26ab370284345ebaf82196f7e/jlooper.jpg',
      details: {
        size: 21973,
        image: {
          width: 500,
          height: 500
        }
      },
      fileName: 'jlooper.jpg',
      contentType: 'image/jpeg'
    }
  }
}

export default asset

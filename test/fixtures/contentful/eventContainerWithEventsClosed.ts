import EventContainer from '~/types/eventContainer'

const eventContainerWithEventsClosed: EventContainer = {
  sys: {
    space: {
      sys: {
        type: 'Link',
        linkType: 'Space',
        id: 'makqrw5hfm9d'
      }
    },
    id: '6xarOqNqmbfdY7zNlXnkkv',
    type: 'Entry',
    createdAt: '2019-09-19T09:49:32.875Z',
    updatedAt: '2019-09-19T09:49:32.875Z',
    environment: {
      sys: {
        id: 'master',
        type: 'Link',
        linkType: 'Environment'
      }
    },
    revision: 1,
    contentType: {
      sys: {
        type: 'Link',
        linkType: 'ContentType',
        id: 'eventContainer'
      }
    },
    locale: 'en-US'
  },
  fields: {
    titleForContentful: '11-ye',
    contents: [
      {
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: 'makqrw5hfm9d'
            }
          },
          id: '5NPCujTlHiEd7KcRmGp3hS',
          type: 'Entry',
          createdAt: '2019-09-19T09:48:38.666Z',
          updatedAt: '2019-09-19T09:48:38.666Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment'
            }
          },
          revision: 1,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'event'
            }
          },
          locale: 'en-US'
        },
        fields: { title: 'クローズ' }
      }
    ],
    room: {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'makqrw5hfm9d'
          }
        },
        id: '1rnDVEsknx6MhhPgMAS9Gj',
        type: 'Entry',
        createdAt: '2019-08-25T10:51:56.475Z',
        updatedAt: '2019-08-25T10:51:56.475Z',
        environment: {
          sys: {
            id: 'master',
            type: 'Link',
            linkType: 'Environment'
          }
        },
        revision: 1,
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'room'
          }
        },
        locale: 'en-US'
      },
      fields: { name: 'イエソドルーム' }
    }
  }
}

export default eventContainerWithEventsClosed

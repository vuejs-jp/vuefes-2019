import EventContainer from '~/types/eventContainer'

const eventContainerWithSessionHavingTranslation: EventContainer = {
  sys: {
    space: {
      sys: {
        type: 'Link',
        linkType: 'Space',
        id: 'makqrw5hfm9d'
      }
    },
    id: '5XJnxcznPvA7zvK581CIAr',
    type: 'Entry',
    createdAt: '2019-08-27T09:32:28.070Z',
    updatedAt: '2019-08-27T09:32:28.070Z',
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
    titleForContentful: '8−pl',
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
          id: '7lCuNn3wby0o7hooQ7gbQf',
          type: 'Entry',
          createdAt: '2019-08-27T09:05:49.382Z',
          updatedAt: '2019-09-18T13:31:08.135Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment'
            }
          },
          revision: 2,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'session'
            }
          },
          locale: 'en-US'
        },
        fields: {
          title: 'Enterprise Vue: Patterns That Scale',
          time: 40,
          description:
            "Thinking about or currently using Vue in a very large application, potentially also with a large, diverse team? Or are you integrating Vue into a legacy app or complex architecture? Eager to learn how to avoid common mistakes, as well as battle-tested patterns to help you build an application you won't dread maintaining? As an enterprise consultant, member of the Vue team, and trained educator, Chris will share the most important lessons he's learned in his work.",
          ogImage: {
            sys: {
              space: {
                sys: {
                  type: 'Link',
                  linkType: 'Space',
                  id: 'makqrw5hfm9d'
                }
              },
              id: '5emFxpCHjWlov8fBlzWBmM',
              type: 'Asset',
              createdAt: '2019-08-27T09:05:26.649Z',
              updatedAt: '2019-08-27T09:05:26.649Z',
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
              title: 'chrisvfritz',
              file: {
                url:
                  '//images.ctfassets.net/makqrw5hfm9d/5emFxpCHjWlov8fBlzWBmM/7aadb8453f61f5639a47c4d67231855e/chrisvfritz.jpg',
                details: {
                  size: 37340,
                  image: {
                    width: 1200,
                    height: 630
                  }
                },
                fileName: 'chrisvfritz.jpg',
                contentType: 'image/jpeg'
              }
            }
          },
          speakers: [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '582L635Brdsa2epHP9HSMA'
              }
            }
          ],
          hasTranslation: true
        }
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
        id: '4MMzyRoKhtw4BlxWnCHbW9',
        type: 'Entry',
        createdAt: '2019-08-25T10:51:28.574Z',
        updatedAt: '2019-08-25T10:51:28.574Z',
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
      fields: { name: 'PLAID ルーム' }
    }
  }
}

export default eventContainerWithSessionHavingTranslation

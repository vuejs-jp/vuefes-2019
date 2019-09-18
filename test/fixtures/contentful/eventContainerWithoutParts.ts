import EventContainer from '~/types/eventContainer'

const eventContainerWithoutParts: EventContainer = {
  sys: {
    space: {
      sys: {
        type: 'Link',
        linkType: 'Space',
        id: 'makqrw5hfm9d'
      }
    },
    id: 'fYX56QW9IRf1BlkWR5CAY',
    type: 'Entry',
    createdAt: '2019-08-27T09:20:39.561Z',
    updatedAt: '2019-08-27T09:20:39.561Z',
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
    titleForContentful: '3',
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
          id: '7xvdef2fny01iVD0ra03Iz',
          type: 'Entry',
          createdAt: '2019-08-25T11:00:38.634Z',
          updatedAt: '2019-09-18T13:39:30.715Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment'
            }
          },
          revision: 4,
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
          title: 'Keynote',
          time: 50,
          description: 'Keynote',
          ogImage: {
            sys: {
              space: {
                sys: {
                  type: 'Link',
                  linkType: 'Space',
                  id: 'makqrw5hfm9d'
                }
              },
              id: '5MWxt8IHkH1VpMdh6HgFa6',
              type: 'Asset',
              createdAt: '2019-08-25T11:00:11.691Z',
              updatedAt: '2019-08-25T11:00:11.691Z',
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
              title: 'yyx990803',
              file: {
                url:
                  '//images.ctfassets.net/makqrw5hfm9d/5MWxt8IHkH1VpMdh6HgFa6/82601487a2fbf1de0d16a53e65cd6fe9/yyx990803.jpg',
                details: {
                  size: 41598,
                  image: {
                    width: 1200,
                    height: 630
                  }
                },
                fileName: 'yyx990803.jpg',
                contentType: 'image/jpeg'
              }
            }
          },
          speakers: [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '7aHzCP1a1rYpR6KbWENRmB'
              }
            }
          ],
          hasTranslation: true
        }
      }
    ]
  }
}

export default eventContainerWithoutParts

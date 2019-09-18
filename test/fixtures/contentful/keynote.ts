import Session from '~/types/session'

const keynote: Session = {
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
        type: 'Link',
        linkType: 'Asset',
        id: '5MWxt8IHkH1VpMdh6HgFa6'
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

export default keynote

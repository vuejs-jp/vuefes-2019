import EventContainer from '~/types/eventContainer'

const eventContainerWithSessionNotHavingTranslation: EventContainer = {
  sys: {
    space: {
      sys: {
        type: 'Link',
        linkType: 'Space',
        id: 'makqrw5hfm9d'
      }
    },
    id: '1qkp3KPJ6kMGuwyPRwY0z3',
    type: 'Entry',
    createdAt: '2019-08-27T09:28:58.464Z',
    updatedAt: '2019-08-27T09:28:58.464Z',
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
    titleForContentful: '7-yu',
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
          id: '4dgpT8P4uu8CkedDki92NS',
          type: 'Entry',
          createdAt: '2019-08-27T08:59:12.170Z',
          updatedAt: '2019-09-18T13:31:06.082Z',
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
          title: 'アンチパターンから学ぶ Atomic Design with Vue.js',
          time: 40,
          description:
            '誰かに教わったデザインフレームワークやプラクティスをそのまま現場に適応しようとして、うまくいかなかった経験はないでしょうか。これはフロントエンド開発に限らずアジャイル開発やインフラ設計など普遍的な問題です。\n\n本セッションでは、Vue.js と Atomic Design をフレーム通りにそのまま導入、実践をしてどう失敗したのかと、そこから得られた学びを発表します。さらに Atomic Design を発展させて、プロダクトやチーム、Vue.js に適応させた例を共有します。\n\nTL;DR\n\n- 思考を停止して Atomic Design を導入した結果の発表\n - ロジックの集中、コンポーネントの量産\n- 導入するときは現場との差分（Vue.js、チーム、プロダクトの性質 etc..）を考えて追加する\n- 視座をプロダクトのレベルまで高めて、設計判断をする\n- 改めて Vue.js と Atomic Design ベースでコンポーネント開発を実践した時に考えたこと\n - ドメインを持たせたコンポーネントの組み合わせ\n - ロジックをリポジトリパターンで組み直す',
          ogImage: {
            sys: {
              space: {
                sys: {
                  type: 'Link',
                  linkType: 'Space',
                  id: 'makqrw5hfm9d'
                }
              },
              id: '7wa7E8tM1TJCFNSXgf5ai',
              type: 'Asset',
              createdAt: '2019-08-27T08:58:51.867Z',
              updatedAt: '2019-08-27T08:58:51.867Z',
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
              title: 'keinuma',
              file: {
                url:
                  '//images.ctfassets.net/makqrw5hfm9d/7wa7E8tM1TJCFNSXgf5ai/a721c3f3f9f30f4b93f54c06f47c801f/keinuma.jpg',
                details: {
                  size: 40773,
                  image: {
                    width: 1200,
                    height: 630
                  }
                },
                fileName: 'keinuma.jpg',
                contentType: 'image/jpeg'
              }
            }
          },
          speakers: [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '1wgsyNSXRjVrKe2NgZzmw3'
              }
            }
          ],
          hasTranslation: false
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
        id: '6DXe9VnLT91YWE9UkVgkep',
        type: 'Entry',
        createdAt: '2019-08-25T10:51:45.572Z',
        updatedAt: '2019-08-25T10:51:45.572Z',
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
      fields: { name: 'YUMEMI ルーム' }
    }
  }
}

export default eventContainerWithSessionNotHavingTranslation

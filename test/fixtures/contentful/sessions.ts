import Session from '~/types/session'

const sessions: Session[] = [
  {
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'makqrw5hfm9d'
        }
      },
      id: '52xcLDNWOkF7s46q93hGQs',
      type: 'Entry',
      createdAt: '2019-08-25T11:07:40.630Z',
      updatedAt: '2019-08-25T11:07:40.630Z',
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
          id: 'session'
        }
      },
      locale: 'en-US'
    },
    fields: {
      title: 'Introduction to Nuxt 3',
      time: 40,
      description:
        'This talk will introduce Nuxt 3, what are the changes and what benefits it brings for Web development and Developer Experience.',
      ogImage: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '3cfR54yQy2r4F4l9aFn8S8'
        }
      },
      speakers: [
        {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: '4XnF0Cp1piQFkVEjUnCrci'
          }
        }
      ]
    }
  },
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
      updatedAt: '2019-08-27T08:59:12.170Z',
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
          type: 'Link',
          linkType: 'Asset',
          id: '7wa7E8tM1TJCFNSXgf5ai'
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
      ]
    }
  },
  {
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'makqrw5hfm9d'
        }
      },
      id: '6o9an6K6nq1xemJ84oIfXq',
      type: 'Entry',
      createdAt: '2019-08-25T11:10:54.039Z',
      updatedAt: '2019-08-25T11:10:54.039Z',
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
          id: 'session'
        }
      },
      locale: 'en-US'
    },
    fields: {
      title: "What's Nuxt?",
      time: 40,
      description:
        'Discover the story and philosophy of Nuxt.js and his team. Where does it come from and where do we wish to go in the future.',
      ogImage: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '7n20Yo4MMcOqiU7REZAkA9'
        }
      },
      speakers: [
        {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: '2wJP0k4TL8blmOvUsiOswb'
          }
        }
      ]
    }
  },
  {
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'makqrw5hfm9d'
        }
      },
      id: 'K56RNDgglthD48chr9Glr',
      type: 'Entry',
      createdAt: '2019-08-27T09:08:10.167Z',
      updatedAt: '2019-08-27T09:08:10.167Z',
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
          id: 'session'
        }
      },
      locale: 'en-US'
    },
    fields: {
      title:
        '4000万人が使うサービスを jQuery から Nuxt.js にまで置き換えていった話',
      time: 40,
      description:
        'Retty は、月間 4000万人のユニークユーザーを持つ実名型グルメサービスです。9年間運用されてきましたが、当時の JavaScript はフル jQuery で書かれていました。本セッションでは、ここ数年で実施したフロントエンドの改善、サービス運用と並行しながら部分的に Vue.js、Nuxt.js に移行した軌跡をお話しします。\n\n具体的には、jQuery や gulp/webpack との格闘、Jest 導入、SEO 要件、アーキテクチャ刷新による Nuxt.js の導入から拡充まで、施策との相性やログ機構などです。\n\n時代とともにフロントエンド技術の移り変わりがあるなか、Retty はどのタイミングで jQuery から移行し、どう運用しているのかについて紹介します。',
      ogImage: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '6ufbQXdZRrVM4c8m1rCaw5'
        }
      },
      speakers: [
        {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: '6JTRK0izrgCKgJg1ZeiG5a'
          }
        }
      ]
    }
  },
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
      updatedAt: '2019-08-27T09:05:49.382Z',
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
          type: 'Link',
          linkType: 'Asset',
          id: '5emFxpCHjWlov8fBlzWBmM'
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
      ]
    }
  },
  {
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'makqrw5hfm9d'
        }
      },
      id: '7j5mFetuuGDHaCWH0Cu6m6',
      type: 'Entry',
      createdAt: '2019-08-27T09:03:16.706Z',
      updatedAt: '2019-08-27T09:03:16.706Z',
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
          id: 'session'
        }
      },
      locale: 'en-US'
    },
    fields: {
      title: 'The Present and Future about VuePress',
      time: 40,
      description: 'TBD',
      ogImage: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '6lixTxxPc4FPUdqwWn8Rw7'
        }
      },
      speakers: [
        {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: '7LpjHMzGGnnFKt5DkMB3ik'
          }
        }
      ]
    }
  },
  {
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'makqrw5hfm9d'
        }
      },
      id: 'h7DsizAR78p4g69rogvpK',
      type: 'Entry',
      createdAt: '2019-08-27T08:55:04.255Z',
      updatedAt: '2019-08-27T08:55:04.255Z',
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
          id: 'session'
        }
      },
      locale: 'en-US'
    },
    fields: {
      title: 'TypeScript CompilerAPI で挑む Vuex の型推論',
      time: 40,
      description:
        'Vue.js のみならず、Nuxt.js でコア機能として存在する Vuex。Vue.js アプリケーションに TypeScript を導入するにあたり、Vuex の型定義は誰しもが悩んできた課題です。vuex-module-decorators などによるアプローチもありますが、TypeScript の機能をフル活用すれば、純粋な Vuex であっても、隅々まで TypeScript に最適化することが可能です。これは、既存の Vuex コードを TypeScript 化することはもちろん、デコレーターを利用したくないシーンで役に立つ TIPS です。本セッションでは、TypeScript CompilerAPI による codegen 手法により、型推論が不可能とされていた領域に挑戦します。',
      ogImage: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '4KHSft7lLkHHOjUhgJIVp'
        }
      },
      speakers: [
        {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: 'mku1WUPzuF9y5jPNgWNT7'
          }
        }
      ]
    }
  },
  {
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'makqrw5hfm9d'
        }
      },
      id: '6nPCnZejnlgdGmVulnMDEl',
      type: 'Entry',
      createdAt: '2019-08-27T09:14:07.985Z',
      updatedAt: '2019-08-27T09:14:07.985Z',
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
          id: 'session'
        }
      },
      locale: 'en-US'
    },
    fields: {
      title: 'TBD',
      time: 40,
      description: 'TBD',
      ogImage: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '1g9hDoOP82wIwm27P466q6'
        }
      },
      speakers: [
        {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: '2s74eGvySj6AmTfE67VluB'
          }
        }
      ]
    }
  },
  {
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'makqrw5hfm9d'
        }
      },
      id: '3K6keW1beLVB89hcLrOR0n',
      type: 'Entry',
      createdAt: '2019-08-27T09:04:39.351Z',
      updatedAt: '2019-08-27T09:04:39.351Z',
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
          id: 'session'
        }
      },
      locale: 'en-US'
    },
    fields: {
      title: '次世代のデザインとフロントエンド開発の GUI 化',
      time: 40,
      description:
        'STUDIO はコードを書かずに Web サイトを作れるデザインツールです（もちろん Vue.js 製！）。別の視点から見ると GUI でコードを生成するジェネレーターでもあります。\n\nこれまで静的な Web サイトしか作れなかった STUDIO が、今年に入ってから動的なものを作れるように開発を進めています。このとき重要になってくるのが Vue.js や React など昨今のフロントエンド開発で登場する「Component」の概念の可視化（GUI 化）です。また、GUI 化によって Vue.js と React の Component の設計思想の違いが見える形で現れてきました。\n\n本セッションでは、「Component」の GUI 化を通じて見えてきた知見を中心に、実際にデモをしながら新しいデザインプロセスを提案します。',
      ogImage: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '3IpchLNyDcTaZSrRXUxedw'
        }
      },
      speakers: [
        {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: '4Dq8ThsiSdm7JPA4zVMQAo'
          }
        }
      ]
    }
  },
  {
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'makqrw5hfm9d'
        }
      },
      id: '64z2YruYMw1ZKQAZS7ojjm',
      type: 'Entry',
      createdAt: '2019-08-27T08:57:36.638Z',
      updatedAt: '2019-08-27T08:57:36.638Z',
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
          id: 'session'
        }
      },
      locale: 'en-US'
    },
    fields: {
      title: 'とある Nuxt.js 案件の本当にあった怖い話。',
      time: 20,
      description:
        'これまで 15件以上 Vue.js 案件のコンサルティングと開発に携わってきた内の 1つ、某スタートアップでの Nuxt.js 開発案件は、参加した時点で既にメンテナンス不能状態となっていました。\n\n例えば、以下のような問題です。\n\n- ページをまたがるグローバルなストアが混沌としている\n- 関係ないページ用のストアの冗長なロードが起きパフォーマンスが悪い\n- SEO が重要にも関わらずサーバーサイドレンダリングを導入できていない\n- Firebase 認証に関連し一部のユーザーが永遠にログインできない致命的なバグの発生\n- ページ遷移時の UI チラツキが頻発\n- など\n\nなぜそのようなことが起こってしまったのでしょうか？結果的に、サービスの質の低下に繋がってしまう状況が続き、改善のプロセスを早急に見出していく必要がありました。開発チームの体制の問題もありましたが、現在進行形でコード・設計レベルで改善を行っています。\n\n本セッションでは、本案件を通じて得られた「Nuxt.js バッドプラクティス」の知見と改善方法提案を紹介します。',
      ogImage: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '3qVLT9iOYCCw4DoePYisCk'
        }
      },
      speakers: [
        {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: '6DeU68XA3PYjmXlu2RiIEI'
          }
        }
      ]
    }
  },
  {
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'makqrw5hfm9d'
        }
      },
      id: '7fozsC9JQwpxPyxkYyARVJ',
      type: 'Entry',
      createdAt: '2019-08-27T09:09:31.500Z',
      updatedAt: '2019-08-27T09:09:31.500Z',
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
          id: 'session'
        }
      },
      locale: 'en-US'
    },
    fields: {
      title: '“何もない” を作る、コンポーネント指向な余白設計',
      time: 20,
      description:
        'Vue.js がそうであるように、限定されたスコープの CSS を使って UI コンポーネントを設計することが世の中の当たり前になってきました。それを用いて UI コンポーネントを実装する時に必ず突き当たる難題のひとつが「余白」です。本セッションでは、UI コンポーネントの開発時に検討すべき余白設計についてお話しします。\n\n余白は、目に見えないがために境界が曖昧ですから、「この UI はどんなコンポーネントに分割すべきだろうか？」という目に見える問題に比べて見落とされがちです。しかし実際に開発を行うとなると、「この余白をどのコンポーネントに実装すべきか？」、「取ることのできる選択肢は何で、それぞれにどんな影響があるのか？」と悩むことになります。\n\nそしてひとたび方針を間違えれば、手を入れるたびに複雑化していく UI コンポーネントができ上がってしまいます。にもかかわらず余白設計の問題について語られる機会はそう多くはありません。\n\n実際に開発と運用を行って得られた「何もない」を作るための余白設計の知見を共有します。',
      ogImage: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '4quZvlDAxfs8MeLZPKn7wE'
        }
      },
      speakers: [
        {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: '6nXanQ9BH9YVSCEr44FcrD'
          }
        }
      ]
    }
  },
  {
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'makqrw5hfm9d'
        }
      },
      id: '5zLpsJ3NSvAw34HQvLngMv',
      type: 'Entry',
      createdAt: '2019-08-27T08:39:19.500Z',
      updatedAt: '2019-08-27T08:39:19.500Z',
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
          id: 'session'
        }
      },
      locale: 'en-US'
    },
    fields: {
      title: 'Vue Tooling について語るときに僕の語ること',
      time: 40,
      description:
        "With over two million installs, today Vetur is the most popular editor tooling plugin for editing Vue single file components.\n\nThis talk will start with an overview of Vetur's capabilities and then dive deep into specific features such as auto completion and type checking in Vue templates.\n\nBesides, I'll explain Vetur's role in the overall Vue ecosystem, especially in improving the TypeScript integration. Finally, I'll talk about how Vetur could offer next generation development experience from its unique position.",
      ogImage: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '2oFn5B2mmQg5RUFq4gkbzH'
        }
      },
      speakers: [
        {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: '1sySFRq9oK4mfSefnrR0Xq'
          }
        }
      ]
    }
  },
  {
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'makqrw5hfm9d'
        }
      },
      id: '7aUz315q5gRNDDsC9ZPsiR',
      type: 'Entry',
      createdAt: '2019-08-27T08:56:02.555Z',
      updatedAt: '2019-08-27T08:56:02.555Z',
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
          id: 'session'
        }
      },
      locale: 'en-US'
    },
    fields: {
      title:
        'Vue CLI、GraphQL を用いた一休.com レストラン管理画面のリニューアル',
      time: 20,
      description:
        'Vue CLI、GraphQL、Vue Router、Vuex、Bulma を用いて、一休.com レストランの管理画面リニューアルプロジェクトを高速に立ち上げ、リリースした知見を紹介します。具体的には以下のトピックについてお話しします。\n\n- なぜ Nuxt.js ではなく Vue CLI なのか\n- Apollo Server を使いフロントエンドエンジニアがモックを書いて API 開発をリードするスタイル\n- SPA と MPA の混成',
      ogImage: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '2UJd8BHuVvIAlBjvZdgtE7'
        }
      },
      speakers: [
        {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: '4w4LHXhuKJn3BoWBQfcZx7'
          }
        }
      ]
    }
  },
  {
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'makqrw5hfm9d'
        }
      },
      id: '5SIsttQswXSNTCN2Oi2MZS',
      type: 'Entry',
      createdAt: '2019-08-27T08:52:59.541Z',
      updatedAt: '2019-08-27T08:52:59.541Z',
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
          id: 'session'
        }
      },
      locale: 'en-US'
    },
    fields: {
      title: 'Vue.js meets Web Accessibility',
      time: 20,
      description:
        '「Web アクセシビリティ」とは、あらゆるユーザーが共通のコストで情報にアクセスしたりサービスを利用できるようになることです。\n\nWeb の進化によりこれまでできなかった表現や UI が登場したり、利用するサービス自体もリッチな体験なものに変化してきています。しかし実際は、一部のユーザーには特定のコストをかけないと見れなかったり利用ができなかったりと、世に出ているサイトやアプリがなかなかアクセシブルなものとなっていないことがあります。\n\n本セッションでは、Vue.js・Nuxt.js の開発においてどうアクセシビリティを担保するのか、UI コンポーネント開発においてどうやって取り組むのか、作ったものがどうアクセシブルであるかをチェックするか、について紹介します。\n\nそして、今こそ「アクセシビリティをやる意味」について一緒に考えましょう。',
      ogImage: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: 'ZeTyl9OBGpR96UkFzbF9s'
        }
      },
      speakers: [
        {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: '4lNqSfqiA9P0NVNyhWWaPD'
          }
        }
      ]
    }
  },
  {
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'makqrw5hfm9d'
        }
      },
      id: '6p8bcCeCJsMgW2QMJIq14I',
      type: 'Entry',
      createdAt: '2019-08-27T09:10:21.572Z',
      updatedAt: '2019-08-27T09:10:21.572Z',
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
          id: 'session'
        }
      },
      locale: 'en-US'
    },
    fields: {
      title: 'Nuxt.js + TypeScript で 01 開発',
      time: 20,
      description:
        'TypeScript のニーズが急速に高まっていますが、実際には日本国内での知見共有や、企業における事例はまだまだ少ない状況です。Vuex で TypeScript をどう扱うかについても、未だに物議を醸しています。\n\nまた、Vue.js 3.0 で Class API がドロップされる発表があり話題になりましたが、Nuxt.js 公式では Decorator が推奨されており、Nuxt.js がどう対応していくかにも注目が集まっています。\n\n本セッションでは、スピーカーがフリーランスや会社員として携わった多数の Vue.js、Nuxt.js、TypeScript 開発で得た知見を共有します。具体的には、実際に Nuxt.js と TypeScript を現場レベルで使う場合、何に気を付けるべきか、Vuex の話、Storybook でのコンポーネント開発などを紹介します。',
      ogImage: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '4q5tyG2Ux3GBxnGixnGiQ7'
        }
      },
      speakers: [
        {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: 'kAJ3wEURjDaABWU3xDW6x'
          }
        }
      ]
    }
  },
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
      updatedAt: '2019-08-25T16:24:26.199Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment'
        }
      },
      revision: 3,
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
      ]
    }
  },
  {
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'makqrw5hfm9d'
        }
      },
      id: '7yeyEFR9IxHjnS6vg5AKpW',
      type: 'Entry',
      createdAt: '2019-08-27T09:06:57.888Z',
      updatedAt: '2019-08-27T09:06:57.888Z',
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
          id: 'session'
        }
      },
      locale: 'en-US'
    },
    fields: {
      title: '型がある楽しさとつらさ',
      time: 20,
      description:
        '大規模サービスになると、型に守られた世界でコードを書きたいものです。実名型グルメサービス Retty でも、一部アーキテクチャの刷新時に、フロントエンドに Nuxt.js + TypeScript、サーバーとの通信に GraphQL を導入しました。\n\n型がある安全な世界になった一方で、型のない世界に型を持ち込んだ辛さもあります。また、型定義ファイルが提供されていない外部パッケージの変化に追従していく大変さもあります。\n\n本セッションでは、型のない世界にどのように型を組み込んだか、開発速度、運用コストについてお話しします。具体的には、VueTypes からの移行や API のインタフェース などについて紹介します。',
      ogImage: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '5hYDhUrORuxNhzwrAVNIph'
        }
      },
      speakers: [
        {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: '7myQ6DFjZOrkIVOolyJiJN'
          }
        }
      ]
    }
  }
]

export default sessions

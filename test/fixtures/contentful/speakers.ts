import Speaker from '~/types/speaker'

// Contentful から取得した JSON を保存している。スピーカーが増えたら要更新
// - test の fixture として利用
// - nuxt.config の generate.routes にも利用

const speakers: Speaker[] = [
  {
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 'makqrw5hfm9d'
        }
      },
      id: '2s74eGvySj6AmTfE67VluB',
      type: 'Entry',
      createdAt: '2019-08-27T09:10:51.838Z',
      updatedAt: '2019-08-27T09:10:51.838Z',
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
          id: 'speaker'
        }
      },
      locale: 'en-US'
    },
    fields: {
      name: 'Jen Looper',
      title: 'Vue Vixens 創設者兼 CEO',
      avatar: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '1Bqb7VVTxdnL3zZIh8FNJD'
        }
      },
      avatar2x: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '1nDz7yqeU9ykdxJOQKyOVc'
        }
      },
      twitter: 'jenlooper',
      github: 'jlooper',
      description:
        'Microsoft のクラウドデベロッパーアドボケイトリード、Google Developer Expert として Web およびモバイル開発者として 18年以上の経験を持ち、クロスプラットフォームのモバイルアプリケーション制作を専門としています。\n\nハードウェアハッキング、モバイルアプリ、Vue.js、機械学習、そして毎日新しいことの発見に情熱を注いでいる多言語多文化主義者です。Vue.js コミュニティの多様性を促進する先駆けである Vue Vixens の創設者兼 CEO です。',
      sessions: [
        {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: '6nPCnZejnlgdGmVulnMDEl'
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
      id: '4w4LHXhuKJn3BoWBQfcZx7',
      type: 'Entry',
      createdAt: '2019-08-27T08:54:29.297Z',
      updatedAt: '2019-08-27T08:54:29.297Z',
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
          id: 'speaker'
        }
      },
      locale: 'en-US'
    },
    fields: {
      name: '浅野 慧',
      title: '株式会社一休',
      avatar: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '27AfDLTXhUeZHEnrSqCUVA'
        }
      },
      avatar2x: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '5ZqLjRLiE01Pbzi0aorN0g'
        }
      },
      twitter: 'ninjinkun',
      github: 'ninjinkun',
      description:
        '一休.com レストランを開発するエンジニアリングマネージャー。最近 iOS、Android アプリエンジニアから Web フロントエンドエンジニアにジョブチェンジしました。Product Managers Japan というプロダクトマネージャーのコミュニティも主催しています。',
      sessions: [
        {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: '7aUz315q5gRNDDsC9ZPsiR'
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
      id: '4XnF0Cp1piQFkVEjUnCrci',
      type: 'Entry',
      createdAt: '2019-08-25T11:08:14.423Z',
      updatedAt: '2019-08-25T11:08:14.423Z',
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
          id: 'speaker'
        }
      },
      locale: 'en-US'
    },
    fields: {
      name: 'Sébastien Chopin',
      title: 'Nuxt.js 共同クリエーター',
      avatar: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '12RlQ1n2J1mhKVJqZt5W5i'
        }
      },
      avatar2x: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '575eFXXAjyzdl01Z5P2mF7'
        }
      },
      twitter: 'Atinux',
      github: 'Atinux',
      description:
        '14歳から Web デベロッパーです。8年ほど前に Node.js を使い始めてからは、JavaScript だけを書いています。ユニバーサルアプリケーションを簡単に作ることができる Nuxt.js を共同で作っています。',
      sessions: [
        {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: '52xcLDNWOkF7s46q93hGQs'
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
      id: 'kAJ3wEURjDaABWU3xDW6x',
      type: 'Entry',
      createdAt: '2019-08-27T08:55:36.068Z',
      updatedAt: '2019-08-27T08:55:36.068Z',
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
          id: 'speaker'
        }
      },
      locale: 'en-US'
    },
    fields: {
      name: '石岡 将明',
      title: '株式会社 ROXX',
      avatar: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '5x58csQonmS5RBCWXXKPom'
        }
      },
      avatar2x: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '2TMhY3K20EhrONyMQ3ZKaV'
        }
      },
      twitter: 'masaakikunsan',
      github: 'masaakikunsan',
      description:
        '2016年からプログラミングを始め、数多くのベンチャーでエンジニアを経験したのちフリーランスを経て、現在は株式会社 ROXX の back check というサービスの PM をやっています。フリーランス時代は、Vue.js や React での SPA 開発を中心とし、Web デザインや PM やフロントエンドの技術顧問業やハンズオンでの講師・メンターをしプログラミングを教えたりなどしていました。\n\n最近は、フロントでのテストの重要性を感じているので、テストに関心があります。',
      sessions: [
        {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: '6p8bcCeCJsMgW2QMJIq14I'
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
      id: '4Dq8ThsiSdm7JPA4zVMQAo',
      type: 'Entry',
      createdAt: '2019-08-27T08:59:30.206Z',
      updatedAt: '2019-08-27T08:59:30.206Z',
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
          id: 'speaker'
        }
      },
      locale: 'en-US'
    },
    fields: {
      name: '甲斐 啓真',
      title: 'STUDIO 株式会社',
      avatar: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: 'PuCjgucYXQJIazrwHH0O8'
        }
      },
      avatar2x: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '536NGEpaCPN4G76mQuG2wE'
        }
      },
      twitter: 'keimakai1993',
      github: 'keimakai',
      description:
        'STUDIO 株式会社 Founder / CPO\n\n「STUDIO」というコードを書かずに Web サイトを作れるデザインツールを制作中。前職である UI デザイン会社のオハコでエンジニア兼デザイナーとして、Web サイト・アプリケーションを作っていく中でデザインと開発の間のギャップを体感。イラストベースでデザインする最近のデザインプロセスを脱して、実際のコードと同様の CSS（ボックスモデル）ベースでデザインするために 2016年から STUDIO の制作を始めました。',
      sessions: [
        {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: '3K6keW1beLVB89hcLrOR0n'
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
      id: '582L635Brdsa2epHP9HSMA',
      type: 'Entry',
      createdAt: '2019-08-27T08:56:43.007Z',
      updatedAt: '2019-08-27T08:56:43.007Z',
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
          id: 'speaker'
        }
      },
      locale: 'en-US'
    },
    fields: {
      name: 'Chris Fritz',
      title: 'Vue.js コアチームメンバー',
      avatar: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '2OtxAnAwc77d240ByI3t6Y'
        }
      },
      avatar2x: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '6q9X6lRiw998jyiipgH72m'
        }
      },
      twitter: 'chrisvfritz',
      github: 'chrisvfritz',
      description:
        'アメリカ合衆国ミシガン州ランシングに住んでおり、オープンソースに取り組みながら世界中の企業における素晴らしい Web フロントエンド構築を手助けしています。\n\nVue.js コアチームの一員としての仕事でよく知られており、Web 開発者にとって人生をよりシンプルで楽しいものにするための他のリソースとともに、Vue.js のドキュメント執筆やキュレーションをしています。',
      sessions: [
        {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: '7lCuNn3wby0o7hooQ7gbQf'
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
      id: '6DeU68XA3PYjmXlu2RiIEI',
      type: 'Entry',
      createdAt: '2019-08-27T08:53:28.471Z',
      updatedAt: '2019-08-27T08:53:28.471Z',
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
          id: 'speaker'
        }
      },
      locale: 'en-US'
    },
    fields: {
      name: '手島 拓也',
      title: 'GAOGAO Pte. Ltd.',
      avatar: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '7z76s7OZVUfNyKjLnQ2zBu'
        }
      },
      avatar2x: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '5QHloDfRqhGamp1IfcfgAS'
        }
      },
      twitter: 'tejitak',
      github: 'tejitak',
      description:
        '新卒で入社した IBM 研究所にてソフトウェアエンジニアとして検索・テキスト解析プロダクトの開発に従事した後、LINE 株式会社に転職し多くのサービス開発に携わりました。その後、共同創業者兼 CTO として起業、高級志向の民泊サービスを運営・事業売却し、現在はシンガポール本社 GAOGAO Pte. Ltd. の代表として創業し、海外拠点のスタートアップ・スタジオを運営しています。共著に『Vue.js入門』があります。',
      sessions: [
        {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: '64z2YruYMw1ZKQAZS7ojjm'
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
      id: '7LpjHMzGGnnFKt5DkMB3ik',
      type: 'Entry',
      createdAt: '2019-08-27T08:51:42.997Z',
      updatedAt: '2019-08-27T09:11:42.655Z',
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
          id: 'speaker'
        }
      },
      locale: 'en-US'
    },
    fields: {
      name: 'ULIVZ',
      title: 'VuePress デベロッパー',
      avatar: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '3HZzgwGbJR175TAcUoIqt0'
        }
      },
      avatar2x: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '6nNq4Avq7neelwqnhuYDa7'
        }
      },
      twitter: '_ulivz',
      github: 'ulivz',
      description:
        'Ant Financial（Alipay）に勤めながら、VuePress の開発をしています。エンジニアリングとプロダクト構築の能力に優れています。\n\n文章を書くこと（文学）、写真、映画が好きで、『ハチミツとクローバー』のような芸術的な風味を漂わせる作品がお気に入りです。',
      sessions: [
        {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: '7j5mFetuuGDHaCWH0Cu6m6'
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
      id: '6nXanQ9BH9YVSCEr44FcrD',
      type: 'Entry',
      createdAt: '2019-08-27T09:08:34.557Z',
      updatedAt: '2019-08-27T09:08:34.557Z',
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
          id: 'speaker'
        }
      },
      locale: 'en-US'
    },
    fields: {
      name: '黒川 智',
      title: '株式会社マーク・オン',
      avatar: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '34swEtd98MBeaXZ5Cp5nN2'
        }
      },
      avatar2x: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '5P0nv2NctX9NPabqyFNsrl'
        }
      },
      twitter: 'blackawa0',
      github: 'blackawa',
      description:
        '株式会社マーク・オンの創業メンバーであり開発者です。SIer で技術者としての基礎を、Web 系企業でビジネスとプロダクトの関係性を学びました。そして今はスタートアップで、顧客に思いを馳せながらコードを書いています。\n\n所属する株式会社マーク・オンは、チームの開発速度を高く保つために Vue.js を採用しました。Vue.js は現在その期待に完全に応えてくれています。',
      sessions: [
        {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: '7fozsC9JQwpxPyxkYyARVJ'
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
      id: '1wgsyNSXRjVrKe2NgZzmw3',
      type: 'Entry',
      createdAt: '2019-08-27T09:00:37.825Z',
      updatedAt: '2019-08-27T09:00:37.826Z',
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
          id: 'speaker'
        }
      },
      locale: 'en-US'
    },
    fields: {
      name: '沼田 佳介',
      title: 'ギルドワークス株式会社',
      avatar: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '6LoC8VRCqltizKTEYjAcUP'
        }
      },
      avatar2x: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '20NGISnV3ejA3CdjGoWfHm'
        }
      },
      twitter: 'keinuma15',
      github: 'keinuma',
      description:
        'モバイルアプリのバックエンドや Web アプリのフロントエンドを開発しています。\n\n何を作るのかを探求し、プロダクトの価値を出すことを大事にしています。ユーザーと共に作れるような開発に挑戦しています。',
      sessions: [
        {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: '4dgpT8P4uu8CkedDki92NS'
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
      id: '1sySFRq9oK4mfSefnrR0Xq',
      type: 'Entry',
      createdAt: '2019-08-27T08:21:00.992Z',
      updatedAt: '2019-08-27T08:21:00.992Z',
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
          id: 'speaker'
        }
      },
      locale: 'en-US'
    },
    fields: {
      name: 'Pine Wu',
      title: 'Vetur クリエーター',
      avatar: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '2UFRrCsnVof30cWcX2Mvve'
        }
      },
      avatar2x: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '23wgmzghJMNbXAgysNgAFo'
        }
      },
      twitter: 'octref',
      github: 'octref',
      description:
        'Microsoft で Visual Studio Code（VS Code）の開発に携わっています。VS Code の有名な Vue 拡張機能 Vetur の作者でもあります。Vetur という名前は、菅野よう子さんの歌『Von』に由来しています。好きなマンガは『バガボンド』で、時間があれば何度も読んでいます。',
      sessions: [
        {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: '5zLpsJ3NSvAw34HQvLngMv'
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
      id: 'mku1WUPzuF9y5jPNgWNT7',
      type: 'Entry',
      createdAt: '2019-08-27T09:02:00.323Z',
      updatedAt: '2019-08-27T09:02:00.323Z',
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
          id: 'speaker'
        }
      },
      locale: 'en-US'
    },
    fields: {
      name: '吉井 健文',
      title: 'DeNA',
      avatar: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '3z3kjbx5KdUdZkbgbcx4rl'
        }
      },
      avatar2x: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '4i8gaVESt5zcIrPNWWd0zn'
        }
      },
      twitter: 'takepepe',
      github: 'takefumi-yoshii',
      description:
        'デザイナーからフロントエンドエンジニアに転身、現職では Node.js サーバーサイド実装も担当。「TypeScript3.4 型の強化書」「実践 TypeScript」著者。',
      sessions: [
        {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: 'h7DsizAR78p4g69rogvpK'
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
      id: '4lNqSfqiA9P0NVNyhWWaPD',
      type: 'Entry',
      createdAt: '2019-08-27T09:04:43.636Z',
      updatedAt: '2019-08-27T09:04:43.636Z',
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
          id: 'speaker'
        }
      },
      locale: 'en-US'
    },
    fields: {
      name: '大山 奥人',
      title: '株式会社プレイド',
      avatar: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '6xCWLl6w13ag0farJIoby0'
        }
      },
      avatar2x: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '52lbdiNOCjZyIhtlcvpspe'
        }
      },
      twitter: 'yamanoku',
      github: 'yamanoku',
      description:
        '1989年生まれの一児の父です。インターネット徘徊が大好きです。制作会社の Web デザイナーとして働き出し、株式会社 GEEK でマークアップ・フロントエンドエンジニアとして従事した後、2019年1月よりデザインエンジニアとして株式会社プレイドに入社しました。アクセシビリティの視点をもったフロントエンド実装、情報設計・非機能要件を重視した業務に取り組んでいます。',
      sessions: [
        {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: '5SIsttQswXSNTCN2Oi2MZS'
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
      id: '6JTRK0izrgCKgJg1ZeiG5a',
      type: 'Entry',
      createdAt: '2019-08-27T09:03:31.178Z',
      updatedAt: '2019-08-27T09:03:31.178Z',
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
          id: 'speaker'
        }
      },
      locale: 'en-US'
    },
    fields: {
      name: '高瀬 悠磨',
      title: 'Retty 株式会社',
      avatar: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '1ZLR3HqBPUPL9TicbE9vfE'
        }
      },
      avatar2x: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '4ToBIFg8HnmqnOhUNnDXnQ'
        }
      },
      twitter: null,
      github: 'retty-y-takase',
      description:
        '2018年から Retty にフロントエンドエンジニアとして参画。Vue.js を用いた Web アプリケーションの開発・運用を行なっています。2児の父、最近の特技は息子の「俺の必殺技」にカウンターアタックをいれることです。',
      sessions: [
        {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: 'K56RNDgglthD48chr9Glr'
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
      id: '7myQ6DFjZOrkIVOolyJiJN',
      type: 'Entry',
      createdAt: '2019-08-27T08:58:08.159Z',
      updatedAt: '2019-08-27T08:58:08.159Z',
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
          id: 'speaker'
        }
      },
      locale: 'en-US'
    },
    fields: {
      name: '宇野 航平',
      title: 'Retty 株式会社',
      avatar: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '4Lidfz2f9qCnKki6UUTtJe'
        }
      },
      avatar2x: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '48JFajH7V65lQDe5inETdW'
        }
      },
      twitter: null,
      github: 'konu96',
      description:
        'Retty 新卒 Web エンジニアです。サーバーサイドからフロントエンドまで幅広くやっています。最近では、アーキテクチャ刷新プロジェクトを進めており、Go + Nuxt.js + TypeScript で開発をしています。',
      sessions: [
        {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: '7yeyEFR9IxHjnS6vg5AKpW'
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
      id: '2wJP0k4TL8blmOvUsiOswb',
      type: 'Entry',
      createdAt: '2019-08-25T11:11:01.751Z',
      updatedAt: '2019-08-25T11:11:01.751Z',
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
          id: 'speaker'
        }
      },
      locale: 'en-US'
    },
    fields: {
      name: 'Alexandre Chopin',
      title: 'Nuxt.js 共同クリエーター',
      avatar: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '4Nh5YADlfW9d6mTQElYcO8'
        }
      },
      avatar2x: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '3gGKasMLSIF33OFHOaEAff'
        }
      },
      twitter: 'IamNuxt',
      github: 'alexchopin',
      description:
        'Web デベロッパーであり、講師であり、スピーカーでもあります。デベロッパーライフに喜びをもたらすため、Nuxt.js の共同クリエーターとしてフルタイムで働いています。',
      sessions: [
        {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: '6o9an6K6nq1xemJ84oIfXq'
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
      id: '7aHzCP1a1rYpR6KbWENRmB',
      type: 'Entry',
      createdAt: '2019-08-25T11:01:43.811Z',
      updatedAt: '2019-08-25T11:01:43.811Z',
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
          id: 'speaker'
        }
      },
      locale: 'en-US'
    },
    fields: {
      name: 'Evan You',
      title: 'Vue.js クリエーター',
      avatar: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '65PL15Kw0Siheq5LDRG66F'
        }
      },
      avatar2x: {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: '2X8fB06lUIbesMR8NVSJJd'
        }
      },
      twitter: 'youyuxi',
      github: 'yyx990803',
      description:
        'Evan は開発者、デザイナー、そしてクリエイティブコーダーです。彼は、リアクティブなコンポーネントでモダンな Web インターフェイスを構築するための JavaScript フレームワーク、Vue.js の作者です。\n\nかつて、GitHub で最もスターを集めたフルスタック JavaScript フレームワークであった Meteor の開発グループでも働いていました。Google Creative Lab で、さまざまな Google プロダクト向けの実験的な UI プロトタイプに、2年間取り組んでいた経験もあります。',
      sessions: [
        {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: '7xvdef2fny01iVD0ra03Iz'
          }
        }
      ]
    }
  }
]

export default speakers

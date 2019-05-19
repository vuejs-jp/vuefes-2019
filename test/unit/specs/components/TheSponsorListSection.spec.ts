import { mount } from '@vue/test-utils'
import TheSponsorListSection from '~/components/TheSponsorListSection.vue'

describe('TheSponsorListSection', () => {
  let wrapper

  const sponsorList = [
    {
      sys: {
        id: 'a'
      },
      fields: {
        type: 'gold',
        name: 'アン・コンサルティング株式会社',
        url: 'https://www.anconsulting.jp/',
        banner: {
          fields: {
            file: {
              url:
                '//images.ctfassets.net/makqrw5hfm9d/7w51pGQ6OHdOZvp15i5R4h/67a7c9f1113ee6fe24441b883bc4fa6f/anconsulting.png'
            }
          }
        },
        description:
          'アン・コンサルティングは、フリーランス IT エンジニア向け案件・求人・仕事「フリエン」を運営しています。 金融業界、IT業界など各業界で経験を積んだ日本の IT 人材マーケットに精通したスペシャリスト集団です。',
        publishedAt: '2019-05-19T10:40+09:00'
      }
    },
    {
      sys: {
        id: 'b'
      },
      fields: {
        type: 'gold',
        name: 'アン・コンサルティング株式会社',
        url: 'https://www.anconsulting.jp/',
        banner: {
          fields: {
            file: {
              url:
                '//images.ctfassets.net/makqrw5hfm9d/7w51pGQ6OHdOZvp15i5R4h/67a7c9f1113ee6fe24441b883bc4fa6f/anconsulting.png'
            }
          }
        },
        description:
          'アン・コンサルティングは、フリーランス IT エンジニア向け案件・求人・仕事「フリエン」を運営しています。 金融業界、IT業界など各業界で経験を積んだ日本の IT 人材マーケットに精通したスペシャリスト集団です。',
        publishedAt: '2019-05-19T10:40+09:00'
      }
    }
  ]

  beforeEach(() => {
    wrapper = mount(TheSponsorListSection, {
      propsData: {
        sponsorList
      }
    })
  })

  test('レンダリングできる', () => {
    expect(wrapper.find('.the-sponsor-list-section').isVisible()).toBeTruthy()
  })

  test('スポンサー情報が表示されている', () => {
    expect(wrapper.find('.sponsor .name').text()).toEqual(
      'アン・コンサルティング株式会社'
    )
  })
})

import { mount } from '@vue/test-utils'
import TheSponsorListSection from '~/components/TheSponsorListSection.vue'
import sponsorList from '../../__mocks__/sponsorListMock'

describe('TheSponsorListSection', () => {
  let wrapper

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
    expect(wrapper.find('.sponsor .name').text()).toBe('合同会社 esa')
  })

  describe('sponsorsByType', () => {
    test('スポンサーの種類によってフィルタリングできる', () => {
      const sponsors = wrapper.vm.sponsorsByType('silver')

      expect(sponsors.length).toBe(1)
      expect(sponsors[0].fields.type).toBe('silver')
    })
  })
})

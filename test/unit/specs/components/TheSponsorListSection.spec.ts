import { mount, createLocalVue } from '@vue/test-utils'
import VueLazyLoad from 'vue-lazyload'
import TheSponsorListSection from '~/components/TheSponsorListSection.vue'
import sponsorList from '../../__mocks__/sponsorListMock'

const localVue = createLocalVue()

localVue.use(VueLazyLoad)

describe('TheSponsorListSection', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(TheSponsorListSection, {
      localVue,
      propsData: {
        sponsorList
      }
    })
  })

  test('レンダリングできる', () => {
    expect(wrapper.find('.the-sponsor-list-section').isVisible()).toBeTruthy()
  })

  describe('sponsorsByType', () => {
    test('スポンサーの種類によってフィルタリングできる', () => {
      const sponsors = wrapper.vm.sponsorsByType('silver')

      expect(sponsors.length).toBe(1)
      expect(sponsors[0].fields.type).toBe('silver')
    })
  })
})

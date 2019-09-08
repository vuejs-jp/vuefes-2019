import { mount, RouterLinkStub, createLocalVue } from '@vue/test-utils'
import VueLazyLoad from 'vue-lazyload'
import sponsorList from '../../__mocks__/sponsorListMock'
import TheSponsorListSection from '~/components/TheSponsorListSection.vue'

const localVue = createLocalVue()

localVue.use(VueLazyLoad)

describe('TheSponsorListSection', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(TheSponsorListSection, {
      localVue,
      propsData: {
        sponsorList
      },
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
  })

  test('レンダリングできる', () => {
    expect(wrapper.find('.the-sponsor-list-section').isVisible()).toBeTruthy()
  })

  describe('.sponsor-group', () => {
    test('スポンサープランがクラス名に付与される', () => {
      expect(wrapper.find('.sponsor-group').classes()).toEqual([
        'sponsor-group',
        'platinum'
      ])
    })

    test('スポンサープランが表示される', () => {
      expect(wrapper.find('.sponsor-plan').text()).toBe('PLATINUM')
    })
  })

  describe('sponsorsByPlan', () => {
    test('スポンサープランによってフィルタリングできる', () => {
      const sponsors = wrapper.vm.sponsorsByPlan('silver')

      expect(sponsors.length).toBe(2)
      expect(sponsors[0].fields.plan).toBe('silver')
    })
  })
})

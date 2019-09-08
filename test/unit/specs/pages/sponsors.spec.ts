import { mount, RouterLinkStub } from '@vue/test-utils'
import sponsorList from '../../__mocks__/sponsorListMock'
import SponsorsPage from '~/pages/sponsors.vue'

describe('SponsorsPage', () => {
  let wrapper
    /* eslint-disable no-unused-expressions */
  ;(<any>window).IntersectionObserver = class IntersectionObserver {
    constructor() {
      null
    }
    observe() {
      return null
    }
  }
  /* eslint-enable no-unused-expressions */

  beforeEach(() => {
    wrapper = mount(SponsorsPage, {
      data() {
        return {
          sponsors: sponsorList
        }
      },
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
  })

  test('レンダリングできる', () => {
    expect(wrapper.find('.sponsors-page').isVisible()).toBeTruthy()
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

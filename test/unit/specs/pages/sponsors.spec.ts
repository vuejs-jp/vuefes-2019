import { mount, RouterLinkStub, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import sponsorList from '../../../fixtures/contentful/sponsorList'
import createFullStore from '../utils/createFullStore'
import SponsorsPage from '~/pages/sponsors.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

const store = createFullStore(Vuex)

describe('SponsorsPage', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(SponsorsPage, {
      localVue,
      store,
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
  })

  test('レンダリングできる', () => {
    expect(wrapper.find('.sponsors-page').isVisible()).toBeTruthy()
  })

  describe('.index', () => {
    test('index にプランのアンカーがついている', () => {
      const indexLinkWrapper = wrapper.find('.index .link')
      expect(indexLinkWrapper.text()).toBe('PLATINUM')
      expect(indexLinkWrapper.props().to).toBe('/sponsors/#platinum')
    })
  })

  describe('.sponsor-group-list', () => {
    test('スポンサープランがクラス名に付与される', () => {
      expect(wrapper.find('.sponsor-group').classes()).toEqual([
        'sponsor-group',
        'platinum'
      ])
    })

    test('スポンサープランの詳細が表示される', () => {
      const platinumSponsor = sponsorList[2]
      const platinumSponsorWrapper = wrapper.find('.platinum')
      expect(platinumSponsorWrapper.find('.sponsor-plan').text()).toBe(
        'PLATINUM'
      )
      expect(platinumSponsorWrapper.find('.sponsor').attributes().id).toBe(
        `sponsor_${platinumSponsor.sys.id}`
      )
      expect(
        platinumSponsorWrapper.find('.sponsor > li > a').attributes().href
      ).toBe(platinumSponsor.fields.url)
      expect(
        platinumSponsorWrapper.find('.sponsor-image').isVisible()
      ).toBeTruthy()
      expect(platinumSponsorWrapper.find('.sponsor-name').text()).toBe(
        platinumSponsor.fields.name
      )
      expect(platinumSponsorWrapper.find('.sponsor-url').text()).toBe(
        platinumSponsor.fields.url
      )
      expect(platinumSponsorWrapper.find('.sponsor-pr').text()).toBe(
        platinumSponsor.fields.pr
      )
    })
  })
})

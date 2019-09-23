import { mount, RouterLinkStub, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import sponsorList from '../../../fixtures/contentful/sponsors'
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
      expect(wrapper.find('.index .link').props().to).toBe(
        '/sponsors/#platinum'
      )
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
      expect(wrapper.find('.sponsor-plan').text()).toBe('PLATINUM')
      expect(wrapper.find('.sponsor').attributes().id).toBe(
        `sponsor_${sponsorList[2].sys.id}`
      )
      expect(wrapper.find('.sponsor > li > a').attributes().href).toBe(
        sponsorList[2].fields.url
      )
      expect(wrapper.find('.sponsor-image').isVisible()).toBeTruthy()
      expect(wrapper.find('.sponsor-name').text()).toBe(
        sponsorList[2].fields.name
      )
      expect(wrapper.find('.sponsor-url').text()).toBe(
        sponsorList[2].fields.url
      )
      expect(wrapper.find('.sponsor-pr').text()).toBe(sponsorList[2].fields.pr)
    })
  })
})

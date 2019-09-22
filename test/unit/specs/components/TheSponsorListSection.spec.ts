import { mount, RouterLinkStub, createLocalVue } from '@vue/test-utils'
import VueLazyLoad from 'vue-lazyload'
import Vuex from 'vuex'
import createFullStore from '../utils/createFullStore'
import sponsorList from '../../../fixtures/contentful/sponsors'
import TheSponsorListSection from '~/components/TheSponsorListSection.vue'

const localVue = createLocalVue()

localVue.use(VueLazyLoad)
localVue.use(Vuex)

const store = createFullStore(Vuex)

describe('TheSponsorListSection', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(TheSponsorListSection, {
      localVue,
      store,
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

  describe('.sponsor', () => {
    test('スポンサーが表示される', () => {
      expect(wrapper.find('.sponsor').isVisible()).toBeTruthy()
    })

    test('リンクがスポンサー一覧ページのアンカーになっている', () => {
      expect(wrapper.find(RouterLinkStub).props().to).toBe(
        // プラチナスポンサーのデータが sponsorList[2] に格納されている
        `/sponsors/#sponsor_${sponsorList[2].sys.id}`
      )
    })
  })
})

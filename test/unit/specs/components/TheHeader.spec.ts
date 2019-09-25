import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import VueLazyLoad from 'vue-lazyload'
import TheHeader from '~/components/TheHeader.vue'

const localVue = createLocalVue()

localVue.use(VueLazyLoad)

let wrapper
const navigationLinks = [
  '/#the-speaker-list-section',
  '/#the-time-table-section',
  '/#the-event-section',
  '/#the-ticket-section',
  '/#the-access-section',
  '/#the-sponsor-list-section',
  '/#the-staff-list-section'
]

describe('TheHeader', () => {
  beforeEach(() => {
    wrapper = mount(TheHeader, {
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
  })

  test('トップページへのリンクをレンダリングできる', () => {
    expect(wrapper.find('a').props().to).toEqual('/')
  })

  describe('ナビゲーションメニューのリンク', () => {
    test('メニューボタンを押した場合に、必要なリンクが含まれている', () => {
      const aTagWrappers = wrapper.findAll('.togglable-menu-contents a')
        .wrappers

      navigationLinks.forEach((link, linkIndex) => {
        expect(aTagWrappers[linkIndex].props().to).toEqual(link)
      })
    })

    test('直接表示している場合に、必要なリンクが含まれている', () => {
      const aTagWrappers = wrapper.findAll('.menu-contents a').wrappers

      navigationLinks.forEach((link, linkIndex) => {
        expect(aTagWrappers[linkIndex].props().to).toEqual(link)
      })
    })
  })
})

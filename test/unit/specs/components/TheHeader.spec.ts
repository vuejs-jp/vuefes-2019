import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import VueLazyLoad from 'vue-lazyload'
import TheHeader from '~/components/TheHeader.vue'

const localVue = createLocalVue()

localVue.use(VueLazyLoad)

let wrapper
const navigationLinks = [
  '#the-ticket-section',
  '#the-time-table-section',
  '#the-speaker-list-section',
  '#the-event-section',
  '#the-access-section',
  '#the-sponsor-list-section',
  '#the-staff-list-section'
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
    test('直接表示している場合に、必要なリンクが含まれている', () => {
      const aTagWrappers = wrapper.findAll('.menu-contents a').wrappers

      navigationLinks.forEach((link, linkIndex) => {
        expect(aTagWrappers[linkIndex].attributes('href')).toContain(link)
      })
    })
  })
})

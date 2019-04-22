import { mount, RouterLinkStub } from '@vue/test-utils'
import BaseButton from '~/components/BaseButton.vue'

describe('BaseButton', () => {
  describe('href プロパティを持っているとき', () => {
    test('a タグが返ってくる', () => {
      const wrapper = mount(BaseButton, {
        propsData: {
          href: 'https://example.com/'
        }
      })

      expect(wrapper.is('a')).toBeTruthy()
    })
  })

  describe('to プロパティを持っているとき', () => {
    test('nuxt-link タグが返ってくる', () => {
      const toProp = '/'
      const wrapper = mount(BaseButton, {
        propsData: {
          to: toProp
        },
        stubs: {
          NuxtLink: RouterLinkStub
        }
      })

      expect(wrapper.find('a').props().to).toEqual(toProp)
    })
  })

  describe('href プロパティも to プロパティを持っていないとき', () => {
    test('button タグが返ってくる', () => {
      const wrapper = mount(BaseButton)
      expect(wrapper.is('button')).toBeTruthy()
    })
  })
})

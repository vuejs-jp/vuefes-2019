import { mount } from '@vue/test-utils'
import BaseButton from '~/components/BaseButton.vue'

describe('BaseButton', () => {
  xdescribe('href プロパティを持っているとき', () => {
    xtest('a タグが返ってくる', () => {})
  })

  xdescribe('to プロパティを持っているとき', () => {
    xtest('nuxt-link タグが返ってくる', () => {})
  })

  describe('href プロパティも to プロパティを持っていないとき', () => {
    test('button タグが返ってくる', () => {
      const wrapper = mount(BaseButton)
      expect(wrapper.is('button')).toBeTruthy()
    })
  })
})

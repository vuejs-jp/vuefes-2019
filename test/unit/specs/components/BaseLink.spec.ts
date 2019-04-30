import { mount } from '@vue/test-utils'
import BaseLink from '~/components/BaseLink.vue'

describe('BaseLink', () => {
  test('a タグが返ってくる', () => {
    const wrapper = mount(BaseLink, {
      propsData: {
        href: 'https://example.com/'
      }
    })

    expect(wrapper.is('a')).toBeTruthy()
  })
})

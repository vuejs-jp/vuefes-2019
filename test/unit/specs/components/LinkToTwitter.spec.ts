import { mount } from '@vue/test-utils'
import LinkToTwitter from '~/components/LinkToTwitter.vue'

describe('LinkToTwitter', () => {
  test('https://twitter.com/vuefes へのリンクをレンダリングできる', () => {
    const wrapper = mount(LinkToTwitter)
    expect(wrapper.find('a').attributes('href')).toEqual(
      'https://twitter.com/vuefes'
    )
  })
})

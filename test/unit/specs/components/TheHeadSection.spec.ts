import { mount } from '@vue/test-utils'
import TheHeadSection from '~/components/TheHeadSection.vue'

describe('TheHeadSection', () => {
  test('レンダリングできる', () => {
    const wrapper = mount(TheHeadSection, {
      stubs: {
        'no-ssr': '<div></div>'
      }
    })
    expect(wrapper.find('.the-head-section').isVisible()).toBeTruthy()
  })
})

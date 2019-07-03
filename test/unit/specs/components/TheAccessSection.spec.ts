import { mount } from '@vue/test-utils'
import TheAccessSection from '~/components/TheAccessSection.vue'

describe('TheAccessSection', () => {
  test('レンダリングできる', () => {
    const wrapper = mount(TheAccessSection, {
      stubs: {
        GmapMap: '<div />'
      }
    })
    expect(wrapper.find('.the-access-section').isVisible()).toBeTruthy()
  })
})

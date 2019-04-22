import { mount } from '@vue/test-utils'
import TheCallForPresentersSection from '~/components/TheCallForPresentersSection.vue'

describe('TheCallForPresentersSection', () => {
  test('レンダリングできる', () => {
    const wrapper = mount(TheCallForPresentersSection)
    expect(
      wrapper.find('.the-call-for-presenters-section').isVisible()
    ).toBeTruthy()
  })
})

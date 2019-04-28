import { mount } from '@vue/test-utils'
import TheSponsorSection from '~/components/TheSponsorSection.vue'

describe('TheSponsorSection', () => {
  test('レンダリングできる', () => {
    const wrapper = mount(TheSponsorSection)
    expect(wrapper.find('.the-sponsor-section').isVisible()).toBeTruthy()
  })
})

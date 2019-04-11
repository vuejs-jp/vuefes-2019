import { mount } from '@vue/test-utils'
import TheSpeakerSection from '~/components/TheSpeakerSection.vue'

describe('TheSpeakerSection', () => {
  test('レンダリングできる', () => {
    const wrapper = mount(TheSpeakerSection)
    expect(wrapper.find('.the-speaker-section').isVisible()).toBeTruthy()
  })
})

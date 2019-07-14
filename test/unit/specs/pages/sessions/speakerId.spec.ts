import { mount } from '@vue/test-utils'
import SessionPage from '~/pages/sessions/_speakerId.vue'

describe('SessionPage', () => {
  test('レンダリングできる', () => {
    const wrapper = mount(SessionPage)
    expect(wrapper.find('.session-page').isVisible()).toBeTruthy()
  })
})

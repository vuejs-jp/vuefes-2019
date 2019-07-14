import { mount } from '@vue/test-utils'
import SessionPage from '~/pages/sessions/_speakerId.vue'

describe('SessionPage', () => {
  test.skip('レンダリングできる', () => {
    // FIXME: [Vue warn]: Error in render: "TypeError: Cannot read property '_modulesNamespaceMap' of undefined"
    const wrapper = mount(SessionPage)
    expect(wrapper.find('.session-page').isVisible()).toBeTruthy()
  })
})

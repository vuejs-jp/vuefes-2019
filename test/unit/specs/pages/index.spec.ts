import { mount } from '@vue/test-utils'
import HomePage from '~/pages/index.vue'

describe('HomePage', () => {
  test('レンダリングできる', () => {
    const wrapper = mount(HomePage)
    expect(wrapper.find('.home-page').isVisible()).toBeTruthy()
  })
})

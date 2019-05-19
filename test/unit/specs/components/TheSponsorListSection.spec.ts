import { mount } from '@vue/test-utils'
import TheSponsorListSection from '~/components/TheSponsorListSection.vue'

describe('TheSponsorListSection', () => {
  test('レンダリングできる', () => {
    const wrapper = mount(TheSponsorListSection)
    expect(wrapper.find('.the-sponsor-list-section').isVisible()).toBeTruthy()
  })

  test.todo('スポンサー情報が表示されている')
})

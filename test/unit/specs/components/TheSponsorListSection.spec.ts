import { mount } from '@vue/test-utils'
import TheSponsorListSection from '~/components/TheSponsorListSection.vue'

describe('TheSponsorListSection', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(TheSponsorListSection)
  })

  test('レンダリングできる', () => {
    expect(wrapper.find('.the-sponsor-list-section').isVisible()).toBeTruthy()
  })

  test('スポンサー情報が表示されている', () => {
    expect(wrapper.find('.sponsor').text()).toEqual('aaa')
  })
})

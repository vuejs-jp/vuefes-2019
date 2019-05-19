import { mount } from '@vue/test-utils'
import TheSponsorListSection from '~/components/TheSponsorListSection.vue'

describe('TheSponsorListSection', () => {
  let wrapper

  const sponsorList = [
    { id: 'a', name: 'aaa' },
    { id: 'b', name: 'bbb' },
    { id: 'c', name: 'ccc' }
  ]

  beforeEach(() => {
    wrapper = mount(TheSponsorListSection, {
      propsData: {
        sponsorList
      }
    })
  })

  test('レンダリングできる', () => {
    expect(wrapper.find('.the-sponsor-list-section').isVisible()).toBeTruthy()
  })

  test('スポンサー情報が表示されている', () => {
    expect(wrapper.find('.sponsor').text()).toEqual('aaa')
  })
})

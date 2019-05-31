import { mount } from '@vue/test-utils'
import SponsorGroup from '~/components/SponsorGroup.vue'

describe('SponsorGroup', () => {
  test('レンダリングできる', () => {
    const wrapper = mount(SponsorGroup, {
      propsData: {
        sponsorType: 'gold',
        sponsorList: []
      }
    })

    expect(wrapper.find('.sponsor-group').isVisible()).toBeTruthy()
    expect(wrapper.find('.sponsor-group .heading').text()).toBe('GOLD')
  })
})

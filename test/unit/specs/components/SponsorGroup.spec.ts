import { mount } from '@vue/test-utils'
import SponsorGroup from '~/components/SponsorGroup.vue'

describe('SponsorGroup', () => {
  test('sponsorPlan がクラスに含まれる', () => {
    const wrapper = mount(SponsorGroup, {
      propsData: {
        sponsorPlan: 'gold',
        sponsorList: []
      }
    })

    expect(wrapper.find('.sponsor-group').isVisible()).toBeTruthy()
    expect(wrapper.find('.sponsor-group').classes()).toEqual([
      'sponsor-group',
      'gold'
    ])
    expect(wrapper.find('.sponsor-group .heading').text()).toBe('GOLD')
  })
})

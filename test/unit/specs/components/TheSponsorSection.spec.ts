import { mount, createLocalVue } from '@vue/test-utils'
import VueLazyLoad from 'vue-lazyload'
import TheSponsorSection from '~/components/TheSponsorSection.vue'

const localVue = createLocalVue()

localVue.use(VueLazyLoad)

describe('TheSponsorSection', () => {
  test('レンダリングできる', () => {
    const wrapper = mount(TheSponsorSection, { localVue })
    expect(wrapper.find('.the-sponsor-section').isVisible()).toBeTruthy()
  })
})

import { mount, createLocalVue } from '@vue/test-utils'
import VueLazyLoad from 'vue-lazyload'
import TheSpeakerSection from '~/components/TheSpeakerSection.vue'

const localVue = createLocalVue()

localVue.use(VueLazyLoad)

describe('TheSpeakerSection', () => {
  test('レンダリングできる', () => {
    const wrapper = mount(TheSpeakerSection, { localVue })
    expect(wrapper.find('.the-speaker-section').isVisible()).toBeTruthy()
  })
})

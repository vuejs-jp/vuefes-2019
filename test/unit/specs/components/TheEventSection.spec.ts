import { mount, createLocalVue } from '@vue/test-utils'
import VueLazyLoad from 'vue-lazyload'
import TheEventSection from '~/components/TheEventSection.vue'

const localVue = createLocalVue()

localVue.use(VueLazyLoad)

describe('TheEventSection', () => {
  test('レンダリングできる', () => {
    const wrapper = mount(TheEventSection, { localVue })
    expect(wrapper.find('.the-event-section').isVisible()).toBeTruthy()
  })
})

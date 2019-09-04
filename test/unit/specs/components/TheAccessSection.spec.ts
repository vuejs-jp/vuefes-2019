import { mount, createLocalVue } from '@vue/test-utils'
import VueLazyLoad from 'vue-lazyload'
import TheAccessSection from '~/components/TheAccessSection.vue'

const localVue = createLocalVue()

localVue.use(VueLazyLoad)

describe('TheAccessSection', () => {
  test('レンダリングできる', () => {
    const wrapper = mount(TheAccessSection, { localVue })
    expect(wrapper.find('.the-access-section').isVisible()).toBeTruthy()
  })
})

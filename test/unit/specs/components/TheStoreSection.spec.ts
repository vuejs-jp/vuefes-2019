import { mount, createLocalVue } from '@vue/test-utils'
import VueLazyLoad from 'vue-lazyload'
import TheStoreSection from '~/components/TheStoreSection.vue'

const localVue = createLocalVue()

localVue.use(VueLazyLoad)

describe('TheStoreSection', () => {
  test('レンダリングできる', () => {
    const wrapper = mount(TheStoreSection, { localVue })
    expect(wrapper.find('.the-store-section').isVisible()).toBeTruthy()
  })
})

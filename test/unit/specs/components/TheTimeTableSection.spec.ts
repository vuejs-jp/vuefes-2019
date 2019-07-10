import { mount, createLocalVue } from '@vue/test-utils'
import VueLazyLoad from 'vue-lazyload'
import TheTimeTableSection from '~/components/TheTimeTableSection.vue'

const localVue = createLocalVue()

localVue.use(VueLazyLoad)

describe('TheTimeTableSection', () => {
  test('レンダリングできる', () => {
    const wrapper = mount(TheTimeTableSection, { localVue })
    expect(wrapper.find('.the-time-table-section').isVisible()).toBeTruthy()
  })
})

import { mount, createLocalVue } from '@vue/test-utils'
import VueLazyLoad from 'vue-lazyload'
import TheSpeakerListSection from '~/components/TheSpeakerListSection.vue'

const localVue = createLocalVue()

localVue.use(VueLazyLoad)

describe('TheSpeakerListSection', () => {
  test.skip('レンダリングできる', () => {
    // FIXME: TypeError: Cannot read property '_modulesNamespaceMap' of undefined
    const wrapper = mount(TheSpeakerListSection, { localVue })
    expect(wrapper.find('.the-speaker-list-section').isVisible()).toBeTruthy()
  })
})

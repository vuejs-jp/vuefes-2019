import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import SessionPage from '~/pages/sessions/_speakerId.vue'
import createFullStore from '../../utils/createFullStore'

const localVue = createLocalVue()

localVue.use(Vuex)

const store = createFullStore(Vuex)

describe('SessionPage', () => {
  test.skip('レンダリングできる', () => {
    // FIXME: [Vue warn]: Error in render: "Error: Session Not Found"
    // TODO: asyncData の Context.params を指定する方法を調べる
    const wrapper = mount(SessionPage, {
      localVue,
      store
    })
    expect(wrapper.find('.session-page').isVisible()).toBeTruthy()
  })
})

import { mount, RouterLinkStub, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import createFullStore from '../../utils/createFullStore'
import sessions from '../../../__mocks__/sessions'

// @ts-ignore error TS2307: Cannot find module
import Session from '~/components/TheTimeTableSection/Session.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

const store = createFullStore(Vuex)

describe('Session', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Session, {
      localVue,
      store,
      propsData: {
        session: sessions[0]
      },
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
  })

  test('Session 情報を表示できる', () => {
    expect(wrapper.find('.session').text()).toContain(sessions[0].fields.title)
  })

  test('Speaker 情報を表示できる', () => {
    const speaker = store.getters['speakers/find'](
      sessions[0].fields.speakers[0].sys.id
    )

    expect(wrapper.find('.speaker-name').text()).toContain(speaker.fields.name)
  })
})

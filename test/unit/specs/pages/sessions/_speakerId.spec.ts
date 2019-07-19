import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import createFullStore from '../../utils/createFullStore'
import SessionPage from '~/pages/sessions/_speakerId.vue'

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

    // Nuxt アプリケーションを Jest でテストする - アクトインディ開発者ブログ
    // https://tech.actindi.net/2019/07/12/083702
    //
    // FIXME: error TS2345: Argument of type '{ params: { speakerId: string; }; }' is not assignable to parameter of type 'Context'.
    // Type '{ params: { speakerId: string; }; }' is missing the following properties from type 'Context': app, isClient, isServer, isStatic, and 13 more.
    //
    // const data = wrapper.vm.$options.asyncData({
    //   params: { speakerId: 'yyx990803' }
    // })
    //
    // wrapper.setData(data)

    expect(wrapper.find('.session-page').isVisible()).toBeTruthy()
  })
})

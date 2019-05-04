import { createLocalVue, shallowMount } from '@vue/test-utils'
import fetchMock from 'fetch-mock'
import flushPromises from 'flush-promises'
import ValidationProvider, { Validator } from 'vee-validate'
import ContactForm from '~/components/ContactForm.vue'
import dictionary from '~/plugins/validateDictionary'

describe('ContactForm.Vue', () => {
  let wrapper
  const localVue = createLocalVue()

  beforeAll(() => {
    localVue.use(ValidationProvider, { inject: false })
    Validator.localize('ja', dictionary)
  })

  beforeEach(() => {
    wrapper = shallowMount(ContactForm, {
      sync: false,
      localVue
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  test('レンダリングできる', () => {
    expect(wrapper.find('.container').isVisible()).toBeTruthy()
    expect(wrapper.find('#name').exists()).toBeTruthy()
    expect(wrapper.find('#email').exists()).toBeTruthy()
    expect(wrapper.find('#organization').exists()).toBeTruthy()
    expect(wrapper.find('#message').exists()).toBeTruthy()
    expect(wrapper.find('.submit-button').exists()).toBeTruthy()
    expect(wrapper.vm.buttomValue).toBe('送信する')
  })

  describe('フォーム操作', () => {
    test('名前が未入力の場合、エラーが表示される', async () => {
      const error = wrapper.find('#name-error')
      expect(error.text()).toBe('')

      wrapper.find('#name').trigger('blur')
      await flushPromises()

      expect(error.text()).toBe('名前を正しく入力してください')
    })

    test('名前が入力されている場合、エラーが表示されない', async () => {
      const error = wrapper.find('#name-error')
      expect(error.text()).toBe('')

      wrapper.find('#name').setValue('test')
      wrapper.find('#name').trigger('blur')
      await flushPromises()

      expect(error.text()).toBe('')
    })

    test('メールアドレスが未入力の場合、エラーが表示される', async () => {
      const error = wrapper.find('#email-error')
      expect(error.text()).toBe('')

      wrapper.find('#email').trigger('blur')
      await flushPromises()

      expect(error.text()).toBe('メールアドレスを正しく入力してください')
    })

    test('入力されたメールアドレスが不正な形式の場合、エラーが表示される', async () => {
      const error = wrapper.find('#email-error')
      expect(error.text()).toBe('')

      wrapper.find('#email').setValue('email')
      wrapper.find('#email').trigger('blur')
      await flushPromises()

      expect(error.text()).toBe('メールアドレスを正しく入力してください')
    })

    test('メールアドレスが入力されている場合、エラーが表示されない', async () => {
      const error = wrapper.find('#email-error')
      expect(error.text()).toBe('')

      wrapper.find('#email').setValue('email@email.com')
      wrapper.find('#email').trigger('blur')
      await flushPromises()

      expect(error.text()).toBe('')
    })

    test('内容が未入力の場合、エラーが表示される', async () => {
      const error = wrapper.find('#message-error')
      expect(error.text()).toBe('')

      wrapper.find('#message').trigger('blur')
      await flushPromises()

      expect(error.text()).toBe('内容を正しく入力してください')
    })

    test('内容が入力されている場合、エラーが表示されない', async () => {
      const error = wrapper.find('#message-error')
      expect(error.text()).toBe('')

      const message = wrapper.find('#message')
      message.setValue('Hello from test')
      message.trigger('blur')
      await flushPromises()

      expect(message.element.value).toEqual('Hello from test')
      expect(error.text()).toBe('')
    })

    describe('フォーム送信', () => {
      const body = {
        'form-name': 'contact',
        name: 'test',
        email: 'vuefes@test.com',
        organization: 'vuefesJp',
        message: 'Hello from test'
      }

      afterEach(() => {
        fetchMock.restore()
      })

      test('送信ボタン押下でhandleSubmitが呼ばれる', () => {
        const handleSubmitMock = jest.fn()
        wrapper.setMethods({ handleSubmit: handleSubmitMock })

        wrapper.find('form').trigger('submit.prevent')
        expect(handleSubmitMock).toBeCalled()
      })

      test('必須項目を入力していない状態で送信ボタン押下した場合、バリデーションでエラーになる', async () => {
        wrapper.find('form').trigger('submit.prevent')
        await flushPromises()

        expect(wrapper.vm.errors.any()).toEqual(true)
      })

      test('フォームをすべて埋めた状態で送信ボタン押下した場合、送信に成功する', async () => {
        wrapper.find('#name').setValue(body.name)
        wrapper.find('#email').setValue(body.email)
        wrapper.find('#organization').setValue(body.organization)
        wrapper.find('#message').setValue(body.message)
        wrapper.setMethods({
          createRequestBody: jest.fn(function() {
            return body
          })
        })
        fetchMock.post('/2019/contact', {
          status: 200
        })

        wrapper.find('form').trigger('submit.prevent')
        await flushPromises()

        expect(wrapper.vm.errors.any()).toEqual(false)
        expect(wrapper.vm.buttomValue).toBe('送信しました')
      })

      test('送信に失敗した場合、エラーが表示される', async () => {
        wrapper.find('#name').setValue(body.name)
        wrapper.find('#email').setValue(body.email)
        wrapper.find('#organization').setValue(body.organization)
        wrapper.find('#message').setValue(body.message)
        wrapper.setMethods({
          createRequestBody: jest.fn(function() {
            return body
          })
        })
        fetchMock.post(
          '/2019/contact',
          Promise.reject(new Error('something bad happened'))
        )

        wrapper.find('form').trigger('submit.prevent')
        await flushPromises()

        expect(wrapper.vm.errors.any()).toEqual(false)
        expect(wrapper.vm.buttomValue).toBe('送信に失敗しました')
      })
    })
  })
})

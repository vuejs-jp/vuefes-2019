import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'

const dict = {
  custom: {
    email: {
      required: 'メールアドレスを正しく入力してください',
      email: 'メールアドレスを正しく入力してください'
    },
    name: {
      required: '名前を正しく入力してください'
    },
    message: {
      required: '内容を正しく入力してください'
    }
  }
}

Vue.use(VeeValidate, { inject: false })
Validator.localize('ja', dict)

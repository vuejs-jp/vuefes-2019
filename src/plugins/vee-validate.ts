import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import dictionary from './validateDictionary'

Vue.use(VeeValidate, { inject: false })
Validator.localize('ja', dictionary)

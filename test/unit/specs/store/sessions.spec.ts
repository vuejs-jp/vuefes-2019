import { state, getters } from '~/store/sessions'

describe('getters', () => {
  describe('sessionBySpeakerId', () => {
    test('Session を speakerId をもとに取得できる', () => {
      const session = getters.sessionBySpeakerId(state())('yyx990803')
      expect(session.speakerId).toBe('yyx990803')
    })
  })
})

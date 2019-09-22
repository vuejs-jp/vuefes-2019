import { state, getters } from '~/store/localSessions'

describe('getters', () => {
  describe('sessionBySpeakerId', () => {
    test('LocalSession を speakerId をもとに取得できる', () => {
      const session = getters.sessionBySpeakerId(state())('yyx990803')
      expect(session.speakerId).toBe('yyx990803')
    })
  })
})

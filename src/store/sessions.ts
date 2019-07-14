type Session = {
  speakerId: string
  title: string
  paragraphs: string[]
  ogImage: string
}

type State = {
  sessions: Session[]
}

export const state = (): State => ({
  sessions: [
    {
      speakerId: 'yyx990803',
      title: 'Keynote',
      paragraphs: ['Keynote'],
      ogImage: require('~/assets/images/session-og-images/default.png')
    }
  ]
})

export const getters = {
  sessionBySpeakerId: (state: State) => (speakerId: string): Session => {
    const session = state.sessions.find(
      session => session.speakerId === speakerId
    )
    if (session) return session
    throw new Error('Session Not Found')
  }
}

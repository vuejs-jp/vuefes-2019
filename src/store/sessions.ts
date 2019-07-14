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
      ogImage: 'default.png'
    },
    {
      speakerId: 'Atinux',
      title: 'Introduction to Nuxt 3',
      paragraphs: [
        'This talk will introduce Nuxt 3, what are the changes and what benefits it brings for Web development and Developer Experience.'
      ],
      ogImage: 'Atinux.jpg'
    },
    {
      speakerId: 'alexchopin',
      title: "What's Nuxt?",
      paragraphs: [
        'Discover the story and philosophy of Nuxt.js and his team. Where does it come from and where do we wish to go in the future.'
      ],
      ogImage: 'alexchopin.jpg'
    },
    {
      speakerId: 'octref',
      title: 'Vue Tooling について語るときに僕の語ること',
      paragraphs: [
        'With over two million installs, today Vetur is the most popular editor tooling plugin for editing Vue single file components.',
        "This talk will starts with an overview of Vetur's features and then dive deep into specific features such as auto completion and type checking in Vue templates.",
        "Besides, I'll explain Vetur's role in the overall Vue ecosystem, especially in improving the TypeScript integration. Finally, I'll talk about how Vetur could offer next generation development experience from its unique position."
      ],
      ogImage: 'octref.jpg'
    },
    {
      speakerId: 'jlooper',
      title: 'TBD',
      paragraphs: ['TBD'],
      ogImage: 'jlooper.jpg'
    },
    {
      speakerId: 'chrisvfritz',
      title: 'Enterprise Vue: Patterns That Scale',
      paragraphs: [
        "Thinking about or currently using Vue in a very large application, potentially also with a large, diverse team? Or are you integrating Vue into a legacy app or complex architecture? Eager to learn how to avoid common mistakes, as well as battle-tested patterns to help you build an application you won't dread maintaining? As an enterprise consultant, member of the Vue team, and trained educator, Chris will share the most important lessons he's learned in his work."
      ],
      ogImage: 'chrisvfritz.jpg'
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

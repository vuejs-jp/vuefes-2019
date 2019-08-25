'use strict'

require('dotenv').config()

const contentful = require('contentful-management')
const SPACE_ID = process.env.CTF_SPACE_ID
const PERSONAL_ACCESS_TOKEN = process.env.CTF_PERSONAL_ACCESS_TOKEN

const client = contentful.createClient({
  accessToken: PERSONAL_ACCESS_TOKEN
})

const data = {
  title: { 'en-US': 'Vetur クリエーター' },
  name: { 'en-US': 'Pine Wu' },
  twitter: { 'en-US': 'octref' },
  github: { 'en-US': 'octref' },
  description: {
    'en-US':
      'Microsoft で Visual Studio Code（VS Code）の開発に携わっています。VS Code の有名な Vue 拡張機能 Vetur の作者でもあります。Vetur という名前は、菅野よう子さんの歌『Von』に由来しています。好きなマンガは『バガボンド』で、時間があれば何度も読んでいます。'
  }
}

client
  .getSpace(SPACE_ID)
  .then(space => space.getEnvironment('master'))
  .then(environment =>
    environment.createEntry('speaker', {
      fields: data
    })
  )
  .then(entry => {
    console.log(entry)
  })
  .catch(error => {
    console.error(error)
  })

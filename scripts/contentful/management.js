'use strict'

require('dotenv').config()

const contentful = require('contentful-management')
const SPACE_ID = process.env.CTF_SPACE_ID
const PERSONAL_ACCESS_TOKEN = process.env.CTF_PERSONAL_ACCESS_TOKEN

const client = contentful.createClient({
  accessToken: PERSONAL_ACCESS_TOKEN
})

client.getSpace(SPACE_ID).then(space => {
  space
    .getEntries()
    .then(entries => {
      console.log(entries)
    })
    .catch(error => {
      console.error(error)
    })
})

const contentful = require('contentful')

const config = {
  space: process.env.ctfSpaceId,
  accessToken: process.env.ctfCdaAccessToken
}

export const createClient = () => {
  return contentful.createClient(config)
}

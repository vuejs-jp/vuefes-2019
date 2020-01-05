const marked = require('marked')

// https://marked.js.org/#/USING_ADVANCED.md#options
marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: null,
  pedantic: false,
  gfm: true,
  breaks: false,

  // Warning: This feature is deprecated and it should NOT be used as it cannot be considered secure.
  // Instead use a sanitize library, like DOMPurify (recommended), sanitize-html or insane on the output HTML!
  sanitize: false,

  smartLists: true,
  smartypants: false,
  xhtml: false
})

export default marked

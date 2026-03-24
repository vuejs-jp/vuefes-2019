type TypekitWindow = Window & {
  Typekit?: {
    load: (config: {
      kitId: string
      scriptTimeout: number
      async: boolean
    }) => void
  }
}

export default defineNuxtPlugin(() => {
  const windowWithTypekit = window as TypekitWindow

  if (document.querySelector('script[data-typekit-loader="true"]')) {
    return
  }

  const config = {
    kitId: 'ecl1lua',
    scriptTimeout: 3000,
    async: true,
  }

  const root = document.documentElement
  const timer = window.setTimeout(() => {
    root.className =
      root.className.replace(/\bwf-loading\b/g, '') + ' wf-inactive'
  }, config.scriptTimeout)

  const script = document.createElement('script')
  const firstScript = document.getElementsByTagName('script')[0]
  let isLoaded = false

  root.className += ' wf-loading'
  script.src = `https://use.typekit.net/${config.kitId}.js`
  script.async = true
  script.dataset.typekitLoader = 'true'

  script.addEventListener('load', () => {
    if (isLoaded) {
      return
    }

    isLoaded = true
    window.clearTimeout(timer)

    try {
      windowWithTypekit.Typekit?.load(config)
    } catch {
      // Ignore Typekit loading failures and keep the page usable.
    }
  })

  firstScript?.parentNode?.insertBefore(script, firstScript)
})

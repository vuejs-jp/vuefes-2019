interface Window {
  Typekit: any
}

;(function(d) {
  const config = {
    kitId: 'ecl1lua',
    scriptTimeout: 3000,
    async: true
  }

  const h: any = d.documentElement

  const t = setTimeout(function() {
    h.className = h.className.replace(/\bwf-loading\b/g, '') + ' wf-inactive'
  }, config.scriptTimeout)

  const tk: any = d.createElement('script')
  let f = false
  const s: any = d.getElementsByTagName('script')[0]
  let a

  h.className += ' wf-loading'
  tk.src = 'https://use.typekit.net/' + config.kitId + '.js'
  tk.async = true

  tk.onload = tk.onreadystatechange = function() {
    a = this.readyState

    if (f || (a && a !== 'complete' && a !== 'loaded')) {
      return
    }

    f = true
    clearTimeout(t)

    try {
      window.Typekit.load(config)
    } catch (e) {}
  }

  s.parentNode.insertBefore(tk, s)
})(document)

import parseurl from 'parseurl'

export default desiredContextRoot =>
  function projectHooksRouteRedirectPortal(req, res, next) {
    const desiredContextRootRegExp = new RegExp(`^${desiredContextRoot}`)
    const _parsedUrl = Reflect.has(req, '_parsedUrl') ? req._parsedUrl : null
    const url = _parsedUrl !== null ? _parsedUrl : parseurl(req)
    const startsWithDesired = desiredContextRootRegExp.test(url.pathname)
    const isNotProperContextRoot = desiredContextRoot !== url.pathname
    if (isNotProperContextRoot && startsWithDesired === false) {
      const pathname = url.pathname === null ? '' : url.pathname
      const search = url.search === null ? '' : url.search
      const Location = desiredContextRoot + pathname + search
      res.writeHead(302, {
        Location
      })
      res.end()
    }
    next()
  }

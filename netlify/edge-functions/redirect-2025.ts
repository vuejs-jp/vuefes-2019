export default (request: Request) => {
  const url = new URL(request.url)
  const path = url.pathname

  // Skip processing for past years (let netlify.toml redirects handle them)
  const pastYears = [
    '/2018',
    '/2019',
    '/2020',
    '/2022',
    '/2023',
    '/2024',
    '/2025'
  ]
  if (pastYears.some(year => path.startsWith(year))) {
    // Let the request pass through to be handled by netlify.toml redirects
    return
  }

  // Handle all other paths - redirect to /2025/*
  const redirectPath = `/2025${path}${url.search}`
  const redirectUrl = new URL(redirectPath, request.url)

  return Response.redirect(redirectUrl, 301)
}

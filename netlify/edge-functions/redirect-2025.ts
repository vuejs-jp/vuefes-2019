export default async (request: Request) => {
  const url = new URL(request.url)
  const path = url.pathname

  // Skip processing for past years (let netlify.toml redirects handle them)
  const pastYears = ['/2018', '/2019', '/2020', '/2022', '/2023', '/2024']
  if (pastYears.some(year => path.startsWith(year))) {
    // Let the request pass through to be handled by netlify.toml redirects
    return
  }

  // Handle /2025/* paths - proxy to external site
  if (path.startsWith('/2025/')) {
    const targetUrl = `https://vuefes-2025.netlify.app${path}${url.search}`

    try {
      const response = await fetch(targetUrl, {
        method: request.method,
        headers: request.headers,
        body:
          request.method !== 'GET' && request.method !== 'HEAD'
            ? request.body
            : undefined
      })

      // Create new headers without certain headers that shouldn't be passed through
      const headers = new Headers(response.headers)
      headers.delete('x-frame-options')
      headers.delete('content-security-policy')

      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers
      })
    } catch (error) {
      console.error('Proxy error:', error)
      return new Response('Proxy Error', { status: 502 })
    }
  }

  // Handle all other paths - redirect to /2025/*
  const redirectPath = `/2025${path}${url.search}`
  const redirectUrl = new URL(redirectPath, request.url)

  return Response.redirect(redirectUrl, 301)
}

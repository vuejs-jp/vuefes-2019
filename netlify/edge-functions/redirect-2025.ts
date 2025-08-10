export default async (request: Request) => {
  const url = new URL(request.url)
  const path = url.pathname

  const targetUrl = `https://vuefes-2025.netlify.app${path}${url.search}`

  try {
    // Create headers for the fetch request
    const fetchHeaders = new Headers(request.headers)
    // Ensure cookies are forwarded
    const cookies = request.headers.get('cookie')
    if (cookies) {
      fetchHeaders.set('cookie', cookies)
    }

    const response = await fetch(targetUrl, {
      method: request.method,
      headers: fetchHeaders,
      body:
        request.method !== 'GET' && request.method !== 'HEAD'
          ? request.body
          : undefined,
      credentials: 'include' // Include cookies in the request
    })

    // Create new headers for the response
    const responseHeaders = new Headers(response.headers)

    // Remove headers that shouldn't be passed through
    responseHeaders.delete('x-frame-options')
    responseHeaders.delete('content-security-policy')

    // Ensure Set-Cookie headers are properly handled
    const setCookieHeaders = response.headers.getSetCookie()
    if (setCookieHeaders && setCookieHeaders.length > 0) {
      responseHeaders.delete('set-cookie')
      setCookieHeaders.forEach(cookie => {
        // Adjust cookie domain if needed
        const adjustedCookie = cookie.replace(
          /domain=\.?vuefes-2025\.netlify\.app/gi,
          `domain=${new URL(request.url).hostname}`
        )
        responseHeaders.append('set-cookie', adjustedCookie)
      })
    }

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: responseHeaders
    })
  } catch (error) {
    console.error('Proxy error:', error)
    return new Response('Proxy Error', { status: 502 })
  }
}

type PageMetadataOptions = {
  path: string
  title: string
  description: string
  image?: string
  twitterCard?: 'summary' | 'summary_large_image'
}

const siteRoot = 'https://vuefes.jp'

function withBasePath(path: string): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return normalizedPath.startsWith('/2019/')
    ? normalizedPath
    : `/2019${normalizedPath}`
}

function toAbsoluteUrl(path: string): string {
  return new URL(withBasePath(path), siteRoot).toString()
}

export function usePageMetadata({
  path,
  title,
  description,
  image,
  twitterCard = 'summary',
}: PageMetadataOptions) {
  const url = toAbsoluteUrl(path)

  useHead({
    title,
    meta: [
      { name: 'description', content: description },
      { name: 'og:url', content: url },
      { name: 'og:title', content: title },
      { name: 'og:description', content: description },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:card', content: twitterCard },
      ...(image
        ? [
            { name: 'og:image', content: image },
            { name: 'og:image:secure_url', content: image },
            { name: 'twitter:image', content: image },
          ]
        : []),
    ],
  })
}

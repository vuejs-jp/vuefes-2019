const assetModules = import.meta.glob(
  '../assets/images/**/*.{png,jpg,jpeg,svg}',
  {
    eager: true,
    import: 'default',
    query: '?url',
  },
) as Record<string, string>

const assetImageMap = Object.fromEntries(
  Object.entries(assetModules).map(([path, url]) => [
    path.replace('../assets/images/', ''),
    url,
  ]),
)

export function getAssetImage(path: string): string {
  const url = assetImageMap[path]

  if (!url) {
    throw new Error(`Unknown asset image: ${path}`)
  }

  return url
}

export function createSrcSet(path: string, retinaPath?: string): string {
  if (!retinaPath) {
    return getAssetImage(path)
  }

  return `${getAssetImage(path)}, ${getAssetImage(retinaPath)} 2x`
}

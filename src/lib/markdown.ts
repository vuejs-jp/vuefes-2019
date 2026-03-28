import { marked } from 'marked'

marked.use({
  gfm: true,
  breaks: false,
})

export function renderMarkdown(value: string): string {
  return marked.parse(value, { async: false }) as string
}

import type { IFrame, IOptions } from 'sanitize-html'
import type { SanitizeHtmlFn } from '../models/SanitizeHtml'

let sanitizeHtmlFn: SanitizeHtmlFn | null = null

const getSanitizeHtmlFn = async (): Promise<SanitizeHtmlFn> => {
  if (sanitizeHtmlFn) return sanitizeHtmlFn
  const mod = await import('sanitize-html')
  sanitizeHtmlFn = ((mod as unknown as { default?: SanitizeHtmlFn }).default ?? (mod as unknown as SanitizeHtmlFn))
  return sanitizeHtmlFn
}

export const defaultSanitizeHtmlOptions: IOptions = {
  allowedTags: [
    'a',
    'b',
    'blockquote',
    'br',
    'code',
    'div',
    'em',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'hr',
    'i',
    'li',
    'ol',
    'p',
    'pre',
    'span',
    'strong',
    'u',
    'ul'
  ],
  allowedAttributes: {
    a: ['href', 'target', 'rel']
  },
  allowedSchemes: ['http', 'https', 'mailto', 'tel'],
  allowedSchemesAppliedToAttributes: ['href'],
  allowProtocolRelative: false,
  exclusiveFilter: (frame: IFrame) => {
    if (frame.tag === 'a' && !frame.attribs.href) return true
    return false
  }
}

export const sanitizeHtmlServer = async (html: string, options: IOptions = defaultSanitizeHtmlOptions): Promise<string> => {
  const sanitizeHtml = await getSanitizeHtmlFn()
  return sanitizeHtml(html, options).trim()
}

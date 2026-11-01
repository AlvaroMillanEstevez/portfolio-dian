import type { Lang } from '../data/types'

const locales: Record<Lang, string> = { en: 'en-GB', es: 'es-ES' }

/** 1_240_000 → "1.2M" (en) / "1,2 M" (es). en-US because en-GB writes "1.2m". */
export function compact(value: number, lang: Lang) {
  return new Intl.NumberFormat(lang === 'en' ? 'en-US' : locales[lang], { notation: 'compact', maximumFractionDigits: 1 }).format(value)
}

export function number(value: number, lang: Lang) {
  return new Intl.NumberFormat(locales[lang], { maximumFractionDigits: 1 }).format(value)
}

export function percent(value: number, lang: Lang, signed = false) {
  const formatted = new Intl.NumberFormat(locales[lang], { maximumFractionDigits: 1 }).format(value)
  const sign = signed && value > 0 ? '+' : ''
  return lang === 'es' ? `${sign}${formatted}\u00a0%` : `${sign}${formatted}%`
}

export function money(value: number, currency: string, lang: Lang) {
  return new Intl.NumberFormat(locales[lang], { style: 'currency', currency, maximumFractionDigits: 0 }).format(value)
}

/** Public URL of a file in public/, respecting the GitHub Pages base path. */
export function asset(path: string) {
  return `${import.meta.env.BASE_URL}${path}`
}

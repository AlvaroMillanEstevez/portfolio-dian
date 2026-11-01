import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { site } from '../data/profile'
import type { Lang, Localized, Variant } from '../data/types'

type Settings = {
  lang: Lang
  setLang: (lang: Lang) => void
  variant: Variant
  setVariant: (variant: Variant) => void
  /** Picks the current language from a Localized text. */
  t: (text: Localized) => string
}

const SettingsContext = createContext<Settings | null>(null)

// Per-visitor conveniences only; the site works the same if storage is blocked.
function readStored<T extends string>(key: string, allowed: readonly T[]): T | null {
  try {
    const value = localStorage.getItem(key)
    return allowed.includes(value as T) ? (value as T) : null
  } catch {
    return null
  }
}

function store(key: string, value: string) {
  try {
    localStorage.setItem(key, value)
  } catch {
    /* storage unavailable: ignore */
  }
}

function initialLang(): Lang {
  const fromUrl = new URLSearchParams(window.location.search).get('lang')
  if (fromUrl === 'en' || fromUrl === 'es') return fromUrl
  return readStored('lang', ['en', 'es'] as const) ?? site.defaultLang
}

function initialVariant(): Variant {
  if (!site.reviewMode) return site.defaultVariant
  return readStored('variant', ['sol', 'editorial'] as const) ?? site.defaultVariant
}

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)
  const [variant, setVariantState] = useState<Variant>(initialVariant)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    document.documentElement.dataset.variant = variant
  }, [variant])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    store('lang', next)
  }, [])

  const setVariant = useCallback((next: Variant) => {
    setVariantState(next)
    store('variant', next)
  }, [])

  const value = useMemo<Settings>(
    () => ({ lang, setLang, variant, setVariant, t: (text) => text[lang] }),
    [lang, setLang, variant, setVariant],
  )

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>
}

export function useSettings() {
  const ctx = useContext(SettingsContext)
  if (!ctx) throw new Error('useSettings must be used inside SettingsProvider')
  return ctx
}

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { identity, sections, site, ui } from '../data/profile'
import type { Lang, Variant } from '../data/types'
import { useSettings } from '../lib/settings'

/** Fixed band that marks the whole site as a demo. */
export function DemoBand() {
  const { t } = useSettings()
  if (!site.demo) return null
  return (
    <div className="fixed inset-x-0 top-0 z-50 h-7 bg-ink text-center text-[11px] leading-7 font-medium tracking-wide text-paper">
      {t(ui.demoBand)}
    </div>
  )
}

export function LangSwitch({ className = '' }: { className?: string }) {
  const { lang, setLang, t } = useSettings()
  return (
    <div role="group" aria-label={t(ui.language)} className={`inline-flex rounded-full border border-line p-0.5 text-xs font-semibold ${className}`}>
      {(['en', 'es'] as Lang[]).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`rounded-full px-2.5 py-1 uppercase transition-colors ${lang === code ? 'bg-ink text-paper' : 'text-muted hover:text-ink'}`}
        >
          {code}
        </button>
      ))}
    </div>
  )
}

export function Header() {
  const { t } = useSettings()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const links = sections.filter((s) => s.enabled && s.nav)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 z-40 transition-colors duration-300 ${site.demo ? 'top-7' : 'top-0'} ${
        scrolled || open ? 'border-b border-line bg-paper/90 backdrop-blur-md' : ''
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#hero" className="display text-xl">
          {identity.firstName}
          <span className="text-accent">.</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm lg:flex" aria-label="Main">
          {links.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="text-muted transition-colors hover:text-ink">
              {t(s.nav!)}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LangSwitch />
          <a href="#contact" className="btn btn-primary hidden h-9 px-4 text-sm sm:inline-flex">
            {t(ui.workWithMe)}
          </a>
          <button
            type="button"
            className="grid size-9 place-items-center rounded-full border border-line lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={t(open ? ui.close : ui.menu)}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-menu" className="border-t border-line px-4 pb-6 lg:hidden" aria-label="Mobile">
          <ul className="grid gap-1 pt-3">
            {links.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} onClick={() => setOpen(false)} className="display block py-2 text-2xl">
                  {t(s.nav!)}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary mt-4 w-full">
            {t(ui.workWithMe)}
          </a>
        </nav>
      )}
    </header>
  )
}

/** Style picker, only in review mode, so Dian can compare the two designs. */
export function VariantPicker() {
  const { variant, setVariant } = useSettings()
  if (!site.reviewMode) return null
  return (
    <div
      role="group"
      aria-label={`${ui.review.style.es} · ${ui.review.style.id}`}
      className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full border border-review/40 bg-paper/95 p-1 text-xs shadow-lg backdrop-blur"
    >
      <span className="px-2 font-semibold text-review">{ui.review.style.es}</span>
      {(Object.keys(ui.review.variants) as Variant[]).map((key) => (
        <button
          key={key}
          type="button"
          onClick={() => setVariant(key)}
          aria-pressed={variant === key}
          className={`rounded-full px-3 py-1.5 font-medium whitespace-nowrap ${variant === key ? 'bg-review text-white' : 'text-ink hover:bg-sand'}`}
        >
          {ui.review.variants[key].es}
        </button>
      ))}
    </div>
  )
}

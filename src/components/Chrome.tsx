import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { identity, sections, site, ui } from '../data/profile'
import type { Lang } from '../data/types'
import { Monogram } from './Brand'
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
          className={`rounded-full px-2.5 py-1 uppercase transition-colors ${lang === code ? 'bg-accent text-paper' : 'text-muted hover:text-accent'}`}
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
  const active = useActiveSection(links.map((s) => s.id))

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
        <a href="#hero" className="flex items-center gap-2.5" aria-label={`${identity.firstName} ${identity.lastName}`}>
          <Monogram tile className="size-9" />
          <span className="display text-xl text-accent">
            {identity.firstName} {identity.lastName}
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm md:flex" aria-label="Main">
          {links.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-current={active === s.id ? 'true' : undefined}
              className={`border-b-2 py-1 transition-colors ${active === s.id ? 'border-accent font-semibold text-accent' : 'border-transparent text-ink/75 hover:text-accent'}`}
            >
              {t(s.nav!)}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LangSwitch />
          <button
            type="button"
            className="grid size-9 place-items-center rounded-full border border-line md:hidden"
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
        <nav id="mobile-menu" className="border-t border-line px-4 pb-6 md:hidden" aria-label="Mobile">
          <ul className="grid gap-1 pt-3">
            {links.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} onClick={() => setOpen(false)} className="display block py-2 text-2xl text-accent">
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

/** Id of the menu section currently in view, for the underline in the menu. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0])
  const key = ids.join(' ')
  useEffect(() => {
    const list = key.split(' ')
    const onScroll = () => {
      // The last section whose top has passed the upper third of the screen.
      let current = list[0]
      for (const id of list) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < window.innerHeight / 3) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [key])
  return active
}

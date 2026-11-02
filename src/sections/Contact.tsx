import { useState, type FormEvent } from 'react'
import { Info } from 'lucide-react'
import { contact, platforms, ui } from '../data/profile'
import type { SectionConfig } from '../data/types'
import { ExternalLink } from '../components/ExternalLink'
import { Heading, Section } from '../components/Section'
import { SocialIcon } from '../components/SocialIcon'
import { useSettings } from '../lib/settings'

type Field = 'name' | 'company' | 'email' | 'budget' | 'type' | 'message'
const maxLength: Record<Field, number> = { name: 80, company: 100, email: 120, budget: 40, type: 40, message: 2000 }
const required: Field[] = ['name', 'email', 'type', 'message']
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function Contact({ config }: { config: SectionConfig }) {
  const { t } = useSettings()
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({})
  const [sent, setSent] = useState(false)

  // Demo: validates like the real form but sends nothing.
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    if (data.get('website')) return // honeypot filled: a bot
    const next: Partial<Record<Field, string>> = {}
    for (const field of required) {
      if (!String(data.get(field) ?? '').trim()) next[field] = t(ui.contact.required)
    }
    const email = String(data.get('email') ?? '').trim()
    if (email && !emailPattern.test(email)) next.email = t(ui.contact.invalidEmail)
    setErrors(next)
    if (Object.keys(next).length === 0) {
      setSent(true)
      e.currentTarget.reset()
    }
  }

  const field = (name: Field) => ({
    id: `f-${name}`,
    name,
    maxLength: maxLength[name],
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `f-${name}-error` : undefined,
    className: 'input',
  })

  const label = (name: Field, text: string) => (
    <label htmlFor={`f-${name}`} className="mb-1.5 block text-sm font-medium">
      {text}
      {required.includes(name) && <span className="text-accent"> *</span>}
    </label>
  )

  const error = (name: Field) =>
    errors[name] && (
      <p id={`f-${name}-error`} className="mt-1 text-xs text-error">
        {errors[name]}
      </p>
    )

  return (
    <Section config={config} className="py-20 sm:py-28">
      <div data-reveal className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Heading title={t(ui.contact.title)} />
          <p className="text-lg leading-relaxed text-ink/85">{t(ui.contact.intro)}</p>
          <p className="mt-8 text-sm text-muted">{t(ui.contact.elsewhere)}</p>
          <ul className="mt-3 flex gap-2">
            {platforms.map((p) => (
              <li key={p.id}>
                <ExternalLink href={p.url} label={p.name} className="social-tile">
                  <SocialIcon id={p.id} className="size-[18px]" />
                </ExternalLink>
              </li>
            ))}
          </ul>
        </div>
        <form noValidate onSubmit={onSubmit} className="card grid gap-5 p-6 sm:grid-cols-2 sm:p-8">
          <div>
            {label('name', t(ui.contact.name))}
            <input {...field('name')} autoComplete="name" />
            {error('name')}
          </div>
          <div>
            {label('company', t(ui.contact.company))}
            <input {...field('company')} autoComplete="organization" />
          </div>
          <div className="sm:col-span-2">
            {label('email', t(ui.contact.email))}
            <input {...field('email')} type="email" autoComplete="email" inputMode="email" />
            {error('email')}
          </div>
          <div>
            {label('budget', t(ui.contact.budget))}
            <select {...field('budget')} defaultValue="">
              <option value="">{t(ui.contact.choose)}</option>
              {contact.budgets.map((b, i) => (
                <option key={i}>{t(b)}</option>
              ))}
            </select>
          </div>
          <div>
            {label('type', t(ui.contact.type))}
            <select {...field('type')} defaultValue="">
              <option value="">{t(ui.contact.choose)}</option>
              {contact.types.map((b, i) => (
                <option key={i}>{t(b)}</option>
              ))}
            </select>
            {error('type')}
          </div>
          <div className="sm:col-span-2">
            {label('message', t(ui.contact.message))}
            <textarea {...field('message')} rows={5} />
            {error('message')}
          </div>
          {/* Honeypot: hidden from people, bots fill it in. */}
          <div aria-hidden="true" className="absolute -left-[9999px]">
            <label>
              Website <input type="text" name="website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          <div className="sm:col-span-2">
            <button type="submit" className="btn btn-primary w-full sm:w-auto">
              {t(ui.contact.send)}
            </button>
            <p role="status" className="mt-4 empty:hidden">
              {sent && (
                <span className="flex items-start gap-2 rounded-lg bg-sand p-3 text-sm">
                  <Info className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                  {t(ui.contact.demoSent)}
                </span>
              )}
            </p>
          </div>
        </form>
      </div>
    </Section>
  )
}

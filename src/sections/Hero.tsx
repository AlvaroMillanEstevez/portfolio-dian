import { ArrowRight, Download, MapPin } from 'lucide-react'
import { identity, platforms, site, ui } from '../data/profile'
import type { SectionConfig } from '../data/types'
import { ExternalLink } from '../components/ExternalLink'
import { Photo } from '../components/Photo'
import { Section } from '../components/Section'
import { SocialIcon } from '../components/SocialIcon'
import { asset, compact, percent } from '../lib/format'
import { useSettings } from '../lib/settings'
import { totals } from '../lib/totals'

export function Hero({ config }: { config: SectionConfig }) {
  const { t, lang } = useSettings()
  const quick = [
    { value: compact(totals.followers, lang), label: ui.heroStats.followers },
    { value: compact(totals.views90d, lang), label: ui.heroStats.views },
    { value: percent(totals.engagementRate, lang), label: ui.heroStats.engagement },
  ]
  // Keywords twice in a row so the band loops without a gap.
  const band = [...identity.keywords, ...identity.keywords]

  return (
    <Section config={config} className="hero-bg overflow-hidden pt-32 sm:pt-40">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 sm:px-6 sm:pb-24 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <div className="order-2 md:order-1">
          <p className="eyebrow mb-5 inline-flex items-center gap-1.5">
            <MapPin className="size-3.5" aria-hidden="true" />
            {t(identity.city)}
          </p>
          <h1 className="display text-7xl sm:text-9xl">
            {identity.firstName}
            <span className="sr-only"> {identity.lastName}</span>
          </h1>
          <p className="mt-2 text-sm text-muted">
            {identity.firstName} {identity.lastName} · {identity.handle}
          </p>
          <p className="display-quote mt-6 max-w-lg text-2xl leading-snug sm:text-3xl">{t(identity.tagline)}</p>
          <p className="mt-4 text-sm text-muted">{t(identity.roles)}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn btn-primary">
              {t(ui.workWithMe)} <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a href={asset(site.mediaKitPdf)} download className="btn btn-ghost">
              <Download className="size-4" aria-hidden="true" /> {t(ui.downloadKit)}
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-6">
            <ul className="flex gap-2">
              {platforms.map((p) => (
                <li key={p.id}>
                  <ExternalLink href={p.url} label={p.name} className="grid size-11 place-items-center rounded-full border border-line text-ink transition-colors hover:bg-ink hover:text-paper">
                    <SocialIcon id={p.id} className="size-[18px]" />
                  </ExternalLink>
                </li>
              ))}
            </ul>
            <dl className="flex gap-6">
              {quick.map((q, i) => (
                <div key={i} className="flex flex-col-reverse">
                  <dt className="text-[11px] text-muted">{t(q.label)}</dt>
                  <dd className="display text-2xl">{q.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="order-1 px-4 md:order-2 md:px-0">
          <div className="hero-frame mx-auto max-w-[22rem] md:max-w-none">
            <Photo photo={identity.portrait} eager className="hero-photo shadow-2xl shadow-ink/15" />
          </div>
        </div>
      </div>
      <div className="overflow-hidden border-y border-line bg-paper/60 py-4" aria-hidden="true">
        <div className="marquee">
          {band.map((k, i) => (
            <span key={i} className="display flex items-center px-6 text-2xl whitespace-nowrap text-ink/80 sm:text-3xl">
              {t(k)}
              <span className="ml-12 text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>
    </Section>
  )
}

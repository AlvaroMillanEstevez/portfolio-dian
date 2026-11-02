import { ArrowRight, Download } from 'lucide-react'
import { identity, platforms, site, ui } from '../data/profile'
import type { SectionConfig } from '../data/types'
import { Bougainvillea, FlightPath } from '../components/Brand'
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

  return (
    <Section config={config} className="hero-bg overflow-hidden pt-21 md:pt-36">
      <div className="mx-auto grid max-w-6xl items-center px-4 pb-16 sm:px-6 sm:pb-24 md:grid-cols-[1fr_1fr] md:gap-10">
        <div className="relative z-10 order-2 -mt-2 md:order-1 md:mt-0">
          <p className="eyebrow">{t(ui.hero.hello)}</p>
          <h1 className="display mt-3 text-6xl text-accent sm:text-7xl lg:text-8xl">
            <span className="flex items-end gap-2">
              {identity.firstName}
              <FlightPath className="mb-3 w-28 sm:w-40" />
            </span>
            <span className="block">{identity.lastName}</span>
          </h1>
          <p className="mt-5 text-lg">
            {t(identity.role)} {t(ui.hero.basedIn)} <em className="display-quote text-accent">{t(identity.city)}</em>
          </p>
          <p className="mt-3 max-w-md leading-relaxed text-muted">{t(identity.tagline)}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#videos" className="btn btn-primary">
              {t(ui.hero.viewPortfolio)} <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn-ghost">
              {t(ui.workWithMe)}
            </a>
          </div>
          <a href={asset(site.mediaKitPdf)} download className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent underline-offset-4 hover:underline">
            <Download className="size-4" aria-hidden="true" /> {t(ui.downloadKit)}
          </a>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-6">
            <ul className="flex gap-2">
              {platforms.map((p) => (
                <li key={p.id}>
                  <ExternalLink href={p.url} label={p.name} className="social-tile">
                    <SocialIcon id={p.id} className="size-[18px]" />
                  </ExternalLink>
                </li>
              ))}
            </ul>
            <dl className="flex gap-6">
              {quick.map((q, i) => (
                <div key={i} className="flex flex-col-reverse">
                  <dt className="text-[11px] text-muted">{t(q.label)}</dt>
                  <dd className="display text-2xl text-ink">{q.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="relative order-1 -mx-4 sm:-mx-6 md:order-2 md:mx-0">
          <Photo photo={identity.portrait} eager className="hero-photo" />
          <Bougainvillea className="pointer-events-none absolute top-3 -right-6 w-36 sm:w-56 md:-top-10 md:-right-12 md:w-64" />
        </div>
      </div>
    </Section>
  )
}

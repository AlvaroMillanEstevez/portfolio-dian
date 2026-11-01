import { ArrowRight, Download, MapPin } from 'lucide-react'
import { identity, platforms, site, ui } from '../data/profile'
import type { SectionConfig } from '../data/types'
import { ExternalLink } from '../components/ExternalLink'
import { Photo } from '../components/Photo'
import { Section } from '../components/Section'
import { SocialIcon } from '../components/SocialIcon'
import { asset } from '../lib/format'
import { useSettings } from '../lib/settings'

export function Hero({ config }: { config: SectionConfig }) {
  const { t } = useSettings()
  return (
    <Section config={config} className="hero-bg overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <div className="order-2 md:order-1">
          <p className="eyebrow mb-5 inline-flex items-center gap-1.5">
            <MapPin className="size-3.5" aria-hidden="true" />
            {t(identity.city)}
          </p>
          <h1 className="display text-6xl sm:text-8xl">
            {identity.firstName}
            <span className="block text-2xl sm:text-3xl text-muted mt-2 font-body font-normal tracking-normal">{identity.lastName}</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg sm:text-xl leading-relaxed text-ink/85">{t(identity.tagline)}</p>
          <p className="mt-3 text-sm text-muted">{t(identity.roles)}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn btn-primary">
              {t(ui.workWithMe)} <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a href={asset(site.mediaKitPdf)} download className="btn btn-ghost">
              <Download className="size-4" aria-hidden="true" /> {t(ui.downloadKit)}
            </a>
          </div>
          <ul className="mt-8 flex gap-2">
            {platforms.map((p) => (
              <li key={p.id}>
                <ExternalLink href={p.url} label={p.name} className="grid size-11 place-items-center rounded-full border border-line text-ink transition-colors hover:bg-ink hover:text-paper">
                  <SocialIcon id={p.id} className="size-[18px]" />
                </ExternalLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <Photo photo={identity.portrait} eager className="mx-auto max-w-sm md:max-w-none shadow-xl" />
        </div>
      </div>
    </Section>
  )
}

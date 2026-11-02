import { MapPin } from 'lucide-react'
import { identity, platforms, ui } from '../data/profile'
import type { SectionConfig } from '../data/types'
import { Badge } from '../components/Brand'
import { LangSwitch } from '../components/Chrome'
import { ExternalLink } from '../components/ExternalLink'
import { Section } from '../components/Section'
import { SocialIcon } from '../components/SocialIcon'
import { asset } from '../lib/format'
import { useSettings } from '../lib/settings'

const year = new Date().getFullYear()

/** The full logo from the brand board: Málaga drawing, name, role, location, signature and stamp. */
export function Footer({ config }: { config: SectionConfig }) {
  const { t } = useSettings()
  return (
    <Section as="footer" config={config} className="hero-bg border-t border-line pt-24 pb-24 sm:pt-28">
      <div data-reveal className="mx-auto flex max-w-6xl flex-col items-center px-4 text-center sm:px-6">
        <img src={asset('images/malaga-sketch.svg')} alt="" className="w-64 sm:w-80" />
        <p className="display mt-4 text-5xl text-accent sm:text-6xl">
          {identity.firstName} <span className="italic">{identity.lastName}</span>
        </p>
        <p className="eyebrow mt-4 flex items-center gap-3 text-[0.62rem] tracking-[0.18em] sm:text-[0.72rem] sm:tracking-[0.24em] sm:before:h-px sm:before:w-10 sm:before:bg-ink/40 sm:after:h-px sm:after:w-10 sm:after:bg-ink/40">
          {t(identity.roles)}
        </p>
        <p className="pill mt-6">
          <MapPin className="size-3.5" aria-hidden="true" />
          {t(identity.city)}
        </p>
        <p className="script mt-8 text-[1.7rem] whitespace-nowrap text-ink sm:text-5xl">
          {t(identity.motto)} <span className="text-accent">♡</span>
        </p>
        <div className="mt-12 flex flex-col items-center gap-8 sm:flex-row sm:gap-12">
          <Badge bottom={t(ui.footer.badge)} className="size-32" />
          <div className="flex flex-col items-center gap-4 sm:items-start">
            <ul className="flex gap-2">
              {platforms.map((p) => (
                <li key={p.id}>
                  <ExternalLink href={p.url} label={p.name} className="social-tile">
                    <SocialIcon id={p.id} className="size-[18px]" />
                  </ExternalLink>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <LangSwitch />
              <p className="text-xs text-muted">
                © {year} {identity.firstName}. {t(ui.footer.rights)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

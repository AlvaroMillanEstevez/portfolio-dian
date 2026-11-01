import { identity, platforms, ui } from '../data/profile'
import type { SectionConfig } from '../data/types'
import { LangSwitch } from '../components/Chrome'
import { ExternalLink } from '../components/ExternalLink'
import { Section } from '../components/Section'
import { SocialIcon } from '../components/SocialIcon'
import { useSettings } from '../lib/settings'

const year = new Date().getFullYear()

export function Footer({ config }: { config: SectionConfig }) {
  const { t } = useSettings()
  return (
    <Section as="footer" config={config} className="border-t border-line pt-20 pb-24 sm:pt-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:flex-row sm:items-end sm:justify-between sm:px-6">
        <div>
          <p className="display text-4xl">
            {identity.firstName} {identity.lastName}
          </p>
          <p className="mt-2 text-sm text-muted">{t(identity.roles)} · {t(identity.city)}</p>
        </div>
        <div className="flex flex-col gap-4 sm:items-end">
          <ul className="flex gap-2">
            {platforms.map((p) => (
              <li key={p.id}>
                <ExternalLink href={p.url} label={p.name} className="grid size-10 place-items-center rounded-full border border-line hover:bg-ink hover:text-paper">
                  <SocialIcon id={p.id} className="size-4" />
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
    </Section>
  )
}

import { ArrowUpRight } from 'lucide-react'
import { platforms, site, ui } from '../data/profile'
import type { SectionConfig } from '../data/types'
import { ExternalLink } from '../components/ExternalLink'
import { Heading, Section } from '../components/Section'
import { SocialIcon } from '../components/SocialIcon'
import { compact, percent } from '../lib/format'
import { useSettings } from '../lib/settings'
import { engagementRate, totals } from '../lib/totals'

export function Platforms({ config }: { config: SectionConfig }) {
  const { t, lang } = useSettings()
  return (
    <Section config={config} className="bg-sand/60 py-20 sm:py-28">
      <div data-reveal className="mx-auto max-w-6xl px-4 sm:px-6">
        <Heading eyebrow={t(site.dataAsOf)} title={t(ui.platforms.title)} />
        <ul className="grid gap-4 sm:grid-cols-2">
          {platforms.map((p) => {
            const share = (p.followers / totals.followers) * 100
            const metrics = [
              { label: ui.platforms.views, value: compact(p.viewsMonth, lang) },
              { label: ui.platforms.likes, value: compact(p.likes, lang) },
              { label: ui.platforms.engagement, value: percent(engagementRate(p), lang) },
              { label: ui.platforms.comments, value: compact(p.comments, lang) },
              { label: ui.platforms.shares, value: compact(p.shares, lang) },
            ]
            return (
              <li key={p.id} className="card flex flex-col p-6">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-full bg-ink text-paper">
                    <SocialIcon id={p.id} />
                  </span>
                  <div>
                    <h3 className="font-semibold">{p.name}</h3>
                    <p className="text-xs text-muted">{p.handle} · {t(p.label)}</p>
                  </div>
                </div>
                <p className="mt-6 text-xs text-muted">{t(ui.platforms.followers)}</p>
                <p className="display text-5xl">{compact(p.followers, lang)}</p>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-sand" aria-hidden="true">
                  <div className="h-full rounded-full bg-accent" style={{ width: `${share}%` }} />
                </div>
                <p className="mt-1.5 text-xs text-muted">
                  {percent(share, lang)} {t(ui.platforms.share)}
                </p>
                <p className="mt-6 border-t border-line pt-4 text-[11px] font-semibold tracking-wider text-muted uppercase">{t(ui.platforms.month)}</p>
                <dl className="mt-3 grid grid-cols-3 gap-3">
                  {metrics.map((m, i) => (
                    <div key={i}>
                      <dt className="text-[11px] text-muted">{t(m.label)}</dt>
                      <dd className="mt-0.5 font-semibold tabular-nums">{m.value}</dd>
                    </div>
                  ))}
                </dl>
                <ExternalLink href={p.url} className="mt-6 inline-flex items-center gap-1 self-start text-sm font-semibold text-accent">
                  {t(ui.platforms.visit)} <ArrowUpRight className="size-4" aria-hidden="true" />
                </ExternalLink>
              </li>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}

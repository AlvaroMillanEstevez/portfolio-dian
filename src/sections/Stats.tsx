import { site, ui } from '../data/profile'
import type { SectionConfig } from '../data/types'
import { Heading, Section } from '../components/Section'
import { compact, percent } from '../lib/format'
import { useSettings } from '../lib/settings'
import { totals } from '../lib/totals'

export function Stats({ config }: { config: SectionConfig }) {
  const { t, lang } = useSettings()
  const items = [
    { label: ui.stats.followers, value: compact(totals.followers, lang) },
    { label: ui.stats.views, value: compact(totals.viewsMonth, lang) },
    { label: ui.stats.likes, value: compact(totals.likes, lang) },
    { label: ui.stats.shares, value: compact(totals.shares, lang) },
    { label: ui.stats.engagement, value: percent(totals.engagementRate, lang) },
  ]
  return (
    <Section config={config} className="py-20 sm:py-28">
      <div data-reveal className="mx-auto max-w-6xl px-4 sm:px-6">
        <Heading eyebrow={t(site.dataAsOf)} title={t(ui.stats.title)} />
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line lg:grid-cols-5">
          {items.map((item, i) => (
            <div key={i} className={`bg-paper p-5 sm:p-7 ${i === 0 ? 'col-span-2 lg:col-span-1' : ''}`}>
              <dt className="text-xs text-muted sm:text-sm">{t(item.label)}</dt>
              <dd className="display mt-2 text-4xl sm:text-5xl">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}

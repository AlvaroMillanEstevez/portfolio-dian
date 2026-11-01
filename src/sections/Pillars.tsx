import { pillars } from '../data/profile'
import type { SectionConfig } from '../data/types'
import { Heading, Section } from '../components/Section'
import { percent } from '../lib/format'
import { useSettings } from '../lib/settings'

/** Fixed colour per pillar (categorical order). */
const swatch = ['bg-chart-1', 'bg-chart-2', 'bg-chart-3', 'bg-chart-4']

export function Pillars({ config }: { config: SectionConfig }) {
  const { t, lang } = useSettings()
  return (
    <Section config={config} className="py-20 sm:py-28">
      <div data-reveal className="mx-auto max-w-6xl px-4 sm:px-6">
        <Heading title={t(pillars.title)} />
        <div className="mb-10 flex h-4 gap-0.5 overflow-hidden rounded-full" role="img" aria-label={pillars.items.map((p) => `${t(p.name)} ${percent(p.share, lang)}`).join(', ')}>
          {pillars.items.map((p, i) => (
            <div key={p.key} className={`${swatch[i]} h-full`} style={{ width: `${p.share}%` }} title={`${t(p.name)} · ${percent(p.share, lang)}`} />
          ))}
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.items.map((p, i) => (
            <li key={p.key} className="card p-6">
              <div className="flex items-center justify-between">
                <span className={`size-3 rounded-full ${swatch[i]}`} aria-hidden="true" />
                <span className="display text-3xl">{percent(p.share, lang)}</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold">{t(p.name)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{t(p.text)}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

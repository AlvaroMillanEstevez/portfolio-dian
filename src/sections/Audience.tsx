import { audience, ui } from '../data/profile'
import type { Localized, SectionConfig, Share } from '../data/types'
import { Heading, Section } from '../components/Section'
import { percent } from '../lib/format'
import { useSettings } from '../lib/settings'

/** Horizontal bars, one hue: magnitude only. Bars are scaled to the largest value. */
function Bars({ title, data }: { title: Localized; data: Share[] }) {
  const { t, lang } = useSettings()
  const max = Math.max(...data.map((d) => d.value))
  return (
    <figure className="card p-6">
      <figcaption className="mb-5 font-semibold">{t(title)}</figcaption>
      <ul className="space-y-3">
        {data.map((d, i) => (
          <li key={i} className="grid grid-cols-[7.5rem_1fr_3rem] items-center gap-3 text-sm">
            <span className="truncate text-ink/85">{t(d.label)}</span>
            <span className="h-2.5 rounded-full bg-sand" aria-hidden="true">
              <span className="block h-full rounded-full bg-chart-1" style={{ width: `${(d.value / max) * 100}%` }} />
            </span>
            <span className="text-right tabular-nums text-muted">{percent(d.value, lang)}</span>
          </li>
        ))}
      </ul>
    </figure>
  )
}

function Gender() {
  const { t, lang } = useSettings()
  const tones = ['bg-chart-1', 'bg-chart-2', 'bg-chart-4']
  return (
    <figure className="card p-6">
      <figcaption className="mb-5 font-semibold">{t(ui.audience.gender)}</figcaption>
      <div className="flex h-10 gap-0.5 overflow-hidden rounded-lg" aria-hidden="true">
        {audience.gender.map((g, i) => (
          <div key={i} className={tones[i]} style={{ width: `${g.value}%` }} title={`${t(g.label)} · ${percent(g.value, lang)}`} />
        ))}
      </div>
      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        {audience.gender.map((g, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className={`size-2.5 rounded-full ${tones[i]}`} aria-hidden="true" />
            {t(g.label)} <span className="font-semibold tabular-nums">{percent(g.value, lang)}</span>
          </li>
        ))}
      </ul>
    </figure>
  )
}

function Hours() {
  const { t } = useSettings()
  const peak = Math.max(...audience.activeHours)
  return (
    <figure className="card p-6 md:col-span-2">
      <figcaption className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
        <span className="font-semibold">{t(ui.audience.hours)}</span>
        <span className="text-xs text-muted">{t(audience.activeHoursNote)}</span>
      </figcaption>
      <div className="flex h-32 items-end gap-[2px]" role="img" aria-label={`${t(ui.audience.hours)}: 13–14 h, 20–22 h`}>
        {audience.activeHours.map((v, h) => (
          <div
            key={h}
            title={`${h}:00 · ${v}`}
            className={`flex-1 rounded-t-[3px] ${v >= peak * 0.8 ? 'bg-chart-1' : 'bg-chart-1/35'}`}
            style={{ height: `${(v / peak) * 100}%` }}
          />
        ))}
      </div>
      <div className="mt-2 flex justify-between text-[11px] text-muted tabular-nums" aria-hidden="true">
        {[0, 6, 12, 18, 23].map((h) => (
          <span key={h}>{h}h</span>
        ))}
      </div>
    </figure>
  )
}

export function Audience({ config }: { config: SectionConfig }) {
  const { t } = useSettings()
  return (
    <Section config={config} className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Heading eyebrow={t(audience.source)} title={t(ui.audience.title)} />
        <div className="grid gap-4 md:grid-cols-2">
          <Bars title={ui.audience.age} data={audience.age} />
          <Gender />
          <Bars title={ui.audience.countries} data={audience.countries} />
          <Bars title={ui.audience.cities} data={audience.cities} />
          <Bars title={ui.audience.languages} data={audience.languages} />
          <Hours />
        </div>
      </div>
    </Section>
  )
}

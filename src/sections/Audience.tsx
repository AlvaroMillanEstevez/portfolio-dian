import { useState } from 'react'
import { audience, platforms, ui } from '../data/profile'
import type { AudienceSet, Localized, SectionConfig, Share } from '../data/types'
import { Heading, Section } from '../components/Section'
import { SocialIcon } from '../components/SocialIcon'
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

function Gender({ data }: { data: Share[] }) {
  const { t, lang } = useSettings()
  const tones = ['bg-chart-1', 'bg-chart-2', 'bg-chart-3']
  return (
    <figure className="card p-6">
      <figcaption className="mb-5 font-semibold">{t(ui.audience.gender)}</figcaption>
      <div className="flex h-10 gap-0.5 rounded-lg" aria-hidden="true">
        {data.map((g, i) => (
          <div key={i} className={`${tones[i]} first:rounded-l-lg last:rounded-r-lg`} style={{ width: `${g.value}%` }} data-tip={`${t(g.label)} · ${percent(g.value, lang)}`} />
        ))}
      </div>
      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        {data.map((g, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className={`size-2.5 rounded-full ${tones[i]}`} aria-hidden="true" />
            {t(g.label)} <span className="font-semibold tabular-nums">{percent(g.value, lang)}</span>
          </li>
        ))}
      </ul>
    </figure>
  )
}

function Hours({ set }: { set: AudienceSet }) {
  const { t } = useSettings()
  const hours = set.activeHours
  return (
    <figure className="card p-6 md:col-span-2">
      <figcaption className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
        <span className="font-semibold">{t(ui.audience.hours)}</span>
        {hours && (
          <span className="text-xs text-muted">
            {t(hours.day)} · {t(ui.audience.spanishTime)}
          </span>
        )}
      </figcaption>
      {hours && (
        <>
          <div className="grid h-32 items-end gap-1" style={{ gridTemplateColumns: `repeat(${hours.slots.length}, 1fr)` }} role="img" aria-label={t(set.peak)}>
            {hours.slots.map((s) => (
              <div key={s.label} data-tip={`${s.label} · ${s.value}`} className={`rounded-t-[4px] ${s.value >= 85 ? 'bg-chart-1' : 'bg-chart-1/35'}`} style={{ height: `${s.value}%` }} />
            ))}
          </div>
          <div className="mt-2 grid text-center text-[11px] text-muted tabular-nums" style={{ gridTemplateColumns: `repeat(${hours.slots.length}, 1fr)` }} aria-hidden="true">
            {hours.slots.map((s) => (
              <span key={s.label}>{s.label}</span>
            ))}
          </div>
        </>
      )}
      <p className={`text-sm ${hours ? 'mt-5' : ''}`}>{t(set.peak)}</p>
    </figure>
  )
}

export function Audience({ config }: { config: SectionConfig }) {
  const { t } = useSettings()
  const [active, setActive] = useState(audience[0].platform)
  const set = audience.find((a) => a.platform === active) ?? audience[0]
  return (
    <Section config={config} className="py-20 sm:py-28">
      <div data-reveal className="mx-auto max-w-6xl px-4 sm:px-6">
        <Heading eyebrow={t(set.period)} title={t(ui.audience.title)} />
        <div role="group" aria-label={t(ui.audience.choose)} className="mb-8 flex gap-2">
          {audience.map((a) => (
            <button key={a.platform} type="button" onClick={() => setActive(a.platform)} aria-pressed={a.platform === active} className={`chip gap-2 ${a.platform === active ? 'chip-on' : ''}`}>
              <SocialIcon id={a.platform} className="size-3.5" />
              {platforms.find((p) => p.id === a.platform)?.name}
            </button>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Bars title={ui.audience.countries} data={set.countries} />
          <Gender data={set.gender} />
          {set.age && <Bars title={ui.audience.age} data={set.age} />}
          {set.languages && <Bars title={ui.audience.languages} data={set.languages} />}
          <Hours set={set} />
        </div>
      </div>
    </Section>
  )
}

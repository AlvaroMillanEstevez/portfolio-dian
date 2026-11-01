import { caseStudies, site, ui } from '../data/profile'
import type { SectionConfig } from '../data/types'
import { Heading, Section } from '../components/Section'
import { compact } from '../lib/format'
import { useSettings } from '../lib/settings'

export function Cases({ config }: { config: SectionConfig }) {
  const { t, lang } = useSettings()
  return (
    <Section config={config} className="py-20 sm:py-28">
      <div data-reveal className="mx-auto max-w-6xl px-4 sm:px-6">
        <Heading title={t(ui.cases.title)} />
        <ul className="grid gap-4 lg:grid-cols-3">
          {caseStudies.map((c) => (
            <li key={c.brand} className="card flex flex-col p-6">
              <p className="eyebrow">{t(c.sector)}</p>
              <h3 className="display mt-2 text-3xl">{c.brand}</h3>
              {site.demo && <p className="mt-1 text-[11px] font-semibold text-review">{t(ui.cases.demoBrand)}</p>}
              <p className="mt-4 leading-relaxed text-ink/85">{t(c.campaign)}</p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-muted">{t(ui.cases.delivered)}</p>
              <ul className="mt-2 mb-6 space-y-1 text-sm">
                {c.deliverables.map((d, i) => (
                  <li key={i}>· {t(d)}</li>
                ))}
              </ul>
              <dl className="mt-auto grid grid-cols-3 gap-2 border-t border-line pt-5">
                {c.results.map((r, i) => (
                  <div key={i} className="flex flex-col-reverse">
                    <dt className="text-[11px] leading-tight text-muted">{t(r.label)}</dt>
                    <dd className="display text-2xl">{typeof r.value === 'number' ? compact(r.value, lang) : r.value}</dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

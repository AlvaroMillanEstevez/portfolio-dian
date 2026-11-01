import { skills, ui } from '../data/profile'
import type { SectionConfig } from '../data/types'
import { Heading, Section } from '../components/Section'
import { useSettings } from '../lib/settings'

export function Skills({ config }: { config: SectionConfig }) {
  const { t } = useSettings()
  return (
    <Section config={config} className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Heading title={t(ui.skills.title)} />
        <div className="grid gap-4 md:grid-cols-3">
          {skills.groups.map((g, i) => (
            <div key={i} className="card p-6">
              <h3 className="font-semibold">{t(g.title)}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item, j) => (
                  <li key={j} className="chip">{t(item)}</li>
                ))}
              </ul>
            </div>
          ))}
          <div className="card p-6">
            <h3 className="font-semibold">{t(ui.skills.languages)}</h3>
            <ul className="mt-4 space-y-4">
              {skills.languages.map((l, i) => (
                <li key={i}>
                  <div className="flex justify-between text-sm">
                    <span>{t(l.name)}</span>
                    <span className="text-muted">{t(l.level)}</span>
                  </div>
                  <div className="mt-1.5 h-1.5 rounded-full bg-sand" aria-hidden="true">
                    <div className="h-full rounded-full bg-chart-1" style={{ width: `${l.value}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}

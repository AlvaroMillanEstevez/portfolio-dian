import { timeline, ui } from '../data/profile'
import type { SectionConfig } from '../data/types'
import { Heading, Section } from '../components/Section'
import { useSettings } from '../lib/settings'

export function Timeline({ config }: { config: SectionConfig }) {
  const { t } = useSettings()
  return (
    <Section config={config} className="bg-sand/60 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Heading title={t(ui.timeline.title)} />
        <ol className="relative border-l border-line pl-8">
          {timeline.map((m, i) => (
            <li key={i} className="relative pb-10 last:pb-0">
              <span className="absolute top-1.5 -left-[37px] size-3 rounded-full border-2 border-paper bg-accent ring-1 ring-accent" aria-hidden="true" />
              <p className="display text-sm text-accent tabular-nums">{m.year}</p>
              <h3 className="mt-1 text-xl font-semibold">{t(m.title)}</h3>
              <p className="mt-1 text-muted">{t(m.text)}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}

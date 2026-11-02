import { services, ui } from '../data/profile'
import type { SectionConfig } from '../data/types'
import { Section } from '../components/Section'
import { useSettings } from '../lib/settings'

export function Services({ config }: { config: SectionConfig }) {
  const { t } = useSettings()
  return (
    <Section config={config} className="bg-ink py-20 text-paper sm:py-28">
      <div data-reveal className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="display mb-8 text-4xl text-butter sm:mb-12 sm:text-5xl">{t(ui.services.title)}</h2>
        <ol className="grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-paper/15 bg-paper/15 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <li key={i} className="bg-ink p-6 sm:p-8">
              <span className="display text-sm text-butter tabular-nums">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-3 text-lg font-semibold">{t(s.title)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/70">{t(s.text)}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}

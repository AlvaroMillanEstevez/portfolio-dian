import { site, testimonials, ui } from '../data/profile'
import type { SectionConfig } from '../data/types'
import { Heading, Section } from '../components/Section'
import { useSettings } from '../lib/settings'

export function Testimonials({ config }: { config: SectionConfig }) {
  const { t } = useSettings()
  return (
    <Section config={config} className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Heading title={t(ui.testimonials.title)} />
        <ul className="grid gap-4 md:grid-cols-3">
          {testimonials.map((q, i) => (
            <li key={i}>
              <figure className="card flex h-full flex-col p-6 sm:p-8">
                <span className="display text-6xl leading-none text-accent" aria-hidden="true">“</span>
                <blockquote className="display-quote mt-2 text-xl leading-snug">{t(q.quote)}</blockquote>
                <figcaption className="mt-auto pt-6 text-sm">
                  <span className="font-semibold">{q.brand}</span>
                  <span className="text-muted"> · {t(q.role)}</span>
                  {site.demo && <span className="block text-[11px] font-semibold text-review">{t(ui.cases.demoBrand)}</span>}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

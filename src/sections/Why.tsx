import { Clapperboard, Globe, Handshake, Heart } from 'lucide-react'
import { why } from '../data/profile'
import type { SectionConfig } from '../data/types'
import { Heading, Section } from '../components/Section'
import { useSettings } from '../lib/settings'

const icons = [Heart, Clapperboard, Globe, Handshake]

/** What a brand gets when working with Dian (in place of testimonials, until there are real ones). */
export function Why({ config }: { config: SectionConfig }) {
  const { t } = useSettings()
  return (
    <Section config={config} className="py-20 sm:py-28">
      <div data-reveal className="mx-auto max-w-6xl px-4 sm:px-6">
        <Heading title={t(why.title)} />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {why.items.map((item, i) => {
            const Icon = icons[i % icons.length]
            return (
              <li key={i} className="card flex flex-col p-6 sm:p-7">
                <span className={`grid size-12 place-items-center rounded-full ${i % 2 ? 'bg-butter' : 'bg-sky'}`} aria-hidden="true">
                  <Icon className="size-5 text-accent" strokeWidth={1.6} />
                </span>
                <h3 className="display mt-5 text-2xl text-accent">{t(item.title)}</h3>
                <p className="mt-3 leading-relaxed text-muted">{t(item.text)}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}

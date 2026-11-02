import { Clapperboard, CupSoda, Flower2, Luggage, MapPinned, ShoppingBag } from 'lucide-react'
import { pillars } from '../data/profile'
import type { SectionConfig } from '../data/types'
import { Heading, Section } from '../components/Section'
import { percent } from '../lib/format'
import { useSettings } from '../lib/settings'

const icons = { travel: Luggage, lifestyle: Flower2, vlog: Clapperboard, place: MapPinned, food: CupSoda, product: ShoppingBag }

export function Pillars({ config }: { config: SectionConfig }) {
  const { t, lang } = useSettings()
  return (
    <Section config={config} className="py-20 sm:py-28">
      <div data-reveal className="mx-auto max-w-6xl px-4 sm:px-6">
        <Heading title={t(pillars.title)} />
        <ul className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {pillars.items.map((p, i) => {
            const Icon = icons[p.icon]
            return (
              <li key={p.icon} className="text-center">
                <div className="relative mx-auto grid size-20 place-items-center">
                  <span className={`blob absolute inset-1 ${i % 2 ? 'bg-butter' : 'bg-sky'}`} style={{ rotate: `${i * 50}deg` }} aria-hidden="true" />
                  <Icon className="relative size-10 text-accent" strokeWidth={1.4} aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-semibold">{t(p.name)}</h3>
                <p className="mt-1 text-xs font-semibold text-accent tabular-nums">{percent(p.share, lang)}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t(p.text)}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}

import { MapPin } from 'lucide-react'
import { rates, ui } from '../data/profile'
import type { SectionConfig } from '../data/types'
import { Heading, Section } from '../components/Section'
import { money } from '../lib/format'
import { useSettings } from '../lib/settings'

export function Rates({ config }: { config: SectionConfig }) {
  const { t, lang } = useSettings()
  const { onLocation } = rates
  return (
    <Section config={config} className="bg-sand/60 py-20 sm:py-28">
      <div data-reveal className="mx-auto max-w-3xl px-4 sm:px-6">
        <Heading eyebrow={rates.showPrices ? undefined : t(ui.rates.onRequest)} title={t(ui.rates.title)} />
        <div className="card overflow-hidden">
          <table className="w-full text-left text-sm">
            <tbody className="divide-y divide-line">
              {rates.items.map((r, i) => (
                <tr key={i}>
                  <th scope="row" className="p-4 font-normal sm:p-5">
                    <span className="block font-semibold">{t(r.service)}</span>
                    <span className="text-muted">{t(r.detail)}</span>
                  </th>
                  {rates.showPrices && (
                    <td className="p-4 text-right whitespace-nowrap sm:p-5">
                      {r.from && <span className="mr-1 text-xs text-muted">{t(ui.rates.from)}</span>}
                      <span className="display text-xl tabular-nums">{money(r.price, rates.currency, lang)}</span>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-muted">{t(ui.rates.note)}</p>

        <div className="card mt-8 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-butter" aria-hidden="true">
              <MapPin className="size-5 text-accent" strokeWidth={1.6} />
            </span>
            <div>
              <h3 className="display text-2xl text-accent">{t(onLocation.title)}</h3>
              <p className="mt-1 text-muted">{t(onLocation.subtitle)}</p>
            </div>
          </div>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed">
            {onLocation.points.map((p, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {t(p)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

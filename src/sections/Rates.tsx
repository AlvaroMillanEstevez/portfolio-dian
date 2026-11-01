import { rates, ui } from '../data/profile'
import type { SectionConfig } from '../data/types'
import { Heading, Section } from '../components/Section'
import { money } from '../lib/format'
import { useSettings } from '../lib/settings'

export function Rates({ config }: { config: SectionConfig }) {
  const { t, lang } = useSettings()
  return (
    <Section config={config} className="bg-sand/60 py-20 sm:py-28">
      <div data-reveal className="mx-auto max-w-3xl px-4 sm:px-6">
        <Heading title={t(ui.rates.title)} />
        <div className="card overflow-hidden">
          <table className="w-full text-left text-sm">
            <tbody className="divide-y divide-line">
              {rates.items.map((r, i) => (
                <tr key={i}>
                  <th scope="row" className="p-4 font-normal sm:p-5">
                    <span className="block font-semibold">{t(r.service)}</span>
                    <span className="text-muted">{t(r.detail)}</span>
                  </th>
                  <td className="p-4 text-right whitespace-nowrap sm:p-5">
                    {rates.showPrices ? (
                      <>
                        {r.from && <span className="mr-1 text-xs text-muted">{t(ui.rates.from)}</span>}
                        <span className="display text-xl tabular-nums">{money(r.price, rates.currency, lang)}</span>
                      </>
                    ) : (
                      <span className="text-muted">{t(ui.rates.onRequest)}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-muted">{t(ui.rates.note)}</p>
      </div>
    </Section>
  )
}

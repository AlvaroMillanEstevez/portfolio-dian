import { sections, ui } from './data/profile'
import { DemoBand, Header, VariantPicker } from './components/Chrome'
import { sectionComponents } from './sections'
import { useReveal } from './lib/reveal'
import { useSettings } from './lib/settings'

export default function App() {
  const { t } = useSettings()
  useReveal()
  const visible = sections.filter((s) => s.enabled)
  const main = visible.filter((s) => s.id !== 'footer')
  const footer = visible.find((s) => s.id === 'footer')
  const FooterSection = sectionComponents.footer

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-10 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper">
        {t(ui.skipToContent)}
      </a>
      <DemoBand />
      <Header />
      <main id="main">
        {main.map((config) => {
          const Component = sectionComponents[config.id]
          return <Component key={config.id} config={config} />
        })}
      </main>
      {footer && <FooterSection config={footer} />}
      <VariantPicker />
    </>
  )
}

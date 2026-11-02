import { about, sections } from '../data/profile'
import type { SectionConfig } from '../data/types'
import { Photo } from '../components/Photo'
import { Heading, Section } from '../components/Section'
import { useSettings } from '../lib/settings'

export function About({ config }: { config: SectionConfig }) {
  const { t } = useSettings()
  const [tall, wide, square] = about.photos
  const eyebrow = sections.find((s) => s.id === 'about')?.nav
  return (
    <Section config={config} className="bg-sand/60 py-20 sm:py-28">
      <div data-reveal className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:gap-16">
        <div>
          <Heading eyebrow={eyebrow && t(eyebrow)} title={t(about.title)} />
          <div className="space-y-5 text-lg leading-relaxed text-ink/85">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{t(p)}</p>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {tall && (
            <figure className="polaroid row-span-2 self-start">
              <Photo photo={tall} className="rounded-none" />
              <figcaption className="script py-2 text-center text-3xl text-ink">
                {t(about.polaroid)} <span className="text-accent">♡</span>
              </figcaption>
            </figure>
          )}
          {square && <Photo photo={square} />}
          {wide && <Photo photo={wide} className="col-span-2 order-last" />}
        </div>
      </div>
    </Section>
  )
}

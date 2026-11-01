import { useState } from 'react'
import { Bookmark, Eye, Heart, Play, Share2 } from 'lucide-react'
import { categories, platforms, ui, videos } from '../data/profile'
import type { Category, SectionConfig } from '../data/types'
import { ExternalLink } from '../components/ExternalLink'
import { Photo } from '../components/Photo'
import { Heading, Section } from '../components/Section'
import { SocialIcon } from '../components/SocialIcon'
import { compact } from '../lib/format'
import { useSettings } from '../lib/settings'

export function Videos({ config }: { config: SectionConfig }) {
  const { t, lang } = useSettings()
  const [filter, setFilter] = useState<Category | 'all'>('all')
  const shown = filter === 'all' ? videos : videos.filter((v) => v.category === filter)
  const filters = [{ key: 'all' as const, label: ui.videos.all }, ...categories]

  return (
    <Section config={config} className="bg-sand/60 py-20 sm:py-28">
      <div data-reveal className="mx-auto max-w-6xl px-4 sm:px-6">
        <Heading title={t(ui.videos.title)} />
        <div role="group" aria-label={t(ui.videos.filterLabel)} className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-1">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              aria-pressed={filter === f.key}
              className={`chip ${filter === f.key ? 'chip-on' : ''}`}
            >
              {t(f.label)}
            </button>
          ))}
        </div>
        <ul className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {shown.map((v) => {
            const platform = platforms.find((p) => p.id === v.platform)
            const stats = [
              { icon: Eye, label: ui.videos.views, value: v.views },
              { icon: Heart, label: ui.videos.likes, value: v.likes },
              { icon: Bookmark, label: ui.videos.saves, value: v.saves },
              { icon: Share2, label: ui.videos.shares, value: v.shares },
            ]
            return (
              <li key={v.id} className="card overflow-hidden">
                <div className="relative">
                  <Photo photo={v.thumbnail} className="rounded-none" />
                  <span className="absolute top-2 left-2 inline-flex items-center gap-1.5 rounded-full bg-ink/75 px-2.5 py-1 text-[11px] font-medium text-paper backdrop-blur-sm">
                    <SocialIcon id={v.platform} className="size-3" /> {platform?.name}
                  </span>
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="text-sm leading-snug font-semibold sm:text-base">{t(v.title)}</h3>
                  <dl className="mt-3 grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs text-muted sm:grid-cols-4">
                    {stats.map(({ icon: Icon, label, value }, i) => (
                      <div key={i} className="flex items-center gap-1" title={t(label)}>
                        <dt>
                          <Icon className="size-3.5" aria-hidden="true" />
                          <span className="sr-only">{t(label)}</span>
                        </dt>
                        <dd className="font-medium tabular-nums text-ink">{compact(value, lang)}</dd>
                      </div>
                    ))}
                  </dl>
                  <ExternalLink href={v.url} className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-accent">
                    <Play className="size-3.5" aria-hidden="true" /> {t(ui.videos.watch)}
                  </ExternalLink>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}

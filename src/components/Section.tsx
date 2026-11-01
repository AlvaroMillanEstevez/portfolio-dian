import type { ReactNode } from 'react'
import { site, ui } from '../data/profile'
import type { SectionConfig } from '../data/types'

type Props = { config: SectionConfig; className?: string; children: ReactNode; as?: 'section' | 'footer' }

/** Wraps every section: anchor id, review number and the folding note for Dian. */
export function Section({ config, className = '', children, as: Tag = 'section' }: Props) {
  return (
    <Tag id={config.id} data-section={config.number} className={`relative scroll-mt-24 ${className}`}>
      {site.reviewMode && <ReviewTag config={config} />}
      {children}
    </Tag>
  )
}

function ReviewTag({ config }: { config: SectionConfig }) {
  return (
    <div className="review-tag pointer-events-none absolute inset-x-0 top-3 z-20 px-4 sm:px-6">
      <div className="mx-auto flex max-w-6xl items-start gap-3">
        <span className="review-number" aria-label={`Sección ${config.number}`}>
          {config.number}
        </span>
        <details className="pointer-events-auto max-w-sm rounded-xl border border-review/40 bg-paper/95 text-xs text-ink shadow-sm backdrop-blur">
          <summary className="cursor-pointer select-none px-3 py-2 font-semibold text-review">
            {ui.review.note.es} · {ui.review.note.id}
          </summary>
          <div className="space-y-2 px-3 pb-3 leading-relaxed">
            <p>
              <span className="font-semibold">ES · </span>
              {config.note.es}
            </p>
            <p>
              <span className="font-semibold">ID · </span>
              {config.note.id}
            </p>
          </div>
        </details>
      </div>
    </div>
  )
}

/** Shared section heading. */
export function Heading({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <header className="mb-8 sm:mb-12">
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="display text-3xl sm:text-5xl">{title}</h2>
    </header>
  )
}

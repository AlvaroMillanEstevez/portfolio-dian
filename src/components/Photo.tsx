import { useState } from 'react'
import { site } from '../data/profile'
import type { Photo as PhotoData } from '../data/types'
import { asset } from '../lib/format'
import { useSettings } from '../lib/settings'

type Props = { photo: PhotoData; className?: string; eager?: boolean }

/** A photo with its exact aspect ratio. In review mode it shows which photo belongs here. */
export function Photo({ photo, className = '', eager = false }: Props) {
  const { t } = useSettings()
  const [failed, setFailed] = useState(false)

  return (
    <figure className={`relative overflow-hidden rounded-[var(--radius-media)] bg-sand ${className}`} style={{ aspectRatio: photo.ratio }}>
      {!failed && (
        <img
          src={asset(photo.src)}
          alt={t(photo.alt)}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setFailed(true)}
          className="absolute inset-0 size-full object-cover"
        />
      )}
      {site.reviewMode && (
        <figcaption className="absolute inset-x-2 bottom-2 z-10 rounded-md bg-ink/75 px-2.5 py-1.5 text-[11px] leading-snug text-paper backdrop-blur-sm">
          <span className="font-semibold">📷 {photo.ratio.replace('/', ':')}</span> · {photo.brief.es}
          <span className="block opacity-75">{photo.brief.id}</span>
        </figcaption>
      )}
    </figure>
  )
}

import { siInstagram, siTiktok } from 'simple-icons'
import type { PlatformId } from '../data/types'

// Brand glyphs from Simple Icons (CC0), drawn in the current text colour.
const icons = { tiktok: siTiktok, instagram: siInstagram }

export function SocialIcon({ id, className = 'size-5' }: { id: PlatformId; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d={icons[id].path} />
    </svg>
  )
}

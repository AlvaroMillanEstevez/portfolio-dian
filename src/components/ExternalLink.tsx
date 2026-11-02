import type { ReactNode } from 'react'
import { ui } from '../data/profile'
import { useSettings } from '../lib/settings'

type Props = { href: string; className?: string; children: ReactNode; label?: string }

/** Opens in a new tab. With an empty href (demo data) it renders as an inactive element. */
export function ExternalLink({ href, className, children, label }: Props) {
  const { t } = useSettings()
  if (!href) {
    return (
      <span className={`${className ?? ''} cursor-not-allowed opacity-80`} title={t(ui.review.demoLink)} aria-label={label}>
        {children}
      </span>
    )
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} aria-label={label}>
      {children}
    </a>
  )
}

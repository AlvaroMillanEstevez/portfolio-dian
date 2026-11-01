import { useEffect } from 'react'

/**
 * Fades sections in as they scroll into view. Elements opt in with data-reveal.
 * Skipped entirely with prefers-reduced-motion, so content is never hidden for those users.
 */
export function useReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
    const root = document.documentElement
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    )
    root.classList.add('reveal-ready')
    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))
    return () => {
      observer.disconnect()
      root.classList.remove('reveal-ready')
    }
  }, [])
}

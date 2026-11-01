import type { SectionConfig, SectionId } from '../data/types'
import { About } from './About'
import { Audience } from './Audience'
import { Cases } from './Cases'
import { Contact } from './Contact'
import { Footer } from './Footer'
import { Hero } from './Hero'
import { Pillars } from './Pillars'
import { Platforms } from './Platforms'
import { Rates } from './Rates'
import { Services } from './Services'
import { Skills } from './Skills'
import { Stats } from './Stats'
import { Testimonials } from './Testimonials'
import { Timeline } from './Timeline'
import { Videos } from './Videos'

/** Maps each section id in profile.ts to its component. */
export const sectionComponents: Record<SectionId, (props: { config: SectionConfig }) => React.JSX.Element> = {
  hero: Hero,
  stats: Stats,
  about: About,
  pillars: Pillars,
  platforms: Platforms,
  audience: Audience,
  videos: Videos,
  cases: Cases,
  services: Services,
  skills: Skills,
  timeline: Timeline,
  testimonials: Testimonials,
  rates: Rates,
  contact: Contact,
  footer: Footer,
}

// Shapes of the content in profile.ts. Components only read these types.

export type Lang = 'en' | 'es'

/** Text shown on the website, in every site language. */
export type Localized = Record<Lang, string>

/** Review-mode notes for Dian: Spanish and Indonesian, never shown with review mode off. */
export type ReviewNote = { es: string; id: string }

export type PlatformId = 'tiktok' | 'instagram' | 'youtube' | 'facebook'
export type Category = 'travel' | 'food' | 'lifestyle'

export type SectionId =
  | 'hero'
  | 'stats'
  | 'about'
  | 'pillars'
  | 'platforms'
  | 'audience'
  | 'videos'
  | 'cases'
  | 'services'
  | 'skills'
  | 'timeline'
  | 'testimonials'
  | 'rates'
  | 'contact'
  | 'footer'

export type SectionConfig = {
  id: SectionId
  /** false hides the section (and its menu link) without touching any component. */
  enabled: boolean
  /** Fixed number used in review mode, so feedback like "remove 11" stays valid. */
  number: number
  /** Menu label; sections without one are not listed in the menu. */
  nav?: Localized
  note: ReviewNote
}

/**
 * A photo slot. `src` is relative to public/ (e.g. "images/hero-portrait.svg").
 * `ratio` is the exact aspect ratio the real photo must have.
 */
export type Photo = {
  src: string
  ratio: '4/5' | '9/16' | '3/2' | '1/1'
  alt: Localized
  /** What photo goes here: shown on the placeholder in review mode. */
  brief: ReviewNote
}

export type Platform = {
  id: PlatformId
  name: string
  handle: string
  /** Leave empty in the demo: a made-up handle could belong to a real person. */
  url: string
  followers: number
  /** Videos published in the last 90 days. */
  videos90d: number
  /** Total views in the last 90 days. Average views = views90d / videos90d. */
  views90d: number
  /** Engagement rate in %, (likes + comments + saves + shares) / views. */
  engagementRate: number
  /** Follower growth in the last 90 days, in %. */
  growth90d: number
  label: Localized
}

export type Video = {
  id: string
  category: Category
  platform: PlatformId
  title: Localized
  thumbnail: Photo
  views: number
  likes: number
  saves: number
  shares: number
  url: string
}

export type CaseStudy = {
  brand: string
  sector: Localized
  campaign: Localized
  deliverables: Localized[]
  /** Numbers are formatted per language; text (e.g. a discount code) is shown as is. */
  results: { label: Localized; value: number | string }[]
}

export type Testimonial = {
  quote: Localized
  role: Localized
  brand: string
}

export type Rate = {
  service: Localized
  detail: Localized
  /** Price in EUR; shown only when rates.showPrices is true. */
  price: number
  from?: boolean
}

export type Share = { label: Localized; value: number }

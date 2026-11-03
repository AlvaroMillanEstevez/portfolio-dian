// Shapes of the content in profile.ts. Components only read these types.

export type Lang = 'en' | 'es'

/** Text shown on the website, in every site language. */
export type Localized = Record<Lang, string>

/** Review-mode notes for Dian: Spanish and Indonesian, never shown with review mode off. */
export type ReviewNote = { es: string; id: string }

export type PlatformId = 'tiktok' | 'instagram'
export type Category = 'travel' | 'food' | 'vlog' | 'fashion'

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
  | 'why'
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
 * `ratio` is the aspect ratio of the frame; the image is cropped to fill it.
 */
export type Photo = {
  src: string
  ratio: '4/5' | '9/16' | '3/2' | '1/1'
  /** Which part of the photo stays in view when it is cropped (CSS object-position). */
  focus?: string
  alt: Localized
  /** What photo goes here: shown on the placeholder in review mode. */
  brief: ReviewNote
}

export type Platform = {
  id: PlatformId
  name: string
  handle: string
  url: string
  followers: number
  /** Totals for the month in site.dataAsOf, from the platform's own analytics. */
  viewsMonth: number
  likes: number
  comments: number
  shares: number
  label: Localized
}

/** A piece of work in the portfolio: a video or a photo post. */
export type Video = {
  id: string
  category: Category
  platform: PlatformId
  kind: 'video' | 'photo'
  title: Localized
  thumbnail: Photo
  url: string
  /** Public numbers, when the platform shows them. */
  stats?: { views: number; likes: number; saves: number; shares: number }
}

export type CaseStudy = {
  brand: string
  sector: Localized
  campaign: Localized
  deliverables: Localized[]
  /** Numbers are formatted per language; text (e.g. a discount code) is shown as is. */
  results: { label: Localized; value: number | string }[]
}

export type Rate = {
  service: Localized
  detail: Localized
  /** Price in EUR; shown only when rates.showPrices is true. */
  price: number
  from?: boolean
}

export type Share = { label: Localized; value: number }

/** Audience insights of one platform. Charts without data are not shown. */
export type AudienceSet = {
  platform: PlatformId
  period: Localized
  gender: Share[]
  age?: Share[]
  countries: Share[]
  languages?: Share[]
  /** Relative activity (0–100) per time slot on one day. */
  activeHours?: { day: Localized; slots: { label: string; value: number }[] }
  peak: Localized
}

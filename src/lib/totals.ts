import { platforms } from '../data/profile'
import type { Platform } from '../data/types'

/** (likes + comments + shares) / views, in %. */
export const engagementRate = (p: Pick<Platform, 'likes' | 'comments' | 'shares' | 'viewsMonth'>) =>
  ((p.likes + p.comments + p.shares) / p.viewsMonth) * 100

// Section 2 is derived from section 5, so the totals always match the per-platform numbers.
const sum = (pick: (p: Platform) => number) => platforms.reduce((acc, p) => acc + pick(p), 0)

const month = {
  viewsMonth: sum((p) => p.viewsMonth),
  likes: sum((p) => p.likes),
  comments: sum((p) => p.comments),
  shares: sum((p) => p.shares),
}

export const totals = {
  followers: sum((p) => p.followers),
  ...month,
  engagementRate: engagementRate(month),
}

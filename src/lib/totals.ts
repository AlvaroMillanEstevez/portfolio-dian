import { growth6m, platforms } from '../data/profile'

// Section 2 is derived from section 5, so the totals always match the per-platform numbers.
const sum = (pick: (p: (typeof platforms)[number]) => number) => platforms.reduce((acc, p) => acc + pick(p), 0)

const views90d = sum((p) => p.views90d)

export const totals = {
  followers: sum((p) => p.followers),
  views90d,
  avgViews: Math.round(views90d / sum((p) => p.videos90d)),
  /** Engagement weighted by views, so a small platform does not skew the average. */
  engagementRate: sum((p) => p.engagementRate * p.views90d) / views90d,
  growth6m,
}
